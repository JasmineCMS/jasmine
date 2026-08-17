<?php

namespace App\Pages;

use Illuminate\Database\Eloquent\Model;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\DateField;
use Jasmine\Jasmine\Bread\Fields\GroupedField;
use Jasmine\Jasmine\Bread\Fields\ImageField;
use Jasmine\Jasmine\Bread\Fields\InputField;
use Jasmine\Jasmine\Bread\Fields\TextareaField;
use Jasmine\Jasmine\Bread\Fields\VideoField;
use Jasmine\Jasmine\Bread\Fields\WysiwygField;
use Jasmine\Jasmine\Bread\Manifest\FieldsManifest;
use Jasmine\Jasmine\Bread\Translatable;
use Jasmine\Jasmine\Models\JasminePage;

class Home extends JasminePage
{
    use Translatable;

    public static function getMenuIcon(): string {
        return 'fa fa-home';
    }

    public static function fieldsManifest(BreadableInterface&Model $ent): FieldsManifest {
        return new FieldsManifest([
            'col-md-6'   => [

                __('Test') => [
                    GroupedField::for('hero_slider')->setFields([
                        ImageField::for('img')->setOptions(['w' => 1920, 'h' => 920])->setWidth('col-md-6'),
                        ImageField::for('img_mob')->setOptions(['w' => 400, 'h' => 695])->setWidth('col-md-6'),
                    ])->setRepeats(20),
                ],

                __('Hero')               => [
                    InputField::for('hero_title')->setWidth('col-md-6'),
                    InputField::for('hero_subtitle')->setWidth('col-md-6'),
                    WysiwygField::for('hero_description')->setWidth('col-md-12'),
                    InputField::for('song_name')->setWidth('col-md-6'),
                    InputField::for('song-details')->setWidth('col-md-6'),
                ],
                __('Activities Section') => [
                    GroupedField::for('songs')->setFields([
                        InputField::for('title'),
                        TextareaField::for('description')->setOptions(['rows' => 4]),
                        ImageField::for('icon')->setOptions([])->flexible(),
                        InputField::for('btn_content'),
                        InputField::for('link'),
                    ])->setWidth('col-md-4'),
                    GroupedField::for('Videos')->setFields([
                        InputField::for('title'),
                        TextareaField::for('description')->setOptions(['rows' => 4]),
                        ImageField::for('icon')->setOptions([])->flexible(),
                        InputField::for('btn_content'),
                        InputField::for('link'),

                    ])->setWidth('col-md-4'),
                    GroupedField::for('activities')->setFields([
                        InputField::for('title'),
                        TextareaField::for('description')->setOptions(['rows' => 4]),
                        ImageField::for('icon')->setOptions([])->flexible(),
                        InputField::for('btn_content'),
                        InputField::for('link'),

                    ])->setWidth('col-md-4'),
                ],
                __('Slider Section')     => [
                    GroupedField::for('slider_video')->setFields([
                        VideoField::for('video')->setOptions(['w' => 317, 'h' => 522]),
                        ImageField::for('img')->setOptions([])->flexible(),
                    ])->setWidth(6)->setRepeats(10),
                ],
            ],
            'col-md-3'   => [
                __('Hero Media') => [
                    DateField::for('date'),
                    ImageField::for('image')->flexible(),
                    InputField::for('hero_media_title'),
                    VideoField::for('hero_video')->setWidth('col-md-12'),
                    InputField::for('hero_video_name'),
                    InputField::for('hero_video_creator_name'),
                    VideoField::for('hero_video_mob')->setWidth('col-md-12'),
                    InputField::for('hero_video_mob_name'),
                    InputField::for('hero_video_mob_creator_name'),
                    ImageField::for('hero_img')->setOptions([])->flexible(),
                    ImageField::for('hero_img_mob')->setOptions(['w' => 400])->flexible(),
                ],
            ],
            'col-md-3 x' => [
                __('Details') => [],
            ],
            'col-md-12'  => [
                __('Benefits Section')        => [
                    InputField::for('title'),
                    InputField::for('subtitle'),
                    GroupedField::for('benefit')->setFields([
                        TextareaField::for('description')->setOptions(['rows' => 4]),
                        ImageField::for('icon')->setOptions([])->flexible(),
                    ])->setWidth(3)->setRepeats(8),
                    GroupedField::for('benefit_patch')->setFields([
                        InputField::for('title1'),
                        InputField::for('title2'),
                        TextareaField::for('description')->setOptions(['rows' => 4]),
                    ]),
                ],
                __('Actions Section')         => [
                    GroupedField::for('Commemorations')->setFields([
                        TextareaField::for('title')->setOptions(['rows' => 2]),
                        TextareaField::for('description')->setOptions(['rows' => 4]),
                        ImageField::for('icon')->setOptions([])->flexible(),
                        InputField::for('link'),
                    ])->setWidth('col-lg-3'),
                    GroupedField::for('gift_subscription')->setFields([
                        TextareaField::for('title')->setOptions(['rows' => 2]),
                        TextareaField::for('description')->setOptions(['rows' => 4]),
                        ImageField::for('icon')->setOptions([])->flexible(),
                        InputField::for('link'),
                    ])->setWidth('col-lg-3'),
                    GroupedField::for('invite_friends')->setFields([
                        TextareaField::for('title')->setOptions(['rows' => 2]),
                        TextareaField::for('description')->setOptions(['rows' => 4]),
                        ImageField::for('icon')->setOptions([])->flexible(),
                        InputField::for('link'),
                    ])->setWidth('col-lg-3'),
                    GroupedField::for('suggestions')->setFields([
                        TextareaField::for('title')->setOptions(['rows' => 2]),
                        TextareaField::for('description')->setOptions(['rows' => 4]),
                        ImageField::for('icon')->setOptions([])->flexible(),
                        InputField::for('link'),
                    ])->setWidth('col-lg-3'),
                ],
                __('Recommendations Section') => [
                    GroupedField::for('recommendation')->setFields([
                        InputField::for('recommender_name'),
                        TextareaField::for('content')->setOptions(['rows' => 4]),
                        ImageField::for('img')->setOptions([['w' => 633, 'h' => 509]]),
                        ImageField::for('img_mob')->setOptions([['w' => 331, 'h' => 266]]),
                    ])->setWidth(6)->setRepeats(6),
                ],
            ],
        ]);
    }
}
