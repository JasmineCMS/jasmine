(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=custom&index=0&blockType=i18n":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=custom&index=0&blockType=i18n ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=custom&index=0&blockType=i18n":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=custom&index=0&blockType=i18n ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"Hi":"Hi","Logout":"Logout"},"he":{"Hi":"היי","Logout":"יציאה"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js ***!
  \******************************************************************************/
/*! exports provided: ScriptLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoader", function() { return ScriptLoader; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var createState = function () {
    return {
        listeners: [],
        scriptId: Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["uuid"])('tiny-script'),
        scriptLoaded: false
    };
};
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js ***!
  \*************************************************************************/
/*! exports provided: getTinymce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTinymce", function() { return getTinymce; });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : global); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js ***!
  \***********************************************************************/
/*! exports provided: bindHandlers, bindModelHandlers, initEditor, isValidKey, uuid, isTextarea, mergePlugins, isNullOrUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindHandlers", function() { return bindHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindModelHandlers", function() { return bindModelHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initEditor", function() { return initEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidKey", function() { return isValidKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTextarea", function() { return isTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergePlugins", function() { return mergePlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
var isValidKey = function (key) { return validEvents.map(function (event) { return event.toLowerCase(); }).indexOf(key.toLowerCase()) !== -1; };
var bindHandlers = function (initEvent, listeners, editor) {
    Object.keys(listeners)
        .filter(isValidKey)
        .forEach(function (key) {
        var handler = listeners[key];
        if (typeof handler === 'function') {
            if (key === 'onInit') {
                handler(initEvent, editor);
            }
            else {
                editor.on(key.substring(2), function (e) { return handler(e, editor); });
            }
        }
    });
};
var bindModelHandlers = function (ctx, editor) {
    var modelEvents = ctx.$props.modelEvents ? ctx.$props.modelEvents : null;
    var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;
    ctx.$watch('value', function (val, prevVal) {
        if (editor && typeof val === 'string' && val !== prevVal && val !== editor.getContent({ format: ctx.$props.outputFormat })) {
            editor.setContent(val);
        }
    });
    editor.on(normalizedEvents ? normalizedEvents : 'change input undo redo', function () {
        ctx.$emit('input', editor.getContent({ format: ctx.$props.outputFormat }));
    });
};
var initEditor = function (initEvent, ctx, editor) {
    var value = ctx.$props.value ? ctx.$props.value : '';
    var initialValue = ctx.$props.initialValue ? ctx.$props.initialValue : '';
    editor.setContent(value || (ctx.initialized ? ctx.cache : initialValue));
    // checks if the v-model shorthand is used (which sets an v-on:input listener) and then binds either
    // specified the events or defaults to "change keyup" event and emits the editor content on that event
    if (ctx.$listeners.input) {
        bindModelHandlers(ctx, editor);
    }
    bindHandlers(initEvent, ctx.$listeners, editor);
    ctx.initialized = true;
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isNullOrUndefined = function (value) { return value === null || value === undefined; };



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js ***!
  \***********************************************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ScriptLoader */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js");
/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TinyMCE */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorPropTypes */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var renderInline = function (h, id, tagName) {
    return h(tagName ? tagName : 'div', {
        attrs: { id: id }
    });
};
var renderIframe = function (h, id) {
    return h('textarea', {
        attrs: { id: id },
        style: { visibility: 'hidden' }
    });
};
var initialise = function (ctx) { return function () {
    var finalInit = __assign(__assign({}, ctx.$props.init), { readonly: ctx.$props.disabled, selector: "#" + ctx.elementId, plugins: Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["mergePlugins"])(ctx.$props.init && ctx.$props.init.plugins, ctx.$props.plugins), toolbar: ctx.$props.toolbar || (ctx.$props.init && ctx.$props.init.toolbar), inline: ctx.inlineEditor, setup: function (editor) {
            ctx.editor = editor;
            editor.on('init', function (e) { return Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["initEditor"])(e, ctx, editor); });
            if (ctx.$props.init && typeof ctx.$props.init.setup === 'function') {
                ctx.$props.init.setup(editor);
            }
        } });
    if (Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["isTextarea"])(ctx.element)) {
        ctx.element.style.visibility = '';
    }
    Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_1__["getTinymce"])().init(finalInit);
}; };
var Editor = {
    props: _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__["editorProps"],
    created: function () {
        this.elementId = this.$props.id || Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])('tiny-vue');
        this.inlineEditor = (this.$props.init && this.$props.init.inline) || this.$props.inline;
        this.initialized = false;
    },
    watch: {
        disabled: function () {
            this.editor.setMode(this.disabled ? 'readonly' : 'design');
        }
    },
    mounted: function () {
        this.element = this.$el;
        if (Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_1__["getTinymce"])() !== null) {
            initialise(this)();
        }
        else if (this.element && this.element.ownerDocument) {
            var channel = this.$props.cloudChannel ? this.$props.cloudChannel : '5';
            var apiKey = this.$props.apiKey ? this.$props.apiKey : 'no-api-key';
            var scriptSrc = Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.$props.tinymceScriptSrc) ?
                "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js" :
                this.$props.tinymceScriptSrc;
            _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__["ScriptLoader"].load(this.element.ownerDocument, scriptSrc, initialise(this));
        }
    },
    beforeDestroy: function () {
        if (Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_1__["getTinymce"])() !== null) {
            Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_1__["getTinymce"])().remove(this.editor);
        }
    },
    deactivated: function () {
        var _a;
        if (!this.inlineEditor) {
            this.cache = this.editor.getContent();
            (_a = Object(_TinyMCE__WEBPACK_IMPORTED_MODULE_1__["getTinymce"])()) === null || _a === void 0 ? void 0 : _a.remove(this.editor);
        }
    },
    activated: function () {
        if (!this.inlineEditor && this.initialized) {
            initialise(this)();
        }
    },
    render: function (h) {
        return this.inlineEditor ? renderInline(h, this.elementId, this.$props.tagName) : renderIframe(h, this.elementId);
    }
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \********************************************************************************************/
/*! exports provided: editorProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editorProps", function() { return editorProps; });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var editorProps = {
    apiKey: String,
    cloudChannel: String,
    id: String,
    init: Object,
    initialValue: String,
    inline: Boolean,
    modelEvents: [String, Array],
    plugins: [String, Array],
    tagName: String,
    toolbar: [String, Array],
    value: String,
    disabled: Boolean,
    tinymceScriptSrc: String,
    outputFormat: {
        type: String,
        validator: function (prop) { return prop === 'html' || prop === 'text'; }
    },
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* harmony default export */ __webpack_exports__["default"] = (_components_Editor__WEBPACK_IMPORTED_MODULE_0__["Editor"]);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BreadEdit",
  props: {
    locale: {
      required: true,
      type: String
    },
    manifest: {
      required: true,
      type: Object
    },
    breadable: {
      required: true,
      type: Object
    },
    errors: {
      required: true,
      type: Object
    },
    old: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      values: {}
    };
  },
  methods: {
    loadValues: function loadValues() {
      var vm = this;
      vm.fields.forEach(function (field) {
        if (field.repeats > 1) {
          Vue.set(vm.values, field.name, vm.old[field.name] || vm.breadable[field.name] || [field.getDefault()]);
        } else {
          Vue.set(vm.values, field.name, vm.old[field.name] || vm.breadable[field.name] || field.getDefault());
        }
      });
    },
    repeatField: function repeatField(field) {
      this.values[field.name].push(field.getDefault());
    },
    removeRepeatedField: function removeRepeatedField(fieldName, i) {
      this.values[fieldName].splice(i, 1);
    }
  },
  computed: {
    fields: function fields() {
      var vm = this;
      var fields = [];
      Object.keys(vm.manifest).forEach(function (col, ci) {
        Object.keys(vm.manifest[col]).forEach(function (group, gi) {
          vm.manifest[col][group].forEach(function (f) {
            f.getDefault = function () {
              if (_typeof(f["default"]) === 'object') {
                return JSON.parse(JSON.stringify(f["default"]));
              }

              return f["default"];
            };

            fields.push(f);
          });
        });
      });
      return fields;
    },
    isLocaleRtl: function isLocaleRtl() {
      return ['ar', 'he', 'iw'].indexOf(this.locale) > -1;
    }
  },
  created: function created() {
    this.loadValues();
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/BaseField.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/BaseField.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var JasmineBaseField = {
  name: "BaseField",
  props: {
    value: {
      required: true
    },
    id: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: String
    },
    options: {
      required: true
    },
    validation: {
      required: true,
      type: Array
    },
    invalid: {
      required: true,
      type: Boolean
    },
    locale: {
      required: true
    },
    isLocaleRtl: {
      required: true,
      type: Boolean
    }
  },
  data: function data() {
    return {
      field_value: this.value
    };
  },
  watch: {
    'value': function value(val) {
      this.field_value = val;
    },
    'field_value': function field_value() {
      this.$emit('input', this.field_value);
    }
  },
  mounted: function mounted() {
    this.$on('');
  }
};
window.JasmineBaseField = JasmineBaseField;
/* harmony default export */ __webpack_exports__["default"] = (JasmineBaseField);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker/dist/locale */ "./node_modules/vuejs-datepicker/dist/locale/index.js");
/* harmony import */ var vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DateField",
  "extends": JasmineBaseField,
  data: function data() {
    return {
      opts: Object.assign({
        type: 'text'
      }, this.options),
      date: null,
      dLocales: {
        en: vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_0__["en"],
        he: vuejs_datepicker_dist_locale__WEBPACK_IMPORTED_MODULE_0__["he"]
      }
    };
  },
  methods: {
    update: function update() {
      this.field_value = this.date.toISOString().slice(0, 19).replace('T', ' ');
    },
    format: function format(d) {
      var day = d.getDate().toString().padStart(2, '0');
      var month = (d.getMonth() + 1).toString().padStart(2, '0');
      var year = d.getFullYear();
      return "".concat(day, ".").concat(month, ".").concat(year);
    }
  },
  mounted: function mounted() {
    if (this.field_value) {
      this.date = new Date(this.field_value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ImageField",
  "extends": JasmineBaseField,
  data: function data() {
    return {
      opts: Object.assign({
        options: []
      }, this.options),
      showFm: false
    };
  },
  methods: {
    changeFile: function changeFile() {
      var _this = this;

      this.showFm = true;
      Vue.nextTick(function () {
        var vm = _this;
        var fm = _this.$refs.fmw.$refs.fm;
        fm.$store.commit('fm/setFileCallBack', function (fileUrl) {
          if (fileUrl.startsWith(document.location.origin)) {
            fileUrl = fileUrl.replace(document.location.origin, '');
          }

          vm.field_value = fileUrl;
          vm.showFm = false;
        });
      });
    }
  },
  watch: {},
  beforeMount: function beforeMount() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "GeocodingField",
  "extends": JasmineBaseField,
  data: function data() {
    return {
      opts: Object.assign({
        type: 'text'
      }, this.options),
      latLng: null,
      map: null,
      marker: null
    };
  },
  methods: {
    loadGmapApi: function loadGmapApi() {
      var url = "https://maps.googleapis.com/maps/api/js?key=".concat(this.opts.api_key, "&libraries=places");

      if (!window.google) {
        var s = document.createElement('script');
        s.src = url;
        s.onload = this.initMap;
        document.body.appendChild(s);
      } else {
        this.initMap();
      }
    },
    createMarker: function createMarker(location) {
      var vm = this;

      if (vm.marker) {
        vm.marker.setMap(null);
      } //Create a marker and placed it on the map.


      vm.marker = new google.maps.Marker({
        position: location,
        map: vm.map
      });
      vm.map.panTo(location); // Add location to hidden fields

      vm.field_value.lat = location.lat();
      vm.field_value.lng = location.lng();
    },
    initMap: function initMap() {
      var vm = this;
      vm.latLng = new google.maps.LatLng(vm.field_value.lat, vm.field_value.lng);
      vm.map = new google.maps.Map(vm.$refs.mapElem, {
        center: vm.latLng,
        zoom: 2
      });
      var markerLatLng = new google.maps.LatLng(vm.field_value.lat, vm.field_value.lng);
      vm.marker = new google.maps.Marker({
        position: markerLatLng,
        map: vm.map
      });
      vm.map.panTo(markerLatLng);
      vm.map.setZoom(10);
      var autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */
      vm.$refs.addressElem, {
        types: ['geocode']
      });
      autocomplete.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        vm.field_value.address = place.formatted_address;
        vm.createMarker(place.geometry.location);
      });
      google.maps.event.addListener(vm.map, 'click', function (e) {
        //Determine the location where the user has clicked.
        var location = e.latLng;
        vm.createMarker(location);
      });
    }
  },
  mounted: function mounted() {
    this.loadGmapApi();

    if (['checkbox', 'radio'].indexOf(this.opts.type) > -1) {
      console.error("".concat(this.name, " is using <input-field>, Please use <").concat(this.opts.type, "-field> instead of <input-field> for ").concat(this.opts.type, " fields"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "GroupedField",
  "extends": JasmineBaseField,
  data: function data() {
    return {
      opts: Object.assign({
        fields: []
      }, this.options)
    };
  },
  methods: {
    loadValues: function loadValues() {
      var vm = this;
      vm.fields.forEach(function (field) {
        if (field.repeats > 1) {
          //Vue.set(vm.values, field.name, vm.old[field.name] || vm.breadable[field.name] || [field.getDefault()]);
          Vue.set(vm.field_value, field.name, //vm.old[field.name] ||
          vm.field_value[field.name] || [field.getDefault()]);
        } else {//Vue.set(vm.values, field.name, vm.old[field.name] || vm.breadable[field.name] || field.getDefault());
        }
      });
    },
    repeatField: function repeatField(field) {
      this.field_value[field.name].push(field.getDefault());
    },
    removeRepeatedField: function removeRepeatedField(fieldName, i) {
      this.field_value[fieldName].splice(i, 1);
    }
  },
  computed: {
    fields: function fields() {
      return this.opts.fields.map(function (f) {
        f.getDefault = function () {
          if (_typeof(f["default"]) === 'object') {
            return JSON.parse(JSON.stringify(f["default"]));
          }

          return f["default"];
        };

        return f;
      });
    },
    errors: function errors() {
      return {};
    }
  },
  beforeMount: function beforeMount() {
    this.loadValues();
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ImageField",
  "extends": JasmineBaseField,
  data: function data() {
    return {
      opts: Object.assign({
        options: []
      }, this.options),
      showFm: false
    };
  },
  methods: {
    changeImage: function changeImage() {
      var _this = this;

      this.showFm = true;
      Vue.nextTick(function () {
        var vm = _this;
        var fm = _this.$refs.fmw.$refs.fm;
        fm.$store.commit('fm/setFileCallBack', function (fileUrl) {
          // todo: if note image
          console.log(fileUrl);
          window.fm = fm;

          if (fileUrl.startsWith(document.location.origin)) {
            fileUrl = fileUrl.replace(document.location.origin, '');
          }

          vm.field_value.src = fileUrl;
          vm.showFm = false;
          Vue.nextTick(function () {
            setTimeout(function () {
              vm.field_value.w = vm.$refs.preview.naturalWidth;
              vm.field_value.h = vm.$refs.preview.naturalHeight; //this.field_value.path = null;
            }, 250);
          });
        });
      });
    }
  },
  watch: {},
  beforeMount: function beforeMount() {
    this.field_value.src = this.field_value.src || "https://placehold.it/150x150";
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "InputField",
  "extends": JasmineBaseField,
  data: function data() {
    return {
      opts: Object.assign({
        type: 'text'
      }, this.options)
    };
  },
  mounted: function mounted() {
    if (['checkbox', 'radio'].indexOf(this.opts.type) > -1) {
      console.error("".concat(this.name, " is using <input-field>, Please use <").concat(this.opts.type, "-field> instead of <input-field> for ").concat(this.opts.type, " fields"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SelectField",
  "extends": JasmineBaseField,
  data: function data() {
    return {
      opts: Object.assign({
        options: []
      }, this.options)
    };
  },
  mounted: function mounted() {
    if (['checkbox', 'radio'].indexOf(this.opts.type) > -1) {
      console.error("".concat(this.name, " is using <input-field>, Please use <").concat(this.opts.type, "-field> instead of <input-field> for ").concat(this.opts.type, " fields"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TextareaField",
  "extends": JasmineBaseField,
  data: function data() {
    return {
      opts: Object.assign({
        rows: 5
      }, this.options)
    };
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WysiwygField",
  "extends": JasmineBaseField,
  data: function data() {
    return {
      opts: Object.assign({
        options: []
      }, this.options)
    };
  },
  computed: {
    config: function config() {
      return {
        height: 500,
        menubar: false,
        //language: 'he_IL',
        directionality: this.isLocaleRtl ? 'rtl' : 'ltr',
        //file_picker_callback:
        plugins: 'link, table, code, lists, image, media',
        toolbar: ['undo redo', 'fontselect fontsizeselect', 'styleselect bold italic underline', 'forecolor backcolor', 'alignleft aligncenter alignright', 'bullist numlist outdent indent', 'link table', 'image media', 'code'].join(' | ')
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Dropdown.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Dropdown.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Dropdown",
  props: {
    btnClass: {
      required: false,
      type: String
    }
  },
  data: function data() {
    return {
      opened: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FileManagerWrapper",
  data: function data() {
    return {
      settings: {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          Authorization: "Bearer ".concat(window.localStorage.getItem('user-token'))
        },
        baseUrl: document.getElementById('app').dataset.fmUrl,
        windowsConfig: 2 // overwrite config
        //lang: 'de',                                 // set language

      }
    };
  },
  mounted: function mounted() {
    this.$refs.fm.$store.commit("fm/left/setView", 'grid');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Redirections",
  props: {
    indexUrl: {
      required: true,
      type: String
    },
    saveUrl: {
      required: true,
      type: String
    },
    deleteUrl: {
      required: true,
      type: String
    },
    exportUrl: {
      required: true,
      type: String
    },
    importUrl: {
      required: true,
      type: String
    }
  },
  data: function data() {
    return {
      newRedirection: {
        from: '',
        to: '',
        permanent: true,
        regex: false,
        enabled: true
      },
      redirections: []
    };
  },
  methods: {
    load: function load() {
      var vm = this;
      axios.get(vm.indexUrl).then(function (r) {
        vm.redirections = r.data;
      });
    },
    save: function save(r) {
      var vm = this;
      axios.post(vm.saveUrl, r).then(function (res) {
        if (!r.id) {
          vm.newRedirection.from = '';
          vm.newRedirection.to = '';
          vm.newRedirection.permanent = true;
          vm.newRedirection.regex = false;
          vm.newRedirection.enabled = true;
          vm.load();
        }
      });
    },
    remove: function remove(id, i) {
      var vm = this;
      Swal.fire({
        title: vm.$t('swal.Delete'),
        text: vm.$t('swal.sure', {
          title: id
        }),
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: vm.$t('swal.Cancel'),
        confirmButtonText: vm.$t('swal.Yes')
      }).then(function (r) {
        if (r.value) {
          axios["delete"](vm.saveUrl, {
            params: {
              id: id
            }
          }).then(function (res) {
            if (res.data.success) {
              vm.load();
            }
          });
        }
      });
    },
    appendQuery: function appendQuery(r) {
      if (r.regex) {
        return;
      }

      r.regex = true; // remove query string if exists;

      r.from = r.from.split('?')[0];
      r.from = "^".concat(r.from, "(\\?.*)?$");
      r.to = "".concat(r.to, "$1");
    },
    httpAndS: function httpAndS(r) {
      r.regex = true;
      r.from = r.from.replace(/https?:\/\//, 'https?://');
    },
    importRedirections: function importRedirections() {
      var vm = this;
      vm.$refs.importFormInput.click();
      vm.$refs.importFormInput.addEventListener('change', function (evt) {
        setTimeout(function () {
          vm.$refs.importForm.submit();
        }, 250);
      });
    }
  },
  mounted: function mounted() {
    this.load();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SideBar",
  props: {
    menuItems: {
      required: true,
      type: [Array, Object]
    }
  },
  data: function data() {
    return {
      opened: true,
      items: []
    };
  },
  methods: {
    agnosticLength: function agnosticLength(thing) {
      return (Array.isArray(thing) ? thing : Object.keys(thing)).length;
    }
  },
  mounted: function mounted() {
    Vue.set(this, 'items', this.menuItems);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TopBar",
  props: {
    user: {
      required: true,
      type: Object
    },
    localeUrl: {
      required: true,
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

var qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");

function indexInParent(node) {
  var children = node.parentNode.childNodes;
  var num = 0;

  for (var i = 0; i < children.length; i++) {
    if (children[i] === node) return num;
    if (children[i].nodeType === 1) num++;
  }

  return -1;
}

var VDataTable = {
  name: 'VDataTable',
  props: {
    dataUrl: {
      required: true,
      type: String
    },
    sortUrl: {
      required: false,
      type: String
    },
    sortColumn: {
      required: false,
      type: String
    },
    keyColumn: {
      required: false,
      type: String
    },
    tableClass: {
      required: false,
      type: [Array, String],
      "default": ''
    },
    lengths: {
      required: false,
      type: Array,
      "default": function _default() {
        return [10, 25, 50, 100];
      }
    }
  },
  data: function data() {
    return {
      columns: [],
      request: {
        draw: 0,
        start: 0,
        length: 10,
        columns: [],
        order: [],
        search: {
          value: null,
          regex: false
        }
      },
      response: {
        draw: 0,
        recordsTotal: 0,
        recordsFiltered: 0,
        data: [],
        error: null
      },
      loading: true
    };
  },
  methods: {
    load: function load() {
      var vm = this;
      vm.loading = true;
      vm.request.columns = vm.columns;
      vm.request.draw++;
      axios.get(vm.dataUrl, {
        params: vm.request,
        paramsSerializer: function paramsSerializer(params) {
          return qs.stringify(params);
        }
      }).then(function (r) {
        vm.response = r.data;
        vm.loading = false;
      });
    },
    order: function order($event) {
      window.e = $event;
    },
    goToPage: function goToPage(n) {
      this.request.start = this.request.length * (n - 1);
    },
    next: function next() {
      if (this.currentPage !== this.pages) {
        this.request.start += this.request.length;
      }
    },
    prev: function prev() {
      if (this.currentPage > 1) {
        this.request.start -= this.request.length;
      }
    },
    reorder: function reorder(change) {
      var _this = this;

      if (!change.moved) {
        return;
      }

      if (!this.sortUrl) {
        return;
      }

      var newOrder = this.response.data.map(function (i, n) {
        return {
          id: i[_this.keyColumn],
          order: n + 1
        };
      });
      axios.put(this.sortUrl, {
        order: newOrder
      }).then(function (r) {
        _this.load();
      });
    },
    $get: function $get(obj, path) {
      var vm = this;

      if (typeof obj === "string") {
        obj = vm[obj];
      }

      function index(obj, i) {
        return obj[i];
      }

      return path.split('.').reduce(index, obj);
    }
  },
  computed: {
    pages: function pages() {
      return Math.ceil(this.response.recordsFiltered / this.request.length);
    },
    currentPage: function currentPage() {
      return this.request.start / this.request.length + 1;
    }
  },
  watch: {
    'request.start': function requestStart() {
      this.load();
    },
    'request.length': function requestLength() {
      this.request.start = 0;
      this.load();
    },
    'request.search.value': function requestSearchValue() {
      this.load();
    },
    'request.search.regex': function requestSearchRegex() {
      this.load();
    }
  },
  mounted: function mounted() {
    if (this.lengths.length > 0) {
      this.request.length = this.lengths[0];
    }

    this.load();
  },
  install: function install(Vue, options) {
    Vue.component('v-data-table', this);
    Vue.directive('dt-column', {
      inserted: function inserted(el, binding, vnode) {
        var vdt = binding.value[0] || null;

        if (vdt && vdt.$options && vdt.$options.name === 'VDataTable') {
          var givenSettings = binding.value[1];

          if (givenSettings.data.indexOf('.') > 0) {
            givenSettings.data = givenSettings.data.split('.')[0];
          }

          var settings = Object.assign({
            name: null,
            data: null,
            searchable: true,
            orderable: true
          }, givenSettings || {});
          var i = vdt.columns.push(settings) - 1; // handle order

          if (settings.orderable) {
            el.addEventListener('click', function (evt) {
              var th = this;
              var thI = indexInParent(th);
              var dir;

              if (th.classList.contains('vDataTable-asc')) {
                th.classList.remove('vDataTable-asc');
                th.classList.add('vDataTable-desc');
                dir = 'desc';
              } else {
                th.classList.remove('vDataTable-desc');
                th.classList.add('vDataTable-asc');
                dir = 'asc';
              } // clear all sorting


              th.parentNode.querySelectorAll('th').forEach(function (oneTh, oneThI) {
                if (oneThI === thI) {
                  return;
                }

                oneTh.classList.remove('vDataTable-asc');
                oneTh.classList.remove('vDataTable-desc');
              });
              vdt.request.order = [];
              vdt.request.order.push({
                column: thI,
                dir: dir
              });
              vdt.load();
            });
          }

          return;
        }

        console.error(el, 'VDataTable is required');
      }
    });
  }
};
window.VDataTable = VDataTable;
/* harmony default export */ __webpack_exports__["default"] = (VDataTable);

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=style&index=0&id=fab04f04&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=style&index=0&id=fab04f04&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bread-edit[data-v-fab04f04]  input,\n.bread-edit[data-v-fab04f04]  select,\n.bread-edit[data-v-fab04f04]  textarea {\n  direction: ltr;\n}\n.bread-edit.writing-rtl[data-v-fab04f04]  input,\n.bread-edit.writing-rtl[data-v-fab04f04]  select,\n.bread-edit.writing-rtl[data-v-fab04f04]  textarea {\n  direction: rtl;\n}\n.field[data-v-fab04f04] {\n  margin-bottom: 0.25rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=style&index=0&id=7390bbd1&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=style&index=0&id=7390bbd1&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".j-location-field-map[data-v-7390bbd1] {\n  width: 100%;\n  height: 400px;\n  border: 1px solid #eee;\n  margin-bottom: 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=style&index=0&id=171a6f84&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=style&index=0&id=171a6f84&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".redirection-item[data-v-171a6f84] {\n  background-color: #f2f2f2;\n}\n.redirection-item .r-id[data-v-171a6f84] {\n  text-align: center;\n  width: 5ch;\n  font-weight: bold;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=style&index=0&id=333980e2&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=style&index=0&id=333980e2&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-bar[data-v-333980e2] {\n  background-color: #262626;\n  min-height: calc(100vh - 40px);\n  width: 65px;\n  padding: 0.5rem 0;\n  transition: width 0.3s ease-in-out;\n}\n.side-bar.opened[data-v-333980e2] {\n  width: 200px;\n  flex: 0 0 200px;\n}\n.side-bar .side-bar-content[data-v-333980e2] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: calc(40px + 0.5rem);\n}\n.side-bar .side-bar-content .nav .nav-item .nav-link[data-v-333980e2] {\n  color: white;\n  padding: 0.5rem 0.5rem;\n  font-size: 1.25em;\n  justify-content: flex-start;\n}\n.side-bar .side-bar-content .nav .nav-item .nav-link .fas[data-v-333980e2] {\n  font-size: 1.25rem;\n  display: inline-block;\n  -webkit-padding-end: 0.5em;\n          padding-inline-end: 0.5em;\n}\n.side-bar .side-bar-content .nav .nav-item .nav-link .fas + span[data-v-333980e2] {\n  flex: 1;\n}\n.side-bar .side-bar-content .nav .nav-item .nav-link .fas.none[data-v-333980e2]:before {\n  content: \" \";\n  width: 1.15ch;\n  display: inline-block;\n}\n.side-bar .side-bar-content .nav .nav-item[data-v-333980e2]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.side-bar .side-bar-content .nav .nav-item.dropdown .child-menu[data-v-333980e2] {\n  display: none;\n  background-color: #262626;\n}\n.side-bar .side-bar-content .nav .nav-item.dropdown .child-menu > *[data-v-333980e2] {\n  -webkit-padding-start: 3rem;\n          padding-inline-start: 3rem;\n  font-size: 1.1em;\n}\n.side-bar .side-bar-content .nav .nav-item.dropdown .child-menu > *[data-v-333980e2]:hover {\n  color: #4285F4;\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.side-bar .side-bar-content .nav .nav-item.dropdown [aria-haspopup][aria-expanded=true] + .child-menu[data-v-333980e2] {\n  display: block;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header.top-bar {\n  min-height: 40px;\n  background-color: #000;\n}\nheader.top-bar .dropdown .dropdown-menu {\n  background-color: #000;\n  color: #fff;\n  padding: 0;\n}\nheader.top-bar .dropdown .dropdown-menu .dropdown-divider {\n  margin: 0;\n  border-top: 1px solid #e9ecef30;\n}\nheader.top-bar .dropdown .dropdown-menu .dropdown-item {\n  color: #fff;\n  padding: 0.5rem 1.5rem;\n}\nheader.top-bar .dropdown .dropdown-menu .dropdown-item:hover {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.2);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=style&index=0&id=1ace506b&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=style&index=0&id=1ace506b&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vDataTable-asc[data-v-1ace506b]:before {\n  content: \" \";\n  background: url('data:image/svg+xml;utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 301.219 301.219\"><path d=\"M149.365 262.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h139.365c5.522 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM10 229.736h120.586c5.522 0 10-4.477 10-10v-10c0-5.523-4.478-10-10-10H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10zM10 166.736h101.805c5.522 0 10-4.477 10-10v-10c0-5.523-4.478-10-10-10H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10zM10 96.736h83.025c5.522 0 10-4.477 10-10v-10c0-5.523-4.478-10-10-10H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10zM10 33.736h64.244c5.522 0 10-4.477 10-10v-10c0-5.523-4.478-10-10-10H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10zM298.29 216.877l-7.07-7.071a10.001 10.001 0 00-14.142 0l-34.394 34.393V18.736c0-5.523-4.477-10-10-10h-10c-5.522 0-10 4.477-10 10v225.462l-34.394-34.393a9.999 9.999 0 00-14.142 0l-7.07 7.071c-3.905 3.905-3.905 10.237 0 14.142l63.535 63.536a10.003 10.003 0 0014.142 0l63.535-63.536c3.905-3.905 3.905-10.236 0-14.141z\"/></svg>') no-repeat center/100% 100%;\n  display: inline-block;\n  height: 0.8125rem;\n  width: 1rem;\n}\n.vDataTable-desc[data-v-1ace506b]:before {\n  content: \" \";\n  background: url('data:image/svg+xml;utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 301.219 301.219\"><path d=\"M159.365 23.736v-10c0-5.523-4.477-10-10-10H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h139.365c5.523 0 10-4.477 10-10zM130.586 66.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h120.586c5.523 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM111.805 129.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h101.805c5.523 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM93.025 199.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h83.025c5.522 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM74.244 262.736H10c-5.523 0-10 4.477-10 10v10c0 5.523 4.477 10 10 10h64.244c5.522 0 10-4.477 10-10v-10c0-5.523-4.477-10-10-10zM298.29 216.877l-7.071-7.071a10.001 10.001 0 00-14.143 0l-34.393 34.393V18.736c0-5.523-4.477-10-10-10h-10c-5.523 0-10 4.477-10 10v225.462l-34.393-34.393a10.003 10.003 0 00-14.142 0l-7.072 7.071c-3.904 3.905-3.904 10.237 0 14.142l63.536 63.536a9.968 9.968 0 007.071 2.929 9.966 9.966 0 007.071-2.929l63.536-63.536c3.905-3.905 3.905-10.237 0-14.141z\"/></svg>') no-repeat center/100% 100%;\n  display: inline-block;\n  height: 0.8125rem;\n  width: 1rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=style&index=0&id=6db46988&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=style&index=0&id=6db46988&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.preview[data-v-6db46988] {\n    cursor: pointer;\n    max-width: 100%;\n    max-height: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=style&index=0&id=add47764&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=style&index=0&id=add47764&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form-row.grouped[data-v-add47764] {\n    background-color: #e1f4ff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=style&index=0&id=1da1fd71&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=style&index=0&id=1da1fd71&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.preview[data-v-1da1fd71] {\n    cursor: pointer;\n    max-width: 100%;\n    max-height: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=style&index=0&id=fab04f04&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=style&index=0&id=fab04f04&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BreadEdit.vue?vue&type=style&index=0&id=fab04f04&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=style&index=0&id=fab04f04&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=style&index=0&id=7390bbd1&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=style&index=0&id=7390bbd1&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeocodingField.vue?vue&type=style&index=0&id=7390bbd1&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=style&index=0&id=7390bbd1&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=style&index=0&id=171a6f84&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=style&index=0&id=171a6f84&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Redirections.vue?vue&type=style&index=0&id=171a6f84&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=style&index=0&id=171a6f84&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=style&index=0&id=333980e2&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=style&index=0&id=333980e2&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=style&index=0&id=333980e2&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=style&index=0&id=333980e2&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=style&index=0&id=1ace506b&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=style&index=0&id=1ace506b&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VDataTable.vue?vue&type=style&index=0&id=1ace506b&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=style&index=0&id=1ace506b&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=style&index=0&id=6db46988&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=style&index=0&id=6db46988&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileField.vue?vue&type=style&index=0&id=6db46988&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=style&index=0&id=6db46988&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=style&index=0&id=add47764&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=style&index=0&id=add47764&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupedField.vue?vue&type=style&index=0&id=add47764&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=style&index=0&id=add47764&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=style&index=0&id=1da1fd71&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=style&index=0&id=1da1fd71&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageField.vue?vue&type=style&index=0&id=1da1fd71&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=style&index=0&id=1da1fd71&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=template&id=fab04f04&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=template&id=fab04f04&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bread-edit row",
      class: { "writing-rtl": _vm.isLocaleRtl }
    },
    _vm._l(_vm.manifest, function(column, classId) {
      return _c(
        "div",
        { key: classId, class: classId },
        _vm._l(column, function(fields, gTitle) {
          return _c("div", { key: gTitle, staticClass: "card mb-4" }, [
            gTitle[0] !== "_"
              ? _c("div", { staticClass: "card-header" }, [
                  _c("h4", { staticClass: "mb-0" }, [_vm._v(_vm._s(gTitle))])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "div",
                { staticClass: "form-row" },
                _vm._l(fields, function(field, fi) {
                  return _c(
                    "div",
                    {
                      key: fi,
                      staticClass: "field p-1 form-group",
                      class: field.width
                    },
                    [
                      field.repeats > 1
                        ? [
                            _c(
                              "draggable",
                              {
                                attrs: {
                                  list: _vm.values[field.name],
                                  "ghost-class": "ghost",
                                  handle: ".dnd-handler"
                                }
                              },
                              [
                                _vm._l(_vm.values[field.name], function(
                                  value,
                                  vi
                                ) {
                                  return _c(
                                    "div",
                                    {
                                      key: field.id + vi,
                                      staticClass: "d-flex"
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "form-group flex-fill" },
                                        [
                                          _c(
                                            "label",
                                            { attrs: { for: field.id + vi } },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(field.label) +
                                                  " (" +
                                                  _vm._s(vi + 1) +
                                                  ")\n                                        "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(field.component, {
                                            tag: "component",
                                            attrs: {
                                              id: field.id + vi,
                                              name: field.name + "[" + vi + "]",
                                              invalid: !!_vm.errors[field.name],
                                              label: field.label,
                                              options: field.options,
                                              validation: field.validation,
                                              locale: _vm.locale,
                                              "is-locale-rtl": _vm.isLocaleRtl
                                            },
                                            model: {
                                              value: _vm.values[field.name][vi],
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.values[field.name],
                                                  vi,
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "values[field.name][vi]"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticStyle: {
                                            "padding-top": "1.5rem",
                                            "padding-inline-start": "1.25rem"
                                          }
                                        },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary dnd-handler",
                                              attrs: {
                                                type: "button",
                                                title:
                                                  _vm.$t("Reorder") +
                                                  " " +
                                                  field.label
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-arrows-alt"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass: "btn btn-danger",
                                              attrs: {
                                                disabled:
                                                  _vm.values[field.name]
                                                    .length === 1,
                                                type: "button",
                                                title:
                                                  _vm.$t("Remove") +
                                                  " " +
                                                  field.label +
                                                  " (" +
                                                  (vi + 1) +
                                                  ")"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.removeRepeatedField(
                                                    field.name,
                                                    vi
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-trash"
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "mb-5" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      attrs: {
                                        disabled:
                                          _vm.values[field.name].length >=
                                          field.repeats,
                                        type: "button",
                                        title: _vm.$t("Add") + " " + field.label
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.repeatField(field)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fas fa-plus" })]
                                  )
                                ])
                              ],
                              2
                            )
                          ]
                        : [
                            _c("label", { attrs: { for: field.id } }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(field.label) +
                                  "\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c(field.component, {
                              tag: "component",
                              attrs: {
                                id: field.id,
                                name: field.name,
                                invalid: !!_vm.errors[field.name],
                                label: field.label,
                                options: field.options,
                                validation: field.validation,
                                locale: _vm.locale,
                                "is-locale-rtl": _vm.isLocaleRtl
                              },
                              model: {
                                value: _vm.values[field.name],
                                callback: function($$v) {
                                  _vm.$set(_vm.values, field.name, $$v)
                                },
                                expression: "values[field.name]"
                              }
                            }),
                            _vm._v(" "),
                            field.description
                              ? _c(
                                  "small",
                                  {
                                    staticClass: "form-text text-muted",
                                    attrs: { id: field.id + "Help" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(field.description) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.errors[field.name]
                              ? _c(
                                  "span",
                                  {
                                    staticClass: "invalid-feedback",
                                    attrs: { role: "alert" }
                                  },
                                  [
                                    _c("strong", {
                                      domProps: {
                                        textContent: _vm._s(
                                          _vm.errors[field.name][0]
                                        )
                                      }
                                    })
                                  ]
                                )
                              : _vm._e()
                          ]
                    ],
                    2
                  )
                }),
                0
              )
            ])
          ])
        }),
        0
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue?vue&type=template&id=55b8294a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue?vue&type=template&id=55b8294a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.field_value,
            expression: "field_value"
          }
        ],
        attrs: { type: "hidden", name: _vm.name },
        domProps: { value: _vm.field_value },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.field_value = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("vuejs-datepicker", {
        attrs: {
          id: _vm.id,
          format: _vm.format,
          placeholder: "dd.mm.yyyy",
          language: _vm.dLocales[_vm.$i18n.locale] || _vm.dLocales.en,
          required: _vm.validation.indexOf("required") > -1,
          "input-class": { "form-control": 1, "is-invalid": _vm.invalid }
        },
        on: { input: _vm.update },
        model: {
          value: _vm.date,
          callback: function($$v) {
            _vm.date = $$v
          },
          expression: "date"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=template&id=6db46988&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=template&id=6db46988&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "input-group mb-3" }, [
      _c("div", { staticClass: "input-group-prepend" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-outline-secondary",
            attrs: { type: "button" },
            on: { click: _vm.changeFile }
          },
          [_vm._v("Choose file\n            ")]
        )
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.field_value,
            expression: "field_value"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: _vm.name },
        domProps: { value: _vm.field_value },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.field_value = $event.target.value
          }
        }
      })
    ]),
    _vm._v(" "),
    _vm.showFm
      ? _c(
          "div",
          {
            staticClass: "modal fade show d-block",
            attrs: { tabindex: "-1", role: "dialog", "aria-hidden": "true" }
          },
          [
            _c(
              "div",
              {
                staticClass: "modal-dialog modal-xl",
                attrs: { role: "document" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "modal-content",
                    staticStyle: { "min-height": "80vh" }
                  },
                  [
                    _c("div", { staticClass: "modal-header" }, [
                      _c("h5", { staticClass: "modal-title" }, [
                        _vm._v(
                          "File Manager | Choose image for " + _vm._s(_vm.label)
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: { type: "button", "aria-label": "Close" },
                          on: {
                            click: function($event) {
                              _vm.showFm = false
                            }
                          }
                        },
                        [
                          _c("span", { attrs: { "aria-hidden": "true" } }, [
                            _vm._v("×")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "modal-body" },
                      [_c("file-manager-wrapper", { ref: "fmw" })],
                      1
                    )
                  ]
                )
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.showFm
      ? _c("div", { staticClass: "modal-backdrop fade show" })
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=template&id=7390bbd1&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=template&id=7390bbd1&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.field_value.address,
          expression: "field_value.address"
        }
      ],
      ref: "addressElem",
      staticClass: "form-control",
      class: { "is-invalid": _vm.invalid },
      attrs: { type: "text", name: _vm.name + "[address]" },
      domProps: { value: _vm.field_value.address },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.$set(_vm.field_value, "address", $event.target.value)
        }
      }
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.field_value.lat,
          expression: "field_value.lat"
        }
      ],
      attrs: { type: "hidden", name: _vm.name + "[lat]" },
      domProps: { value: _vm.field_value.lat },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.$set(_vm.field_value, "lat", $event.target.value)
        }
      }
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.field_value.lng,
          expression: "field_value.lng"
        }
      ],
      attrs: { type: "hidden", name: _vm.name + "[lng]" },
      domProps: { value: _vm.field_value.lng },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.$set(_vm.field_value, "lng", $event.target.value)
        }
      }
    }),
    _vm._v(" "),
    _c("div", { ref: "mapElem", staticClass: "j-location-field-map mt-3" })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=template&id=add47764&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=template&id=add47764&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "form-row grouped" },
    _vm._l(_vm.fields, function(field, fi) {
      return _c(
        "div",
        {
          key: field.id + fi,
          staticClass: "field p-4 form-group",
          class: field.width
        },
        [
          field.repeats > 1
            ? [
                _c(
                  "draggable",
                  {
                    attrs: {
                      list: _vm.field_value[field.name],
                      "ghost-class": "ghost",
                      handle: ".dnd-handler"
                    }
                  },
                  [
                    _vm._l(_vm.field_value[field.name], function(value, vi) {
                      return _c(
                        "div",
                        { key: field.id + vi, staticClass: "d-flex" },
                        [
                          _c(
                            "div",
                            { staticClass: "form-group flex-fill" },
                            [
                              _c("label", { attrs: { for: field.id + vi } }, [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(field.label) +
                                    " (" +
                                    _vm._s(vi + 1) +
                                    ")\n                        "
                                )
                              ]),
                              _vm._v(" "),
                              _c(field.component, {
                                tag: "component",
                                attrs: {
                                  id: field.id + vi,
                                  name:
                                    _vm.name +
                                    "[" +
                                    field.name +
                                    "]" +
                                    "[" +
                                    vi +
                                    "]",
                                  invalid: !!_vm.errors[field.name],
                                  label: field.label,
                                  options: field.options,
                                  validation: field.validation,
                                  locale: _vm.locale,
                                  "is-locale-rtl": _vm.isLocaleRtl
                                },
                                model: {
                                  value: _vm.field_value[field.name][vi],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.field_value[field.name],
                                      vi,
                                      $$v
                                    )
                                  },
                                  expression: "field_value[field.name][vi]"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "padding-top": "1.5rem",
                                "padding-inline-start": "1.25rem"
                              }
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary dnd-handler",
                                  attrs: {
                                    type: "button",
                                    title: _vm.$t("Reorder") + " " + field.label
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-arrows-alt" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger",
                                  attrs: {
                                    disabled:
                                      _vm.field_value[field.name].length === 1,
                                    type: "button",
                                    title:
                                      _vm.$t("Remove") +
                                      " " +
                                      field.label +
                                      " (" +
                                      (vi + 1) +
                                      ")"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.removeRepeatedField(
                                        field.name,
                                        vi
                                      )
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-trash" })]
                              )
                            ]
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-5" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: {
                            disabled:
                              _vm.field_value[field.name].length >=
                              field.repeats,
                            type: "button",
                            title: _vm.$t("Add") + " " + field.label
                          },
                          on: {
                            click: function($event) {
                              return _vm.repeatField(field)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-plus" })]
                      )
                    ])
                  ],
                  2
                )
              ]
            : [
                _c("label", { attrs: { for: field.id } }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(field.label) +
                      "\n            "
                  )
                ]),
                _vm._v(" "),
                _c(field.component, {
                  tag: "component",
                  attrs: {
                    id: field.id,
                    name: _vm.name + "[" + field.name + "]",
                    invalid: !!_vm.errors[field.name],
                    label: field.label,
                    options: field.options,
                    validation: field.validation,
                    locale: _vm.locale,
                    "is-locale-rtl": _vm.isLocaleRtl
                  },
                  model: {
                    value: _vm.field_value[field.name],
                    callback: function($$v) {
                      _vm.$set(_vm.field_value, field.name, $$v)
                    },
                    expression: "field_value[field.name]"
                  }
                }),
                _vm._v(" "),
                field.description
                  ? _c(
                      "small",
                      {
                        staticClass: "form-text text-muted",
                        attrs: { id: field.id + "Help" }
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(field.description) +
                            "\n            "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.errors[field.name]
                  ? _c(
                      "span",
                      {
                        staticClass: "invalid-feedback",
                        attrs: { role: "alert" }
                      },
                      [
                        _c("strong", {
                          domProps: {
                            textContent: _vm._s(_vm.errors[field.name][0])
                          }
                        })
                      ]
                    )
                  : _vm._e()
              ]
        ],
        2
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=template&id=1da1fd71&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=template&id=1da1fd71&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.field_value.w,
          expression: "field_value.w"
        }
      ],
      attrs: { type: "hidden", name: _vm.name + "[w]" },
      domProps: { value: _vm.field_value.w },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.$set(_vm.field_value, "w", $event.target.value)
        }
      }
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.field_value.h,
          expression: "field_value.h"
        }
      ],
      attrs: { type: "hidden", name: _vm.name + "[h]" },
      domProps: { value: _vm.field_value.h },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.$set(_vm.field_value, "h", $event.target.value)
        }
      }
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.field_value.src,
          expression: "field_value.src"
        }
      ],
      attrs: { type: "hidden", name: _vm.name + "[src]" },
      domProps: { value: _vm.field_value.src },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.$set(_vm.field_value, "src", $event.target.value)
        }
      }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "form-control w-auto d-inline-block p-2" }, [
      _c("img", {
        ref: "preview",
        staticClass: "preview",
        attrs: { src: _vm.field_value.src, alt: "preview" },
        on: { click: _vm.changeImage }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group mt-4" }, [
      _c("label", { attrs: { for: _vm.id + "_alt" } }, [
        _vm._v("\n            " + _vm._s(_vm.label) + " Alt\n        ")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.field_value.alt,
            expression: "field_value.alt"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: _vm.name + "[alt]" },
        domProps: { value: _vm.field_value.alt },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.field_value, "alt", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _vm.showFm
      ? _c(
          "div",
          {
            staticClass: "modal fade show d-block",
            attrs: { tabindex: "-1", role: "dialog", "aria-hidden": "true" }
          },
          [
            _c(
              "div",
              {
                staticClass: "modal-dialog modal-xl",
                attrs: { role: "document" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "modal-content",
                    staticStyle: { "min-height": "80vh" }
                  },
                  [
                    _c("div", { staticClass: "modal-header" }, [
                      _c("h5", { staticClass: "modal-title" }, [
                        _vm._v(
                          "File Manager | Choose image for " + _vm._s(_vm.label)
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "close",
                          attrs: { type: "button", "aria-label": "Close" },
                          on: {
                            click: function($event) {
                              _vm.showFm = false
                            }
                          }
                        },
                        [
                          _c("span", { attrs: { "aria-hidden": "true" } }, [
                            _vm._v("×")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "modal-body" },
                      [_c("file-manager-wrapper", { ref: "fmw" })],
                      1
                    )
                  ]
                )
              ]
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.showFm
      ? _c("div", { staticClass: "modal-backdrop fade show" })
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue?vue&type=template&id=1745c83c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue?vue&type=template&id=1745c83c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.opts.type === "checkbox"
    ? _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.field_value,
            expression: "field_value"
          }
        ],
        staticClass: "form-control",
        class: { "is-invalid": _vm.invalid },
        attrs: {
          placeholder: _vm.opts.placeholder,
          pattern: _vm.opts.pattern,
          autofocus: _vm.opts.autofocus,
          autocomplete: _vm.opts.autocomplete,
          step: _vm.opts.step,
          max: _vm.opts.max,
          min: _vm.opts.min,
          readonly: _vm.opts.readonly,
          dir: _vm.opts.dir,
          required: _vm.validation.indexOf("required") > -1,
          id: _vm.id,
          name: _vm.name,
          type: "checkbox"
        },
        domProps: {
          checked: Array.isArray(_vm.field_value)
            ? _vm._i(_vm.field_value, null) > -1
            : _vm.field_value
        },
        on: {
          change: function($event) {
            var $$a = _vm.field_value,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.field_value = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.field_value = $$a
                    .slice(0, $$i)
                    .concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.field_value = $$c
            }
          }
        }
      })
    : _vm.opts.type === "radio"
    ? _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.field_value,
            expression: "field_value"
          }
        ],
        staticClass: "form-control",
        class: { "is-invalid": _vm.invalid },
        attrs: {
          placeholder: _vm.opts.placeholder,
          pattern: _vm.opts.pattern,
          autofocus: _vm.opts.autofocus,
          autocomplete: _vm.opts.autocomplete,
          step: _vm.opts.step,
          max: _vm.opts.max,
          min: _vm.opts.min,
          readonly: _vm.opts.readonly,
          dir: _vm.opts.dir,
          required: _vm.validation.indexOf("required") > -1,
          id: _vm.id,
          name: _vm.name,
          type: "radio"
        },
        domProps: { checked: _vm._q(_vm.field_value, null) },
        on: {
          change: function($event) {
            _vm.field_value = null
          }
        }
      })
    : _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.field_value,
            expression: "field_value"
          }
        ],
        staticClass: "form-control",
        class: { "is-invalid": _vm.invalid },
        attrs: {
          placeholder: _vm.opts.placeholder,
          pattern: _vm.opts.pattern,
          autofocus: _vm.opts.autofocus,
          autocomplete: _vm.opts.autocomplete,
          step: _vm.opts.step,
          max: _vm.opts.max,
          min: _vm.opts.min,
          readonly: _vm.opts.readonly,
          dir: _vm.opts.dir,
          required: _vm.validation.indexOf("required") > -1,
          id: _vm.id,
          name: _vm.name,
          type: _vm.opts.type
        },
        domProps: { value: _vm.field_value },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.field_value = $event.target.value
          }
        }
      })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue?vue&type=template&id=23753b88&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue?vue&type=template&id=23753b88&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "select",
    {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.field_value,
          expression: "field_value"
        }
      ],
      staticClass: "form-control",
      class: { "is-invalid": _vm.invalid },
      attrs: {
        multiple: _vm.opts.multiple,
        readonly: _vm.opts.readonly,
        required: _vm.validation.indexOf("required") > -1,
        id: _vm.id,
        name: _vm.name
      },
      on: {
        change: function($event) {
          var $$selectedVal = Array.prototype.filter
            .call($event.target.options, function(o) {
              return o.selected
            })
            .map(function(o) {
              var val = "_value" in o ? o._value : o.value
              return val
            })
          _vm.field_value = $event.target.multiple
            ? $$selectedVal
            : $$selectedVal[0]
        }
      }
    },
    _vm._l(_vm.opts.options, function(option, val) {
      return _c("option", { domProps: { value: val } }, [
        _vm._v("\n        " + _vm._s(option) + "\n    ")
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue?vue&type=template&id=200c4c3e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue?vue&type=template&id=200c4c3e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("textarea", {
    directives: [
      {
        name: "model",
        rawName: "v-model",
        value: _vm.field_value,
        expression: "field_value"
      }
    ],
    staticClass: "form-control",
    class: { "is-invalid": _vm.invalid },
    attrs: {
      rows: _vm.opts.rows,
      placeholder: _vm.opts.placeholder,
      autofocus: _vm.opts.autofocus,
      readonly: _vm.opts.readonly,
      dir: _vm.opts.dir,
      required: _vm.validation.indexOf("required") > -1,
      id: _vm.id,
      name: _vm.name
    },
    domProps: { value: _vm.field_value },
    on: {
      input: function($event) {
        if ($event.target.composing) {
          return
        }
        _vm.field_value = $event.target.value
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue?vue&type=template&id=451c327f&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue?vue&type=template&id=451c327f&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.field_value,
            expression: "field_value"
          }
        ],
        attrs: { type: "hidden", id: _vm.id, name: _vm.name },
        domProps: { value: _vm.field_value },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.field_value = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("editor", {
        attrs: { init: _vm.config },
        model: {
          value: _vm.field_value,
          callback: function($$v) {
            _vm.field_value = $$v
          },
          expression: "field_value"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Dropdown.vue?vue&type=template&id=492b85ce&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Dropdown.vue?vue&type=template&id=492b85ce&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dropdown", class: { show: _vm.opened } }, [
    _c(
      "button",
      {
        staticClass: "dropdown-toggle",
        class: _vm.btnClass,
        attrs: {
          type: "button",
          "aria-haspopup": "true",
          "aria-expanded": _vm.opened ? "true" : "false"
        },
        on: {
          click: function($event) {
            _vm.opened = !_vm.opened
          }
        }
      },
      [_vm._t("btn")],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "dropdown-menu", class: { show: _vm.opened } },
      [_vm._t("dropdown")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue?vue&type=template&id=b2702082&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue?vue&type=template&id=b2702082&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("file-manager", { ref: "fm", attrs: { settings: _vm.settings } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=template&id=171a6f84&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=template&id=171a6f84&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header d-flex justify-content-between" }, [
        _c("div", {
          staticClass: "h4 mb-0",
          domProps: { textContent: _vm._s(_vm.$t("Redirections")) }
        }),
        _vm._v(" "),
        _c("div", [
          _c(
            "a",
            {
              staticClass: "btn btn-outline-info",
              attrs: { href: _vm.exportUrl, target: "_blank" }
            },
            [
              _c("i", { staticClass: "fas fa-download" }),
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.$t("Export")) +
                  "\n                "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-outline-success",
              attrs: { type: "button" },
              on: { click: _vm.importRedirections }
            },
            [
              _c("i", { staticClass: "fas fa-upload" }),
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.$t("Import")) +
                  "\n                "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _vm._l(_vm.redirections, function(r, i) {
            return _c(
              "div",
              { key: r.id, staticClass: "redirection-item px-1 pt-3 mb-4" },
              [
                _c("div", { staticClass: "d-flex align-items-center" }, [
                  _c("div", {
                    staticClass: "r-id",
                    domProps: { textContent: _vm._s(r.id) }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-fill" }, [
                    _c("div", { staticClass: "form-row" }, [
                      _c("div", { staticClass: "form-group px-2 col-md-5" }, [
                        _c("label", { attrs: { for: "from_" + r.id } }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.$t("From (old url)")) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: r.from,
                              expression: "r.from"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "from_" + r.id },
                          domProps: { value: r.from },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(r, "from", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group px-2 col-md-5" }, [
                        _c("label", { attrs: { for: "to_" + r.id } }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.$t("To (new url)")) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: r.to,
                              expression: "r.to"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "to_" + r.id },
                          domProps: { value: r.to },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(r, "to", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group px-2 flex-fill" }, [
                        _c("label", { attrs: { for: "permanent_" + r.id } }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(_vm.$t("Type")) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: r.permanent,
                                expression: "r.permanent"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "permanent_" + r.id },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  r,
                                  "permanent",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { domProps: { value: false } }, [
                              _vm._v(
                                "302 (" + _vm._s(_vm.$t("Temporary")) + ")"
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { domProps: { value: true } }, [
                              _vm._v(
                                "301 (" + _vm._s(_vm.$t("Permanent")) + ")"
                              )
                            ])
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-row" }, [
                      _c("div", { staticClass: "form-group px-2" }, [
                        _c(
                          "div",
                          { staticClass: "custom-control custom-checkbox" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: r.regex,
                                  expression: "r.regex"
                                }
                              ],
                              staticClass: "custom-control-input",
                              attrs: { type: "checkbox", id: "regex_" + r.id },
                              domProps: {
                                checked: Array.isArray(r.regex)
                                  ? _vm._i(r.regex, null) > -1
                                  : r.regex
                              },
                              on: {
                                change: function($event) {
                                  var $$a = r.regex,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(r, "regex", $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          r,
                                          "regex",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(r, "regex", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "custom-control-label",
                                attrs: { for: "regex_" + r.id }
                              },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(_vm.$t("Regular Expression")) +
                                    "\n                                    "
                                )
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group px-2" }, [
                        _c(
                          "div",
                          { staticClass: "custom-control custom-checkbox" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: r.enabled,
                                  expression: "r.enabled"
                                }
                              ],
                              staticClass: "custom-control-input",
                              attrs: {
                                type: "checkbox",
                                id: "enabled_" + r.id
                              },
                              domProps: {
                                checked: Array.isArray(r.enabled)
                                  ? _vm._i(r.enabled, null) > -1
                                  : r.enabled
                              },
                              on: {
                                change: function($event) {
                                  var $$a = r.enabled,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          r,
                                          "enabled",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          r,
                                          "enabled",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(r, "enabled", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "custom-control-label",
                                attrs: { for: "enabled_" + r.id }
                              },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(_vm.$t("Enabled")) +
                                    "\n                                    "
                                )
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group px-2" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-info",
                            attrs: { disabled: r.regex, type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.appendQuery(r)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.$t("Catch query")) +
                                "\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-info",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.httpAndS(r)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.$t("HTTP/HTTPS")) +
                                "\n                                "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex-fill" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group px-2" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.save(r)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.$t("Save")) +
                                "\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.remove(r.id, i)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.$t("Delete")) +
                                "\n                                "
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ]
            )
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "h4",
            domProps: { textContent: _vm._s(_vm.$t("New Redirection")) }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "redirection-item px-1 pt-3 mb-4" }, [
            _c("div", { staticClass: "d-flex align-items-center" }, [
              _c("div", { staticClass: "r-id" }, [_vm._v("-")]),
              _vm._v(" "),
              _c("div", { staticClass: "flex-fill" }, [
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group px-2 col-md-5" }, [
                    _c("label", { attrs: { for: "new_from" } }, [
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.$t("From (old url)")) +
                          "\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newRedirection.from,
                          expression: "newRedirection.from"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "new_from" },
                      domProps: { value: _vm.newRedirection.from },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.newRedirection,
                            "from",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group px-2 col-md-5" }, [
                    _c("label", { attrs: { for: "new_to" } }, [
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.$t("To (new url)")) +
                          "\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newRedirection.to,
                          expression: "newRedirection.to"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "new_to" },
                      domProps: { value: _vm.newRedirection.to },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.newRedirection,
                            "to",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group px-2 flex-fill" }, [
                    _c("label", { attrs: { for: "new_permanent" } }, [
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.$t("Type")) +
                          "\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newRedirection.permanent,
                            expression: "newRedirection.permanent"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "new_permanent" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.newRedirection,
                              "permanent",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { domProps: { value: false } }, [
                          _vm._v("302 (" + _vm._s(_vm.$t("Temporary")) + ")")
                        ]),
                        _vm._v(" "),
                        _c("option", { domProps: { value: true } }, [
                          _vm._v("301 (" + _vm._s(_vm.$t("Permanent")) + ")")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group px-2" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newRedirection.regex,
                              expression: "newRedirection.regex"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "new_regex" },
                          domProps: {
                            checked: Array.isArray(_vm.newRedirection.regex)
                              ? _vm._i(_vm.newRedirection.regex, null) > -1
                              : _vm.newRedirection.regex
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.newRedirection.regex,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.newRedirection,
                                      "regex",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.newRedirection,
                                      "regex",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.newRedirection, "regex", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "new_regex" }
                          },
                          [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.$t("Regular Expression")) +
                                "\n                                    "
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group px-2" }, [
                    _c(
                      "div",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newRedirection.enabled,
                              expression: "newRedirection.enabled"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "new_enabled" },
                          domProps: {
                            checked: Array.isArray(_vm.newRedirection.enabled)
                              ? _vm._i(_vm.newRedirection.enabled, null) > -1
                              : _vm.newRedirection.enabled
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.newRedirection.enabled,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.newRedirection,
                                      "enabled",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.newRedirection,
                                      "enabled",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.newRedirection, "enabled", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "new_enabled" }
                          },
                          [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.$t("Enabled")) +
                                "\n                                    "
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group px-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-info",
                        attrs: {
                          disabled: _vm.newRedirection.regex,
                          type: "button"
                        },
                        on: {
                          click: function($event) {
                            return _vm.appendQuery(_vm.newRedirection)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(_vm.$t("Catch query")) +
                            "\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-info",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.httpAndS(_vm.newRedirection)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(_vm.$t("HTTP/HTTPS")) +
                            "\n                                "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-fill" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group px-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.save(_vm.newRedirection)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(_vm.$t("Save")) +
                            "\n                                "
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        ref: "importForm",
        staticClass: "d-none",
        attrs: {
          action: _vm.importUrl,
          method: "post",
          enctype: "multipart/form-data"
        }
      },
      [
        _c("input", {
          attrs: { type: "hidden", name: "_token" },
          domProps: { value: _vm.$csrf_token }
        }),
        _vm._v(" "),
        _c("input", {
          ref: "importFormInput",
          staticClass: "d-none",
          attrs: { type: "file", name: "file", accept: ".*csv" }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=template&id=333980e2&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=template&id=333980e2&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "aside",
    { staticClass: "side-bar", class: { opened: _vm.opened } },
    [
      _c("div", { staticClass: "side-bar-content" }, [
        _c(
          "ul",
          { staticClass: "nav flex-column" },
          _vm._l(_vm.items, function(item, i) {
            return _c(
              "li",
              {
                key: i,
                staticClass: "nav-item",
                class:
                  item.children && _vm.agnosticLength(item.children)
                    ? "dropdown"
                    : ""
              },
              [
                item.children && _vm.agnosticLength(item.children)
                  ? _c(
                      "a",
                      {
                        staticClass: "nav-link dropdown-toggle d-flex",
                        attrs: {
                          href: item.href || "#",
                          target: item.target || "_self",
                          title: item.title,
                          role: "button",
                          "aria-expanded": item.opened ? "true" : "false",
                          "aria-haspopup": "true"
                        },
                        on: {
                          click: function($event) {
                            item.opened = !item.opened
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fas",
                          class: item.icon || "none"
                        }),
                        _vm._v(" "),
                        _c("span", {
                          domProps: { textContent: _vm._s(item.title) }
                        })
                      ]
                    )
                  : _c(
                      "a",
                      {
                        staticClass: "nav-link d-flex",
                        attrs: {
                          href: item.href || "#",
                          target: item.target || "_self",
                          title: item.title
                        }
                      },
                      [
                        item.icon
                          ? _c("i", { staticClass: "fas", class: item.icon })
                          : _vm._e(),
                        _vm._v(" "),
                        _c("span", {
                          domProps: { textContent: _vm._s(item.title) }
                        })
                      ]
                    ),
                _vm._v(" "),
                item.children && _vm.agnosticLength(item.children)
                  ? _c(
                      "div",
                      { staticClass: "child-menu" },
                      _vm._l(item.children, function(child, ci) {
                        return _c(
                          "a",
                          {
                            key: ci,
                            staticClass: "nav-link",
                            attrs: {
                              href: child.href || "#",
                              target: item.target || "_self",
                              title: child.title
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(child.title) +
                                "\n                    "
                            )
                          ]
                        )
                      }),
                      0
                    )
                  : _vm._e()
              ]
            )
          }),
          0
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=template&id=be99a20a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=template&id=be99a20a& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "header",
    {
      staticClass:
        "top-bar sticky-top d-flex justify-content-between align-items-center"
    },
    [
      _c(
        "div",
        { staticClass: "start px-2" },
        [
          _c("dropdown", {
            attrs: { "btn-class": "btn text-white" },
            scopedSlots: _vm._u([
              {
                key: "btn",
                fn: function() {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("Hi")) +
                        ",\n                " +
                        _vm._s(_vm.user.name) +
                        "\n            "
                    )
                  ]
                },
                proxy: true
              },
              {
                key: "dropdown",
                fn: function() {
                  return [
                    _c(
                      "a",
                      { staticClass: "dropdown-item", attrs: { href: "#" } },
                      [_vm._v("Action 1")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _vm.$i18n.locale === "en"
                      ? _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: {
                              href: _vm.localeUrl.replace("-locale-", "he")
                            }
                          },
                          [_vm._v("עברית")]
                        )
                      : _vm.$i18n.locale === "he"
                      ? _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            attrs: {
                              href: _vm.localeUrl.replace("-locale-", "en")
                            }
                          },
                          [_vm._v("English")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            return _vm.$root.logout()
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.$t("Logout")))]
                    )
                  ]
                },
                proxy: true
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "center" }, [_vm._t("center")], 2),
      _vm._v(" "),
      _c("div", { staticClass: "end px-2" }, [_vm._t("end")], 2)
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=template&id=1ace506b&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=template&id=1ace506b&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vDataTable", class: { "vDataTable-loading": _vm.loading } },
    [
      _c(
        "div",
        {
          staticClass:
            "vDataTable-toolbar d-flex flex-wrap justify-content-between align-content-center"
        },
        [
          _c("div", { staticClass: "vDataTable-search" }, [
            _c("label", [
              _c("span", [_vm._v("Search:")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.request.search.value,
                    expression: "request.search.value"
                  }
                ],
                attrs: { type: "search" },
                domProps: { value: _vm.request.search.value },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.request.search, "value", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("label", [
              _c("span", [_vm._v("Regex:")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.request.search.regex,
                    expression: "request.search.regex"
                  }
                ],
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.request.search.regex)
                    ? _vm._i(_vm.request.search.regex, null) > -1
                    : _vm.request.search.regex
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.request.search.regex,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 &&
                          _vm.$set(
                            _vm.request.search,
                            "regex",
                            $$a.concat([$$v])
                          )
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            _vm.request.search,
                            "regex",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(_vm.request.search, "regex", $$c)
                    }
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _vm.lengths.length > 0
            ? _c("div", { staticClass: "vDataTable-pageLength" }, [
                _c("label", [
                  _vm._v("\n                Show\n                "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.request.length,
                          expression: "request.length"
                        }
                      ],
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.request,
                            "length",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.lengths, function(length, li) {
                      return _c(
                        "option",
                        { key: li, domProps: { value: length } },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(length) +
                              "\n                    "
                          )
                        ]
                      )
                    }),
                    0
                  )
                ])
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "table",
        {
          class: Array.isArray(_vm.tableClass)
            ? _vm.tableClass.join(" ")
            : _vm.tableClass
        },
        [
          _c(
            "thead",
            { on: { click: _vm.order } },
            [_vm._t("thead", null, { t: this })],
            2
          ),
          _vm._v(" "),
          _c(
            "draggable",
            {
              attrs: {
                list: _vm.response.data,
                tag: "tbody",
                "ghost-class": "ghost",
                handle: ".dnd-handler"
              },
              on: { change: _vm.reorder }
            },
            _vm._l(_vm.response.data, function(row, ri) {
              return _c(
                "tr",
                _vm._l(_vm.columns, function(column, ci) {
                  return _c(
                    "td",
                    [
                      _vm._t(
                        "td_" + ci,
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.$get(row, column.name)) +
                              "\n                    "
                          )
                        ],
                        {
                          data: _vm.$get(row, column.name),
                          row: row,
                          column: column
                        }
                      )
                    ],
                    2
                  )
                }),
                0
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "vDataTable-footer d-flex flex-wrap justify-content-between align-content-center"
        },
        [
          _c(
            "div",
            { staticClass: "vDataTable-count" },
            [
              _c("span", [_vm._v("Showing")]),
              _vm._v(" "),
              _c("span", {
                domProps: { textContent: _vm._s(_vm.request.start + 1) }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("to")]),
              _vm._v(" "),
              _c("span", {
                domProps: {
                  textContent: _vm._s(
                    _vm.request.start + _vm.response.data.length
                  )
                }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("of")]),
              _vm._v(" "),
              _c("span", {
                domProps: { textContent: _vm._s(_vm.response.recordsFiltered) }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("entries")]),
              _vm._v(" "),
              _vm.response.recordsFiltered !== _vm.response.recordsTotal
                ? [
                    _c("span", [
                      _vm._v("\n                    ("),
                      _c("span", [_vm._v("Filtered from")]),
                      _vm._v(" "),
                      _c("span", {
                        domProps: {
                          textContent: _vm._s(_vm.response.recordsTotal)
                        }
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("total entries")]),
                      _vm._v(")\n                ")
                    ])
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "vDataTable-pagination" }, [
            _c(
              "ul",
              { staticClass: "pagination" },
              [
                _c(
                  "li",
                  { staticClass: "vDataTable-pagination-back page-item" },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: {
                          disabled: _vm.request.start === 0,
                          "aria-label": "« Previous"
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.prev($event)
                          }
                        }
                      },
                      [_vm._v("<")]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.pages < 8
                  ? _vm._l(_vm.pages, function(n) {
                      return _c(
                        "li",
                        {
                          key: n,
                          staticClass: "page-item",
                          class: {
                            "vDataTable-pagination-current":
                              n === _vm.currentPage
                          }
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "page-link",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.goToPage(n)
                                }
                              }
                            },
                            [_vm._v(_vm._s(n))]
                          )
                        ]
                      )
                    })
                  : _vm.pages > 7 && _vm.currentPage < 5
                  ? [
                      _vm._l(5, function(n) {
                        return _c(
                          "li",
                          {
                            key: n,
                            class: {
                              "vDataTable-pagination-current":
                                n === _vm.currentPage
                            }
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "page-link",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.goToPage(n)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(n))]
                            )
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c("li", { staticClass: "vDataTable-disabled" }, [
                        _c(
                          "a",
                          {
                            staticClass: "vDataTable-disabled",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                              }
                            }
                          },
                          [_vm._v("...")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.goToPage(_vm.pages)
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.pages))]
                        )
                      ])
                    ]
                  : _vm.pages > 7 &&
                    _vm.currentPage > 4 &&
                    _vm.currentPage < _vm.pages - 4
                  ? [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.goToPage(1)
                              }
                            }
                          },
                          [_vm._v("1")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "vDataTable-disabled" }, [
                        _c(
                          "a",
                          {
                            staticClass: "vDataTable-disabled",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                              }
                            }
                          },
                          [_vm._v("...")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.goToPage(_vm.currentPage - 1)
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.currentPage - 1))]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "vDataTable-pagination-current" },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "page-link",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.goToPage(_vm.currentPage)
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.currentPage))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.goToPage(_vm.currentPage + 1)
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.currentPage + 1))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "vDataTable-disabled" }, [
                        _c(
                          "a",
                          {
                            staticClass: "vDataTable-disabled",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                              }
                            }
                          },
                          [_vm._v("...")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.goToPage(_vm.pages)
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.pages))]
                        )
                      ])
                    ]
                  : _vm.currentPage > _vm.pages - 5
                  ? [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.goToPage(1)
                              }
                            }
                          },
                          [_vm._v("1")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "vDataTable-disabled" }, [
                        _c(
                          "a",
                          {
                            staticClass: "vDataTable-disabled",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                              }
                            }
                          },
                          [_vm._v("...")]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._l(5, function(n) {
                        return _c(
                          "li",
                          {
                            key: n,
                            class: {
                              "vDataTable-pagination-current":
                                _vm.pages + (n - 5) === _vm.currentPage
                            }
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "page-link",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.goToPage(_vm.pages + (n - 5))
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.pages + (n - 5)))]
                            )
                          ]
                        )
                      })
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c("li", { staticClass: "vDataTable-pagination-next" }, [
                  _c(
                    "a",
                    {
                      staticClass: "page-link",
                      attrs: {
                        disabled:
                          _vm.request.start ===
                          (_vm.pages - 1) * _vm.request.length,
                        "aria-label": "Next »"
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.next($event)
                        }
                      }
                    },
                    [_vm._v(">")]
                  )
                ])
              ],
              2
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/mixes/app-assets/js/app.js":
/*!**********************************************!*\
  !*** ./resources/mixes/app-assets/js/app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, 'startsWith', {
    value: function value(search, rawPos) {
      var pos = rawPos > 0 ? rawPos | 0 : 0;
      return this.substring(pos, pos + search.length) === search;
    }
  });
}

window.Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

__webpack_require__(/*! ./inc/axios */ "./resources/mixes/app-assets/js/inc/axios.js");

__webpack_require__(/*! ./inc/tinymce */ "./resources/mixes/app-assets/js/inc/tinymce.js");

__webpack_require__(/*! ./vue/vue */ "./resources/mixes/app-assets/js/vue/vue.js");

/***/ }),

/***/ "./resources/mixes/app-assets/js/inc/axios.js":
/*!****************************************************!*\
  !*** ./resources/mixes/app-assets/js/inc/axios.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/***/ }),

/***/ "./resources/mixes/app-assets/js/inc/tinymce.js":
/*!******************************************************!*\
  !*** ./resources/mixes/app-assets/js/inc/tinymce.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! tinymce */ "./node_modules/tinymce/tinymce.js");

__webpack_require__(/*! tinymce/themes/silver */ "./node_modules/tinymce/themes/silver/index.js");

__webpack_require__(/*! tinymce/plugins/link */ "./node_modules/tinymce/plugins/link/index.js");

__webpack_require__(/*! tinymce/plugins/table */ "./node_modules/tinymce/plugins/table/index.js");

__webpack_require__(/*! tinymce/plugins/media */ "./node_modules/tinymce/plugins/media/index.js");

__webpack_require__(/*! tinymce/plugins/lists */ "./node_modules/tinymce/plugins/lists/index.js");

__webpack_require__(/*! tinymce/plugins/image */ "./node_modules/tinymce/plugins/image/index.js");

__webpack_require__(/*! tinymce/plugins/code */ "./node_modules/tinymce/plugins/code/index.js");

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components sync recursive \\.vue$/":
/*!*******************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components sync \.vue$/ ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Bread/BreadEdit.vue": "./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue",
	"./Bread/Fields/BaseField.vue": "./resources/mixes/app-assets/js/vue/components/Bread/Fields/BaseField.vue",
	"./Bread/Fields/DateField.vue": "./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue",
	"./Bread/Fields/FileField.vue": "./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue",
	"./Bread/Fields/GeocodingField.vue": "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue",
	"./Bread/Fields/GroupedField.vue": "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue",
	"./Bread/Fields/ImageField.vue": "./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue",
	"./Bread/Fields/InputField.vue": "./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue",
	"./Bread/Fields/SelectField.vue": "./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue",
	"./Bread/Fields/TextareaField.vue": "./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue",
	"./Bread/Fields/WysiwygField.vue": "./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue",
	"./Dropdown.vue": "./resources/mixes/app-assets/js/vue/components/Dropdown.vue",
	"./FileManagerWrapper.vue": "./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue",
	"./Redirections.vue": "./resources/mixes/app-assets/js/vue/components/Redirections.vue",
	"./SideBar.vue": "./resources/mixes/app-assets/js/vue/components/SideBar.vue",
	"./TopBar.vue": "./resources/mixes/app-assets/js/vue/components/TopBar.vue",
	"./VDataTable.vue": "./resources/mixes/app-assets/js/vue/components/VDataTable.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/mixes/app-assets/js/vue/components sync recursive \\.vue$/";

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue":
/*!**************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BreadEdit_vue_vue_type_template_id_fab04f04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreadEdit.vue?vue&type=template&id=fab04f04&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=template&id=fab04f04&scoped=true&");
/* harmony import */ var _BreadEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreadEdit.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BreadEdit_vue_vue_type_style_index_0_id_fab04f04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BreadEdit.vue?vue&type=style&index=0&id=fab04f04&scoped=true&lang=scss& */ "./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=style&index=0&id=fab04f04&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BreadEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BreadEdit_vue_vue_type_template_id_fab04f04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BreadEdit_vue_vue_type_template_id_fab04f04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fab04f04",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BreadEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=style&index=0&id=fab04f04&scoped=true&lang=scss&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=style&index=0&id=fab04f04&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadEdit_vue_vue_type_style_index_0_id_fab04f04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BreadEdit.vue?vue&type=style&index=0&id=fab04f04&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=style&index=0&id=fab04f04&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadEdit_vue_vue_type_style_index_0_id_fab04f04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadEdit_vue_vue_type_style_index_0_id_fab04f04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadEdit_vue_vue_type_style_index_0_id_fab04f04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadEdit_vue_vue_type_style_index_0_id_fab04f04_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=template&id=fab04f04&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=template&id=fab04f04&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadEdit_vue_vue_type_template_id_fab04f04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BreadEdit.vue?vue&type=template&id=fab04f04&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/BreadEdit.vue?vue&type=template&id=fab04f04&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadEdit_vue_vue_type_template_id_fab04f04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadEdit_vue_vue_type_template_id_fab04f04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/BaseField.vue":
/*!*********************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/BaseField.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseField.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/BaseField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _BaseField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  "38652cf2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/Bread/Fields/BaseField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/BaseField.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/BaseField.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/BaseField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue":
/*!*********************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateField_vue_vue_type_template_id_55b8294a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateField.vue?vue&type=template&id=55b8294a&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue?vue&type=template&id=55b8294a&scoped=true&");
/* harmony import */ var _DateField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateField.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DateField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateField_vue_vue_type_template_id_55b8294a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DateField_vue_vue_type_template_id_55b8294a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "55b8294a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DateField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue?vue&type=template&id=55b8294a&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue?vue&type=template&id=55b8294a&scoped=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateField_vue_vue_type_template_id_55b8294a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DateField.vue?vue&type=template&id=55b8294a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/DateField.vue?vue&type=template&id=55b8294a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateField_vue_vue_type_template_id_55b8294a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateField_vue_vue_type_template_id_55b8294a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue":
/*!*********************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileField_vue_vue_type_template_id_6db46988_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileField.vue?vue&type=template&id=6db46988&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=template&id=6db46988&scoped=true&");
/* harmony import */ var _FileField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileField.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FileField_vue_vue_type_style_index_0_id_6db46988_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileField.vue?vue&type=style&index=0&id=6db46988&scoped=true&lang=css& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=style&index=0&id=6db46988&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileField_vue_vue_type_template_id_6db46988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileField_vue_vue_type_template_id_6db46988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6db46988",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=style&index=0&id=6db46988&scoped=true&lang=css&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=style&index=0&id=6db46988&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_style_index_0_id_6db46988_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileField.vue?vue&type=style&index=0&id=6db46988&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=style&index=0&id=6db46988&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_style_index_0_id_6db46988_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_style_index_0_id_6db46988_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_style_index_0_id_6db46988_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_style_index_0_id_6db46988_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=template&id=6db46988&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=template&id=6db46988&scoped=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_template_id_6db46988_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileField.vue?vue&type=template&id=6db46988&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/FileField.vue?vue&type=template&id=6db46988&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_template_id_6db46988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileField_vue_vue_type_template_id_6db46988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue":
/*!**************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeocodingField_vue_vue_type_template_id_7390bbd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeocodingField.vue?vue&type=template&id=7390bbd1&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=template&id=7390bbd1&scoped=true&");
/* harmony import */ var _GeocodingField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeocodingField.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GeocodingField_vue_vue_type_style_index_0_id_7390bbd1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GeocodingField.vue?vue&type=style&index=0&id=7390bbd1&scoped=true&lang=scss& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=style&index=0&id=7390bbd1&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GeocodingField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeocodingField_vue_vue_type_template_id_7390bbd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeocodingField_vue_vue_type_template_id_7390bbd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7390bbd1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeocodingField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeocodingField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeocodingField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=style&index=0&id=7390bbd1&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=style&index=0&id=7390bbd1&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GeocodingField_vue_vue_type_style_index_0_id_7390bbd1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeocodingField.vue?vue&type=style&index=0&id=7390bbd1&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=style&index=0&id=7390bbd1&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GeocodingField_vue_vue_type_style_index_0_id_7390bbd1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GeocodingField_vue_vue_type_style_index_0_id_7390bbd1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GeocodingField_vue_vue_type_style_index_0_id_7390bbd1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GeocodingField_vue_vue_type_style_index_0_id_7390bbd1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=template&id=7390bbd1&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=template&id=7390bbd1&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeocodingField_vue_vue_type_template_id_7390bbd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeocodingField.vue?vue&type=template&id=7390bbd1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GeocodingField.vue?vue&type=template&id=7390bbd1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeocodingField_vue_vue_type_template_id_7390bbd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeocodingField_vue_vue_type_template_id_7390bbd1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue":
/*!************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupedField_vue_vue_type_template_id_add47764_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupedField.vue?vue&type=template&id=add47764&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=template&id=add47764&scoped=true&");
/* harmony import */ var _GroupedField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupedField.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GroupedField_vue_vue_type_style_index_0_id_add47764_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupedField.vue?vue&type=style&index=0&id=add47764&scoped=true&lang=css& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=style&index=0&id=add47764&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GroupedField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupedField_vue_vue_type_template_id_add47764_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GroupedField_vue_vue_type_template_id_add47764_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "add47764",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupedField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupedField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupedField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=style&index=0&id=add47764&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=style&index=0&id=add47764&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupedField_vue_vue_type_style_index_0_id_add47764_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupedField.vue?vue&type=style&index=0&id=add47764&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=style&index=0&id=add47764&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupedField_vue_vue_type_style_index_0_id_add47764_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupedField_vue_vue_type_style_index_0_id_add47764_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupedField_vue_vue_type_style_index_0_id_add47764_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupedField_vue_vue_type_style_index_0_id_add47764_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=template&id=add47764&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=template&id=add47764&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupedField_vue_vue_type_template_id_add47764_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupedField.vue?vue&type=template&id=add47764&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/GroupedField.vue?vue&type=template&id=add47764&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupedField_vue_vue_type_template_id_add47764_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupedField_vue_vue_type_template_id_add47764_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue":
/*!**********************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageField_vue_vue_type_template_id_1da1fd71_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageField.vue?vue&type=template&id=1da1fd71&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=template&id=1da1fd71&scoped=true&");
/* harmony import */ var _ImageField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageField.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImageField_vue_vue_type_style_index_0_id_1da1fd71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageField.vue?vue&type=style&index=0&id=1da1fd71&scoped=true&lang=css& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=style&index=0&id=1da1fd71&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageField_vue_vue_type_template_id_1da1fd71_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageField_vue_vue_type_template_id_1da1fd71_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1da1fd71",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=style&index=0&id=1da1fd71&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=style&index=0&id=1da1fd71&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_style_index_0_id_1da1fd71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageField.vue?vue&type=style&index=0&id=1da1fd71&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=style&index=0&id=1da1fd71&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_style_index_0_id_1da1fd71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_style_index_0_id_1da1fd71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_style_index_0_id_1da1fd71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_style_index_0_id_1da1fd71_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=template&id=1da1fd71&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=template&id=1da1fd71&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_template_id_1da1fd71_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageField.vue?vue&type=template&id=1da1fd71&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/ImageField.vue?vue&type=template&id=1da1fd71&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_template_id_1da1fd71_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_template_id_1da1fd71_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue":
/*!**********************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputField_vue_vue_type_template_id_1745c83c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputField.vue?vue&type=template&id=1745c83c&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue?vue&type=template&id=1745c83c&scoped=true&");
/* harmony import */ var _InputField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputField.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputField_vue_vue_type_template_id_1745c83c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputField_vue_vue_type_template_id_1745c83c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1745c83c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InputField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue?vue&type=template&id=1745c83c&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue?vue&type=template&id=1745c83c&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_template_id_1745c83c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InputField.vue?vue&type=template&id=1745c83c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/InputField.vue?vue&type=template&id=1745c83c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_template_id_1745c83c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_template_id_1745c83c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue":
/*!***********************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectField_vue_vue_type_template_id_23753b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectField.vue?vue&type=template&id=23753b88&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue?vue&type=template&id=23753b88&scoped=true&");
/* harmony import */ var _SelectField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectField.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectField_vue_vue_type_template_id_23753b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SelectField_vue_vue_type_template_id_23753b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "23753b88",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SelectField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue?vue&type=template&id=23753b88&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue?vue&type=template&id=23753b88&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_template_id_23753b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SelectField.vue?vue&type=template&id=23753b88&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/SelectField.vue?vue&type=template&id=23753b88&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_template_id_23753b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectField_vue_vue_type_template_id_23753b88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue":
/*!*************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextareaField_vue_vue_type_template_id_200c4c3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextareaField.vue?vue&type=template&id=200c4c3e&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue?vue&type=template&id=200c4c3e&scoped=true&");
/* harmony import */ var _TextareaField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextareaField.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TextareaField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextareaField_vue_vue_type_template_id_200c4c3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TextareaField_vue_vue_type_template_id_200c4c3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "200c4c3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextareaField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TextareaField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextareaField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue?vue&type=template&id=200c4c3e&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue?vue&type=template&id=200c4c3e&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextareaField_vue_vue_type_template_id_200c4c3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TextareaField.vue?vue&type=template&id=200c4c3e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/TextareaField.vue?vue&type=template&id=200c4c3e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextareaField_vue_vue_type_template_id_200c4c3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextareaField_vue_vue_type_template_id_200c4c3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue":
/*!************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WysiwygField_vue_vue_type_template_id_451c327f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WysiwygField.vue?vue&type=template&id=451c327f&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue?vue&type=template&id=451c327f&scoped=true&");
/* harmony import */ var _WysiwygField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WysiwygField.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WysiwygField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WysiwygField_vue_vue_type_template_id_451c327f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WysiwygField_vue_vue_type_template_id_451c327f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "451c327f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WysiwygField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WysiwygField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WysiwygField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue?vue&type=template&id=451c327f&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue?vue&type=template&id=451c327f&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WysiwygField_vue_vue_type_template_id_451c327f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./WysiwygField.vue?vue&type=template&id=451c327f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Bread/Fields/WysiwygField.vue?vue&type=template&id=451c327f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WysiwygField_vue_vue_type_template_id_451c327f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WysiwygField_vue_vue_type_template_id_451c327f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Dropdown.vue":
/*!*******************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Dropdown.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown_vue_vue_type_template_id_492b85ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=template&id=492b85ce&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/Dropdown.vue?vue&type=template&id=492b85ce&scoped=true&");
/* harmony import */ var _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dropdown_vue_vue_type_template_id_492b85ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dropdown_vue_vue_type_template_id_492b85ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "492b85ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/Dropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Dropdown.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Dropdown.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Dropdown.vue?vue&type=template&id=492b85ce&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Dropdown.vue?vue&type=template&id=492b85ce&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_492b85ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=template&id=492b85ce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Dropdown.vue?vue&type=template&id=492b85ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_492b85ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_492b85ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue":
/*!*****************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileManagerWrapper_vue_vue_type_template_id_b2702082_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileManagerWrapper.vue?vue&type=template&id=b2702082&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue?vue&type=template&id=b2702082&scoped=true&");
/* harmony import */ var _FileManagerWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileManagerWrapper.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileManagerWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileManagerWrapper_vue_vue_type_template_id_b2702082_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileManagerWrapper_vue_vue_type_template_id_b2702082_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b2702082",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileManagerWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileManagerWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileManagerWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue?vue&type=template&id=b2702082&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue?vue&type=template&id=b2702082&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileManagerWrapper_vue_vue_type_template_id_b2702082_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileManagerWrapper.vue?vue&type=template&id=b2702082&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/FileManagerWrapper.vue?vue&type=template&id=b2702082&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileManagerWrapper_vue_vue_type_template_id_b2702082_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileManagerWrapper_vue_vue_type_template_id_b2702082_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Redirections.vue":
/*!***********************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Redirections.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Redirections_vue_vue_type_template_id_171a6f84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Redirections.vue?vue&type=template&id=171a6f84&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=template&id=171a6f84&scoped=true&");
/* harmony import */ var _Redirections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Redirections.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Redirections_vue_vue_type_style_index_0_id_171a6f84_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Redirections.vue?vue&type=style&index=0&id=171a6f84&scoped=true&lang=scss& */ "./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=style&index=0&id=171a6f84&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Redirections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Redirections_vue_vue_type_template_id_171a6f84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Redirections_vue_vue_type_template_id_171a6f84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "171a6f84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/Redirections.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Redirections.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirections_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=style&index=0&id=171a6f84&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=style&index=0&id=171a6f84&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirections_vue_vue_type_style_index_0_id_171a6f84_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Redirections.vue?vue&type=style&index=0&id=171a6f84&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=style&index=0&id=171a6f84&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirections_vue_vue_type_style_index_0_id_171a6f84_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirections_vue_vue_type_style_index_0_id_171a6f84_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirections_vue_vue_type_style_index_0_id_171a6f84_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirections_vue_vue_type_style_index_0_id_171a6f84_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=template&id=171a6f84&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=template&id=171a6f84&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirections_vue_vue_type_template_id_171a6f84_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Redirections.vue?vue&type=template&id=171a6f84&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/Redirections.vue?vue&type=template&id=171a6f84&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirections_vue_vue_type_template_id_171a6f84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Redirections_vue_vue_type_template_id_171a6f84_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/SideBar.vue":
/*!******************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/SideBar.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideBar_vue_vue_type_template_id_333980e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBar.vue?vue&type=template&id=333980e2&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=template&id=333980e2&scoped=true&");
/* harmony import */ var _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SideBar_vue_vue_type_style_index_0_id_333980e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar.vue?vue&type=style&index=0&id=333980e2&scoped=true&lang=scss& */ "./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=style&index=0&id=333980e2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _SideBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideBar.vue?vue&type=custom&index=0&blockType=i18n */ "./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideBar_vue_vue_type_template_id_333980e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideBar_vue_vue_type_template_id_333980e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "333980e2",
  null
  
)

/* custom blocks */

if (typeof _SideBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_SideBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/SideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=custom&index=0&blockType=i18n":
/*!*********************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=custom&index=0&blockType=i18n ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/@kazupon/vue-i18n-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=custom&index=0&blockType=i18n */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=custom&index=0&blockType=i18n");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=style&index=0&id=333980e2&scoped=true&lang=scss&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=style&index=0&id=333980e2&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_333980e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=style&index=0&id=333980e2&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=style&index=0&id=333980e2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_333980e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_333980e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_333980e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_333980e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=template&id=333980e2&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=template&id=333980e2&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_333980e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=template&id=333980e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/SideBar.vue?vue&type=template&id=333980e2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_333980e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_333980e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/TopBar.vue":
/*!*****************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/TopBar.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopBar_vue_vue_type_template_id_be99a20a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar.vue?vue&type=template&id=be99a20a& */ "./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=template&id=be99a20a&");
/* harmony import */ var _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopBar.vue?vue&type=style&index=0&lang=scss& */ "./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _TopBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopBar.vue?vue&type=custom&index=0&blockType=i18n */ "./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopBar_vue_vue_type_template_id_be99a20a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopBar_vue_vue_type_template_id_be99a20a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _TopBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_TopBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/TopBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=custom&index=0&blockType=i18n":
/*!********************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=custom&index=0&blockType=i18n ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/@kazupon/vue-i18n-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=custom&index=0&blockType=i18n */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=custom&index=0&blockType=i18n");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=template&id=be99a20a&":
/*!************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=template&id=be99a20a& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_be99a20a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopBar.vue?vue&type=template&id=be99a20a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/TopBar.vue?vue&type=template&id=be99a20a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_be99a20a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_template_id_be99a20a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/VDataTable.vue":
/*!*********************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/VDataTable.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VDataTable_vue_vue_type_template_id_1ace506b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VDataTable.vue?vue&type=template&id=1ace506b&scoped=true& */ "./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=template&id=1ace506b&scoped=true&");
/* harmony import */ var _VDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VDataTable.vue?vue&type=script&lang=js& */ "./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VDataTable_vue_vue_type_style_index_0_id_1ace506b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VDataTable.vue?vue&type=style&index=0&id=1ace506b&scoped=true&lang=scss& */ "./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=style&index=0&id=1ace506b&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VDataTable_vue_vue_type_template_id_1ace506b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VDataTable_vue_vue_type_template_id_1ace506b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ace506b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/mixes/app-assets/js/vue/components/VDataTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VDataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=style&index=0&id=1ace506b&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=style&index=0&id=1ace506b&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VDataTable_vue_vue_type_style_index_0_id_1ace506b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VDataTable.vue?vue&type=style&index=0&id=1ace506b&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=style&index=0&id=1ace506b&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VDataTable_vue_vue_type_style_index_0_id_1ace506b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VDataTable_vue_vue_type_style_index_0_id_1ace506b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VDataTable_vue_vue_type_style_index_0_id_1ace506b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VDataTable_vue_vue_type_style_index_0_id_1ace506b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=template&id=1ace506b&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=template&id=1ace506b&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VDataTable_vue_vue_type_template_id_1ace506b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VDataTable.vue?vue&type=template&id=1ace506b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/mixes/app-assets/js/vue/components/VDataTable.vue?vue&type=template&id=1ace506b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VDataTable_vue_vue_type_template_id_1ace506b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VDataTable_vue_vue_type_template_id_1ace506b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/directives sync recursive \\.js$/":
/*!******************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/directives sync \.js$/ ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./delete.js": "./resources/mixes/app-assets/js/vue/directives/delete.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/mixes/app-assets/js/vue/directives sync recursive \\.js$/";

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/directives/delete.js":
/*!****************************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/directives/delete.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  inserted: function inserted(el, binding, vnode) {
    el.addEventListener('click', function (evt) {
      evt.preventDefault();
      Swal.fire({
        title: vnode.context.$t('swal.Delete'),
        //text: `Are you sure you want to delete "${el.dataset.title}"?`,
        text: vnode.context.$t('swal.sure', {
          title: el.dataset.title
        }),
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: vnode.context.$t('swal.Cancel'),
        confirmButtonText: vnode.context.$t('swal.Yes')
      }).then(function (r) {
        if (r.value) {
          axios["delete"](el.href).then(function (response) {
            document.location.reload();
          });
        }
      });
    });
  }
});

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/lang/en.js":
/*!******************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/lang/en.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  swal: {
    "Cancel": "Cancel",
    "Yes": "Yes",
    "Delete": "Delete",
    "sure": "Are you sure you want to delete \"{title}\""
  }
});

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/lang/he.js":
/*!******************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/lang/he.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  swal: {
    "Cancel": "ביטול",
    "Yes": "אישור",
    "Delete": "מחיקה",
    "sure": "\u05D4\u05D0\u05DD \u05D0\u05EA/\u05D4 \u05D1\u05D8\u05D5\u05D7/\u05D4 \u05DB\u05D9 \u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA " + "{title}"
  }
});

/***/ }),

/***/ "./resources/mixes/app-assets/js/vue/vue.js":
/*!**************************************************!*\
  !*** ./resources/mixes/app-assets/js/vue/vue.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.esm.js");
/* harmony import */ var _components_VDataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/VDataTable */ "./resources/mixes/app-assets/js/vue/components/VDataTable.vue");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var vue_croppa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-croppa */ "./node_modules/vue-croppa/dist/vue-croppa.js");
/* harmony import */ var vue_croppa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_croppa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var laravel_file_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! laravel-file-manager */ "./node_modules/laravel-file-manager/src/init.js");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");









vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.devtools = true;
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
var store = new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({});
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(laravel_file_manager__WEBPACK_IMPORTED_MODULE_7__["default"], {
  store: store
});
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_i18n__WEBPACK_IMPORTED_MODULE_2__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_croppa__WEBPACK_IMPORTED_MODULE_5___default.a);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_components_VDataTable__WEBPACK_IMPORTED_MODULE_3__["default"]);
var i18n = new vue_i18n__WEBPACK_IMPORTED_MODULE_2__["default"]({
  locale: document.documentElement.lang,
  messages: {
    en: __webpack_require__(/*! ./lang/en */ "./resources/mixes/app-assets/js/vue/lang/en.js")["default"],
    he: __webpack_require__(/*! ./lang/he */ "./resources/mixes/app-assets/js/vue/lang/he.js")["default"]
  }
});
window.Vue = vue__WEBPACK_IMPORTED_MODULE_0___default.a;

(function () {
  var files = __webpack_require__("./resources/mixes/app-assets/js/vue/components sync recursive \\.vue$/");

  files.keys().map(function (key) {
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(key.split('/').pop().split('.')[0], files(key)["default"]);
  });
})();

(function () {
  var files = __webpack_require__("./resources/mixes/app-assets/js/vue/directives sync recursive \\.js$/");

  files.keys().map(function (key) {
    return vue__WEBPACK_IMPORTED_MODULE_0___default.a.directive(key.split('/').pop().split('.')[0], files(key)["default"]);
  });
})();

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('draggable', vuedraggable__WEBPACK_IMPORTED_MODULE_6___default.a);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('editor', _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('vuejs-datepicker', vuejs_datepicker__WEBPACK_IMPORTED_MODULE_8__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
  computed: {
    '$csrf_token': function $csrf_token() {
      return document.head.querySelector('meta[name="csrf-token"]').content;
    }
  }
});
var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#app',
  i18n: i18n,
  store: store,
  data: {},
  methods: {
    logout: function logout() {
      this.$refs.logoutForm.submit();
    },
    remoteSubmit: function remoteSubmit(ref) {
      if (this.$refs[ref]) {
        if (this.$refs[ref].reportValidity()) {
          this.$refs[ref].submit();
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/mixes/app-assets/sass/app.scss":
/*!**************************************************!*\
  !*** ./resources/mixes/app-assets/sass/app.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/mixes/app-assets/sass/vendor.scss":
/*!*****************************************************!*\
  !*** ./resources/mixes/app-assets/sass/vendor.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*********************************************************************************************************************************************!*\
  !*** multi ./resources/mixes/app-assets/js/app.js ./resources/mixes/app-assets/sass/vendor.scss ./resources/mixes/app-assets/sass/app.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\any\PhpstormProjects\JasmineCMS\packages\jasminecms\jasmine\resources\mixes\app-assets\js\app.js */"./resources/mixes/app-assets/js/app.js");
__webpack_require__(/*! C:\Users\any\PhpstormProjects\JasmineCMS\packages\jasminecms\jasmine\resources\mixes\app-assets\sass\vendor.scss */"./resources/mixes/app-assets/sass/vendor.scss");
module.exports = __webpack_require__(/*! C:\Users\any\PhpstormProjects\JasmineCMS\packages\jasminecms\jasmine\resources\mixes\app-assets\sass\app.scss */"./resources/mixes/app-assets/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9TaWRlQmFyLnZ1ZT80OWIwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1RvcEJhci52dWU/ZGJiNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2VzMjAxNS9tYWluL3RzL1NjcmlwdExvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2VzMjAxNS9tYWluL3RzL1RpbnlNQ0UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9lczIwMTUvbWFpbi90cy9VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2VzMjAxNS9tYWluL3RzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGlueW1jZS90aW55bWNlLXZ1ZS9saWIvZXMyMDE1L21haW4vdHMvY29tcG9uZW50cy9FZGl0b3JQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9lczIwMTUvbWFpbi90cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvQnJlYWRFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0Jhc2VGaWVsZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9EYXRlRmllbGQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvRmlsZUZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0dlb2NvZGluZ0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0dyb3VwZWRGaWVsZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9JbWFnZUZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0lucHV0RmllbGQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvU2VsZWN0RmllbGQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvVGV4dGFyZWFGaWVsZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9XeXNpd3lnRmllbGQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9Ecm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyV3JhcHBlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1JlZGlyZWN0aW9ucy52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1NpZGVCYXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9Ub3BCYXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9WRGF0YVRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0JyZWFkRWRpdC52dWU/NjkwMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR2VvY29kaW5nRmllbGQudnVlP2E5ZGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvUmVkaXJlY3Rpb25zLnZ1ZT8xYmE4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1NpZGVCYXIudnVlPzdhN2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvVG9wQmFyLnZ1ZT83YzA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1ZEYXRhVGFibGUudnVlPzUxNTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0ZpbGVGaWVsZC52dWU/ZjY2MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR3JvdXBlZEZpZWxkLnZ1ZT8yMzY3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9JbWFnZUZpZWxkLnZ1ZT8zNmIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0JyZWFkRWRpdC52dWU/NzhmYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR2VvY29kaW5nRmllbGQudnVlPzBhMzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvUmVkaXJlY3Rpb25zLnZ1ZT8zYjYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1NpZGVCYXIudnVlPzM5NzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvVG9wQmFyLnZ1ZT82ZThmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1ZEYXRhVGFibGUudnVlPzk0ZmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0ZpbGVGaWVsZC52dWU/NjEyNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR3JvdXBlZEZpZWxkLnZ1ZT9hNWFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9JbWFnZUZpZWxkLnZ1ZT85YjM0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0JyZWFkRWRpdC52dWU/Nzg1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvRGF0ZUZpZWxkLnZ1ZT8xZjI1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9GaWxlRmllbGQudnVlPzU4MmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0dlb2NvZGluZ0ZpZWxkLnZ1ZT85OWM1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9Hcm91cGVkRmllbGQudnVlPzUxZmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0ltYWdlRmllbGQudnVlPzdhYTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0lucHV0RmllbGQudnVlPzVlNDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL1NlbGVjdEZpZWxkLnZ1ZT83ZDA2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9UZXh0YXJlYUZpZWxkLnZ1ZT8zNmFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9XeXNpd3lnRmllbGQudnVlPzY3YTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvRHJvcGRvd24udnVlPzkzNzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvRmlsZU1hbmFnZXJXcmFwcGVyLnZ1ZT8wYzQ5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1JlZGlyZWN0aW9ucy52dWU/ZWIxOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9TaWRlQmFyLnZ1ZT9iNmRiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1RvcEJhci52dWU/Y2Y2MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9WRGF0YVRhYmxlLnZ1ZT9jNTEwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvaW5jL2F4aW9zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL2luYy90aW55bWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzIHN5bmMgXFwudnVlJC8iLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvQnJlYWRFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9CcmVhZEVkaXQudnVlPzcwNjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvQnJlYWRFZGl0LnZ1ZT8zOGRjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0JyZWFkRWRpdC52dWU/MTNlMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvQmFzZUZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvQmFzZUZpZWxkLnZ1ZT84MTExIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9EYXRlRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9EYXRlRmllbGQudnVlPzUzZDAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0RhdGVGaWVsZC52dWU/NGMxZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvRmlsZUZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvRmlsZUZpZWxkLnZ1ZT9hZjhmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9GaWxlRmllbGQudnVlPzJkMTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0ZpbGVGaWVsZC52dWU/ZWFlZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR2VvY29kaW5nRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9HZW9jb2RpbmdGaWVsZC52dWU/NzM1YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR2VvY29kaW5nRmllbGQudnVlPzdmMWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0dlb2NvZGluZ0ZpZWxkLnZ1ZT9kMTg1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9Hcm91cGVkRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9Hcm91cGVkRmllbGQudnVlP2FkYWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0dyb3VwZWRGaWVsZC52dWU/NWQ4OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR3JvdXBlZEZpZWxkLnZ1ZT84OWY3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9JbWFnZUZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvSW1hZ2VGaWVsZC52dWU/NGY5MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvSW1hZ2VGaWVsZC52dWU/OWMxMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvSW1hZ2VGaWVsZC52dWU/ZWVhNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvSW5wdXRGaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0lucHV0RmllbGQudnVlP2RmM2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0lucHV0RmllbGQudnVlP2RiYjUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL1NlbGVjdEZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvU2VsZWN0RmllbGQudnVlP2ZmYzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL1NlbGVjdEZpZWxkLnZ1ZT9iMWU3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9UZXh0YXJlYUZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvVGV4dGFyZWFGaWVsZC52dWU/YThjMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvVGV4dGFyZWFGaWVsZC52dWU/OTlkMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvV3lzaXd5Z0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvV3lzaXd5Z0ZpZWxkLnZ1ZT84MmRkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9XeXNpd3lnRmllbGQudnVlPzEyOTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvRHJvcGRvd24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0Ryb3Bkb3duLnZ1ZT8yZGY5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0Ryb3Bkb3duLnZ1ZT84YmRiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyV3JhcHBlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvRmlsZU1hbmFnZXJXcmFwcGVyLnZ1ZT9lNTVkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyV3JhcHBlci52dWU/ZWQzNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9SZWRpcmVjdGlvbnMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1JlZGlyZWN0aW9ucy52dWU/OWY0YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9SZWRpcmVjdGlvbnMudnVlPzczNDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvUmVkaXJlY3Rpb25zLnZ1ZT9jNDc1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1NpZGVCYXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1NpZGVCYXIudnVlP2YyMmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvU2lkZUJhci52dWU/NzY5MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9TaWRlQmFyLnZ1ZT8wNjY2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1NpZGVCYXIudnVlPzBkZDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvVG9wQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9Ub3BCYXIudnVlPzAyNzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvVG9wQmFyLnZ1ZT81N2E1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1RvcEJhci52dWU/MGJhYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9Ub3BCYXIudnVlP2NmYzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvVkRhdGFUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvVkRhdGFUYWJsZS52dWU/YjVmZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9WRGF0YVRhYmxlLnZ1ZT80OWIyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1ZEYXRhVGFibGUudnVlP2ExYWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2RpcmVjdGl2ZXMgc3luYyBcXC5qcyQvIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9kaXJlY3RpdmVzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvbGFuZy9lbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvbGFuZy9oZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvdnVlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL3Nhc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvc2Fzcy92ZW5kb3Iuc2NzcyJdLCJuYW1lcyI6WyJTdHJpbmciLCJwcm90b3R5cGUiLCJzdGFydHNXaXRoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsInNlYXJjaCIsInJhd1BvcyIsInBvcyIsInN1YnN0cmluZyIsImxlbmd0aCIsIndpbmRvdyIsIlN3YWwiLCJyZXF1aXJlIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJpbnNlcnRlZCIsImVsIiwiYmluZGluZyIsInZub2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiZmlyZSIsInRpdGxlIiwiY29udGV4dCIsIiR0IiwidGV4dCIsImRhdGFzZXQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNhbmNlbEJ1dHRvblRleHQiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyIiwiaHJlZiIsInJlc3BvbnNlIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInJlbG9hZCIsInN3YWwiLCJWdWUiLCJjb25maWciLCJkZXZ0b29scyIsInVzZSIsIlZ1ZXgiLCJzdG9yZSIsIlN0b3JlIiwiRmlsZU1hbmFnZXIiLCJWdWVJMThuIiwiQ3JvcHBhIiwiVkRhdGFUYWJsZSIsImkxOG4iLCJsb2NhbGUiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwibWVzc2FnZXMiLCJlbiIsImhlIiwiZmlsZXMiLCJrZXlzIiwibWFwIiwia2V5IiwiY29tcG9uZW50Iiwic3BsaXQiLCJwb3AiLCJkaXJlY3RpdmUiLCJkcmFnZ2FibGUiLCJFZGl0b3IiLCJEYXRlcGlja2VyIiwibWl4aW4iLCJjb21wdXRlZCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImFwcCIsImRhdGEiLCJtZXRob2RzIiwibG9nb3V0IiwiJHJlZnMiLCJsb2dvdXRGb3JtIiwic3VibWl0IiwicmVtb3RlU3VibWl0IiwicmVmIiwicmVwb3J0VmFsaWRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0Esa0NBQWtDLE1BQU0sNEJBQTRCLE9BQU8sNkJBQTZCO0FBQ3hHO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbURBQUk7QUFDdEI7QUFDQTtBQUNB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LGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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K0NBQStDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUNBQXFDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQ0FBcUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRDQUE0QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QWQsQ0FBNEIseUJBQTVCLEVBQXVEQyxPQUE5RDtBQUNIO0FBSEs7QUFESixDQUFWO0FBUUEsSUFBTUMsR0FBRyxHQUFHLElBQUlsQywwQ0FBSixDQUFRO0FBQ2hCeEIsSUFBRSxFQUFFLE1BRFk7QUFFaEJtQyxNQUFJLEVBQUpBLElBRmdCO0FBR2hCTixPQUFLLEVBQUxBLEtBSGdCO0FBS2hCOEIsTUFBSSxFQUFFLEVBTFU7QUFPaEJDLFNBQU8sRUFBRTtBQUNMQyxVQURLLG9CQUNJO0FBQ0wsV0FBS0MsS0FBTCxDQUFXQyxVQUFYLENBQXNCQyxNQUF0QjtBQUNILEtBSEk7QUFLTEMsZ0JBTEssd0JBS1FDLEdBTFIsRUFLYTtBQUNkLFVBQUksS0FBS0osS0FBTCxDQUFXSSxHQUFYLENBQUosRUFBcUI7QUFDakIsWUFBSSxLQUFLSixLQUFMLENBQVdJLEdBQVgsRUFBZ0JDLGNBQWhCLEVBQUosRUFBc0M7QUFDbEMsZUFBS0wsS0FBTCxDQUFXSSxHQUFYLEVBQWdCRixNQUFoQjtBQUNIO0FBQ0o7QUFDSjtBQVhJO0FBUE8sQ0FBUixDQUFaLEM7Ozs7Ozs7Ozs7O0FDeERBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgQ29tcG9uZW50Lm9wdGlvbnMuX19pMThuID0gQ29tcG9uZW50Lm9wdGlvbnMuX19pMThuIHx8IFtdXG4gIENvbXBvbmVudC5vcHRpb25zLl9faTE4bi5wdXNoKCd7XCJlblwiOnt9fScpXG4gIGRlbGV0ZSBDb21wb25lbnQub3B0aW9ucy5fQ3RvclxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gIENvbXBvbmVudC5vcHRpb25zLl9faTE4biA9IENvbXBvbmVudC5vcHRpb25zLl9faTE4biB8fCBbXVxuICBDb21wb25lbnQub3B0aW9ucy5fX2kxOG4ucHVzaCgne1wiZW5cIjp7XCJIaVwiOlwiSGlcIixcIkxvZ291dFwiOlwiTG9nb3V0XCJ9LFwiaGVcIjp7XCJIaVwiOlwi15TXmdeZXCIsXCJMb2dvdXRcIjpcIteZ16bXmdeQ15RcIn19JylcbiAgZGVsZXRlIENvbXBvbmVudC5vcHRpb25zLl9DdG9yXG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi9VdGlscyc7XG52YXIgY3JlYXRlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGlzdGVuZXJzOiBbXSxcbiAgICAgICAgc2NyaXB0SWQ6IHV1aWQoJ3Rpbnktc2NyaXB0JyksXG4gICAgICAgIHNjcmlwdExvYWRlZDogZmFsc2VcbiAgICB9O1xufTtcbnZhciBDcmVhdGVTY3JpcHRMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXRlID0gY3JlYXRlU3RhdGUoKTtcbiAgICB2YXIgaW5qZWN0U2NyaXB0VGFnID0gZnVuY3Rpb24gKHNjcmlwdElkLCBkb2MsIHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNjcmlwdFRhZyA9IGRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0VGFnLnJlZmVycmVyUG9saWN5ID0gJ29yaWdpbic7XG4gICAgICAgIHNjcmlwdFRhZy50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHRUYWcuaWQgPSBzY3JpcHRJZDtcbiAgICAgICAgc2NyaXB0VGFnLnNyYyA9IHVybDtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzY3JpcHRUYWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZXIpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NyaXB0VGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVyKTtcbiAgICAgICAgaWYgKGRvYy5oZWFkKSB7XG4gICAgICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRUYWcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgbG9hZCA9IGZ1bmN0aW9uIChkb2MsIHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHN0YXRlLnNjcmlwdExvYWRlZCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmICghZG9jLmdldEVsZW1lbnRCeUlkKHN0YXRlLnNjcmlwdElkKSkge1xuICAgICAgICAgICAgICAgIGluamVjdFNjcmlwdFRhZyhzdGF0ZS5zY3JpcHRJZCwgZG9jLCB1cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbigpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2NyaXB0TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gT25seSB0byBiZSB1c2VkIGJ5IHRlc3RzLlxuICAgIHZhciByZWluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YXRlID0gY3JlYXRlU3RhdGUoKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWQ6IGxvYWQsXG4gICAgICAgIHJlaW5pdGlhbGl6ZTogcmVpbml0aWFsaXplXG4gICAgfTtcbn07XG52YXIgU2NyaXB0TG9hZGVyID0gQ3JlYXRlU2NyaXB0TG9hZGVyKCk7XG5leHBvcnQgeyBTY3JpcHRMb2FkZXIgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbnZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpOyB9O1xudmFyIGdldFRpbnltY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdsb2JhbCA9IGdldEdsb2JhbCgpO1xuICAgIHJldHVybiBnbG9iYWwgJiYgZ2xvYmFsLnRpbnltY2UgPyBnbG9iYWwudGlueW1jZSA6IG51bGw7XG59O1xuZXhwb3J0IHsgZ2V0VGlueW1jZSB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xudmFyIHZhbGlkRXZlbnRzID0gW1xuICAgICdvbkFjdGl2YXRlJyxcbiAgICAnb25BZGRVbmRvJyxcbiAgICAnb25CZWZvcmVBZGRVbmRvJyxcbiAgICAnb25CZWZvcmVFeGVjQ29tbWFuZCcsXG4gICAgJ29uQmVmb3JlR2V0Q29udGVudCcsXG4gICAgJ29uQmVmb3JlUmVuZGVyVUknLFxuICAgICdvbkJlZm9yZVNldENvbnRlbnQnLFxuICAgICdvbkJlZm9yZVBhc3RlJyxcbiAgICAnb25CbHVyJyxcbiAgICAnb25DaGFuZ2UnLFxuICAgICdvbkNsZWFyVW5kb3MnLFxuICAgICdvbkNsaWNrJyxcbiAgICAnb25Db250ZXh0TWVudScsXG4gICAgJ29uQ29weScsXG4gICAgJ29uQ3V0JyxcbiAgICAnb25EYmxjbGljaycsXG4gICAgJ29uRGVhY3RpdmF0ZScsXG4gICAgJ29uRGlydHknLFxuICAgICdvbkRyYWcnLFxuICAgICdvbkRyYWdEcm9wJyxcbiAgICAnb25EcmFnRW5kJyxcbiAgICAnb25EcmFnR2VzdHVyZScsXG4gICAgJ29uRHJhZ092ZXInLFxuICAgICdvbkRyb3AnLFxuICAgICdvbkV4ZWNDb21tYW5kJyxcbiAgICAnb25Gb2N1cycsXG4gICAgJ29uRm9jdXNJbicsXG4gICAgJ29uRm9jdXNPdXQnLFxuICAgICdvbkdldENvbnRlbnQnLFxuICAgICdvbkhpZGUnLFxuICAgICdvbkluaXQnLFxuICAgICdvbktleURvd24nLFxuICAgICdvbktleVByZXNzJyxcbiAgICAnb25LZXlVcCcsXG4gICAgJ29uTG9hZENvbnRlbnQnLFxuICAgICdvbk1vdXNlRG93bicsXG4gICAgJ29uTW91c2VFbnRlcicsXG4gICAgJ29uTW91c2VMZWF2ZScsXG4gICAgJ29uTW91c2VNb3ZlJyxcbiAgICAnb25Nb3VzZU91dCcsXG4gICAgJ29uTW91c2VPdmVyJyxcbiAgICAnb25Nb3VzZVVwJyxcbiAgICAnb25Ob2RlQ2hhbmdlJyxcbiAgICAnb25PYmplY3RSZXNpemVTdGFydCcsXG4gICAgJ29uT2JqZWN0UmVzaXplZCcsXG4gICAgJ29uT2JqZWN0U2VsZWN0ZWQnLFxuICAgICdvblBhc3RlJyxcbiAgICAnb25Qb3N0UHJvY2VzcycsXG4gICAgJ29uUG9zdFJlbmRlcicsXG4gICAgJ29uUHJlUHJvY2VzcycsXG4gICAgJ29uUHJvZ3Jlc3NTdGF0ZScsXG4gICAgJ29uUmVkbycsXG4gICAgJ29uUmVtb3ZlJyxcbiAgICAnb25SZXNldCcsXG4gICAgJ29uU2F2ZUNvbnRlbnQnLFxuICAgICdvblNlbGVjdGlvbkNoYW5nZScsXG4gICAgJ29uU2V0QXR0cmliJyxcbiAgICAnb25TZXRDb250ZW50JyxcbiAgICAnb25TaG93JyxcbiAgICAnb25TdWJtaXQnLFxuICAgICdvblVuZG8nLFxuICAgICdvblZpc3VhbEFpZCdcbl07XG52YXIgaXNWYWxpZEtleSA9IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHZhbGlkRXZlbnRzLm1hcChmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIGV2ZW50LnRvTG93ZXJDYXNlKCk7IH0pLmluZGV4T2Yoa2V5LnRvTG93ZXJDYXNlKCkpICE9PSAtMTsgfTtcbnZhciBiaW5kSGFuZGxlcnMgPSBmdW5jdGlvbiAoaW5pdEV2ZW50LCBsaXN0ZW5lcnMsIGVkaXRvcikge1xuICAgIE9iamVjdC5rZXlzKGxpc3RlbmVycylcbiAgICAgICAgLmZpbHRlcihpc1ZhbGlkS2V5KVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gbGlzdGVuZXJzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ29uSW5pdCcpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGluaXRFdmVudCwgZWRpdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVkaXRvci5vbihrZXkuc3Vic3RyaW5nKDIpLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gaGFuZGxlcihlLCBlZGl0b3IpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcbnZhciBiaW5kTW9kZWxIYW5kbGVycyA9IGZ1bmN0aW9uIChjdHgsIGVkaXRvcikge1xuICAgIHZhciBtb2RlbEV2ZW50cyA9IGN0eC4kcHJvcHMubW9kZWxFdmVudHMgPyBjdHguJHByb3BzLm1vZGVsRXZlbnRzIDogbnVsbDtcbiAgICB2YXIgbm9ybWFsaXplZEV2ZW50cyA9IEFycmF5LmlzQXJyYXkobW9kZWxFdmVudHMpID8gbW9kZWxFdmVudHMuam9pbignICcpIDogbW9kZWxFdmVudHM7XG4gICAgY3R4LiR3YXRjaCgndmFsdWUnLCBmdW5jdGlvbiAodmFsLCBwcmV2VmFsKSB7XG4gICAgICAgIGlmIChlZGl0b3IgJiYgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgdmFsICE9PSBwcmV2VmFsICYmIHZhbCAhPT0gZWRpdG9yLmdldENvbnRlbnQoeyBmb3JtYXQ6IGN0eC4kcHJvcHMub3V0cHV0Rm9ybWF0IH0pKSB7XG4gICAgICAgICAgICBlZGl0b3Iuc2V0Q29udGVudCh2YWwpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZWRpdG9yLm9uKG5vcm1hbGl6ZWRFdmVudHMgPyBub3JtYWxpemVkRXZlbnRzIDogJ2NoYW5nZSBpbnB1dCB1bmRvIHJlZG8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN0eC4kZW1pdCgnaW5wdXQnLCBlZGl0b3IuZ2V0Q29udGVudCh7IGZvcm1hdDogY3R4LiRwcm9wcy5vdXRwdXRGb3JtYXQgfSkpO1xuICAgIH0pO1xufTtcbnZhciBpbml0RWRpdG9yID0gZnVuY3Rpb24gKGluaXRFdmVudCwgY3R4LCBlZGl0b3IpIHtcbiAgICB2YXIgdmFsdWUgPSBjdHguJHByb3BzLnZhbHVlID8gY3R4LiRwcm9wcy52YWx1ZSA6ICcnO1xuICAgIHZhciBpbml0aWFsVmFsdWUgPSBjdHguJHByb3BzLmluaXRpYWxWYWx1ZSA/IGN0eC4kcHJvcHMuaW5pdGlhbFZhbHVlIDogJyc7XG4gICAgZWRpdG9yLnNldENvbnRlbnQodmFsdWUgfHwgKGN0eC5pbml0aWFsaXplZCA/IGN0eC5jYWNoZSA6IGluaXRpYWxWYWx1ZSkpO1xuICAgIC8vIGNoZWNrcyBpZiB0aGUgdi1tb2RlbCBzaG9ydGhhbmQgaXMgdXNlZCAod2hpY2ggc2V0cyBhbiB2LW9uOmlucHV0IGxpc3RlbmVyKSBhbmQgdGhlbiBiaW5kcyBlaXRoZXJcbiAgICAvLyBzcGVjaWZpZWQgdGhlIGV2ZW50cyBvciBkZWZhdWx0cyB0byBcImNoYW5nZSBrZXl1cFwiIGV2ZW50IGFuZCBlbWl0cyB0aGUgZWRpdG9yIGNvbnRlbnQgb24gdGhhdCBldmVudFxuICAgIGlmIChjdHguJGxpc3RlbmVycy5pbnB1dCkge1xuICAgICAgICBiaW5kTW9kZWxIYW5kbGVycyhjdHgsIGVkaXRvcik7XG4gICAgfVxuICAgIGJpbmRIYW5kbGVycyhpbml0RXZlbnQsIGN0eC4kbGlzdGVuZXJzLCBlZGl0b3IpO1xuICAgIGN0eC5pbml0aWFsaXplZCA9IHRydWU7XG59O1xudmFyIHVuaXF1ZSA9IDA7XG52YXIgdXVpZCA9IGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApO1xuICAgIHVuaXF1ZSsrO1xuICAgIHJldHVybiBwcmVmaXggKyAnXycgKyByYW5kb20gKyB1bmlxdWUgKyBTdHJpbmcodGltZSk7XG59O1xudmFyIGlzVGV4dGFyZWEgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnO1xufTtcbnZhciBub3JtYWxpemVQbHVnaW5BcnJheSA9IGZ1bmN0aW9uIChwbHVnaW5zKSB7XG4gICAgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAndW5kZWZpbmVkJyB8fCBwbHVnaW5zID09PSAnJykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBsdWdpbnMpID8gcGx1Z2lucyA6IHBsdWdpbnMuc3BsaXQoJyAnKTtcbn07XG52YXIgbWVyZ2VQbHVnaW5zID0gZnVuY3Rpb24gKGluaXRQbHVnaW5zLCBpbnB1dFBsdWdpbnMpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplUGx1Z2luQXJyYXkoaW5pdFBsdWdpbnMpLmNvbmNhdChub3JtYWxpemVQbHVnaW5BcnJheShpbnB1dFBsdWdpbnMpKTtcbn07XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7IH07XG5leHBvcnQgeyBiaW5kSGFuZGxlcnMsIGJpbmRNb2RlbEhhbmRsZXJzLCBpbml0RWRpdG9yLCBpc1ZhbGlkS2V5LCB1dWlkLCBpc1RleHRhcmVhLCBtZXJnZVBsdWdpbnMsIGlzTnVsbE9yVW5kZWZpbmVkIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgU2NyaXB0TG9hZGVyIH0gZnJvbSAnLi4vU2NyaXB0TG9hZGVyJztcbmltcG9ydCB7IGdldFRpbnltY2UgfSBmcm9tICcuLi9UaW55TUNFJztcbmltcG9ydCB7IGluaXRFZGl0b3IsIGlzVGV4dGFyZWEsIG1lcmdlUGx1Z2lucywgdXVpZCwgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tICcuLi9VdGlscyc7XG5pbXBvcnQgeyBlZGl0b3JQcm9wcyB9IGZyb20gJy4vRWRpdG9yUHJvcFR5cGVzJztcbnZhciByZW5kZXJJbmxpbmUgPSBmdW5jdGlvbiAoaCwgaWQsIHRhZ05hbWUpIHtcbiAgICByZXR1cm4gaCh0YWdOYW1lID8gdGFnTmFtZSA6ICdkaXYnLCB7XG4gICAgICAgIGF0dHJzOiB7IGlkOiBpZCB9XG4gICAgfSk7XG59O1xudmFyIHJlbmRlcklmcmFtZSA9IGZ1bmN0aW9uIChoLCBpZCkge1xuICAgIHJldHVybiBoKCd0ZXh0YXJlYScsIHtcbiAgICAgICAgYXR0cnM6IHsgaWQ6IGlkIH0sXG4gICAgICAgIHN0eWxlOiB7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH1cbiAgICB9KTtcbn07XG52YXIgaW5pdGlhbGlzZSA9IGZ1bmN0aW9uIChjdHgpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmluYWxJbml0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGN0eC4kcHJvcHMuaW5pdCksIHsgcmVhZG9ubHk6IGN0eC4kcHJvcHMuZGlzYWJsZWQsIHNlbGVjdG9yOiBcIiNcIiArIGN0eC5lbGVtZW50SWQsIHBsdWdpbnM6IG1lcmdlUGx1Z2lucyhjdHguJHByb3BzLmluaXQgJiYgY3R4LiRwcm9wcy5pbml0LnBsdWdpbnMsIGN0eC4kcHJvcHMucGx1Z2lucyksIHRvb2xiYXI6IGN0eC4kcHJvcHMudG9vbGJhciB8fCAoY3R4LiRwcm9wcy5pbml0ICYmIGN0eC4kcHJvcHMuaW5pdC50b29sYmFyKSwgaW5saW5lOiBjdHguaW5saW5lRWRpdG9yLCBzZXR1cDogZnVuY3Rpb24gKGVkaXRvcikge1xuICAgICAgICAgICAgY3R4LmVkaXRvciA9IGVkaXRvcjtcbiAgICAgICAgICAgIGVkaXRvci5vbignaW5pdCcsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBpbml0RWRpdG9yKGUsIGN0eCwgZWRpdG9yKTsgfSk7XG4gICAgICAgICAgICBpZiAoY3R4LiRwcm9wcy5pbml0ICYmIHR5cGVvZiBjdHguJHByb3BzLmluaXQuc2V0dXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjdHguJHByb3BzLmluaXQuc2V0dXAoZWRpdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB9KTtcbiAgICBpZiAoaXNUZXh0YXJlYShjdHguZWxlbWVudCkpIHtcbiAgICAgICAgY3R4LmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICAgIH1cbiAgICBnZXRUaW55bWNlKCkuaW5pdChmaW5hbEluaXQpO1xufTsgfTtcbmV4cG9ydCB2YXIgRWRpdG9yID0ge1xuICAgIHByb3BzOiBlZGl0b3JQcm9wcyxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gdGhpcy4kcHJvcHMuaWQgfHwgdXVpZCgndGlueS12dWUnKTtcbiAgICAgICAgdGhpcy5pbmxpbmVFZGl0b3IgPSAodGhpcy4kcHJvcHMuaW5pdCAmJiB0aGlzLiRwcm9wcy5pbml0LmlubGluZSkgfHwgdGhpcy4kcHJvcHMuaW5saW5lO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBkaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5lZGl0b3Iuc2V0TW9kZSh0aGlzLmRpc2FibGVkID8gJ3JlYWRvbmx5JyA6ICdkZXNpZ24nKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLiRlbDtcbiAgICAgICAgaWYgKGdldFRpbnltY2UoKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaW5pdGlhbGlzZSh0aGlzKSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudCkge1xuICAgICAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLiRwcm9wcy5jbG91ZENoYW5uZWwgPyB0aGlzLiRwcm9wcy5jbG91ZENoYW5uZWwgOiAnNSc7XG4gICAgICAgICAgICB2YXIgYXBpS2V5ID0gdGhpcy4kcHJvcHMuYXBpS2V5ID8gdGhpcy4kcHJvcHMuYXBpS2V5IDogJ25vLWFwaS1rZXknO1xuICAgICAgICAgICAgdmFyIHNjcmlwdFNyYyA9IGlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuJHByb3BzLnRpbnltY2VTY3JpcHRTcmMpID9cbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vY2RuLnRpbnkuY2xvdWQvMS9cIiArIGFwaUtleSArIFwiL3RpbnltY2UvXCIgKyBjaGFubmVsICsgXCIvdGlueW1jZS5taW4uanNcIiA6XG4gICAgICAgICAgICAgICAgdGhpcy4kcHJvcHMudGlueW1jZVNjcmlwdFNyYztcbiAgICAgICAgICAgIFNjcmlwdExvYWRlci5sb2FkKHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LCBzY3JpcHRTcmMsIGluaXRpYWxpc2UodGhpcykpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChnZXRUaW55bWNlKCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGdldFRpbnltY2UoKS5yZW1vdmUodGhpcy5lZGl0b3IpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkZWFjdGl2YXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICghdGhpcy5pbmxpbmVFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUgPSB0aGlzLmVkaXRvci5nZXRDb250ZW50KCk7XG4gICAgICAgICAgICAoX2EgPSBnZXRUaW55bWNlKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUodGhpcy5lZGl0b3IpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBhY3RpdmF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlubGluZUVkaXRvciAmJiB0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBpbml0aWFsaXNlKHRoaXMpKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5saW5lRWRpdG9yID8gcmVuZGVySW5saW5lKGgsIHRoaXMuZWxlbWVudElkLCB0aGlzLiRwcm9wcy50YWdOYW1lKSA6IHJlbmRlcklmcmFtZShoLCB0aGlzLmVsZW1lbnRJZCk7XG4gICAgfVxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbmV4cG9ydCB2YXIgZWRpdG9yUHJvcHMgPSB7XG4gICAgYXBpS2V5OiBTdHJpbmcsXG4gICAgY2xvdWRDaGFubmVsOiBTdHJpbmcsXG4gICAgaWQ6IFN0cmluZyxcbiAgICBpbml0OiBPYmplY3QsXG4gICAgaW5pdGlhbFZhbHVlOiBTdHJpbmcsXG4gICAgaW5saW5lOiBCb29sZWFuLFxuICAgIG1vZGVsRXZlbnRzOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgcGx1Z2luczogW1N0cmluZywgQXJyYXldLFxuICAgIHRhZ05hbWU6IFN0cmluZyxcbiAgICB0b29sYmFyOiBbU3RyaW5nLCBBcnJheV0sXG4gICAgdmFsdWU6IFN0cmluZyxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICB0aW55bWNlU2NyaXB0U3JjOiBTdHJpbmcsXG4gICAgb3V0cHV0Rm9ybWF0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gcHJvcCA9PT0gJ2h0bWwnIHx8IHByb3AgPT09ICd0ZXh0JzsgfVxuICAgIH0sXG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL0VkaXRvcic7XG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImJyZWFkLWVkaXQgcm93XCIgOmNsYXNzPVwieyd3cml0aW5nLXJ0bCc6IGlzTG9jYWxlUnRsfVwiPlxuXG4gICAgICAgIDwhLS0gTG9vcCBjb2x1bW5zIC0tPlxuICAgICAgICA8ZGl2IHYtZm9yPVwiKGNvbHVtbiwgY2xhc3NJZCkgaW4gbWFuaWZlc3RcIiA6a2V5PVwiY2xhc3NJZFwiXG4gICAgICAgICAgICAgOmNsYXNzPVwiY2xhc3NJZFwiPlxuXG4gICAgICAgICAgICA8IS0tIExvb3AgZ3JvdXBzIC0tPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihmaWVsZHMsIGdUaXRsZSkgaW4gY29sdW1uXCIgOmtleT1cImdUaXRsZVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZCBtYi00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZ1RpdGxlWzBdICE9PSAnXydcIiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1iLTBcIj57eyBnVGl0bGUgfX08L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIExvb3AgZmllbGRzIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihmaWVsZCwgZmkpIGluIGZpZWxkc1wiIDprZXk9XCJmaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGQgcC0xIGZvcm0tZ3JvdXBcIiA6Y2xhc3M9XCJmaWVsZC53aWR0aFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBSZXBlYXRhYmxlIGZpZWxkIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZmllbGQucmVwZWF0cyA+IDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRyYWdnYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxpc3Q9XCJ2YWx1ZXNbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2hvc3QtY2xhc3M9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGU9XCIuZG5kLWhhbmRsZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCIgdi1mb3I9XCIodmFsdWUsIHZpKSBpbiB2YWx1ZXNbZmllbGQubmFtZV1cIiA6a2V5PVwiZmllbGQuaWQrdmlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBmbGV4LWZpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmaWVsZC5pZCt2aVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmllbGQubGFiZWwgfX0gKHt7IHZpICsgMSB9fSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJmaWVsZC5jb21wb25lbnRcIiA6aWQ9XCJmaWVsZC5pZCt2aVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5uYW1lICsgJ1snK3ZpKyddJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmludmFsaWQ9XCIhIWVycm9yc1tmaWVsZC5uYW1lXVwiIHYtbW9kZWw9XCJ2YWx1ZXNbZmllbGQubmFtZV1bdmldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJmaWVsZC5sYWJlbFwiIDpvcHRpb25zPVwiZmllbGQub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCJmaWVsZC52YWxpZGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9jYWxlPVwibG9jYWxlXCIgOmlzLWxvY2FsZS1ydGw9XCJpc0xvY2FsZVJ0bFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2NvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLXRvcDogMS41cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OiAxLjI1cmVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZG5kLWhhbmRsZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiA6dGl0bGU9XCIkdCgnUmVvcmRlcicpICsnICcrIGZpZWxkLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hcnJvd3MtYWx0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiBAY2xpY2s9XCJyZW1vdmVSZXBlYXRlZEZpZWxkKGZpZWxkLm5hbWUsIHZpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwidmFsdWVzW2ZpZWxkLm5hbWVdLmxlbmd0aCA9PT0gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwiJHQoJ1JlbW92ZScpKycgJysgZmllbGQubGFiZWwgKyAnICgnKyh2aSsxKSsnKSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwicmVwZWF0RmllbGQoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cInZhbHVlc1tmaWVsZC5uYW1lXS5sZW5ndGggPj0gZmllbGQucmVwZWF0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgOnRpdGxlPVwiJHQoJ0FkZCcpICsnICcrIGZpZWxkLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kcmFnZ2FibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gU2luZ2xlIGZpZWxkIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZmllbGQuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpZWxkLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiZmllbGQuY29tcG9uZW50XCIgOmlkPVwiZmllbGQuaWRcIiA6bmFtZT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppbnZhbGlkPVwiISFlcnJvcnNbZmllbGQubmFtZV1cIiB2LW1vZGVsPVwidmFsdWVzW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJmaWVsZC5sYWJlbFwiIDpvcHRpb25zPVwiZmllbGQub3B0aW9uc1wiIDp2YWxpZGF0aW9uPVwiZmllbGQudmFsaWRhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvY2FsZT1cImxvY2FsZVwiIDppcy1sb2NhbGUtcnRsPVwiaXNMb2NhbGVSdGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCB2LWlmPVwiZmllbGQuZGVzY3JpcHRpb25cIiA6aWQ9XCJmaWVsZC5pZCsgJ0hlbHAnXCIgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmllbGQuZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImVycm9yc1tmaWVsZC5uYW1lXVwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LXRleHQ9XCJlcnJvcnNbZmllbGQubmFtZV1bMF1cIj48L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gL0xvb3AgZmllbGRzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSAvTG9vcCBncm91cHMgLS0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gL0xvb3AgY29sdW1ucyAtLT5cblxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkJyZWFkRWRpdFwiLFxuICAgIHByb3BzOiB7XG4gICAgICAgIGxvY2FsZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIH0sXG4gICAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWRhYmxlOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgfSxcbiAgICAgICAgb2xkOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlczoge30sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZFZhbHVlcygpIHtcbiAgICAgICAgICAgIGxldCB2bSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZtLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQucmVwZWF0cyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgVnVlLnNldCh2bS52YWx1ZXMsIGZpZWxkLm5hbWUsIHZtLm9sZFtmaWVsZC5uYW1lXSB8fCB2bS5icmVhZGFibGVbZmllbGQubmFtZV0gfHwgW2ZpZWxkLmdldERlZmF1bHQoKV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFZ1ZS5zZXQodm0udmFsdWVzLCBmaWVsZC5uYW1lLCB2bS5vbGRbZmllbGQubmFtZV0gfHwgdm0uYnJlYWRhYmxlW2ZpZWxkLm5hbWVdIHx8IGZpZWxkLmdldERlZmF1bHQoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVwZWF0RmllbGQoZmllbGQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2ZpZWxkLm5hbWVdLnB1c2goZmllbGQuZ2V0RGVmYXVsdCgpKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVSZXBlYXRlZEZpZWxkKGZpZWxkTmFtZSwgaSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNbZmllbGROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGZpZWxkcygpIHtcbiAgICAgICAgICAgIGxldCB2bSA9IHRoaXM7XG5cbiAgICAgICAgICAgIGxldCBmaWVsZHMgPSBbXTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXModm0ubWFuaWZlc3QpLmZvckVhY2goKGNvbCwgY2kpID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2bS5tYW5pZmVzdFtjb2xdKS5mb3JFYWNoKChncm91cCwgZ2kpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdm0ubWFuaWZlc3RbY29sXVtncm91cF0uZm9yRWFjaChmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYuZ2V0RGVmYXVsdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYuZGVmYXVsdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZi5kZWZhdWx0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goZik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmaWVsZHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNMb2NhbGVSdGwoKSB7XG4gICAgICAgICAgICByZXR1cm4gWydhcicsICdoZScsICdpdyddLmluZGV4T2YodGhpcy5sb2NhbGUpID4gLTE7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMubG9hZFZhbHVlcygpO1xuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Fzcy92YXJpYWJsZXNcIjtcblxuLmJyZWFkLWVkaXQgOjp2LWRlZXAge1xuICAgIGlucHV0LFxuICAgIHNlbGVjdCxcbiAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgIH1cbn1cblxuLmJyZWFkLWVkaXQud3JpdGluZy1ydGwgOjp2LWRlZXAge1xuICAgIGlucHV0LFxuICAgIHNlbGVjdCxcbiAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgIH1cbn1cblxuLmZpZWxkIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG5cbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG4gICAgbGV0IEphc21pbmVCYXNlRmllbGQgPSB7XG4gICAgICAgIG5hbWU6IFwiQmFzZUZpZWxkXCIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpbnZhbGlkOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGxvY2FsZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNMb2NhbGVSdGw6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmaWVsZF92YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICd2YWx1ZScodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZF92YWx1ZSA9IHZhbDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICdmaWVsZF92YWx1ZScoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmZpZWxkX3ZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJG9uKCcnKVxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICB3aW5kb3cuSmFzbWluZUJhc2VGaWVsZCA9IEphc21pbmVCYXNlRmllbGQ7XG5cbiAgICBleHBvcnQgZGVmYXVsdCBKYXNtaW5lQmFzZUZpZWxkO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiA6bmFtZT1cIm5hbWVcIiB2LW1vZGVsPVwiZmllbGRfdmFsdWVcIj5cbiAgICAgICAgPHZ1ZWpzLWRhdGVwaWNrZXIgdi1tb2RlbD1cImRhdGVcIiA6aWQ9XCJpZFwiIDpmb3JtYXQ9XCJmb3JtYXRcIiBAaW5wdXQ9XCJ1cGRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRkLm1tLnl5eXlcIiA6bGFuZ3VhZ2U9XCJkTG9jYWxlc1skaTE4bi5sb2NhbGVdIHx8IGRMb2NhbGVzLmVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlcXVpcmVkPVwidmFsaWRhdGlvbi5pbmRleE9mKCdyZXF1aXJlZCcpID4gLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6aW5wdXQtY2xhc3M9XCJ7J2Zvcm0tY29udHJvbCc6IDEsICdpcy1pbnZhbGlkJzogaW52YWxpZH1cIj48L3Z1ZWpzLWRhdGVwaWNrZXI+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtlbiwgaGV9IGZyb20gJ3Z1ZWpzLWRhdGVwaWNrZXIvZGlzdC9sb2NhbGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJEYXRlRmllbGRcIixcbiAgICBleHRlbmRzOiBKYXNtaW5lQmFzZUZpZWxkLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcHRzOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB9LCB0aGlzLm9wdGlvbnMpLFxuXG4gICAgICAgICAgICBkYXRlOiBudWxsLFxuICAgICAgICAgICAgZExvY2FsZXM6IHtcbiAgICAgICAgICAgICAgICBlbiwgaGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRfdmFsdWUgPSB0aGlzLmRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxOSkucmVwbGFjZSgnVCcsICcgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZm9ybWF0KGQpIHtcbiAgICAgICAgICAgIGxldCBkYXkgPSBkLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgICAgICBsZXQgbW9udGggPSAoZC5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICAgICAgbGV0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICByZXR1cm4gYCR7ZGF5fS4ke21vbnRofS4ke3llYXJ9YDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmllbGRfdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZmllbGRfdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2hhbmdlRmlsZVwiXG4gICAgICAgICAgICAgICAgPkNob29zZSBmaWxlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgOm5hbWU9XCJuYW1lXCIgdi1tb2RlbD1cImZpZWxkX3ZhbHVlXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgdi1pZj1cInNob3dGbVwiIGNsYXNzPVwibW9kYWwgZmFkZSBzaG93IGQtYmxvY2tcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLXhsXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDgwdmhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5GaWxlIE1hbmFnZXIgfCBDaG9vc2UgaW1hZ2UgZm9yIHt7IGxhYmVsIH19PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBAY2xpY2s9XCJzaG93Rm0gPSBmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlsZS1tYW5hZ2VyLXdyYXBwZXIgcmVmPVwiZm13XCI+PC9maWxlLW1hbmFnZXItd3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1pZj1cInNob3dGbVwiIGNsYXNzPVwibW9kYWwtYmFja2Ryb3AgZmFkZSBzaG93XCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJJbWFnZUZpZWxkXCIsXG4gICAgICAgIGV4dGVuZHM6IEphc21pbmVCYXNlRmllbGQsXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3B0czogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucyksXG5cbiAgICAgICAgICAgICAgICBzaG93Rm06IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBjaGFuZ2VGaWxlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZtID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIFZ1ZS5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2bSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmbSA9IHRoaXMuJHJlZnMuZm13LiRyZWZzLmZtO1xuICAgICAgICAgICAgICAgICAgICBmbS4kc3RvcmUuY29tbWl0KCdmbS9zZXRGaWxlQ2FsbEJhY2snLCBmdW5jdGlvbiAoZmlsZVVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVVcmwuc3RhcnRzV2l0aChkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVVybCA9IGZpbGVVcmwucmVwbGFjZShkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4sICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZmllbGRfdmFsdWUgPSBmaWxlVXJsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5zaG93Rm0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7fSxcblxuICAgICAgICBiZWZvcmVNb3VudCgpIHtcblxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLnByZXZpZXcge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiA6bmFtZT1cIm5hbWUrJ1thZGRyZXNzXSdcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpjbGFzcz1cInsnaXMtaW52YWxpZCc6IGludmFsaWR9XCJcbiAgICAgICAgICAgICAgIHJlZj1cImFkZHJlc3NFbGVtXCIgdi1tb2RlbD1cImZpZWxkX3ZhbHVlLmFkZHJlc3NcIj5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIDpuYW1lPVwibmFtZSsnW2xhdF0nXCIgdi1tb2RlbD1cImZpZWxkX3ZhbHVlLmxhdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIDpuYW1lPVwibmFtZSsnW2xuZ10nXCIgdi1tb2RlbD1cImZpZWxkX3ZhbHVlLmxuZ1wiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqLWxvY2F0aW9uLWZpZWxkLW1hcCBtdC0zXCIgcmVmPVwibWFwRWxlbVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiR2VvY29kaW5nRmllbGRcIixcbiAgICAgICAgZXh0ZW5kczogSmFzbWluZUJhc2VGaWVsZCxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3B0czogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB9LCB0aGlzLm9wdGlvbnMpLFxuXG4gICAgICAgICAgICAgICAgbGF0TG5nOiBudWxsLFxuICAgICAgICAgICAgICAgIG1hcDogbnVsbCxcbiAgICAgICAgICAgICAgICBtYXJrZXI6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGxvYWRHbWFwQXBpKCkge1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0ke3RoaXMub3B0cy5hcGlfa2V5fSZsaWJyYXJpZXM9cGxhY2VzYDtcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5nb29nbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgICAgICAgICAgcy5zcmMgPSB1cmw7XG4gICAgICAgICAgICAgICAgICAgIHMub25sb2FkID0gdGhpcy5pbml0TWFwO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1hcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNyZWF0ZU1hcmtlcihsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCB2bSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHZtLm1hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICB2bS5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vQ3JlYXRlIGEgbWFya2VyIGFuZCBwbGFjZWQgaXQgb24gdGhlIG1hcC5cbiAgICAgICAgICAgICAgICB2bS5tYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGxvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IHZtLm1hcCxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZtLm1hcC5wYW5Ubyhsb2NhdGlvbik7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgbG9jYXRpb24gdG8gaGlkZGVuIGZpZWxkc1xuICAgICAgICAgICAgICAgIHZtLmZpZWxkX3ZhbHVlLmxhdCA9IGxvY2F0aW9uLmxhdCgpO1xuICAgICAgICAgICAgICAgIHZtLmZpZWxkX3ZhbHVlLmxuZyA9IGxvY2F0aW9uLmxuZygpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaW5pdE1hcCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZtLmxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcodm0uZmllbGRfdmFsdWUubGF0LCB2bS5maWVsZF92YWx1ZS5sbmcpO1xuICAgICAgICAgICAgICAgIHZtLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAodm0uJHJlZnMubWFwRWxlbSwge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IHZtLmxhdExuZyxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMlxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IG1hcmtlckxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcodm0uZmllbGRfdmFsdWUubGF0LCB2bS5maWVsZF92YWx1ZS5sbmcpO1xuICAgICAgICAgICAgICAgIHZtLm1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbWFya2VyTGF0TG5nLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IHZtLm1hcCxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZtLm1hcC5wYW5UbyhtYXJrZXJMYXRMbmcpXG4gICAgICAgICAgICAgICAgdm0ubWFwLnNldFpvb20oMTApO1xuXG4gICAgICAgICAgICAgICAgbGV0IGF1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKFxuICAgICAgICAgICAgICAgICAgICAvKiogQHR5cGUgeyFIVE1MSW5wdXRFbGVtZW50fSAqL1xuICAgICAgICAgICAgICAgICAgICAodm0uJHJlZnMuYWRkcmVzc0VsZW0pLFxuICAgICAgICAgICAgICAgICAgICB7dHlwZXM6IFsnZ2VvY29kZSddfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGUuYWRkTGlzdGVuZXIoJ3BsYWNlX2NoYW5nZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGFjZSA9IGF1dG9jb21wbGV0ZS5nZXRQbGFjZSgpO1xuICAgICAgICAgICAgICAgICAgICB2bS5maWVsZF92YWx1ZS5hZGRyZXNzID0gcGxhY2UuZm9ybWF0dGVkX2FkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgIHZtLmNyZWF0ZU1hcmtlcihwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih2bS5tYXAsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vRGV0ZXJtaW5lIHRoZSBsb2NhdGlvbiB3aGVyZSB0aGUgdXNlciBoYXMgY2xpY2tlZC5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gZS5sYXRMbmc7XG4gICAgICAgICAgICAgICAgICAgIHZtLmNyZWF0ZU1hcmtlcihsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEdtYXBBcGkoKTtcbiAgICAgICAgICAgIGlmIChbJ2NoZWNrYm94JywgJ3JhZGlvJ10uaW5kZXhPZih0aGlzLm9wdHMudHlwZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7dGhpcy5uYW1lfSBpcyB1c2luZyA8aW5wdXQtZmllbGQ+LCBQbGVhc2UgdXNlIDwke3RoaXMub3B0cy50eXBlfS1maWVsZD4gaW5zdGVhZCBvZiA8aW5wdXQtZmllbGQ+IGZvciAke3RoaXMub3B0cy50eXBlfSBmaWVsZHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gICAgLmotbG9jYXRpb24tZmllbGQtbWFwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvdyBncm91cGVkXCI+XG4gICAgICAgIDwhLS0gTG9vcCBmaWVsZHMgLS0+XG4gICAgICAgIDxkaXYgdi1mb3I9XCIoZmllbGQsIGZpKSBpbiBmaWVsZHNcIiA6a2V5PVwiZmllbGQuaWQrZmlcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZmllbGQgcC00IGZvcm0tZ3JvdXBcIiA6Y2xhc3M9XCJmaWVsZC53aWR0aFwiPlxuICAgICAgICAgICAgPCEtLSBSZXBlYXRhYmxlIGZpZWxkIC0tPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmaWVsZC5yZXBlYXRzID4gMVwiPlxuICAgICAgICAgICAgICAgIDxkcmFnZ2FibGVcbiAgICAgICAgICAgICAgICAgICAgOmxpc3Q9XCJmaWVsZF92YWx1ZVtmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgIGdob3N0LWNsYXNzPVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU9XCIuZG5kLWhhbmRsZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiIHYtZm9yPVwiKHZhbHVlLCB2aSkgaW4gZmllbGRfdmFsdWVbZmllbGQubmFtZV1cIiA6a2V5PVwiZmllbGQuaWQrdmlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZsZXgtZmlsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZmllbGQuaWQrdmlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmllbGQubGFiZWwgfX0gKHt7IHZpICsgMSB9fSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiZmllbGQuY29tcG9uZW50XCIgOmlkPVwiZmllbGQuaWQrdmlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJuYW1lICsgJ1snICsgZmllbGQubmFtZSArICddJyArICdbJyt2aSsnXSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmludmFsaWQ9XCIhIWVycm9yc1tmaWVsZC5uYW1lXVwiIHYtbW9kZWw9XCJmaWVsZF92YWx1ZVtmaWVsZC5uYW1lXVt2aV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiZmllbGQubGFiZWxcIiA6b3B0aW9ucz1cImZpZWxkLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCJmaWVsZC52YWxpZGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsb2NhbGU9XCJsb2NhbGVcIiA6aXMtbG9jYWxlLXJ0bD1cImlzTG9jYWxlUnRsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmctdG9wOiAxLjVyZW07cGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEuMjVyZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGRuZC1oYW5kbGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiA6dGl0bGU9XCIkdCgnUmVvcmRlcicpICsnICcrIGZpZWxkLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFycm93cy1hbHRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiBAY2xpY2s9XCJyZW1vdmVSZXBlYXRlZEZpZWxkKGZpZWxkLm5hbWUsIHZpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZF92YWx1ZVtmaWVsZC5uYW1lXS5sZW5ndGggPT09IDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCIkdCgnUmVtb3ZlJykrJyAnKyBmaWVsZC5sYWJlbCArICcgKCcrKHZpKzEpKycpJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJyZXBlYXRGaWVsZChmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZF92YWx1ZVtmaWVsZC5uYW1lXS5sZW5ndGggPj0gZmllbGQucmVwZWF0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiA6dGl0bGU9XCIkdCgnQWRkJykgKycgJysgZmllbGQubGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZHJhZ2dhYmxlPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgPCEtLSBTaW5nbGUgZmllbGQgLS0+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZmllbGQuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZmllbGQubGFiZWwgfX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiZmllbGQuY29tcG9uZW50XCIgOmlkPVwiZmllbGQuaWRcIiA6bmFtZT1cIm5hbWUgKyAnWycgKyBmaWVsZC5uYW1lICsgJ10nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDppbnZhbGlkPVwiISFlcnJvcnNbZmllbGQubmFtZV1cIiB2LW1vZGVsPVwiZmllbGRfdmFsdWVbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiZmllbGQubGFiZWxcIiA6b3B0aW9ucz1cImZpZWxkLm9wdGlvbnNcIiA6dmFsaWRhdGlvbj1cImZpZWxkLnZhbGlkYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvY2FsZT1cImxvY2FsZVwiIDppcy1sb2NhbGUtcnRsPVwiaXNMb2NhbGVSdGxcIlxuICAgICAgICAgICAgICAgID48L2NvbXBvbmVudD5cbiAgICAgICAgICAgICAgICA8c21hbGwgdi1pZj1cImZpZWxkLmRlc2NyaXB0aW9uXCIgOmlkPVwiZmllbGQuaWQrICdIZWxwJ1wiIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZmllbGQuZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJlcnJvcnNbZmllbGQubmFtZV1cIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyB2LXRleHQ9XCJlcnJvcnNbZmllbGQubmFtZV1bMF1cIj48L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSAvTG9vcCBmaWVsZHMgLS0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJHcm91cGVkRmllbGRcIixcbiAgICAgICAgZXh0ZW5kczogSmFzbWluZUJhc2VGaWVsZCxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3B0czogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczogW10sXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5vcHRpb25zKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbG9hZFZhbHVlcygpIHtcbiAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdm0uZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQucmVwZWF0cyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVnVlLnNldCh2bS52YWx1ZXMsIGZpZWxkLm5hbWUsIHZtLm9sZFtmaWVsZC5uYW1lXSB8fCB2bS5icmVhZGFibGVbZmllbGQubmFtZV0gfHwgW2ZpZWxkLmdldERlZmF1bHQoKV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgVnVlLnNldCh2bS5maWVsZF92YWx1ZSwgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZtLm9sZFtmaWVsZC5uYW1lXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZpZWxkX3ZhbHVlW2ZpZWxkLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgW2ZpZWxkLmdldERlZmF1bHQoKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1Z1ZS5zZXQodm0udmFsdWVzLCBmaWVsZC5uYW1lLCB2bS5vbGRbZmllbGQubmFtZV0gfHwgdm0uYnJlYWRhYmxlW2ZpZWxkLm5hbWVdIHx8IGZpZWxkLmdldERlZmF1bHQoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlcGVhdEZpZWxkKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZF92YWx1ZVtmaWVsZC5uYW1lXS5wdXNoKGZpZWxkLmdldERlZmF1bHQoKSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZW1vdmVSZXBlYXRlZEZpZWxkKGZpZWxkTmFtZSwgaSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRfdmFsdWVbZmllbGROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBmaWVsZHMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0cy5maWVsZHMubWFwKGYgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmLmdldERlZmF1bHQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYuZGVmYXVsdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmLmRlZmF1bHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZXJyb3JzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlTW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRWYWx1ZXMoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLmZvcm0tcm93Lmdyb3VwZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFmNGZmO1xuICAgIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiA6bmFtZT1cIm5hbWUrJ1t3XSdcIiB2LW1vZGVsPVwiZmllbGRfdmFsdWUud1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIDpuYW1lPVwibmFtZSsnW2hdJ1wiIHYtbW9kZWw9XCJmaWVsZF92YWx1ZS5oXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgOm5hbWU9XCJuYW1lKydbc3JjXSdcIiB2LW1vZGVsPVwiZmllbGRfdmFsdWUuc3JjXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbCB3LWF1dG8gZC1pbmxpbmUtYmxvY2sgcC0yXCI+XG4gICAgICAgICAgICA8aW1nIDpzcmM9XCJmaWVsZF92YWx1ZS5zcmNcIiBhbHQ9XCJwcmV2aWV3XCIgY2xhc3M9XCJwcmV2aWV3XCIgQGNsaWNrPVwiY2hhbmdlSW1hZ2VcIiByZWY9XCJwcmV2aWV3XCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG10LTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiaWQrJ19hbHQnXCI+XG4gICAgICAgICAgICAgICAge3sgbGFiZWwgfX0gQWx0XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiA6bmFtZT1cIm5hbWUrJ1thbHRdJ1wiIHYtbW9kZWw9XCJmaWVsZF92YWx1ZS5hbHRcIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiB2LWlmPVwic2hvd0ZtXCIgY2xhc3M9XCJtb2RhbCBmYWRlIHNob3cgZC1ibG9ja1wiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwteGxcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiIHN0eWxlPVwibWluLWhlaWdodDogODB2aFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkZpbGUgTWFuYWdlciB8IENob29zZSBpbWFnZSBmb3Ige3sgbGFiZWwgfX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIEBjbGljaz1cInNob3dGbSA9IGZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWxlLW1hbmFnZXItd3JhcHBlciByZWY9XCJmbXdcIj48L2ZpbGUtbWFuYWdlci13cmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwic2hvd0ZtXCIgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcCBmYWRlIHNob3dcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIkltYWdlRmllbGRcIixcbiAgICAgICAgZXh0ZW5kczogSmFzbWluZUJhc2VGaWVsZCxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvcHRzOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW10sXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5vcHRpb25zKSxcblxuICAgICAgICAgICAgICAgIHNob3dGbTogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGNoYW5nZUltYWdlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZtID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIFZ1ZS5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2bSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmbSA9IHRoaXMuJHJlZnMuZm13LiRyZWZzLmZtO1xuICAgICAgICAgICAgICAgICAgICBmbS4kc3RvcmUuY29tbWl0KCdmbS9zZXRGaWxlQ2FsbEJhY2snLCBmdW5jdGlvbiAoZmlsZVVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogaWYgbm90ZSBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmlsZVVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZm0gPSBmbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVVcmwuc3RhcnRzV2l0aChkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVVybCA9IGZpbGVVcmwucmVwbGFjZShkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4sICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZmllbGRfdmFsdWUuc3JjID0gZmlsZVVybDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uc2hvd0ZtID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZ1ZS5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZpZWxkX3ZhbHVlLncgPSB2bS4kcmVmcy5wcmV2aWV3Lm5hdHVyYWxXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZmllbGRfdmFsdWUuaCA9IHZtLiRyZWZzLnByZXZpZXcubmF0dXJhbEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmZpZWxkX3ZhbHVlLnBhdGggPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7fSxcblxuICAgICAgICBiZWZvcmVNb3VudCgpIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRfdmFsdWUuc3JjID0gdGhpcy5maWVsZF92YWx1ZS5zcmMgfHwgYGh0dHBzOi8vcGxhY2Vob2xkLml0LzE1MHgxNTBgO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLnByZXZpZXcge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8aW5wdXQgOnR5cGU9XCJvcHRzLnR5cGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpjbGFzcz1cInsnaXMtaW52YWxpZCc6IGludmFsaWR9XCJcbiAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwib3B0cy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgIDpwYXR0ZXJuPVwib3B0cy5wYXR0ZXJuXCJcbiAgICAgICAgICAgOmF1dG9mb2N1cz1cIm9wdHMuYXV0b2ZvY3VzXCJcbiAgICAgICAgICAgOmF1dG9jb21wbGV0ZT1cIm9wdHMuYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgOnN0ZXA9XCJvcHRzLnN0ZXBcIlxuICAgICAgICAgICA6bWF4PVwib3B0cy5tYXhcIlxuICAgICAgICAgICA6bWluPVwib3B0cy5taW5cIlxuICAgICAgICAgICA6cmVhZG9ubHk9XCJvcHRzLnJlYWRvbmx5XCJcbiAgICAgICAgICAgOmRpcj1cIm9wdHMuZGlyXCJcbiAgICAgICAgICAgOnJlcXVpcmVkPVwidmFsaWRhdGlvbi5pbmRleE9mKCdyZXF1aXJlZCcpID4gLTFcIlxuICAgICAgICAgICA6aWQ9XCJpZFwiIDpuYW1lPVwibmFtZVwiIHYtbW9kZWw9XCJmaWVsZF92YWx1ZVwiPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiSW5wdXRGaWVsZFwiLFxuICAgICAgICBleHRlbmRzOiBKYXNtaW5lQmFzZUZpZWxkLFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvcHRzOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBpZiAoWydjaGVja2JveCcsICdyYWRpbyddLmluZGV4T2YodGhpcy5vcHRzLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke3RoaXMubmFtZX0gaXMgdXNpbmcgPGlucHV0LWZpZWxkPiwgUGxlYXNlIHVzZSA8JHt0aGlzLm9wdHMudHlwZX0tZmllbGQ+IGluc3RlYWQgb2YgPGlucHV0LWZpZWxkPiBmb3IgJHt0aGlzLm9wdHMudHlwZX0gZmllbGRzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgOmNsYXNzPVwieydpcy1pbnZhbGlkJzogaW52YWxpZH1cIlxuICAgICAgICAgICAgOm11bHRpcGxlPVwib3B0cy5tdWx0aXBsZVwiXG4gICAgICAgICAgICA6cmVhZG9ubHk9XCJvcHRzLnJlYWRvbmx5XCJcbiAgICAgICAgICAgIDpyZXF1aXJlZD1cInZhbGlkYXRpb24uaW5kZXhPZigncmVxdWlyZWQnKSA+IC0xXCJcbiAgICAgICAgICAgIDppZD1cImlkXCIgOm5hbWU9XCJuYW1lXCIgdi1tb2RlbD1cImZpZWxkX3ZhbHVlXCI+XG4gICAgICAgIDxvcHRpb24gdi1mb3I9XCIob3B0aW9uLCB2YWwpIGluIG9wdHMub3B0aW9uc1wiIDp2YWx1ZT1cInZhbFwiPlxuICAgICAgICAgICAge3sgb3B0aW9uIH19XG4gICAgICAgIDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiU2VsZWN0RmllbGRcIixcbiAgICAgICAgZXh0ZW5kczogSmFzbWluZUJhc2VGaWVsZCxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3B0czogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBpZiAoWydjaGVja2JveCcsICdyYWRpbyddLmluZGV4T2YodGhpcy5vcHRzLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke3RoaXMubmFtZX0gaXMgdXNpbmcgPGlucHV0LWZpZWxkPiwgUGxlYXNlIHVzZSA8JHt0aGlzLm9wdHMudHlwZX0tZmllbGQ+IGluc3RlYWQgb2YgPGlucHV0LWZpZWxkPiBmb3IgJHt0aGlzLm9wdHMudHlwZX0gZmllbGRzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7J2lzLWludmFsaWQnOiBpbnZhbGlkfVwiXG4gICAgICAgICAgICAgIDpyb3dzPVwib3B0cy5yb3dzXCJcbiAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwib3B0cy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgIDphdXRvZm9jdXM9XCJvcHRzLmF1dG9mb2N1c1wiXG4gICAgICAgICAgICAgIDpyZWFkb25seT1cIm9wdHMucmVhZG9ubHlcIlxuICAgICAgICAgICAgICA6ZGlyPVwib3B0cy5kaXJcIlxuICAgICAgICAgICAgICA6cmVxdWlyZWQ9XCJ2YWxpZGF0aW9uLmluZGV4T2YoJ3JlcXVpcmVkJykgPiAtMVwiXG4gICAgICAgICAgICAgIDppZD1cImlkXCIgOm5hbWU9XCJuYW1lXCIgdi1tb2RlbD1cImZpZWxkX3ZhbHVlXCI+PC90ZXh0YXJlYT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIlRleHRhcmVhRmllbGRcIixcbiAgICAgICAgZXh0ZW5kczogSmFzbWluZUJhc2VGaWVsZCxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3B0czogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IDUsXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5vcHRpb25zKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcblxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiA6aWQ9XCJpZFwiIDpuYW1lPVwibmFtZVwiIHYtbW9kZWw9XCJmaWVsZF92YWx1ZVwiPlxuICAgICAgICA8ZWRpdG9yIDppbml0PVwiY29uZmlnXCIgdi1tb2RlbD1cImZpZWxkX3ZhbHVlXCI+PC9lZGl0b3I+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJXeXNpd3lnRmllbGRcIixcbiAgICAgICAgZXh0ZW5kczogSmFzbWluZUJhc2VGaWVsZCxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3B0czogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucyksXG5cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGNvbmZpZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgbWVudWJhcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIC8vbGFuZ3VhZ2U6ICdoZV9JTCcsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbmFsaXR5OiB0aGlzLmlzTG9jYWxlUnRsID8gJ3J0bCcgOiAnbHRyJyxcbiAgICAgICAgICAgICAgICAgICAgLy9maWxlX3BpY2tlcl9jYWxsYmFjazpcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczogJ2xpbmssIHRhYmxlLCBjb2RlLCBsaXN0cywgaW1hZ2UsIG1lZGlhJyxcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3VuZG8gcmVkbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZm9udHNlbGVjdCBmb250c2l6ZXNlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3R5bGVzZWxlY3QgYm9sZCBpdGFsaWMgdW5kZXJsaW5lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmb3JlY29sb3IgYmFja2NvbG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYnVsbGlzdCBudW1saXN0IG91dGRlbnQgaW5kZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdsaW5rIHRhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdpbWFnZSBtZWRpYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnY29kZScsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbignIHwgJyksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCIgOmNsYXNzPVwie3Nob3c6IG9wZW5lZH1cIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIiA6Y2xhc3M9XCJidG5DbGFzc1wiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA6YXJpYS1leHBhbmRlZD1cIm9wZW5lZCA/ICd0cnVlJyA6ICdmYWxzZSdcIiBAY2xpY2s9XCJvcGVuZWQgPSAhb3BlbmVkXCI+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiYnRuXCI+PC9zbG90PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiA6Y2xhc3M9XCJ7c2hvdzogb3BlbmVkfVwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImRyb3Bkb3duXCI+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIkRyb3Bkb3duXCIsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBidG5DbGFzczoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZmlsZS1tYW5hZ2VyIHJlZj1cImZtXCIgOnNldHRpbmdzPVwic2V0dGluZ3NcIj48L2ZpbGUtbWFuYWdlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIkZpbGVNYW5hZ2VyV3JhcHBlclwiLFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7d2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyLXRva2VuJyl9YCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYmFzZVVybDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmRhdGFzZXQuZm1VcmwsXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd3NDb25maWc6IDIsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3ZlcndyaXRlIGNvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAvL2xhbmc6ICdkZScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGxhbmd1YWdlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuZm0uJHN0b3JlLmNvbW1pdChgZm0vbGVmdC9zZXRWaWV3YCwgJ2dyaWQnKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImg0IG1iLTBcIiB2LXRleHQ9XCIkdCgnUmVkaXJlY3Rpb25zJylcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZXhwb3J0VXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZG93bmxvYWRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnRXhwb3J0JykgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwiaW1wb3J0UmVkaXJlY3Rpb25zXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXBsb2FkXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ0ltcG9ydCcpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKHIsaSkgaW4gcmVkaXJlY3Rpb25zXCIgOmtleT1cInIuaWRcIiBjbGFzcz1cInJlZGlyZWN0aW9uLWl0ZW0gcHgtMSBwdC0zIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyLWlkXCIgdi10ZXh0PVwici5pZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZmlsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBweC0yIGNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cIidmcm9tXycrci5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdGcm9tIChvbGQgdXJsKScpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgOmlkPVwiJ2Zyb21fJytyLmlkXCIgdi1tb2RlbD1cInIuZnJvbVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHB4LTIgY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiJ3RvXycrci5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdUbyAobmV3IHVybCknKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIDppZD1cIid0b18nK3IuaWRcIiB2LW1vZGVsPVwici50b1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHB4LTIgZmxleC1maWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cIidwZXJtYW5lbnRfJytyLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ1R5cGUnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgOmlkPVwiJ3Blcm1hbmVudF8nK3IuaWRcIiB2LW1vZGVsPVwici5wZXJtYW5lbnRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gOnZhbHVlPVwiZmFsc2VcIj4zMDIgKHt7ICR0KCdUZW1wb3JhcnknKSB9fSk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cInRydWVcIj4zMDEgKHt7ICR0KCdQZXJtYW5lbnQnKSB9fSk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgOmlkPVwiJ3JlZ2V4Xycrci5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJyLnJlZ2V4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiA6Zm9yPVwiJ3JlZ2V4Xycrci5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnUmVndWxhciBFeHByZXNzaW9uJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiA6aWQ9XCInZW5hYmxlZF8nK3IuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwici5lbmFibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiA6Zm9yPVwiJ2VuYWJsZWRfJytyLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdFbmFibGVkJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtaW5mb1wiIDpkaXNhYmxlZD1cInIucmVnZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwiYXBwZW5kUXVlcnkocilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnQ2F0Y2ggcXVlcnknKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJodHRwQW5kUyhyKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdIVFRQL0hUVFBTJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1maWxsXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJzYXZlKHIpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ1NhdmUnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJyZW1vdmUoci5pZCwgaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnRGVsZXRlJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoNFwiIHYtdGV4dD1cIiR0KCdOZXcgUmVkaXJlY3Rpb24nKVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWRpcmVjdGlvbi1pdGVtIHB4LTEgcHQtMyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwici1pZFwiPi08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWZpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcHgtMiBjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ld19mcm9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ0Zyb20gKG9sZCB1cmwpJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5ld19mcm9tXCIgdi1tb2RlbD1cIm5ld1JlZGlyZWN0aW9uLmZyb21cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBweC0yIGNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmV3X3RvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ1RvIChuZXcgdXJsKScpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXdfdG9cIiB2LW1vZGVsPVwibmV3UmVkaXJlY3Rpb24udG9cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBweC0yIGZsZXgtZmlsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ld19wZXJtYW5lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnVHlwZScpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIm5ld19wZXJtYW5lbnRcIiB2LW1vZGVsPVwibmV3UmVkaXJlY3Rpb24ucGVybWFuZW50XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cImZhbHNlXCI+MzAyICh7eyAkdCgnVGVtcG9yYXJ5JykgfX0pPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJ0cnVlXCI+MzAxICh7eyAkdCgnUGVybWFuZW50JykgfX0pPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGlkPVwibmV3X3JlZ2V4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm5ld1JlZGlyZWN0aW9uLnJlZ2V4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJuZXdfcmVnZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ1JlZ3VsYXIgRXhwcmVzc2lvbicpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cIm5ld19lbmFibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm5ld1JlZGlyZWN0aW9uLmVuYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cIm5ld19lbmFibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdFbmFibGVkJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtaW5mb1wiIDpkaXNhYmxlZD1cIm5ld1JlZGlyZWN0aW9uLnJlZ2V4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cImFwcGVuZFF1ZXJ5KG5ld1JlZGlyZWN0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdDYXRjaCBxdWVyeScpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cImh0dHBBbmRTKG5ld1JlZGlyZWN0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdIVFRQL0hUVFBTJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1maWxsXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJzYXZlKG5ld1JlZGlyZWN0aW9uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdTYXZlJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Zm9ybSA6YWN0aW9uPVwiaW1wb3J0VXJsXCIgbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJkLW5vbmVcIiByZWY9XCJpbXBvcnRGb3JtXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiA6dmFsdWU9XCIkY3NyZl90b2tlblwiPlxuICAgICAgICAgICAgPGlucHV0IHJlZj1cImltcG9ydEZvcm1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIGFjY2VwdD1cIi4qY3N2XCIgY2xhc3M9XCJkLW5vbmVcIj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIlJlZGlyZWN0aW9uc1wiLFxuICAgIHByb3BzOiB7XG4gICAgICAgIGluZGV4VXJsOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZVVybDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZVVybDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIH0sXG4gICAgICAgIGV4cG9ydFVybDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIH0sXG4gICAgICAgIGltcG9ydFVybDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXdSZWRpcmVjdGlvbjoge1xuICAgICAgICAgICAgICAgIGZyb206ICcnLFxuICAgICAgICAgICAgICAgIHRvOiAnJyxcbiAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVnZXg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZWRpcmVjdGlvbnM6IFtdLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvYWQoKSB7XG4gICAgICAgICAgICBsZXQgdm0gPSB0aGlzO1xuICAgICAgICAgICAgYXhpb3MuZ2V0KHZtLmluZGV4VXJsKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIHZtLnJlZGlyZWN0aW9ucyA9IHIuZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNhdmUocikge1xuICAgICAgICAgICAgbGV0IHZtID0gdGhpcztcbiAgICAgICAgICAgIGF4aW9zLnBvc3Qodm0uc2F2ZVVybCwgcikudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghci5pZCkge1xuICAgICAgICAgICAgICAgICAgICB2bS5uZXdSZWRpcmVjdGlvbi5mcm9tID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHZtLm5ld1JlZGlyZWN0aW9uLnRvID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHZtLm5ld1JlZGlyZWN0aW9uLnBlcm1hbmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHZtLm5ld1JlZGlyZWN0aW9uLnJlZ2V4ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZtLm5ld1JlZGlyZWN0aW9uLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2bS5sb2FkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlKGlkLCBpKSB7XG4gICAgICAgICAgICBsZXQgdm0gPSB0aGlzO1xuXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB2bS4kdCgnc3dhbC5EZWxldGUnKSxcbiAgICAgICAgICAgICAgICB0ZXh0OiB2bS4kdCgnc3dhbC5zdXJlJywge3RpdGxlOiBpZH0pLFxuICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHZtLiR0KCdzd2FsLkNhbmNlbCcpLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB2bS4kdCgnc3dhbC5ZZXMnKSxcbiAgICAgICAgICAgIH0pLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHIudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKHZtLnNhdmVVcmwsIHtwYXJhbXM6IHtpZH19KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXBwZW5kUXVlcnkocikge1xuICAgICAgICAgICAgaWYgKHIucmVnZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHIucmVnZXggPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgcXVlcnkgc3RyaW5nIGlmIGV4aXN0cztcbiAgICAgICAgICAgIHIuZnJvbSA9IHIuZnJvbS5zcGxpdCgnPycpWzBdO1xuXG4gICAgICAgICAgICByLmZyb20gPSBgXiR7ci5mcm9tfShcXFxcPy4qKT8kYDtcbiAgICAgICAgICAgIHIudG8gPSBgJHtyLnRvfSQxYDtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGh0dHBBbmRTKHIpIHtcbiAgICAgICAgICAgIHIucmVnZXggPSB0cnVlO1xuXG4gICAgICAgICAgICByLmZyb20gPSByLmZyb20ucmVwbGFjZSgvaHR0cHM/OlxcL1xcLy8sICdodHRwcz86Ly8nKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbXBvcnRSZWRpcmVjdGlvbnMoKSB7XG4gICAgICAgICAgICBsZXQgdm0gPSB0aGlzO1xuICAgICAgICAgICAgdm0uJHJlZnMuaW1wb3J0Rm9ybUlucHV0LmNsaWNrKCk7XG5cbiAgICAgICAgICAgIHZtLiRyZWZzLmltcG9ydEZvcm1JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLiRyZWZzLmltcG9ydEZvcm0uc3VibWl0KCk7XG4gICAgICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMubG9hZCgpO1xuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4ucmVkaXJlY3Rpb24taXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcblxuICAgIC5yLWlkIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogNWNoO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPGkxOG4+XG57XG4gICAgXCJlblwiOiB7XG4gICAgfVxufVxuPC9pMThuPlxuXG48dGVtcGxhdGU+XG4gICAgPGFzaWRlIGNsYXNzPVwic2lkZS1iYXJcIiA6Y2xhc3M9XCJ7b3BlbmVkOm9wZW5lZH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYmFyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cIihpdGVtLCBpKSBpbiBpdGVtc1wiIDprZXk9XCJpXCIgY2xhc3M9XCJuYXYtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIml0ZW0uY2hpbGRyZW4gJiYgYWdub3N0aWNMZW5ndGgoaXRlbS5jaGlsZHJlbikgPyAnZHJvcGRvd24nIDogJydcIj5cblxuICAgICAgICAgICAgICAgICAgICA8YSB2LWlmPVwiaXRlbS5jaGlsZHJlbiAmJiBhZ25vc3RpY0xlbmd0aChpdGVtLmNoaWxkcmVuKVwiIGNsYXNzPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlIGQtZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiaXRlbS5ocmVmIHx8ICcjJ1wiIDp0YXJnZXQ9XCJpdGVtLnRhcmdldCB8fCAnX3NlbGYnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwiaXRlbS50aXRsZVwiIHJvbGU9XCJidXR0b25cIiBAY2xpY2s9XCJpdGVtLm9wZW5lZCA9ICFpdGVtLm9wZW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgIDphcmlhLWV4cGFuZGVkPVwiaXRlbS5vcGVuZWQgPyAndHJ1ZScgOiAnZmFsc2UnXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzXCIgOmNsYXNzPVwiaXRlbS5pY29uIHx8ICdub25lJ1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtdGV4dD1cIml0ZW0udGl0bGVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgdi1lbHNlIGNsYXNzPVwibmF2LWxpbmsgZC1mbGV4XCIgOmhyZWY9XCJpdGVtLmhyZWYgfHwgJyMnXCIgOnRhcmdldD1cIml0ZW0udGFyZ2V0IHx8ICdfc2VsZidcIlxuICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCJpdGVtLnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWlmPVwiaXRlbS5pY29uXCIgY2xhc3M9XCJmYXNcIiA6Y2xhc3M9XCJpdGVtLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LXRleHQ9XCJpdGVtLnRpdGxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiaXRlbS5jaGlsZHJlbiAmJiBhZ25vc3RpY0xlbmd0aChpdGVtLmNoaWxkcmVuKVwiIGNsYXNzPVwiY2hpbGQtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdi1mb3I9XCIoY2hpbGQsIGNpKSBpbiBpdGVtLmNoaWxkcmVuXCIgOmtleT1cImNpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmtcIiA6aHJlZj1cImNoaWxkLmhyZWYgfHwgJyMnXCIgOnRhcmdldD1cIml0ZW0udGFyZ2V0IHx8ICdfc2VsZidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwiY2hpbGQudGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjaGlsZC50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9hc2lkZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJTaWRlQmFyXCIsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbWVudUl0ZW1zOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IFtBcnJheSwgT2JqZWN0XSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhZ25vc3RpY0xlbmd0aCh0aGluZykge1xuICAgICAgICAgICAgcmV0dXJuIChBcnJheS5pc0FycmF5KHRoaW5nKSA/IHRoaW5nIDogT2JqZWN0LmtleXModGhpbmcpKS5sZW5ndGg7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIFZ1ZS5zZXQodGhpcywgJ2l0ZW1zJywgdGhpcy5tZW51SXRlbXMpO1xuICAgIH0sXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5zaWRlLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmxhY2ssIDE1KTtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcblxuICAgICYub3BlbmVkIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBmbGV4OiAwIDAgMjAwcHg7XG4gICAgfVxuXG4gICAgLnNpZGUtYmFyLWNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IGNhbGMoNDBweCArIDAuNXJlbSk7XG5cbiAgICAgICAgLm5hdiB7XG4gICAgICAgICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCR3aGl0ZSwgMjApO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgICAgICAgICAgICAgICAgIC5mYXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwLjVlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJiArIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICYubm9uZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjE1Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2hpdGUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5kcm9wZG93biB7XG4gICAgICAgICAgICAgICAgICAgIC5jaGlsZC1tZW51IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibGFjaywgMTUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICA+ICoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR3aGl0ZSwgMC4wNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgW2FyaWEtaGFzcG9wdXBdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICZbYXJpYS1leHBhbmRlZD0ndHJ1ZSddIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmICsgLmNoaWxkLW1lbnUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG48L3N0eWxlPlxuIiwiPGkxOG4+XG57XG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwiSGlcIjogXCJIaVwiLFxuICAgICAgICBcIkxvZ291dFwiOiBcIkxvZ291dFwiXG4gICAgfSxcbiAgICBcImhlXCI6IHtcbiAgICAgICAgXCJIaVwiOiBcIteU15nXmVwiLFxuICAgICAgICBcIkxvZ291dFwiOiBcIteZ16bXmdeQ15RcIlxuICAgIH1cbn1cbjwvaTE4bj5cblxuPHRlbXBsYXRlPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJ0b3AtYmFyIHN0aWNreS10b3AgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhcnQgcHgtMlwiPlxuICAgICAgICAgICAgPGRyb3Bkb3duIGJ0bi1jbGFzcz1cImJ0biB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpidG4+XG4gICAgICAgICAgICAgICAgICAgIHt7ICR0KCdIaScpIH19LFxuICAgICAgICAgICAgICAgICAgICB7eyB1c2VyLm5hbWUgfX1cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6ZHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QWN0aW9uIDE8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIHYtaWY9XCIkaTE4bi5sb2NhbGUgPT09ICdlbidcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiA6aHJlZj1cImxvY2FsZVVybC5yZXBsYWNlKCctbG9jYWxlLScsICdoZScpXCI+16LXkdeo15nXqjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgdi1lbHNlLWlmPVwiJGkxOG4ubG9jYWxlID09PSAnaGUnXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJsb2NhbGVVcmwucmVwbGFjZSgnLWxvY2FsZS0nLCAnZW4nKVwiPkVuZ2xpc2g8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCIgQGNsaWNrPVwiJHJvb3QubG9nb3V0KClcIj57eyAkdCgnTG9nb3V0JykgfX08L2E+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjZW50ZXJcIj48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbmQgcHgtMlwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImVuZFwiPjwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiVG9wQmFyXCIsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2FsZVVybDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgXCIuLi8uLi8uLi9zYXNzL3ZhcmlhYmxlc1wiO1xuXG5oZWFkZXIudG9wLWJhciB7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XG5cbiAgICAuZHJvcGRvd24ge1xuICAgICAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgLmRyb3Bkb3duLWRpdmlkZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWNlZjMwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInZEYXRhVGFibGVcIiA6Y2xhc3M9XCJ7J3ZEYXRhVGFibGUtbG9hZGluZyc6IGxvYWRpbmd9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2RGF0YVRhYmxlLXRvb2xiYXIgZC1mbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZEYXRhVGFibGUtc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZWFyY2g6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIHYtbW9kZWw9XCJyZXF1ZXN0LnNlYXJjaC52YWx1ZVwiPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SZWdleDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwicmVxdWVzdC5zZWFyY2gucmVnZXhcIj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2RGF0YVRhYmxlLXBhZ2VMZW5ndGhcIiB2LWlmPVwibGVuZ3Rocy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICBTaG93XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInJlcXVlc3QubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKGxlbmd0aCxsaSkgaW4gbGVuZ3Roc1wiIDprZXk9XCJsaVwiIDp2YWx1ZT1cImxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxlbmd0aCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRhYmxlIDpjbGFzcz1cIkFycmF5LmlzQXJyYXkodGFibGVDbGFzcykgPyB0YWJsZUNsYXNzLmpvaW4oJyAnKSA6IHRhYmxlQ2xhc3NcIj5cbiAgICAgICAgICAgIDx0aGVhZCBAY2xpY2s9XCJvcmRlclwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cInRoZWFkXCIgOnQ9XCJ0aGlzXCI+PC9zbG90PlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDxkcmFnZ2FibGVcbiAgICAgICAgICAgICAgICA6bGlzdD1cInJlc3BvbnNlLmRhdGFcIlxuICAgICAgICAgICAgICAgIHRhZz1cInRib2R5XCJcbiAgICAgICAgICAgICAgICBnaG9zdC1jbGFzcz1cImdob3N0XCJcbiAgICAgICAgICAgICAgICBoYW5kbGU9XCIuZG5kLWhhbmRsZXJcIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJyZW9yZGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIocm93LCByaSkgaW4gcmVzcG9uc2UuZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgdi1mb3I9XCIoY29sdW1uLCBjaSkgaW4gY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgOm5hbWU9XCIndGRfJytjaVwiIDpkYXRhPVwiJGdldChyb3csIGNvbHVtbi5uYW1lKVwiIDpyb3c9XCJyb3dcIiA6Y29sdW1uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJGdldChyb3csIGNvbHVtbi5uYW1lKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L2RyYWdnYWJsZT5cbiAgICAgICAgPC90YWJsZT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwidkRhdGFUYWJsZS1mb290ZXIgZC1mbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZEYXRhVGFibGUtY291bnRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5TaG93aW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtdGV4dD1cInJlcXVlc3Quc3RhcnQgKyAxXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPnRvPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtdGV4dD1cInJlcXVlc3Quc3RhcnQgKyByZXNwb25zZS5kYXRhLmxlbmd0aFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5vZjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LXRleHQ9XCJyZXNwb25zZS5yZWNvcmRzRmlsdGVyZWRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+ZW50cmllczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInJlc3BvbnNlLnJlY29yZHNGaWx0ZXJlZCAhPT0gcmVzcG9uc2UucmVjb3Jkc1RvdGFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKDxzcGFuPkZpbHRlcmVkIGZyb208L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LXRleHQ9XCJyZXNwb25zZS5yZWNvcmRzVG90YWxcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj50b3RhbCBlbnRyaWVzPC9zcGFuPilcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZEYXRhVGFibGUtcGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidkRhdGFUYWJsZS1wYWdpbmF0aW9uLWJhY2sgcGFnZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIEBjbGljay5wcmV2ZW50PVwicHJldlwiIDpkaXNhYmxlZD1cInJlcXVlc3Quc3RhcnQgPT09IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIsKrIFByZXZpb3VzXCI+Jmx0OzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInBhZ2VzIDwgOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwibiBpbiBwYWdlc1wiIDprZXk9XCJuXCIgY2xhc3M9XCJwYWdlLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsndkRhdGFUYWJsZS1wYWdpbmF0aW9uLWN1cnJlbnQnOiBuID09PSBjdXJyZW50UGFnZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIEBjbGljay5wcmV2ZW50PVwiZ29Ub1BhZ2UobilcIj57eyBuIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cInBhZ2VzID4gNyAmJiBjdXJyZW50UGFnZSA8IDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cIm4gaW4gNVwiIDprZXk9XCJuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J3ZEYXRhVGFibGUtcGFnaW5hdGlvbi1jdXJyZW50JzogbiA9PT0gY3VycmVudFBhZ2V9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBAY2xpY2sucHJldmVudD1cImdvVG9QYWdlKG4pXCI+e3sgbiB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ2RGF0YVRhYmxlLWRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrLnByZXZlbnQgY2xhc3M9XCJ2RGF0YVRhYmxlLWRpc2FibGVkXCI+Li4uPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIEBjbGljay5wcmV2ZW50PVwiZ29Ub1BhZ2UocGFnZXMpXCI+e3sgcGFnZXMgfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwicGFnZXMgPiA3ICYmIGN1cnJlbnRQYWdlID4gNCAmJiBjdXJyZW50UGFnZSA8IHBhZ2VzIC0gNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgQGNsaWNrLnByZXZlbnQ9XCJnb1RvUGFnZSgxKVwiPjE8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidkRhdGFUYWJsZS1kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIEBjbGljay5wcmV2ZW50IGNsYXNzPVwidkRhdGFUYWJsZS1kaXNhYmxlZFwiPi4uLjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBAY2xpY2sucHJldmVudD1cImdvVG9QYWdlKGN1cnJlbnRQYWdlIC0gMSlcIj57eyBjdXJyZW50UGFnZSAtIDEgfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidkRhdGFUYWJsZS1wYWdpbmF0aW9uLWN1cnJlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIEBjbGljay5wcmV2ZW50PVwiZ29Ub1BhZ2UoY3VycmVudFBhZ2UpXCI+e3sgY3VycmVudFBhZ2UgfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgQGNsaWNrLnByZXZlbnQ9XCJnb1RvUGFnZShjdXJyZW50UGFnZSArIDEpXCI+e3sgY3VycmVudFBhZ2UgKyAxIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInZEYXRhVGFibGUtZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2sucHJldmVudCBjbGFzcz1cInZEYXRhVGFibGUtZGlzYWJsZWRcIj4uLi48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgQGNsaWNrLnByZXZlbnQ9XCJnb1RvUGFnZShwYWdlcylcIj57eyBwYWdlcyB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJjdXJyZW50UGFnZSA+IHBhZ2VzIC0gNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgQGNsaWNrLnByZXZlbnQ9XCJnb1RvUGFnZSgxKVwiPjE8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidkRhdGFUYWJsZS1kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIEBjbGljay5wcmV2ZW50IGNsYXNzPVwidkRhdGFUYWJsZS1kaXNhYmxlZFwiPi4uLjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJuIGluIDVcIiA6a2V5PVwiblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyd2RGF0YVRhYmxlLXBhZ2luYXRpb24tY3VycmVudCc6IHBhZ2VzICsobi01KSA9PT0gY3VycmVudFBhZ2V9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBAY2xpY2sucHJldmVudD1cImdvVG9QYWdlKHBhZ2VzICsobi01KSlcIj57eyBwYWdlcyArIChuIC0gNSkgfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidkRhdGFUYWJsZS1wYWdpbmF0aW9uLW5leHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgQGNsaWNrLnByZXZlbnQ9XCJuZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cInJlcXVlc3Quc3RhcnQgPT09IChwYWdlcyAtIDEpICogcmVxdWVzdC5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgwrtcIj4mZ3Q7PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxubGV0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG5sZXQgcXMgPSByZXF1aXJlKCdxcycpO1xuXG5mdW5jdGlvbiBpbmRleEluUGFyZW50KG5vZGUpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSBub2RlLnBhcmVudE5vZGUuY2hpbGROb2RlcztcbiAgICBsZXQgbnVtID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbltpXSA9PT0gbm9kZSkgcmV0dXJuIG51bTtcbiAgICAgICAgaWYgKGNoaWxkcmVuW2ldLm5vZGVUeXBlID09PSAxKSBudW0rKztcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuXG5sZXQgVkRhdGFUYWJsZSA9IHtcbiAgICBuYW1lOiAnVkRhdGFUYWJsZScsXG5cbiAgICBwcm9wczoge1xuICAgICAgICBkYXRhVXJsOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgfSxcblxuICAgICAgICBzb3J0VXJsOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIH0sXG5cbiAgICAgICAgc29ydENvbHVtbjoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB9LFxuXG4gICAgICAgIGtleUNvbHVtbjoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB9LFxuXG4gICAgICAgIHRhYmxlQ2xhc3M6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IFtBcnJheSwgU3RyaW5nXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICB9LFxuXG4gICAgICAgIGxlbmd0aHM6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzEwLCAyNSwgNTAsIDEwMF07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sdW1uczogW10sXG5cbiAgICAgICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICAgICAgICBkcmF3OiAwLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgIGxlbmd0aDogMTAsXG4gICAgICAgICAgICAgICAgY29sdW1uczogW10sXG4gICAgICAgICAgICAgICAgb3JkZXI6IFtdLFxuICAgICAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVnZXg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXNwb25zZToge1xuICAgICAgICAgICAgICAgIGRyYXc6IDAsXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1RvdGFsOiAwLFxuICAgICAgICAgICAgICAgIHJlY29yZHNGaWx0ZXJlZDogMCxcbiAgICAgICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZCgpIHtcbiAgICAgICAgICAgIGxldCB2bSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZtLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICB2bS5yZXF1ZXN0LmNvbHVtbnMgPSB2bS5jb2x1bW5zO1xuXG4gICAgICAgICAgICB2bS5yZXF1ZXN0LmRyYXcrKztcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KHZtLmRhdGFVcmwsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHZtLnJlcXVlc3QsXG4gICAgICAgICAgICAgICAgcGFyYW1zU2VyaWFsaXplcjogcGFyYW1zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHFzLnN0cmluZ2lmeShwYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgdm0ucmVzcG9uc2UgPSByLmRhdGE7XG4gICAgICAgICAgICAgICAgdm0ubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb3JkZXIoJGV2ZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuZSA9ICRldmVudDtcbiAgICAgICAgfSxcblxuICAgICAgICBnb1RvUGFnZShuKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3Quc3RhcnQgPSB0aGlzLnJlcXVlc3QubGVuZ3RoICogKG4gLSAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgIT09IHRoaXMucGFnZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3Quc3RhcnQgKz0gdGhpcy5yZXF1ZXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcmV2KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0LnN0YXJ0IC09IHRoaXMucmVxdWVzdC5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVvcmRlcihjaGFuZ2UpIHtcbiAgICAgICAgICAgIGlmICghY2hhbmdlLm1vdmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuc29ydFVybCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5ld09yZGVyID0gdGhpcy5yZXNwb25zZS5kYXRhLm1hcCgoaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7aWQ6IGlbdGhpcy5rZXlDb2x1bW5dLCBvcmRlcjogbiArIDF9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGF4aW9zLnB1dCh0aGlzLnNvcnRVcmwsIHtvcmRlcjogbmV3T3JkZXJ9KS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgJGdldChvYmosIHBhdGgpIHtcbiAgICAgICAgICAgIGxldCB2bSA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gdm1bb2JqXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gaW5kZXgob2JqLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ialtpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhdGguc3BsaXQoJy4nKS5yZWR1Y2UoaW5kZXgsIG9iaik7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHBhZ2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnJlc3BvbnNlLnJlY29yZHNGaWx0ZXJlZCAvIHRoaXMucmVxdWVzdC5sZW5ndGgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGN1cnJlbnRQYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnJlcXVlc3Quc3RhcnQgLyB0aGlzLnJlcXVlc3QubGVuZ3RoKSArIDE7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgICdyZXF1ZXN0LnN0YXJ0JygpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgICdyZXF1ZXN0Lmxlbmd0aCcoKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3Quc3RhcnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgJ3JlcXVlc3Quc2VhcmNoLnZhbHVlJygpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgICdyZXF1ZXN0LnNlYXJjaC5yZWdleCcoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3Rocy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QubGVuZ3RoID0gdGhpcy5sZW5ndGhzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfSxcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZS5jb21wb25lbnQoJ3YtZGF0YS10YWJsZScsIHRoaXMpO1xuXG4gICAgICAgIFZ1ZS5kaXJlY3RpdmUoJ2R0LWNvbHVtbicsIHtcbiAgICAgICAgICAgIGluc2VydGVkKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgICAgICAgICAgICAgIGxldCB2ZHQgPSBiaW5kaW5nLnZhbHVlWzBdIHx8IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodmR0ICYmIHZkdC4kb3B0aW9ucyAmJiB2ZHQuJG9wdGlvbnMubmFtZSA9PT0gJ1ZEYXRhVGFibGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBnaXZlblNldHRpbmdzID0gYmluZGluZy52YWx1ZVsxXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2l2ZW5TZXR0aW5ncy5kYXRhLmluZGV4T2YoJy4nKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpdmVuU2V0dGluZ3MuZGF0YSA9IGdpdmVuU2V0dGluZ3MuZGF0YS5zcGxpdCgnLicpWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sIGdpdmVuU2V0dGluZ3MgfHwge30pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gdmR0LmNvbHVtbnMucHVzaChzZXR0aW5ncykgLSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBvcmRlclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3Mub3JkZXJhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGggPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aEkgPSBpbmRleEluUGFyZW50KHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZEYXRhVGFibGUtYXNjJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGguY2xhc3NMaXN0LnJlbW92ZSgndkRhdGFUYWJsZS1hc2MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGguY2xhc3NMaXN0LmFkZCgndkRhdGFUYWJsZS1kZXNjJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpciA9ICdkZXNjJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aC5jbGFzc0xpc3QucmVtb3ZlKCd2RGF0YVRhYmxlLWRlc2MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGguY2xhc3NMaXN0LmFkZCgndkRhdGFUYWJsZS1hc2MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyID0gJ2FzYyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xlYXIgYWxsIHNvcnRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RoJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKG9uZVRoLCBvbmVUaEkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbmVUaEkgPT09IHRoSSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25lVGguY2xhc3NMaXN0LnJlbW92ZSgndkRhdGFUYWJsZS1hc2MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uZVRoLmNsYXNzTGlzdC5yZW1vdmUoJ3ZEYXRhVGFibGUtZGVzYycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZkdC5yZXF1ZXN0Lm9yZGVyID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmR0LnJlcXVlc3Qub3JkZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogdGhJLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXI6IGRpcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZkdC5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVsLCAnVkRhdGFUYWJsZSBpcyByZXF1aXJlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5cbndpbmRvdy5WRGF0YVRhYmxlID0gVkRhdGFUYWJsZTtcblxuZXhwb3J0IGRlZmF1bHQgVkRhdGFUYWJsZTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4udkRhdGFUYWJsZS1hc2Mge1xuICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGYtOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMwMS4yMTkgMzAxLjIxOVwiPjxwYXRoIGQ9XCJNMTQ5LjM2NSAyNjIuNzM2SDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTBoMTM5LjM2NWM1LjUyMiAwIDEwLTQuNDc3IDEwLTEwdi0xMGMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwek0xMCAyMjkuNzM2aDEyMC41ODZjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHYtMTBjMC01LjUyMy00LjQ3OC0xMC0xMC0xMEgxMGMtNS41MjMgMC0xMCA0LjQ3Ny0xMCAxMHYxMGMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwek0xMCAxNjYuNzM2aDEwMS44MDVjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHYtMTBjMC01LjUyMy00LjQ3OC0xMC0xMC0xMEgxMGMtNS41MjMgMC0xMCA0LjQ3Ny0xMCAxMHYxMGMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwek0xMCA5Ni43MzZoODMuMDI1YzUuNTIyIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzgtMTAtMTAtMTBIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMHpNMTAgMzMuNzM2aDY0LjI0NGM1LjUyMiAwIDEwLTQuNDc3IDEwLTEwdi0xMGMwLTUuNTIzLTQuNDc4LTEwLTEwLTEwSDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTB6TTI5OC4yOSAyMTYuODc3bC03LjA3LTcuMDcxYTEwLjAwMSAxMC4wMDEgMCAwMC0xNC4xNDIgMGwtMzQuMzk0IDM0LjM5M1YxOC43MzZjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMGgtMTBjLTUuNTIyIDAtMTAgNC40NzctMTAgMTB2MjI1LjQ2MmwtMzQuMzk0LTM0LjM5M2E5Ljk5OSA5Ljk5OSAwIDAwLTE0LjE0MiAwbC03LjA3IDcuMDcxYy0zLjkwNSAzLjkwNS0zLjkwNSAxMC4yMzcgMCAxNC4xNDJsNjMuNTM1IDYzLjUzNmExMC4wMDMgMTAuMDAzIDAgMDAxNC4xNDIgMGw2My41MzUtNjMuNTM2YzMuOTA1LTMuOTA1IDMuOTA1LTEwLjIzNiAwLTE0LjE0MXpcIi8+PC9zdmc+Jykgbm8tcmVwZWF0IGNlbnRlciAvMTAwJSAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMC44MTI1cmVtO1xuICAgICAgICB3aWR0aDogMXJlbTtcbiAgICB9XG59XG5cbi52RGF0YVRhYmxlLWRlc2Mge1xuICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGYtOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMwMS4yMTkgMzAxLjIxOVwiPjxwYXRoIGQ9XCJNMTU5LjM2NSAyMy43MzZ2LTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTBIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMGgxMzkuMzY1YzUuNTIzIDAgMTAtNC40NzcgMTAtMTB6TTEzMC41ODYgNjYuNzM2SDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTBoMTIwLjU4NmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwdi0xMGMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwek0xMTEuODA1IDEyOS43MzZIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMGgxMDEuODA1YzUuNTIzIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTB6TTkzLjAyNSAxOTkuNzM2SDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTBoODMuMDI1YzUuNTIyIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTB6TTc0LjI0NCAyNjIuNzM2SDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTBoNjQuMjQ0YzUuNTIyIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTB6TTI5OC4yOSAyMTYuODc3bC03LjA3MS03LjA3MWExMC4wMDEgMTAuMDAxIDAgMDAtMTQuMTQzIDBsLTM0LjM5MyAzNC4zOTNWMTguNzM2YzAtNS41MjMtNC40NzctMTAtMTAtMTBoLTEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjIyNS40NjJsLTM0LjM5My0zNC4zOTNhMTAuMDAzIDEwLjAwMyAwIDAwLTE0LjE0MiAwbC03LjA3MiA3LjA3MWMtMy45MDQgMy45MDUtMy45MDQgMTAuMjM3IDAgMTQuMTQybDYzLjUzNiA2My41MzZhOS45NjggOS45NjggMCAwMDcuMDcxIDIuOTI5IDkuOTY2IDkuOTY2IDAgMDA3LjA3MS0yLjkyOWw2My41MzYtNjMuNTM2YzMuOTA1LTMuOTA1IDMuOTA1LTEwLjIzNyAwLTE0LjE0MXpcIi8+PC9zdmc+Jykgbm8tcmVwZWF0IGNlbnRlciAvMTAwJSAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMC44MTI1cmVtO1xuICAgICAgICB3aWR0aDogMXJlbTtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgdmFyIGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJyZWFkLWVkaXRbZGF0YS12LWZhYjA0ZjA0XSAgaW5wdXQsXFxuLmJyZWFkLWVkaXRbZGF0YS12LWZhYjA0ZjA0XSAgc2VsZWN0LFxcbi5icmVhZC1lZGl0W2RhdGEtdi1mYWIwNGYwNF0gIHRleHRhcmVhIHtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbn1cXG4uYnJlYWQtZWRpdC53cml0aW5nLXJ0bFtkYXRhLXYtZmFiMDRmMDRdICBpbnB1dCxcXG4uYnJlYWQtZWRpdC53cml0aW5nLXJ0bFtkYXRhLXYtZmFiMDRmMDRdICBzZWxlY3QsXFxuLmJyZWFkLWVkaXQud3JpdGluZy1ydGxbZGF0YS12LWZhYjA0ZjA0XSAgdGV4dGFyZWEge1xcbiAgZGlyZWN0aW9uOiBydGw7XFxufVxcbi5maWVsZFtkYXRhLXYtZmFiMDRmMDRdIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmotbG9jYXRpb24tZmllbGQtbWFwW2RhdGEtdi03MzkwYmJkMV0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmVkaXJlY3Rpb24taXRlbVtkYXRhLXYtMTcxYTZmODRdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcbi5yZWRpcmVjdGlvbi1pdGVtIC5yLWlkW2RhdGEtdi0xNzFhNmY4NF0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDVjaDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zaWRlLWJhcltkYXRhLXYtMzMzOTgwZTJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XFxuICB3aWR0aDogNjVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLnNpZGUtYmFyLm9wZW5lZFtkYXRhLXYtMzMzOTgwZTJdIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGZsZXg6IDAgMCAyMDBweDtcXG59XFxuLnNpZGUtYmFyIC5zaWRlLWJhci1jb250ZW50W2RhdGEtdi0zMzM5ODBlMl0ge1xcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogY2FsYyg0MHB4ICsgMC41cmVtKTtcXG59XFxuLnNpZGUtYmFyIC5zaWRlLWJhci1jb250ZW50IC5uYXYgLm5hdi1pdGVtIC5uYXYtbGlua1tkYXRhLXYtMzMzOTgwZTJdIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLnNpZGUtYmFyIC5zaWRlLWJhci1jb250ZW50IC5uYXYgLm5hdi1pdGVtIC5uYXYtbGluayAuZmFzW2RhdGEtdi0zMzM5ODBlMl0ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMC41ZW07XFxuICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMC41ZW07XFxufVxcbi5zaWRlLWJhciAuc2lkZS1iYXItY29udGVudCAubmF2IC5uYXYtaXRlbSAubmF2LWxpbmsgLmZhcyArIHNwYW5bZGF0YS12LTMzMzk4MGUyXSB7XFxuICBmbGV4OiAxO1xcbn1cXG4uc2lkZS1iYXIgLnNpZGUtYmFyLWNvbnRlbnQgLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIC5mYXMubm9uZVtkYXRhLXYtMzMzOTgwZTJdOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICB3aWR0aDogMS4xNWNoO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uc2lkZS1iYXIgLnNpZGUtYmFyLWNvbnRlbnQgLm5hdiAubmF2LWl0ZW1bZGF0YS12LTMzMzk4MGUyXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxufVxcbi5zaWRlLWJhciAuc2lkZS1iYXItY29udGVudCAubmF2IC5uYXYtaXRlbS5kcm9wZG93biAuY2hpbGQtbWVudVtkYXRhLXYtMzMzOTgwZTJdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xcbn1cXG4uc2lkZS1iYXIgLnNpZGUtYmFyLWNvbnRlbnQgLm5hdiAubmF2LWl0ZW0uZHJvcGRvd24gLmNoaWxkLW1lbnUgPiAqW2RhdGEtdi0zMzM5ODBlMl0ge1xcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAzcmVtO1xcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogM3JlbTtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcbi5zaWRlLWJhciAuc2lkZS1iYXItY29udGVudCAubmF2IC5uYXYtaXRlbS5kcm9wZG93biAuY2hpbGQtbWVudSA+ICpbZGF0YS12LTMzMzk4MGUyXTpob3ZlciB7XFxuICBjb2xvcjogIzQyODVGNDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxufVxcbi5zaWRlLWJhciAuc2lkZS1iYXItY29udGVudCAubmF2IC5uYXYtaXRlbS5kcm9wZG93biBbYXJpYS1oYXNwb3B1cF1bYXJpYS1leHBhbmRlZD10cnVlXSArIC5jaGlsZC1tZW51W2RhdGEtdi0zMzM5ODBlMl0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyLnRvcC1iYXIge1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcbmhlYWRlci50b3AtYmFyIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5oZWFkZXIudG9wLWJhciAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWRpdmlkZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWYzMDtcXG59XFxuaGVhZGVyLnRvcC1iYXIgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcXG59XFxuaGVhZGVyLnRvcC1iYXIgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52RGF0YVRhYmxlLWFzY1tkYXRhLXYtMWFjZTUwNmJdOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGYtOCw8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwMS4yMTkgMzAxLjIxOVxcXCI+PHBhdGggZD1cXFwiTTE0OS4zNjUgMjYyLjczNkgxMGMtNS41MjMgMC0xMCA0LjQ3Ny0xMCAxMHYxMGMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwaDEzOS4zNjVjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHYtMTBjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMHpNMTAgMjI5LjczNmgxMjAuNTg2YzUuNTIyIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzgtMTAtMTAtMTBIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMHpNMTAgMTY2LjczNmgxMDEuODA1YzUuNTIyIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzgtMTAtMTAtMTBIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMHpNMTAgOTYuNzM2aDgzLjAyNWM1LjUyMiAwIDEwLTQuNDc3IDEwLTEwdi0xMGMwLTUuNTIzLTQuNDc4LTEwLTEwLTEwSDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTB6TTEwIDMzLjczNmg2NC4yNDRjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHYtMTBjMC01LjUyMy00LjQ3OC0xMC0xMC0xMEgxMGMtNS41MjMgMC0xMCA0LjQ3Ny0xMCAxMHYxMGMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwek0yOTguMjkgMjE2Ljg3N2wtNy4wNy03LjA3MWExMC4wMDEgMTAuMDAxIDAgMDAtMTQuMTQyIDBsLTM0LjM5NCAzNC4zOTNWMTguNzM2YzAtNS41MjMtNC40NzctMTAtMTAtMTBoLTEwYy01LjUyMiAwLTEwIDQuNDc3LTEwIDEwdjIyNS40NjJsLTM0LjM5NC0zNC4zOTNhOS45OTkgOS45OTkgMCAwMC0xNC4xNDIgMGwtNy4wNyA3LjA3MWMtMy45MDUgMy45MDUtMy45MDUgMTAuMjM3IDAgMTQuMTQybDYzLjUzNSA2My41MzZhMTAuMDAzIDEwLjAwMyAwIDAwMTQuMTQyIDBsNjMuNTM1LTYzLjUzNmMzLjkwNS0zLjkwNSAzLjkwNS0xMC4yMzYgMC0xNC4xNDF6XFxcIi8+PC9zdmc+Jykgbm8tcmVwZWF0IGNlbnRlci8xMDAlIDEwMCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDAuODEyNXJlbTtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG4udkRhdGFUYWJsZS1kZXNjW2RhdGEtdi0xYWNlNTA2Yl06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0Zi04LDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAxLjIxOSAzMDEuMjE5XFxcIj48cGF0aCBkPVxcXCJNMTU5LjM2NSAyMy43MzZ2LTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTBIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMGgxMzkuMzY1YzUuNTIzIDAgMTAtNC40NzcgMTAtMTB6TTEzMC41ODYgNjYuNzM2SDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTBoMTIwLjU4NmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwdi0xMGMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwek0xMTEuODA1IDEyOS43MzZIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMGgxMDEuODA1YzUuNTIzIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTB6TTkzLjAyNSAxOTkuNzM2SDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTBoODMuMDI1YzUuNTIyIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTB6TTc0LjI0NCAyNjIuNzM2SDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTBoNjQuMjQ0YzUuNTIyIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTB6TTI5OC4yOSAyMTYuODc3bC03LjA3MS03LjA3MWExMC4wMDEgMTAuMDAxIDAgMDAtMTQuMTQzIDBsLTM0LjM5MyAzNC4zOTNWMTguNzM2YzAtNS41MjMtNC40NzctMTAtMTAtMTBoLTEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjIyNS40NjJsLTM0LjM5My0zNC4zOTNhMTAuMDAzIDEwLjAwMyAwIDAwLTE0LjE0MiAwbC03LjA3MiA3LjA3MWMtMy45MDQgMy45MDUtMy45MDQgMTAuMjM3IDAgMTQuMTQybDYzLjUzNiA2My41MzZhOS45NjggOS45NjggMCAwMDcuMDcxIDIuOTI5IDkuOTY2IDkuOTY2IDAgMDA3LjA3MS0yLjkyOWw2My41MzYtNjMuNTM2YzMuOTA1LTMuOTA1IDMuOTA1LTEwLjIzNyAwLTE0LjE0MXpcXFwiLz48L3N2Zz4nKSBuby1yZXBlYXQgY2VudGVyLzEwMCUgMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMC44MTI1cmVtO1xcbiAgd2lkdGg6IDFyZW07XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnByZXZpZXdbZGF0YS12LTZkYjQ2OTg4XSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZm9ybS1yb3cuZ3JvdXBlZFtkYXRhLXYtYWRkNDc3NjRdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjRmZjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucHJldmlld1tkYXRhLXYtMWRhMWZkNzFdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKiEgaWVlZTc1NC4gQlNELTMtQ2xhdXNlIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnJlYWRFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZhYjA0ZjA0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnJlYWRFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZhYjA0ZjA0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JyZWFkRWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mYWIwNGYwNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2VvY29kaW5nRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzM5MGJiZDEmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HZW9jb2RpbmdGaWVsZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MzkwYmJkMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HZW9jb2RpbmdGaWVsZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MzkwYmJkMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVkaXJlY3Rpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3MWE2Zjg0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVkaXJlY3Rpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3MWE2Zjg0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZGlyZWN0aW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNzFhNmY4NCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMzM5ODBlMiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzMzOTgwZTImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMzM5ODBlMiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVkRhdGFUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYWNlNTA2YiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWFjZTUwNmImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVkRhdGFUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYWNlNTA2YiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmRiNDY5ODgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZUZpZWxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZkYjQ2OTg4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmRiNDY5ODgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Hcm91cGVkRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWRkNDc3NjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JvdXBlZEZpZWxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFkZDQ3NzY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Hcm91cGVkRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWRkNDc3NjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbWFnZUZpZWxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFkYTFmZDcxJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWRhMWZkNzEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWRhMWZkNzEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYnJlYWQtZWRpdCByb3dcIixcbiAgICAgIGNsYXNzOiB7IFwid3JpdGluZy1ydGxcIjogX3ZtLmlzTG9jYWxlUnRsIH1cbiAgICB9LFxuICAgIF92bS5fbChfdm0ubWFuaWZlc3QsIGZ1bmN0aW9uKGNvbHVtbiwgY2xhc3NJZCkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IGtleTogY2xhc3NJZCwgY2xhc3M6IGNsYXNzSWQgfSxcbiAgICAgICAgX3ZtLl9sKGNvbHVtbiwgZnVuY3Rpb24oZmllbGRzLCBnVGl0bGUpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGdUaXRsZSwgc3RhdGljQ2xhc3M6IFwiY2FyZCBtYi00XCIgfSwgW1xuICAgICAgICAgICAgZ1RpdGxlWzBdICE9PSBcIl9cIlxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtfdm0uX3YoX3ZtLl9zKGdUaXRsZSkpXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3dcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChmaWVsZHMsIGZ1bmN0aW9uKGZpZWxkLCBmaSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBmaSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWVsZCBwLTEgZm9ybS1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBmaWVsZC53aWR0aFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQucmVwZWF0cyA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkcmFnZ2FibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBfdm0udmFsdWVzW2ZpZWxkLm5hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2hvc3QtY2xhc3NcIjogXCJnaG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZTogXCIuZG5kLWhhbmRsZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnZhbHVlc1tmaWVsZC5uYW1lXSwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZC5pZCArIHZpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgZmxleC1maWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZvcjogZmllbGQuaWQgKyB2aSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmllbGQubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHZpICsgMSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoZmllbGQuY29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZmllbGQuaWQgKyB2aSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWVsZC5uYW1lICsgXCJbXCIgKyB2aSArIFwiXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ6ICEhX3ZtLmVycm9yc1tmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogZmllbGQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBmaWVsZC52YWxpZGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogX3ZtLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWxvY2FsZS1ydGxcIjogX3ZtLmlzTG9jYWxlUnRsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS52YWx1ZXNbZmllbGQubmFtZV1bdmldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmFsdWVzW2ZpZWxkLm5hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZXNbZmllbGQubmFtZV1bdmldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IFwiMS41cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy1pbmxpbmUtc3RhcnRcIjogXCIxLjI1cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tcHJpbWFyeSBkbmQtaGFuZGxlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdChcIlJlb3JkZXJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS1hcnJvd3MtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52YWx1ZXNbZmllbGQubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoID09PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHQoXCJSZW1vdmVcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmxhYmVsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZpICsgMSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVSZXBlYXRlZEZpZWxkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtdHJhc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52YWx1ZXNbZmllbGQubmFtZV0ubGVuZ3RoID49XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5yZXBlYXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS4kdChcIkFkZFwiKSArIFwiIFwiICsgZmllbGQubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlcGVhdEZpZWxkKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGx1c1wiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBmaWVsZC5pZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmllbGQubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoZmllbGQuY29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZmllbGQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ6ICEhX3ZtLmVycm9yc1tmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBmaWVsZC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBmaWVsZC52YWxpZGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IF92bS5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtbG9jYWxlLXJ0bFwiOiBfdm0uaXNMb2NhbGVSdGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlc1tmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS52YWx1ZXMsIGZpZWxkLm5hbWUsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWx1ZXNbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dCB0ZXh0LW11dGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogZmllbGQuaWQgKyBcIkhlbHBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZpZWxkLmRlc2NyaXB0aW9uKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzW2ZpZWxkLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwiYWxlcnRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnNbZmllbGQubmFtZV1bMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5maWVsZF92YWx1ZSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGRfdmFsdWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogX3ZtLm5hbWUgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZF92YWx1ZSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF92bS5maWVsZF92YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidnVlanMtZGF0ZXBpY2tlclwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaWQ6IF92bS5pZCxcbiAgICAgICAgICBmb3JtYXQ6IF92bS5mb3JtYXQsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQubW0ueXl5eVwiLFxuICAgICAgICAgIGxhbmd1YWdlOiBfdm0uZExvY2FsZXNbX3ZtLiRpMThuLmxvY2FsZV0gfHwgX3ZtLmRMb2NhbGVzLmVuLFxuICAgICAgICAgIHJlcXVpcmVkOiBfdm0udmFsaWRhdGlvbi5pbmRleE9mKFwicmVxdWlyZWRcIikgPiAtMSxcbiAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IHsgXCJmb3JtLWNvbnRyb2xcIjogMSwgXCJpcy1pbnZhbGlkXCI6IF92bS5pbnZhbGlkIH1cbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgaW5wdXQ6IF92bS51cGRhdGUgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLmRhdGUgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF0ZVwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwIG1iLTNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLXByZXBlbmRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jaGFuZ2VGaWxlIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJDaG9vc2UgZmlsZVxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGRfdmFsdWUsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbmFtZTogX3ZtLm5hbWUgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZF92YWx1ZSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF92bS5maWVsZF92YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uc2hvd0ZtXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZSBzaG93IGQtYmxvY2tcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiBcIi0xXCIsIHJvbGU6IFwiZGlhbG9nXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1kaWFsb2cgbW9kYWwteGxcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcImRvY3VtZW50XCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWluLWhlaWdodFwiOiBcIjgwdmhcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmlsZSBNYW5hZ2VyIHwgQ2hvb3NlIGltYWdlIGZvciBcIiArIF92bS5fcyhfdm0ubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0ZtID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiw5dcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW19jKFwiZmlsZS1tYW5hZ2VyLXdyYXBwZXJcIiwgeyByZWY6IFwiZm13XCIgfSldLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5zaG93Rm1cbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1iYWNrZHJvcCBmYWRlIHNob3dcIiB9KVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGRfdmFsdWUuYWRkcmVzcyxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlLmFkZHJlc3NcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgcmVmOiBcImFkZHJlc3NFbGVtXCIsXG4gICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uaW52YWxpZCB9LFxuICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IF92bS5uYW1lICsgXCJbYWRkcmVzc11cIiB9LFxuICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZF92YWx1ZS5hZGRyZXNzIH0sXG4gICAgICBvbjoge1xuICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkX3ZhbHVlLCBcImFkZHJlc3NcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgdmFsdWU6IF92bS5maWVsZF92YWx1ZS5sYXQsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZF92YWx1ZS5sYXRcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogX3ZtLm5hbWUgKyBcIltsYXRdXCIgfSxcbiAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmllbGRfdmFsdWUubGF0IH0sXG4gICAgICBvbjoge1xuICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkX3ZhbHVlLCBcImxhdFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkX3ZhbHVlLmxuZyxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlLmxuZ1wiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBfdm0ubmFtZSArIFwiW2xuZ11cIiB9LFxuICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZF92YWx1ZS5sbmcgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBfdm0uJHNldChfdm0uZmllbGRfdmFsdWUsIFwibG5nXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcIm1hcEVsZW1cIiwgc3RhdGljQ2xhc3M6IFwiai1sb2NhdGlvbi1maWVsZC1tYXAgbXQtM1wiIH0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3cgZ3JvdXBlZFwiIH0sXG4gICAgX3ZtLl9sKF92bS5maWVsZHMsIGZ1bmN0aW9uKGZpZWxkLCBmaSkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBmaWVsZC5pZCArIGZpLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpZWxkIHAtNCBmb3JtLWdyb3VwXCIsXG4gICAgICAgICAgY2xhc3M6IGZpZWxkLndpZHRoXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBmaWVsZC5yZXBlYXRzID4gMVxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRyYWdnYWJsZVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IF92bS5maWVsZF92YWx1ZVtmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImdob3N0LWNsYXNzXCI6IFwiZ2hvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IFwiLmRuZC1oYW5kbGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5maWVsZF92YWx1ZVtmaWVsZC5uYW1lXSwgZnVuY3Rpb24odmFsdWUsIHZpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBmaWVsZC5pZCArIHZpLCBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBmbGV4LWZpbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IGZpZWxkLmlkICsgdmkgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmllbGQubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModmkgKyAxKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhmaWVsZC5jb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBmaWVsZC5pZCArIHZpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIltcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiW1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ6ICEhX3ZtLmVycm9yc1tmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogZmllbGQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBmaWVsZC52YWxpZGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogX3ZtLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWxvY2FsZS1ydGxcIjogX3ZtLmlzTG9jYWxlUnRsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWVsZF92YWx1ZVtmaWVsZC5uYW1lXVt2aV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWVsZF92YWx1ZVtmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZF92YWx1ZVtmaWVsZC5uYW1lXVt2aV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogXCIxLjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLWlubGluZS1zdGFydFwiOiBcIjEuMjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgZG5kLWhhbmRsZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0uJHQoXCJSZW9yZGVyXCIpICsgXCIgXCIgKyBmaWVsZC5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1hcnJvd3MtYWx0XCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWVsZF92YWx1ZVtmaWVsZC5uYW1lXS5sZW5ndGggPT09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdChcIlJlbW92ZVwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubGFiZWwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmkgKyAxKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZVJlcGVhdGVkRmllbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRyYXNoXCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmllbGRfdmFsdWVbZmllbGQubmFtZV0ubGVuZ3RoID49XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5yZXBlYXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS4kdChcIkFkZFwiKSArIFwiIFwiICsgZmllbGQubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlcGVhdEZpZWxkKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGx1c1wiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBmaWVsZC5pZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmaWVsZC5sYWJlbCkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKGZpZWxkLmNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBfdm0ubmFtZSArIFwiW1wiICsgZmllbGQubmFtZSArIFwiXVwiLFxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkOiAhIV92bS5lcnJvcnNbZmllbGQubmFtZV0sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogZmllbGQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogZmllbGQudmFsaWRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiBfdm0ubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBcImlzLWxvY2FsZS1ydGxcIjogX3ZtLmlzTG9jYWxlUnRsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWVsZF92YWx1ZVtmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5maWVsZF92YWx1ZSwgZmllbGQubmFtZSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIGZpZWxkLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IGZpZWxkLmlkICsgXCJIZWxwXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZpZWxkLmRlc2NyaXB0aW9uKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5lcnJvcnNbZmllbGQubmFtZV1cbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJhbGVydFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5lcnJvcnNbZmllbGQubmFtZV1bMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGRfdmFsdWUudyxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlLndcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogX3ZtLm5hbWUgKyBcIlt3XVwiIH0sXG4gICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpZWxkX3ZhbHVlLncgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBfdm0uJHNldChfdm0uZmllbGRfdmFsdWUsIFwid1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkX3ZhbHVlLmgsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZF92YWx1ZS5oXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IF92bS5uYW1lICsgXCJbaF1cIiB9LFxuICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZF92YWx1ZS5oIH0sXG4gICAgICBvbjoge1xuICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkX3ZhbHVlLCBcImhcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgdmFsdWU6IF92bS5maWVsZF92YWx1ZS5zcmMsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZF92YWx1ZS5zcmNcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogX3ZtLm5hbWUgKyBcIltzcmNdXCIgfSxcbiAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmllbGRfdmFsdWUuc3JjIH0sXG4gICAgICBvbjoge1xuICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkX3ZhbHVlLCBcInNyY1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCB3LWF1dG8gZC1pbmxpbmUtYmxvY2sgcC0yXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICByZWY6IFwicHJldmlld1wiLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJwcmV2aWV3XCIsXG4gICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmZpZWxkX3ZhbHVlLnNyYywgYWx0OiBcInByZXZpZXdcIiB9LFxuICAgICAgICBvbjogeyBjbGljazogX3ZtLmNoYW5nZUltYWdlIH1cbiAgICAgIH0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgbXQtNFwiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IF92bS5pZCArIFwiX2FsdFwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubGFiZWwpICsgXCIgQWx0XFxuICAgICAgICBcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkX3ZhbHVlLmFsdCxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGRfdmFsdWUuYWx0XCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbmFtZTogX3ZtLm5hbWUgKyBcIlthbHRdXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZF92YWx1ZS5hbHQgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZmllbGRfdmFsdWUsIFwiYWx0XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnNob3dGbVxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGZhZGUgc2hvdyBkLWJsb2NrXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0YWJpbmRleDogXCItMVwiLCByb2xlOiBcImRpYWxvZ1wiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZGlhbG9nIG1vZGFsLXhsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJkb2N1bWVudFwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1pbi1oZWlnaHRcIjogXCI4MHZoXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZpbGUgTWFuYWdlciB8IENob29zZSBpbWFnZSBmb3IgXCIgKyBfdm0uX3MoX3ZtLmxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dGbSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsOXXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImZpbGUtbWFuYWdlci13cmFwcGVyXCIsIHsgcmVmOiBcImZtd1wiIH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uc2hvd0ZtXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYmFja2Ryb3AgZmFkZSBzaG93XCIgfSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5vcHRzLnR5cGUgPT09IFwiY2hlY2tib3hcIlxuICAgID8gX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGRfdmFsdWUsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmludmFsaWQgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLm9wdHMucGxhY2Vob2xkZXIsXG4gICAgICAgICAgcGF0dGVybjogX3ZtLm9wdHMucGF0dGVybixcbiAgICAgICAgICBhdXRvZm9jdXM6IF92bS5vcHRzLmF1dG9mb2N1cyxcbiAgICAgICAgICBhdXRvY29tcGxldGU6IF92bS5vcHRzLmF1dG9jb21wbGV0ZSxcbiAgICAgICAgICBzdGVwOiBfdm0ub3B0cy5zdGVwLFxuICAgICAgICAgIG1heDogX3ZtLm9wdHMubWF4LFxuICAgICAgICAgIG1pbjogX3ZtLm9wdHMubWluLFxuICAgICAgICAgIHJlYWRvbmx5OiBfdm0ub3B0cy5yZWFkb25seSxcbiAgICAgICAgICBkaXI6IF92bS5vcHRzLmRpcixcbiAgICAgICAgICByZXF1aXJlZDogX3ZtLnZhbGlkYXRpb24uaW5kZXhPZihcInJlcXVpcmVkXCIpID4gLTEsXG4gICAgICAgICAgaWQ6IF92bS5pZCxcbiAgICAgICAgICBuYW1lOiBfdm0ubmFtZSxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCJcbiAgICAgICAgfSxcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5maWVsZF92YWx1ZSlcbiAgICAgICAgICAgID8gX3ZtLl9pKF92bS5maWVsZF92YWx1ZSwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgOiBfdm0uZmllbGRfdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgdmFyICQkYSA9IF92bS5maWVsZF92YWx1ZSxcbiAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uZmllbGRfdmFsdWUgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgKF92bS5maWVsZF92YWx1ZSA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF92bS5maWVsZF92YWx1ZSA9ICQkY1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA6IF92bS5vcHRzLnR5cGUgPT09IFwicmFkaW9cIlxuICAgID8gX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGRfdmFsdWUsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmludmFsaWQgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLm9wdHMucGxhY2Vob2xkZXIsXG4gICAgICAgICAgcGF0dGVybjogX3ZtLm9wdHMucGF0dGVybixcbiAgICAgICAgICBhdXRvZm9jdXM6IF92bS5vcHRzLmF1dG9mb2N1cyxcbiAgICAgICAgICBhdXRvY29tcGxldGU6IF92bS5vcHRzLmF1dG9jb21wbGV0ZSxcbiAgICAgICAgICBzdGVwOiBfdm0ub3B0cy5zdGVwLFxuICAgICAgICAgIG1heDogX3ZtLm9wdHMubWF4LFxuICAgICAgICAgIG1pbjogX3ZtLm9wdHMubWluLFxuICAgICAgICAgIHJlYWRvbmx5OiBfdm0ub3B0cy5yZWFkb25seSxcbiAgICAgICAgICBkaXI6IF92bS5vcHRzLmRpcixcbiAgICAgICAgICByZXF1aXJlZDogX3ZtLnZhbGlkYXRpb24uaW5kZXhPZihcInJlcXVpcmVkXCIpID4gLTEsXG4gICAgICAgICAgaWQ6IF92bS5pZCxcbiAgICAgICAgICBuYW1lOiBfdm0ubmFtZSxcbiAgICAgICAgICB0eXBlOiBcInJhZGlvXCJcbiAgICAgICAgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgY2hlY2tlZDogX3ZtLl9xKF92bS5maWVsZF92YWx1ZSwgbnVsbCkgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLmZpZWxkX3ZhbHVlID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA6IF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkX3ZhbHVlLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZF92YWx1ZVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgY2xhc3M6IHsgXCJpcy1pbnZhbGlkXCI6IF92bS5pbnZhbGlkIH0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5vcHRzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgIHBhdHRlcm46IF92bS5vcHRzLnBhdHRlcm4sXG4gICAgICAgICAgYXV0b2ZvY3VzOiBfdm0ub3B0cy5hdXRvZm9jdXMsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiBfdm0ub3B0cy5hdXRvY29tcGxldGUsXG4gICAgICAgICAgc3RlcDogX3ZtLm9wdHMuc3RlcCxcbiAgICAgICAgICBtYXg6IF92bS5vcHRzLm1heCxcbiAgICAgICAgICBtaW46IF92bS5vcHRzLm1pbixcbiAgICAgICAgICByZWFkb25seTogX3ZtLm9wdHMucmVhZG9ubHksXG4gICAgICAgICAgZGlyOiBfdm0ub3B0cy5kaXIsXG4gICAgICAgICAgcmVxdWlyZWQ6IF92bS52YWxpZGF0aW9uLmluZGV4T2YoXCJyZXF1aXJlZFwiKSA+IC0xLFxuICAgICAgICAgIGlkOiBfdm0uaWQsXG4gICAgICAgICAgbmFtZTogX3ZtLm5hbWUsXG4gICAgICAgICAgdHlwZTogX3ZtLm9wdHMudHlwZVxuICAgICAgICB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpZWxkX3ZhbHVlIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3ZtLmZpZWxkX3ZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2VsZWN0XCIsXG4gICAge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGRfdmFsdWUsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZF92YWx1ZVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uaW52YWxpZCB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgbXVsdGlwbGU6IF92bS5vcHRzLm11bHRpcGxlLFxuICAgICAgICByZWFkb25seTogX3ZtLm9wdHMucmVhZG9ubHksXG4gICAgICAgIHJlcXVpcmVkOiBfdm0udmFsaWRhdGlvbi5pbmRleE9mKFwicmVxdWlyZWRcIikgPiAtMSxcbiAgICAgICAgaWQ6IF92bS5pZCxcbiAgICAgICAgbmFtZTogX3ZtLm5hbWVcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBfdm0uZmllbGRfdmFsdWUgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBfdm0uX2woX3ZtLm9wdHMub3B0aW9ucywgZnVuY3Rpb24ob3B0aW9uLCB2YWwpIHtcbiAgICAgIHJldHVybiBfYyhcIm9wdGlvblwiLCB7IGRvbVByb3BzOiB7IHZhbHVlOiB2YWwgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3Mob3B0aW9uKSArIFwiXFxuICAgIFwiKVxuICAgICAgXSlcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidGV4dGFyZWFcIiwge1xuICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgdmFsdWU6IF92bS5maWVsZF92YWx1ZSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZF92YWx1ZVwiXG4gICAgICB9XG4gICAgXSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmludmFsaWQgfSxcbiAgICBhdHRyczoge1xuICAgICAgcm93czogX3ZtLm9wdHMucm93cyxcbiAgICAgIHBsYWNlaG9sZGVyOiBfdm0ub3B0cy5wbGFjZWhvbGRlcixcbiAgICAgIGF1dG9mb2N1czogX3ZtLm9wdHMuYXV0b2ZvY3VzLFxuICAgICAgcmVhZG9ubHk6IF92bS5vcHRzLnJlYWRvbmx5LFxuICAgICAgZGlyOiBfdm0ub3B0cy5kaXIsXG4gICAgICByZXF1aXJlZDogX3ZtLnZhbGlkYXRpb24uaW5kZXhPZihcInJlcXVpcmVkXCIpID4gLTEsXG4gICAgICBpZDogX3ZtLmlkLFxuICAgICAgbmFtZTogX3ZtLm5hbWVcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmllbGRfdmFsdWUgfSxcbiAgICBvbjoge1xuICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBfdm0uZmllbGRfdmFsdWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5maWVsZF92YWx1ZSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGRfdmFsdWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgaWQ6IF92bS5pZCwgbmFtZTogX3ZtLm5hbWUgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZF92YWx1ZSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF92bS5maWVsZF92YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZWRpdG9yXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgaW5pdDogX3ZtLmNvbmZpZyB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGRfdmFsdWUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLmZpZWxkX3ZhbHVlID0gJCR2XG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlXCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkcm9wZG93blwiLCBjbGFzczogeyBzaG93OiBfdm0ub3BlbmVkIH0gfSwgW1xuICAgIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tdG9nZ2xlXCIsXG4gICAgICAgIGNsYXNzOiBfdm0uYnRuQ2xhc3MsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICBcImFyaWEtaGFzcG9wdXBcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IF92bS5vcGVuZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5vcGVuZWQgPSAhX3ZtLm9wZW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtfdm0uX3QoXCJidG5cIildLFxuICAgICAgMlxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLW1lbnVcIiwgY2xhc3M6IHsgc2hvdzogX3ZtLm9wZW5lZCB9IH0sXG4gICAgICBbX3ZtLl90KFwiZHJvcGRvd25cIildLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZmlsZS1tYW5hZ2VyXCIsIHsgcmVmOiBcImZtXCIsIGF0dHJzOiB7IHNldHRpbmdzOiBfdm0uc2V0dGluZ3MgfSB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDQgbWItMFwiLFxuICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLiR0KFwiUmVkaXJlY3Rpb25zXCIpKSB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLmV4cG9ydFVybCwgdGFyZ2V0OiBcIl9ibGFua1wiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1kb3dubG9hZFwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJFeHBvcnRcIikpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaW1wb3J0UmVkaXJlY3Rpb25zIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS11cGxvYWRcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiSW1wb3J0XCIpKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbChfdm0ucmVkaXJlY3Rpb25zLCBmdW5jdGlvbihyLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsga2V5OiByLmlkLCBzdGF0aWNDbGFzczogXCJyZWRpcmVjdGlvbi1pdGVtIHB4LTEgcHQtMyBtYi00XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwici1pZFwiLFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHIuaWQpIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1maWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yIGNvbC1tZC01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJmcm9tX1wiICsgci5pZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIkZyb20gKG9sZCB1cmwpXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByLmZyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInIuZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIGlkOiBcImZyb21fXCIgKyByLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiByLmZyb20gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChyLCBcImZyb21cIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcHgtMiBjb2wtbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwidG9fXCIgKyByLmlkIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiVG8gKG5ldyB1cmwpXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByLnRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyLnRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgaWQ6IFwidG9fXCIgKyByLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiByLnRvIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQociwgXCJ0b1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yIGZsZXgtZmlsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwicGVybWFuZW50X1wiICsgci5pZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIlR5cGVcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHIucGVybWFuZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInIucGVybWFuZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInBlcm1hbmVudF9cIiArIHIuaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcm1hbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGRvbVByb3BzOiB7IHZhbHVlOiBmYWxzZSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIzMDIgKFwiICsgX3ZtLl9zKF92bS4kdChcIlRlbXBvcmFyeVwiKSkgKyBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBkb21Qcm9wczogeyB2YWx1ZTogdHJ1ZSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIzMDEgKFwiICsgX3ZtLl9zKF92bS4kdChcIlBlcm1hbmVudFwiKSkgKyBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcHgtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogci5yZWdleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInIucmVnZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiwgaWQ6IFwicmVnZXhfXCIgKyByLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KHIucmVnZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koci5yZWdleCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogci5yZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IHIucmVnZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChyLCBcInJlZ2V4XCIsICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZ2V4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChyLCBcInJlZ2V4XCIsICQkYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwicmVnZXhfXCIgKyByLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiUmVndWxhciBFeHByZXNzaW9uXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByLmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyLmVuYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZW5hYmxlZF9cIiArIHIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KHIuZW5hYmxlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShyLmVuYWJsZWQsIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHIuZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IHIuZW5hYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQociwgXCJlbmFibGVkXCIsICQkYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiZW5hYmxlZF9cIiArIHIuaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJFbmFibGVkXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiByLnJlZ2V4LCB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hcHBlbmRRdWVyeShyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiQ2F0Y2ggcXVlcnlcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5odHRwQW5kUyhyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiSFRUUC9IVFRQU1wiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1maWxsXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcHgtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZShyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiU2F2ZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZShyLmlkLCBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiRGVsZXRlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImg0XCIsXG4gICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS4kdChcIk5ldyBSZWRpcmVjdGlvblwiKSkgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyZWRpcmVjdGlvbi1pdGVtIHB4LTEgcHQtMyBtYi00XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInItaWRcIiB9LCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgtZmlsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHB4LTIgY29sLW1kLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmV3X2Zyb21cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIkZyb20gKG9sZCB1cmwpXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdSZWRpcmVjdGlvbi5mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5ld1JlZGlyZWN0aW9uLmZyb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIGlkOiBcIm5ld19mcm9tXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm5ld1JlZGlyZWN0aW9uLmZyb20gfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmV3UmVkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHB4LTIgY29sLW1kLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmV3X3RvXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJUbyAobmV3IHVybClcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld1JlZGlyZWN0aW9uLnRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5ld1JlZGlyZWN0aW9uLnRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBpZDogXCJuZXdfdG9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmV3UmVkaXJlY3Rpb24udG8gfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmV3UmVkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yIGZsZXgtZmlsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuZXdfcGVybWFuZW50XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJUeXBlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmV3UmVkaXJlY3Rpb24ucGVybWFuZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmV3UmVkaXJlY3Rpb24ucGVybWFuZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibmV3X3Blcm1hbmVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uZXdSZWRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVybWFuZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgZG9tUHJvcHM6IHsgdmFsdWU6IGZhbHNlIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIzMDIgKFwiICsgX3ZtLl9zKF92bS4kdChcIlRlbXBvcmFyeVwiKSkgKyBcIilcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgZG9tUHJvcHM6IHsgdmFsdWU6IHRydWUgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjMwMSAoXCIgKyBfdm0uX3MoX3ZtLiR0KFwiUGVybWFuZW50XCIpKSArIFwiKVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHB4LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld1JlZGlyZWN0aW9uLnJlZ2V4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdSZWRpcmVjdGlvbi5yZWdleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBcIm5ld19yZWdleFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ubmV3UmVkaXJlY3Rpb24ucmVnZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0ubmV3UmVkaXJlY3Rpb24ucmVnZXgsIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLm5ld1JlZGlyZWN0aW9uLnJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ubmV3UmVkaXJlY3Rpb24ucmVnZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uZXdSZWRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWdleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5ld1JlZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZ2V4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5uZXdSZWRpcmVjdGlvbiwgXCJyZWdleFwiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwibmV3X3JlZ2V4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiUmVndWxhciBFeHByZXNzaW9uXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdSZWRpcmVjdGlvbi5lbmFibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdSZWRpcmVjdGlvbi5lbmFibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiwgaWQ6IFwibmV3X2VuYWJsZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLm5ld1JlZGlyZWN0aW9uLmVuYWJsZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0ubmV3UmVkaXJlY3Rpb24uZW5hYmxlZCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ubmV3UmVkaXJlY3Rpb24uZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLm5ld1JlZGlyZWN0aW9uLmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uZXdSZWRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbmFibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmV3UmVkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubmV3UmVkaXJlY3Rpb24sIFwiZW5hYmxlZFwiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwibmV3X2VuYWJsZWRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJFbmFibGVkXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLm5ld1JlZGlyZWN0aW9uLnJlZ2V4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYXBwZW5kUXVlcnkoX3ZtLm5ld1JlZGlyZWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJDYXRjaCBxdWVyeVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaHR0cEFuZFMoX3ZtLm5ld1JlZGlyZWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJIVFRQL0hUVFBTXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgtZmlsbFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZShfdm0ubmV3UmVkaXJlY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIlNhdmVcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgcmVmOiBcImltcG9ydEZvcm1cIixcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1ub25lXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgYWN0aW9uOiBfdm0uaW1wb3J0VXJsLFxuICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJfdG9rZW5cIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uJGNzcmZfdG9rZW4gfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgcmVmOiBcImltcG9ydEZvcm1JbnB1dFwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtbm9uZVwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcImZpbGVcIiwgYWNjZXB0OiBcIi4qY3N2XCIgfVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYXNpZGVcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInNpZGUtYmFyXCIsIGNsYXNzOiB7IG9wZW5lZDogX3ZtLm9wZW5lZCB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaWRlLWJhci1jb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXYgZmxleC1jb2x1bW5cIiB9LFxuICAgICAgICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICBpdGVtLmNoaWxkcmVuICYmIF92bS5hZ25vc3RpY0xlbmd0aChpdGVtLmNoaWxkcmVuKVxuICAgICAgICAgICAgICAgICAgICA/IFwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gJiYgX3ZtLmFnbm9zdGljTGVuZ3RoKGl0ZW0uY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZSBkLWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IGl0ZW0uaHJlZiB8fCBcIiNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBpdGVtLnRhcmdldCB8fCBcIl9zZWxmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogaXRlbS5vcGVuZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWhhc3BvcHVwXCI6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3BlbmVkID0gIWl0ZW0ub3BlbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogaXRlbS5pY29uIHx8IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGl0ZW0udGl0bGUpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rIGQtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogaXRlbS5ocmVmIHx8IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGl0ZW0udGFyZ2V0IHx8IFwiX3NlbGZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhc1wiLCBjbGFzczogaXRlbS5pY29uIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhpdGVtLnRpdGxlKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gJiYgX3ZtLmFnbm9zdGljTGVuZ3RoKGl0ZW0uY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjaGlsZC1tZW51XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbS5jaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQsIGNpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBjaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBjaGlsZC5ocmVmIHx8IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBpdGVtLnRhcmdldCB8fCBcIl9zZWxmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogY2hpbGQudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGNoaWxkLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMFxuICAgICAgICApXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJoZWFkZXJcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgXCJ0b3AtYmFyIHN0aWNreS10b3AgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzdGFydCBweC0yXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZHJvcGRvd25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJidG4tY2xhc3NcIjogXCJidG4gdGV4dC13aGl0ZVwiIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJidG5cIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIkhpXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIixcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c2VyLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJkcm9wZG93blwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24taXRlbVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFjdGlvbiAxXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWRpdmlkZXJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRpMThuLmxvY2FsZSA9PT0gXCJlblwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5sb2NhbGVVcmwucmVwbGFjZShcIi1sb2NhbGUtXCIsIFwiaGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLXoteR16jXmdeqXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLiRpMThuLmxvY2FsZSA9PT0gXCJoZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5sb2NhbGVVcmwucmVwbGFjZShcIi1sb2NhbGUtXCIsIFwiZW5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFbmdsaXNoXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tZGl2aWRlclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJvb3QubG9nb3V0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiTG9nb3V0XCIpKSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtfdm0uX3QoXCJjZW50ZXJcIildLCAyKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVuZCBweC0yXCIgfSwgW192bS5fdChcImVuZFwiKV0sIDIpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidkRhdGFUYWJsZVwiLCBjbGFzczogeyBcInZEYXRhVGFibGUtbG9hZGluZ1wiOiBfdm0ubG9hZGluZyB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwidkRhdGFUYWJsZS10b29sYmFyIGQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24tY29udGVudC1jZW50ZXJcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2RGF0YVRhYmxlLXNlYXJjaFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlNlYXJjaDpcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJlcXVlc3Quc2VhcmNoLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJlcXVlc3Quc2VhcmNoLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic2VhcmNoXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnJlcXVlc3Quc2VhcmNoLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnJlcXVlc3Quc2VhcmNoLCBcInZhbHVlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiUmVnZXg6XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZXF1ZXN0LnNlYXJjaC5yZWdleCxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZXF1ZXN0LnNlYXJjaC5yZWdleFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ucmVxdWVzdC5zZWFyY2gucmVnZXgpXG4gICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5yZXF1ZXN0LnNlYXJjaC5yZWdleCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5yZXF1ZXN0LnNlYXJjaC5yZWdleFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ucmVxdWVzdC5zZWFyY2gucmVnZXgsXG4gICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXF1ZXN0LnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZ2V4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVxdWVzdC5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWdleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnJlcXVlc3Quc2VhcmNoLCBcInJlZ2V4XCIsICQkYylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ubGVuZ3Rocy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidkRhdGFUYWJsZS1wYWdlTGVuZ3RoXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFNob3dcXG4gICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVxdWVzdC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVxdWVzdC5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVuZ3RoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5sZW5ndGhzLCBmdW5jdGlvbihsZW5ndGgsIGxpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBsaSwgZG9tUHJvcHM6IHsgdmFsdWU6IGxlbmd0aCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhsZW5ndGgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidGFibGVcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiBBcnJheS5pc0FycmF5KF92bS50YWJsZUNsYXNzKVxuICAgICAgICAgICAgPyBfdm0udGFibGVDbGFzcy5qb2luKFwiIFwiKVxuICAgICAgICAgICAgOiBfdm0udGFibGVDbGFzc1xuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRoZWFkXCIsXG4gICAgICAgICAgICB7IG9uOiB7IGNsaWNrOiBfdm0ub3JkZXIgfSB9LFxuICAgICAgICAgICAgW192bS5fdChcInRoZWFkXCIsIG51bGwsIHsgdDogdGhpcyB9KV0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBsaXN0OiBfdm0ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgICB0YWc6IFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICBcImdob3N0LWNsYXNzXCI6IFwiZ2hvc3RcIixcbiAgICAgICAgICAgICAgICBoYW5kbGU6IFwiLmRuZC1oYW5kbGVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0ucmVvcmRlciB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5yZXNwb25zZS5kYXRhLCBmdW5jdGlvbihyb3csIHJpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb2x1bW5zLCBmdW5jdGlvbihjb2x1bW4sIGNpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRfXCIgKyBjaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kZ2V0KHJvdywgY29sdW1uLm5hbWUpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLiRnZXQocm93LCBjb2x1bW4ubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogcm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcInZEYXRhVGFibGUtZm9vdGVyIGQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24tY29udGVudC1jZW50ZXJcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2RGF0YVRhYmxlLWNvdW50XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJTaG93aW5nXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ucmVxdWVzdC5zdGFydCArIDEpIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwidG9cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnJlcXVlc3Quc3RhcnQgKyBfdm0ucmVzcG9uc2UuZGF0YS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIm9mXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ucmVzcG9uc2UucmVjb3Jkc0ZpbHRlcmVkKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcImVudHJpZXNcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnJlc3BvbnNlLnJlY29yZHNGaWx0ZXJlZCAhPT0gX3ZtLnJlc3BvbnNlLnJlY29yZHNUb3RhbFxuICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgKFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkZpbHRlcmVkIGZyb21cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5yZXNwb25zZS5yZWNvcmRzVG90YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcInRvdGFsIGVudHJpZXNcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIpXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidkRhdGFUYWJsZS1wYWdpbmF0aW9uXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2RGF0YVRhYmxlLXBhZ2luYXRpb24tYmFjayBwYWdlLWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdlLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0ucmVxdWVzdC5zdGFydCA9PT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiwqsgUHJldmlvdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJldigkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI8XCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5wYWdlcyA8IDhcbiAgICAgICAgICAgICAgICAgID8gX3ZtLl9sKF92bS5wYWdlcywgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdlLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZEYXRhVGFibGUtcGFnaW5hdGlvbi1jdXJyZW50XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID09PSBfdm0uY3VycmVudFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvVG9QYWdlKG4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKG4pKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLnBhZ2VzID4gNyAmJiBfdm0uY3VycmVudFBhZ2UgPCA1XG4gICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woNSwgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidkRhdGFUYWJsZS1wYWdpbmF0aW9uLWN1cnJlbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9PT0gX3ZtLmN1cnJlbnRQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Ub1BhZ2UobilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhuKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwidkRhdGFUYWJsZS1kaXNhYmxlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZEYXRhVGFibGUtZGlzYWJsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIi4uLlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb1RvUGFnZShfdm0ucGFnZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ucGFnZXMpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICA6IF92bS5wYWdlcyA+IDcgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRQYWdlID4gNCAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudFBhZ2UgPCBfdm0ucGFnZXMgLSA0XG4gICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Ub1BhZ2UoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIxXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInZEYXRhVGFibGUtZGlzYWJsZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2RGF0YVRhYmxlLWRpc2FibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIuLi5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Ub1BhZ2UoX3ZtLmN1cnJlbnRQYWdlIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5jdXJyZW50UGFnZSAtIDEpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2RGF0YVRhYmxlLXBhZ2luYXRpb24tY3VycmVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb1RvUGFnZShfdm0uY3VycmVudFBhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5jdXJyZW50UGFnZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb1RvUGFnZShfdm0uY3VycmVudFBhZ2UgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmN1cnJlbnRQYWdlICsgMSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInZEYXRhVGFibGUtZGlzYWJsZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2RGF0YVRhYmxlLWRpc2FibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIuLi5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Ub1BhZ2UoX3ZtLnBhZ2VzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnBhZ2VzKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgOiBfdm0uY3VycmVudFBhZ2UgPiBfdm0ucGFnZXMgLSA1XG4gICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Ub1BhZ2UoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIxXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInZEYXRhVGFibGUtZGlzYWJsZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2RGF0YVRhYmxlLWRpc2FibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIuLi5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woNSwgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidkRhdGFUYWJsZS1wYWdpbmF0aW9uLWN1cnJlbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2VzICsgKG4gLSA1KSA9PT0gX3ZtLmN1cnJlbnRQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nb1RvUGFnZShfdm0ucGFnZXMgKyAobiAtIDUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5wYWdlcyArIChuIC0gNSkpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInZEYXRhVGFibGUtcGFnaW5hdGlvbi1uZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVxdWVzdC5zdGFydCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5wYWdlcyAtIDEpICogX3ZtLnJlcXVlc3QubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiTmV4dCDCu1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5leHQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIj5cIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgJ3N0YXJ0c1dpdGgnLCB7XG4gICAgICAgIHZhbHVlKHNlYXJjaCwgcmF3UG9zKSB7XG4gICAgICAgICAgICBsZXQgcG9zID0gcmF3UG9zID4gMCA/IHJhd1BvcyB8IDAgOiAwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3Vic3RyaW5nKHBvcywgcG9zICsgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG53aW5kb3cuU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJyk7XG5cbnJlcXVpcmUoJy4vaW5jL2F4aW9zJyk7XG5cbnJlcXVpcmUoJy4vaW5jL3RpbnltY2UnKTtcblxucmVxdWlyZSgnLi92dWUvdnVlJyk7XG4iLCJ3aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG4iLCJyZXF1aXJlKCd0aW55bWNlJyk7XG5yZXF1aXJlKCd0aW55bWNlL3RoZW1lcy9zaWx2ZXInKTtcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9saW5rJyk7XG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvdGFibGUnKTtcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9tZWRpYScpO1xucmVxdWlyZSgndGlueW1jZS9wbHVnaW5zL2xpc3RzJyk7XG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvaW1hZ2UnKTtcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9jb2RlJyk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vQnJlYWQvQnJlYWRFZGl0LnZ1ZVwiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvQnJlYWRFZGl0LnZ1ZVwiLFxuXHRcIi4vQnJlYWQvRmllbGRzL0Jhc2VGaWVsZC52dWVcIjogXCIuL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9CYXNlRmllbGQudnVlXCIsXG5cdFwiLi9CcmVhZC9GaWVsZHMvRGF0ZUZpZWxkLnZ1ZVwiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0RhdGVGaWVsZC52dWVcIixcblx0XCIuL0JyZWFkL0ZpZWxkcy9GaWxlRmllbGQudnVlXCI6IFwiLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvRmlsZUZpZWxkLnZ1ZVwiLFxuXHRcIi4vQnJlYWQvRmllbGRzL0dlb2NvZGluZ0ZpZWxkLnZ1ZVwiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0dlb2NvZGluZ0ZpZWxkLnZ1ZVwiLFxuXHRcIi4vQnJlYWQvRmllbGRzL0dyb3VwZWRGaWVsZC52dWVcIjogXCIuL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9Hcm91cGVkRmllbGQudnVlXCIsXG5cdFwiLi9CcmVhZC9GaWVsZHMvSW1hZ2VGaWVsZC52dWVcIjogXCIuL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9JbWFnZUZpZWxkLnZ1ZVwiLFxuXHRcIi4vQnJlYWQvRmllbGRzL0lucHV0RmllbGQudnVlXCI6IFwiLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvSW5wdXRGaWVsZC52dWVcIixcblx0XCIuL0JyZWFkL0ZpZWxkcy9TZWxlY3RGaWVsZC52dWVcIjogXCIuL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9TZWxlY3RGaWVsZC52dWVcIixcblx0XCIuL0JyZWFkL0ZpZWxkcy9UZXh0YXJlYUZpZWxkLnZ1ZVwiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL1RleHRhcmVhRmllbGQudnVlXCIsXG5cdFwiLi9CcmVhZC9GaWVsZHMvV3lzaXd5Z0ZpZWxkLnZ1ZVwiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL1d5c2l3eWdGaWVsZC52dWVcIixcblx0XCIuL0Ryb3Bkb3duLnZ1ZVwiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvRHJvcGRvd24udnVlXCIsXG5cdFwiLi9GaWxlTWFuYWdlcldyYXBwZXIudnVlXCI6IFwiLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9GaWxlTWFuYWdlcldyYXBwZXIudnVlXCIsXG5cdFwiLi9SZWRpcmVjdGlvbnMudnVlXCI6IFwiLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9SZWRpcmVjdGlvbnMudnVlXCIsXG5cdFwiLi9TaWRlQmFyLnZ1ZVwiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvU2lkZUJhci52dWVcIixcblx0XCIuL1RvcEJhci52dWVcIjogXCIuL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1RvcEJhci52dWVcIixcblx0XCIuL1ZEYXRhVGFibGUudnVlXCI6IFwiLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9WRGF0YVRhYmxlLnZ1ZVwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzIHN5bmMgcmVjdXJzaXZlIFxcXFwudnVlJC9cIjsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0JyZWFkRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmFiMDRmMDQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQnJlYWRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQnJlYWRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9CcmVhZEVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmFiMDRmMDQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmYWIwNGYwNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2ZhYjA0ZjA0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ZhYjA0ZjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ZhYjA0ZjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CcmVhZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZhYjA0ZjA0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2ZhYjA0ZjA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9CcmVhZEVkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CcmVhZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JyZWFkRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnJlYWRFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZhYjA0ZjA0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CcmVhZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZhYjA0ZjA0JnNjb3BlZD10cnVlJlwiIiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Jhc2VGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Jhc2VGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjM4NjUyY2YyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW55XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcSmFzbWluZUNNU1xcXFxwYWNrYWdlc1xcXFxqYXNtaW5lY21zXFxcXGphc21pbmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzg2NTJjZjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzg2NTJjZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzg2NTJjZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0Jhc2VGaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2VGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZUZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGF0ZUZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NWI4Mjk0YSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EYXRlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EYXRlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1NWI4Mjk0YVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU1YjgyOTRhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU1YjgyOTRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU1YjgyOTRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EYXRlRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1YjgyOTRhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU1YjgyOTRhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvRGF0ZUZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGF0ZUZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXRlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RhdGVGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTViODI5NGEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGVGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRiNDY5ODgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmlsZUZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlsZUZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9GaWxlRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmRiNDY5ODgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZkYjQ2OTg4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW55XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcSmFzbWluZUNNU1xcXFxwYWNrYWdlc1xcXFxqYXNtaW5lY21zXFxcXGphc21pbmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmRiNDY5ODgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmRiNDY5ODgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmRiNDY5ODgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpbGVGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRiNDY5ODgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmRiNDY5ODgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9GaWxlRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmRiNDY5ODgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZUZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZGI0Njk4OCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR2VvY29kaW5nRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTczOTBiYmQxJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dlb2NvZGluZ0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR2VvY29kaW5nRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0dlb2NvZGluZ0ZpZWxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTczOTBiYmQxJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzM5MGJiZDFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxhbnlcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxKYXNtaW5lQ01TXFxcXHBhY2thZ2VzXFxcXGphc21pbmVjbXNcXFxcamFzbWluZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3MzkwYmJkMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3MzkwYmJkMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3MzkwYmJkMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR2VvY29kaW5nRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTczOTBiYmQxJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzczOTBiYmQxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR2VvY29kaW5nRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HZW9jb2RpbmdGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2VvY29kaW5nRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dlb2NvZGluZ0ZpZWxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTczOTBiYmQxJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HZW9jb2RpbmdGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzM5MGJiZDEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyb3VwZWRGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWRkNDc3NjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JvdXBlZEZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JvdXBlZEZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Hcm91cGVkRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWRkNDc3NjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImFkZDQ3NzY0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW55XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcSmFzbWluZUNNU1xcXFxwYWNrYWdlc1xcXFxqYXNtaW5lY21zXFxcXGphc21pbmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYWRkNDc3NjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYWRkNDc3NjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYWRkNDc3NjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyb3VwZWRGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWRkNDc3NjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYWRkNDc3NjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9Hcm91cGVkRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Hcm91cGVkRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyb3VwZWRGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Hcm91cGVkRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWRkNDc3NjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JvdXBlZEZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZGQ0Nzc2NCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW1hZ2VGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWRhMWZkNzEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW1hZ2VGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWRhMWZkNzEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjFkYTFmZDcxXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW55XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcSmFzbWluZUNNU1xcXFxwYWNrYWdlc1xcXFxqYXNtaW5lY21zXFxcXGphc21pbmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWRhMWZkNzEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWRhMWZkNzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWRhMWZkNzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFkYTFmZDcxJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFkYTFmZDcxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvSW1hZ2VGaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW1hZ2VGaWVsZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZGExZmQ3MSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbWFnZUZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZGExZmQ3MSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5wdXRGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTc0NWM4M2Mmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5wdXRGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0lucHV0RmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxNzQ1YzgzY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE3NDVjODNjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE3NDVjODNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE3NDVjODNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbnB1dEZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzQ1YzgzYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNzQ1YzgzYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0lucHV0RmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dEZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dEZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dEZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzQ1YzgzYyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VsZWN0RmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzNzUzYjg4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NlbGVjdEZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2VsZWN0RmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyMzc1M2I4OFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIzNzUzYjg4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIzNzUzYjg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIzNzUzYjg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZWxlY3RGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjM3NTNiODgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjM3NTNiODgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9TZWxlY3RGaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlbGVjdEZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3RGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VsZWN0RmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzNzUzYjg4JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UZXh0YXJlYUZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDBjNGMzZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UZXh0YXJlYUZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGV4dGFyZWFGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjIwMGM0YzNlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW55XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcSmFzbWluZUNNU1xcXFxwYWNrYWdlc1xcXFxqYXNtaW5lY21zXFxcXGphc21pbmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjAwYzRjM2UnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjAwYzRjM2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjAwYzRjM2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RleHRhcmVhRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwMGM0YzNlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzIwMGM0YzNlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvVGV4dGFyZWFGaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RleHRhcmVhRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RleHRhcmVhRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RleHRhcmVhRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwMGM0YzNlJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9XeXNpd3lnRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1MWMzMjdmJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1d5c2l3eWdGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1d5c2l3eWdGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQ1MWMzMjdmXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW55XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcSmFzbWluZUNNU1xcXFxwYWNrYWdlc1xcXFxqYXNtaW5lY21zXFxcXGphc21pbmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDUxYzMyN2YnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDUxYzMyN2YnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDUxYzMyN2YnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1d5c2l3eWdGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDUxYzMyN2Ymc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDUxYzMyN2YnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9XeXNpd3lnRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9XeXNpd3lnRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1d5c2l3eWdGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vV3lzaXd5Z0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NTFjMzI3ZiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5MmI4NWNlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Ryb3Bkb3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0OTJiODVjZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ5MmI4NWNlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ5MmI4NWNlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ5MmI4NWNlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ecm9wZG93bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDkyYjg1Y2Umc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDkyYjg1Y2UnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0Ryb3Bkb3duLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3Bkb3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ecm9wZG93bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDkyYjg1Y2Umc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGVNYW5hZ2VyV3JhcHBlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjI3MDIwODImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmlsZU1hbmFnZXJXcmFwcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlsZU1hbmFnZXJXcmFwcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYjI3MDIwODJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxhbnlcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxKYXNtaW5lQ01TXFxcXHBhY2thZ2VzXFxcXGphc21pbmVjbXNcXFxcamFzbWluZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiMjcwMjA4MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiMjcwMjA4MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiMjcwMjA4MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmlsZU1hbmFnZXJXcmFwcGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMjcwMjA4MiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiMjcwMjA4MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvRmlsZU1hbmFnZXJXcmFwcGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZU1hbmFnZXJXcmFwcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlTWFuYWdlcldyYXBwZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVNYW5hZ2VyV3JhcHBlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjI3MDIwODImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlZGlyZWN0aW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTcxYTZmODQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVkaXJlY3Rpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVkaXJlY3Rpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9SZWRpcmVjdGlvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTcxYTZmODQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxNzFhNmY4NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE3MWE2Zjg0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE3MWE2Zjg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE3MWE2Zjg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZWRpcmVjdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3MWE2Zjg0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE3MWE2Zjg0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9SZWRpcmVjdGlvbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWRpcmVjdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZGlyZWN0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVkaXJlY3Rpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3MWE2Zjg0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWRpcmVjdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3MWE2Zjg0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TaWRlQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMzM5ODBlMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMzM5ODBlMiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjMzMzk4MGUyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGN1c3RvbSBibG9ja3MgKi9cbmltcG9ydCBibG9jazAgZnJvbSBcIi4vU2lkZUJhci52dWU/dnVlJnR5cGU9Y3VzdG9tJmluZGV4PTAmYmxvY2tUeXBlPWkxOG5cIlxuaWYgKHR5cGVvZiBibG9jazAgPT09ICdmdW5jdGlvbicpIGJsb2NrMChjb21wb25lbnQpXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW55XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcSmFzbWluZUNNU1xcXFxwYWNrYWdlc1xcXFxqYXNtaW5lY21zXFxcXGphc21pbmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzMzOTgwZTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzMzOTgwZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzMzOTgwZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzMzk4MGUyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMzMzk4MGUyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9TaWRlQmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrYXp1cG9uL3Z1ZS1pMThuLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaWRlQmFyLnZ1ZT92dWUmdHlwZT1jdXN0b20maW5kZXg9MCZibG9ja1R5cGU9aTE4blwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2F6dXBvbi92dWUtaTE4bi1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9Y3VzdG9tJmluZGV4PTAmYmxvY2tUeXBlPWkxOG5cIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMzM5ODBlMiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzMzOTgwZTImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RvcEJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmU5OWEyMGEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogY3VzdG9tIGJsb2NrcyAqL1xuaW1wb3J0IGJsb2NrMCBmcm9tIFwiLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPWN1c3RvbSZpbmRleD0wJmJsb2NrVHlwZT1pMThuXCJcbmlmICh0eXBlb2YgYmxvY2swID09PSAnZnVuY3Rpb24nKSBibG9jazAoY29tcG9uZW50KVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2JlOTlhMjBhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JlOTlhMjBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JlOTlhMjBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJlOTlhMjBhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JlOTlhMjBhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9Ub3BCYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGthenVwb24vdnVlLWkxOG4tbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9Y3VzdG9tJmluZGV4PTAmYmxvY2tUeXBlPWkxOG5cIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGthenVwb24vdnVlLWkxOG4tbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9Y3VzdG9tJmluZGV4PTAmYmxvY2tUeXBlPWkxOG5cIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZTk5YTIwYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVkRhdGFUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWFjZTUwNmImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVkRhdGFUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ZEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1ZEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWFjZTUwNmImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxYWNlNTA2YlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFhY2U1MDZiJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFhY2U1MDZiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFhY2U1MDZiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9WRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYWNlNTA2YiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYWNlNTA2YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvVkRhdGFUYWJsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWFjZTUwNmImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhY2U1MDZiJnNjb3BlZD10cnVlJlwiIiwidmFyIG1hcCA9IHtcblx0XCIuL2RlbGV0ZS5qc1wiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2RpcmVjdGl2ZXMvZGVsZXRlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2RpcmVjdGl2ZXMgc3luYyByZWN1cnNpdmUgXFxcXC5qcyQvXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluc2VydGVkKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB2bm9kZS5jb250ZXh0LiR0KCdzd2FsLkRlbGV0ZScpLFxuICAgICAgICAgICAgICAgIC8vdGV4dDogYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCIke2VsLmRhdGFzZXQudGl0bGV9XCI/YCxcbiAgICAgICAgICAgICAgICB0ZXh0OiB2bm9kZS5jb250ZXh0LiR0KCdzd2FsLnN1cmUnLCB7dGl0bGU6IGVsLmRhdGFzZXQudGl0bGV9KSxcbiAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB2bm9kZS5jb250ZXh0LiR0KCdzd2FsLkNhbmNlbCcpLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB2bm9kZS5jb250ZXh0LiR0KCdzd2FsLlllcycpLFxuICAgICAgICAgICAgfSkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoZWwuaHJlZikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgc3dhbDoge1xuICAgICAgICBcIkNhbmNlbFwiOiBcIkNhbmNlbFwiLFxuICAgICAgICBcIlllc1wiOiBcIlllc1wiLFxuICAgICAgICBcIkRlbGV0ZVwiOiBcIkRlbGV0ZVwiLFxuICAgICAgICBcInN1cmVcIjogYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXFxcInt0aXRsZX1cXFwiYCxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHN3YWw6IHtcbiAgICAgICAgXCJDYW5jZWxcIjogXCLXkdeZ15jXldecXCIsXG4gICAgICAgIFwiWWVzXCI6IFwi15DXmdep15XXqFwiLFxuICAgICAgICBcIkRlbGV0ZVwiOiBcItee15fXmden15RcIixcbiAgICAgICAgXCJzdXJlXCI6IGDXlNeQ150g15DXqi/XlCDXkdeY15XXly/XlCDXm9eZINeR16jXpteV16DXmiDXnNee15fXldenINeQ16ogYCArIGB7dGl0bGV9YCxcbiAgICB9LFxufVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5pbXBvcnQgVnVlSTE4biBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgVkRhdGFUYWJsZSBmcm9tIFwiLi9jb21wb25lbnRzL1ZEYXRhVGFibGVcIjtcbmltcG9ydCBFZGl0b3IgZnJvbSAnQHRpbnltY2UvdGlueW1jZS12dWUnO1xuaW1wb3J0IENyb3BwYSBmcm9tICd2dWUtY3JvcHBhJztcbmltcG9ydCBkcmFnZ2FibGUgZnJvbSAndnVlZHJhZ2dhYmxlJztcbmltcG9ydCBGaWxlTWFuYWdlciBmcm9tICdsYXJhdmVsLWZpbGUtbWFuYWdlcic7XG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICd2dWVqcy1kYXRlcGlja2VyJztcblxuVnVlLmNvbmZpZy5kZXZ0b29scyA9IHRydWU7XG5cblZ1ZS51c2UoVnVleCk7XG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHt9KTtcblZ1ZS51c2UoRmlsZU1hbmFnZXIsIHtzdG9yZX0pO1xuXG5WdWUudXNlKFZ1ZUkxOG4pO1xuXG5WdWUudXNlKENyb3BwYSk7XG5cblZ1ZS51c2UoVkRhdGFUYWJsZSk7XG5cbmNvbnN0IGkxOG4gPSBuZXcgVnVlSTE4bih7XG4gICAgbG9jYWxlOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyxcbiAgICBtZXNzYWdlczoge1xuICAgICAgICBlbjogcmVxdWlyZSgnLi9sYW5nL2VuJykuZGVmYXVsdCxcbiAgICAgICAgaGU6IHJlcXVpcmUoJy4vbGFuZy9oZScpLmRlZmF1bHQsXG4gICAgfSxcbn0pO1xuXG53aW5kb3cuVnVlID0gVnVlO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZpbGVzID0gcmVxdWlyZS5jb250ZXh0KCcuL2NvbXBvbmVudHMnLCB0cnVlLCAvXFwudnVlJC9pKTtcbiAgICBmaWxlcy5rZXlzKCkubWFwKGtleSA9PiBWdWUuY29tcG9uZW50KGtleS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJylbMF0sIGZpbGVzKGtleSkuZGVmYXVsdCkpO1xufSkoKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHJlcXVpcmUuY29udGV4dCgnLi9kaXJlY3RpdmVzJywgdHJ1ZSwgL1xcLmpzJC9pKTtcbiAgICBmaWxlcy5rZXlzKCkubWFwKGtleSA9PiBWdWUuZGlyZWN0aXZlKGtleS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJylbMF0sIGZpbGVzKGtleSkuZGVmYXVsdCkpO1xufSkoKTtcblxuVnVlLmNvbXBvbmVudCgnZHJhZ2dhYmxlJywgZHJhZ2dhYmxlKTtcblxuVnVlLmNvbXBvbmVudCgnZWRpdG9yJywgRWRpdG9yKTtcblxuVnVlLmNvbXBvbmVudCgndnVlanMtZGF0ZXBpY2tlcicsIERhdGVwaWNrZXIpO1xuXG5WdWUubWl4aW4oe1xuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICckY3NyZl90b2tlbicoKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuY29udGVudDtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgaTE4bixcbiAgICBzdG9yZSxcblxuICAgIGRhdGE6IHt9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBsb2dvdXQoKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLmxvZ291dEZvcm0uc3VibWl0KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3RlU3VibWl0KHJlZikge1xuICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnNbcmVmXSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzW3JlZl0ucmVwb3J0VmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzW3JlZl0uc3VibWl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9