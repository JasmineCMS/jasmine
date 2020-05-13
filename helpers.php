<?php

namespace Jasmine\Jasmine;

use function GuzzleHttp\Psr7\parse_query;

/**
 * Check if array is associative
 *
 * @param array $array
 *
 * @return bool
 */
function is_assoc_array(array $array)
{
    if ([] === $array) return false;
    return array_keys($array) !== range(0, count($array) - 1);
}

/**
 * @param array $parts
 *
 * @return string
 */
function build_url(array $parts)
{
    $scheme = isset($parts['scheme']) ? ($parts['scheme'] . '://') : '';

    $host = $parts['host'] ?? '';
    $port = isset($parts['port']) ? (':' . $parts['port']) : '';

    $user = $parts['user'] ?? '';
    $pass = isset($parts['pass']) ? (':' . $parts['pass']) : '';
    $pass = ($user || $pass) ? ($pass . '@') : '';

    $path = $parts['path'] ?? '';

    $query = empty($parts['query']) ? '' : ('?' . $parts['query']);

    $fragment = empty($parts['fragment']) ? '' : ('#' . $parts['fragment']);

    return implode('', [$scheme, $user, $pass, $host, $port, $path, $query, $fragment]);
}

/**
 * @param      $key
 * @param      $value
 * @param null $url
 *
 * @return string
 */
function setUrlGetParam($key, $value, $url = null)
{
    $url = $url ?? \URL::full();

    $url = parse_url($url);

    if (!$url['query']) {
        $url['query'] = http_build_query([$key => $value]);
    } else {
        $url['query'] = parse_query($url['query']);
        $url['query'][$key] = $value;
        $url['query'] = http_build_query($url['query']);
    }

    return build_url($url);
}

