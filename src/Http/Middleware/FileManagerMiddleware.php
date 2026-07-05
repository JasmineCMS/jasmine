<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Alexusmai\LaravelFileManager\Services\ConfigService\ConfigRepository;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Response;

class FileManagerMiddleware
{
    /**  @param Closure(Request): (Response) $next */
    public function handle(Request $request, Closure $next): Response {
        if ($request->routeIs('fm.upload')) {
            $config = resolve(ConfigRepository::class);
            $data = $request->validate([
                'disk' => [
                    'required', 'string',
                    function ($attribute, $value, $fail) use ($config): void {
                        if (
                            !in_array($value, $config->getDiskList())
                            || !array_key_exists($value, config('filesystems.disks'))
                        ) $fail('diskNotFound');
                    },
                ],
                'path' => ['sometimes', 'string', 'nullable'],
            ]);

            $data['path'] ??= '/';

            $disk = Storage::disk($data['disk']);
            if (!$disk->exists($data['path'])) $disk->makeDirectory($data['path']);
        }

        return $next($request);
    }
}
