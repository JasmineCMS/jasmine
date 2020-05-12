<?php

namespace Jasmine\Jasmine;

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

