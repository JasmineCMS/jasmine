<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Inertia\Inertia;
use Jasmine\Jasmine\Facades\Jasmine;

class FileManagerController extends Controller
{
    public function standalone(Request $request) {
        $locale = app()->getLocale();

        $rtl = in_array($locale, ['ar', 'dv', 'fa', 'ha', 'he', 'ks', 'ku', 'ps', 'sd', 'ur', 'yi']);

        $settings = [
            'headers'         => ['X-Requested-With' => 'XMLHttpRequest'],
            'withCredentials' => true,
            'baseUrl'         => route('jasmine.file-manager.show'),
        ];

        $builtInLocales = ['ar', 'ar', 'cs', 'cs', 'de', 'de', 'en', 'en', 'es',
            'es', 'fa', 'fa', 'fr', 'fr', 'hu', 'hu', 'it', 'it',
            'nl', 'nl', 'pl', 'pl', 'pt_BR', 'pt_BR', 'ru', 'ru', 'sr',
            'sr', 'tr', 'tr', 'zh_CN', 'zh_CN', 'zh_TW', 'zh_TW'];

        $trans = Arr::get(Jasmine::loadUiLocale($locale), 'FileManager.vlfm');
        if (!in_array($locale, $builtInLocales) && $trans) {
            $settings['lang'] = $locale;
            $settings['translation'] = [
                'name'    => $locale,
                'content' => $trans,
            ];
        }

        return view('jasmine::file-manager', compact('rtl', 'settings'));
    }

    public function show(Request $request) {
        return Inertia::render('FileManager');
    }
}
