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
      w: window,
      d: document,
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
exports.push([module.i, ".side-bar[data-v-333980e2] {\n  background-color: #262626;\n  min-height: calc(100vh - 40px);\n  width: 65px;\n  padding: 0.5rem 0;\n  transition: width 0.3s ease-in-out;\n}\n.side-bar.opened[data-v-333980e2] {\n  width: 200px;\n  flex: 0 0 200px;\n}\n.side-bar .side-bar-content[data-v-333980e2] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: calc(40px + 0.5rem);\n}\n.side-bar .side-bar-content .nav .nav-item .nav-link[data-v-333980e2] {\n  color: white;\n  padding: 0.5rem 0.5rem;\n  font-size: 1.25em;\n  justify-content: flex-start;\n}\n.side-bar .side-bar-content .nav .nav-item .nav-link .fas[data-v-333980e2] {\n  font-size: 1.25rem;\n  display: inline-block;\n  -webkit-padding-end: 0.5em;\n          padding-inline-end: 0.5em;\n}\n.side-bar .side-bar-content .nav .nav-item .nav-link .fas + span[data-v-333980e2] {\n  flex: 1;\n}\n.side-bar .side-bar-content .nav .nav-item .nav-link .fas.none[data-v-333980e2]:before {\n  content: \" \";\n  width: 1.15ch;\n  display: inline-block;\n}\n.side-bar .side-bar-content .nav .nav-item[data-v-333980e2]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.side-bar .side-bar-content .nav .nav-item.dropdown .child-menu[data-v-333980e2] {\n  display: none;\n  background-color: #262626;\n}\n.side-bar .side-bar-content .nav .nav-item.dropdown .child-menu > *[data-v-333980e2] {\n  -webkit-padding-start: 3rem;\n          padding-inline-start: 3rem;\n  font-size: 1.1em;\n}\n.side-bar .side-bar-content .nav .nav-item.dropdown .child-menu > *[data-v-333980e2]:hover {\n  color: #4285F4;\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.side-bar .side-bar-content .nav .nav-item.dropdown [aria-haspopup][aria-expanded=true] + .child-menu[data-v-333980e2] {\n  display: block;\n}\n.side-bar .side-bar-content .nav .nav-item.active[data-v-333980e2] {\n  color: #262626;\n  background: #f2f2f2;\n}\n.side-bar .side-bar-content .nav .nav-item.active a[data-v-333980e2] {\n  color: inherit;\n}", ""]);

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
                class: {
                  dropdown: item.children && _vm.agnosticLength(item.children)
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9TaWRlQmFyLnZ1ZT80OWIwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1RvcEJhci52dWU/ZGJiNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2VzMjAxNS9tYWluL3RzL1NjcmlwdExvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2VzMjAxNS9tYWluL3RzL1RpbnlNQ0UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9lczIwMTUvbWFpbi90cy9VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRpbnltY2UvdGlueW1jZS12dWUvbGliL2VzMjAxNS9tYWluL3RzL2NvbXBvbmVudHMvRWRpdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGlueW1jZS90aW55bWNlLXZ1ZS9saWIvZXMyMDE1L21haW4vdHMvY29tcG9uZW50cy9FZGl0b3JQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0aW55bWNlL3RpbnltY2UtdnVlL2xpYi9lczIwMTUvbWFpbi90cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvQnJlYWRFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0Jhc2VGaWVsZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9EYXRlRmllbGQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvRmlsZUZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0dlb2NvZGluZ0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0dyb3VwZWRGaWVsZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9JbWFnZUZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0lucHV0RmllbGQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvU2VsZWN0RmllbGQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvVGV4dGFyZWFGaWVsZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9XeXNpd3lnRmllbGQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9Ecm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyV3JhcHBlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1JlZGlyZWN0aW9ucy52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1NpZGVCYXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9Ub3BCYXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9WRGF0YVRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0JyZWFkRWRpdC52dWU/NjkwMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR2VvY29kaW5nRmllbGQudnVlP2E5ZGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvUmVkaXJlY3Rpb25zLnZ1ZT8xYmE4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1NpZGVCYXIudnVlPzdhN2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvVG9wQmFyLnZ1ZT83YzA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1ZEYXRhVGFibGUudnVlPzUxNTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0ZpbGVGaWVsZC52dWU/ZjY2MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR3JvdXBlZEZpZWxkLnZ1ZT8yMzY3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9JbWFnZUZpZWxkLnZ1ZT8zNmIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0JyZWFkRWRpdC52dWU/NzhmYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR2VvY29kaW5nRmllbGQudnVlPzBhMzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvUmVkaXJlY3Rpb25zLnZ1ZT8zYjYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1NpZGVCYXIudnVlPzM5NzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvVG9wQmFyLnZ1ZT82ZThmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1ZEYXRhVGFibGUudnVlPzk0ZmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0ZpbGVGaWVsZC52dWU/NjEyNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR3JvdXBlZEZpZWxkLnZ1ZT9hNWFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9JbWFnZUZpZWxkLnZ1ZT85YjM0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0JyZWFkRWRpdC52dWU/Nzg1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvRGF0ZUZpZWxkLnZ1ZT8xZjI1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9GaWxlRmllbGQudnVlPzU4MmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0dlb2NvZGluZ0ZpZWxkLnZ1ZT85OWM1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9Hcm91cGVkRmllbGQudnVlPzUxZmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0ltYWdlRmllbGQudnVlPzdhYTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0lucHV0RmllbGQudnVlPzVlNDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL1NlbGVjdEZpZWxkLnZ1ZT83ZDA2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9UZXh0YXJlYUZpZWxkLnZ1ZT8zNmFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9XeXNpd3lnRmllbGQudnVlPzY3YTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvRHJvcGRvd24udnVlPzkzNzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvRmlsZU1hbmFnZXJXcmFwcGVyLnZ1ZT8wYzQ5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1JlZGlyZWN0aW9ucy52dWU/ZWIxOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9TaWRlQmFyLnZ1ZT9iNmRiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1RvcEJhci52dWU/Y2Y2MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9WRGF0YVRhYmxlLnZ1ZT9jNTEwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvaW5jL2F4aW9zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL2luYy90aW55bWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzIHN5bmMgXFwudnVlJC8iLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvQnJlYWRFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9CcmVhZEVkaXQudnVlPzcwNjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvQnJlYWRFZGl0LnZ1ZT8zOGRjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0JyZWFkRWRpdC52dWU/MTNlMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvQmFzZUZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvQmFzZUZpZWxkLnZ1ZT84MTExIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9EYXRlRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9EYXRlRmllbGQudnVlPzUzZDAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0RhdGVGaWVsZC52dWU/NGMxZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvRmlsZUZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvRmlsZUZpZWxkLnZ1ZT9hZjhmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9GaWxlRmllbGQudnVlPzJkMTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0ZpbGVGaWVsZC52dWU/ZWFlZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR2VvY29kaW5nRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9HZW9jb2RpbmdGaWVsZC52dWU/NzM1YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR2VvY29kaW5nRmllbGQudnVlPzdmMWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0dlb2NvZGluZ0ZpZWxkLnZ1ZT9kMTg1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9Hcm91cGVkRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9Hcm91cGVkRmllbGQudnVlP2FkYWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0dyb3VwZWRGaWVsZC52dWU/NWQ4OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR3JvdXBlZEZpZWxkLnZ1ZT84OWY3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9JbWFnZUZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvSW1hZ2VGaWVsZC52dWU/NGY5MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvSW1hZ2VGaWVsZC52dWU/OWMxMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvSW1hZ2VGaWVsZC52dWU/ZWVhNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvSW5wdXRGaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0lucHV0RmllbGQudnVlP2RmM2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0lucHV0RmllbGQudnVlP2RiYjUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL1NlbGVjdEZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvU2VsZWN0RmllbGQudnVlP2ZmYzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL1NlbGVjdEZpZWxkLnZ1ZT9iMWU3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9UZXh0YXJlYUZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvVGV4dGFyZWFGaWVsZC52dWU/YThjMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvVGV4dGFyZWFGaWVsZC52dWU/OTlkMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvV3lzaXd5Z0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvV3lzaXd5Z0ZpZWxkLnZ1ZT84MmRkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9XeXNpd3lnRmllbGQudnVlPzEyOTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvRHJvcGRvd24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0Ryb3Bkb3duLnZ1ZT8yZGY5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0Ryb3Bkb3duLnZ1ZT84YmRiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyV3JhcHBlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvRmlsZU1hbmFnZXJXcmFwcGVyLnZ1ZT9lNTVkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyV3JhcHBlci52dWU/ZWQzNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9SZWRpcmVjdGlvbnMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1JlZGlyZWN0aW9ucy52dWU/OWY0YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9SZWRpcmVjdGlvbnMudnVlPzczNDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvUmVkaXJlY3Rpb25zLnZ1ZT9jNDc1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1NpZGVCYXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1NpZGVCYXIudnVlP2YyMmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvU2lkZUJhci52dWU/NzY5MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9TaWRlQmFyLnZ1ZT8wNjY2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1NpZGVCYXIudnVlPzBkZDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvVG9wQmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9Ub3BCYXIudnVlPzAyNzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvVG9wQmFyLnZ1ZT81N2E1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1RvcEJhci52dWU/MGJhYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9Ub3BCYXIudnVlP2NmYzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvVkRhdGFUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvVkRhdGFUYWJsZS52dWU/YjVmZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9WRGF0YVRhYmxlLnZ1ZT80OWIyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1ZEYXRhVGFibGUudnVlP2ExYWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2RpcmVjdGl2ZXMgc3luYyBcXC5qcyQvIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9kaXJlY3RpdmVzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvbGFuZy9lbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvbGFuZy9oZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvdnVlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL3Nhc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvc2Fzcy92ZW5kb3Iuc2NzcyJdLCJuYW1lcyI6WyJTdHJpbmciLCJwcm90b3R5cGUiLCJzdGFydHNXaXRoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsInNlYXJjaCIsInJhd1BvcyIsInBvcyIsInN1YnN0cmluZyIsImxlbmd0aCIsIndpbmRvdyIsIlN3YWwiLCJyZXF1aXJlIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJpbnNlcnRlZCIsImVsIiwiYmluZGluZyIsInZub2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiZmlyZSIsInRpdGxlIiwiY29udGV4dCIsIiR0IiwidGV4dCIsImRhdGFzZXQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNhbmNlbEJ1dHRvblRleHQiLCJjb25maXJtQnV0dG9uVGV4dCIsInRoZW4iLCJyIiwiaHJlZiIsInJlc3BvbnNlIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsInJlbG9hZCIsInN3YWwiLCJWdWUiLCJjb25maWciLCJkZXZ0b29scyIsInVzZSIsIlZ1ZXgiLCJzdG9yZSIsIlN0b3JlIiwiRmlsZU1hbmFnZXIiLCJWdWVJMThuIiwiQ3JvcHBhIiwiVkRhdGFUYWJsZSIsImkxOG4iLCJsb2NhbGUiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwibWVzc2FnZXMiLCJlbiIsImhlIiwiZmlsZXMiLCJrZXlzIiwibWFwIiwia2V5IiwiY29tcG9uZW50Iiwic3BsaXQiLCJwb3AiLCJkaXJlY3RpdmUiLCJkcmFnZ2FibGUiLCJFZGl0b3IiLCJEYXRlcGlja2VyIiwibWl4aW4iLCJjb21wdXRlZCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImFwcCIsImRhdGEiLCJtZXRob2RzIiwibG9nb3V0IiwiJHJlZnMiLCJsb2dvdXRGb3JtIiwic3VibWl0IiwicmVtb3RlU3VibWl0IiwicmVmIiwicmVwb3J0VmFsaWRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0Esa0NBQWtDLE1BQU0sNEJBQTRCLE9BQU8sNkJBQTZCO0FBQ3hHO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbURBQUk7QUFDdEI7QUFDQTtBQUNB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QUVBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBLFFBQVEsVUFBVTs7QUFFbEI7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEZBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7O0FDdEx0QyxjQUFjLG1CQUFPLENBQUMseXVCQUF5YTs7QUFFL2IsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHFIQUFrRTs7QUFFdkY7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbEJmLGNBQWMsbUJBQU8sQ0FBQyx5d0JBQTZiOztBQUVuZCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsd0hBQXFFOztBQUUxRjs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNsQmYsY0FBYyxtQkFBTyxDQUFDLDB0QkFBNlo7O0FBRW5iLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxrSEFBK0Q7O0FBRXBGOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ2xCZixjQUFjLG1CQUFPLENBQUMsZ3RCQUF3Wjs7QUFFOWEsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLGtIQUErRDs7QUFFcEY7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbEJmLGNBQWMsbUJBQU8sQ0FBQyw4cEJBQStYOztBQUVyWiw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsa0hBQStEOztBQUVwRjs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNsQmYsY0FBYyxtQkFBTyxDQUFDLHN0QkFBMlo7O0FBRWpiLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxrSEFBK0Q7O0FBRXBGOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ2xCZixjQUFjLG1CQUFPLENBQUMseXBCQUEwWDs7QUFFaFosNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHdIQUFxRTs7QUFFMUY7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbEJmLGNBQWMsbUJBQU8sQ0FBQywrcEJBQTZYOztBQUVuWiw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsd0hBQXFFOztBQUUxRjs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNsQmYsY0FBYyxtQkFBTyxDQUFDLDJwQkFBMlg7O0FBRWpaLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyx3SEFBcUU7O0FBRTFGOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDbkJmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLHVEQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFPLENBQUMsaUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTLCtCQUErQjtBQUN4QztBQUNBLDRCQUE0Qix3Q0FBd0M7QUFDcEU7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hELDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxzQ0FBc0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVMscUJBQXFCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsMkNBQTJDLHNCQUFzQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLDhDQUE4Qyw2QkFBNkI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUyxnQkFBZ0IsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZSQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQ0FBaUM7QUFDakQsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsU0FBUztBQUNULGFBQWEsb0JBQW9CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQ0FBa0M7QUFDakQsaUJBQWlCLHFDQUFxQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckMsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtCQUErQjtBQUMvQyxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsbUJBQW1CO0FBQ25CO0FBQ0EsK0JBQStCLDhCQUE4QjtBQUM3RCxnQ0FBZ0MsNkJBQTZCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx3Q0FBd0M7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHNDQUFzQyxTQUFTLHdCQUF3QixFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25ELG1EQUFtRCxhQUFhO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMENBQTBDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0dBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUMsY0FBYyw2Q0FBNkM7QUFDM0QsaUJBQWlCLGlDQUFpQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyQ0FBMkM7QUFDekQsaUJBQWlCLDZCQUE2QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyQ0FBMkM7QUFDekQsaUJBQWlCLDZCQUE2QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSwyREFBMkQ7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssa0NBQWtDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQTRDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzQ0FBc0M7QUFDbkU7QUFDQSwyQ0FBMkMsU0FBUyxxQkFBcUIsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDBDQUEwQyxtQ0FBbUM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDBDQUEwQyw4QkFBOEI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLCtCQUErQixzQkFBc0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixrQ0FBa0MsNkJBQTZCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsZ0JBQWdCLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6T0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMseUNBQXlDO0FBQ3ZELGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMseUNBQXlDO0FBQ3ZELGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkNBQTJDO0FBQ3pELGlCQUFpQiw2QkFBNkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsd0RBQXdEO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyQ0FBMkM7QUFDM0QsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0EsZUFBZSxpQ0FBaUM7QUFDaEQsbUJBQW1CLFNBQVMsdUJBQXVCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseUNBQXlDO0FBQ3pELG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxtQkFBbUI7QUFDbkI7QUFDQSwrQkFBK0IsOEJBQThCO0FBQzdELGdDQUFnQyw2QkFBNkI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHdDQUF3QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0Esc0NBQXNDLFNBQVMsd0JBQXdCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQsbURBQW1ELGFBQWE7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQ0FBMEM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3S0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRCQUE0QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0QkFBNEI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQkFBbUIseUNBQXlDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNEJBQTRCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJCQUEyQixZQUFZLGFBQWEsRUFBRTtBQUN0RDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDRCQUE0QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZUFBZSx5QkFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUE2QztBQUM3RCxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtDQUFrQyxtQkFBbUIsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVDQUF1QyxtQkFBbUIsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0JBQW9CLHlCQUF5QixFQUFFO0FBQzVFO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckMsaUJBQWlCLDREQUE0RDtBQUM3RTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0EsdUJBQXVCLGlDQUFpQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2I7QUFDQSx1QkFBdUIsK0JBQStCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkJBQTJCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0REFBNEQ7QUFDM0U7QUFDQSwyQkFBMkIsMkNBQTJDO0FBQ3RFO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsbUJBQW1CO0FBQ25CO0FBQ0EsNkJBQTZCLDJCQUEyQjtBQUN4RCwrQkFBK0IsMEJBQTBCO0FBQ3pELGlDQUFpQywwQ0FBMEM7QUFDM0UscUNBQXFDLFNBQVMsc0JBQXNCLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtQ0FBbUM7QUFDckUscUNBQXFDLGdCQUFnQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxpQ0FBaUMsMENBQTBDO0FBQzNFLHFDQUFxQyxTQUFTLG9CQUFvQixFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUNBQWlDO0FBQ25FLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGlDQUFpQywyQ0FBMkM7QUFDNUUscUNBQXFDLFNBQVMsMkJBQTJCLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsMEJBQTBCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLDBDQUEwQyxZQUFZLGVBQWUsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVksY0FBYyxFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwQkFBMEI7QUFDekQsaUNBQWlDLGlDQUFpQztBQUNsRTtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFnRDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdDQUF3QztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUNBQWlDO0FBQ2xFO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQWdEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUNBQWlDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9DQUFvQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDJCQUEyQjtBQUM1RDtBQUNBLGlDQUFpQyxpQ0FBaUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsV0FBVztBQUNYO0FBQ0EscUJBQXFCLGlEQUFpRDtBQUN0RSx1QkFBdUIsMkNBQTJDO0FBQ2xFLHlCQUF5QixzQkFBc0I7QUFDL0M7QUFDQSx5QkFBeUIsMkJBQTJCO0FBQ3BELDJCQUEyQiwwQkFBMEI7QUFDckQsNkJBQTZCLDBDQUEwQztBQUN2RSxpQ0FBaUMsU0FBUyxrQkFBa0IsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtCQUErQjtBQUM3RCxpQ0FBaUMsaUNBQWlDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsNkJBQTZCLDBDQUEwQztBQUN2RSxpQ0FBaUMsU0FBUyxnQkFBZ0IsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDZCQUE2QjtBQUMzRCxpQ0FBaUMsK0JBQStCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsNkJBQTZCLDJDQUEyQztBQUN4RSxpQ0FBaUMsU0FBUyx1QkFBdUIsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0Esc0NBQXNDLFlBQVksZUFBZSxFQUFFO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZLGNBQWMsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQsNkJBQTZCLGlDQUFpQztBQUM5RDtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFnRDtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpQ0FBaUM7QUFDOUQ7QUFDQTtBQUNBLHVCQUF1QixnREFBZ0Q7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxzQ0FBc0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUNBQWlDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkJBQTJCO0FBQ3hEO0FBQ0EsNkJBQTZCLGlDQUFpQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLGlDQUFpQztBQUNuRCxxQkFBcUI7QUFDckIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdnlCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGtDQUFrQyxxQkFBcUIsRUFBRTtBQUM5RDtBQUNBLGlCQUFpQixrQ0FBa0M7QUFDbkQ7QUFDQTtBQUNBLFdBQVcsaUNBQWlDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHFDQUFxQyx1Q0FBdUM7QUFDNUU7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTLDRCQUE0QjtBQUNyQztBQUNBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUNBQXVDLFlBQVksRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQ0FBa0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssb0NBQW9DLG9DQUFvQyxFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHFCQUFxQixtQ0FBbUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QywyQkFBMkIsa0NBQWtDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVDQUF1QztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUJBQXFCLGdCQUFnQixFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU0sbUJBQW1CLEVBQUU7QUFDeEMsb0NBQW9DLFVBQVU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtDQUFrQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1Q0FBdUM7QUFDNUQ7QUFDQTtBQUNBLGVBQWUsNEJBQTRCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBc0Q7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxnQ0FBZ0MscUNBQXFDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUNBQXFDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtDQUErQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFDQUFxQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUNBQXFDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0Q0FBNEM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25sQkE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7QUNuQkEsSUFBSSxDQUFDQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFVBQXRCLEVBQWtDO0FBQzlCQyxRQUFNLENBQUNDLGNBQVAsQ0FBc0JKLE1BQU0sQ0FBQ0MsU0FBN0IsRUFBd0MsWUFBeEMsRUFBc0Q7QUFDbERJLFNBRGtELGlCQUM1Q0MsTUFENEMsRUFDcENDLE1BRG9DLEVBQzVCO0FBQ2xCLFVBQUlDLEdBQUcsR0FBR0QsTUFBTSxHQUFHLENBQVQsR0FBYUEsTUFBTSxHQUFHLENBQXRCLEdBQTBCLENBQXBDO0FBQ0EsYUFBTyxLQUFLRSxTQUFMLENBQWVELEdBQWYsRUFBb0JBLEdBQUcsR0FBR0YsTUFBTSxDQUFDSSxNQUFqQyxNQUE2Q0osTUFBcEQ7QUFDSDtBQUppRCxHQUF0RDtBQU1IOztBQUVESyxNQUFNLENBQUNDLElBQVAsR0FBY0MsbUJBQU8sQ0FBQyx1RUFBRCxDQUFyQjs7QUFFQUEsbUJBQU8sQ0FBQyxpRUFBRCxDQUFQOztBQUVBQSxtQkFBTyxDQUFDLHFFQUFELENBQVA7O0FBRUFBLG1CQUFPLENBQUMsNkRBQUQsQ0FBUCxDOzs7Ozs7Ozs7OztBQ2ZBRixNQUFNLENBQUNHLEtBQVAsR0FBZUQsbUJBQU8sQ0FBQyw0Q0FBRCxDQUF0QjtBQUVBRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsUUFBYixDQUFzQkMsT0FBdEIsQ0FBOEJDLE1BQTlCLENBQXFDLGtCQUFyQyxJQUEyRCxnQkFBM0QsQzs7Ozs7Ozs7Ozs7QUNGQUosbUJBQU8sQ0FBQyxrREFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDRFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsMEVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyw0RUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDRFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsNEVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyw0RUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDBFQUFELENBQVAsQzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHOUY7QUFDeUc7QUFDekcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLGdHQUFNO0FBQ1IsRUFBRSx5R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBaU4sQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck87QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUM2RDtBQUNMOzs7QUFHeEQ7QUFDNEc7QUFDNUcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQVlmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDakNmO0FBQUE7QUFBQSx3Q0FBdU4sQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM087QUFBQTtBQUFBO0FBQUE7QUFBb0c7QUFDdkM7QUFDTDs7O0FBR3hEO0FBQzRHO0FBQzVHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXVOLENBQWdCLHFQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTNPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0c7QUFDdkM7QUFDTDtBQUNxQzs7O0FBRzdGO0FBQzRHO0FBQzVHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXVOLENBQWdCLHFQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTNPO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHbkc7QUFDNEc7QUFDNUcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsb0ZBQU07QUFDUixFQUFFLHFHQUFNO0FBQ1IsRUFBRSw4R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBNE4sQ0FBZ0IsMFBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBaFA7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVHO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUdoRztBQUM0RztBQUM1RyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxrRkFBTTtBQUNSLEVBQUUsbUdBQU07QUFDUixFQUFFLDRHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUEwTixDQUFnQix3UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TztBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUc7QUFDdkM7QUFDTDtBQUNxQzs7O0FBRzlGO0FBQzRHO0FBQzVHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXdOLENBQWdCLHNQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTVPO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUc7QUFDdkM7QUFDTDs7O0FBR3pEO0FBQzRHO0FBQzVHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXdOLENBQWdCLHNQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTVPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXNHO0FBQ3ZDO0FBQ0w7OztBQUcxRDtBQUM0RztBQUM1RyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxpRkFBTTtBQUNSLEVBQUUsa0dBQU07QUFDUixFQUFFLDJHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF5TixDQUFnQix1UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E3TztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RztBQUN2QztBQUNMOzs7QUFHNUQ7QUFDNEc7QUFDNUcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsbUZBQU07QUFDUixFQUFFLG9HQUFNO0FBQ1IsRUFBRSw2R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMk4sQ0FBZ0IseVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL087QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUc7QUFDdkM7QUFDTDs7O0FBRzNEO0FBQzRHO0FBQzVHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSxtR0FBTTtBQUNSLEVBQUUsNEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTBOLENBQWdCLHdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQW1HO0FBQ3ZDO0FBQ0w7OztBQUd2RDtBQUNzRztBQUN0RyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsK0ZBQU07QUFDUixFQUFFLHdHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEwTSxDQUFnQixvUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RztBQUN2QztBQUNMOzs7QUFHakU7QUFDc0c7QUFDdEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsd0ZBQU07QUFDUixFQUFFLHlHQUFNO0FBQ1IsRUFBRSxrSEFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBb04sQ0FBZ0IsOFBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBeE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHakc7QUFDc0c7QUFDdEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsa0ZBQU07QUFDUixFQUFFLG1HQUFNO0FBQ1IsRUFBRSw0R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBOE0sQ0FBZ0Isd1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbE87QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRzVGO0FBQ3NHO0FBQ3RHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDeUU7QUFDekUsV0FBVywyRkFBTSxpQkFBaUIsbUdBQU07O0FBRXhDO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUMzQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBeU4sQ0FBZ0IsbVFBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBN087QUFBQTtBQUFBLHdDQUF5TSxDQUFnQixtUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E3TjtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRjtBQUMzQjtBQUNMO0FBQ2M7OztBQUduRTtBQUNzRztBQUN0RyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ3dFO0FBQ3hFLFdBQVcsMEZBQU0saUJBQWlCLGtHQUFNOztBQUV4QztBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDM0NmO0FBQUE7QUFBQTtBQUFBO0FBQXdOLENBQWdCLGtRQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTVPO0FBQUE7QUFBQSx3Q0FBd00sQ0FBZ0Isa1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBNU47QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcvRjtBQUNzRztBQUN0RyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUsaUdBQU07QUFDUixFQUFFLDBHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE0TSxDQUFnQixzUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoTztBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEY7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFlO0FBQ1hLLFVBRFcsb0JBQ0ZDLEVBREUsRUFDRUMsT0FERixFQUNXQyxLQURYLEVBQ2tCO0FBQ3pCRixNQUFFLENBQUNHLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQVVDLEdBQVYsRUFBZTtBQUN4Q0EsU0FBRyxDQUFDQyxjQUFKO0FBRUFaLFVBQUksQ0FBQ2EsSUFBTCxDQUFVO0FBQ05DLGFBQUssRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWNDLEVBQWQsQ0FBaUIsYUFBakIsQ0FERDtBQUVOO0FBQ0FDLFlBQUksRUFBRVIsS0FBSyxDQUFDTSxPQUFOLENBQWNDLEVBQWQsQ0FBaUIsV0FBakIsRUFBOEI7QUFBQ0YsZUFBSyxFQUFFUCxFQUFFLENBQUNXLE9BQUgsQ0FBV0o7QUFBbkIsU0FBOUIsQ0FIQTtBQUlOSyxZQUFJLEVBQUUsU0FKQTtBQUtOQyx3QkFBZ0IsRUFBRSxJQUxaO0FBTU5DLHdCQUFnQixFQUFFWixLQUFLLENBQUNNLE9BQU4sQ0FBY0MsRUFBZCxDQUFpQixhQUFqQixDQU5aO0FBT05NLHlCQUFpQixFQUFFYixLQUFLLENBQUNNLE9BQU4sQ0FBY0MsRUFBZCxDQUFpQixVQUFqQjtBQVBiLE9BQVYsRUFRR08sSUFSSCxDQVFRLFVBQUFDLENBQUMsRUFBSTtBQUNULFlBQUlBLENBQUMsQ0FBQy9CLEtBQU4sRUFBYTtBQUNUUyxlQUFLLFVBQUwsQ0FBYUssRUFBRSxDQUFDa0IsSUFBaEIsRUFBc0JGLElBQXRCLENBQTJCLFVBQUFHLFFBQVEsRUFBSTtBQUNuQ0Msb0JBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsTUFBbEI7QUFDSCxXQUZEO0FBR0g7QUFDSixPQWREO0FBZUgsS0FsQkQ7QUFtQkg7QUFyQlUsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFlO0FBQ1hDLE1BQUksRUFBRTtBQUNGLGNBQVUsUUFEUjtBQUVGLFdBQU8sS0FGTDtBQUdGLGNBQVUsUUFIUjtBQUlGO0FBSkU7QUFESyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWU7QUFDWEEsTUFBSSxFQUFFO0FBQ0YsY0FBVSxPQURSO0FBRUYsV0FBTyxPQUZMO0FBR0YsY0FBVSxPQUhSO0FBSUYsWUFBUTtBQUpOO0FBREssQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQywwQ0FBRyxDQUFDQyxNQUFKLENBQVdDLFFBQVgsR0FBc0IsSUFBdEI7QUFFQUYsMENBQUcsQ0FBQ0csR0FBSixDQUFRQyw0Q0FBUjtBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJRCw0Q0FBSSxDQUFDRSxLQUFULENBQWUsRUFBZixDQUFkO0FBQ0FOLDBDQUFHLENBQUNHLEdBQUosQ0FBUUksNERBQVIsRUFBcUI7QUFBQ0YsT0FBSyxFQUFMQTtBQUFELENBQXJCO0FBRUFMLDBDQUFHLENBQUNHLEdBQUosQ0FBUUssZ0RBQVI7QUFFQVIsMENBQUcsQ0FBQ0csR0FBSixDQUFRTSxpREFBUjtBQUVBVCwwQ0FBRyxDQUFDRyxHQUFKLENBQVFPLDhEQUFSO0FBRUEsSUFBTUMsSUFBSSxHQUFHLElBQUlILGdEQUFKLENBQVk7QUFDckJJLFFBQU0sRUFBRWhCLFFBQVEsQ0FBQ2lCLGVBQVQsQ0FBeUJDLElBRFo7QUFFckJDLFVBQVEsRUFBRTtBQUNOQyxNQUFFLEVBQUU5QyxtQkFBTyxDQUFDLGlFQUFELENBQVAsV0FERTtBQUVOK0MsTUFBRSxFQUFFL0MsbUJBQU8sQ0FBQyxpRUFBRCxDQUFQO0FBRkU7QUFGVyxDQUFaLENBQWI7QUFRQUYsTUFBTSxDQUFDZ0MsR0FBUCxHQUFhQSwwQ0FBYjs7QUFFQSxDQUFDLFlBQVk7QUFDVCxNQUFNa0IsS0FBSyxHQUFHaEQsNkZBQWQ7O0FBQ0FnRCxPQUFLLENBQUNDLElBQU4sR0FBYUMsR0FBYixDQUFpQixVQUFBQyxHQUFHO0FBQUEsV0FBSXJCLDBDQUFHLENBQUNzQixTQUFKLENBQWNELEdBQUcsQ0FBQ0UsS0FBSixDQUFVLEdBQVYsRUFBZUMsR0FBZixHQUFxQkQsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsQ0FBZCxFQUFrREwsS0FBSyxDQUFDRyxHQUFELENBQUwsV0FBbEQsQ0FBSjtBQUFBLEdBQXBCO0FBQ0gsQ0FIRDs7QUFLQSxDQUFDLFlBQVk7QUFDVCxNQUFNSCxLQUFLLEdBQUdoRCw0RkFBZDs7QUFDQWdELE9BQUssQ0FBQ0MsSUFBTixHQUFhQyxHQUFiLENBQWlCLFVBQUFDLEdBQUc7QUFBQSxXQUFJckIsMENBQUcsQ0FBQ3lCLFNBQUosQ0FBY0osR0FBRyxDQUFDRSxLQUFKLENBQVUsR0FBVixFQUFlQyxHQUFmLEdBQXFCRCxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUFkLEVBQWtETCxLQUFLLENBQUNHLEdBQUQsQ0FBTCxXQUFsRCxDQUFKO0FBQUEsR0FBcEI7QUFDSCxDQUhEOztBQUtBckIsMENBQUcsQ0FBQ3NCLFNBQUosQ0FBYyxXQUFkLEVBQTJCSSxtREFBM0I7QUFFQTFCLDBDQUFHLENBQUNzQixTQUFKLENBQWMsUUFBZCxFQUF3QkssNERBQXhCO0FBRUEzQiwwQ0FBRyxDQUFDc0IsU0FBSixDQUFjLGtCQUFkLEVBQWtDTSx3REFBbEM7QUFFQTVCLDBDQUFHLENBQUM2QixLQUFKLENBQVU7QUFDTkMsVUFBUSxFQUFFO0FBQ04saUJBRE0seUJBQ1U7QUFDWixhQUFPbEMsUUFBUSxDQUFDbUMsSUFBVCxDQUFjQyxhQUFkLENBQTRCLHlCQUE1QixFQUF1REMsT0FBOUQ7QUFDSDtBQUhLO0FBREosQ0FBVjtBQVFBLElBQU1DLEdBQUcsR0FBRyxJQUFJbEMsMENBQUosQ0FBUTtBQUNoQnhCLElBQUUsRUFBRSxNQURZO0FBRWhCbUMsTUFBSSxFQUFKQSxJQUZnQjtBQUdoQk4sT0FBSyxFQUFMQSxLQUhnQjtBQUtoQjhCLE1BQUksRUFBRSxFQUxVO0FBT2hCQyxTQUFPLEVBQUU7QUFDTEMsVUFESyxvQkFDSTtBQUNMLFdBQUtDLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQkMsTUFBdEI7QUFDSCxLQUhJO0FBS0xDLGdCQUxLLHdCQUtRQyxHQUxSLEVBS2E7QUFDZCxVQUFJLEtBQUtKLEtBQUwsQ0FBV0ksR0FBWCxDQUFKLEVBQXFCO0FBQ2pCLFlBQUksS0FBS0osS0FBTCxDQUFXSSxHQUFYLEVBQWdCQyxjQUFoQixFQUFKLEVBQXNDO0FBQ2xDLGVBQUtMLEtBQUwsQ0FBV0ksR0FBWCxFQUFnQkYsTUFBaEI7QUFDSDtBQUNKO0FBQ0o7QUFYSTtBQVBPLENBQVIsQ0FBWixDOzs7Ozs7Ozs7OztBQ3hEQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvanMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gIENvbXBvbmVudC5vcHRpb25zLl9faTE4biA9IENvbXBvbmVudC5vcHRpb25zLl9faTE4biB8fCBbXVxuICBDb21wb25lbnQub3B0aW9ucy5fX2kxOG4ucHVzaCgne1wiZW5cIjp7fX0nKVxuICBkZWxldGUgQ29tcG9uZW50Lm9wdGlvbnMuX0N0b3Jcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICBDb21wb25lbnQub3B0aW9ucy5fX2kxOG4gPSBDb21wb25lbnQub3B0aW9ucy5fX2kxOG4gfHwgW11cbiAgQ29tcG9uZW50Lm9wdGlvbnMuX19pMThuLnB1c2goJ3tcImVuXCI6e1wiSGlcIjpcIkhpXCIsXCJMb2dvdXRcIjpcIkxvZ291dFwifSxcImhlXCI6e1wiSGlcIjpcIteU15nXmVwiLFwiTG9nb3V0XCI6XCLXmdem15nXkNeUXCJ9fScpXG4gIGRlbGV0ZSBDb21wb25lbnQub3B0aW9ucy5fQ3RvclxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gJy4vVXRpbHMnO1xudmFyIGNyZWF0ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxpc3RlbmVyczogW10sXG4gICAgICAgIHNjcmlwdElkOiB1dWlkKCd0aW55LXNjcmlwdCcpLFxuICAgICAgICBzY3JpcHRMb2FkZWQ6IGZhbHNlXG4gICAgfTtcbn07XG52YXIgQ3JlYXRlU2NyaXB0TG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0ZSA9IGNyZWF0ZVN0YXRlKCk7XG4gICAgdmFyIGluamVjdFNjcmlwdFRhZyA9IGZ1bmN0aW9uIChzY3JpcHRJZCwgZG9jLCB1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzY3JpcHRUYWcgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdFRhZy5yZWZlcnJlclBvbGljeSA9ICdvcmlnaW4nO1xuICAgICAgICBzY3JpcHRUYWcudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0VGFnLmlkID0gc2NyaXB0SWQ7XG4gICAgICAgIHNjcmlwdFRhZy5zcmMgPSB1cmw7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2NyaXB0VGFnLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH07XG4gICAgICAgIHNjcmlwdFRhZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaGFuZGxlcik7XG4gICAgICAgIGlmIChkb2MuaGVhZCkge1xuICAgICAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0VGFnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGxvYWQgPSBmdW5jdGlvbiAoZG9jLCB1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChzdGF0ZS5zY3JpcHRMb2FkZWQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZS5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoIWRvYy5nZXRFbGVtZW50QnlJZChzdGF0ZS5zY3JpcHRJZCkpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RTY3JpcHRUYWcoc3RhdGUuc2NyaXB0SWQsIGRvYywgdXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4oKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnNjcmlwdExvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIE9ubHkgdG8gYmUgdXNlZCBieSB0ZXN0cy5cbiAgICB2YXIgcmVpbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGF0ZSA9IGNyZWF0ZVN0YXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkOiBsb2FkLFxuICAgICAgICByZWluaXRpYWxpemU6IHJlaW5pdGlhbGl6ZVxuICAgIH07XG59O1xudmFyIFNjcmlwdExvYWRlciA9IENyZWF0ZVNjcmlwdExvYWRlcigpO1xuZXhwb3J0IHsgU2NyaXB0TG9hZGVyIH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG52YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKTsgfTtcbnZhciBnZXRUaW55bWNlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnbG9iYWwgPSBnZXRHbG9iYWwoKTtcbiAgICByZXR1cm4gZ2xvYmFsICYmIGdsb2JhbC50aW55bWNlID8gZ2xvYmFsLnRpbnltY2UgOiBudWxsO1xufTtcbmV4cG9ydCB7IGdldFRpbnltY2UgfTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbnZhciB2YWxpZEV2ZW50cyA9IFtcbiAgICAnb25BY3RpdmF0ZScsXG4gICAgJ29uQWRkVW5kbycsXG4gICAgJ29uQmVmb3JlQWRkVW5kbycsXG4gICAgJ29uQmVmb3JlRXhlY0NvbW1hbmQnLFxuICAgICdvbkJlZm9yZUdldENvbnRlbnQnLFxuICAgICdvbkJlZm9yZVJlbmRlclVJJyxcbiAgICAnb25CZWZvcmVTZXRDb250ZW50JyxcbiAgICAnb25CZWZvcmVQYXN0ZScsXG4gICAgJ29uQmx1cicsXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnb25DbGVhclVuZG9zJyxcbiAgICAnb25DbGljaycsXG4gICAgJ29uQ29udGV4dE1lbnUnLFxuICAgICdvbkNvcHknLFxuICAgICdvbkN1dCcsXG4gICAgJ29uRGJsY2xpY2snLFxuICAgICdvbkRlYWN0aXZhdGUnLFxuICAgICdvbkRpcnR5JyxcbiAgICAnb25EcmFnJyxcbiAgICAnb25EcmFnRHJvcCcsXG4gICAgJ29uRHJhZ0VuZCcsXG4gICAgJ29uRHJhZ0dlc3R1cmUnLFxuICAgICdvbkRyYWdPdmVyJyxcbiAgICAnb25Ecm9wJyxcbiAgICAnb25FeGVjQ29tbWFuZCcsXG4gICAgJ29uRm9jdXMnLFxuICAgICdvbkZvY3VzSW4nLFxuICAgICdvbkZvY3VzT3V0JyxcbiAgICAnb25HZXRDb250ZW50JyxcbiAgICAnb25IaWRlJyxcbiAgICAnb25Jbml0JyxcbiAgICAnb25LZXlEb3duJyxcbiAgICAnb25LZXlQcmVzcycsXG4gICAgJ29uS2V5VXAnLFxuICAgICdvbkxvYWRDb250ZW50JyxcbiAgICAnb25Nb3VzZURvd24nLFxuICAgICdvbk1vdXNlRW50ZXInLFxuICAgICdvbk1vdXNlTGVhdmUnLFxuICAgICdvbk1vdXNlTW92ZScsXG4gICAgJ29uTW91c2VPdXQnLFxuICAgICdvbk1vdXNlT3ZlcicsXG4gICAgJ29uTW91c2VVcCcsXG4gICAgJ29uTm9kZUNoYW5nZScsXG4gICAgJ29uT2JqZWN0UmVzaXplU3RhcnQnLFxuICAgICdvbk9iamVjdFJlc2l6ZWQnLFxuICAgICdvbk9iamVjdFNlbGVjdGVkJyxcbiAgICAnb25QYXN0ZScsXG4gICAgJ29uUG9zdFByb2Nlc3MnLFxuICAgICdvblBvc3RSZW5kZXInLFxuICAgICdvblByZVByb2Nlc3MnLFxuICAgICdvblByb2dyZXNzU3RhdGUnLFxuICAgICdvblJlZG8nLFxuICAgICdvblJlbW92ZScsXG4gICAgJ29uUmVzZXQnLFxuICAgICdvblNhdmVDb250ZW50JyxcbiAgICAnb25TZWxlY3Rpb25DaGFuZ2UnLFxuICAgICdvblNldEF0dHJpYicsXG4gICAgJ29uU2V0Q29udGVudCcsXG4gICAgJ29uU2hvdycsXG4gICAgJ29uU3VibWl0JyxcbiAgICAnb25VbmRvJyxcbiAgICAnb25WaXN1YWxBaWQnXG5dO1xudmFyIGlzVmFsaWRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWxpZEV2ZW50cy5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBldmVudC50b0xvd2VyQ2FzZSgpOyB9KS5pbmRleE9mKGtleS50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7IH07XG52YXIgYmluZEhhbmRsZXJzID0gZnVuY3Rpb24gKGluaXRFdmVudCwgbGlzdGVuZXJzLCBlZGl0b3IpIHtcbiAgICBPYmplY3Qua2V5cyhsaXN0ZW5lcnMpXG4gICAgICAgIC5maWx0ZXIoaXNWYWxpZEtleSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgaGFuZGxlciA9IGxpc3RlbmVyc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdvbkluaXQnKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihpbml0RXZlbnQsIGVkaXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlZGl0b3Iub24oa2V5LnN1YnN0cmluZygyKSwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGhhbmRsZXIoZSwgZWRpdG9yKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG52YXIgYmluZE1vZGVsSGFuZGxlcnMgPSBmdW5jdGlvbiAoY3R4LCBlZGl0b3IpIHtcbiAgICB2YXIgbW9kZWxFdmVudHMgPSBjdHguJHByb3BzLm1vZGVsRXZlbnRzID8gY3R4LiRwcm9wcy5tb2RlbEV2ZW50cyA6IG51bGw7XG4gICAgdmFyIG5vcm1hbGl6ZWRFdmVudHMgPSBBcnJheS5pc0FycmF5KG1vZGVsRXZlbnRzKSA/IG1vZGVsRXZlbnRzLmpvaW4oJyAnKSA6IG1vZGVsRXZlbnRzO1xuICAgIGN0eC4kd2F0Y2goJ3ZhbHVlJywgZnVuY3Rpb24gKHZhbCwgcHJldlZhbCkge1xuICAgICAgICBpZiAoZWRpdG9yICYmIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbCAhPT0gcHJldlZhbCAmJiB2YWwgIT09IGVkaXRvci5nZXRDb250ZW50KHsgZm9ybWF0OiBjdHguJHByb3BzLm91dHB1dEZvcm1hdCB9KSkge1xuICAgICAgICAgICAgZWRpdG9yLnNldENvbnRlbnQodmFsKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGVkaXRvci5vbihub3JtYWxpemVkRXZlbnRzID8gbm9ybWFsaXplZEV2ZW50cyA6ICdjaGFuZ2UgaW5wdXQgdW5kbyByZWRvJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjdHguJGVtaXQoJ2lucHV0JywgZWRpdG9yLmdldENvbnRlbnQoeyBmb3JtYXQ6IGN0eC4kcHJvcHMub3V0cHV0Rm9ybWF0IH0pKTtcbiAgICB9KTtcbn07XG52YXIgaW5pdEVkaXRvciA9IGZ1bmN0aW9uIChpbml0RXZlbnQsIGN0eCwgZWRpdG9yKSB7XG4gICAgdmFyIHZhbHVlID0gY3R4LiRwcm9wcy52YWx1ZSA/IGN0eC4kcHJvcHMudmFsdWUgOiAnJztcbiAgICB2YXIgaW5pdGlhbFZhbHVlID0gY3R4LiRwcm9wcy5pbml0aWFsVmFsdWUgPyBjdHguJHByb3BzLmluaXRpYWxWYWx1ZSA6ICcnO1xuICAgIGVkaXRvci5zZXRDb250ZW50KHZhbHVlIHx8IChjdHguaW5pdGlhbGl6ZWQgPyBjdHguY2FjaGUgOiBpbml0aWFsVmFsdWUpKTtcbiAgICAvLyBjaGVja3MgaWYgdGhlIHYtbW9kZWwgc2hvcnRoYW5kIGlzIHVzZWQgKHdoaWNoIHNldHMgYW4gdi1vbjppbnB1dCBsaXN0ZW5lcikgYW5kIHRoZW4gYmluZHMgZWl0aGVyXG4gICAgLy8gc3BlY2lmaWVkIHRoZSBldmVudHMgb3IgZGVmYXVsdHMgdG8gXCJjaGFuZ2Uga2V5dXBcIiBldmVudCBhbmQgZW1pdHMgdGhlIGVkaXRvciBjb250ZW50IG9uIHRoYXQgZXZlbnRcbiAgICBpZiAoY3R4LiRsaXN0ZW5lcnMuaW5wdXQpIHtcbiAgICAgICAgYmluZE1vZGVsSGFuZGxlcnMoY3R4LCBlZGl0b3IpO1xuICAgIH1cbiAgICBiaW5kSGFuZGxlcnMoaW5pdEV2ZW50LCBjdHguJGxpc3RlbmVycywgZWRpdG9yKTtcbiAgICBjdHguaW5pdGlhbGl6ZWQgPSB0cnVlO1xufTtcbnZhciB1bmlxdWUgPSAwO1xudmFyIHV1aWQgPSBmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKTtcbiAgICB1bmlxdWUrKztcbiAgICByZXR1cm4gcHJlZml4ICsgJ18nICsgcmFuZG9tICsgdW5pcXVlICsgU3RyaW5nKHRpbWUpO1xufTtcbnZhciBpc1RleHRhcmVhID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RleHRhcmVhJztcbn07XG52YXIgbm9ybWFsaXplUGx1Z2luQXJyYXkgPSBmdW5jdGlvbiAocGx1Z2lucykge1xuICAgIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ3VuZGVmaW5lZCcgfHwgcGx1Z2lucyA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwbHVnaW5zKSA/IHBsdWdpbnMgOiBwbHVnaW5zLnNwbGl0KCcgJyk7XG59O1xudmFyIG1lcmdlUGx1Z2lucyA9IGZ1bmN0aW9uIChpbml0UGx1Z2lucywgaW5wdXRQbHVnaW5zKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVBsdWdpbkFycmF5KGluaXRQbHVnaW5zKS5jb25jYXQobm9ybWFsaXplUGx1Z2luQXJyYXkoaW5wdXRQbHVnaW5zKSk7XG59O1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkOyB9O1xuZXhwb3J0IHsgYmluZEhhbmRsZXJzLCBiaW5kTW9kZWxIYW5kbGVycywgaW5pdEVkaXRvciwgaXNWYWxpZEtleSwgdXVpZCwgaXNUZXh0YXJlYSwgbWVyZ2VQbHVnaW5zLCBpc051bGxPclVuZGVmaW5lZCB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTgtcHJlc2VudCwgRXBob3gsIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMiBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IFNjcmlwdExvYWRlciB9IGZyb20gJy4uL1NjcmlwdExvYWRlcic7XG5pbXBvcnQgeyBnZXRUaW55bWNlIH0gZnJvbSAnLi4vVGlueU1DRSc7XG5pbXBvcnQgeyBpbml0RWRpdG9yLCBpc1RleHRhcmVhLCBtZXJnZVBsdWdpbnMsIHV1aWQsIGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAnLi4vVXRpbHMnO1xuaW1wb3J0IHsgZWRpdG9yUHJvcHMgfSBmcm9tICcuL0VkaXRvclByb3BUeXBlcyc7XG52YXIgcmVuZGVySW5saW5lID0gZnVuY3Rpb24gKGgsIGlkLCB0YWdOYW1lKSB7XG4gICAgcmV0dXJuIGgodGFnTmFtZSA/IHRhZ05hbWUgOiAnZGl2Jywge1xuICAgICAgICBhdHRyczogeyBpZDogaWQgfVxuICAgIH0pO1xufTtcbnZhciByZW5kZXJJZnJhbWUgPSBmdW5jdGlvbiAoaCwgaWQpIHtcbiAgICByZXR1cm4gaCgndGV4dGFyZWEnLCB7XG4gICAgICAgIGF0dHJzOiB7IGlkOiBpZCB9LFxuICAgICAgICBzdHlsZTogeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9XG4gICAgfSk7XG59O1xudmFyIGluaXRpYWxpc2UgPSBmdW5jdGlvbiAoY3R4KSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpbmFsSW5pdCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjdHguJHByb3BzLmluaXQpLCB7IHJlYWRvbmx5OiBjdHguJHByb3BzLmRpc2FibGVkLCBzZWxlY3RvcjogXCIjXCIgKyBjdHguZWxlbWVudElkLCBwbHVnaW5zOiBtZXJnZVBsdWdpbnMoY3R4LiRwcm9wcy5pbml0ICYmIGN0eC4kcHJvcHMuaW5pdC5wbHVnaW5zLCBjdHguJHByb3BzLnBsdWdpbnMpLCB0b29sYmFyOiBjdHguJHByb3BzLnRvb2xiYXIgfHwgKGN0eC4kcHJvcHMuaW5pdCAmJiBjdHguJHByb3BzLmluaXQudG9vbGJhciksIGlubGluZTogY3R4LmlubGluZUVkaXRvciwgc2V0dXA6IGZ1bmN0aW9uIChlZGl0b3IpIHtcbiAgICAgICAgICAgIGN0eC5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICAgICAgICBlZGl0b3Iub24oJ2luaXQnLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gaW5pdEVkaXRvcihlLCBjdHgsIGVkaXRvcik7IH0pO1xuICAgICAgICAgICAgaWYgKGN0eC4kcHJvcHMuaW5pdCAmJiB0eXBlb2YgY3R4LiRwcm9wcy5pbml0LnNldHVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY3R4LiRwcm9wcy5pbml0LnNldHVwKGVkaXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gfSk7XG4gICAgaWYgKGlzVGV4dGFyZWEoY3R4LmVsZW1lbnQpKSB7XG4gICAgICAgIGN0eC5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICB9XG4gICAgZ2V0VGlueW1jZSgpLmluaXQoZmluYWxJbml0KTtcbn07IH07XG5leHBvcnQgdmFyIEVkaXRvciA9IHtcbiAgICBwcm9wczogZWRpdG9yUHJvcHMsXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRJZCA9IHRoaXMuJHByb3BzLmlkIHx8IHV1aWQoJ3RpbnktdnVlJyk7XG4gICAgICAgIHRoaXMuaW5saW5lRWRpdG9yID0gKHRoaXMuJHByb3BzLmluaXQgJiYgdGhpcy4kcHJvcHMuaW5pdC5pbmxpbmUpIHx8IHRoaXMuJHByb3BzLmlubGluZTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgZGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLnNldE1vZGUodGhpcy5kaXNhYmxlZCA/ICdyZWFkb25seScgOiAnZGVzaWduJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy4kZWw7XG4gICAgICAgIGlmIChnZXRUaW55bWNlKCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGluaXRpYWxpc2UodGhpcykoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBjaGFubmVsID0gdGhpcy4kcHJvcHMuY2xvdWRDaGFubmVsID8gdGhpcy4kcHJvcHMuY2xvdWRDaGFubmVsIDogJzUnO1xuICAgICAgICAgICAgdmFyIGFwaUtleSA9IHRoaXMuJHByb3BzLmFwaUtleSA/IHRoaXMuJHByb3BzLmFwaUtleSA6ICduby1hcGkta2V5JztcbiAgICAgICAgICAgIHZhciBzY3JpcHRTcmMgPSBpc051bGxPclVuZGVmaW5lZCh0aGlzLiRwcm9wcy50aW55bWNlU2NyaXB0U3JjKSA/XG4gICAgICAgICAgICAgICAgXCJodHRwczovL2Nkbi50aW55LmNsb3VkLzEvXCIgKyBhcGlLZXkgKyBcIi90aW55bWNlL1wiICsgY2hhbm5lbCArIFwiL3RpbnltY2UubWluLmpzXCIgOlxuICAgICAgICAgICAgICAgIHRoaXMuJHByb3BzLnRpbnltY2VTY3JpcHRTcmM7XG4gICAgICAgICAgICBTY3JpcHRMb2FkZXIubG9hZCh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudCwgc2NyaXB0U3JjLCBpbml0aWFsaXNlKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBnZXRUaW55bWNlKCkucmVtb3ZlKHRoaXMuZWRpdG9yKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGVhY3RpdmF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoIXRoaXMuaW5saW5lRWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlID0gdGhpcy5lZGl0b3IuZ2V0Q29udGVudCgpO1xuICAgICAgICAgICAgKF9hID0gZ2V0VGlueW1jZSgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlKHRoaXMuZWRpdG9yKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWN0aXZhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbmxpbmVFZGl0b3IgJiYgdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgaW5pdGlhbGlzZSh0aGlzKSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlubGluZUVkaXRvciA/IHJlbmRlcklubGluZShoLCB0aGlzLmVsZW1lbnRJZCwgdGhpcy4kcHJvcHMudGFnTmFtZSkgOiByZW5kZXJJZnJhbWUoaCwgdGhpcy5lbGVtZW50SWQpO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5leHBvcnQgdmFyIGVkaXRvclByb3BzID0ge1xuICAgIGFwaUtleTogU3RyaW5nLFxuICAgIGNsb3VkQ2hhbm5lbDogU3RyaW5nLFxuICAgIGlkOiBTdHJpbmcsXG4gICAgaW5pdDogT2JqZWN0LFxuICAgIGluaXRpYWxWYWx1ZTogU3RyaW5nLFxuICAgIGlubGluZTogQm9vbGVhbixcbiAgICBtb2RlbEV2ZW50czogW1N0cmluZywgQXJyYXldLFxuICAgIHBsdWdpbnM6IFtTdHJpbmcsIEFycmF5XSxcbiAgICB0YWdOYW1lOiBTdHJpbmcsXG4gICAgdG9vbGJhcjogW1N0cmluZywgQXJyYXldLFxuICAgIHZhbHVlOiBTdHJpbmcsXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgdGlueW1jZVNjcmlwdFNyYzogU3RyaW5nLFxuICAgIG91dHB1dEZvcm1hdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuIHByb3AgPT09ICdodG1sJyB8fCBwcm9wID09PSAndGV4dCc7IH1cbiAgICB9LFxufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIEVwaG94LCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cbmltcG9ydCB7IEVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9FZGl0b3InO1xuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJicmVhZC1lZGl0IHJvd1wiIDpjbGFzcz1cInsnd3JpdGluZy1ydGwnOiBpc0xvY2FsZVJ0bH1cIj5cblxuICAgICAgICA8IS0tIExvb3AgY29sdW1ucyAtLT5cbiAgICAgICAgPGRpdiB2LWZvcj1cIihjb2x1bW4sIGNsYXNzSWQpIGluIG1hbmlmZXN0XCIgOmtleT1cImNsYXNzSWRcIlxuICAgICAgICAgICAgIDpjbGFzcz1cImNsYXNzSWRcIj5cblxuICAgICAgICAgICAgPCEtLSBMb29wIGdyb3VwcyAtLT5cbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoZmllbGRzLCBnVGl0bGUpIGluIGNvbHVtblwiIDprZXk9XCJnVGl0bGVcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmQgbWItNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImdUaXRsZVswXSAhPT0gJ18nXCIgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtYi0wXCI+e3sgZ1RpdGxlIH19PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBMb29wIGZpZWxkcyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoZmllbGQsIGZpKSBpbiBmaWVsZHNcIiA6a2V5PVwiZmlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpZWxkIHAtMSBmb3JtLWdyb3VwXCIgOmNsYXNzPVwiZmllbGQud2lkdGhcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUmVwZWF0YWJsZSBmaWVsZCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpZWxkLnJlcGVhdHMgPiAxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkcmFnZ2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsaXN0PVwidmFsdWVzW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdob3N0LWNsYXNzPVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlPVwiLmRuZC1oYW5kbGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiIHYtZm9yPVwiKHZhbHVlLCB2aSkgaW4gdmFsdWVzW2ZpZWxkLm5hbWVdXCIgOmtleT1cImZpZWxkLmlkK3ZpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgZmxleC1maWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZmllbGQuaWQrdmlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpZWxkLmxhYmVsIH19ICh7eyB2aSArIDEgfX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiZmllbGQuY29tcG9uZW50XCIgOmlkPVwiZmllbGQuaWQrdmlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiZmllbGQubmFtZSArICdbJyt2aSsnXSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppbnZhbGlkPVwiISFlcnJvcnNbZmllbGQubmFtZV1cIiB2LW1vZGVsPVwidmFsdWVzW2ZpZWxkLm5hbWVdW3ZpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiZmllbGQubGFiZWxcIiA6b3B0aW9ucz1cImZpZWxkLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVwiZmllbGQudmFsaWRhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxvY2FsZT1cImxvY2FsZVwiIDppcy1sb2NhbGUtcnRsPVwiaXNMb2NhbGVSdGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZy10b3A6IDEuNXJlbTtwYWRkaW5nLWlubGluZS1zdGFydDogMS4yNXJlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGRuZC1oYW5kbGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgOnRpdGxlPVwiJHQoJ1Jlb3JkZXInKSArJyAnKyBmaWVsZC5sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYXJyb3dzLWFsdFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgQGNsaWNrPVwicmVtb3ZlUmVwZWF0ZWRGaWVsZChmaWVsZC5uYW1lLCB2aSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cInZhbHVlc1tmaWVsZC5uYW1lXS5sZW5ndGggPT09IDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0aXRsZT1cIiR0KCdSZW1vdmUnKSsnICcrIGZpZWxkLmxhYmVsICsgJyAoJysodmkrMSkrJyknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljaz1cInJlcGVhdEZpZWxkKGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJ2YWx1ZXNbZmllbGQubmFtZV0ubGVuZ3RoID49IGZpZWxkLnJlcGVhdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIDp0aXRsZT1cIiR0KCdBZGQnKSArJyAnKyBmaWVsZC5sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZHJhZ2dhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFNpbmdsZSBmaWVsZCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZpZWxkLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWVsZC5sYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cImZpZWxkLmNvbXBvbmVudFwiIDppZD1cImZpZWxkLmlkXCIgOm5hbWU9XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aW52YWxpZD1cIiEhZXJyb3JzW2ZpZWxkLm5hbWVdXCIgdi1tb2RlbD1cInZhbHVlc1tmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiZmllbGQubGFiZWxcIiA6b3B0aW9ucz1cImZpZWxkLm9wdGlvbnNcIiA6dmFsaWRhdGlvbj1cImZpZWxkLnZhbGlkYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsb2NhbGU9XCJsb2NhbGVcIiA6aXMtbG9jYWxlLXJ0bD1cImlzTG9jYWxlUnRsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvY29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgdi1pZj1cImZpZWxkLmRlc2NyaXB0aW9uXCIgOmlkPVwiZmllbGQuaWQrICdIZWxwJ1wiIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpZWxkLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJlcnJvcnNbZmllbGQubmFtZV1cIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi10ZXh0PVwiZXJyb3JzW2ZpZWxkLm5hbWVdWzBdXCI+PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC9Mb29wIGZpZWxkcyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gL0xvb3AgZ3JvdXBzIC0tPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIC9Mb29wIGNvbHVtbnMgLS0+XG5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJCcmVhZEVkaXRcIixcbiAgICBwcm9wczoge1xuICAgICAgICBsb2NhbGU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB9LFxuICAgICAgICBtYW5pZmVzdDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIH0sXG4gICAgICAgIGJyZWFkYWJsZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIH0sXG4gICAgICAgIG9sZDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZXM6IHt9LFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGxvYWRWYWx1ZXMoKSB7XG4gICAgICAgICAgICBsZXQgdm0gPSB0aGlzO1xuXG4gICAgICAgICAgICB2bS5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnJlcGVhdHMgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIFZ1ZS5zZXQodm0udmFsdWVzLCBmaWVsZC5uYW1lLCB2bS5vbGRbZmllbGQubmFtZV0gfHwgdm0uYnJlYWRhYmxlW2ZpZWxkLm5hbWVdIHx8IFtmaWVsZC5nZXREZWZhdWx0KCldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBWdWUuc2V0KHZtLnZhbHVlcywgZmllbGQubmFtZSwgdm0ub2xkW2ZpZWxkLm5hbWVdIHx8IHZtLmJyZWFkYWJsZVtmaWVsZC5uYW1lXSB8fCBmaWVsZC5nZXREZWZhdWx0KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlcGVhdEZpZWxkKGZpZWxkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1tmaWVsZC5uYW1lXS5wdXNoKGZpZWxkLmdldERlZmF1bHQoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlUmVwZWF0ZWRGaWVsZChmaWVsZE5hbWUsIGkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2ZpZWxkTmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBmaWVsZHMoKSB7XG4gICAgICAgICAgICBsZXQgdm0gPSB0aGlzO1xuXG4gICAgICAgICAgICBsZXQgZmllbGRzID0gW107XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHZtLm1hbmlmZXN0KS5mb3JFYWNoKChjb2wsIGNpKSA9PiB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXModm0ubWFuaWZlc3RbY29sXSkuZm9yRWFjaCgoZ3JvdXAsIGdpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZtLm1hbmlmZXN0W2NvbF1bZ3JvdXBdLmZvckVhY2goZiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmLmdldERlZmF1bHQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmLmRlZmF1bHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGYuZGVmYXVsdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZi5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKGYpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmllbGRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzTG9jYWxlUnRsKCkge1xuICAgICAgICAgICAgcmV0dXJuIFsnYXInLCAnaGUnLCAnaXcnXS5pbmRleE9mKHRoaXMubG9jYWxlKSA+IC0xO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRWYWx1ZXMoKTtcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Nhc3MvdmFyaWFibGVzXCI7XG5cbi5icmVhZC1lZGl0IDo6di1kZWVwIHtcbiAgICBpbnB1dCxcbiAgICBzZWxlY3QsXG4gICAgdGV4dGFyZWEge1xuICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICB9XG59XG5cbi5icmVhZC1lZGl0LndyaXRpbmctcnRsIDo6di1kZWVwIHtcbiAgICBpbnB1dCxcbiAgICBzZWxlY3QsXG4gICAgdGV4dGFyZWEge1xuICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICB9XG59XG5cbi5maWVsZCB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0PlxuICAgIGxldCBKYXNtaW5lQmFzZUZpZWxkID0ge1xuICAgICAgICBuYW1lOiBcIkJhc2VGaWVsZFwiLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaW52YWxpZDoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBsb2NhbGU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzTG9jYWxlUnRsOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmllbGRfdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICAndmFsdWUnKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRfdmFsdWUgPSB2YWw7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnZmllbGRfdmFsdWUnKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5maWVsZF92YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRvbignJylcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgd2luZG93Lkphc21pbmVCYXNlRmllbGQgPSBKYXNtaW5lQmFzZUZpZWxkO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgSmFzbWluZUJhc2VGaWVsZDtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgOm5hbWU9XCJuYW1lXCIgdi1tb2RlbD1cImZpZWxkX3ZhbHVlXCI+XG4gICAgICAgIDx2dWVqcy1kYXRlcGlja2VyIHYtbW9kZWw9XCJkYXRlXCIgOmlkPVwiaWRcIiA6Zm9ybWF0PVwiZm9ybWF0XCIgQGlucHV0PVwidXBkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJkZC5tbS55eXl5XCIgOmxhbmd1YWdlPVwiZExvY2FsZXNbJGkxOG4ubG9jYWxlXSB8fCBkTG9jYWxlcy5lblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpyZXF1aXJlZD1cInZhbGlkYXRpb24uaW5kZXhPZigncmVxdWlyZWQnKSA+IC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmlucHV0LWNsYXNzPVwieydmb3JtLWNvbnRyb2wnOiAxLCAnaXMtaW52YWxpZCc6IGludmFsaWR9XCI+PC92dWVqcy1kYXRlcGlja2VyPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7ZW4sIGhlfSBmcm9tICd2dWVqcy1kYXRlcGlja2VyL2Rpc3QvbG9jYWxlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiRGF0ZUZpZWxkXCIsXG4gICAgZXh0ZW5kczogSmFzbWluZUJhc2VGaWVsZCxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3B0czogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgfSwgdGhpcy5vcHRpb25zKSxcblxuICAgICAgICAgICAgZGF0ZTogbnVsbCxcbiAgICAgICAgICAgIGRMb2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgZW4sIGhlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkX3ZhbHVlID0gdGhpcy5kYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTkpLnJlcGxhY2UoJ1QnLCAnICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZvcm1hdChkKSB7XG4gICAgICAgICAgICBsZXQgZGF5ID0gZC5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICAgICAgbGV0IG1vbnRoID0gKGQuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgICAgIGxldCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0uJHt5ZWFyfWA7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmZpZWxkX3ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSh0aGlzLmZpZWxkX3ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZUZpbGVcIlxuICAgICAgICAgICAgICAgID5DaG9vc2UgZmlsZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpuYW1lPVwibmFtZVwiIHYtbW9kZWw9XCJmaWVsZF92YWx1ZVwiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHYtaWY9XCJzaG93Rm1cIiBjbGFzcz1cIm1vZGFsIGZhZGUgc2hvdyBkLWJsb2NrXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC14bFwiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCIgc3R5bGU9XCJtaW4taGVpZ2h0OiA4MHZoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+RmlsZSBNYW5hZ2VyIHwgQ2hvb3NlIGltYWdlIGZvciB7eyBsYWJlbCB9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgQGNsaWNrPVwic2hvd0ZtID0gZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpbGUtbWFuYWdlci13cmFwcGVyIHJlZj1cImZtd1wiPjwvZmlsZS1tYW5hZ2VyLXdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJzaG93Rm1cIiBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wIGZhZGUgc2hvd1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiSW1hZ2VGaWVsZFwiLFxuICAgICAgICBleHRlbmRzOiBKYXNtaW5lQmFzZUZpZWxkLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9wdHM6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgICAgICAgICAgICB9LCB0aGlzLm9wdGlvbnMpLFxuXG4gICAgICAgICAgICAgICAgc2hvd0ZtOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgY2hhbmdlRmlsZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dGbSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBWdWUubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZm0gPSB0aGlzLiRyZWZzLmZtdy4kcmVmcy5mbTtcbiAgICAgICAgICAgICAgICAgICAgZm0uJHN0b3JlLmNvbW1pdCgnZm0vc2V0RmlsZUNhbGxCYWNrJywgZnVuY3Rpb24gKGZpbGVVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlVXJsLnN0YXJ0c1dpdGgoZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVVcmwgPSBmaWxlVXJsLnJlcGxhY2UoZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZpZWxkX3ZhbHVlID0gZmlsZVVybDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uc2hvd0ZtID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge30sXG5cbiAgICAgICAgYmVmb3JlTW91bnQoKSB7XG5cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5wcmV2aWV3IHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgOm5hbWU9XCJuYW1lKydbYWRkcmVzc10nXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7J2lzLWludmFsaWQnOiBpbnZhbGlkfVwiXG4gICAgICAgICAgICAgICByZWY9XCJhZGRyZXNzRWxlbVwiIHYtbW9kZWw9XCJmaWVsZF92YWx1ZS5hZGRyZXNzXCI+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiA6bmFtZT1cIm5hbWUrJ1tsYXRdJ1wiIHYtbW9kZWw9XCJmaWVsZF92YWx1ZS5sYXRcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiA6bmFtZT1cIm5hbWUrJ1tsbmddJ1wiIHYtbW9kZWw9XCJmaWVsZF92YWx1ZS5sbmdcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiai1sb2NhdGlvbi1maWVsZC1tYXAgbXQtM1wiIHJlZj1cIm1hcEVsZW1cIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIkdlb2NvZGluZ0ZpZWxkXCIsXG4gICAgICAgIGV4dGVuZHM6IEphc21pbmVCYXNlRmllbGQsXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9wdHM6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5vcHRpb25zKSxcblxuICAgICAgICAgICAgICAgIGxhdExuZzogbnVsbCxcbiAgICAgICAgICAgICAgICBtYXA6IG51bGwsXG4gICAgICAgICAgICAgICAgbWFya2VyOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBsb2FkR21hcEFwaSgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JHt0aGlzLm9wdHMuYXBpX2tleX0mbGlicmFyaWVzPXBsYWNlc2A7XG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuZ29vZ2xlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHMuc3JjID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICBzLm9ubG9hZCA9IHRoaXMuaW5pdE1hcDtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRNYXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjcmVhdGVNYXJrZXIobG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmICh2bS5tYXJrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdm0ubWFya2VyLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL0NyZWF0ZSBhIG1hcmtlciBhbmQgcGxhY2VkIGl0IG9uIHRoZSBtYXAuXG4gICAgICAgICAgICAgICAgdm0ubWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbWFwOiB2bS5tYXAsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2bS5tYXAucGFuVG8obG9jYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIGxvY2F0aW9uIHRvIGhpZGRlbiBmaWVsZHNcbiAgICAgICAgICAgICAgICB2bS5maWVsZF92YWx1ZS5sYXQgPSBsb2NhdGlvbi5sYXQoKTtcbiAgICAgICAgICAgICAgICB2bS5maWVsZF92YWx1ZS5sbmcgPSBsb2NhdGlvbi5sbmcoKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGluaXRNYXAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZtID0gdGhpcztcbiAgICAgICAgICAgICAgICB2bS5sYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHZtLmZpZWxkX3ZhbHVlLmxhdCwgdm0uZmllbGRfdmFsdWUubG5nKTtcbiAgICAgICAgICAgICAgICB2bS5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHZtLiRyZWZzLm1hcEVsZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiB2bS5sYXRMbmcsXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDJcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxldCBtYXJrZXJMYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHZtLmZpZWxkX3ZhbHVlLmxhdCwgdm0uZmllbGRfdmFsdWUubG5nKTtcbiAgICAgICAgICAgICAgICB2bS5tYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG1hcmtlckxhdExuZyxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiB2bS5tYXAsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2bS5tYXAucGFuVG8obWFya2VyTGF0TG5nKVxuICAgICAgICAgICAgICAgIHZtLm1hcC5zZXRab29tKDEwKTtcblxuICAgICAgICAgICAgICAgIGxldCBhdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShcbiAgICAgICAgICAgICAgICAgICAgLyoqIEB0eXBlIHshSFRNTElucHV0RWxlbWVudH0gKi9cbiAgICAgICAgICAgICAgICAgICAgKHZtLiRyZWZzLmFkZHJlc3NFbGVtKSxcbiAgICAgICAgICAgICAgICAgICAge3R5cGVzOiBbJ2dlb2NvZGUnXX1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlLmFkZExpc3RlbmVyKCdwbGFjZV9jaGFuZ2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGxhY2UgPSBhdXRvY29tcGxldGUuZ2V0UGxhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdm0uZmllbGRfdmFsdWUuYWRkcmVzcyA9IHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgICAgICAgICAgICAgICB2bS5jcmVhdGVNYXJrZXIocGxhY2UuZ2VvbWV0cnkubG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodm0ubWFwLCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvL0RldGVybWluZSB0aGUgbG9jYXRpb24gd2hlcmUgdGhlIHVzZXIgaGFzIGNsaWNrZWQuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IGUubGF0TG5nO1xuICAgICAgICAgICAgICAgICAgICB2bS5jcmVhdGVNYXJrZXIobG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRHbWFwQXBpKCk7XG4gICAgICAgICAgICBpZiAoWydjaGVja2JveCcsICdyYWRpbyddLmluZGV4T2YodGhpcy5vcHRzLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke3RoaXMubmFtZX0gaXMgdXNpbmcgPGlucHV0LWZpZWxkPiwgUGxlYXNlIHVzZSA8JHt0aGlzLm9wdHMudHlwZX0tZmllbGQ+IGluc3RlYWQgb2YgPGlucHV0LWZpZWxkPiBmb3IgJHt0aGlzLm9wdHMudHlwZX0gZmllbGRzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuICAgIC5qLWxvY2F0aW9uLWZpZWxkLW1hcCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3cgZ3JvdXBlZFwiPlxuICAgICAgICA8IS0tIExvb3AgZmllbGRzIC0tPlxuICAgICAgICA8ZGl2IHYtZm9yPVwiKGZpZWxkLCBmaSkgaW4gZmllbGRzXCIgOmtleT1cImZpZWxkLmlkK2ZpXCJcbiAgICAgICAgICAgICBjbGFzcz1cImZpZWxkIHAtNCBmb3JtLWdyb3VwXCIgOmNsYXNzPVwiZmllbGQud2lkdGhcIj5cbiAgICAgICAgICAgIDwhLS0gUmVwZWF0YWJsZSBmaWVsZCAtLT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZmllbGQucmVwZWF0cyA+IDFcIj5cbiAgICAgICAgICAgICAgICA8ZHJhZ2dhYmxlXG4gICAgICAgICAgICAgICAgICAgIDpsaXN0PVwiZmllbGRfdmFsdWVbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICBnaG9zdC1jbGFzcz1cImdob3N0XCJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlPVwiLmRuZC1oYW5kbGVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIiB2LWZvcj1cIih2YWx1ZSwgdmkpIGluIGZpZWxkX3ZhbHVlW2ZpZWxkLm5hbWVdXCIgOmtleT1cImZpZWxkLmlkK3ZpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBmbGV4LWZpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZpZWxkLmlkK3ZpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpZWxkLmxhYmVsIH19ICh7eyB2aSArIDEgfX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cImZpZWxkLmNvbXBvbmVudFwiIDppZD1cImZpZWxkLmlkK3ZpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwibmFtZSArICdbJyArIGZpZWxkLm5hbWUgKyAnXScgKyAnWycrdmkrJ10nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppbnZhbGlkPVwiISFlcnJvcnNbZmllbGQubmFtZV1cIiB2LW1vZGVsPVwiZmllbGRfdmFsdWVbZmllbGQubmFtZV1bdmldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cImZpZWxkLmxhYmVsXCIgOm9wdGlvbnM9XCJmaWVsZC5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVwiZmllbGQudmFsaWRhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9jYWxlPVwibG9jYWxlXCIgOmlzLWxvY2FsZS1ydGw9XCJpc0xvY2FsZVJ0bFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvY29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLXRvcDogMS41cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OiAxLjI1cmVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBkbmQtaGFuZGxlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgOnRpdGxlPVwiJHQoJ1Jlb3JkZXInKSArJyAnKyBmaWVsZC5sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1hcnJvd3MtYWx0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgQGNsaWNrPVwicmVtb3ZlUmVwZWF0ZWRGaWVsZChmaWVsZC5uYW1lLCB2aSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGRfdmFsdWVbZmllbGQubmFtZV0ubGVuZ3RoID09PSAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwiJHQoJ1JlbW92ZScpKycgJysgZmllbGQubGFiZWwgKyAnICgnKyh2aSsxKSsnKSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwicmVwZWF0RmllbGQoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGRfdmFsdWVbZmllbGQubmFtZV0ubGVuZ3RoID49IGZpZWxkLnJlcGVhdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgOnRpdGxlPVwiJHQoJ0FkZCcpICsnICcrIGZpZWxkLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2RyYWdnYWJsZT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDwhLS0gU2luZ2xlIGZpZWxkIC0tPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZpZWxkLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGZpZWxkLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cImZpZWxkLmNvbXBvbmVudFwiIDppZD1cImZpZWxkLmlkXCIgOm5hbWU9XCJuYW1lICsgJ1snICsgZmllbGQubmFtZSArICddJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6aW52YWxpZD1cIiEhZXJyb3JzW2ZpZWxkLm5hbWVdXCIgdi1tb2RlbD1cImZpZWxkX3ZhbHVlW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cImZpZWxkLmxhYmVsXCIgOm9wdGlvbnM9XCJmaWVsZC5vcHRpb25zXCIgOnZhbGlkYXRpb249XCJmaWVsZC52YWxpZGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsb2NhbGU9XCJsb2NhbGVcIiA6aXMtbG9jYWxlLXJ0bD1cImlzTG9jYWxlUnRsXCJcbiAgICAgICAgICAgICAgICA+PC9jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgPHNtYWxsIHYtaWY9XCJmaWVsZC5kZXNjcmlwdGlvblwiIDppZD1cImZpZWxkLmlkKyAnSGVscCdcIiBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGZpZWxkLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZXJyb3JzW2ZpZWxkLm5hbWVdXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgdi10ZXh0PVwiZXJyb3JzW2ZpZWxkLm5hbWVdWzBdXCI+PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gL0xvb3AgZmllbGRzIC0tPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiR3JvdXBlZEZpZWxkXCIsXG4gICAgICAgIGV4dGVuZHM6IEphc21pbmVCYXNlRmllbGQsXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9wdHM6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IFtdLFxuICAgICAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGxvYWRWYWx1ZXMoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZtID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHZtLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnJlcGVhdHMgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1Z1ZS5zZXQodm0udmFsdWVzLCBmaWVsZC5uYW1lLCB2bS5vbGRbZmllbGQubmFtZV0gfHwgdm0uYnJlYWRhYmxlW2ZpZWxkLm5hbWVdIHx8IFtmaWVsZC5nZXREZWZhdWx0KCldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZ1ZS5zZXQodm0uZmllbGRfdmFsdWUsIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92bS5vbGRbZmllbGQubmFtZV0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5maWVsZF92YWx1ZVtmaWVsZC5uYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IFtmaWVsZC5nZXREZWZhdWx0KCldXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9WdWUuc2V0KHZtLnZhbHVlcywgZmllbGQubmFtZSwgdm0ub2xkW2ZpZWxkLm5hbWVdIHx8IHZtLmJyZWFkYWJsZVtmaWVsZC5uYW1lXSB8fCBmaWVsZC5nZXREZWZhdWx0KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXBlYXRGaWVsZChmaWVsZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRfdmFsdWVbZmllbGQubmFtZV0ucHVzaChmaWVsZC5nZXREZWZhdWx0KCkpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVtb3ZlUmVwZWF0ZWRGaWVsZChmaWVsZE5hbWUsIGkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkX3ZhbHVlW2ZpZWxkTmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgZmllbGRzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdHMuZmllbGRzLm1hcChmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZi5nZXREZWZhdWx0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmLmRlZmF1bHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZi5kZWZhdWx0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZi5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGVycm9ycygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZU1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkVmFsdWVzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5mb3JtLXJvdy5ncm91cGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjRmZjtcbiAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgOm5hbWU9XCJuYW1lKydbd10nXCIgdi1tb2RlbD1cImZpZWxkX3ZhbHVlLndcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiA6bmFtZT1cIm5hbWUrJ1toXSdcIiB2LW1vZGVsPVwiZmllbGRfdmFsdWUuaFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIDpuYW1lPVwibmFtZSsnW3NyY10nXCIgdi1tb2RlbD1cImZpZWxkX3ZhbHVlLnNyY1wiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2wgdy1hdXRvIGQtaW5saW5lLWJsb2NrIHAtMlwiPlxuICAgICAgICAgICAgPGltZyA6c3JjPVwiZmllbGRfdmFsdWUuc3JjXCIgYWx0PVwicHJldmlld1wiIGNsYXNzPVwicHJldmlld1wiIEBjbGljaz1cImNoYW5nZUltYWdlXCIgcmVmPVwicHJldmlld1wiPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtdC00XCI+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImlkKydfYWx0J1wiPlxuICAgICAgICAgICAgICAgIHt7IGxhYmVsIH19IEFsdFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgOm5hbWU9XCJuYW1lKydbYWx0XSdcIiB2LW1vZGVsPVwiZmllbGRfdmFsdWUuYWx0XCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgdi1pZj1cInNob3dGbVwiIGNsYXNzPVwibW9kYWwgZmFkZSBzaG93IGQtYmxvY2tcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLXhsXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDgwdmhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5GaWxlIE1hbmFnZXIgfCBDaG9vc2UgaW1hZ2UgZm9yIHt7IGxhYmVsIH19PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBAY2xpY2s9XCJzaG93Rm0gPSBmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlsZS1tYW5hZ2VyLXdyYXBwZXIgcmVmPVwiZm13XCI+PC9maWxlLW1hbmFnZXItd3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1pZj1cInNob3dGbVwiIGNsYXNzPVwibW9kYWwtYmFja2Ryb3AgZmFkZSBzaG93XCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJJbWFnZUZpZWxkXCIsXG4gICAgICAgIGV4dGVuZHM6IEphc21pbmVCYXNlRmllbGQsXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3B0czogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucyksXG5cbiAgICAgICAgICAgICAgICBzaG93Rm06IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBjaGFuZ2VJbWFnZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dGbSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBWdWUubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZm0gPSB0aGlzLiRyZWZzLmZtdy4kcmVmcy5mbTtcbiAgICAgICAgICAgICAgICAgICAgZm0uJHN0b3JlLmNvbW1pdCgnZm0vc2V0RmlsZUNhbGxCYWNrJywgZnVuY3Rpb24gKGZpbGVVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG86IGlmIG5vdGUgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGVVcmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmZtID0gZm07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlVXJsLnN0YXJ0c1dpdGgoZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVVcmwgPSBmaWxlVXJsLnJlcGxhY2UoZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZpZWxkX3ZhbHVlLnNyYyA9IGZpbGVVcmw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnNob3dGbSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBWdWUubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5maWVsZF92YWx1ZS53ID0gdm0uJHJlZnMucHJldmlldy5uYXR1cmFsV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZpZWxkX3ZhbHVlLmggPSB2bS4kcmVmcy5wcmV2aWV3Lm5hdHVyYWxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5maWVsZF92YWx1ZS5wYXRoID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge30sXG5cbiAgICAgICAgYmVmb3JlTW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkX3ZhbHVlLnNyYyA9IHRoaXMuZmllbGRfdmFsdWUuc3JjIHx8IGBodHRwczovL3BsYWNlaG9sZC5pdC8xNTB4MTUwYDtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5wcmV2aWV3IHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIH1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGlucHV0IDp0eXBlPVwib3B0cy50eXBlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6Y2xhc3M9XCJ7J2lzLWludmFsaWQnOiBpbnZhbGlkfVwiXG4gICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIm9wdHMucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICA6cGF0dGVybj1cIm9wdHMucGF0dGVyblwiXG4gICAgICAgICAgIDphdXRvZm9jdXM9XCJvcHRzLmF1dG9mb2N1c1wiXG4gICAgICAgICAgIDphdXRvY29tcGxldGU9XCJvcHRzLmF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgIDpzdGVwPVwib3B0cy5zdGVwXCJcbiAgICAgICAgICAgOm1heD1cIm9wdHMubWF4XCJcbiAgICAgICAgICAgOm1pbj1cIm9wdHMubWluXCJcbiAgICAgICAgICAgOnJlYWRvbmx5PVwib3B0cy5yZWFkb25seVwiXG4gICAgICAgICAgIDpkaXI9XCJvcHRzLmRpclwiXG4gICAgICAgICAgIDpyZXF1aXJlZD1cInZhbGlkYXRpb24uaW5kZXhPZigncmVxdWlyZWQnKSA+IC0xXCJcbiAgICAgICAgICAgOmlkPVwiaWRcIiA6bmFtZT1cIm5hbWVcIiB2LW1vZGVsPVwiZmllbGRfdmFsdWVcIj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIklucHV0RmllbGRcIixcbiAgICAgICAgZXh0ZW5kczogSmFzbWluZUJhc2VGaWVsZCxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3B0czogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB9LCB0aGlzLm9wdGlvbnMpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgaWYgKFsnY2hlY2tib3gnLCAncmFkaW8nXS5pbmRleE9mKHRoaXMub3B0cy50eXBlKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHt0aGlzLm5hbWV9IGlzIHVzaW5nIDxpbnB1dC1maWVsZD4sIFBsZWFzZSB1c2UgPCR7dGhpcy5vcHRzLnR5cGV9LWZpZWxkPiBpbnN0ZWFkIG9mIDxpbnB1dC1maWVsZD4gZm9yICR7dGhpcy5vcHRzLnR5cGV9IGZpZWxkc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIDpjbGFzcz1cInsnaXMtaW52YWxpZCc6IGludmFsaWR9XCJcbiAgICAgICAgICAgIDptdWx0aXBsZT1cIm9wdHMubXVsdGlwbGVcIlxuICAgICAgICAgICAgOnJlYWRvbmx5PVwib3B0cy5yZWFkb25seVwiXG4gICAgICAgICAgICA6cmVxdWlyZWQ9XCJ2YWxpZGF0aW9uLmluZGV4T2YoJ3JlcXVpcmVkJykgPiAtMVwiXG4gICAgICAgICAgICA6aWQ9XCJpZFwiIDpuYW1lPVwibmFtZVwiIHYtbW9kZWw9XCJmaWVsZF92YWx1ZVwiPlxuICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKG9wdGlvbiwgdmFsKSBpbiBvcHRzLm9wdGlvbnNcIiA6dmFsdWU9XCJ2YWxcIj5cbiAgICAgICAgICAgIHt7IG9wdGlvbiB9fVxuICAgICAgICA8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIlNlbGVjdEZpZWxkXCIsXG4gICAgICAgIGV4dGVuZHM6IEphc21pbmVCYXNlRmllbGQsXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9wdHM6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgICAgICAgICAgICB9LCB0aGlzLm9wdGlvbnMpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgaWYgKFsnY2hlY2tib3gnLCAncmFkaW8nXS5pbmRleE9mKHRoaXMub3B0cy50eXBlKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHt0aGlzLm5hbWV9IGlzIHVzaW5nIDxpbnB1dC1maWVsZD4sIFBsZWFzZSB1c2UgPCR7dGhpcy5vcHRzLnR5cGV9LWZpZWxkPiBpbnN0ZWFkIG9mIDxpbnB1dC1maWVsZD4gZm9yICR7dGhpcy5vcHRzLnR5cGV9IGZpZWxkc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgOmNsYXNzPVwieydpcy1pbnZhbGlkJzogaW52YWxpZH1cIlxuICAgICAgICAgICAgICA6cm93cz1cIm9wdHMucm93c1wiXG4gICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIm9wdHMucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICA6YXV0b2ZvY3VzPVwib3B0cy5hdXRvZm9jdXNcIlxuICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJvcHRzLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgOmRpcj1cIm9wdHMuZGlyXCJcbiAgICAgICAgICAgICAgOnJlcXVpcmVkPVwidmFsaWRhdGlvbi5pbmRleE9mKCdyZXF1aXJlZCcpID4gLTFcIlxuICAgICAgICAgICAgICA6aWQ9XCJpZFwiIDpuYW1lPVwibmFtZVwiIHYtbW9kZWw9XCJmaWVsZF92YWx1ZVwiPjwvdGV4dGFyZWE+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJUZXh0YXJlYUZpZWxkXCIsXG4gICAgICAgIGV4dGVuZHM6IEphc21pbmVCYXNlRmllbGQsXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9wdHM6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICByb3dzOiA1LFxuICAgICAgICAgICAgICAgIH0sIHRoaXMub3B0aW9ucyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG5cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgOmlkPVwiaWRcIiA6bmFtZT1cIm5hbWVcIiB2LW1vZGVsPVwiZmllbGRfdmFsdWVcIj5cbiAgICAgICAgPGVkaXRvciA6aW5pdD1cImNvbmZpZ1wiIHYtbW9kZWw9XCJmaWVsZF92YWx1ZVwiPjwvZWRpdG9yPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiV3lzaXd5Z0ZpZWxkXCIsXG4gICAgICAgIGV4dGVuZHM6IEphc21pbmVCYXNlRmllbGQsXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9wdHM6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXSxcbiAgICAgICAgICAgICAgICB9LCB0aGlzLm9wdGlvbnMpLFxuXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBjb25maWcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIG1lbnViYXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAvL2xhbmd1YWdlOiAnaGVfSUwnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb25hbGl0eTogdGhpcy5pc0xvY2FsZVJ0bCA/ICdydGwnIDogJ2x0cicsXG4gICAgICAgICAgICAgICAgICAgIC8vZmlsZV9waWNrZXJfY2FsbGJhY2s6XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6ICdsaW5rLCB0YWJsZSwgY29kZSwgbGlzdHMsIGltYWdlLCBtZWRpYScsXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICd1bmRvIHJlZG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnRzZWxlY3QgZm9udHNpemVzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0eWxlc2VsZWN0IGJvbGQgaXRhbGljIHVuZGVybGluZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZm9yZWNvbG9yIGJhY2tjb2xvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2J1bGxpc3QgbnVtbGlzdCBvdXRkZW50IGluZGVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGluayB0YWJsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaW1hZ2UgbWVkaWEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NvZGUnLFxuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJyB8ICcpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiIDpjbGFzcz1cIntzaG93OiBvcGVuZWR9XCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgOmNsYXNzPVwiYnRuQ2xhc3NcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgOmFyaWEtZXhwYW5kZWQ9XCJvcGVuZWQgPyAndHJ1ZScgOiAnZmFsc2UnXCIgQGNsaWNrPVwib3BlbmVkID0gIW9wZW5lZFwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImJ0blwiPjwvc2xvdD5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgOmNsYXNzPVwie3Nob3c6IG9wZW5lZH1cIj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJkcm9wZG93blwiPjwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJEcm9wZG93blwiLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgYnRuQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGZpbGUtbWFuYWdlciByZWY9XCJmbVwiIDpzZXR0aW5ncz1cInNldHRpbmdzXCI+PC9maWxlLW1hbmFnZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJGaWxlTWFuYWdlcldyYXBwZXJcIixcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3dpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlci10b2tlbicpfWAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJhc2VVcmw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5kYXRhc2V0LmZtVXJsLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dzQ29uZmlnOiAyLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG92ZXJ3cml0ZSBjb25maWdcbiAgICAgICAgICAgICAgICAgICAgLy9sYW5nOiAnZGUnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBsYW5ndWFnZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLmZtLiRzdG9yZS5jb21taXQoYGZtL2xlZnQvc2V0Vmlld2AsICdncmlkJyk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoNCBtYi0wXCIgdi10ZXh0PVwiJHQoJ1JlZGlyZWN0aW9ucycpXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImV4cG9ydFVybFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWRvd25sb2FkXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ0V4cG9ydCcpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cImltcG9ydFJlZGlyZWN0aW9uc1wiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXVwbG9hZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdJbXBvcnQnKSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihyLGkpIGluIHJlZGlyZWN0aW9uc1wiIDprZXk9XCJyLmlkXCIgY2xhc3M9XCJyZWRpcmVjdGlvbi1pdGVtIHB4LTEgcHQtMyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwici1pZFwiIHYtdGV4dD1cInIuaWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWZpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcHgtMiBjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCInZnJvbV8nK3IuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnRnJvbSAob2xkIHVybCknKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIDppZD1cIidmcm9tXycrci5pZFwiIHYtbW9kZWw9XCJyLmZyb21cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBweC0yIGNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cIid0b18nK3IuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnVG8gKG5ldyB1cmwpJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiA6aWQ9XCIndG9fJytyLmlkXCIgdi1tb2RlbD1cInIudG9cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBweC0yIGZsZXgtZmlsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCIncGVybWFuZW50Xycrci5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdUeXBlJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IDppZD1cIidwZXJtYW5lbnRfJytyLmlkXCIgdi1tb2RlbD1cInIucGVybWFuZW50XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cImZhbHNlXCI+MzAyICh7eyAkdCgnVGVtcG9yYXJ5JykgfX0pPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJ0cnVlXCI+MzAxICh7eyAkdCgnUGVybWFuZW50JykgfX0pPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIDppZD1cIidyZWdleF8nK3IuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwici5yZWdleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgOmZvcj1cIidyZWdleF8nK3IuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ1JlZ3VsYXIgRXhwcmVzc2lvbicpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgOmlkPVwiJ2VuYWJsZWRfJytyLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInIuZW5hYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgOmZvcj1cIidlbmFibGVkXycrci5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnRW5hYmxlZCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIiA6ZGlzYWJsZWQ9XCJyLnJlZ2V4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cImFwcGVuZFF1ZXJ5KHIpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ0NhdGNoIHF1ZXJ5JykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwiaHR0cEFuZFMocilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnSFRUUC9IVFRQUycpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZmlsbFwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwic2F2ZShyKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdTYXZlJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwicmVtb3ZlKHIuaWQsIGkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ0RlbGV0ZScpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaDRcIiB2LXRleHQ9XCIkdCgnTmV3IFJlZGlyZWN0aW9uJylcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVkaXJlY3Rpb24taXRlbSBweC0xIHB0LTMgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInItaWRcIj4tPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1maWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHB4LTIgY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXdfZnJvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdGcm9tIChvbGQgdXJsKScpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXdfZnJvbVwiIHYtbW9kZWw9XCJuZXdSZWRpcmVjdGlvbi5mcm9tXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcHgtMiBjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5ld190b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdUbyAobmV3IHVybCknKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmV3X3RvXCIgdi1tb2RlbD1cIm5ld1JlZGlyZWN0aW9uLnRvXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcHgtMiBmbGV4LWZpbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuZXdfcGVybWFuZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoJ1R5cGUnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJuZXdfcGVybWFuZW50XCIgdi1tb2RlbD1cIm5ld1JlZGlyZWN0aW9uLnBlcm1hbmVudFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiA6dmFsdWU9XCJmYWxzZVwiPjMwMiAoe3sgJHQoJ1RlbXBvcmFyeScpIH19KTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gOnZhbHVlPVwidHJ1ZVwiPjMwMSAoe3sgJHQoJ1Blcm1hbmVudCcpIH19KTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cIm5ld19yZWdleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJuZXdSZWRpcmVjdGlvbi5yZWdleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwibmV3X3JlZ2V4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KCdSZWd1bGFyIEV4cHJlc3Npb24nKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcHgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgaWQ9XCJuZXdfZW5hYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJuZXdSZWRpcmVjdGlvbi5lbmFibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJuZXdfZW5hYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnRW5hYmxlZCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIiA6ZGlzYWJsZWQ9XCJuZXdSZWRpcmVjdGlvbi5yZWdleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJhcHBlbmRRdWVyeShuZXdSZWRpcmVjdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnQ2F0Y2ggcXVlcnknKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJodHRwQW5kUyhuZXdSZWRpcmVjdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnSFRUUC9IVFRQUycpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZmlsbFwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwic2F2ZShuZXdSZWRpcmVjdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdCgnU2F2ZScpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvcm0gOmFjdGlvbj1cImltcG9ydFVybFwiIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZC1ub25lXCIgcmVmPVwiaW1wb3J0Rm9ybVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX3Rva2VuXCIgOnZhbHVlPVwiJGNzcmZfdG9rZW5cIj5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9XCJpbXBvcnRGb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIgbmFtZT1cImZpbGVcIiBhY2NlcHQ9XCIuKmNzdlwiIGNsYXNzPVwiZC1ub25lXCI+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJSZWRpcmVjdGlvbnNcIixcbiAgICBwcm9wczoge1xuICAgICAgICBpbmRleFVybDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVVcmw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB9LFxuICAgICAgICBkZWxldGVVcmw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB9LFxuICAgICAgICBleHBvcnRVcmw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB9LFxuICAgICAgICBpbXBvcnRVcmw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV3UmVkaXJlY3Rpb246IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAnJyxcbiAgICAgICAgICAgICAgICB0bzogJycsXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlZ2V4OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVkaXJlY3Rpb25zOiBbXSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBsb2FkKCkge1xuICAgICAgICAgICAgbGV0IHZtID0gdGhpcztcbiAgICAgICAgICAgIGF4aW9zLmdldCh2bS5pbmRleFVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICB2bS5yZWRpcmVjdGlvbnMgPSByLmRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBzYXZlKHIpIHtcbiAgICAgICAgICAgIGxldCB2bSA9IHRoaXM7XG4gICAgICAgICAgICBheGlvcy5wb3N0KHZtLnNhdmVVcmwsIHIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm0ubmV3UmVkaXJlY3Rpb24uZnJvbSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB2bS5uZXdSZWRpcmVjdGlvbi50byA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB2bS5uZXdSZWRpcmVjdGlvbi5wZXJtYW5lbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2bS5uZXdSZWRpcmVjdGlvbi5yZWdleCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2bS5uZXdSZWRpcmVjdGlvbi5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdm0ubG9hZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZShpZCwgaSkge1xuICAgICAgICAgICAgbGV0IHZtID0gdGhpcztcblxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdm0uJHQoJ3N3YWwuRGVsZXRlJyksXG4gICAgICAgICAgICAgICAgdGV4dDogdm0uJHQoJ3N3YWwuc3VyZScsIHt0aXRsZTogaWR9KSxcbiAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB2bS4kdCgnc3dhbC5DYW5jZWwnKSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogdm0uJHQoJ3N3YWwuWWVzJyksXG4gICAgICAgICAgICB9KS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSh2bS5zYXZlVXJsLCB7cGFyYW1zOiB7aWR9fSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFwcGVuZFF1ZXJ5KHIpIHtcbiAgICAgICAgICAgIGlmIChyLnJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByLnJlZ2V4ID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIHF1ZXJ5IHN0cmluZyBpZiBleGlzdHM7XG4gICAgICAgICAgICByLmZyb20gPSByLmZyb20uc3BsaXQoJz8nKVswXTtcblxuICAgICAgICAgICAgci5mcm9tID0gYF4ke3IuZnJvbX0oXFxcXD8uKik/JGA7XG4gICAgICAgICAgICByLnRvID0gYCR7ci50b30kMWA7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBodHRwQW5kUyhyKSB7XG4gICAgICAgICAgICByLnJlZ2V4ID0gdHJ1ZTtcblxuICAgICAgICAgICAgci5mcm9tID0gci5mcm9tLnJlcGxhY2UoL2h0dHBzPzpcXC9cXC8vLCAnaHR0cHM/Oi8vJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW1wb3J0UmVkaXJlY3Rpb25zKCkge1xuICAgICAgICAgICAgbGV0IHZtID0gdGhpcztcbiAgICAgICAgICAgIHZtLiRyZWZzLmltcG9ydEZvcm1JbnB1dC5jbGljaygpO1xuXG4gICAgICAgICAgICB2bS4kcmVmcy5pbXBvcnRGb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2bS4kcmVmcy5pbXBvcnRGb3JtLnN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuLnJlZGlyZWN0aW9uLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG5cbiAgICAuci1pZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDVjaDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjxpMThuPlxue1xuICAgIFwiZW5cIjoge1xuICAgIH1cbn1cbjwvaTE4bj5cblxuPHRlbXBsYXRlPlxuICAgIDxhc2lkZSBjbGFzcz1cInNpZGUtYmFyXCIgOmNsYXNzPVwie29wZW5lZDpvcGVuZWR9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJhci1jb250ZW50XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCIoaXRlbSwgaSkgaW4gaXRlbXNcIiA6a2V5PVwiaVwiIGNsYXNzPVwibmF2LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAgICAgICAgICdkcm9wZG93bic6IGl0ZW0uY2hpbGRyZW4gJiYgYWdub3N0aWNMZW5ndGgoaXRlbS5jaGlsZHJlbiksXG4gICAgICAgICAgICAgICAgICAgIH1cIj5cblxuICAgICAgICAgICAgICAgICAgICA8YSB2LWlmPVwiaXRlbS5jaGlsZHJlbiAmJiBhZ25vc3RpY0xlbmd0aChpdGVtLmNoaWxkcmVuKVwiIGNsYXNzPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlIGQtZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiaXRlbS5ocmVmIHx8ICcjJ1wiIDp0YXJnZXQ9XCJpdGVtLnRhcmdldCB8fCAnX3NlbGYnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwiaXRlbS50aXRsZVwiIHJvbGU9XCJidXR0b25cIiBAY2xpY2s9XCJpdGVtLm9wZW5lZCA9ICFpdGVtLm9wZW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgIDphcmlhLWV4cGFuZGVkPVwiaXRlbS5vcGVuZWQgPyAndHJ1ZScgOiAnZmFsc2UnXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzXCIgOmNsYXNzPVwiaXRlbS5pY29uIHx8ICdub25lJ1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtdGV4dD1cIml0ZW0udGl0bGVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgdi1lbHNlIGNsYXNzPVwibmF2LWxpbmsgZC1mbGV4XCIgOmhyZWY9XCJpdGVtLmhyZWYgfHwgJyMnXCIgOnRhcmdldD1cIml0ZW0udGFyZ2V0IHx8ICdfc2VsZidcIlxuICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCJpdGVtLnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWlmPVwiaXRlbS5pY29uXCIgY2xhc3M9XCJmYXNcIiA6Y2xhc3M9XCJpdGVtLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LXRleHQ9XCJpdGVtLnRpdGxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiaXRlbS5jaGlsZHJlbiAmJiBhZ25vc3RpY0xlbmd0aChpdGVtLmNoaWxkcmVuKVwiIGNsYXNzPVwiY2hpbGQtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdi1mb3I9XCIoY2hpbGQsIGNpKSBpbiBpdGVtLmNoaWxkcmVuXCIgOmtleT1cImNpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmtcIiA6aHJlZj1cImNoaWxkLmhyZWYgfHwgJyMnXCIgOnRhcmdldD1cIml0ZW0udGFyZ2V0IHx8ICdfc2VsZidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwiY2hpbGQudGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjaGlsZC50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9hc2lkZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJTaWRlQmFyXCIsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbWVudUl0ZW1zOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IFtBcnJheSwgT2JqZWN0XSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHc6IHdpbmRvdyxcbiAgICAgICAgICAgIGQ6IGRvY3VtZW50LFxuICAgICAgICAgICAgb3BlbmVkOiB0cnVlLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFnbm9zdGljTGVuZ3RoKHRoaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gKEFycmF5LmlzQXJyYXkodGhpbmcpID8gdGhpbmcgOiBPYmplY3Qua2V5cyh0aGluZykpLmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgVnVlLnNldCh0aGlzLCAnaXRlbXMnLCB0aGlzLm1lbnVJdGVtcyk7XG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Fzcy9fdmFyaWFibGVzLnNjc3NcIjtcblxuLnNpZGUtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibGFjaywgMTUpO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcbiAgICB3aWR0aDogNjVweDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0O1xuXG4gICAgJi5vcGVuZWQge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGZsZXg6IDAgMCAyMDBweDtcbiAgICB9XG5cbiAgICAuc2lkZS1iYXItY29udGVudCB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogY2FsYyg0MHB4ICsgMC41cmVtKTtcblxuICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJHdoaXRlLCAyMCk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLmZhcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDAuNWVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAmICsgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJi5ub25lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuMTVjaDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR3aGl0ZSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLmRyb3Bkb3duIHtcbiAgICAgICAgICAgICAgICAgICAgLmNoaWxkLW1lbnUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJsYWNrLCAxNSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgID4gKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDNyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBbYXJpYS1oYXNwb3B1cF0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJlthcmlhLWV4cGFuZGVkPSd0cnVlJ10ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYgKyAuY2hpbGQtbWVudSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI2MjYyNjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcblxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbjwvc3R5bGU+XG4iLCI8aTE4bj5cbntcbiAgICBcImVuXCI6IHtcbiAgICAgICAgXCJIaVwiOiBcIkhpXCIsXG4gICAgICAgIFwiTG9nb3V0XCI6IFwiTG9nb3V0XCJcbiAgICB9LFxuICAgIFwiaGVcIjoge1xuICAgICAgICBcIkhpXCI6IFwi15TXmdeZXCIsXG4gICAgICAgIFwiTG9nb3V0XCI6IFwi15nXpteZ15DXlFwiXG4gICAgfVxufVxuPC9pMThuPlxuXG48dGVtcGxhdGU+XG4gICAgPGhlYWRlciBjbGFzcz1cInRvcC1iYXIgc3RpY2t5LXRvcCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGFydCBweC0yXCI+XG4gICAgICAgICAgICA8ZHJvcGRvd24gYnRuLWNsYXNzPVwiYnRuIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJ0bj5cbiAgICAgICAgICAgICAgICAgICAge3sgJHQoJ0hpJykgfX0sXG4gICAgICAgICAgICAgICAgICAgIHt7IHVzZXIubmFtZSB9fVxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpkcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5BY3Rpb24gMTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgdi1pZj1cIiRpMThuLmxvY2FsZSA9PT0gJ2VuJ1wiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIDpocmVmPVwibG9jYWxlVXJsLnJlcGxhY2UoJy1sb2NhbGUtJywgJ2hlJylcIj7XoteR16jXmdeqPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSB2LWVsc2UtaWY9XCIkaTE4bi5sb2NhbGUgPT09ICdoZSdcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICA6aHJlZj1cImxvY2FsZVVybC5yZXBsYWNlKCctbG9jYWxlLScsICdlbicpXCI+RW5nbGlzaDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIiBAY2xpY2s9XCIkcm9vdC5sb2dvdXQoKVwiPnt7ICR0KCdMb2dvdXQnKSB9fTwvYT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9kcm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImNlbnRlclwiPjwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVuZCBweC0yXCI+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiZW5kXCI+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJUb3BCYXJcIixcbiAgICBwcm9wczoge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYWxlVXJsOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MvdmFyaWFibGVzXCI7XG5cbmhlYWRlci50b3AtYmFyIHtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcblxuICAgIC5kcm9wZG93biB7XG4gICAgICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAuZHJvcGRvd24tZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmMzA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2hpdGUsIDAuMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwidkRhdGFUYWJsZVwiIDpjbGFzcz1cInsndkRhdGFUYWJsZS1sb2FkaW5nJzogbG9hZGluZ31cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZEYXRhVGFibGUtdG9vbGJhciBkLWZsZXggZmxleC13cmFwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidkRhdGFUYWJsZS1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlNlYXJjaDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgdi1tb2RlbD1cInJlcXVlc3Quc2VhcmNoLnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlZ2V4Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJyZXF1ZXN0LnNlYXJjaC5yZWdleFwiPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZEYXRhVGFibGUtcGFnZUxlbmd0aFwiIHYtaWY9XCJsZW5ndGhzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIFNob3dcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwicmVxdWVzdC5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCIobGVuZ3RoLGxpKSBpbiBsZW5ndGhzXCIgOmtleT1cImxpXCIgOnZhbHVlPVwibGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbGVuZ3RoIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dGFibGUgOmNsYXNzPVwiQXJyYXkuaXNBcnJheSh0YWJsZUNsYXNzKSA/IHRhYmxlQ2xhc3Muam9pbignICcpIDogdGFibGVDbGFzc1wiPlxuICAgICAgICAgICAgPHRoZWFkIEBjbGljaz1cIm9yZGVyXCI+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwidGhlYWRcIiA6dD1cInRoaXNcIj48L3Nsb3Q+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPGRyYWdnYWJsZVxuICAgICAgICAgICAgICAgIDpsaXN0PVwicmVzcG9uc2UuZGF0YVwiXG4gICAgICAgICAgICAgICAgdGFnPVwidGJvZHlcIlxuICAgICAgICAgICAgICAgIGdob3N0LWNsYXNzPVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgIGhhbmRsZT1cIi5kbmQtaGFuZGxlclwiXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cInJlb3JkZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIihyb3csIHJpKSBpbiByZXNwb25zZS5kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCB2LWZvcj1cIihjb2x1bW4sIGNpKSBpbiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCA6bmFtZT1cIid0ZF8nK2NpXCIgOmRhdGE9XCIkZ2V0KHJvdywgY29sdW1uLm5hbWUpXCIgOnJvdz1cInJvd1wiIDpjb2x1bW49XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkZ2V0KHJvdywgY29sdW1uLm5hbWUpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvZHJhZ2dhYmxlPlxuICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2RGF0YVRhYmxlLWZvb3RlciBkLWZsZXggZmxleC13cmFwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidkRhdGFUYWJsZS1jb3VudFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlNob3dpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi10ZXh0PVwicmVxdWVzdC5zdGFydCArIDFcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+dG88L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi10ZXh0PVwicmVxdWVzdC5zdGFydCArIHJlc3BvbnNlLmRhdGEubGVuZ3RoXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPm9mPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtdGV4dD1cInJlc3BvbnNlLnJlY29yZHNGaWx0ZXJlZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5lbnRyaWVzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwicmVzcG9uc2UucmVjb3Jkc0ZpbHRlcmVkICE9PSByZXNwb25zZS5yZWNvcmRzVG90YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAoPHNwYW4+RmlsdGVyZWQgZnJvbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtdGV4dD1cInJlc3BvbnNlLnJlY29yZHNUb3RhbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnRvdGFsIGVudHJpZXM8L3NwYW4+KVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidkRhdGFUYWJsZS1wYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ2RGF0YVRhYmxlLXBhZ2luYXRpb24tYmFjayBwYWdlLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgQGNsaWNrLnByZXZlbnQ9XCJwcmV2XCIgOmRpc2FibGVkPVwicmVxdWVzdC5zdGFydCA9PT0gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiwqsgUHJldmlvdXNcIj4mbHQ7PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwicGFnZXMgPCA4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJuIGluIHBhZ2VzXCIgOmtleT1cIm5cIiBjbGFzcz1cInBhZ2UtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyd2RGF0YVRhYmxlLXBhZ2luYXRpb24tY3VycmVudCc6IG4gPT09IGN1cnJlbnRQYWdlfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgQGNsaWNrLnByZXZlbnQ9XCJnb1RvUGFnZShuKVwiPnt7IG4gfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwicGFnZXMgPiA3ICYmIGN1cnJlbnRQYWdlIDwgNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwibiBpbiA1XCIgOmtleT1cIm5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsndkRhdGFUYWJsZS1wYWdpbmF0aW9uLWN1cnJlbnQnOiBuID09PSBjdXJyZW50UGFnZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIEBjbGljay5wcmV2ZW50PVwiZ29Ub1BhZ2UobilcIj57eyBuIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInZEYXRhVGFibGUtZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2sucHJldmVudCBjbGFzcz1cInZEYXRhVGFibGUtZGlzYWJsZWRcIj4uLi48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgQGNsaWNrLnByZXZlbnQ9XCJnb1RvUGFnZShwYWdlcylcIj57eyBwYWdlcyB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJwYWdlcyA+IDcgJiYgY3VycmVudFBhZ2UgPiA0ICYmIGN1cnJlbnRQYWdlIDwgcGFnZXMgLSA0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBAY2xpY2sucHJldmVudD1cImdvVG9QYWdlKDEpXCI+MTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ2RGF0YVRhYmxlLWRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrLnByZXZlbnQgY2xhc3M9XCJ2RGF0YVRhYmxlLWRpc2FibGVkXCI+Li4uPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIEBjbGljay5wcmV2ZW50PVwiZ29Ub1BhZ2UoY3VycmVudFBhZ2UgLSAxKVwiPnt7IGN1cnJlbnRQYWdlIC0gMSB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ2RGF0YVRhYmxlLXBhZ2luYXRpb24tY3VycmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgQGNsaWNrLnByZXZlbnQ9XCJnb1RvUGFnZShjdXJyZW50UGFnZSlcIj57eyBjdXJyZW50UGFnZSB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBAY2xpY2sucHJldmVudD1cImdvVG9QYWdlKGN1cnJlbnRQYWdlICsgMSlcIj57eyBjdXJyZW50UGFnZSArIDEgfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidkRhdGFUYWJsZS1kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIEBjbGljay5wcmV2ZW50IGNsYXNzPVwidkRhdGFUYWJsZS1kaXNhYmxlZFwiPi4uLjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBAY2xpY2sucHJldmVudD1cImdvVG9QYWdlKHBhZ2VzKVwiPnt7IHBhZ2VzIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImN1cnJlbnRQYWdlID4gcGFnZXMgLSA1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBAY2xpY2sucHJldmVudD1cImdvVG9QYWdlKDEpXCI+MTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ2RGF0YVRhYmxlLWRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrLnByZXZlbnQgY2xhc3M9XCJ2RGF0YVRhYmxlLWRpc2FibGVkXCI+Li4uPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cIm4gaW4gNVwiIDprZXk9XCJuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J3ZEYXRhVGFibGUtcGFnaW5hdGlvbi1jdXJyZW50JzogcGFnZXMgKyhuLTUpID09PSBjdXJyZW50UGFnZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIEBjbGljay5wcmV2ZW50PVwiZ29Ub1BhZ2UocGFnZXMgKyhuLTUpKVwiPnt7IHBhZ2VzICsgKG4gLSA1KSB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ2RGF0YVRhYmxlLXBhZ2luYXRpb24tbmV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBAY2xpY2sucHJldmVudD1cIm5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwicmVxdWVzdC5zdGFydCA9PT0gKHBhZ2VzIC0gMSkgKiByZXF1ZXN0Lmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTmV4dCDCu1wiPiZndDs8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5sZXQgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbmxldCBxcyA9IHJlcXVpcmUoJ3FzJyk7XG5cbmZ1bmN0aW9uIGluZGV4SW5QYXJlbnQobm9kZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IG5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xuICAgIGxldCBudW0gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuW2ldID09PSBub2RlKSByZXR1cm4gbnVtO1xuICAgICAgICBpZiAoY2hpbGRyZW5baV0ubm9kZVR5cGUgPT09IDEpIG51bSsrO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5cbmxldCBWRGF0YVRhYmxlID0ge1xuICAgIG5hbWU6ICdWRGF0YVRhYmxlJyxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGRhdGFVcmw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB9LFxuXG4gICAgICAgIHNvcnRVcmw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgfSxcblxuICAgICAgICBzb3J0Q29sdW1uOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIH0sXG5cbiAgICAgICAga2V5Q29sdW1uOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIH0sXG5cbiAgICAgICAgdGFibGVDbGFzczoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogW0FycmF5LCBTdHJpbmddLFxuICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgIH0sXG5cbiAgICAgICAgbGVuZ3Roczoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMTAsIDI1LCA1MCwgMTAwXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2x1bW5zOiBbXSxcblxuICAgICAgICAgICAgcmVxdWVzdDoge1xuICAgICAgICAgICAgICAgIGRyYXc6IDAsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAxMCxcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXSxcbiAgICAgICAgICAgICAgICBvcmRlcjogW10sXG4gICAgICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICByZWdleDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgICAgICAgZHJhdzogMCxcbiAgICAgICAgICAgICAgICByZWNvcmRzVG90YWw6IDAsXG4gICAgICAgICAgICAgICAgcmVjb3Jkc0ZpbHRlcmVkOiAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBsb2FkKCkge1xuICAgICAgICAgICAgbGV0IHZtID0gdGhpcztcblxuICAgICAgICAgICAgdm0ubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIHZtLnJlcXVlc3QuY29sdW1ucyA9IHZtLmNvbHVtbnM7XG5cbiAgICAgICAgICAgIHZtLnJlcXVlc3QuZHJhdysrO1xuXG4gICAgICAgICAgICBheGlvcy5nZXQodm0uZGF0YVVybCwge1xuICAgICAgICAgICAgICAgIHBhcmFtczogdm0ucmVxdWVzdCxcbiAgICAgICAgICAgICAgICBwYXJhbXNTZXJpYWxpemVyOiBwYXJhbXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXMuc3RyaW5naWZ5KHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICB2bS5yZXNwb25zZSA9IHIuZGF0YTtcbiAgICAgICAgICAgICAgICB2bS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBvcmRlcigkZXZlbnQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5lID0gJGV2ZW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdvVG9QYWdlKG4pIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdC5zdGFydCA9IHRoaXMucmVxdWVzdC5sZW5ndGggKiAobiAtIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSAhPT0gdGhpcy5wYWdlcykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdC5zdGFydCArPSB0aGlzLnJlcXVlc3QubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByZXYoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3Quc3RhcnQgLT0gdGhpcy5yZXF1ZXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZW9yZGVyKGNoYW5nZSkge1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UubW92ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5zb3J0VXJsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbmV3T3JkZXIgPSB0aGlzLnJlc3BvbnNlLmRhdGEubWFwKChpLCBuKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtpZDogaVt0aGlzLmtleUNvbHVtbl0sIG9yZGVyOiBuICsgMX07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXhpb3MucHV0KHRoaXMuc29ydFVybCwge29yZGVyOiBuZXdPcmRlcn0pLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAkZ2V0KG9iaiwgcGF0aCkge1xuICAgICAgICAgICAgbGV0IHZtID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBvYmogPSB2bVtvYmpdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBpbmRleChvYmosIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGF0aC5zcGxpdCgnLicpLnJlZHVjZShpbmRleCwgb2JqKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgcGFnZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMucmVzcG9uc2UucmVjb3Jkc0ZpbHRlcmVkIC8gdGhpcy5yZXF1ZXN0Lmxlbmd0aCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3VycmVudFBhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMucmVxdWVzdC5zdGFydCAvIHRoaXMucmVxdWVzdC5sZW5ndGgpICsgMTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgJ3JlcXVlc3Quc3RhcnQnKCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgJ3JlcXVlc3QubGVuZ3RoJygpIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdC5zdGFydCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAncmVxdWVzdC5zZWFyY2gudmFsdWUnKCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgJ3JlcXVlc3Quc2VhcmNoLnJlZ2V4JygpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGhzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdC5sZW5ndGggPSB0aGlzLmxlbmd0aHNbMF07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICB9LFxuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlLmNvbXBvbmVudCgndi1kYXRhLXRhYmxlJywgdGhpcyk7XG5cbiAgICAgICAgVnVlLmRpcmVjdGl2ZSgnZHQtY29sdW1uJywge1xuICAgICAgICAgICAgaW5zZXJ0ZWQoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZkdCA9IGJpbmRpbmcudmFsdWVbMF0gfHwgbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh2ZHQgJiYgdmR0LiRvcHRpb25zICYmIHZkdC4kb3B0aW9ucy5uYW1lID09PSAnVkRhdGFUYWJsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdpdmVuU2V0dGluZ3MgPSBiaW5kaW5nLnZhbHVlWzFdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChnaXZlblNldHRpbmdzLmRhdGEuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2l2ZW5TZXR0aW5ncy5kYXRhID0gZ2l2ZW5TZXR0aW5ncy5kYXRhLnNwbGl0KCcuJylbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSwgZ2l2ZW5TZXR0aW5ncyB8fCB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSB2ZHQuY29sdW1ucy5wdXNoKHNldHRpbmdzKSAtIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIG9yZGVyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5vcmRlcmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRoSSA9IGluZGV4SW5QYXJlbnQodGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoLmNsYXNzTGlzdC5jb250YWlucygndkRhdGFUYWJsZS1hc2MnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aC5jbGFzc0xpc3QucmVtb3ZlKCd2RGF0YVRhYmxlLWFzYycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aC5jbGFzc0xpc3QuYWRkKCd2RGF0YVRhYmxlLWRlc2MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyID0gJ2Rlc2MnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoLmNsYXNzTGlzdC5yZW1vdmUoJ3ZEYXRhVGFibGUtZGVzYycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aC5jbGFzc0xpc3QuYWRkKCd2RGF0YVRhYmxlLWFzYycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXIgPSAnYXNjJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGVhciBhbGwgc29ydGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgndGgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgob25lVGgsIG9uZVRoSSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uZVRoSSA9PT0gdGhJKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmVUaC5jbGFzc0xpc3QucmVtb3ZlKCd2RGF0YVRhYmxlLWFzYycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25lVGguY2xhc3NMaXN0LnJlbW92ZSgndkRhdGFUYWJsZS1kZXNjJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmR0LnJlcXVlc3Qub3JkZXIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZHQucmVxdWVzdC5vcmRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uOiB0aEksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcjogZGlyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmR0LmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZWwsICdWRGF0YVRhYmxlIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxud2luZG93LlZEYXRhVGFibGUgPSBWRGF0YVRhYmxlO1xuXG5leHBvcnQgZGVmYXVsdCBWRGF0YVRhYmxlO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbi52RGF0YVRhYmxlLWFzYyB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0Zi04LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzAxLjIxOSAzMDEuMjE5XCI+PHBhdGggZD1cIk0xNDkuMzY1IDI2Mi43MzZIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMGgxMzkuMzY1YzUuNTIyIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTB6TTEwIDIyOS43MzZoMTIwLjU4NmM1LjUyMiAwIDEwLTQuNDc3IDEwLTEwdi0xMGMwLTUuNTIzLTQuNDc4LTEwLTEwLTEwSDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTB6TTEwIDE2Ni43MzZoMTAxLjgwNWM1LjUyMiAwIDEwLTQuNDc3IDEwLTEwdi0xMGMwLTUuNTIzLTQuNDc4LTEwLTEwLTEwSDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTB6TTEwIDk2LjczNmg4My4wMjVjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHYtMTBjMC01LjUyMy00LjQ3OC0xMC0xMC0xMEgxMGMtNS41MjMgMC0xMCA0LjQ3Ny0xMCAxMHYxMGMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwek0xMCAzMy43MzZoNjQuMjQ0YzUuNTIyIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzgtMTAtMTAtMTBIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMHpNMjk4LjI5IDIxNi44NzdsLTcuMDctNy4wNzFhMTAuMDAxIDEwLjAwMSAwIDAwLTE0LjE0MiAwbC0zNC4zOTQgMzQuMzkzVjE4LjczNmMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwaC0xMGMtNS41MjIgMC0xMCA0LjQ3Ny0xMCAxMHYyMjUuNDYybC0zNC4zOTQtMzQuMzkzYTkuOTk5IDkuOTk5IDAgMDAtMTQuMTQyIDBsLTcuMDcgNy4wNzFjLTMuOTA1IDMuOTA1LTMuOTA1IDEwLjIzNyAwIDE0LjE0Mmw2My41MzUgNjMuNTM2YTEwLjAwMyAxMC4wMDMgMCAwMDE0LjE0MiAwbDYzLjUzNS02My41MzZjMy45MDUtMy45MDUgMy45MDUtMTAuMjM2IDAtMTQuMTQxelwiLz48L3N2Zz4nKSBuby1yZXBlYXQgY2VudGVyIC8xMDAlIDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAwLjgxMjVyZW07XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgIH1cbn1cblxuLnZEYXRhVGFibGUtZGVzYyB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0Zi04LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzAxLjIxOSAzMDEuMjE5XCI+PHBhdGggZD1cIk0xNTkuMzY1IDIzLjczNnYtMTBjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMEgxMGMtNS41MjMgMC0xMCA0LjQ3Ny0xMCAxMHYxMGMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwaDEzOS4zNjVjNS41MjMgMCAxMC00LjQ3NyAxMC0xMHpNMTMwLjU4NiA2Ni43MzZIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMGgxMjAuNTg2YzUuNTIzIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTB6TTExMS44MDUgMTI5LjczNkgxMGMtNS41MjMgMC0xMCA0LjQ3Ny0xMCAxMHYxMGMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwaDEwMS44MDVjNS41MjMgMCAxMC00LjQ3NyAxMC0xMHYtMTBjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMHpNOTMuMDI1IDE5OS43MzZIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMGg4My4wMjVjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHYtMTBjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMHpNNzQuMjQ0IDI2Mi43MzZIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMGg2NC4yNDRjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHYtMTBjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMHpNMjk4LjI5IDIxNi44NzdsLTcuMDcxLTcuMDcxYTEwLjAwMSAxMC4wMDEgMCAwMC0xNC4xNDMgMGwtMzQuMzkzIDM0LjM5M1YxOC43MzZjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMGgtMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MjI1LjQ2MmwtMzQuMzkzLTM0LjM5M2ExMC4wMDMgMTAuMDAzIDAgMDAtMTQuMTQyIDBsLTcuMDcyIDcuMDcxYy0zLjkwNCAzLjkwNS0zLjkwNCAxMC4yMzcgMCAxNC4xNDJsNjMuNTM2IDYzLjUzNmE5Ljk2OCA5Ljk2OCAwIDAwNy4wNzEgMi45MjkgOS45NjYgOS45NjYgMCAwMDcuMDcxLTIuOTI5bDYzLjUzNi02My41MzZjMy45MDUtMy45MDUgMy45MDUtMTAuMjM3IDAtMTQuMTQxelwiLz48L3N2Zz4nKSBuby1yZXBlYXQgY2VudGVyIC8xMDAlIDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAwLjgxMjVyZW07XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYnJlYWQtZWRpdFtkYXRhLXYtZmFiMDRmMDRdICBpbnB1dCxcXG4uYnJlYWQtZWRpdFtkYXRhLXYtZmFiMDRmMDRdICBzZWxlY3QsXFxuLmJyZWFkLWVkaXRbZGF0YS12LWZhYjA0ZjA0XSAgdGV4dGFyZWEge1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxufVxcbi5icmVhZC1lZGl0LndyaXRpbmctcnRsW2RhdGEtdi1mYWIwNGYwNF0gIGlucHV0LFxcbi5icmVhZC1lZGl0LndyaXRpbmctcnRsW2RhdGEtdi1mYWIwNGYwNF0gIHNlbGVjdCxcXG4uYnJlYWQtZWRpdC53cml0aW5nLXJ0bFtkYXRhLXYtZmFiMDRmMDRdICB0ZXh0YXJlYSB7XFxuICBkaXJlY3Rpb246IHJ0bDtcXG59XFxuLmZpZWxkW2RhdGEtdi1mYWIwNGYwNF0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuai1sb2NhdGlvbi1maWVsZC1tYXBbZGF0YS12LTczOTBiYmQxXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5yZWRpcmVjdGlvbi1pdGVtW2RhdGEtdi0xNzFhNmY4NF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuLnJlZGlyZWN0aW9uLWl0ZW0gLnItaWRbZGF0YS12LTE3MWE2Zjg0XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNWNoO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNpZGUtYmFyW2RhdGEtdi0zMzM5ODBlMl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcXG4gIHdpZHRoOiA2NXB4O1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uc2lkZS1iYXIub3BlbmVkW2RhdGEtdi0zMzM5ODBlMl0ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgZmxleDogMCAwIDIwMHB4O1xcbn1cXG4uc2lkZS1iYXIgLnNpZGUtYmFyLWNvbnRlbnRbZGF0YS12LTMzMzk4MGUyXSB7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiBjYWxjKDQwcHggKyAwLjVyZW0pO1xcbn1cXG4uc2lkZS1iYXIgLnNpZGUtYmFyLWNvbnRlbnQgLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rW2RhdGEtdi0zMzM5ODBlMl0ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4uc2lkZS1iYXIgLnNpZGUtYmFyLWNvbnRlbnQgLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIC5mYXNbZGF0YS12LTMzMzk4MGUyXSB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAtd2Via2l0LXBhZGRpbmctZW5kOiAwLjVlbTtcXG4gICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwLjVlbTtcXG59XFxuLnNpZGUtYmFyIC5zaWRlLWJhci1jb250ZW50IC5uYXYgLm5hdi1pdGVtIC5uYXYtbGluayAuZmFzICsgc3BhbltkYXRhLXYtMzMzOTgwZTJdIHtcXG4gIGZsZXg6IDE7XFxufVxcbi5zaWRlLWJhciAuc2lkZS1iYXItY29udGVudCAubmF2IC5uYXYtaXRlbSAubmF2LWxpbmsgLmZhcy5ub25lW2RhdGEtdi0zMzM5ODBlMl06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHdpZHRoOiAxLjE1Y2g7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5zaWRlLWJhciAuc2lkZS1iYXItY29udGVudCAubmF2IC5uYXYtaXRlbVtkYXRhLXYtMzMzOTgwZTJdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuLnNpZGUtYmFyIC5zaWRlLWJhci1jb250ZW50IC5uYXYgLm5hdi1pdGVtLmRyb3Bkb3duIC5jaGlsZC1tZW51W2RhdGEtdi0zMzM5ODBlMl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XFxufVxcbi5zaWRlLWJhciAuc2lkZS1iYXItY29udGVudCAubmF2IC5uYXYtaXRlbS5kcm9wZG93biAuY2hpbGQtbWVudSA+ICpbZGF0YS12LTMzMzk4MGUyXSB7XFxuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDNyZW07XFxuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAzcmVtO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuLnNpZGUtYmFyIC5zaWRlLWJhci1jb250ZW50IC5uYXYgLm5hdi1pdGVtLmRyb3Bkb3duIC5jaGlsZC1tZW51ID4gKltkYXRhLXYtMzMzOTgwZTJdOmhvdmVyIHtcXG4gIGNvbG9yOiAjNDI4NUY0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG59XFxuLnNpZGUtYmFyIC5zaWRlLWJhci1jb250ZW50IC5uYXYgLm5hdi1pdGVtLmRyb3Bkb3duIFthcmlhLWhhc3BvcHVwXVthcmlhLWV4cGFuZGVkPXRydWVdICsgLmNoaWxkLW1lbnVbZGF0YS12LTMzMzk4MGUyXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnNpZGUtYmFyIC5zaWRlLWJhci1jb250ZW50IC5uYXYgLm5hdi1pdGVtLmFjdGl2ZVtkYXRhLXYtMzMzOTgwZTJdIHtcXG4gIGNvbG9yOiAjMjYyNjI2O1xcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcXG59XFxuLnNpZGUtYmFyIC5zaWRlLWJhci1jb250ZW50IC5uYXYgLm5hdi1pdGVtLmFjdGl2ZSBhW2RhdGEtdi0zMzM5ODBlMl0ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyLnRvcC1iYXIge1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcbmhlYWRlci50b3AtYmFyIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5oZWFkZXIudG9wLWJhciAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWRpdmlkZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWYzMDtcXG59XFxuaGVhZGVyLnRvcC1iYXIgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcXG59XFxuaGVhZGVyLnRvcC1iYXIgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52RGF0YVRhYmxlLWFzY1tkYXRhLXYtMWFjZTUwNmJdOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGYtOCw8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwMS4yMTkgMzAxLjIxOVxcXCI+PHBhdGggZD1cXFwiTTE0OS4zNjUgMjYyLjczNkgxMGMtNS41MjMgMC0xMCA0LjQ3Ny0xMCAxMHYxMGMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwaDEzOS4zNjVjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHYtMTBjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMHpNMTAgMjI5LjczNmgxMjAuNTg2YzUuNTIyIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzgtMTAtMTAtMTBIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMHpNMTAgMTY2LjczNmgxMDEuODA1YzUuNTIyIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzgtMTAtMTAtMTBIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMHpNMTAgOTYuNzM2aDgzLjAyNWM1LjUyMiAwIDEwLTQuNDc3IDEwLTEwdi0xMGMwLTUuNTIzLTQuNDc4LTEwLTEwLTEwSDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTB6TTEwIDMzLjczNmg2NC4yNDRjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHYtMTBjMC01LjUyMy00LjQ3OC0xMC0xMC0xMEgxMGMtNS41MjMgMC0xMCA0LjQ3Ny0xMCAxMHYxMGMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwek0yOTguMjkgMjE2Ljg3N2wtNy4wNy03LjA3MWExMC4wMDEgMTAuMDAxIDAgMDAtMTQuMTQyIDBsLTM0LjM5NCAzNC4zOTNWMTguNzM2YzAtNS41MjMtNC40NzctMTAtMTAtMTBoLTEwYy01LjUyMiAwLTEwIDQuNDc3LTEwIDEwdjIyNS40NjJsLTM0LjM5NC0zNC4zOTNhOS45OTkgOS45OTkgMCAwMC0xNC4xNDIgMGwtNy4wNyA3LjA3MWMtMy45MDUgMy45MDUtMy45MDUgMTAuMjM3IDAgMTQuMTQybDYzLjUzNSA2My41MzZhMTAuMDAzIDEwLjAwMyAwIDAwMTQuMTQyIDBsNjMuNTM1LTYzLjUzNmMzLjkwNS0zLjkwNSAzLjkwNS0xMC4yMzYgMC0xNC4xNDF6XFxcIi8+PC9zdmc+Jykgbm8tcmVwZWF0IGNlbnRlci8xMDAlIDEwMCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDAuODEyNXJlbTtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG4udkRhdGFUYWJsZS1kZXNjW2RhdGEtdi0xYWNlNTA2Yl06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0Zi04LDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAxLjIxOSAzMDEuMjE5XFxcIj48cGF0aCBkPVxcXCJNMTU5LjM2NSAyMy43MzZ2LTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTBIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMGgxMzkuMzY1YzUuNTIzIDAgMTAtNC40NzcgMTAtMTB6TTEzMC41ODYgNjYuNzM2SDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTBoMTIwLjU4NmM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwdi0xMGMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwek0xMTEuODA1IDEyOS43MzZIMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MTBjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMGgxMDEuODA1YzUuNTIzIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTB6TTkzLjAyNSAxOTkuNzM2SDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTBoODMuMDI1YzUuNTIyIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTB6TTc0LjI0NCAyNjIuNzM2SDEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjEwYzAgNS41MjMgNC40NzcgMTAgMTAgMTBoNjQuMjQ0YzUuNTIyIDAgMTAtNC40NzcgMTAtMTB2LTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTB6TTI5OC4yOSAyMTYuODc3bC03LjA3MS03LjA3MWExMC4wMDEgMTAuMDAxIDAgMDAtMTQuMTQzIDBsLTM0LjM5MyAzNC4zOTNWMTguNzM2YzAtNS41MjMtNC40NzctMTAtMTAtMTBoLTEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwdjIyNS40NjJsLTM0LjM5My0zNC4zOTNhMTAuMDAzIDEwLjAwMyAwIDAwLTE0LjE0MiAwbC03LjA3MiA3LjA3MWMtMy45MDQgMy45MDUtMy45MDQgMTAuMjM3IDAgMTQuMTQybDYzLjUzNiA2My41MzZhOS45NjggOS45NjggMCAwMDcuMDcxIDIuOTI5IDkuOTY2IDkuOTY2IDAgMDA3LjA3MS0yLjkyOWw2My41MzYtNjMuNTM2YzMuOTA1LTMuOTA1IDMuOTA1LTEwLjIzNyAwLTE0LjE0MXpcXFwiLz48L3N2Zz4nKSBuby1yZXBlYXQgY2VudGVyLzEwMCUgMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMC44MTI1cmVtO1xcbiAgd2lkdGg6IDFyZW07XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnByZXZpZXdbZGF0YS12LTZkYjQ2OTg4XSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZm9ybS1yb3cuZ3JvdXBlZFtkYXRhLXYtYWRkNDc3NjRdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjRmZjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucHJldmlld1tkYXRhLXYtMWRhMWZkNzFdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvKiEgaWVlZTc1NC4gQlNELTMtQ2xhdXNlIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnJlYWRFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZhYjA0ZjA0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnJlYWRFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZhYjA0ZjA0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JyZWFkRWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mYWIwNGYwNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2VvY29kaW5nRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzM5MGJiZDEmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HZW9jb2RpbmdGaWVsZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MzkwYmJkMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HZW9jb2RpbmdGaWVsZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MzkwYmJkMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVkaXJlY3Rpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3MWE2Zjg0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVkaXJlY3Rpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3MWE2Zjg0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZGlyZWN0aW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNzFhNmY4NCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMzM5ODBlMiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzMzOTgwZTImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMzM5ODBlMiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVkRhdGFUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYWNlNTA2YiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWFjZTUwNmImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVkRhdGFUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYWNlNTA2YiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmRiNDY5ODgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZUZpZWxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZkYjQ2OTg4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmRiNDY5ODgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Hcm91cGVkRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWRkNDc3NjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JvdXBlZEZpZWxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFkZDQ3NzY0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Hcm91cGVkRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWRkNDc3NjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbWFnZUZpZWxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFkYTFmZDcxJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWRhMWZkNzEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWRhMWZkNzEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYnJlYWQtZWRpdCByb3dcIixcbiAgICAgIGNsYXNzOiB7IFwid3JpdGluZy1ydGxcIjogX3ZtLmlzTG9jYWxlUnRsIH1cbiAgICB9LFxuICAgIF92bS5fbChfdm0ubWFuaWZlc3QsIGZ1bmN0aW9uKGNvbHVtbiwgY2xhc3NJZCkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IGtleTogY2xhc3NJZCwgY2xhc3M6IGNsYXNzSWQgfSxcbiAgICAgICAgX3ZtLl9sKGNvbHVtbiwgZnVuY3Rpb24oZmllbGRzLCBnVGl0bGUpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGdUaXRsZSwgc3RhdGljQ2xhc3M6IFwiY2FyZCBtYi00XCIgfSwgW1xuICAgICAgICAgICAgZ1RpdGxlWzBdICE9PSBcIl9cIlxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtfdm0uX3YoX3ZtLl9zKGdUaXRsZSkpXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3dcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChmaWVsZHMsIGZ1bmN0aW9uKGZpZWxkLCBmaSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBmaSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWVsZCBwLTEgZm9ybS1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBmaWVsZC53aWR0aFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQucmVwZWF0cyA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkcmFnZ2FibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBfdm0udmFsdWVzW2ZpZWxkLm5hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2hvc3QtY2xhc3NcIjogXCJnaG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZTogXCIuZG5kLWhhbmRsZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnZhbHVlc1tmaWVsZC5uYW1lXSwgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZC5pZCArIHZpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgZmxleC1maWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZvcjogZmllbGQuaWQgKyB2aSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmllbGQubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHZpICsgMSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoZmllbGQuY29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZmllbGQuaWQgKyB2aSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWVsZC5uYW1lICsgXCJbXCIgKyB2aSArIFwiXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ6ICEhX3ZtLmVycm9yc1tmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogZmllbGQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBmaWVsZC52YWxpZGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogX3ZtLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWxvY2FsZS1ydGxcIjogX3ZtLmlzTG9jYWxlUnRsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS52YWx1ZXNbZmllbGQubmFtZV1bdmldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udmFsdWVzW2ZpZWxkLm5hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZXNbZmllbGQubmFtZV1bdmldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctdG9wXCI6IFwiMS41cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy1pbmxpbmUtc3RhcnRcIjogXCIxLjI1cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tcHJpbWFyeSBkbmQtaGFuZGxlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdChcIlJlb3JkZXJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS1hcnJvd3MtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52YWx1ZXNbZmllbGQubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoID09PSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHQoXCJSZW1vdmVcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmxhYmVsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZpICsgMSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVSZXBlYXRlZEZpZWxkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtdHJhc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52YWx1ZXNbZmllbGQubmFtZV0ubGVuZ3RoID49XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5yZXBlYXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS4kdChcIkFkZFwiKSArIFwiIFwiICsgZmllbGQubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlcGVhdEZpZWxkKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGx1c1wiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBmaWVsZC5pZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmllbGQubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoZmllbGQuY29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZmllbGQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ6ICEhX3ZtLmVycm9yc1tmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBmaWVsZC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBmaWVsZC52YWxpZGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IF92bS5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtbG9jYWxlLXJ0bFwiOiBfdm0uaXNMb2NhbGVSdGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlc1tmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS52YWx1ZXMsIGZpZWxkLm5hbWUsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWx1ZXNbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tdGV4dCB0ZXh0LW11dGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogZmllbGQuaWQgKyBcIkhlbHBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZpZWxkLmRlc2NyaXB0aW9uKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzW2ZpZWxkLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImludmFsaWQtZmVlZGJhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwiYWxlcnRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnNbZmllbGQubmFtZV1bMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5maWVsZF92YWx1ZSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGRfdmFsdWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogX3ZtLm5hbWUgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZF92YWx1ZSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF92bS5maWVsZF92YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidnVlanMtZGF0ZXBpY2tlclwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaWQ6IF92bS5pZCxcbiAgICAgICAgICBmb3JtYXQ6IF92bS5mb3JtYXQsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQubW0ueXl5eVwiLFxuICAgICAgICAgIGxhbmd1YWdlOiBfdm0uZExvY2FsZXNbX3ZtLiRpMThuLmxvY2FsZV0gfHwgX3ZtLmRMb2NhbGVzLmVuLFxuICAgICAgICAgIHJlcXVpcmVkOiBfdm0udmFsaWRhdGlvbi5pbmRleE9mKFwicmVxdWlyZWRcIikgPiAtMSxcbiAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IHsgXCJmb3JtLWNvbnRyb2xcIjogMSwgXCJpcy1pbnZhbGlkXCI6IF92bS5pbnZhbGlkIH1cbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgaW5wdXQ6IF92bS51cGRhdGUgfSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLmRhdGUgPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF0ZVwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwIG1iLTNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLXByZXBlbmRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jaGFuZ2VGaWxlIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJDaG9vc2UgZmlsZVxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGRfdmFsdWUsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbmFtZTogX3ZtLm5hbWUgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZF92YWx1ZSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF92bS5maWVsZF92YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uc2hvd0ZtXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwgZmFkZSBzaG93IGQtYmxvY2tcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiBcIi0xXCIsIHJvbGU6IFwiZGlhbG9nXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1kaWFsb2cgbW9kYWwteGxcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcImRvY3VtZW50XCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWluLWhlaWdodFwiOiBcIjgwdmhcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmlsZSBNYW5hZ2VyIHwgQ2hvb3NlIGltYWdlIGZvciBcIiArIF92bS5fcyhfdm0ubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0ZtID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiw5dcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW19jKFwiZmlsZS1tYW5hZ2VyLXdyYXBwZXJcIiwgeyByZWY6IFwiZm13XCIgfSldLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5zaG93Rm1cbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1iYWNrZHJvcCBmYWRlIHNob3dcIiB9KVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGRfdmFsdWUuYWRkcmVzcyxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlLmFkZHJlc3NcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgcmVmOiBcImFkZHJlc3NFbGVtXCIsXG4gICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uaW52YWxpZCB9LFxuICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IF92bS5uYW1lICsgXCJbYWRkcmVzc11cIiB9LFxuICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZF92YWx1ZS5hZGRyZXNzIH0sXG4gICAgICBvbjoge1xuICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkX3ZhbHVlLCBcImFkZHJlc3NcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgdmFsdWU6IF92bS5maWVsZF92YWx1ZS5sYXQsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZF92YWx1ZS5sYXRcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogX3ZtLm5hbWUgKyBcIltsYXRdXCIgfSxcbiAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmllbGRfdmFsdWUubGF0IH0sXG4gICAgICBvbjoge1xuICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkX3ZhbHVlLCBcImxhdFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkX3ZhbHVlLmxuZyxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlLmxuZ1wiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBfdm0ubmFtZSArIFwiW2xuZ11cIiB9LFxuICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZF92YWx1ZS5sbmcgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBfdm0uJHNldChfdm0uZmllbGRfdmFsdWUsIFwibG5nXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcIm1hcEVsZW1cIiwgc3RhdGljQ2xhc3M6IFwiai1sb2NhdGlvbi1maWVsZC1tYXAgbXQtM1wiIH0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3cgZ3JvdXBlZFwiIH0sXG4gICAgX3ZtLl9sKF92bS5maWVsZHMsIGZ1bmN0aW9uKGZpZWxkLCBmaSkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBmaWVsZC5pZCArIGZpLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpZWxkIHAtNCBmb3JtLWdyb3VwXCIsXG4gICAgICAgICAgY2xhc3M6IGZpZWxkLndpZHRoXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBmaWVsZC5yZXBlYXRzID4gMVxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRyYWdnYWJsZVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IF92bS5maWVsZF92YWx1ZVtmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImdob3N0LWNsYXNzXCI6IFwiZ2hvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IFwiLmRuZC1oYW5kbGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5maWVsZF92YWx1ZVtmaWVsZC5uYW1lXSwgZnVuY3Rpb24odmFsdWUsIHZpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBmaWVsZC5pZCArIHZpLCBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBmbGV4LWZpbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IGZpZWxkLmlkICsgdmkgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmllbGQubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModmkgKyAxKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhmaWVsZC5jb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBmaWVsZC5pZCArIHZpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIltcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiW1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ6ICEhX3ZtLmVycm9yc1tmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogZmllbGQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBmaWVsZC52YWxpZGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogX3ZtLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWxvY2FsZS1ydGxcIjogX3ZtLmlzTG9jYWxlUnRsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWVsZF92YWx1ZVtmaWVsZC5uYW1lXVt2aV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWVsZF92YWx1ZVtmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZF92YWx1ZVtmaWVsZC5uYW1lXVt2aV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy10b3BcIjogXCIxLjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLWlubGluZS1zdGFydFwiOiBcIjEuMjVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgZG5kLWhhbmRsZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0uJHQoXCJSZW9yZGVyXCIpICsgXCIgXCIgKyBmaWVsZC5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1hcnJvd3MtYWx0XCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWVsZF92YWx1ZVtmaWVsZC5uYW1lXS5sZW5ndGggPT09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdChcIlJlbW92ZVwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubGFiZWwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodmkgKyAxKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZVJlcGVhdGVkRmllbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRyYXNoXCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmllbGRfdmFsdWVbZmllbGQubmFtZV0ubGVuZ3RoID49XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5yZXBlYXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS4kdChcIkFkZFwiKSArIFwiIFwiICsgZmllbGQubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlcGVhdEZpZWxkKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGx1c1wiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBmaWVsZC5pZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmaWVsZC5sYWJlbCkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKGZpZWxkLmNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBfdm0ubmFtZSArIFwiW1wiICsgZmllbGQubmFtZSArIFwiXVwiLFxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkOiAhIV92bS5lcnJvcnNbZmllbGQubmFtZV0sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogZmllbGQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogZmllbGQudmFsaWRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiBfdm0ubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBcImlzLWxvY2FsZS1ydGxcIjogX3ZtLmlzTG9jYWxlUnRsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWVsZF92YWx1ZVtmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5maWVsZF92YWx1ZSwgZmllbGQubmFtZSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIGZpZWxkLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IGZpZWxkLmlkICsgXCJIZWxwXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZpZWxkLmRlc2NyaXB0aW9uKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5lcnJvcnNbZmllbGQubmFtZV1cbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW52YWxpZC1mZWVkYmFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJhbGVydFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5lcnJvcnNbZmllbGQubmFtZV1bMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGRfdmFsdWUudyxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlLndcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogX3ZtLm5hbWUgKyBcIlt3XVwiIH0sXG4gICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpZWxkX3ZhbHVlLncgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBfdm0uJHNldChfdm0uZmllbGRfdmFsdWUsIFwid1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkX3ZhbHVlLmgsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZF92YWx1ZS5oXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IF92bS5uYW1lICsgXCJbaF1cIiB9LFxuICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZF92YWx1ZS5oIH0sXG4gICAgICBvbjoge1xuICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkX3ZhbHVlLCBcImhcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgdmFsdWU6IF92bS5maWVsZF92YWx1ZS5zcmMsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZF92YWx1ZS5zcmNcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogX3ZtLm5hbWUgKyBcIltzcmNdXCIgfSxcbiAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmllbGRfdmFsdWUuc3JjIH0sXG4gICAgICBvbjoge1xuICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkX3ZhbHVlLCBcInNyY1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCB3LWF1dG8gZC1pbmxpbmUtYmxvY2sgcC0yXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICByZWY6IFwicHJldmlld1wiLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJwcmV2aWV3XCIsXG4gICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmZpZWxkX3ZhbHVlLnNyYywgYWx0OiBcInByZXZpZXdcIiB9LFxuICAgICAgICBvbjogeyBjbGljazogX3ZtLmNoYW5nZUltYWdlIH1cbiAgICAgIH0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgbXQtNFwiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IF92bS5pZCArIFwiX2FsdFwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubGFiZWwpICsgXCIgQWx0XFxuICAgICAgICBcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkX3ZhbHVlLmFsdCxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGRfdmFsdWUuYWx0XCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbmFtZTogX3ZtLm5hbWUgKyBcIlthbHRdXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZF92YWx1ZS5hbHQgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uZmllbGRfdmFsdWUsIFwiYWx0XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnNob3dGbVxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGZhZGUgc2hvdyBkLWJsb2NrXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0YWJpbmRleDogXCItMVwiLCByb2xlOiBcImRpYWxvZ1wiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZGlhbG9nIG1vZGFsLXhsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJkb2N1bWVudFwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1pbi1oZWlnaHRcIjogXCI4MHZoXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZpbGUgTWFuYWdlciB8IENob29zZSBpbWFnZSBmb3IgXCIgKyBfdm0uX3MoX3ZtLmxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dGbSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsOXXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImZpbGUtbWFuYWdlci13cmFwcGVyXCIsIHsgcmVmOiBcImZtd1wiIH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uc2hvd0ZtXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYmFja2Ryb3AgZmFkZSBzaG93XCIgfSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5vcHRzLnR5cGUgPT09IFwiY2hlY2tib3hcIlxuICAgID8gX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGRfdmFsdWUsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmludmFsaWQgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLm9wdHMucGxhY2Vob2xkZXIsXG4gICAgICAgICAgcGF0dGVybjogX3ZtLm9wdHMucGF0dGVybixcbiAgICAgICAgICBhdXRvZm9jdXM6IF92bS5vcHRzLmF1dG9mb2N1cyxcbiAgICAgICAgICBhdXRvY29tcGxldGU6IF92bS5vcHRzLmF1dG9jb21wbGV0ZSxcbiAgICAgICAgICBzdGVwOiBfdm0ub3B0cy5zdGVwLFxuICAgICAgICAgIG1heDogX3ZtLm9wdHMubWF4LFxuICAgICAgICAgIG1pbjogX3ZtLm9wdHMubWluLFxuICAgICAgICAgIHJlYWRvbmx5OiBfdm0ub3B0cy5yZWFkb25seSxcbiAgICAgICAgICBkaXI6IF92bS5vcHRzLmRpcixcbiAgICAgICAgICByZXF1aXJlZDogX3ZtLnZhbGlkYXRpb24uaW5kZXhPZihcInJlcXVpcmVkXCIpID4gLTEsXG4gICAgICAgICAgaWQ6IF92bS5pZCxcbiAgICAgICAgICBuYW1lOiBfdm0ubmFtZSxcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCJcbiAgICAgICAgfSxcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5maWVsZF92YWx1ZSlcbiAgICAgICAgICAgID8gX3ZtLl9pKF92bS5maWVsZF92YWx1ZSwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgOiBfdm0uZmllbGRfdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgdmFyICQkYSA9IF92bS5maWVsZF92YWx1ZSxcbiAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uZmllbGRfdmFsdWUgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgKF92bS5maWVsZF92YWx1ZSA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF92bS5maWVsZF92YWx1ZSA9ICQkY1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA6IF92bS5vcHRzLnR5cGUgPT09IFwicmFkaW9cIlxuICAgID8gX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGRfdmFsdWUsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmludmFsaWQgfSxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLm9wdHMucGxhY2Vob2xkZXIsXG4gICAgICAgICAgcGF0dGVybjogX3ZtLm9wdHMucGF0dGVybixcbiAgICAgICAgICBhdXRvZm9jdXM6IF92bS5vcHRzLmF1dG9mb2N1cyxcbiAgICAgICAgICBhdXRvY29tcGxldGU6IF92bS5vcHRzLmF1dG9jb21wbGV0ZSxcbiAgICAgICAgICBzdGVwOiBfdm0ub3B0cy5zdGVwLFxuICAgICAgICAgIG1heDogX3ZtLm9wdHMubWF4LFxuICAgICAgICAgIG1pbjogX3ZtLm9wdHMubWluLFxuICAgICAgICAgIHJlYWRvbmx5OiBfdm0ub3B0cy5yZWFkb25seSxcbiAgICAgICAgICBkaXI6IF92bS5vcHRzLmRpcixcbiAgICAgICAgICByZXF1aXJlZDogX3ZtLnZhbGlkYXRpb24uaW5kZXhPZihcInJlcXVpcmVkXCIpID4gLTEsXG4gICAgICAgICAgaWQ6IF92bS5pZCxcbiAgICAgICAgICBuYW1lOiBfdm0ubmFtZSxcbiAgICAgICAgICB0eXBlOiBcInJhZGlvXCJcbiAgICAgICAgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgY2hlY2tlZDogX3ZtLl9xKF92bS5maWVsZF92YWx1ZSwgbnVsbCkgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLmZpZWxkX3ZhbHVlID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICA6IF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkX3ZhbHVlLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZF92YWx1ZVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgY2xhc3M6IHsgXCJpcy1pbnZhbGlkXCI6IF92bS5pbnZhbGlkIH0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5vcHRzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgIHBhdHRlcm46IF92bS5vcHRzLnBhdHRlcm4sXG4gICAgICAgICAgYXV0b2ZvY3VzOiBfdm0ub3B0cy5hdXRvZm9jdXMsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiBfdm0ub3B0cy5hdXRvY29tcGxldGUsXG4gICAgICAgICAgc3RlcDogX3ZtLm9wdHMuc3RlcCxcbiAgICAgICAgICBtYXg6IF92bS5vcHRzLm1heCxcbiAgICAgICAgICBtaW46IF92bS5vcHRzLm1pbixcbiAgICAgICAgICByZWFkb25seTogX3ZtLm9wdHMucmVhZG9ubHksXG4gICAgICAgICAgZGlyOiBfdm0ub3B0cy5kaXIsXG4gICAgICAgICAgcmVxdWlyZWQ6IF92bS52YWxpZGF0aW9uLmluZGV4T2YoXCJyZXF1aXJlZFwiKSA+IC0xLFxuICAgICAgICAgIGlkOiBfdm0uaWQsXG4gICAgICAgICAgbmFtZTogX3ZtLm5hbWUsXG4gICAgICAgICAgdHlwZTogX3ZtLm9wdHMudHlwZVxuICAgICAgICB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpZWxkX3ZhbHVlIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3ZtLmZpZWxkX3ZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2VsZWN0XCIsXG4gICAge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGRfdmFsdWUsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZF92YWx1ZVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgIGNsYXNzOiB7IFwiaXMtaW52YWxpZFwiOiBfdm0uaW52YWxpZCB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgbXVsdGlwbGU6IF92bS5vcHRzLm11bHRpcGxlLFxuICAgICAgICByZWFkb25seTogX3ZtLm9wdHMucmVhZG9ubHksXG4gICAgICAgIHJlcXVpcmVkOiBfdm0udmFsaWRhdGlvbi5pbmRleE9mKFwicmVxdWlyZWRcIikgPiAtMSxcbiAgICAgICAgaWQ6IF92bS5pZCxcbiAgICAgICAgbmFtZTogX3ZtLm5hbWVcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBfdm0uZmllbGRfdmFsdWUgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBfdm0uX2woX3ZtLm9wdHMub3B0aW9ucywgZnVuY3Rpb24ob3B0aW9uLCB2YWwpIHtcbiAgICAgIHJldHVybiBfYyhcIm9wdGlvblwiLCB7IGRvbVByb3BzOiB7IHZhbHVlOiB2YWwgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3Mob3B0aW9uKSArIFwiXFxuICAgIFwiKVxuICAgICAgXSlcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidGV4dGFyZWFcIiwge1xuICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgdmFsdWU6IF92bS5maWVsZF92YWx1ZSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZF92YWx1ZVwiXG4gICAgICB9XG4gICAgXSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICBjbGFzczogeyBcImlzLWludmFsaWRcIjogX3ZtLmludmFsaWQgfSxcbiAgICBhdHRyczoge1xuICAgICAgcm93czogX3ZtLm9wdHMucm93cyxcbiAgICAgIHBsYWNlaG9sZGVyOiBfdm0ub3B0cy5wbGFjZWhvbGRlcixcbiAgICAgIGF1dG9mb2N1czogX3ZtLm9wdHMuYXV0b2ZvY3VzLFxuICAgICAgcmVhZG9ubHk6IF92bS5vcHRzLnJlYWRvbmx5LFxuICAgICAgZGlyOiBfdm0ub3B0cy5kaXIsXG4gICAgICByZXF1aXJlZDogX3ZtLnZhbGlkYXRpb24uaW5kZXhPZihcInJlcXVpcmVkXCIpID4gLTEsXG4gICAgICBpZDogX3ZtLmlkLFxuICAgICAgbmFtZTogX3ZtLm5hbWVcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmllbGRfdmFsdWUgfSxcbiAgICBvbjoge1xuICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBfdm0uZmllbGRfdmFsdWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5maWVsZF92YWx1ZSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGRfdmFsdWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgaWQ6IF92bS5pZCwgbmFtZTogX3ZtLm5hbWUgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZF92YWx1ZSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF92bS5maWVsZF92YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZWRpdG9yXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgaW5pdDogX3ZtLmNvbmZpZyB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGRfdmFsdWUsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLmZpZWxkX3ZhbHVlID0gJCR2XG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkX3ZhbHVlXCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkcm9wZG93blwiLCBjbGFzczogeyBzaG93OiBfdm0ub3BlbmVkIH0gfSwgW1xuICAgIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tdG9nZ2xlXCIsXG4gICAgICAgIGNsYXNzOiBfdm0uYnRuQ2xhc3MsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICBcImFyaWEtaGFzcG9wdXBcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IF92bS5vcGVuZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5vcGVuZWQgPSAhX3ZtLm9wZW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtfdm0uX3QoXCJidG5cIildLFxuICAgICAgMlxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLW1lbnVcIiwgY2xhc3M6IHsgc2hvdzogX3ZtLm9wZW5lZCB9IH0sXG4gICAgICBbX3ZtLl90KFwiZHJvcGRvd25cIildLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZmlsZS1tYW5hZ2VyXCIsIHsgcmVmOiBcImZtXCIsIGF0dHJzOiB7IHNldHRpbmdzOiBfdm0uc2V0dGluZ3MgfSB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDQgbWItMFwiLFxuICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLiR0KFwiUmVkaXJlY3Rpb25zXCIpKSB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLmV4cG9ydFVybCwgdGFyZ2V0OiBcIl9ibGFua1wiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1kb3dubG9hZFwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJFeHBvcnRcIikpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaW1wb3J0UmVkaXJlY3Rpb25zIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS11cGxvYWRcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiSW1wb3J0XCIpKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbChfdm0ucmVkaXJlY3Rpb25zLCBmdW5jdGlvbihyLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsga2V5OiByLmlkLCBzdGF0aWNDbGFzczogXCJyZWRpcmVjdGlvbi1pdGVtIHB4LTEgcHQtMyBtYi00XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwici1pZFwiLFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKHIuaWQpIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1maWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yIGNvbC1tZC01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJmcm9tX1wiICsgci5pZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIkZyb20gKG9sZCB1cmwpXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByLmZyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInIuZnJvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIGlkOiBcImZyb21fXCIgKyByLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiByLmZyb20gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChyLCBcImZyb21cIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcHgtMiBjb2wtbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwidG9fXCIgKyByLmlkIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiVG8gKG5ldyB1cmwpXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByLnRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyLnRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgaWQ6IFwidG9fXCIgKyByLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiByLnRvIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQociwgXCJ0b1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yIGZsZXgtZmlsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwicGVybWFuZW50X1wiICsgci5pZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIlR5cGVcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHIucGVybWFuZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInIucGVybWFuZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInBlcm1hbmVudF9cIiArIHIuaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcm1hbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGRvbVByb3BzOiB7IHZhbHVlOiBmYWxzZSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIzMDIgKFwiICsgX3ZtLl9zKF92bS4kdChcIlRlbXBvcmFyeVwiKSkgKyBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBkb21Qcm9wczogeyB2YWx1ZTogdHJ1ZSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIzMDEgKFwiICsgX3ZtLl9zKF92bS4kdChcIlBlcm1hbmVudFwiKSkgKyBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLXJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcHgtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogci5yZWdleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInIucmVnZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiwgaWQ6IFwicmVnZXhfXCIgKyByLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KHIucmVnZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koci5yZWdleCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogci5yZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IHIucmVnZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChyLCBcInJlZ2V4XCIsICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZ2V4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChyLCBcInJlZ2V4XCIsICQkYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwicmVnZXhfXCIgKyByLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiUmVndWxhciBFeHByZXNzaW9uXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByLmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyLmVuYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZW5hYmxlZF9cIiArIHIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KHIuZW5hYmxlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShyLmVuYWJsZWQsIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHIuZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IHIuZW5hYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQociwgXCJlbmFibGVkXCIsICQkYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiZW5hYmxlZF9cIiArIHIuaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJFbmFibGVkXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiByLnJlZ2V4LCB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hcHBlbmRRdWVyeShyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiQ2F0Y2ggcXVlcnlcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5odHRwQW5kUyhyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiSFRUUC9IVFRQU1wiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1maWxsXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcHgtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZShyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiU2F2ZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZShyLmlkLCBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiRGVsZXRlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImg0XCIsXG4gICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS4kdChcIk5ldyBSZWRpcmVjdGlvblwiKSkgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyZWRpcmVjdGlvbi1pdGVtIHB4LTEgcHQtMyBtYi00XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInItaWRcIiB9LCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgtZmlsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHB4LTIgY29sLW1kLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmV3X2Zyb21cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIkZyb20gKG9sZCB1cmwpXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdSZWRpcmVjdGlvbi5mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5ld1JlZGlyZWN0aW9uLmZyb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIGlkOiBcIm5ld19mcm9tXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm5ld1JlZGlyZWN0aW9uLmZyb20gfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmV3UmVkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHB4LTIgY29sLW1kLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmV3X3RvXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJUbyAobmV3IHVybClcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld1JlZGlyZWN0aW9uLnRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5ld1JlZGlyZWN0aW9uLnRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBpZDogXCJuZXdfdG9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmV3UmVkaXJlY3Rpb24udG8gfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmV3UmVkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yIGZsZXgtZmlsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuZXdfcGVybWFuZW50XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJUeXBlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmV3UmVkaXJlY3Rpb24ucGVybWFuZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmV3UmVkaXJlY3Rpb24ucGVybWFuZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibmV3X3Blcm1hbmVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uZXdSZWRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVybWFuZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgZG9tUHJvcHM6IHsgdmFsdWU6IGZhbHNlIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIzMDIgKFwiICsgX3ZtLl9zKF92bS4kdChcIlRlbXBvcmFyeVwiKSkgKyBcIilcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgZG9tUHJvcHM6IHsgdmFsdWU6IHRydWUgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjMwMSAoXCIgKyBfdm0uX3MoX3ZtLiR0KFwiUGVybWFuZW50XCIpKSArIFwiKVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHB4LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld1JlZGlyZWN0aW9uLnJlZ2V4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdSZWRpcmVjdGlvbi5yZWdleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBcIm5ld19yZWdleFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ubmV3UmVkaXJlY3Rpb24ucmVnZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0ubmV3UmVkaXJlY3Rpb24ucmVnZXgsIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLm5ld1JlZGlyZWN0aW9uLnJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ubmV3UmVkaXJlY3Rpb24ucmVnZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uZXdSZWRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWdleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5ld1JlZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZ2V4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5uZXdSZWRpcmVjdGlvbiwgXCJyZWdleFwiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwibmV3X3JlZ2V4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiUmVndWxhciBFeHByZXNzaW9uXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdSZWRpcmVjdGlvbi5lbmFibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdSZWRpcmVjdGlvbi5lbmFibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiwgaWQ6IFwibmV3X2VuYWJsZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLm5ld1JlZGlyZWN0aW9uLmVuYWJsZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0ubmV3UmVkaXJlY3Rpb24uZW5hYmxlZCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ubmV3UmVkaXJlY3Rpb24uZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLm5ld1JlZGlyZWN0aW9uLmVuYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uZXdSZWRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbmFibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmV3UmVkaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubmV3UmVkaXJlY3Rpb24sIFwiZW5hYmxlZFwiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwibmV3X2VuYWJsZWRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJFbmFibGVkXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLm5ld1JlZGlyZWN0aW9uLnJlZ2V4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYXBwZW5kUXVlcnkoX3ZtLm5ld1JlZGlyZWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJDYXRjaCBxdWVyeVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaHR0cEFuZFMoX3ZtLm5ld1JlZGlyZWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJIVFRQL0hUVFBTXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgtZmlsbFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBweC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZShfdm0ubmV3UmVkaXJlY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIlNhdmVcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgcmVmOiBcImltcG9ydEZvcm1cIixcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1ub25lXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgYWN0aW9uOiBfdm0uaW1wb3J0VXJsLFxuICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJfdG9rZW5cIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uJGNzcmZfdG9rZW4gfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgcmVmOiBcImltcG9ydEZvcm1JbnB1dFwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtbm9uZVwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcImZpbGVcIiwgYWNjZXB0OiBcIi4qY3N2XCIgfVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYXNpZGVcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInNpZGUtYmFyXCIsIGNsYXNzOiB7IG9wZW5lZDogX3ZtLm9wZW5lZCB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaWRlLWJhci1jb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXYgZmxleC1jb2x1bW5cIiB9LFxuICAgICAgICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgIGRyb3Bkb3duOiBpdGVtLmNoaWxkcmVuICYmIF92bS5hZ25vc3RpY0xlbmd0aChpdGVtLmNoaWxkcmVuKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gJiYgX3ZtLmFnbm9zdGljTGVuZ3RoKGl0ZW0uY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZSBkLWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IGl0ZW0uaHJlZiB8fCBcIiNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBpdGVtLnRhcmdldCB8fCBcIl9zZWxmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogaXRlbS5vcGVuZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWhhc3BvcHVwXCI6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3BlbmVkID0gIWl0ZW0ub3BlbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogaXRlbS5pY29uIHx8IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGl0ZW0udGl0bGUpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rIGQtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogaXRlbS5ocmVmIHx8IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGl0ZW0udGFyZ2V0IHx8IFwiX3NlbGZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhc1wiLCBjbGFzczogaXRlbS5pY29uIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhpdGVtLnRpdGxlKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gJiYgX3ZtLmFnbm9zdGljTGVuZ3RoKGl0ZW0uY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjaGlsZC1tZW51XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbS5jaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQsIGNpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBjaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBjaGlsZC5ocmVmIHx8IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBpdGVtLnRhcmdldCB8fCBcIl9zZWxmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogY2hpbGQudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGNoaWxkLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMFxuICAgICAgICApXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJoZWFkZXJcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgXCJ0b3AtYmFyIHN0aWNreS10b3AgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzdGFydCBweC0yXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZHJvcGRvd25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJidG4tY2xhc3NcIjogXCJidG4gdGV4dC13aGl0ZVwiIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJidG5cIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIkhpXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIixcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c2VyLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJkcm9wZG93blwiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24taXRlbVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFjdGlvbiAxXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWRpdmlkZXJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRpMThuLmxvY2FsZSA9PT0gXCJlblwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5sb2NhbGVVcmwucmVwbGFjZShcIi1sb2NhbGUtXCIsIFwiaGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLXoteR16jXmdeqXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLiRpMThuLmxvY2FsZSA9PT0gXCJoZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5sb2NhbGVVcmwucmVwbGFjZShcIi1sb2NhbGUtXCIsIFwiZW5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFbmdsaXNoXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tZGl2aWRlclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJvb3QubG9nb3V0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiTG9nb3V0XCIpKSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtfdm0uX3QoXCJjZW50ZXJcIildLCAyKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVuZCBweC0yXCIgfSwgW192bS5fdChcImVuZFwiKV0sIDIpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidkRhdGFUYWJsZVwiLCBjbGFzczogeyBcInZEYXRhVGFibGUtbG9hZGluZ1wiOiBfdm0ubG9hZGluZyB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwidkRhdGFUYWJsZS10b29sYmFyIGQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24tY29udGVudC1jZW50ZXJcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2RGF0YVRhYmxlLXNlYXJjaFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlNlYXJjaDpcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJlcXVlc3Quc2VhcmNoLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJlcXVlc3Quc2VhcmNoLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic2VhcmNoXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnJlcXVlc3Quc2VhcmNoLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnJlcXVlc3Quc2VhcmNoLCBcInZhbHVlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiUmVnZXg6XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZXF1ZXN0LnNlYXJjaC5yZWdleCxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZXF1ZXN0LnNlYXJjaC5yZWdleFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ucmVxdWVzdC5zZWFyY2gucmVnZXgpXG4gICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5yZXF1ZXN0LnNlYXJjaC5yZWdleCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5yZXF1ZXN0LnNlYXJjaC5yZWdleFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ucmVxdWVzdC5zZWFyY2gucmVnZXgsXG4gICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXF1ZXN0LnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlZ2V4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVxdWVzdC5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWdleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnJlcXVlc3Quc2VhcmNoLCBcInJlZ2V4XCIsICQkYylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ubGVuZ3Rocy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidkRhdGFUYWJsZS1wYWdlTGVuZ3RoXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFNob3dcXG4gICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVxdWVzdC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVxdWVzdC5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVuZ3RoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5sZW5ndGhzLCBmdW5jdGlvbihsZW5ndGgsIGxpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBsaSwgZG9tUHJvcHM6IHsgdmFsdWU6IGxlbmd0aCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhsZW5ndGgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidGFibGVcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiBBcnJheS5pc0FycmF5KF92bS50YWJsZUNsYXNzKVxuICAgICAgICAgICAgPyBfdm0udGFibGVDbGFzcy5qb2luKFwiIFwiKVxuICAgICAgICAgICAgOiBfdm0udGFibGVDbGFzc1xuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRoZWFkXCIsXG4gICAgICAgICAgICB7IG9uOiB7IGNsaWNrOiBfdm0ub3JkZXIgfSB9LFxuICAgICAgICAgICAgW192bS5fdChcInRoZWFkXCIsIG51bGwsIHsgdDogdGhpcyB9KV0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBsaXN0OiBfdm0ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgICB0YWc6IFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICBcImdob3N0LWNsYXNzXCI6IFwiZ2hvc3RcIixcbiAgICAgICAgICAgICAgICBoYW5kbGU6IFwiLmRuZC1oYW5kbGVyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0ucmVvcmRlciB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5yZXNwb25zZS5kYXRhLCBmdW5jdGlvbihyb3csIHJpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb2x1bW5zLCBmdW5jdGlvbihjb2x1bW4sIGNpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRfXCIgKyBjaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kZ2V0KHJvdywgY29sdW1uLm5hbWUpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLiRnZXQocm93LCBjb2x1bW4ubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogcm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcInZEYXRhVGFibGUtZm9vdGVyIGQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24tY29udGVudC1jZW50ZXJcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2RGF0YVRhYmxlLWNvdW50XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJTaG93aW5nXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ucmVxdWVzdC5zdGFydCArIDEpIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwidG9cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnJlcXVlc3Quc3RhcnQgKyBfdm0ucmVzcG9uc2UuZGF0YS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIm9mXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ucmVzcG9uc2UucmVjb3Jkc0ZpbHRlcmVkKSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcImVudHJpZXNcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnJlc3BvbnNlLnJlY29yZHNGaWx0ZXJlZCAhPT0gX3ZtLnJlc3BvbnNlLnJlY29yZHNUb3RhbFxuICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgKFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkZpbHRlcmVkIGZyb21cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5yZXNwb25zZS5yZWNvcmRzVG90YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcInRvdGFsIGVudHJpZXNcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIpXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidkRhdGFUYWJsZS1wYWdpbmF0aW9uXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2RGF0YVRhYmxlLXBhZ2luYXRpb24tYmFjayBwYWdlLWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdlLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0ucmVxdWVzdC5zdGFydCA9PT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiwqsgUHJldmlvdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJldigkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCI8XCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5wYWdlcyA8IDhcbiAgICAgICAgICAgICAgICAgID8gX3ZtLl9sKF92bS5wYWdlcywgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdlLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZEYXRhVGFibGUtcGFnaW5hdGlvbi1jdXJyZW50XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID09PSBfdm0uY3VycmVudFBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvVG9QYWdlKG4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKG4pKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLnBhZ2VzID4gNyAmJiBfdm0uY3VycmVudFBhZ2UgPCA1XG4gICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woNSwgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidkRhdGFUYWJsZS1wYWdpbmF0aW9uLWN1cnJlbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9PT0gX3ZtLmN1cnJlbnRQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Ub1BhZ2UobilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhuKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwidkRhdGFUYWJsZS1kaXNhYmxlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZEYXRhVGFibGUtZGlzYWJsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIi4uLlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb1RvUGFnZShfdm0ucGFnZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ucGFnZXMpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICA6IF92bS5wYWdlcyA+IDcgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRQYWdlID4gNCAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudFBhZ2UgPCBfdm0ucGFnZXMgLSA0XG4gICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Ub1BhZ2UoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIxXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInZEYXRhVGFibGUtZGlzYWJsZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2RGF0YVRhYmxlLWRpc2FibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIuLi5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Ub1BhZ2UoX3ZtLmN1cnJlbnRQYWdlIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5jdXJyZW50UGFnZSAtIDEpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2RGF0YVRhYmxlLXBhZ2luYXRpb24tY3VycmVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb1RvUGFnZShfdm0uY3VycmVudFBhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5jdXJyZW50UGFnZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb1RvUGFnZShfdm0uY3VycmVudFBhZ2UgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmN1cnJlbnRQYWdlICsgMSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInZEYXRhVGFibGUtZGlzYWJsZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2RGF0YVRhYmxlLWRpc2FibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIuLi5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Ub1BhZ2UoX3ZtLnBhZ2VzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnBhZ2VzKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgOiBfdm0uY3VycmVudFBhZ2UgPiBfdm0ucGFnZXMgLSA1XG4gICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Ub1BhZ2UoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIxXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInZEYXRhVGFibGUtZGlzYWJsZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2RGF0YVRhYmxlLWRpc2FibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIuLi5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woNSwgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidkRhdGFUYWJsZS1wYWdpbmF0aW9uLWN1cnJlbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2VzICsgKG4gLSA1KSA9PT0gX3ZtLmN1cnJlbnRQYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nb1RvUGFnZShfdm0ucGFnZXMgKyAobiAtIDUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5wYWdlcyArIChuIC0gNSkpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInZEYXRhVGFibGUtcGFnaW5hdGlvbi1uZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnZS1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVxdWVzdC5zdGFydCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5wYWdlcyAtIDEpICogX3ZtLnJlcXVlc3QubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiTmV4dCDCu1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5leHQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIj5cIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgJ3N0YXJ0c1dpdGgnLCB7XG4gICAgICAgIHZhbHVlKHNlYXJjaCwgcmF3UG9zKSB7XG4gICAgICAgICAgICBsZXQgcG9zID0gcmF3UG9zID4gMCA/IHJhd1BvcyB8IDAgOiAwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3Vic3RyaW5nKHBvcywgcG9zICsgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG53aW5kb3cuU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJyk7XG5cbnJlcXVpcmUoJy4vaW5jL2F4aW9zJyk7XG5cbnJlcXVpcmUoJy4vaW5jL3RpbnltY2UnKTtcblxucmVxdWlyZSgnLi92dWUvdnVlJyk7XG4iLCJ3aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG4iLCJyZXF1aXJlKCd0aW55bWNlJyk7XG5yZXF1aXJlKCd0aW55bWNlL3RoZW1lcy9zaWx2ZXInKTtcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9saW5rJyk7XG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvdGFibGUnKTtcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9tZWRpYScpO1xucmVxdWlyZSgndGlueW1jZS9wbHVnaW5zL2xpc3RzJyk7XG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvaW1hZ2UnKTtcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9jb2RlJyk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vQnJlYWQvQnJlYWRFZGl0LnZ1ZVwiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvQnJlYWRFZGl0LnZ1ZVwiLFxuXHRcIi4vQnJlYWQvRmllbGRzL0Jhc2VGaWVsZC52dWVcIjogXCIuL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9CYXNlRmllbGQudnVlXCIsXG5cdFwiLi9CcmVhZC9GaWVsZHMvRGF0ZUZpZWxkLnZ1ZVwiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0RhdGVGaWVsZC52dWVcIixcblx0XCIuL0JyZWFkL0ZpZWxkcy9GaWxlRmllbGQudnVlXCI6IFwiLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvRmlsZUZpZWxkLnZ1ZVwiLFxuXHRcIi4vQnJlYWQvRmllbGRzL0dlb2NvZGluZ0ZpZWxkLnZ1ZVwiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0dlb2NvZGluZ0ZpZWxkLnZ1ZVwiLFxuXHRcIi4vQnJlYWQvRmllbGRzL0dyb3VwZWRGaWVsZC52dWVcIjogXCIuL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9Hcm91cGVkRmllbGQudnVlXCIsXG5cdFwiLi9CcmVhZC9GaWVsZHMvSW1hZ2VGaWVsZC52dWVcIjogXCIuL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9JbWFnZUZpZWxkLnZ1ZVwiLFxuXHRcIi4vQnJlYWQvRmllbGRzL0lucHV0RmllbGQudnVlXCI6IFwiLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvSW5wdXRGaWVsZC52dWVcIixcblx0XCIuL0JyZWFkL0ZpZWxkcy9TZWxlY3RGaWVsZC52dWVcIjogXCIuL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9TZWxlY3RGaWVsZC52dWVcIixcblx0XCIuL0JyZWFkL0ZpZWxkcy9UZXh0YXJlYUZpZWxkLnZ1ZVwiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL1RleHRhcmVhRmllbGQudnVlXCIsXG5cdFwiLi9CcmVhZC9GaWVsZHMvV3lzaXd5Z0ZpZWxkLnZ1ZVwiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL1d5c2l3eWdGaWVsZC52dWVcIixcblx0XCIuL0Ryb3Bkb3duLnZ1ZVwiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvRHJvcGRvd24udnVlXCIsXG5cdFwiLi9GaWxlTWFuYWdlcldyYXBwZXIudnVlXCI6IFwiLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9GaWxlTWFuYWdlcldyYXBwZXIudnVlXCIsXG5cdFwiLi9SZWRpcmVjdGlvbnMudnVlXCI6IFwiLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9SZWRpcmVjdGlvbnMudnVlXCIsXG5cdFwiLi9TaWRlQmFyLnZ1ZVwiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvU2lkZUJhci52dWVcIixcblx0XCIuL1RvcEJhci52dWVcIjogXCIuL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL1RvcEJhci52dWVcIixcblx0XCIuL1ZEYXRhVGFibGUudnVlXCI6IFwiLi9yZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9WRGF0YVRhYmxlLnZ1ZVwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3Jlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzIHN5bmMgcmVjdXJzaXZlIFxcXFwudnVlJC9cIjsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0JyZWFkRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmFiMDRmMDQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQnJlYWRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQnJlYWRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9CcmVhZEVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmFiMDRmMDQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmYWIwNGYwNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2ZhYjA0ZjA0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ZhYjA0ZjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ZhYjA0ZjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CcmVhZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZhYjA0ZjA0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2ZhYjA0ZjA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9CcmVhZEVkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CcmVhZEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JyZWFkRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnJlYWRFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZhYjA0ZjA0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CcmVhZEVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZhYjA0ZjA0JnNjb3BlZD10cnVlJlwiIiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Jhc2VGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Jhc2VGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjM4NjUyY2YyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW55XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcSmFzbWluZUNNU1xcXFxwYWNrYWdlc1xcXFxqYXNtaW5lY21zXFxcXGphc21pbmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzg2NTJjZjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzg2NTJjZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzg2NTJjZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0Jhc2VGaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2VGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZUZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGF0ZUZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NWI4Mjk0YSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EYXRlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EYXRlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1NWI4Mjk0YVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU1YjgyOTRhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU1YjgyOTRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU1YjgyOTRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EYXRlRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1YjgyOTRhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU1YjgyOTRhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvRGF0ZUZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGF0ZUZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXRlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RhdGVGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTViODI5NGEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGVGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRiNDY5ODgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmlsZUZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlsZUZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9GaWxlRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmRiNDY5ODgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjZkYjQ2OTg4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW55XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcSmFzbWluZUNNU1xcXFxwYWNrYWdlc1xcXFxqYXNtaW5lY21zXFxcXGphc21pbmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmRiNDY5ODgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmRiNDY5ODgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmRiNDY5ODgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpbGVGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRiNDY5ODgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmRiNDY5ODgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9GaWxlRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmRiNDY5ODgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZUZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZGI0Njk4OCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR2VvY29kaW5nRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTczOTBiYmQxJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dlb2NvZGluZ0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR2VvY29kaW5nRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0dlb2NvZGluZ0ZpZWxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTczOTBiYmQxJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzM5MGJiZDFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxhbnlcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxKYXNtaW5lQ01TXFxcXHBhY2thZ2VzXFxcXGphc21pbmVjbXNcXFxcamFzbWluZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3MzkwYmJkMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3MzkwYmJkMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3MzkwYmJkMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR2VvY29kaW5nRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTczOTBiYmQxJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzczOTBiYmQxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvR2VvY29kaW5nRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HZW9jb2RpbmdGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2VvY29kaW5nRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dlb2NvZGluZ0ZpZWxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTczOTBiYmQxJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HZW9jb2RpbmdGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzM5MGJiZDEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyb3VwZWRGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWRkNDc3NjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JvdXBlZEZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JvdXBlZEZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Hcm91cGVkRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWRkNDc3NjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImFkZDQ3NzY0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW55XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcSmFzbWluZUNNU1xcXFxwYWNrYWdlc1xcXFxqYXNtaW5lY21zXFxcXGphc21pbmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYWRkNDc3NjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYWRkNDc3NjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYWRkNDc3NjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyb3VwZWRGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWRkNDc3NjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYWRkNDc3NjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9Hcm91cGVkRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Hcm91cGVkRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyb3VwZWRGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Hcm91cGVkRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWRkNDc3NjQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JvdXBlZEZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZGQ0Nzc2NCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW1hZ2VGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWRhMWZkNzEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW1hZ2VGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWRhMWZkNzEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjFkYTFmZDcxXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW55XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcSmFzbWluZUNNU1xcXFxwYWNrYWdlc1xcXFxqYXNtaW5lY21zXFxcXGphc21pbmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWRhMWZkNzEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWRhMWZkNzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWRhMWZkNzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFkYTFmZDcxJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFkYTFmZDcxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvSW1hZ2VGaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW1hZ2VGaWVsZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZGExZmQ3MSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbWFnZUZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZGExZmQ3MSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5wdXRGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTc0NWM4M2Mmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5wdXRGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0lucHV0RmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxNzQ1YzgzY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE3NDVjODNjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE3NDVjODNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE3NDVjODNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbnB1dEZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzQ1YzgzYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNzQ1YzgzYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvQnJlYWQvRmllbGRzL0lucHV0RmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dEZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dEZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dEZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzQ1YzgzYyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VsZWN0RmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzNzUzYjg4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NlbGVjdEZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2VsZWN0RmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyMzc1M2I4OFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIzNzUzYjg4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIzNzUzYjg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIzNzUzYjg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZWxlY3RGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjM3NTNiODgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjM3NTNiODgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9TZWxlY3RGaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlbGVjdEZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3RGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VsZWN0RmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzNzUzYjg4JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UZXh0YXJlYUZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDBjNGMzZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UZXh0YXJlYUZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGV4dGFyZWFGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjIwMGM0YzNlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW55XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcSmFzbWluZUNNU1xcXFxwYWNrYWdlc1xcXFxqYXNtaW5lY21zXFxcXGphc21pbmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjAwYzRjM2UnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjAwYzRjM2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjAwYzRjM2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RleHRhcmVhRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwMGM0YzNlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzIwMGM0YzNlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9CcmVhZC9GaWVsZHMvVGV4dGFyZWFGaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RleHRhcmVhRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RleHRhcmVhRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RleHRhcmVhRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwMGM0YzNlJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9XeXNpd3lnRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1MWMzMjdmJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1d5c2l3eWdGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1d5c2l3eWdGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQ1MWMzMjdmXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW55XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcSmFzbWluZUNNU1xcXFxwYWNrYWdlc1xcXFxqYXNtaW5lY21zXFxcXGphc21pbmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDUxYzMyN2YnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDUxYzMyN2YnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDUxYzMyN2YnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1d5c2l3eWdGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDUxYzMyN2Ymc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDUxYzMyN2YnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0JyZWFkL0ZpZWxkcy9XeXNpd3lnRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9XeXNpd3lnRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1d5c2l3eWdGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vV3lzaXd5Z0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NTFjMzI3ZiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5MmI4NWNlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Ryb3Bkb3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0OTJiODVjZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ5MmI4NWNlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ5MmI4NWNlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ5MmI4NWNlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ecm9wZG93bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDkyYjg1Y2Umc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDkyYjg1Y2UnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9taXhlcy9hcHAtYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL0Ryb3Bkb3duLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3Bkb3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ecm9wZG93bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDkyYjg1Y2Umc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGVNYW5hZ2VyV3JhcHBlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjI3MDIwODImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmlsZU1hbmFnZXJXcmFwcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlsZU1hbmFnZXJXcmFwcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYjI3MDIwODJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxhbnlcXFxcUGhwc3Rvcm1Qcm9qZWN0c1xcXFxKYXNtaW5lQ01TXFxcXHBhY2thZ2VzXFxcXGphc21pbmVjbXNcXFxcamFzbWluZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiMjcwMjA4MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiMjcwMjA4MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiMjcwMjA4MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmlsZU1hbmFnZXJXcmFwcGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMjcwMjA4MiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiMjcwMjA4MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvRmlsZU1hbmFnZXJXcmFwcGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZU1hbmFnZXJXcmFwcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlTWFuYWdlcldyYXBwZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVNYW5hZ2VyV3JhcHBlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjI3MDIwODImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlZGlyZWN0aW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTcxYTZmODQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVkaXJlY3Rpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVkaXJlY3Rpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9SZWRpcmVjdGlvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTcxYTZmODQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxNzFhNmY4NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE3MWE2Zjg0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE3MWE2Zjg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE3MWE2Zjg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZWRpcmVjdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3MWE2Zjg0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE3MWE2Zjg0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9SZWRpcmVjdGlvbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWRpcmVjdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZGlyZWN0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVkaXJlY3Rpb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3MWE2Zjg0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWRpcmVjdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3MWE2Zjg0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TaWRlQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMzM5ODBlMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMzM5ODBlMiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjMzMzk4MGUyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGN1c3RvbSBibG9ja3MgKi9cbmltcG9ydCBibG9jazAgZnJvbSBcIi4vU2lkZUJhci52dWU/dnVlJnR5cGU9Y3VzdG9tJmluZGV4PTAmYmxvY2tUeXBlPWkxOG5cIlxuaWYgKHR5cGVvZiBibG9jazAgPT09ICdmdW5jdGlvbicpIGJsb2NrMChjb21wb25lbnQpXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW55XFxcXFBocHN0b3JtUHJvamVjdHNcXFxcSmFzbWluZUNNU1xcXFxwYWNrYWdlc1xcXFxqYXNtaW5lY21zXFxcXGphc21pbmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzMzOTgwZTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzMzOTgwZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzMzOTgwZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NpZGVCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzMzk4MGUyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMzMzk4MGUyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9TaWRlQmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrYXp1cG9uL3Z1ZS1pMThuLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaWRlQmFyLnZ1ZT92dWUmdHlwZT1jdXN0b20maW5kZXg9MCZibG9ja1R5cGU9aTE4blwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2F6dXBvbi92dWUtaTE4bi1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9Y3VzdG9tJmluZGV4PTAmYmxvY2tUeXBlPWkxOG5cIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMzM5ODBlMiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2lkZUJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzMzOTgwZTImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RvcEJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmU5OWEyMGEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogY3VzdG9tIGJsb2NrcyAqL1xuaW1wb3J0IGJsb2NrMCBmcm9tIFwiLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPWN1c3RvbSZpbmRleD0wJmJsb2NrVHlwZT1pMThuXCJcbmlmICh0eXBlb2YgYmxvY2swID09PSAnZnVuY3Rpb24nKSBibG9jazAoY29tcG9uZW50KVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2JlOTlhMjBhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JlOTlhMjBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JlOTlhMjBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJlOTlhMjBhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JlOTlhMjBhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvbWl4ZXMvYXBwLWFzc2V0cy9qcy92dWUvY29tcG9uZW50cy9Ub3BCYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGthenVwb24vdnVlLWkxOG4tbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9Y3VzdG9tJmluZGV4PTAmYmxvY2tUeXBlPWkxOG5cIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGthenVwb24vdnVlLWkxOG4tbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9Y3VzdG9tJmluZGV4PTAmYmxvY2tUeXBlPWkxOG5cIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ub3BCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcEJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9wQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZTk5YTIwYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVkRhdGFUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWFjZTUwNmImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVkRhdGFUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ZEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1ZEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWFjZTUwNmImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxYWNlNTA2YlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGFueVxcXFxQaHBzdG9ybVByb2plY3RzXFxcXEphc21pbmVDTVNcXFxccGFja2FnZXNcXFxcamFzbWluZWNtc1xcXFxqYXNtaW5lXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFhY2U1MDZiJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFhY2U1MDZiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFhY2U1MDZiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9WRGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYWNlNTA2YiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYWNlNTA2YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvVkRhdGFUYWJsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWFjZTUwNmImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZEYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhY2U1MDZiJnNjb3BlZD10cnVlJlwiIiwidmFyIG1hcCA9IHtcblx0XCIuL2RlbGV0ZS5qc1wiOiBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2RpcmVjdGl2ZXMvZGVsZXRlLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vcmVzb3VyY2VzL21peGVzL2FwcC1hc3NldHMvanMvdnVlL2RpcmVjdGl2ZXMgc3luYyByZWN1cnNpdmUgXFxcXC5qcyQvXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGluc2VydGVkKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB2bm9kZS5jb250ZXh0LiR0KCdzd2FsLkRlbGV0ZScpLFxuICAgICAgICAgICAgICAgIC8vdGV4dDogYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCIke2VsLmRhdGFzZXQudGl0bGV9XCI/YCxcbiAgICAgICAgICAgICAgICB0ZXh0OiB2bm9kZS5jb250ZXh0LiR0KCdzd2FsLnN1cmUnLCB7dGl0bGU6IGVsLmRhdGFzZXQudGl0bGV9KSxcbiAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiB2bm9kZS5jb250ZXh0LiR0KCdzd2FsLkNhbmNlbCcpLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB2bm9kZS5jb250ZXh0LiR0KCdzd2FsLlllcycpLFxuICAgICAgICAgICAgfSkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBheGlvcy5kZWxldGUoZWwuaHJlZikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgc3dhbDoge1xuICAgICAgICBcIkNhbmNlbFwiOiBcIkNhbmNlbFwiLFxuICAgICAgICBcIlllc1wiOiBcIlllc1wiLFxuICAgICAgICBcIkRlbGV0ZVwiOiBcIkRlbGV0ZVwiLFxuICAgICAgICBcInN1cmVcIjogYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXFxcInt0aXRsZX1cXFwiYCxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHN3YWw6IHtcbiAgICAgICAgXCJDYW5jZWxcIjogXCLXkdeZ15jXldecXCIsXG4gICAgICAgIFwiWWVzXCI6IFwi15DXmdep15XXqFwiLFxuICAgICAgICBcIkRlbGV0ZVwiOiBcItee15fXmden15RcIixcbiAgICAgICAgXCJzdXJlXCI6IGDXlNeQ150g15DXqi/XlCDXkdeY15XXly/XlCDXm9eZINeR16jXpteV16DXmiDXnNee15fXldenINeQ16ogYCArIGB7dGl0bGV9YCxcbiAgICB9LFxufVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5pbXBvcnQgVnVlSTE4biBmcm9tICd2dWUtaTE4bic7XG5pbXBvcnQgVkRhdGFUYWJsZSBmcm9tIFwiLi9jb21wb25lbnRzL1ZEYXRhVGFibGVcIjtcbmltcG9ydCBFZGl0b3IgZnJvbSAnQHRpbnltY2UvdGlueW1jZS12dWUnO1xuaW1wb3J0IENyb3BwYSBmcm9tICd2dWUtY3JvcHBhJztcbmltcG9ydCBkcmFnZ2FibGUgZnJvbSAndnVlZHJhZ2dhYmxlJztcbmltcG9ydCBGaWxlTWFuYWdlciBmcm9tICdsYXJhdmVsLWZpbGUtbWFuYWdlcic7XG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICd2dWVqcy1kYXRlcGlja2VyJztcblxuVnVlLmNvbmZpZy5kZXZ0b29scyA9IHRydWU7XG5cblZ1ZS51c2UoVnVleCk7XG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHt9KTtcblZ1ZS51c2UoRmlsZU1hbmFnZXIsIHtzdG9yZX0pO1xuXG5WdWUudXNlKFZ1ZUkxOG4pO1xuXG5WdWUudXNlKENyb3BwYSk7XG5cblZ1ZS51c2UoVkRhdGFUYWJsZSk7XG5cbmNvbnN0IGkxOG4gPSBuZXcgVnVlSTE4bih7XG4gICAgbG9jYWxlOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyxcbiAgICBtZXNzYWdlczoge1xuICAgICAgICBlbjogcmVxdWlyZSgnLi9sYW5nL2VuJykuZGVmYXVsdCxcbiAgICAgICAgaGU6IHJlcXVpcmUoJy4vbGFuZy9oZScpLmRlZmF1bHQsXG4gICAgfSxcbn0pO1xuXG53aW5kb3cuVnVlID0gVnVlO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZpbGVzID0gcmVxdWlyZS5jb250ZXh0KCcuL2NvbXBvbmVudHMnLCB0cnVlLCAvXFwudnVlJC9pKTtcbiAgICBmaWxlcy5rZXlzKCkubWFwKGtleSA9PiBWdWUuY29tcG9uZW50KGtleS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJylbMF0sIGZpbGVzKGtleSkuZGVmYXVsdCkpO1xufSkoKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHJlcXVpcmUuY29udGV4dCgnLi9kaXJlY3RpdmVzJywgdHJ1ZSwgL1xcLmpzJC9pKTtcbiAgICBmaWxlcy5rZXlzKCkubWFwKGtleSA9PiBWdWUuZGlyZWN0aXZlKGtleS5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJylbMF0sIGZpbGVzKGtleSkuZGVmYXVsdCkpO1xufSkoKTtcblxuVnVlLmNvbXBvbmVudCgnZHJhZ2dhYmxlJywgZHJhZ2dhYmxlKTtcblxuVnVlLmNvbXBvbmVudCgnZWRpdG9yJywgRWRpdG9yKTtcblxuVnVlLmNvbXBvbmVudCgndnVlanMtZGF0ZXBpY2tlcicsIERhdGVwaWNrZXIpO1xuXG5WdWUubWl4aW4oe1xuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICckY3NyZl90b2tlbicoKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuY29udGVudDtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgaTE4bixcbiAgICBzdG9yZSxcblxuICAgIGRhdGE6IHt9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBsb2dvdXQoKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLmxvZ291dEZvcm0uc3VibWl0KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3RlU3VibWl0KHJlZikge1xuICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnNbcmVmXSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzW3JlZl0ucmVwb3J0VmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzW3JlZl0uc3VibWl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9