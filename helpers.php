<?php

namespace Jasmine\Jasmine;

use GuzzleHttp\Psr7\Query;

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

    if (!isset($url['query'])) {
        $url['query'] = http_build_query([$key => $value]);
    } else {
        $url['query'] = Query::parse($url['query']);
        $url['query'][$key] = $value;
        $url['query'] = http_build_query($url['query']);
    }

    return build_url($url);
}

if (!function_exists('has_string_keys')) {
    function has_string_keys(array $array)
    {
        return count(array_filter(array_keys($array), 'is_string')) > 0;
    }
}

if (!function_exists('array2csv')) {
    /**
     * @param        $data
     * @param string $delimiter
     * @param string $enclosure
     * @param string $escape_char
     *
     * @return false|string
     */
    function array2csv($data, $delimiter = ',', $enclosure = '"', $escape_char = "\\")
    {
        $f = fopen('php://memory', 'r+');

        if (count($data) < 1) {
            return null;
        }

        if (has_string_keys($data[0])) {
            fputcsv($f, array_keys($data[0]), $delimiter, $enclosure, $escape_char);
        }

        foreach ($data as $item) {
            fputcsv($f, $item, $delimiter, $enclosure, $escape_char);
        }
        rewind($f);
        return stream_get_contents($f);
    }
}

if (!function_exists('csv2array')) {
    /**
     * @param        $path
     * @param string $delimiter
     * @param string $enclosure
     * @param string $escape_char
     *
     * @return array|boolean
     */
    function csv2array($path, $delimiter = ',', $enclosure = '"', $escape_char = "\\")
    {
        if (!file_exists($path) || !is_readable($path)) {
            return false;
        }

        $header = null;
        $data = [];
        if (($handle = fopen($path, 'r')) !== false) {
            while (($row = fgetcsv($handle, 1000, $delimiter, $enclosure, $escape_char)) !== false) {
                if (!$header)
                    $header = $row;
                else
                    $data[] = array_combine($header, $row);
            }
            fclose($handle);
        }

        return $data;
    }
}
