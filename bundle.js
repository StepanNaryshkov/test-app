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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[19.82,41.33]},\"properties\":{\"capital\":\"Tirana\",\"country\":\"Albania\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[1.52,42.51]},\"properties\":{\"capital\":\"Andorra la Vella\",\"country\":\"Andorra\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[16.37,48.21]},\"properties\":{\"capital\":\"Vienna\",\"country\":\"Austria\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[27.57,53.9]},\"properties\":{\"capital\":\"Minsk\",\"country\":\"Belarus\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[4.35,50.85]},\"properties\":{\"capital\":\"Brussels\",\"country\":\"Belgium\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[18.36,43.85]},\"properties\":{\"capital\":\"Sarajevo\",\"country\":\"Bosnia and Herzegovina\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[23.32,42.7]},\"properties\":{\"capital\":\"Sofia\",\"country\":\"Bulgaria\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[15.98,45.81]},\"properties\":{\"capital\":\"Zagreb\",\"country\":\"Croatia\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[33.37,35.17]},\"properties\":{\"capital\":\"Nicosia\",\"country\":\"Cyprus\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[14.42,50.09]},\"properties\":{\"capital\":\"Prague\",\"country\":\"Czech Republic\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[12.57,55.68]},\"properties\":{\"capital\":\"Copenhagen\",\"country\":\"Denmark\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[24.75,59.44]},\"properties\":{\"capital\":\"Tallinn\",\"country\":\"Estonia\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-6.77,62.01]},\"properties\":{\"capital\":\"Tórshavn\",\"country\":\"Faroe Islands\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[24.94,60.17]},\"properties\":{\"capital\":\"Helsinki\",\"country\":\"Finland\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[2.35,48.85]},\"properties\":{\"capital\":\"Paris\",\"country\":\"France\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[13.41,52.52]},\"properties\":{\"capital\":\"Berlin\",\"country\":\"Germany\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-5.35,36.14]},\"properties\":{\"capital\":\"Gibraltar\",\"country\":\"Gibraltar\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[23.72,37.98]},\"properties\":{\"capital\":\"Athens\",\"country\":\"Greece\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.54,49.46]},\"properties\":{\"capital\":\"St Peter Port\",\"country\":\"Guernsey\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[19.04,47.5]},\"properties\":{\"capital\":\"Budapest\",\"country\":\"Hungary\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-21.9,64.14]},\"properties\":{\"capital\":\"Reykjavík\",\"country\":\"Iceland\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-6.25,53.33]},\"properties\":{\"capital\":\"Dublin\",\"country\":\"Ireland\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-4.48,54.15]},\"properties\":{\"capital\":\"Douglas\",\"country\":\"Isle of Man\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[12.48,41.89]},\"properties\":{\"capital\":\"Rome\",\"country\":\"Italy\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-2.1,49.19]},\"properties\":{\"capital\":\"Saint Helier\",\"country\":\"Jersey\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[21.17,42.67]},\"properties\":{\"capital\":\"Pristina\",\"country\":\"Kosovo\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[24.11,56.95]},\"properties\":{\"capital\":\"Riga\",\"country\":\"Latvia\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[9.52,47.14]},\"properties\":{\"capital\":\"Vaduz\",\"country\":\"Liechtenstein\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[25.28,54.69]},\"properties\":{\"capital\":\"Vilnius\",\"country\":\"Lithuania\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[6.13,49.61]},\"properties\":{\"capital\":\"Luxembourg\",\"country\":\"Luxembourg\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[21.43,42]},\"properties\":{\"capital\":\"Skopje\",\"country\":\"Macedonia\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[14.51,35.9]},\"properties\":{\"capital\":\"Valletta\",\"country\":\"Malta\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[28.86,47.01]},\"properties\":{\"capital\":\"Chişinău\",\"country\":\"Moldova\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[7.42,43.73]},\"properties\":{\"capital\":\"Monaco\",\"country\":\"Monaco\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[19.26,42.44]},\"properties\":{\"capital\":\"Podgorica\",\"country\":\"Montenegro\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[4.89,52.37]},\"properties\":{\"capital\":\"Amsterdam\",\"country\":\"Netherlands\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[10.75,59.91]},\"properties\":{\"capital\":\"Oslo\",\"country\":\"Norway\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[21.01,52.23]},\"properties\":{\"capital\":\"Warsaw\",\"country\":\"Poland\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-9.13,38.72]},\"properties\":{\"capital\":\"Lisbon\",\"country\":\"Portugal\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[26.11,44.43]},\"properties\":{\"capital\":\"Bucharest\",\"country\":\"Romania\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[37.62,55.75]},\"properties\":{\"capital\":\"Moscow\",\"country\":\"Russia\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[12.45,43.94]},\"properties\":{\"capital\":\"San Marino\",\"country\":\"San Marino\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[20.47,44.8]},\"properties\":{\"capital\":\"Belgrade\",\"country\":\"Serbia\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[17.11,48.15]},\"properties\":{\"capital\":\"Bratislava\",\"country\":\"Slovakia\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[14.51,46.05]},\"properties\":{\"capital\":\"Ljubljana\",\"country\":\"Slovenia\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-3.7,40.42]},\"properties\":{\"capital\":\"Madrid\",\"country\":\"Spain\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[15.64,78.22]},\"properties\":{\"capital\":\"Longyearbyen\",\"country\":\"Svalbard and Jan Mayen\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[18.06,59.33]},\"properties\":{\"capital\":\"Stockholm\",\"country\":\"Sweden\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[7.45,46.95]},\"properties\":{\"capital\":\"Berne\",\"country\":\"Switzerland\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[30.52,50.45]},\"properties\":{\"capital\":\"Kyiv\",\"country\":\"Ukraine\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[-0.13,51.51]},\"properties\":{\"capital\":\"London\",\"country\":\"United Kingdom\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[12.45,41.9]},\"properties\":{\"capital\":\"Vatican\",\"country\":\"Vatican\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[37.8,48]},\"properties\":{\"capital\":\"Donetsk\",\"country\":\"Ukraine\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[34.98,48.45]},\"properties\":{\"capital\":\"Dnipro\",\"country\":\"Ukraine\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[22.28,48.62]},\"properties\":{\"capital\":\"Uzhhorod\",\"country\":\"Ukraine\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[24.03,49.84]},\"properties\":{\"capital\":\"Lviv\",\"country\":\"Ukraine\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[44.62,33.53]},\"properties\":{\"capital\":\"Sevastopol\",\"country\":\"Ukraine\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[25.59,49.55]},\"properties\":{\"capital\":\"Ternopil\",\"country\":\"Ukraine\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[36.23,49.96]},\"properties\":{\"capital\":\"Kharkiv\",\"country\":\"Ukraine\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[36.23,49.98]},\"properties\":{\"capital\":\"Odesa\",\"country\":\"Ukraine\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[26.25,50.61]},\"properties\":{\"capital\":\"Rivne\",\"country\":\"Ukraine\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[32.05,49.44]},\"properties\":{\"capital\":\"Cherkasy\",\"country\":\"Ukraine\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[34.55,49.58]},\"properties\":{\"capital\":\"Poltava\",\"country\":\"Ukraine\"}}]");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/css/index.css
var css = __webpack_require__(2);

// CONCATENATED MODULE: ./src/js/attack-types.js
var attackTypes = [{
  name: 'rocket'
}, {
  name: 'drone'
}, {
  name: 'plane'
}, {
  name: 'helicopter'
}];
// EXTERNAL MODULE: ./src/js/cities.json
var cities = __webpack_require__(0);

// CONCATENATED MODULE: ./src/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ATTACKS_BODY = document.getElementById("attacks-body");
var ACTIVE_ATTACK = document.getElementById("active-attack");
var ANGLE = document.getElementById("angle");
var RANGE = document.getElementById("range");
var SUBMIT = document.getElementById("submit");
var MAX_DISTANCE = 10000;
var STEP_DISTANCE = 1.1057; // 1.1057km = 0.01 lat, The approximate conversions are: Latitude: 1 deg = 110.574 km.

var MAX_STEPS_DISTANCE = Math.floor(MAX_DISTANCE / STEP_DISTANCE);

var customToFixed = function customToFixed(num) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return Number((Math.round(num * 100) / 100).toFixed(count));
};

Number.prototype.toRad = function () {
  //'this' is the current number the function is acting on.  
  //e.g. 360.toRad() == 2PI radians
  return this * Math.PI / 180;
};

Number.prototype.toDeg = function () {
  return this * 180 / Math.PI;
};

function getEnd(lat1, lon1, bearing, d) {
  var R = 6371;
  var brng = bearing.toRad();
  d = d * 1.852; // convert nautical miles to km

  lat1 = lat1.toRad(); //  Current lat point converted to radians

  lon1 = lon1.toRad(); //  Current long point converted to radians

  var lat2 = Math.asin(Math.sin(lat1) * Math.cos(d / R) + Math.cos(lat1) * Math.sin(d / R) * Math.cos(brng));
  var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(d / R) * Math.cos(lat1), Math.cos(d / R) - Math.sin(lat1) * Math.sin(lat2));
  lat2 = lat2.toDeg();
  lon2 = lon2.toDeg();
  return {
    lat: customToFixed(lat2),
    lon: customToFixed(lon2)
  };
}

var src_App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.createAttacksTypes();
    this.activeAttack = null;
    this.currentLocation = {
      latitude: null,
      longitude: null
    };
    SUBMIT.addEventListener('click', this.submit.bind(this));
  }

  _createClass(App, [{
    key: "submit",
    value: function submit() {
      var curLat = this.currentLocation.latitude;
      var curLon = this.currentLocation.longitude;
      var city = false;

      for (var i = 0; i < MAX_STEPS_DISTANCE && !city; i++) {
        var _getEnd = getEnd(customToFixed(curLat), customToFixed(curLon), Number(RANGE.value), i * STEP_DISTANCE),
            lat = _getEnd.lat,
            lon = _getEnd.lon;

        for (var j = 0; j < cities.length; j++) {
          var curCity = cities[j];

          var _curCity$geometry$coo = _slicedToArray(curCity.geometry.coordinates, 2),
              citLat = _curCity$geometry$coo[0],
              citLon = _curCity$geometry$coo[1];

          if (Math.round(citLat) === Math.round(lat) && Math.round(citLon) === Math.round(lon)) {
            // should be better ! lack of time
            city = curCity;
            break;
          }
        }
      }

      if (city) {
        alert("Potential city is': ".concat(city.properties.capital));
      } else {
        alert("No potential city from the list");
      }
    }
  }, {
    key: "createAttacksTypes",
    value: function createAttacksTypes() {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < attackTypes.length; i++) {
        var btn = document.createElement("button");
        var currentType = attackTypes[i].name;
        btn.textContent = currentType;
        btn.setAttribute("class", currentType);
        fragment.appendChild(btn);
      }

      ATTACKS_BODY.appendChild(fragment);
      this.initHandlingAttackType();
    }
  }, {
    key: "initHandlingAttackType",
    value: function initHandlingAttackType() {
      var _this = this;

      ATTACKS_BODY.addEventListener("click", function (ev) {
        var curAttack = ev.target.className;

        if (ev.target.className) {
          ACTIVE_ATTACK.classList.remove(_this.activeAttack);
          _this.activeAttack = curAttack;
          ACTIVE_ATTACK.setAttribute("class", curAttack);
        }
      });
      this.initGeolocation();
    }
  }, {
    key: "initGeolocation",
    value: function initGeolocation() {
      var _this2 = this;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          return _this2.showPosition(position, _this2);
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }

      this.initCompass();
    }
  }, {
    key: "initCompass",
    value: function initCompass() {
      var changeConditionsArrow = function changeConditionsArrow(angle) {
        window.requestAnimationFrame(function () {
          /* requestAnimationFrame is optional */
          ANGLE.textContent = angle;
          document.getElementById('arrowSVG').style = 'transform: rotate(' + angle + 'deg)';
        });
      };

      RANGE.value = 0; // default

      RANGE.addEventListener('input', function (e) {
        return changeConditionsArrow(e.target.value);
      });
      RANGE.addEventListener('change', function (e) {
        return changeConditionsArrow(e.target.value);
      });
    }
  }, {
    key: "showPosition",
    value: function showPosition(position, cxt) {
      cxt.currentLocation.latitude = position.coords.latitude;
      cxt.currentLocation.longitude = position.coords.longitude;
    }
  }]);

  return App;
}();

new src_App();

/***/ })
/******/ ]);