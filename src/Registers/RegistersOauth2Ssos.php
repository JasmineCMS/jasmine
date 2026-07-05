<?php

namespace Jasmine\Jasmine\Registers;

use Closure;

trait RegistersOauth2Ssos
{
    /** @var array<string, array<string, mixed>> */
    private array $oauth2Ssos = [];

    public function registerOauth2Sso(
        string $name,
        string $icon,
        string $client_id,
        string $client_secret,
        string $authorize_url,
        string $token_url,
        array $scopes,
        Closure|bool $allowCreate,
        Closure $userDataCallback,
    ): void {
        $this->oauth2Ssos[$name] = compact(
            'name',
            'icon',
            'client_id',
            'client_secret',
            'authorize_url',
            'token_url',
            'scopes',
            'allowCreate',
            'userDataCallback',
        );
    }

    /**
     * @return array<string, array{
     *      name: string,
     *      icon: string,
     *      client_id: string,
     *      client_secret: string,
     *      authorize_url: string,
     *      token_url: string,
     *      scopes: array,
     *      allowCreate: Closure|bool,
     *      userDataCallback: Closure,
     * }>
     */
    public function getOauth2Ssos(): array {
        return $this->oauth2Ssos;
    }

    /**
     * @return null|array{
     *      name: string,
     *      icon: string,
     *      client_id: string,
     *      client_secret: string,
     *      authorize_url: string,
     *      token_url: string,
     *      scopes: array,
     *      allowCreate: Closure|bool,
     *      userDataCallback: Closure,
     * }
     */
    public function getOauth2Sso(string $name): ?array {
        return $this->oauth2Ssos[$name] ?? null;
    }
}
