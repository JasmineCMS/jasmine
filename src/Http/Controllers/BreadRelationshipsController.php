<?php

namespace Jasmine\Jasmine\Http\Controllers;


use App\Models\Post;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\Relation;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Translatable;

class BreadRelationshipsController extends Controller
{
    public function getRelationData()
    {
        $breadableKey = \request()->route('breadableName');
        $breadableName = \Jasmine::getBreadables()[$breadableKey] ?? abort(404);

        $breadableId = \request()->route()->parameter('breadableId');

        $data = request()->validate([
            'relation'            => ['string', 'required'],
            'related_key_name'    => ['string', 'required'],
            'related_title_field' => ['string', 'required'],
        ]);

        $localed = false;
        if (in_array(Translatable::class, class_uses($breadableName))) {
            app()->setLocale(request('_locale', \Jasmine::getLocales()[0] ?? 'en'));
            $localed = true;
        }

        /** @var Model|BreadableInterface|Translatable $breadable */

        if ($breadableId) {
            $breadable = call_user_func("$breadableName::find", $breadableId);
        } else {
            $breadable = new $breadableName;
        }


        /** @var Relation $relation */
        $relation = $breadable->{$data['relation']}();

        if (!$localed && in_array(Translatable::class, class_uses($relation->getModel()))) {
            app()->setLocale(request('_locale', \Jasmine::getLocales()[0] ?? 'en'));
            $localed = true;
        }

        return [
            'available' =>
                array_column($relation->getRelated()
                                      ->get([$data['related_key_name'], $data['related_title_field']])
                                      ->toArray(), $data['related_title_field'], $data['related_key_name']),
            'existing'  => $breadable->exists
                ? $relation->pluck($data['related_key_name']) : [],
        ];
    }
}
