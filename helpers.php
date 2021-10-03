<?php

namespace Jasmine\Jasmine;


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

        if (count($data) < 1) return null;

        if (\Arr::isAssoc($data[0])) fputcsv($f, array_keys($data[0]), $delimiter, $enclosure, $escape_char);

        foreach ($data as $item) fputcsv($f, $item, $delimiter, $enclosure, $escape_char);

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
        if (!file_exists($path) || !is_readable($path)) return false;

        $header = null;
        $data = [];
        if (($handle = fopen($path, 'r')) !== false) {
            while (($row = fgetcsv($handle, 1000, $delimiter, $enclosure, $escape_char)) !== false) {
                if (!$header) $header = $row;
                else $data[] = array_combine($header, $row);
            }
            fclose($handle);
        }

        return $data;
    }
}
