webpackJsonp([3],{

/***/ 209:
/***/ function(module, exports) {

"use strict";
"use strict";
var counter = 0;
function newScope() {
    return "cycle" + ++counter;
}
function checkIsolateArgs(dataflowComponent, scope) {
    if (typeof dataflowComponent !== "function") {
        throw new Error("First argument given to isolate() must be a " +
            "'dataflowComponent' function");
    }
    if (scope === null) {
        throw new Error("Second argument given to isolate() must not be null");
    }
}
function isolateAllSources(sources, scope) {
    var scopedSources = {};
    for (var key in sources) {
        if (sources.hasOwnProperty(key) && sources[key]
            && typeof sources[key].isolateSource === "function") {
            scopedSources[key] = sources[key].isolateSource(sources[key], scope);
        }
        else if (sources.hasOwnProperty(key)) {
            scopedSources[key] = sources[key];
        }
    }
    return scopedSources;
}
function isolateAllSinks(sources, sinks, scope) {
    var scopedSinks = {};
    for (var key in sinks) {
        if (sinks.hasOwnProperty(key)
            && sources[key]
            && typeof sources[key].isolateSink === "function") {
            scopedSinks[key] = sources[key].isolateSink(sinks[key], scope);
        }
        else if (sinks.hasOwnProperty(key)) {
            scopedSinks[key] = sinks[key];
        }
    }
    return scopedSinks;
}
/**
 * Takes a `dataflowComponent` function and an optional `scope` string, and
 * returns a scoped version of the `dataflowComponent` function.
 *
 * When the scoped dataflow component is invoked, each source provided to the
 * scoped dataflowComponent is isolated to the scope using
 * `source.isolateSource(source, scope)`, if possible. Likewise, the sinks
 * returned from the scoped dataflow component are isolate to the scope using
 * `source.isolateSink(sink, scope)`.
 *
 * If the `scope` is not provided, a new scope will be automatically created.
 * This means that while **`isolate(dataflowComponent, scope)` is pure**
 * (referentially transparent), **`isolate(dataflowComponent)` is impure**
 * (not referentially transparent). Two calls to `isolate(Foo, bar)` will
 * generate two indistinct dataflow components. But, two calls to `isolate(Foo)`
 * will generate two distinct dataflow components.
 *
 * Note that both `isolateSource()` and `isolateSink()` are static members of
 * `source`. The reason for this is that drivers produce `source` while the
 * application produces `sink`, and it's the driver's responsibility to
 * implement `isolateSource()` and `isolateSink()`.
 *
 * @param {Function} dataflowComponent a function that takes `sources` as input
 * and outputs a collection of `sinks`.
 * @param {String} scope an optional string that is used to isolate each
 * `sources` and `sinks` when the returned scoped dataflow component is invoked.
 * @return {Function} the scoped dataflow component function that, as the
 * original `dataflowComponent` function, takes `sources` and returns `sinks`.
 * @function isolate
 */
function isolate(component, scope) {
    if (scope === void 0) { scope = newScope(); }
    checkIsolateArgs(component, scope);
    var convertedScope = typeof scope === 'string' ? scope : scope.toString();
    return function scopedComponent(sources) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var scopedSources = isolateAllSources(sources, convertedScope);
        var sinks = component.apply(void 0, [scopedSources].concat(rest));
        var scopedSinks = isolateAllSinks(sources, sinks, convertedScope);
        return scopedSinks;
    };
}
isolate.reset = function () { return counter = 0; };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isolate;
//# sourceMappingURL=index.js.map

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _most = __webpack_require__(11);

var _most2 = _interopRequireDefault(_most);

var _dom = __webpack_require__(14);

var _isolate = __webpack_require__(209);

var _isolate2 = _interopRequireDefault(_isolate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Counter(sources) {
  var action$ = _most2.default.merge(sources.DOM.select('.decrement').events('click').map(function () {
    return -1;
  }), sources.DOM.select('.increment').events('click').map(function () {
    return +1;
  }));
  var count$ = action$.scan(function (x, y) {
    return x + y;
  }, 0);
  return {
    DOM: count$.map(function (count) {
      return (0, _dom.div)([(0, _dom.button)('.decrement', 'Decrement'), (0, _dom.button)('.increment', 'Increment'), (0, _dom.p)('Counter: ' + count)]);
    })
  };
}

exports.default = function (sources) {
  return (0, _isolate2.default)(Counter)(sources);
};

/***/ }

});