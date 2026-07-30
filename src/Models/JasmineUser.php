<?php

namespace Jasmine\Jasmine\Models;

use Illuminate\Database\Eloquent\Casts\ArrayObject;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Jasmine\Jasmine\Bread\Breadable;
use Jasmine\Jasmine\Bread\BreadableContext;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\GroupedField;
use Jasmine\Jasmine\Bread\Fields\InputField;
use Jasmine\Jasmine\Bread\Fields\SwitchField;
use Jasmine\Jasmine\Bread\Manifest\Action;
use Jasmine\Jasmine\Bread\Manifest\Column;
use Jasmine\Jasmine\Bread\Manifest\Section;
use Jasmine\Jasmine\Database\Factories\JasmineUserFactory;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Http\Controllers\AuthController;
use Jasmine\Jasmine\Notifications\OnboardingInvite;

/**
 * @property string      $name
 * @property string      $email
 * @property bool        $admin
 * @property ArrayObject $permissions
 * @property string      $password
 * @property string      $otp_secret
 * @property string      $webauthn_user_handle
 */
class JasmineUser extends Authenticatable implements BreadableInterface
{
    use Breadable {
        browseActions as private defaultBrowseActions;
    }

    /** @use HasFactory<JasmineUserFactory> */
    use HasFactory, Notifiable;

    protected static string $factory = JasmineUserFactory::class;

    protected $fillable = [
        'name',
        'email',
        'admin',
        'permissions',
        'password',
    ];

    protected $hidden = [
        'password',
        'otp_secret',
        'otp_remember_token',
        'webauthn_user_handle',
        'remember_token',
    ];

    protected function casts(): array {
        return [
            'admin'             => 'boolean',
            'permissions'       => AsArrayObject::class,
            'email_verified_at' => 'datetime',
            'password'          => 'hashed',
            'otp_secret'        => 'encrypted',
            'otp_last_used'     => 'datetime',
        ];
    }

    public function webauthnCredentials(): HasMany {
        return $this->hasMany(JasmineWebauthnCredential::class);
    }

    public function apiTokens(): HasMany {
        return $this->hasMany(JasmineUserApiToken::class);
    }

    public function avatarUrl(): Attribute {
        return Attribute::get(function () {
            $uiAvatar = 'https://ui-avatars.com/api/' . urlencode($this->name ?? 'X') . '/100/EBF4FF/7F9CF5';

            if (!$this->email) return $uiAvatar;

            return 'https://www.gravatar.com/avatar/' . md5(strtolower(trim($this->email)))
                . '?d=' . urlencode($uiAvatar)
                . '&s=100';
        });
    }

    public function hasTwoFactor(): bool {
        return (bool)$this->otp_secret || $this->webauthnCredentials()->exists();
    }

    public function jCan(string $permission): bool {
        // Is superuser or admin?
        if ((int)$this->id === 1 || $this->admin) return true;

        $permissions = $this->permissions?->toArray() ?? [];

        // Has explicit permission?
        if (in_array($permission, $permissions, true)) return true;

        $hasWildcard = str_contains($permission, '*');

        // Has implicit permission?
        return array_any(
            $permissions,
            fn($i) => (str_contains($i, '*') && Str::is($i, $permission)) || ($hasWildcard && Str::is($permission, $i))
        );

        // TODO: roles
    }

    public static function getMenuIcon(): string {
        return 'bi-people';
    }

    public function getTitle(): string {
        return $this->name;
    }

    public static function browseableColumns(): array {
        return [
            'name',
            'email',
            new Column(data: 'admin', filtering: []),
            new Column(data: 'permissions', render: fn($i) => count($i ?? [])),
            new Column(
                data: 'otp_secret',
                label: '2FA',
                sortable: false,
                searchable: false,
                render: fn($i, JasmineUser $r) => (bool)$r->otp_secret
            ),
        ];
    }

    /** @param self $ent */
    public static function fieldsManifest(Model&BreadableInterface $ent): array {
        $unique = Rule::unique('jasmine_users', 'email');
        if ($ent->exists) $unique->ignore($ent->getKey());

        return [
            new Section(4, 'Details', [
                InputField::for('name')->setValidation(['required'])->setWidth(3),
                InputField::for('email')->setOptions(['type' => 'email'])->setWidth(9)
                    ->setValidation(['required', $unique]),
            ]),
            new Section(4, 'Access', [
                SwitchField::for('admin')->setDescription('Admins have access to everything'),
                GroupedField::for('permissions')->setFields(Jasmine::getPermissionFields()),
                // TODO: roles
            ]),
        ];
    }

    public static function jasmineOnSaving(JasmineUser $model, array $data): array {
        if (!$model->exists) $data['password'] = bcrypt(Str::random(64));

        // normalize permissions
        if ($model->id === 1) $data['admin'] = true;
        $data['permissions'] = array_keys(array_filter(Arr::dot($data['permissions'] ?? []), fn($p) => $p));

        return $data;
    }

    public static function jasmineOnRetrievedForEdit(JasmineUser $u): array {
        if (!$u->exists) return $u->toArray();

        // prep permissions
        $u->permissions = Arr::undot(
            array_combine((array)$u->permissions, array_map(fn() => true, (array)$u->permissions))
            + array_map(fn() => false, Jasmine::getPermissions())
        );

        return $u->toArray();
    }

    public static function jasmineOnSaved(JasmineUser $model, ?array $data = null): ?array {
        if ($model->wasRecentlyCreated) $model->sendOnboardingLink();

        return $data;
    }

    public function sendOnboardingLink(): string {
        $url = URL::temporarySignedRoute('jasmine.onboarding',
            now()->addMinutes((int)config('jasmine.auth.onboarding.expire', 20)), [
                'user' => $this->getKey(),
                'k'    => hash('sha256', $this->password),
            ],
        );

        $this->notify(new OnboardingInvite($url));

        return $url;
    }

    public function browseActions(): array {
        $context = new BreadableContext(self::getBreadableKey(), self::class);

        $actions = $this->defaultBrowseActions();

        if (!$this->hasTwoFactor() && $this->getKey() !== AuthController::guard()->id()) {
            $actions['send-onboarding-link'] = Action::for(
                name: 'send-onboarding-link',
                icon: 'bi-envelope-arrow-up',
                permission: $context->permission('edit'),
                confirm: ['auth.send_onboarding_link_confirm' => ['email' => $this->email]],
                method: 'POST',
                handler: function (Request $request, JasmineUser $user) {
                    $url = e($user->sendOnboardingLink());
                    $note = __('If the email does not arrive, copy the link and share it through another secure channel.');

                    return back()->with('swal', [
                        'icon'  => 'success',
                        'title' => __('Onboarding link sent'),
                        'html'  => <<<HTML
<p>$note</p>
<code style="word-break: break-all; user-select: all">$url</code>
HTML,
                    ]);
                },
            );
        }

        return $actions;
    }

    public static function jasmineOnDeleting(JasmineUser $model): ?array {
        // prevent deleting first user
        if ((int)$model->id === 1) redirect()->back()->withSwal([
            'icon'  => 'error',
            'title' => 'Oops!',
            'text'  => 'First user cannot be deleted',
        ])->throwResponse();

        // prevent self destruction
        if ($model->id === AuthController::guard()->user()?->id) redirect()->back()->withSwal([
            'icon'  => 'error',
            'title' => 'Oops!',
            'text'  => 'You Cannot delete yourself',
        ])->throwResponse();

        return null;
    }
}
