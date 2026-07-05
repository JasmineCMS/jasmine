<?php

namespace Jasmine\Jasmine\WebAuthn;

use Illuminate\Support\Str;
use Jasmine\Jasmine\Models\JasmineUser;
use Jasmine\Jasmine\Models\JasmineWebauthnCredential;
use ParagonIE\ConstantTime\Base64UrlSafe;
use RuntimeException;
use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Normalizer\AbstractObjectNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use Webauthn\AttestationStatement\AttestationStatementSupportManager;
use Webauthn\AuthenticatorAssertionResponse;
use Webauthn\AuthenticatorAssertionResponseValidator;
use Webauthn\AuthenticatorAttestationResponse;
use Webauthn\AuthenticatorAttestationResponseValidator;
use Webauthn\AuthenticatorSelectionCriteria;
use Webauthn\CeremonyStep\CeremonyStepManagerFactory;
use Webauthn\CredentialRecord;
use Webauthn\Denormalizer\WebauthnSerializerFactory;
use Webauthn\PublicKeyCredential;
use Webauthn\PublicKeyCredentialCreationOptions;
use Webauthn\PublicKeyCredentialParameters;
use Webauthn\PublicKeyCredentialRequestOptions;
use Webauthn\PublicKeyCredentialRpEntity;
use Webauthn\PublicKeyCredentialUserEntity;

/**
 * Thin wrapper over web-auth/webauthn-lib (5.x) scoped to Jasmine's needs.
 * Holds the registration ceremony today; the assertion/login ceremony will
 * reuse the same serializer + rpId helpers.
 */
class WebAuthnService
{
    /** The library's serializer is the canonical (de)serializer for all WebAuthn DTOs in 5.x. */
    public function serializer(): SerializerInterface {
        return new WebauthnSerializerFactory(AttestationStatementSupportManager::create())->create();
    }

    /** Relying Party ID — must match the registrable domain the browser is on. */
    public function rpId(): string {
        return config('jasmine.webauthn.rp_id')
            ?: (parse_url((string)config('app.url'), PHP_URL_HOST) ?: 'localhost');
    }

    public function rpName(): string {
        return (string)(config('jasmine.webauthn.rp_name') ?: config('app.name', 'Jasmine'));
    }

    /**
     * Exact origin(s) the browser is allowed to report (scheme + host + port).
     * Distinct from rpId(): origin validation is EXACT since webauthn-lib 5.2.4
     * (CVE-2026-30964 removed the old host-only leniency), so scheme and port
     * must match what the browser sends in clientDataJSON.
     *
     * @return string[]
     */
    public function allowedOrigins(): array {
        $configured = config('jasmine.webauthn.allowed_origins');

        return !empty($configured) ? (array)$configured : [$this->origin()];
    }

    /** Public-facing origin from APP_URL, normalized to scheme://host[:port]. */
    public function origin(): string {
        $parts = parse_url((string)(config('jasmine.webauthn.origin') ?: config('app.url')));
        $origin = ($parts['scheme'] ?? 'https') . '://' . ($parts['host'] ?? 'localhost');

        if (isset($parts['port'])) $origin .= ':' . $parts['port'];

        return $origin;
    }

    public function userEntity(JasmineUser $user): PublicKeyCredentialUserEntity {
        // Lazily mint a stable opaque handle. Never PII, never the email or PK.
        if (!$user->webauthn_user_handle) {
            $user->webauthn_user_handle = Str::random(32);
            $user->save();
        }

        return PublicKeyCredentialUserEntity::create(
            $user->email,                // name (label some authenticators surface)
            $user->webauthn_user_handle, // id  (opaque user handle)
            $user->name,                 // displayName
        );
    }

    /**
     * Build attestation (registration) options. The caller must persist the
     * serialized result in the session so the challenge can be checked on return.
     */
    public function creationOptions(JasmineUser $user): PublicKeyCredentialCreationOptions {
        // Exclude already-registered authenticators so the same key can't double-register.
        $exclude = $user->webauthnCredentials()->get()
            ->map(fn($c) => $this->serializer()->deserialize(
                json_encode($c->source), CredentialRecord::class, 'json',
            )->getPublicKeyCredentialDescriptor())
            ->all();

        return PublicKeyCredentialCreationOptions::create(
            rp: PublicKeyCredentialRpEntity::create($this->rpName(), $this->rpId()),
            user: $this->userEntity($user),
            challenge: random_bytes(32),
            pubKeyCredParams: [
                PublicKeyCredentialParameters::create('public-key', -7),   // ES256
                PublicKeyCredentialParameters::create('public-key', -257), // RS256
            ],
            authenticatorSelection: AuthenticatorSelectionCriteria::create(
                userVerification: AuthenticatorSelectionCriteria::USER_VERIFICATION_REQUIREMENT_PREFERRED,
            ),
            attestation: PublicKeyCredentialCreationOptions::ATTESTATION_CONVEYANCE_PREFERENCE_NONE,
            excludeCredentials: $exclude,
        );
    }

    public function serializeOptions(
        PublicKeyCredentialCreationOptions|PublicKeyCredentialRequestOptions $options,
    ): string {
        return $this->serializer()->serialize($options, 'json', [
            AbstractObjectNormalizer::SKIP_NULL_VALUES => true, // required for valid WebAuthn JSON
            JsonEncode::OPTIONS                        => JSON_THROW_ON_ERROR,
        ]);
    }

    /**
     * Verify the browser's attestation response against the options we issued.
     * Returns the credential source to persist, or throws on any failure.
     */
    public function verifyRegistration(
        string $clientResponseJson,
        PublicKeyCredentialCreationOptions $options,
    ): CredentialRecord {
        $credential = $this->serializer()->deserialize(
            $clientResponseJson, PublicKeyCredential::class, 'json',
        );

        if (!$credential->response instanceof AuthenticatorAttestationResponse) {
            throw new RuntimeException('Not an attestation response.');
        }

        $csmFactory = new CeremonyStepManagerFactory;
        $csmFactory->setAllowedOrigins($this->allowedOrigins());
        $csm = $csmFactory->creationCeremony();

        return AuthenticatorAttestationResponseValidator::create($csm)->check(
            $credential->response,
            $options,
            $this->rpId(),
        );
    }

    /**
     * Build assertion (login) options scoped to this user's registered keys.
     * Second-factor flow: the user is already known, so allowCredentials is set.
     */
    public function requestOptions(JasmineUser $user): PublicKeyCredentialRequestOptions {
        $allow = $user->webauthnCredentials()->get()
            ->map(fn($c) => $this->serializer()->deserialize(
                json_encode($c->source), CredentialRecord::class, 'json',
            )->getPublicKeyCredentialDescriptor())
            ->all();

        return PublicKeyCredentialRequestOptions::create(
            challenge: random_bytes(32),
            rpId: $this->rpId(),
            allowCredentials: $allow,
            userVerification: PublicKeyCredentialRequestOptions::USER_VERIFICATION_REQUIREMENT_PREFERRED,
        );
    }

    /**
     * Verify a login assertion against the options we issued, for a known user.
     * Looks up the credential, validates, persists the bumped signature counter
     * (clone detection) and last_used_at, and returns the matched model.
     * Throws on any failure (unknown credential, bad signature, counter regression).
     */
    public function verifyAssertion(
        JasmineUser $user,
        string $clientResponseJson,
        PublicKeyCredentialRequestOptions $options,
    ): JasmineWebauthnCredential {
        $pkc = $this->serializer()->deserialize(
            $clientResponseJson, PublicKeyCredential::class, 'json',
        );

        if (!$pkc->response instanceof AuthenticatorAssertionResponse) {
            throw new RuntimeException('Not an assertion response.');
        }

        // Scope the lookup to THIS user's keys, so a credential belonging to
        // someone else can never satisfy the challenge.
        $model = $user->webauthnCredentials()
            ->where('credential_id', Base64UrlSafe::encodeUnpadded($pkc->rawId))
            ->first();

        if ($model === null) throw new RuntimeException('Unknown credential.');

        $record = $this->serializer()->deserialize(
            json_encode($model->source), CredentialRecord::class, 'json',
        );

        $csmFactory = new CeremonyStepManagerFactory;
        $csmFactory->setAllowedOrigins($this->allowedOrigins());
        $csm = $csmFactory->requestCeremony();

        $updated = AuthenticatorAssertionResponseValidator::create($csm)->check(
            $record,
            $pkc->response,
            $options,
            $this->rpId(),
            $user->webauthn_user_handle,
        );

        $model->source = json_decode($this->serializer()->serialize($updated, 'json'), true);
        $model->last_used_at = now();
        $model->save();

        return $model;
    }
}
