<?php

namespace Jasmine\Jasmine;

use Alexusmai\LaravelFileManager\Services\ConfigService\ConfigRepository;

/**
 * Class DefaultConfigRepository
 */
class FmConfigRepository implements ConfigRepository
{
    /**
     * LFM Route prefix
     * !!! WARNING - if you change it, you should compile frontend with new prefix(baseUrl) !!!
     */
    final public function getRoutePrefix(): string
    {
        return config('file-manager.routePrefix');
    }

    /**
     * Get disk list
     *
     * ['public', 'local', 's3']
     */
    final public function getDiskList(): array
    {
        return config('file-manager.diskList');
    }

    /**
     * Default disk for left manager
     *
     * null - auto select the first disk in the disk list
     */
    final public function getLeftDisk(): ?string
    {
        return config('file-manager.leftDisk');
    }

    /**
     * Default disk for right manager
     *
     * null - auto select the first disk in the disk list
     */
    final public function getRightDisk(): ?string
    {
        return config('file-manager.rightDisk');
    }

    /**
     * Default path for left manager
     *
     * null - root directory
     */
    final public function getLeftPath(): ?string
    {
        return config('file-manager.leftPath');
    }

    /**
     * Default path for right manager
     *
     * null - root directory
     */
    final public function getRightPath(): ?string
    {
        return config('file-manager.rightPath');
    }

    /**
     * Image cache ( Intervention Image Cache )
     *
     * set null, 0 - if you don't need cache (default)
     * if you want use cache - set the number of minutes for which the value should be cached
     */
    final public function getCache(): ?int
    {
        return config('file-manager.cache');
    }

    /**
     * File manager modules configuration
     *
     * 1 - only one file manager window
     * 2 - one file manager window with directories tree module
     * 3 - two file manager windows
     */
    final public function getWindowsConfig(): int
    {
        return config('file-manager.windowsConfig');
    }

    /**
     * File upload - Max file size in KB
     *
     * null - no restrictions
     */
    final public function getMaxUploadFileSize(): ?int
    {
        return config('file-manager.maxUploadFileSize');
    }

    /**
     * File upload - Allow these file types
     *
     * [] - no restrictions
     */
    final public function getAllowFileTypes(): array
    {
        return config('file-manager.allowFileTypes');
    }

    /** Show / Hide system files and folders */
    final public function getHiddenFiles(): bool
    {
        return config('file-manager.hiddenFiles');
    }

    /**
     * Middleware
     *
     * Add your middleware name to array -> ['web', 'auth', 'admin']
     * !!!! RESTRICT ACCESS FOR NON ADMIN USERS !!!!
     */
    final public function getMiddleware(): array
    {
        $res = config('file-manager.middleware');
        $res[] = 'jasmineAuth:' . config('jasmine.auth.guard', 'jasmine_web');

        return $res;
    }

    /**
     * ACL mechanism ON/OFF
     *
     * default - false(OFF)
     */
    final public function getAcl(): bool
    {
        return config('file-manager.acl');
    }

    /**
     * Hide files and folders from file-manager if user doesn't have access
     *
     * ACL access level = 0
     */
    final public function getAclHideFromFM(): bool
    {
        return config('file-manager.aclHideFromFM');
    }

    /**
     * ACL strategy
     *
     * blacklist - Allow everything(access - 2 - r/w) that is not forbidden by the ACL rules list
     *
     * whitelist - Deny anything(access - 0 - deny), that not allowed by the ACL rules list
     */
    final public function getAclStrategy(): string
    {
        return config('file-manager.aclStrategy');
    }

    /**
     * ACL rules repository
     *
     * default - config file(ConfigACLRepository)
     */
    final public function getAclRepository(): string
    {
        return config('file-manager.aclRepository');
    }

    /**
     * ACL Rules cache
     *
     * null or value in minutes
     */
    final public function getAclRulesCache(): ?int
    {
        return config('file-manager.aclRulesCache');
    }

    /**
     * Whether to slugify filenames
     *
     * boolean
     */
    final public function getSlugifyNames(): ?bool
    {
        return config('file-manager.slugifyNames', false);
    }
}
