<?php

namespace Jasmine\Jasmine\Bread;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Jasmine\Jasmine\Models\JasminePage;

final readonly class BreadableContext
{
    /** @param class-string<BreadableInterface&Model> $class */
    public function __construct(public string $key, public string $class) {}

    public function newQuery(): Builder {
        return ($this->class)::jasmineQuery();
    }

    /** @param array{0: array<string, mixed>, 1?: array<string, mixed>}|null $create */
    public function find(string|int $id, ?array $create = null): Model&BreadableInterface {
        /** @var Model&BreadableInterface $model */
        $q = $this->newQuery();
        if (!$create) $model = $q->findOrFail($id);
        else $model = $q->firstOrCreate(...$create);

        return $model;
    }

    public function newInstance(): Model&BreadableInterface {
        /** @var Model&BreadableInterface $model */
        $model = new ($this->class)();

        return $model;
    }

    public function permission(string $action): string {
        $type = is_a($this->class, JasminePage::class, true) ? 'pages' : 'models';

        return "$type.$this->key.$action";
    }
}
