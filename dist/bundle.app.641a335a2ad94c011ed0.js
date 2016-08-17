webpackJsonp([5],{

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _mostRun = __webpack_require__(20);

var _mostRun2 = _interopRequireDefault(_mostRun);

var _dom = __webpack_require__(14);

var _most = __webpack_require__(11);

var _most2 = _interopRequireDefault(_most);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentNames = ['helloworld', 'counter', 'checkbox', 'bmicalculator'];

var randomComponentName = function randomComponentName() {
  return componentNames[Math.floor(Math.random() * componentNames.length)];
};

var drivers = {
  DOM: (0, _dom.makeDOMDriver)('#app')
};

var loadComponent = function loadComponent(componentName, sources) {
  return _most2.default.fromPromise(__webpack_require__(65)("./" + componentName).then(function (Component) {
    return Component.default(sources).DOM;
  })).chain(function (flattenPromise) {
    return flattenPromise;
  });
};

function main(sources) {
  var intent = function intent() {
    return sources.DOM.select('.component-loader').events('click');
  };
  var model = function model(intent$) {
    return intent$.chain(function () {
      return _most2.default.combine(function (first, second) {
        return (0, _dom.div)([first, second]);
      }, _most2.default.of((0, _dom.div)([(0, _dom.hr)(), (0, _dom.h4)('Click the button below to dinamically load a random component'), (0, _dom.button)('.component-loader', 'Load component'), (0, _dom.hr)(), (0, _dom.h5)('Random component:')])), loadComponent(randomComponentName(), sources));
    });
  };

  var view = function view(model$) {
    return model$.startWith((0, _dom.div)([(0, _dom.hr)(), (0, _dom.h4)('Click the button below to dinamically load a random component'), (0, _dom.button)('.component-loader', 'Load component'), (0, _dom.hr)(), (0, _dom.h5)('Random component:')]));
  };

  var sinks = {
    DOM: view(model(intent(sources)))
  };
  return sinks;
}
_mostRun2.default.run(main, drivers);

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./bmicalculator": [
		67,
		0
	],
	"./bmicalculator.js": [
		67,
		0
	],
	"./checkbox": [
		68,
		4
	],
	"./checkbox.js": [
		68,
		4
	],
	"./counter": [
		69,
		3
	],
	"./counter.js": [
		69,
		3
	],
	"./helloworld": [
		70,
		2
	],
	"./helloworld.js": [
		70,
		2
	],
	"./labeledslider": [
		66,
		1
	],
	"./labeledslider.js": [
		66,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 65;


/***/ }

},[207]);