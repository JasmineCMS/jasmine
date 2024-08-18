<?php

namespace Jasmine\Jasmine\Console\Commands;

use Egulias\EmailValidator\EmailValidator;
use Egulias\EmailValidator\Validation\RFCValidation;
use Illuminate\Console\Command;
use Jasmine\Jasmine\Models\JasmineUser;

class CreateUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'jasmine:create-user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'create a jasmine user';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // loop until we have a valid email address
        do {
            $email = $this->ask('Enter E-mail address');
            if ($not_valid = !$this->validateEmail($email)) {
                $this->warn('Email is not valid!');
            }
        } while ($not_valid);
        // get name
        $name = $this->ask('Enter Full Name');
        // loop until we have a valid and confirmed password
        do {
            $password = $this->secret('Enter password');
            if ($len = (strlen($password) < 6)) {
                $this->warn('Password must be at lest 6 characters!');

                continue;
            }
            $confirmPassword = $this->secret('Confirm Password');
            if ($password !== $confirmPassword) {
                $this->warn('Passwords don\'t match!');
            }
        } while ($len || ($password !== $confirmPassword));
        // create user
        /** @var JasmineUser $user */
        $user = JasmineUser::create([
            'name'     => $name,
            'email'    => $email,
            'password' => bcrypt($password),
        ]);
        if ($user) {
            $this->info('User created successfully');
            dump($user->toArray());
        } else {
            $this->error('User was not created');
        }

        return 0;
    }

    public function validateEmail($value): bool
    {
        if (!is_string($value) && !(is_object($value) && method_exists($value, '__toString'))) return false;

        return (new EmailValidator)->isValid($value, new RFCValidation);
    }
}
