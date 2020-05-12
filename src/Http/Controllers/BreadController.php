<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\AbstractField;
use function Jasmine\Jasmine\is_assoc_array;

class BreadController extends Controller
{
    /**
     * @param $breadableName
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\JsonResponse|\Illuminate\View\View|mixed
     * @throws \Exception
     */
    public function index($breadableName)
    {
        /** @var Builder $query */
        $query = call_user_func("$breadableName::query");

        $breadableIdColumn = $query->getModel()->getKeyName();

        $browseableColumns = call_user_func("$breadableName::browseableColumns");

        // Assure key
        if (!in_array($breadableIdColumn, $browseableColumns)) {
            array_unshift($browseableColumns, $breadableIdColumn);
        }

        // Timestamps
        if ($query->getModel()->usesTimestamps()) {
            if (!in_array('created_at', $browseableColumns)) {
                array_push($browseableColumns, 'created_at');
            }

            if (!in_array('updated_at', $browseableColumns)) {
                array_push($browseableColumns, 'updated_at');
            }
        }

        if (\request()->ajax()) {

            $query->select($browseableColumns);

            return datatables($query)->make();
        }

        return view('jasmine::app.bread.index', compact('breadableName', 'browseableColumns', 'breadableIdColumn'));
    }

    public function create($breadableName)
    {
        return view('jasmine::app.bread.edit', compact('breadableName'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param                          $breadableName
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(Request $request, $breadableName)
    {
        /** @var AbstractField[]|Collection $fields */
        $fields = collect(call_user_func("$breadableName::fieldsManifest")->toArray())->flatten(2);
        $rules = [];

        foreach ($fields as $field) {
            if ($field['repeats'] > 1) {
                $rules[$field['name']] = $field['validation'];
            } else {
                $rules[$field['name']] = $field['validation'];
            }
        }

        $data = $request->validate($rules);

        // handle images
        $images = [];
        foreach ($fields->where('type', 'ImageField') as $imageField) {
            $images[$imageField['name']] = $data[$imageField['name']];
            $data[$imageField['name']] = [];
        }

        /** @var BreadableInterface|Model $breadable */
        $breadable = call_user_func_array("$breadableName::forceCreate", [$data]);

        foreach ($images as $fieldName => $image) {
            if (!\Jasmine\Jasmine\is_assoc_array($image)) {
                $imageValue = [];
                foreach ($image as $key => $oneImage) {
                    /** @var UploadedFile $img */
                    $img = $oneImage['img'];

                    $imgPath = $img->storePubliclyAs('/public/files/'
                        . Str::slug(call_user_func("$breadableName::getSingularName"))
                        . '/' . $breadable->{$breadable->getRouteKeyName()},
                        $key . '-' .
                        $fieldName . '.' . $img->extension()
                    );

                    $imageValue[] = [
                        'path' => $imgPath,
                        'src'  => \Storage::url($imgPath) . '?v=' . md5(time() . microtime()),
                        'alt'  => $oneImage['alt'],
                        'w'    => $oneImage['w'],
                        'h'    => $oneImage['h'],
                    ];
                }
            } else {
                /** @var UploadedFile $img */
                $img = $image['img'];

                $imgPath = $img->storePubliclyAs('/public/files/'
                    . Str::slug(call_user_func("$breadableName::getSingularName"))
                    . '/' . $breadable->{$breadable->getRouteKeyName()},
                    $fieldName . '.' . $img->extension()
                );

                $imageValue = [
                    'path' => $imgPath,
                    'src'  => \Storage::url($imgPath) . '?v=' . md5(time() . microtime()),
                    'alt'  => $image['alt'],
                    'w'    => $image['w'],
                    'h'    => $image['h'],
                ];
            }

            $breadable->{$fieldName} = $imageValue;
        }

        $breadable->save();

        return redirect(route('jasmine.bread.edit', [$breadableName, $breadable->{$breadable->getRouteKeyName()}]));
    }

    public function edit($breadableName, $breadableId)
    {
        /** @var null|Model|BreadableInterface $breadable */
        $breadable = call_user_func("$breadableName::find", $breadableId);

        if (!$breadable) {
            abort(404);
        }

        return view('jasmine::app.bread.edit', compact('breadableName', 'breadable'));
    }

    public function update(Request $request, $breadableName, $breadableId)
    {
        /** @var AbstractField[] $fields */
        $fields = collect(call_user_func("$breadableName::fieldsManifest")->toArray())->flatten(2);
        $rules = [];

        foreach ($fields as $field) {
            if ($field['repeats'] > 1) {
                $rules[$field['name']] = $field['validation'];
            } else {
                $rules[$field['name']] = $field['validation'];
            }
        }

        $data = $request->validate($rules);

        /** @var null|Model|BreadableInterface $breadable */
        $breadable = call_user_func("$breadableName::find", $breadableId);

        // handle images
        foreach ($fields->where('type', 'ImageField') as $imageField) {
            $dataImg = $data[$imageField['name']];

            if (!is_assoc_array($dataImg)) {
                $imageValue = [];
                foreach ($dataImg as $oneKey => $one) {
                    // skip if no new image sent
                    if (!isset($one['img'])) {
                        continue;
                    }

                    // delete old
                    \Storage::delete($one['path']);

                    /** @var UploadedFile $img */
                    $img = $one['img'];

                    $imgPath = $img->storePubliclyAs('/public/files/'
                        . Str::slug(call_user_func("$breadableName::getSingularName"))
                        . '/' . $breadable->{$breadable->getRouteKeyName()},
                        $oneKey . '-' .
                        $imageField['name'] . '.' . $img->extension()
                    );

                    $imageValue[] = [
                        'path' => $imgPath,
                        'src'  => \Storage::url($imgPath) . '?v=' . md5(time() . microtime()),
                        'alt'  => $one['alt'],
                        'w'    => $one['w'],
                        'h'    => $one['h'],
                    ];
                }
            } else {
                // delete old
                \Storage::delete($dataImg['path']);

                /** @var UploadedFile $img */
                $img = $dataImg['img'];

                $imgPath = $img->storePubliclyAs('/public/files/'
                    . Str::slug(call_user_func("$breadableName::getSingularName"))
                    . '/' . $breadable->{$breadable->getRouteKeyName()},
                    $imageField['name'] . '.' . $img->extension()
                );

                $imageValue = [
                    'path' => $imgPath,
                    'src'  => \Storage::url($imgPath) . '?v=' . md5(time() . microtime()),
                    'alt'  => $dataImg['alt'],
                    'w'    => $dataImg['w'],
                    'h'    => $dataImg['h'],
                ];
            }

            $breadable->{$fieldName} = $imageValue;
        }

        $breadable->forceFill($data)->save();


        return redirect(route('jasmine.bread.edit', [$breadableName, $breadable->{$breadable->getRouteKeyName()}]));
    }

    /**
     * @param $breadableName
     * @param $breadableId
     *
     * @return array
     * @throws \Exception
     */
    public function destroy($breadableName, $breadableId)
    {
        /** @var null|Model|BreadableInterface $breadable */
        $breadable = call_user_func("$breadableName::find", $breadableId);

        if (!$breadable) {
            abort(404);
        }

        return ['success' => $breadable->delete()];
    }

}
