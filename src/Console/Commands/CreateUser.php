<?php

namespace Jasmine\Jasmine\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;
use Jasmine\Jasmine\Models\JasmineUser;

use function Laravel\Prompts\confirm;
use function Laravel\Prompts\password;
use function Laravel\Prompts\text;

class CreateUser extends Command
{
    protected $signature = 'jasmine:create-user';

    protected $description = 'Create a Jasmine user';

    public function handle(): int {
        $email = text(
            label: 'E-mail address',
            required: true,
            validate: fn(string $value) => match (true) {
                Validator::make(['email' => $value], ['email' => ['required',
                    'email:rfc']])->fails()                                               => 'Email is not valid.',
                JasmineUser::where('email', $value)->exists()                             => 'A user with this email already exists.',
                default                                                                   => null,
            },
        );

        $name = text(label: 'Full name', required: true);

        do {
            $password = password(
                label: 'Password',
                required: true,
                validate: fn(string $value) => Validator::make(
                    ['password' => $value],
                    ['password' => ['required', Password::defaults()]],
                )->fails() ? 'Password does not meet the minimum requirements.' : null,
            );

            $confirm = password(label: 'Confirm password', required: true);

            if ($password !== $confirm) $this->error("Passwords don't match.");
        } while ($password !== $confirm);

        $admin = confirm(label: 'Make administrator', required: true);

        $user = JasmineUser::create([
            'name'     => $name,
            'email'    => $email,
            'admin'    => $admin,
            'password' => $password,
        ]);

        $this->info("User created successfully (id: {$user->getKey()}, email: {$user->email}).");

        return Command::SUCCESS;
    }
}
