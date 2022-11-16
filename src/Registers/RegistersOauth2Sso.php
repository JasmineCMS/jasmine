<?php

namespace Jasmine\Jasmine\Registers;

trait RegistersOauth2Sso
{
    private array $oauth2_ssos = [];
    
    public function registerOauth2Sso(
        string        $name,
        string        $icon,
        string        $client_id,
        string        $client_secret,
        string        $authorize_url,
        string        $token_url,
        array         $scopes,
        \Closure|bool $allowCreate,
        \Closure      $userDataCallback
    )
    {
        $this->oauth2_ssos[$name] = compact(
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
    
    public function getOauth2Ssos(?string $name = null): ?array
    {
        return $name ? $this->oauth2_ssos[$name] ?? null : $this->oauth2_ssos;
    }
}