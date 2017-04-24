module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony export (immutable) */ __webpack_exports__["encodeHtml"] = encodeHtml;
/* harmony export (immutable) */ __webpack_exports__["getContext"] = getContext;
/* harmony export (immutable) */ __webpack_exports__["setAnsiColors"] = setAnsiColors;
/* harmony export (immutable) */ __webpack_exports__["waitFor"] = waitFor;
/* harmony export (immutable) */ __webpack_exports__["urlJoin"] = urlJoin;
/* harmony export (immutable) */ __webpack_exports__["isUrl"] = isUrl;
/* harmony export (immutable) */ __webpack_exports__["promisifyRoute"] = promisifyRoute;





var _marked = [waitFor].map(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark);

function encodeHtml(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getContext(req, res) {
  return { req: req, res: res };
}

function setAnsiColors(ansiHTML) {
  ansiHTML.setColors({
    reset: ['efefef', 'a6004c'],
    darkgrey: '5a012b',
    yellow: 'ffab07',
    green: 'aeefba',
    magenta: 'ff84bf',
    blue: '3505a0',
    cyan: '56eaec',
    red: '4e053a'
  });
}

function waitFor(ms) {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function waitFor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt('return', new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve) {
            setTimeout(resolve, ms || 0);
          }));

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}

function isUrl(url) {
  return url.indexOf('http') === 0 || url.indexOf('//') === 0;
}

function promisifyRoute(fn) {
  // If routes is an array
  if (Array.isArray(fn)) {
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve(fn);
  }
  // If routes is a function expecting a callback
  if (fn.length === 1) {
    return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      fn(function (err, routeParams) {
        if (err) {
          reject(err);
        }
        resolve(routeParams);
      });
    });
  }
  var promise = fn();
  if (!promise || !(promise instanceof __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a) && typeof promise.then !== 'function') {
    promise = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve(promise);
  }
  return promise;
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("co");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("pify");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_loader_config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);







/*
|--------------------------------------------------------------------------
| Webpack Shared Config
|
| This is the config which is extended by the server and client
| webpack config files
|--------------------------------------------------------------------------
*/
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var isClient = _ref.isClient,
      isServer = _ref.isServer;

  var nodeModulesDir = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(__dirname, '..', 'node_modules');
  var config = {
    devtool: this.dev ? 'cheap-module-source-map' : false,
    entry: {
      vendor: ['vue', 'vue-router', 'vue-meta']
    },
    output: {
      publicPath: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["isUrl"])(this.options.build.publicPath) ? this.options.build.publicPath : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["urlJoin"])(this.options.router.base, this.options.build.publicPath)
    },
    performance: {
      maxEntrypointSize: 300000,
      maxAssetSize: 300000,
      hints: this.dev ? false : 'warning'
    },
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      // Disable for now
      alias: {
        '~': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(this.srcDir),
        'static': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(this.srcDir, 'static'), // use in template with <img src="~static/nuxt.png" />
        '~static': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(this.srcDir, 'static'),
        'assets': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(this.srcDir, 'assets'), // use in template with <img src="~static/nuxt.png" />
        '~assets': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(this.srcDir, 'assets'),
        '~plugins': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(this.srcDir, 'plugins'),
        '~store': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(this.dir, '.nuxt/store'),
        '~router': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(this.dir, '.nuxt/router'),
        '~pages': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(this.srcDir, 'pages'),
        '~components': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(this.srcDir, 'components')
      },
      modules: [nodeModulesDir, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(this.dir, 'node_modules')]
    },
    resolveLoader: {
      modules: [nodeModulesDir, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_path__["join"])(this.dir, 'node_modules')]
    },
    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        query: __WEBPACK_IMPORTED_MODULE_0__vue_loader_config__["a" /* default */].call(this, { isClient: isClient, isServer: isServer })
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["defaults"])(this.options.build.babel, {
          presets: ['vue-app'],
          babelrc: false,
          cacheDirectory: !!this.dev
        })
      }, { test: /\.css$/, loader: 'vue-style-loader!css-loader' }, { test: /\.less$/, loader: 'vue-style-loader!css-loader!less-loader' }, { test: /\.sass$/, loader: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' }, { test: /\.scss$/, loader: 'vue-style-loader!css-loader!sass-loader' }, { test: /\.styl(us)?$/, loader: 'vue-style-loader!css-loader!stylus-loader' }]
    },
    plugins: this.options.build.plugins
  };
  // Add nuxt build loaders (can be configured in nuxt.config.js)
  config.module.rules = config.module.rules.concat(this.options.build.loaders);
  // Return config
  return config;
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_array_from__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_co__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_co___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_co__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chokidar__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chokidar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_chokidar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fs_extra__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fs_extra___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_fs_extra__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hash_sum__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hash_sum__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_pify__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_pify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_pify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_webpack__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_webpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_webpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_post_compile_webpack_plugin__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_post_compile_webpack_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_post_compile_webpack_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_serialize_javascript__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vue_server_renderer__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vue_server_renderer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_vue_server_renderer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_path__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__webpack_client_config_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__webpack_server_config_js__ = __webpack_require__(25);
/* harmony export (immutable) */ __webpack_exports__["a"] = options;
/* harmony export (immutable) */ __webpack_exports__["b"] = build;








var _marked = [build, buildFiles, generateRoutesAndFiles].map(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark);















var debug = __webpack_require__(10)('nuxt:build');
var remove = __WEBPACK_IMPORTED_MODULE_10_pify___default()(__WEBPACK_IMPORTED_MODULE_8_fs_extra___default.a.remove);
var readFile = __WEBPACK_IMPORTED_MODULE_10_pify___default()(__WEBPACK_IMPORTED_MODULE_8_fs_extra___default.a.readFile);
var utimes = __WEBPACK_IMPORTED_MODULE_10_pify___default()(__WEBPACK_IMPORTED_MODULE_8_fs_extra___default.a.utimes);
var writeFile = __WEBPACK_IMPORTED_MODULE_10_pify___default()(__WEBPACK_IMPORTED_MODULE_8_fs_extra___default.a.writeFile);
var mkdirp = __WEBPACK_IMPORTED_MODULE_10_pify___default()(__WEBPACK_IMPORTED_MODULE_8_fs_extra___default.a.mkdirp);
var glob = __WEBPACK_IMPORTED_MODULE_10_pify___default()(__webpack_require__(35));
var reqSep = /\//g;
var sysSep = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.escapeRegExp(__WEBPACK_IMPORTED_MODULE_15_path__["sep"]);
var normalize = function normalize(string) {
  return string.replace(reqSep, sysSep);
};
var wp = function wp(p) {
  /* istanbul ignore if */
  if (/^win/.test(process.platform)) {
    p = p.replace(/\\/g, '\\\\');
  }
  return p;
};
var r = function r() {
  var args = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_array_from___default()(arguments);
  if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.last(args).indexOf('~') !== -1) {
    return wp(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.last(args));
  }
  args = args.map(normalize);
  return wp(__WEBPACK_IMPORTED_MODULE_15_path__["resolve"].apply(null, args));
};
var webpackStats = 'none';
// force green color
debug.color = 2;

var defaults = {
  analyze: false,
  publicPath: '/_nuxt/',
  filenames: {
    manifest: 'manifest.[hash].js',
    vendor: 'vendor.bundle.[hash].js',
    app: 'nuxt.bundle.[chunkhash].js'
  },
  vendor: [],
  loaders: [],
  plugins: [],
  babel: {},
  postcss: []
};
var defaultsLoaders = [{
  test: /\.(png|jpe?g|gif|svg)$/,
  loader: 'url-loader',
  query: {
    limit: 1000, // 1KO
    name: 'img/[name].[hash:7].[ext]'
  }
}, {
  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  loader: 'url-loader',
  query: {
    limit: 1000, // 1 KO
    name: 'fonts/[name].[hash:7].[ext]'
  }
}];
var defaultsPostcss = [__webpack_require__(29)({
  browsers: ['last 3 versions']
})];

function options() {
  // Defaults build options
  var extraDefaults = {};
  if (this.options.build && !Array.isArray(this.options.build.loaders)) extraDefaults.loaders = defaultsLoaders;
  if (this.options.build && !Array.isArray(this.options.build.postcss)) extraDefaults.postcss = defaultsPostcss;
  this.options.build = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.defaultsDeep(this.options.build, defaults, extraDefaults);
  /* istanbul ignore if */
  if (this.dev && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__utils__["isUrl"])(this.options.build.publicPath)) {
    this.options.build.publicPath = defaults.publicPath;
  }
  // Production, create server-renderer
  if (!this.dev) {
    webpackStats = {
      chunks: false,
      children: false,
      modules: false,
      colors: true
    };
    var serverConfig = getWebpackServerConfig.call(this);
    var bundlePath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_path__["join"])(serverConfig.output.path, 'server-bundle.json');
    if (__WEBPACK_IMPORTED_MODULE_8_fs_extra___default.a.existsSync(bundlePath)) {
      var bundle = __WEBPACK_IMPORTED_MODULE_8_fs_extra___default.a.readFileSync(bundlePath, 'utf8');
      createRenderer.call(this, JSON.parse(bundle));
      addAppTemplate.call(this);
    }
  }
}

function build() {
  return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function build$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Check if pages dir exists and warn if not
          if (!__WEBPACK_IMPORTED_MODULE_8_fs_extra___default.a.existsSync(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_path__["join"])(this.srcDir, 'pages'))) {
            if (__WEBPACK_IMPORTED_MODULE_8_fs_extra___default.a.existsSync(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_path__["join"])(this.srcDir, '..', 'pages'))) {
              console.error('> No `pages` directory found. Did you mean to run `nuxt` in the parent (`../`) directory?'); // eslint-disable-line no-console
            } else {
              console.error('> Couldn\'t find a `pages` directory. Please create one under the project root'); // eslint-disable-line no-console
            }
            process.exit(1);
          }
          debug('App root: ' + this.srcDir);
          debug('Generating .nuxt/ files...');
          // Create .nuxt/, .nuxt/components and .nuxt/dist folders
          _context.next = 5;
          return remove(r(this.dir, '.nuxt'));

        case 5:
          _context.next = 7;
          return mkdirp(r(this.dir, '.nuxt/components'));

        case 7:
          if (this.dev) {
            _context.next = 10;
            break;
          }

          _context.next = 10;
          return mkdirp(r(this.dir, '.nuxt/dist'));

        case 10:
          _context.next = 12;
          return generateRoutesAndFiles.call(this);

        case 12:
          _context.next = 14;
          return buildFiles.call(this);

        case 14:
          return _context.abrupt('return', this);

        case 15:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function buildFiles() {
  return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function buildFiles$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!this.dev) {
            _context2.next = 7;
            break;
          }

          debug('Adding webpack middleware...');
          createWebpackMiddleware.call(this);
          webpackWatchAndUpdate.call(this);
          watchPages.call(this);
          _context2.next = 11;
          break;

        case 7:
          debug('Building files...');
          _context2.next = 10;
          return [webpackRunClient.call(this), webpackRunServer.call(this)];

        case 10:
          addAppTemplate.call(this);

        case 11:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function addAppTemplate() {
  var templatePath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_path__["resolve"])(this.dir, '.nuxt', 'dist', 'index.html');
  if (__WEBPACK_IMPORTED_MODULE_8_fs_extra___default.a.existsSync(templatePath)) {
    this.appTemplate = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.template(__WEBPACK_IMPORTED_MODULE_8_fs_extra___default.a.readFileSync(templatePath, 'utf8'), {
      interpolate: /{{([\s\S]+?)}}/g
    });
  }
}

function generateRoutesAndFiles() {
  var _this = this;

  var layouts, layoutsFiles, files, templatesFiles, templateVars, moveTemplates;
  return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function generateRoutesAndFiles$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          debug('Generating routes...');
          // Layouts
          layouts = {};
          _context3.next = 4;
          return glob('layouts/*.vue', { cwd: this.srcDir });

        case 4:
          layoutsFiles = _context3.sent;

          layoutsFiles.forEach(function (file) {
            var name = file.split('/').slice(-1)[0].replace('.vue', '');
            if (name === 'error') return;
            layouts[name] = r(_this.srcDir, file);
          });
          _context3.next = 8;
          return glob('pages/**/*.vue', { cwd: this.srcDir });

        case 8:
          files = _context3.sent;

          // Interpret and move template files to .nuxt/
          templatesFiles = ['App.vue', 'client.js', 'index.js', 'middleware.js', 'router.js', 'server.js', 'utils.js', 'components/nuxt-error.vue', 'components/nuxt-loading.vue', 'components/nuxt-child.js', 'components/nuxt-link.js', 'components/nuxt.vue'];

          this.options.store = __WEBPACK_IMPORTED_MODULE_8_fs_extra___default.a.existsSync(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_path__["join"])(this.srcDir, 'store'));
          templateVars = {
            uniqBy: __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.uniqBy,
            isDev: this.dev,
            router: {
              mode: this.options.router.mode,
              base: this.options.router.base,
              middleware: this.options.router.middleware,
              linkActiveClass: this.options.router.linkActiveClass,
              scrollBehavior: this.options.router.scrollBehavior
            },
            env: this.options.env,
            head: this.options.head,
            middleware: __WEBPACK_IMPORTED_MODULE_8_fs_extra___default.a.existsSync(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_path__["join"])(this.srcDir, 'middleware')),
            store: this.options.store,
            css: this.options.css,
            plugins: this.options.plugins.map(function (p) {
              if (typeof p === 'string') {
                return { src: r(_this.srcDir, p), ssr: true };
              }
              return { src: r(_this.srcDir, p.src), ssr: p.ssr !== false, injectAs: p.injectAs || false };
            }),
            appPath: './App.vue',
            layouts: layouts,
            loading: typeof this.options.loading === 'string' ? r(this.srcDir, this.options.loading) : this.options.loading,
            transition: this.options.transition,
            components: {
              ErrorPage: null
            }
          };
          // Format routes for the lib/app/router.js template

          templateVars.router.routes = createRoutes(files, this.srcDir);
          if (typeof this.options.router.extendRoutes === 'function') {
            // let the user extend the routes
            this.options.router.extendRoutes(templateVars.router.routes, r);
          }
          // Routes for Generate command
          this.routes = flatRoutes(templateVars.router.routes);
          debug('Generating files...');
          if (layoutsFiles.indexOf('layouts/error.vue') !== -1) {
            templateVars.components.ErrorPage = r(this.srcDir, 'layouts/error.vue');
          }
          // If no default layout, create its folder and add the default folder

          if (layouts.default) {
            _context3.next = 22;
            break;
          }

          _context3.next = 20;
          return mkdirp(r(this.dir, '.nuxt/layouts'));

        case 20:
          templatesFiles.push('layouts/default.vue');
          layouts.default = r(__dirname, 'app', 'layouts', 'default.vue');

        case 22:
          // Add store if needed
          if (this.options.store) {
            templatesFiles.push('store.js');
          }
          moveTemplates = templatesFiles.map(function (file) {
            return readFile(r(__dirname, 'app', file), 'utf8').then(function (fileContent) {
              var template = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.template(fileContent, {
                imports: {
                  serialize: __WEBPACK_IMPORTED_MODULE_13_serialize_javascript___default.a,
                  hash: __WEBPACK_IMPORTED_MODULE_9_hash_sum___default.a
                }
              });
              var content = template(templateVars);
              var path = r(_this.dir, '.nuxt', file);
              return writeFile(path, content, 'utf8').then(function () {
                // Fix webpack loop (https://github.com/webpack/watchpack/issues/25#issuecomment-287789288)
                var dateFS = Date.now() / 1000 - 30;
                return utimes(path, dateFS, dateFS);
              });
            });
          });
          _context3.next = 26;
          return moveTemplates;

        case 26:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function createRoutes(files, srcDir) {
  var routes = [];
  files.forEach(function (file) {
    var keys = file.replace(/^pages/, '').replace(/\.vue$/, '').replace(/\/{2,}/g, '/').split('/').slice(1);
    var route = { name: '', path: '', component: r(srcDir, file) };
    var parent = routes;
    keys.forEach(function (key, i) {
      route.name = route.name ? route.name + '-' + key.replace('_', '') : key.replace('_', '');
      route.name += key === '_' ? 'all' : '';
      var child = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.find(parent, { name: route.name });
      if (child) {
        if (!child.children) {
          child.children = [];
        }
        parent = child.children;
        route.path = '';
      } else {
        if (key === 'index' && i + 1 === keys.length) {
          route.path += i > 0 ? '' : '/';
        } else {
          route.path += '/' + (key === '_' ? '*' : key.replace('_', ':'));
          if (key !== '_' && key.indexOf('_') !== -1) {
            route.path += '?';
          }
        }
      }
    });
    // Order Routes path
    parent.push(route);
    parent.sort(function (a, b) {
      if (!a.path.length || a.path === '/') {
        return -1;
      }
      if (!b.path.length || b.path === '/') {
        return 1;
      }
      var res = 0;
      var _a = a.path.split('/');
      var _b = b.path.split('/');
      for (var i = 0; i < _a.length; i++) {
        if (res !== 0) {
          break;
        }
        var y = _a[i].indexOf('*') > -1 ? 2 : _a[i].indexOf(':') > -1 ? 1 : 0;
        var z = _b[i].indexOf('*') > -1 ? 2 : _b[i].indexOf(':') > -1 ? 1 : 0;
        res = y - z;
        if (i === _b.length - 1 && res === 0) {
          res = 1;
        }
      }
      return res === 0 ? -1 : res;
    });
  });
  return cleanChildrenRoutes(routes);
}

function cleanChildrenRoutes(routes) {
  var isChild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var start = -1;
  var routesIndex = [];
  routes.forEach(function (route) {
    if (/-index$/.test(route.name) || route.name === 'index') {
      // Save indexOf 'index' key in name
      var res = route.name.split('-');
      var s = res.indexOf('index');
      start = start === -1 || s < start ? s : start;
      routesIndex.push(res);
    }
  });
  routes.forEach(function (route) {
    route.path = isChild ? route.path.replace('/', '') : route.path;
    if (route.path.indexOf('?') > -1) {
      var names = route.name.split('-');
      var paths = route.path.split('/');
      if (!isChild) {
        paths.shift();
      } // clean first / for parents
      routesIndex.forEach(function (r) {
        var i = r.indexOf('index') - start; //  children names
        if (i < paths.length) {
          for (var a = 0; a <= i; a++) {
            if (a === i) {
              paths[a] = paths[a].replace('?', '');
            }
            if (a < i && names[a] !== r[a]) {
              break;
            }
          }
        }
      });
      route.path = (isChild ? '' : '/') + paths.join('/');
    }
    route.name = route.name.replace(/-index$/, '');
    if (route.children) {
      if (route.children.find(function (child) {
        return child.path === '';
      })) {
        delete route.name;
      }
      route.children = cleanChildrenRoutes(route.children, true);
    }
  });
  return routes;
}

function flatRoutes(router) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var routes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  router.forEach(function (r) {
    if (!(r.path.indexOf(':') !== -1) && !(r.path.indexOf('*') !== -1)) {
      if (r.children) {
        flatRoutes(r.children, path + r.path + '/', routes);
      } else {
        routes.push((r.path === '' && path[path.length - 1] === '/' ? path.slice(0, -1) : path) + r.path);
      }
    }
  });
  return routes;
}

function getWebpackClientConfig() {
  return __WEBPACK_IMPORTED_MODULE_17__webpack_client_config_js__["a" /* default */].call(this);
}

function getWebpackServerConfig() {
  return __WEBPACK_IMPORTED_MODULE_18__webpack_server_config_js__["a" /* default */].call(this);
}

function createWebpackMiddleware() {
  var _this2 = this;

  var clientConfig = getWebpackClientConfig.call(this);
  var host = process.env.HOST || process.env.npm_package_config_nuxt_host || '127.0.0.1';
  var port = process.env.PORT || process.env.npm_package_config_nuxt_port || '3000';
  // setup on the fly compilation + hot-reload
  clientConfig.entry.app = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.flatten(['webpack-hot-middleware/client?reload=true', clientConfig.entry.app]);
  clientConfig.plugins.push(new __WEBPACK_IMPORTED_MODULE_11_webpack___default.a.HotModuleReplacementPlugin(), new __WEBPACK_IMPORTED_MODULE_11_webpack___default.a.NoEmitOnErrorsPlugin(), new __WEBPACK_IMPORTED_MODULE_12_post_compile_webpack_plugin___default.a(function (stats) {
    if (!stats.hasErrors() && !stats.hasWarnings()) {
      console.log('> Open http://' + host + ':' + port + '\n'); // eslint-disable-line no-console
    }
  }));
  var clientCompiler = __WEBPACK_IMPORTED_MODULE_11_webpack___default()(clientConfig);
  // Add the middleware to the instance context
  this.webpackDevMiddleware = __WEBPACK_IMPORTED_MODULE_10_pify___default()(__webpack_require__(51)(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    stats: webpackStats,
    quiet: true,
    noInfo: true,
    watchOptions: this.options.watchers.webpack
  }));
  this.webpackHotMiddleware = __WEBPACK_IMPORTED_MODULE_10_pify___default()(__webpack_require__(52)(clientCompiler, {
    log: function log() {}
  }));
  clientCompiler.plugin('done', function () {
    var fs = _this2.webpackDevMiddleware.fileSystem;
    var filePath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_path__["join"])(clientConfig.output.path, 'index.html');
    if (fs.existsSync(filePath)) {
      var template = fs.readFileSync(filePath, 'utf-8');
      _this2.appTemplate = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.template(template, {
        interpolate: /{{([\s\S]+?)}}/g
      });
    }
  });
}

function webpackWatchAndUpdate() {
  var _this3 = this;

  var MFS = __webpack_require__(42); // <- dependencies of webpack
  var mfs = new MFS();
  var serverConfig = getWebpackServerConfig.call(this);
  var serverCompiler = __WEBPACK_IMPORTED_MODULE_11_webpack___default()(serverConfig);
  var outputPath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_path__["join"])(serverConfig.output.path, 'server-bundle.json');
  serverCompiler.outputFileSystem = mfs;
  this.webpackServerWatcher = serverCompiler.watch(this.options.watchers.webpack, function (err) {
    if (err) throw err;
    createRenderer.call(_this3, JSON.parse(mfs.readFileSync(outputPath, 'utf-8')));
  });
}

function webpackRunClient() {
  var _this4 = this;

  return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    var clientConfig = getWebpackClientConfig.call(_this4);
    var clientCompiler = __WEBPACK_IMPORTED_MODULE_11_webpack___default()(clientConfig);
    clientCompiler.run(function (err, stats) {
      if (err) return reject(err);
      console.log('[nuxt:build:client]\n', stats.toString(webpackStats)); // eslint-disable-line no-console
      if (stats.hasErrors()) return reject(new Error('Webpack build exited with errors'));
      resolve();
    });
  });
}

function webpackRunServer() {
  var _this5 = this;

  return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    var serverConfig = getWebpackServerConfig.call(_this5);
    var serverCompiler = __WEBPACK_IMPORTED_MODULE_11_webpack___default()(serverConfig);
    serverCompiler.run(function (err, stats) {
      if (err) return reject(err);
      console.log('[nuxt:build:server]\n', stats.toString(webpackStats)); // eslint-disable-line no-console
      if (stats.hasErrors()) return reject(new Error('Webpack build exited with errors'));
      var bundlePath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_path__["join"])(serverConfig.output.path, 'server-bundle.json');
      readFile(bundlePath, 'utf8').then(function (bundle) {
        createRenderer.call(_this5, JSON.parse(bundle));
        resolve();
      });
    });
  });
}

function createRenderer(bundle) {
  // Create bundle renderer to give a fresh context for every request
  var cacheConfig = false;
  if (this.options.cache) {
    this.options.cache = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(this.options.cache) !== 'object' ? {} : this.options.cache;
    cacheConfig = __webpack_require__(41)(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.defaults(this.options.cache, {
      max: 1000,
      maxAge: 1000 * 60 * 15
    }));
  }
  this.renderer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_vue_server_renderer__["createBundleRenderer"])(bundle, {
    cache: cacheConfig
  });
  this.renderToString = __WEBPACK_IMPORTED_MODULE_10_pify___default()(this.renderer.renderToString);
  this.renderToStream = this.renderer.renderToStream;
}

function watchPages() {
  var _this6 = this;

  var patterns = [r(this.srcDir, 'pages'), r(this.srcDir, 'layouts'), r(this.srcDir, 'store'), r(this.srcDir, 'middleware'), r(this.srcDir, 'pages/*.vue'), r(this.srcDir, 'pages/**/*.vue'), r(this.srcDir, 'layouts/*.vue'), r(this.srcDir, 'layouts/**/*.vue')];
  var options = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.options.watchers.chokidar, {
    ignoreInitial: true
  });
  /* istanbul ignore next */
  var refreshFiles = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.debounce(function () {
    __WEBPACK_IMPORTED_MODULE_6_co___default()(generateRoutesAndFiles.bind(_this6));
  }, 200);
  this.pagesFilesWatcher = __WEBPACK_IMPORTED_MODULE_7_chokidar___default.a.watch(patterns, options).on('add', refreshFiles).on('unlink', refreshFiles);
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs_extra__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs_extra___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs_extra__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_co__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_co___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_co__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pify__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_html_minifier__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_html_minifier___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_html_minifier__);










var debug = __webpack_require__(10)('nuxt:generate');
var copy = __WEBPACK_IMPORTED_MODULE_3_pify___default()(__WEBPACK_IMPORTED_MODULE_1_fs_extra___default.a.copy);
var remove = __WEBPACK_IMPORTED_MODULE_3_pify___default()(__WEBPACK_IMPORTED_MODULE_1_fs_extra___default.a.remove);
var writeFile = __WEBPACK_IMPORTED_MODULE_3_pify___default()(__WEBPACK_IMPORTED_MODULE_1_fs_extra___default.a.writeFile);
var mkdirp = __WEBPACK_IMPORTED_MODULE_3_pify___default()(__WEBPACK_IMPORTED_MODULE_1_fs_extra___default.a.mkdirp);

var defaults = {
  dir: 'dist',
  routes: [],
  minify: {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeAttributeQuotes: false,
    removeComments: false,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: false,
    removeStyleLinkTypeAttributes: false,
    removeTagWhitespace: false,
    sortAttributes: true,
    sortClassName: true,
    trimCustomFragments: true,
    useShortDoctype: true
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _this = this;

  var s = Date.now();
  /*
  ** Set variables
  */
  this.options.generate = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.defaultsDeep(this.options.generate, defaults);
  var self = this;
  var srcStaticPath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_path__["resolve"])(this.srcDir, 'static');
  var srcBuiltPath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_path__["resolve"])(this.dir, '.nuxt', 'dist');
  var distPath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_path__["resolve"])(this.dir, this.options.generate.dir);
  var distNuxtPath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_path__["join"])(distPath, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["isUrl"])(this.options.build.publicPath) ? '_nuxt' : this.options.build.publicPath);
  return __WEBPACK_IMPORTED_MODULE_2_co___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return self.build();

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return remove(distPath);

          case 5:
            debug('Destination folder cleaned');
            _context.next = 10;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](2);

          case 10:
            if (!__WEBPACK_IMPORTED_MODULE_1_fs_extra___default.a.existsSync(srcStaticPath)) {
              _context.next = 13;
              break;
            }

            _context.next = 13;
            return copy(srcStaticPath, distPath);

          case 13:
            _context.next = 15;
            return copy(srcBuiltPath, distNuxtPath);

          case 15:
            debug('Static & build files copied');

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 8]]);
  })).then(function () {
    // Resolve config.generate.routes promises before generating the routes
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["promisifyRoute"])(_this.options.generate.routes || []).catch(function (e) {
      console.error('Could not resolve routes'); // eslint-disable-line no-console
      console.error(e); // eslint-disable-line no-console
      process.exit(1);
      throw e; // eslint-disable-line no-unreachable
    });
  }).then(function (generateRoutes) {
    /*
    ** Generate html files from routes
    */
    generateRoutes.forEach(function (route) {
      if (_this.routes.indexOf(route) < 0) {
        _this.routes.push(route);
      }
    });
    var routes = _this.routes;
    return __WEBPACK_IMPORTED_MODULE_2_co___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!routes.length) {
                _context3.next = 5;
                break;
              }

              _context3.next = 3;
              return routes.splice(0, 500).map(function (route) {
                return __WEBPACK_IMPORTED_MODULE_2_co___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
                  var _ref, html, path;

                  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return self.renderRoute(route, { _generate: true });

                        case 2:
                          _ref = _context2.sent;
                          html = _ref.html;

                          try {
                            html = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_html_minifier__["minify"])(html, self.options.generate.minify);
                          } catch (err) {
                            console.log("HTML minify failed for route: " + route);
                          }
                          path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_path__["join"])(route, __WEBPACK_IMPORTED_MODULE_5_path__["sep"], 'index.html'); // /about -> /about/index.html

                          debug('Generate file: ' + path);
                          path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_path__["join"])(distPath, path);
                          // Make sure the sub folders are created
                          _context2.next = 10;
                          return mkdirp(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_path__["dirname"])(path));

                        case 10:
                          _context2.next = 12;
                          return writeFile(path, html, 'utf8');

                        case 12:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              });

            case 3:
              _context3.next = 0;
              break;

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
  }).then(function (pages) {
    // Add .nojekyll file to let Github Pages add the _nuxt/ folder
    // https://help.github.com/articles/files-that-start-with-an-underscore-are-missing/
    var nojekyllPath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_path__["resolve"])(distPath, '.nojekyll');
    return writeFile(nojekyllPath, '');
  }).then(function () {
    var duration = Math.round((Date.now() - s) / 100) / 10;
    debug('HTML Files generated in ' + duration + 's');
    return _this;
  });
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ansi_html__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ansi_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ansi_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_co__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_co___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_co__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serialize_javascript__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
/* harmony export (immutable) */ __webpack_exports__["b"] = renderRoute;
/* harmony export (immutable) */ __webpack_exports__["c"] = renderAndGetWindow;








var debug = __webpack_require__(10)('nuxt:render');
// force blue color
debug.color = 4;
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["setAnsiColors"])(__WEBPACK_IMPORTED_MODULE_2_ansi_html___default.a);

function render(req, res) {
  var _this = this;

  if (!this.renderer && !this.dev) {
    console.error('> No build files found, please run `nuxt build` before launching `nuxt start`'); // eslint-disable-line no-console
    process.exit(1);
  }
  /* istanbul ignore if */
  if (!this.renderer || !this.appTemplate) {
    return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve) {
      setTimeout(function () {
        resolve(_this.render(req, res));
      }, 1000);
    });
  }
  var self = this;
  var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["getContext"])(req, res);
  return __WEBPACK_IMPORTED_MODULE_3_co___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    var url;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.statusCode = 200;

            if (!self.dev) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return self.webpackDevMiddleware(req, res);

          case 4:
            _context.next = 6;
            return self.webpackHotMiddleware(req, res);

          case 6:
            if (!(!self.dev && self.options.performance.gzip)) {
              _context.next = 9;
              break;
            }

            _context.next = 9;
            return self.gzipMiddleware(req, res);

          case 9:
            // If base in req.url, remove it for the middleware and vue-router
            if (self.options.router.base !== '/' && req.url.indexOf(self.options.router.base) === 0) {
              // Compatibility with base url for dev server
              req.url = req.url.replace(self.options.router.base, '/');
            }
            // Serve static/ files
            _context.next = 12;
            return self.serveStatic(req, res);

          case 12:
            if (!(!self.dev && req.url.indexOf(self.options.build.publicPath) === 0)) {
              _context.next = 18;
              break;
            }

            url = req.url;

            req.url = req.url.replace(self.options.build.publicPath, '/');
            _context.next = 17;
            return self.serveStaticNuxt(req, res);

          case 17:
            /* istanbul ignore next */
            req.url = url;

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  })).then(function () {
    /* istanbul ignore if */
    if (_this.dev && req.url.indexOf(self.options.build.publicPath) === 0 && req.url.indexOf('.hot-update.json') !== -1) {
      res.statusCode = 404;
      return { html: '' };
    }
    return _this.renderRoute(req.url, context);
  }).then(function (_ref) {
    var html = _ref.html,
        error = _ref.error,
        redirected = _ref.redirected;

    if (redirected) {
      return html;
    }
    if (error) {
      res.statusCode = context.nuxt.error.statusCode || 500;
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html, 'utf8');
    return html;
  }).catch(function (err) {
    /* istanbul ignore if */
    if (context.redirected) {
      console.error(err); // eslint-disable-line no-console
      return err;
    }
    var html = _this.errorTemplate({
      error: err,
      stack: __WEBPACK_IMPORTED_MODULE_2_ansi_html___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["encodeHtml"])(err.stack))
    });
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html, 'utf8');
    return err;
  });
}

function renderRoute(url) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  debug('Rendering url ' + url);
  // Add url and isSever to the context
  context.url = url;
  context.isServer = true;
  // Call rendertoSting from the bundleRenderer and generate the HTML (will update the context as well)
  var self = this;
  return __WEBPACK_IMPORTED_MODULE_3_co___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var APP, m, HEAD, html;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return self.renderToString(context);

          case 2:
            APP = _context2.sent;

            if (!context.nuxt.serverRendered) {
              APP = '<div id="__nuxt"></div>';
            }
            m = context.meta.inject();
            HEAD = m.meta.text() + m.title.text() + m.link.text() + m.style.text() + m.script.text() + m.noscript.text();

            if (self.options.router.base !== '/') {
              HEAD += '<base href="' + self.options.router.base + '">';
            }
            HEAD += context.styles;
            APP += '<script type="text/javascript">window.__NUXT__=' + __WEBPACK_IMPORTED_MODULE_4_serialize_javascript___default()(context.nuxt, { isJSON: true }) + '</script>';
            html = self.appTemplate({
              HTML_ATTRS: 'data-n-head-ssr ' + m.htmlAttrs.text(),
              BODY_ATTRS: m.bodyAttrs.text(),
              HEAD: HEAD,
              APP: APP
            });
            return _context2.abrupt('return', {
              html: html,
              error: context.nuxt.error,
              redirected: context.redirected
            });

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
}

// Function used to do dom checking via jsdom
var jsdom = null;
function renderAndGetWindow(url) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /* istanbul ignore if */
  if (!jsdom) {
    try {
      jsdom = __webpack_require__(40);
    } catch (e) {
      console.error('Fail when calling nuxt.renderAndGetWindow(url)'); // eslint-disable-line no-console
      console.error('jsdom module is not installed'); // eslint-disable-line no-console
      console.error('Please install jsdom with: npm install --save-dev jsdom'); // eslint-disable-line no-console
      process.exit(1);
    }
  }
  var virtualConsole = jsdom.createVirtualConsole().sendTo(console);
  if (opts.virtualConsole === false) {
    virtualConsole = undefined;
  }
  url = url || 'http://localhost:3000';
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    jsdom.env({
      url: url,
      features: {
        FetchExternalResources: ['script', 'link'],
        ProcessExternalResources: ['script']
      },
      virtualConsole: virtualConsole,
      done: function done(err, window) {
        if (err) return reject(err);
        // Mock window.scrollTo
        window.scrollTo = function () {};
        // If Nuxt could not be loaded (error from the server-side)
        if (!window.__NUXT__) {
          var error = new Error('Could not load the nuxt app');
          error.body = window.document.getElementsByTagName('body')[0].innerHTML;
          return reject(error);
        }
        // Used by nuxt.js to say when the components are loaded and the app ready
        window.onNuxtReady(function () {
          resolve(window);
        });
      }
    });
  });
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);




var http = __webpack_require__(39);

var Server = function () {
  function Server(nuxt) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Server);

    this.nuxt = nuxt;
    this.server = http.createServer(this.render.bind(this));
    return this;
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Server, [{
    key: 'render',
    value: function render(req, res) {
      this.nuxt.render(req, res);
      return this;
    }
  }, {
    key: 'listen',
    value: function listen(port, host) {
      host = host || '127.0.0.1';
      port = port || 3000;
      this.server.listen(port, host, function () {
        console.log('Ready on http://%s:%s', host, port); // eslint-disable-line no-console
      });
      return this;
    }
  }, {
    key: 'close',
    value: function close(cb) {
      return this.server.close(cb);
    }
  }]);

  return Server;
}();

/* harmony default export */ __webpack_exports__["a"] = (Server);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("serve-static");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_co__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_co___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_co__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_compression__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fs_extra__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fs_extra___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_fs_extra__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pify__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_pify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__server__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__build__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__render__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__generate__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_serve_static__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_serve_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_serve_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_path__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils__ = __webpack_require__(2);



















var Nuxt = function () {
  function Nuxt() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Nuxt);

    var defaults = {
      dev: true,
      env: {},
      head: {},
      plugins: [],
      css: [],
      cache: false,
      loading: {
        color: 'black',
        failedColor: 'red',
        height: '2px',
        duration: 5000
      },
      transition: {
        name: 'page',
        mode: 'out-in'
      },
      router: {
        mode: 'history',
        base: '/',
        middleware: [],
        linkActiveClass: 'nuxt-link-active',
        extendRoutes: null,
        scrollBehavior: null
      },
      performance: {
        gzip: {
          threshold: 0
        },
        prefetch: true
      },
      watchers: {
        webpack: {},
        chokidar: {}
      },
      build: {}
    };
    // Sanitization
    if (options.loading === true) delete options.loading;
    if (options.router && typeof options.router.middleware === 'string') options.router.middleware = [options.router.middleware];
    if (typeof options.transition === 'string') options.transition = { name: options.transition };
    this.options = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.defaultsDeep(options, defaults);
    // Env variables
    this.dev = this.options.dev;
    this.dir = typeof options.rootDir === 'string' && options.rootDir ? options.rootDir : process.cwd();
    this.srcDir = typeof options.srcDir === 'string' && options.srcDir ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_path__["resolve"])(this.dir, options.srcDir) : this.dir;
    // If store defined, update store options to true
    if (__WEBPACK_IMPORTED_MODULE_7_fs_extra___default.a.existsSync(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_path__["join"])(this.srcDir, 'store'))) {
      this.options.store = true;
    }
    // If app.html is defined, set the template path to the user template
    this.options.appTemplatePath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_path__["resolve"])(__dirname, 'views/app.template.html');
    if (__WEBPACK_IMPORTED_MODULE_7_fs_extra___default.a.existsSync(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_path__["join"])(this.srcDir, 'app.html'))) {
      this.options.appTemplatePath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_path__["join"])(this.srcDir, 'app.html');
    }
    // renderer used by Vue.js (via createBundleRenderer)
    this.renderer = null;
    // For serving static/ files to /
    this.serveStatic = __WEBPACK_IMPORTED_MODULE_8_pify___default()(__WEBPACK_IMPORTED_MODULE_13_serve_static___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_path__["resolve"])(this.srcDir, 'static')));
    // For serving .nuxt/dist/ files (only when build.publicPath is not an URL)
    this.serveStaticNuxt = __WEBPACK_IMPORTED_MODULE_8_pify___default()(__WEBPACK_IMPORTED_MODULE_13_serve_static___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_path__["resolve"])(this.dir, '.nuxt', 'dist'), {
      maxAge: this.dev ? 0 : '1y' // 1 year in production
    }));
    // gzip for production
    if (!this.dev && this.options.performance.gzip) {
      this.gzipMiddleware = __WEBPACK_IMPORTED_MODULE_8_pify___default()(__WEBPACK_IMPORTED_MODULE_6_compression___default()(this.options.performance.gzip));
    }
    // Add this.Server Class
    this.Server = __WEBPACK_IMPORTED_MODULE_9__server__["a" /* default */];
    // Add this.build
    __WEBPACK_IMPORTED_MODULE_10__build__["a" /* options */].call(this); // Add build options
    this.build = function () {
      return __WEBPACK_IMPORTED_MODULE_5_co___default()(__WEBPACK_IMPORTED_MODULE_10__build__["b" /* build */].bind(_this));
    };
    // Error template
    this.errorTemplate = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.template(__WEBPACK_IMPORTED_MODULE_7_fs_extra___default.a.readFileSync(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_path__["resolve"])(__dirname, 'views', 'error.html'), 'utf8'), {
      interpolate: /{{([\s\S]+?)}}/g
    });
    // Add this.render and this.renderRoute
    this.render = __WEBPACK_IMPORTED_MODULE_11__render__["a" /* render */].bind(this);
    this.renderRoute = __WEBPACK_IMPORTED_MODULE_11__render__["b" /* renderRoute */].bind(this);
    this.renderAndGetWindow = __WEBPACK_IMPORTED_MODULE_11__render__["c" /* renderAndGetWindow */].bind(this);
    // Add this.generate
    this.generate = __WEBPACK_IMPORTED_MODULE_12__generate__["a" /* default */].bind(this);
    // Add this.utils (tests purpose)
    this.utils = __WEBPACK_IMPORTED_MODULE_15__utils__;
    return this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Nuxt, [{
    key: 'close',
    value: function close(callback) {
      var _this2 = this;

      var promises = [];
      /* istanbul ignore if */
      if (this.webpackDevMiddleware) {
        var p = new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
          _this2.webpackDevMiddleware.close(function () {
            return resolve();
          });
        });
        promises.push(p);
      }
      /* istanbul ignore if */
      if (this.webpackServerWatcher) {
        var _p = new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
          _this2.webpackServerWatcher.close(function () {
            return resolve();
          });
        });
        promises.push(_p);
      }
      /* istanbul ignore if */
      if (this.pagesFilesWatcher) {
        this.pagesFilesWatcher.close();
      }
      return __WEBPACK_IMPORTED_MODULE_5_co___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return promises;

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      })).then(function () {
        if (typeof callback === 'function') callback();
      });
    }
  }]);

  return Nuxt;
}();

/* harmony default export */ __webpack_exports__["default"] = (Nuxt);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_webpack__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_webpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_webpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_html_webpack_plugin__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_html_webpack_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_html_webpack_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_friendly_errors_webpack_plugin__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_friendly_errors_webpack_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_friendly_errors_webpack_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_script_ext_html_webpack_plugin__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_script_ext_html_webpack_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_script_ext_html_webpack_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_preload_webpack_plugin__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_preload_webpack_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_preload_webpack_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_progress_bar_webpack_plugin__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_progress_bar_webpack_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_progress_bar_webpack_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_webpack_bundle_analyzer__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_webpack_bundle_analyzer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_webpack_bundle_analyzer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_offline_plugin__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_offline_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_offline_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__base_config_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_path__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_path__);

















/*
|--------------------------------------------------------------------------
| Webpack Client Config
|
| Generate public/dist/client-vendor-bundle.js
| Generate public/dist/client-bundle.js
|
| In production, will generate public/dist/style.css
|--------------------------------------------------------------------------
*/
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var config = __WEBPACK_IMPORTED_MODULE_12__base_config_js__["a" /* default */].call(this, { isClient: true });

  // Entry
  config.entry.app = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_path__["resolve"])(this.dir, '.nuxt', 'client.js');

  // Add vendors
  if (this.options.store) {
    config.entry.vendor.push('vuex');
  }
  config.entry.vendor = config.entry.vendor.concat(this.options.build.vendor);

  // Output
  config.output.path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_path__["resolve"])(this.dir, '.nuxt', 'dist');
  config.output.filename = this.options.build.filenames.app;

  // env object defined in nuxt.config.js
  var env = {};
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash__["each"])(this.options.env, function (value, key) {
    env['process.env.' + key] = typeof value === 'string' ? __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(value) : value;
  });
  // Webpack plugins
  config.plugins = (config.plugins || []).concat([
  // Strip comments in Vue code
  new __WEBPACK_IMPORTED_MODULE_4_webpack___default.a.DefinePlugin(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(env, {
    'process.env.NODE_ENV': __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(this.dev ? 'development' : 'production'),
    'process.BROWSER_BUILD': true,
    'process.SERVER_BUILD': false,
    'process.browser': true,
    'process.server': true
  })),
  // Extract vendor chunks for better caching
  new __WEBPACK_IMPORTED_MODULE_4_webpack___default.a.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: this.options.build.filenames.vendor
  }),
  // Extract manifest
  new __WEBPACK_IMPORTED_MODULE_4_webpack___default.a.optimize.CommonsChunkPlugin({
    name: 'manifest',
    filename: this.options.build.filenames.manifest
  }),
  // Generate output HTML
  new __WEBPACK_IMPORTED_MODULE_5_html_webpack_plugin___default.a({
    template: this.options.appTemplatePath
  }),
  // Add defer to scripts
  new __WEBPACK_IMPORTED_MODULE_7_script_ext_html_webpack_plugin___default.a({
    defaultAttribute: 'defer'
  })]);

  if (!this.dev && this.options.performance.prefetch === true) {
    // Add prefetch code-splitted routes
    config.plugins.push(new __WEBPACK_IMPORTED_MODULE_8_preload_webpack_plugin___default.a({
      rel: 'prefetch'
    }));
  }
  // client bundle progress bar
  config.plugins.push(new __WEBPACK_IMPORTED_MODULE_9_progress_bar_webpack_plugin___default.a());
  // Add friendly error plugin
  if (this.dev) {
    config.plugins.push(new __WEBPACK_IMPORTED_MODULE_6_friendly_errors_webpack_plugin___default.a());
  }
  // Production client build
  if (!this.dev) {
    config.plugins.push(
    // This is needed in webpack 2 for minifying CSS
    new __WEBPACK_IMPORTED_MODULE_4_webpack___default.a.LoaderOptionsPlugin({
      minimize: true
    }),
    // Minify JS
    new __WEBPACK_IMPORTED_MODULE_4_webpack___default.a.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }));
  }
  // Extend config
  if (typeof this.options.build.extend === 'function') {
    this.options.build.extend.call(this, config, {
      dev: this.dev,
      isClient: true
    });
  }
  // Offline-plugin integration
  if (!this.dev && this.options.offline) {
    var offlineOpts = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(this.options.offline) === 'object' ? this.options.offline : {};
    config.plugins.push(new __WEBPACK_IMPORTED_MODULE_11_offline_plugin___default.a(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash__["defaults"])(offlineOpts, {})));
  }
  // Webpack Bundle Analyzer
  if (!this.dev && this.options.build.analyze) {
    var options = {};
    if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(this.options.build.analyze) === 'object') {
      options = this.options.build.analyze;
    }
    config.plugins.push(new __WEBPACK_IMPORTED_MODULE_10_webpack_bundle_analyzer__["BundleAnalyzerPlugin"](options));
  }
  return config;
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webpack__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_webpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_ssr_webpack_plugin__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_ssr_webpack_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_ssr_webpack_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_config_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_path__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_path__);












/*
|--------------------------------------------------------------------------
| Webpack Server Config
|--------------------------------------------------------------------------
*/
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var config = __WEBPACK_IMPORTED_MODULE_5__base_config_js__["a" /* default */].call(this, { isServer: true });

  // env object defined in nuxt.config.js
  var env = {};
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_lodash__["each"])(this.options.env, function (value, key) {
    env['process.env.' + key] = typeof value === 'string' ? __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(value) : value;
  });

  config = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(config, {
    target: 'node',
    devtool: this.dev ? 'source-map' : false,
    entry: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_path__["resolve"])(this.dir, '.nuxt', 'server.js'),
    output: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, config.output, {
      path: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_path__["resolve"])(this.dir, '.nuxt', 'dist'),
      filename: 'server-bundle.js',
      libraryTarget: 'commonjs2'
    }),
    performance: {
      hints: false
    },
    plugins: (config.plugins || []).concat([new __WEBPACK_IMPORTED_MODULE_4_vue_ssr_webpack_plugin___default.a({
      filename: 'server-bundle.json'
    }), new __WEBPACK_IMPORTED_MODULE_3_webpack___default.a.DefinePlugin(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(env, {
      'process.env.NODE_ENV': __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(this.dev ? 'development' : 'production'),
      'process.BROWSER_BUILD': false, // deprecated
      'process.SERVER_BUILD': true, // deprecated
      'process.browser': false,
      'process.server': true
    }))])
  });
  // This is needed in webpack 2 for minifying CSS
  if (!this.dev) {
    config.plugins.push(new __WEBPACK_IMPORTED_MODULE_3_webpack___default.a.LoaderOptionsPlugin({
      minimize: true
    }));
  }
  // Externals
  var nuxtPackageJson = __webpack_require__(27);
  var projectPackageJsonPath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_path__["resolve"])(this.dir, 'package.json');
  config.externals = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(nuxtPackageJson.dependencies || {});
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_fs__["existsSync"])(projectPackageJsonPath)) {
    try {
      var projectPackageJson = JSON.parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_fs__["readFileSync"])(projectPackageJsonPath));
      config.externals = config.externals.concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(projectPackageJson.dependencies || {}));
    } catch (e) {}
  }
  config.externals = config.externals.concat(this.options.build.vendor);
  config.externals = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_lodash__["uniq"])(config.externals);

  // Extend config
  if (typeof this.options.build.extend === 'function') {
    this.options.build.extend(config, {
      dev: this.dev,
      isServer: true
    });
  }
  return config;
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);





/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var isClient = _ref.isClient;

  var babelOptions = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["defaults"])(this.options.build.babel, {
    presets: ['vue-app'],
    babelrc: false,
    cacheDirectory: !!this.dev
  }));
  var config = {
    postcss: this.options.build.postcss,
    loaders: {
      'js': 'babel-loader?' + babelOptions,
      'css': 'vue-style-loader!css-loader',
      'less': 'vue-style-loader!css-loader!less-loader',
      'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
      'scss': 'vue-style-loader!css-loader!sass-loader',
      'stylus': 'vue-style-loader!css-loader!stylus-loader',
      'styl': 'vue-style-loader!css-loader!stylus-loader'
    },
    preserveWhitespace: false
  };
  // Return the config
  return config;
});

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
	"name": "nuxt",
	"version": "0.10.6",
	"description": "A minimalistic framework for server-rendered Vue.js applications (inspired by Next.js)",
	"contributors": [
		{
			"name": "Sebastien Chopin"
		},
		{
			"name": "Alexandre Chopin"
		}
	],
	"main": "./index.js",
	"license": "MIT",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/nuxt/nuxt.js"
	},
	"files": [
		"bin",
		"dist",
		"index.js"
	],
	"keywords": [
		"nuxt",
		"nuxt.js",
		"nuxtjs",
		"vue",
		"vue.js",
		"vuejs",
		"vue universal",
		"vue ssr",
		"vue isomorphic",
		"vue versatile"
	],
	"homepage": "https://github.com/nuxt/nuxt.js#readme",
	"bin": {
		"nuxt": "./bin/nuxt"
	},
	"scripts": {
		"test": "nyc ava --verbose --serial test/",
		"coverage": "nyc report --reporter=text-lcov > coverage.lcov && codecov",
		"lint": "eslint --ext .js,.vue bin lib pages test/*.js --ignore-pattern lib/app",
		"build": "webpack",
		"watch": "webpack --watch",
		"precommit": "npm run lint",
		"prepublish": "npm run build"
	},
	"engines": {
		"node": ">=4.3.0 <5.0.0 || >=5.10",
		"npm": ">=3.0.0"
	},
	"dependencies": {
		"ansi-html": "^0.0.7",
		"autoprefixer": "^6.7.7",
		"babel-core": "^6.24.1",
		"babel-loader": "^6.4.1",
		"babel-preset-es2015": "^6.24.1",
		"babel-preset-vue-app": "^1.2.0",
		"chokidar": "^1.6.1",
		"co": "^4.6.0",
		"compression": "^1.6.2",
		"css-loader": "^0.28.0",
		"debug": "^2.6.3",
		"file-loader": "^0.11.1",
		"friendly-errors-webpack-plugin": "^1.6.1",
		"fs-extra": "^2.1.2",
		"glob": "^7.1.1",
		"hash-sum": "^1.0.2",
		"html-minifier": "^3.4.3",
		"html-webpack-plugin": "^2.28.0",
		"lodash": "^4.17.4",
		"lru-cache": "^4.0.2",
		"memory-fs": "^0.4.1",
		"offline-plugin": "^4.7.0",
		"pify": "^2.3.0",
		"post-compile-webpack-plugin": "^0.1.1",
		"preload-webpack-plugin": "^1.2.2",
		"progress-bar-webpack-plugin": "^1.9.3",
		"script-ext-html-webpack-plugin": "^1.7.1",
		"serialize-javascript": "^1.3.0",
		"serve-static": "^1.12.1",
		"url-loader": "^0.5.8",
		"vue": "^2.2.6",
		"vue-loader": "^11.3.4",
		"vue-meta": "^0.5.6",
		"vue-router": "^2.4.0",
		"vue-server-renderer": "^2.2.6",
		"vue-ssr-html-stream": "^2.2.0",
		"vue-ssr-webpack-plugin": "^3.0.0",
		"vue-template-compiler": "^2.2.6",
		"vuex": "^2.3.0",
		"webpack": "^2.4.1",
		"webpack-bundle-analyzer": "^2.4.0",
		"webpack-dev-middleware": "^1.10.1",
		"webpack-hot-middleware": "^2.18.0"
	},
	"devDependencies": {
		"ava": "^0.19.1",
		"babel-eslint": "^7.2.2",
		"babel-plugin-array-includes": "^2.0.3",
		"babel-plugin-transform-async-to-generator": "^6.24.1",
		"babel-plugin-transform-runtime": "^6.23.0",
		"babel-preset-stage-2": "^6.24.1",
		"codecov": "^2.1.0",
		"copy-webpack-plugin": "^4.0.1",
		"eslint": "^3.19.0",
		"eslint-config-standard": "^10.2.1",
		"eslint-plugin-html": "^2.0.1",
		"eslint-plugin-import": "^2.2.0",
		"eslint-plugin-node": "^4.2.2",
		"eslint-plugin-promise": "^3.5.0",
		"eslint-plugin-standard": "^3.0.1",
		"finalhandler": "^1.0.1",
		"jsdom": "^9.12.0",
		"json-loader": "^0.5.4",
		"nyc": "^10.2.0",
		"request": "^2.81.0",
		"request-promise-native": "^1.0.3",
		"webpack-node-externals": "^1.5.4"
	}
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("ansi-html");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("autoprefixer");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/array/from");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("chokidar");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("friendly-errors-webpack-plugin");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("glob");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("hash-sum");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("html-minifier");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("html-webpack-plugin");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("jsdom");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("memory-fs");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("offline-plugin");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("post-compile-webpack-plugin");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("preload-webpack-plugin");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("progress-bar-webpack-plugin");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("script-ext-html-webpack-plugin");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("vue-server-renderer");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("vue-ssr-webpack-plugin");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("webpack-bundle-analyzer");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ })
/******/ ]);
//# sourceMappingURL=nuxt.js.map