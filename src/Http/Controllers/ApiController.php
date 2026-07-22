<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Dedoc\Scramble\Attributes\QueryParameter;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\ValidationException;
use Inertia\Response;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Http\Middleware\HandleInertiaRequests;

class ApiController extends Controller
{
    private static function inertiaDelegate(string $class, string $method) {
        $res = app()->call([app($class), $method]);

        if ($res instanceof Response) {
            $rendered = $res->toResponse(\request());

            return response()->json($rendered->getData(true)['props'] ?? []);
        }

        if ($res instanceof RedirectResponse) return response()
            ->json(array_filter(['ok' => true, 'swal' => session()->pull('swal')]));

        return $res;
    }

    public function info(): array {
        // Check permission
        $user = AuthController::guard()->user();
        abort_unless($user->jCan('api.system.info'), 403);

        preg_match(
            '/^(?<commit>\S+)\s+branch\s\'(?<branch>.*)\'\sof\s(?<remote>.*)$/m',
            @file_get_contents(base_path('.git/FETCH_HEAD')) ?: '',
            $git
        );

        return [
            ...HandleInertiaRequests::getInfo(AuthController::guard()->user()),
            'uname' => php_uname(),
            'env'   => app()->environment(),
            'git'   => [
                'remote' => $git['remote'] ?? null,
                'branch' => $git['branch'] ?? null,
                'commit' => $git['commit'] ?? null,
            ],
        ];
    }

    public function dashboard() {
        return self::inertiaDelegate(AppController::class, 'dashboard');
    }

    /**
     * Search.
     *
     * Returns grouped results; each group corresponds to a page set or a
     * breadable the user has read access to. Only groups with matches are returned.
     *
     * @return   array{
     *   groups: array<array{
     *     key: string,
     *     label: string,
     *     icon: string,
     *     items: array<array{title: string, url: string}>
     *   }>
     * }
     */
    #[QueryParameter(name: 'q', description: 'search term, min 2 characters', type: 'string')]
    public function search() {
        return self::inertiaDelegate(AppController::class, 'search');
    }

    public function profileShow() {
        return self::inertiaDelegate(ProfileController::class, 'show');
    }

    public function profileSave() {
        return self::inertiaDelegate(ProfileController::class, 'save');
    }

    public function profileWebauthnOptions() {
        return self::inertiaDelegate(ProfileController::class, 'webauthnOptions');
    }

    public function profileWebauthnRegister() {
        throw ValidationException::withMessages([
            'name' => 'Operation not permitted via API',
        ]);
    }

    public function listBreadables() {
        return array_filter(
            array_keys(Jasmine::getBreadables()),
            fn($v) => AuthController::guard()->user()->jCan("models.$v.browse")
        );
    }

    public function breadIndex() {
        return self::inertiaDelegate(BreadController::class, 'index');
    }

    public function breadEdit() {
        return self::inertiaDelegate(BreadController::class, 'edit');
    }

    public function breadSave() {
        return self::inertiaDelegate(BreadController::class, 'save');
    }

    public function breadFake() {
        return self::inertiaDelegate(BreadController::class, 'fake');
    }

    public function breadReorder() {
        return self::inertiaDelegate(BreadController::class, 'reorder');
    }

    public function breadDelete() {
        return self::inertiaDelegate(BreadController::class, 'delete');
    }

    public function listPages() {
        return array_filter(
            array_keys(Jasmine::getPages()),
            fn($v) => AuthController::guard()->user()->jCan("pages.$v.read")
        );
    }

    public function pageEdit() {
        return self::inertiaDelegate(PageController::class, 'edit');
    }

    public function pageSave() {
        return self::inertiaDelegate(PageController::class, 'save');
    }

    public function pageFake() {
        return self::inertiaDelegate(PageController::class, 'fake');
    }
}
