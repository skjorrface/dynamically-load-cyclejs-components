/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();

/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;

/******/ 		script.src = __webpack_require__.p + "bundle." + chunkId + "." + "641a335a2ad94c011ed0" + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);

/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		return installedChunks[chunkId][2] = promise;
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 208);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = Stream;

function Stream(source) {
	this.source = source;
}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Disposable = __webpack_require__(165);
var SettableDisposable = __webpack_require__(166);
var isPromise = __webpack_require__(30).isPromise;
var base = __webpack_require__(3);

var map = base.map;
var identity = base.id;

exports.tryDispose = tryDispose;
exports.create = create;
exports.once = once;
exports.empty = empty;
exports.all = all;
exports.settable = settable;
exports.promised = promised;

/**
 * Call disposable.dispose.  If it returns a promise, catch promise
 * error and forward it through the provided sink.
 * @param {number} t time
 * @param {{dispose: function}} disposable
 * @param {{error: function}} sink
 * @return {*} result of disposable.dispose
 */
function tryDispose(t, disposable, sink) {
	var result = disposeSafely(disposable);
	return isPromise(result)
		? result.catch(function (e) {
			sink.error(t, e);
		})
		: result;
}

/**
 * Create a new Disposable which will dispose its underlying resource
 * at most once.
 * @param {function} dispose function
 * @param {*?} data any data to be passed to disposer function
 * @return {Disposable}
 */
function create(dispose, data) {
	return once(new Disposable(dispose, data));
}

/**
 * Create a noop disposable. Can be used to satisfy a Disposable
 * requirement when no actual resource needs to be disposed.
 * @return {Disposable|exports|module.exports}
 */
function empty() {
	return new Disposable(identity, void 0);
}

/**
 * Create a disposable that will dispose all input disposables in parallel.
 * @param {Array<Disposable>} disposables
 * @return {Disposable}
 */
function all(disposables) {
	return create(disposeAll, disposables);
}

function disposeAll(disposables) {
	return Promise.all(map(disposeSafely, disposables));
}

function disposeSafely(disposable) {
	try {
		return disposable.dispose();
	} catch(e) {
		return Promise.reject(e);
	}
}

/**
 * Create a disposable from a promise for another disposable
 * @param {Promise<Disposable>} disposablePromise
 * @return {Disposable}
 */
function promised(disposablePromise) {
	return create(disposePromise, disposablePromise);
}

function disposePromise(disposablePromise) {
	return disposablePromise.then(disposeOne);
}

function disposeOne(disposable) {
	return disposable.dispose();
}

/**
 * Create a disposable proxy that allows its underlying disposable to
 * be set later.
 * @return {SettableDisposable}
 */
function settable() {
	return new SettableDisposable();
}

/**
 * Wrap an existing disposable (which may not already have been once()d)
 * so that it will only dispose its underlying resource at most once.
 * @param {{ dispose: function() }} disposable
 * @return {Disposable} wrapped disposable
 */
function once(disposable) {
	return new Disposable(disposeMemoized, memoized(disposable));
}

function disposeMemoized(memoized) {
	if(!memoized.disposed) {
		memoized.disposed = true;
		memoized.value = disposeSafely(memoized.disposable);
		memoized.disposable = void 0;
	}

	return memoized.value;
}

function memoized(disposable) {
	return { disposed: false, disposable: disposable, value: void 0 };
}


/***/ },
/* 2 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = Pipe;

/**
 * A sink mixin that simply forwards event, end, and error to
 * another sink.
 * @param sink
 * @constructor
 */
function Pipe(sink) {
	this.sink = sink;
}

Pipe.prototype.event = function(t, x) {
	return this.sink.event(t, x);
};

Pipe.prototype.end = function(t, x) {
	return this.sink.end(t, x);
};

Pipe.prototype.error = function(t, e) {
	return this.sink.error(t, e);
};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.mostPrelude = global.mostPrelude || {})));
}(this, (function (exports) { 'use strict';

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  // Non-mutating array operations

  // cons :: a -> [a] -> [a]
  // a with x prepended
  function cons (x, a) {
    var l = a.length
    var b = new Array(l + 1)
    b[0] = x
    for (var i = 0; i < l; ++i) {
      b[i + 1] = a[i]
    }
    return b
  }

  // append :: a -> [a] -> [a]
  // a with x appended
  function append (x, a) {
    var l = a.length
    var b = new Array(l + 1)
    for (var i = 0; i < l; ++i) {
      b[i] = a[i]
    }

    b[l] = x
    return b
  }

  // drop :: Int -> [a] -> [a]
  // drop first n elements
  function drop (n, a) { // eslint-disable-line complexity
    if (n < 0) {
      throw new TypeError('n must be >= 0')
    }

    var l = a.length
    if (n === 0 || l === 0) {
      return a
    }

    if (n >= l) {
      return []
    }

    return unsafeDrop(n, a, l - n)
  }

  // unsafeDrop :: Int -> [a] -> Int -> [a]
  // Internal helper for drop
  function unsafeDrop (n, a, l) {
    var b = new Array(l)
    for (var i = 0; i < l; ++i) {
      b[i] = a[n + i]
    }
    return b
  }

  // tail :: [a] -> [a]
  // drop head element
  function tail (a) {
    return drop(1, a)
  }

  // copy :: [a] -> [a]
  // duplicate a (shallow duplication)
  function copy (a) {
    var l = a.length
    var b = new Array(l)
    for (var i = 0; i < l; ++i) {
      b[i] = a[i]
    }
    return b
  }

  // map :: (a -> b) -> [a] -> [b]
  // transform each element with f
  function map (f, a) {
    var l = a.length
    var b = new Array(l)
    for (var i = 0; i < l; ++i) {
      b[i] = f(a[i])
    }
    return b
  }

  // reduce :: (a -> b -> a) -> a -> [b] -> a
  // accumulate via left-fold
  function reduce (f, z, a) {
    var r = z
    for (var i = 0, l = a.length; i < l; ++i) {
      r = f(r, a[i], i)
    }
    return r
  }

  // replace :: a -> Int -> [a]
  // replace element at index
  function replace (x, i, a) { // eslint-disable-line complexity
    if (i < 0) {
      throw new TypeError('i must be >= 0')
    }

    var l = a.length
    var b = new Array(l)
    for (var j = 0; j < l; ++j) {
      b[j] = i === j ? x : a[j]
    }
    return b
  }

  // remove :: Int -> [a] -> [a]
  // remove element at index
  function remove (i, a) {  // eslint-disable-line complexity
    if (i < 0) {
      throw new TypeError('i must be >= 0')
    }

    var l = a.length
    if (l === 0 || i >= l) { // exit early if index beyond end of array
      return a
    }

    if (l === 1) { // exit early if index in bounds and length === 1
      return []
    }

    return unsafeRemove(i, a, l - 1)
  }

  // unsafeRemove :: Int -> [a] -> Int -> [a]
  // Internal helper to remove element at index
  function unsafeRemove (i, a, l) {
    var b = new Array(l)
    var j
    for (j = 0; j < i; ++j) {
      b[j] = a[j]
    }
    for (j = i; j < l; ++j) {
      b[j] = a[j + 1]
    }

    return b
  }

  // removeAll :: (a -> boolean) -> [a] -> [a]
  // remove all elements matching a predicate
  function removeAll (f, a) {
    var l = a.length
    var b = new Array(l)
    var j = 0
    for (var x, i = 0; i < l; ++i) {
      x = a[i]
      if (!f(x)) {
        b[j] = x
        ++j
      }
    }

    b.length = j
    return b
  }

  // findIndex :: a -> [a] -> Int
  // find index of x in a, from the left
  function findIndex (x, a) {
    for (var i = 0, l = a.length; i < l; ++i) {
      if (x === a[i]) {
        return i
      }
    }
    return -1
  }

  // isArrayLike :: * -> boolean
  // Return true iff x is array-like
  function isArrayLike (x) {
    return x != null && typeof x.length === 'number' && typeof x !== 'function'
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  // id :: a -> a
  var id = function (x) { return x; }

  // compose :: (b -> c) -> (a -> b) -> (a -> c)
  var compose = function (f, g) { return function (x) { return f(g(x)); }; }

  // apply :: (a -> b) -> a -> b
  var apply = function (f, x) { return f(x); }

  // curry2 :: ((a, b) -> c) -> (a -> b -> c)
  function curry2 (f) {
    function curried (a, b) {
      switch (arguments.length) {
        case 0: return curried
        case 1: return function (b) { return f(a, b); }
        default: return f(a, b)
      }
    }
    return curried
  }

  // curry3 :: ((a, b, c) -> d) -> (a -> b -> c -> d)
  function curry3 (f) {
    function curried (a, b, c) { // eslint-disable-line complexity
      switch (arguments.length) {
        case 0: return curried
        case 1: return curry2(function (b, c) { return f(a, b, c); })
        case 2: return function (c) { return f(a, b, c); }
        default:return f(a, b, c)
      }
    }
    return curried
  }

  exports.cons = cons;
  exports.append = append;
  exports.drop = drop;
  exports.tail = tail;
  exports.copy = copy;
  exports.map = map;
  exports.reduce = reduce;
  exports.replace = replace;
  exports.remove = remove;
  exports.removeAll = removeAll;
  exports.findIndex = findIndex;
  exports.isArrayLike = isArrayLike;
  exports.id = id;
  exports.compose = compose;
  exports.apply = apply;
  exports.curry2 = curry2;
  exports.curry3 = curry3;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=prelude.js.map


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(206);
exports.Stream = core_1.Stream;
exports.MemoryStream = core_1.MemoryStream;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = core_1.Stream;
//# sourceMappingURL=index.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = function (value) {
	if (value == null) throw new TypeError("Cannot use null or undefined");
	return value;
};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var xstream_1 = __webpack_require__(4);
var XStreamAdapter = {
    adapt: function (originStream, originStreamSubscribe) {
        if (XStreamAdapter.isValidStream(originStream)) {
            return originStream;
        }
        ;
        var dispose = null;
        return xstream_1.default.create({
            start: function (out) {
                var observer = out;
                dispose = originStreamSubscribe(originStream, observer);
            },
            stop: function () {
                if (typeof dispose === 'function') {
                    dispose();
                }
            }
        });
    },
    makeSubject: function () {
        var stream = xstream_1.default.create();
        var observer = {
            next: function (x) { stream.shamefullySendNext(x); },
            error: function (err) { stream.shamefullySendError(err); },
            complete: function () { stream.shamefullySendComplete(); }
        };
        return { observer: observer, stream: stream };
    },
    remember: function (stream) {
        return stream.remember();
    },
    isValidStream: function (stream) {
        return (typeof stream.addListener === 'function' &&
            typeof stream.shamefullySendNext === 'function');
    },
    streamSubscribe: function (stream, observer) {
        stream.addListener(observer);
        return function () { return stream.removeListener(observer); };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = XStreamAdapter;
//# sourceMappingURL=index.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var fatal = __webpack_require__(31);

module.exports = PropagateTask;

function PropagateTask(run, value, sink) {
	this._run = run;
	this.value = value;
	this.sink = sink;
	this.active = true;
}

PropagateTask.event = function(value, sink) {
	return new PropagateTask(emit, value, sink);
};

PropagateTask.end = function(value, sink) {
	return new PropagateTask(end, value, sink);
};

PropagateTask.error = function(value, sink) {
	return new PropagateTask(error, value, sink);
};

PropagateTask.prototype.dispose = function() {
	this.active = false;
};

PropagateTask.prototype.run = function(t) {
	if(!this.active) {
		return;
	}
	this._run(t, this.value, this.sink);
};

PropagateTask.prototype.error = function(t, e) {
	if(!this.active) {
		return fatal(e);
	}
	this.sink.error(t, e);
};

function error(t, e, sink) {
	sink.error(t, e);
}

function emit(t, x, sink) {
	sink.event(t, x);
}

function end(t, x, sink) {
	sink.end(t, x);
}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var assign        = __webpack_require__(25)
  , normalizeOpts = __webpack_require__(108)
  , isCallable    = __webpack_require__(102)
  , contains      = __webpack_require__(45)

  , d;

d = module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if ((arguments.length < 2) || (typeof dscr !== 'string')) {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (dscr == null) {
		c = w = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
		w = contains.call(dscr, 'w');
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== 'string') {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (get == null) {
		get = undefined;
	} else if (!isCallable(get)) {
		options = get;
		get = set = undefined;
	} else if (set == null) {
		set = undefined;
	} else if (!isCallable(set)) {
		options = set;
		set = undefined;
	}
	if (dscr == null) {
		c = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ },
/* 9 */
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = function (fn) {
	if (typeof fn !== 'function') throw new TypeError(fn + " is not a function");
	return fn;
};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var dispose = __webpack_require__(1);
var PropagateTask = __webpack_require__(7);

exports.of = streamOf;
exports.empty = empty;
exports.never = never;

/**
 * Stream containing only x
 * @param {*} x
 * @returns {Stream}
 */
 function streamOf(x) {
 	return new Stream(new Just(x));
 }

 function Just(x) {
 	this.value = x;
 }

 Just.prototype.run = function(sink, scheduler) {
 	return scheduler.asap(new PropagateTask(runJust, this.value, sink));
 };

 function runJust(t, x, sink) {
 	sink.event(t, x);
 	sink.end(t, void 0);
 }

/**
 * Stream containing no events and ends immediately
 * @returns {Stream}
 */
function empty() {
	return EMPTY;
}

function EmptySource() {}

EmptySource.prototype.run = function(sink, scheduler) {
	var task = PropagateTask.end(void 0, sink);
	scheduler.asap(task);

	return dispose.create(disposeEmpty, task);
};

function disposeEmpty(task) {
	return task.dispose();
}

var EMPTY = new Stream(new EmptySource());

/**
 * Stream containing no events and never ends
 * @returns {Stream}
 */
function never() {
	return NEVER;
}

function NeverSource() {}

NeverSource.prototype.run = function() {
	return dispose.empty();
};

var NEVER = new Stream(new NeverSource());


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var base = __webpack_require__(3);
var core = __webpack_require__(10);
var from = __webpack_require__(178).from;
var periodic = __webpack_require__(184).periodic;
var symbolObservable = __webpack_require__(64).default;

/**
 * Core stream type
 * @type {Stream}
 */
exports.Stream = Stream;

// Add of and empty to constructor for fantasy-land compat
exports.of       = Stream.of    = core.of;
exports.just     = core.of; // easier ES6 import alias
exports.empty    = Stream.empty = core.empty;
exports.never    = core.never;
exports.from     = from;
exports.periodic = periodic;

//-----------------------------------------------------------------------
// Draft ES Observable proposal interop
// https://github.com/zenparsing/es-observable

var subscribe = __webpack_require__(170).subscribe;

Stream.prototype.subscribe = function(subscriber) {
	return subscribe(subscriber, this);
};

Stream.prototype[symbolObservable] = function() {
	return this;
};

//-----------------------------------------------------------------------
// Fluent adapter

var thru = __webpack_require__(160).thru;

/**
 * Adapt a functional stream transform to fluent style.
 * It applies f to the this stream object
 * @param  {function(s: Stream): Stream} f function that
 * receives the stream itself and must return a new stream
 * @return {Stream}
 */
Stream.prototype.thru = function(f) {
	return thru(f, this);
}

//-----------------------------------------------------------------------
// Adapting other sources

var events = __webpack_require__(180);

/**
 * Create a stream of events from the supplied EventTarget or EventEmitter
 * @param {String} event event name
 * @param {EventTarget|EventEmitter} source EventTarget or EventEmitter. The source
 *  must support either addEventListener/removeEventListener (w3c EventTarget:
 *  http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget),
 *  or addListener/removeListener (node EventEmitter: http://nodejs.org/api/events.html)
 * @returns {Stream} stream of events of the specified type from the source
 */
exports.fromEvent = events.fromEvent;

//-----------------------------------------------------------------------
// Observing

var observe = __webpack_require__(155);

exports.observe = observe.observe;
exports.forEach = observe.observe;
exports.drain   = observe.drain;

/**
 * Process all the events in the stream
 * @returns {Promise} promise that fulfills when the stream ends, or rejects
 *  if the stream fails with an unhandled error.
 */
Stream.prototype.observe = Stream.prototype.forEach = function(f) {
	return observe.observe(f, this);
};

/**
 * Consume all events in the stream, without providing a function to process each.
 * This causes a stream to become active and begin emitting events, and is useful
 * in cases where all processing has been setup upstream via other combinators, and
 * there is no need to process the terminal events.
 * @returns {Promise} promise that fulfills when the stream ends, or rejects
 *  if the stream fails with an unhandled error.
 */
Stream.prototype.drain = function() {
	return observe.drain(this);
};

//-------------------------------------------------------

var loop = __webpack_require__(153).loop;

exports.loop = loop;

/**
 * Generalized feedback loop. Call a stepper function for each event. The stepper
 * will be called with 2 params: the current seed and the an event value.  It must
 * return a new { seed, value } pair. The `seed` will be fed back into the next
 * invocation of stepper, and the `value` will be propagated as the event value.
 * @param {function(seed:*, value:*):{seed:*, value:*}} stepper loop step function
 * @param {*} seed initial seed value passed to first stepper call
 * @returns {Stream} new stream whose values are the `value` field of the objects
 * returned by the stepper
 */
Stream.prototype.loop = function(stepper, seed) {
	return loop(stepper, seed, this);
};

//-------------------------------------------------------

var accumulate = __webpack_require__(145);

exports.scan   = accumulate.scan;
exports.reduce = accumulate.reduce;

/**
 * Create a stream containing successive reduce results of applying f to
 * the previous reduce result and the current stream item.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial initial value
 * @returns {Stream} new stream containing successive reduce results
 */
Stream.prototype.scan = function(f, initial) {
	return accumulate.scan(f, initial, this);
};

/**
 * Reduce the stream to produce a single result.  Note that reducing an infinite
 * stream will return a Promise that never fulfills, but that may reject if an error
 * occurs.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial optional initial value
 * @returns {Promise} promise for the file result of the reduce
 */
Stream.prototype.reduce = function(f, initial) {
	return accumulate.reduce(f, initial, this);
};

//-----------------------------------------------------------------------
// Building and extending

var unfold = __webpack_require__(185);
var iterate = __webpack_require__(183);
var generate = __webpack_require__(182);
var build = __webpack_require__(147);

exports.unfold    = unfold.unfold;
exports.iterate   = iterate.iterate;
exports.generate  = generate.generate;
exports.concat    = build.concat;
exports.startWith = build.cons;

/**
 * @param {Stream} tail
 * @returns {Stream} new stream containing all items in this followed by
 *  all items in tail
 */
Stream.prototype.concat = function(tail) {
	return build.concat(this, tail);
};

/**
 * @param {*} x value to prepend
 * @returns {Stream} a new stream with x prepended
 */
Stream.prototype.startWith = function(x) {
	return build.cons(x, this);
};

//-----------------------------------------------------------------------
// Transforming

var transform = __webpack_require__(17);
var applicative = __webpack_require__(146);

exports.map      = transform.map;
exports.constant = transform.constant;
exports.tap      = transform.tap;
exports.ap       = applicative.ap;

/**
 * Transform each value in the stream by applying f to each
 * @param {function(*):*} f mapping function
 * @returns {Stream} stream containing items transformed by f
 */
Stream.prototype.map = function(f) {
	return transform.map(f, this);
};

/**
 * Assume this stream contains functions, and apply each function to each item
 * in the provided stream.  This generates, in effect, a cross product.
 * @param {Stream} xs stream of items to which
 * @returns {Stream} stream containing the cross product of items
 */
Stream.prototype.ap = function(xs) {
	return applicative.ap(this, xs);
};

/**
 * Replace each value in the stream with x
 * @param {*} x
 * @returns {Stream} stream containing items replaced with x
 */
Stream.prototype.constant = function(x) {
	return transform.constant(x, this);
};

/**
 * Perform a side effect for each item in the stream
 * @param {function(x:*):*} f side effect to execute for each item. The
 *  return value will be discarded.
 * @returns {Stream} new stream containing the same items as this stream
 */
Stream.prototype.tap = function(f) {
	return transform.tap(f, this);
};

//-----------------------------------------------------------------------
// Transducer support

var transduce = __webpack_require__(163);

exports.transduce = transduce.transduce;

/**
 * Transform this stream by passing its events through a transducer.
 * @param  {function} transducer transducer function
 * @return {Stream} stream of events transformed by the transducer
 */
Stream.prototype.transduce = function(transducer) {
	return transduce.transduce(transducer, this);
};

//-----------------------------------------------------------------------
// FlatMapping

var flatMap = __webpack_require__(57);

exports.flatMap = exports.chain = flatMap.flatMap;
exports.join    = flatMap.join;

/**
 * Map each value in the stream to a new stream, and merge it into the
 * returned outer stream. Event arrival times are preserved.
 * @param {function(x:*):Stream} f chaining function, must return a Stream
 * @returns {Stream} new stream containing all events from each stream returned by f
 */
Stream.prototype.flatMap = Stream.prototype.chain = function(f) {
	return flatMap.flatMap(f, this);
};

/**
 * Monadic join. Flatten a Stream<Stream<X>> to Stream<X> by merging inner
 * streams to the outer. Event arrival times are preserved.
 * @returns {Stream<X>} new stream containing all events of all inner streams
 */
Stream.prototype.join = function() {
	return flatMap.join(this);
};

var continueWith = __webpack_require__(56).continueWith;

exports.continueWith = continueWith;
exports.flatMapEnd = continueWith;

/**
 * Map the end event to a new stream, and begin emitting its values.
 * @param {function(x:*):Stream} f function that receives the end event value,
 * and *must* return a new Stream to continue with.
 * @returns {Stream} new stream that emits all events from the original stream,
 * followed by all events from the stream returned by f.
 */
Stream.prototype.continueWith = Stream.prototype.flatMapEnd = function(f) {
	return continueWith(f, this);
};

var concatMap = __webpack_require__(148).concatMap;

exports.concatMap = concatMap;

Stream.prototype.concatMap = function(f) {
	return concatMap(f, this);
};

//-----------------------------------------------------------------------
// Concurrent merging

var mergeConcurrently = __webpack_require__(16);

exports.mergeConcurrently = mergeConcurrently.mergeConcurrently;

/**
 * Flatten a Stream<Stream<X>> to Stream<X> by merging inner
 * streams to the outer, limiting the number of inner streams that may
 * be active concurrently.
 * @param {number} concurrency at most this many inner streams will be
 *  allowed to be active concurrently.
 * @return {Stream<X>} new stream containing all events of all inner
 *  streams, with limited concurrency.
 */
Stream.prototype.mergeConcurrently = function(concurrency) {
	return mergeConcurrently.mergeConcurrently(concurrency, this);
};

//-----------------------------------------------------------------------
// Merging

var merge = __webpack_require__(154);

exports.merge = merge.merge;
exports.mergeArray = merge.mergeArray;

/**
 * Merge this stream and all the provided streams
 * @returns {Stream} stream containing items from this stream and s in time
 * order.  If two events are simultaneous they will be merged in
 * arbitrary order.
 */
Stream.prototype.merge = function(/*...streams*/) {
	return merge.mergeArray(base.cons(this, arguments));
};

//-----------------------------------------------------------------------
// Combining

var combine = __webpack_require__(55);

exports.combine = combine.combine;
exports.combineArray = combine.combineArray;

/**
 * Combine latest events from all input streams
 * @param {function(...events):*} f function to combine most recent events
 * @returns {Stream} stream containing the result of applying f to the most recent
 *  event of each input stream, whenever a new event arrives on any stream.
 */
Stream.prototype.combine = function(f /*, ...streams*/) {
	return combine.combineArray(f, base.replace(this, 0, arguments));
};

//-----------------------------------------------------------------------
// Sampling

var sample = __webpack_require__(157);

exports.sample = sample.sample;
exports.sampleWith = sample.sampleWith;

/**
 * When an event arrives on sampler, emit the latest event value from stream.
 * @param {Stream} sampler stream of events at whose arrival time
 *  signal's latest value will be propagated
 * @returns {Stream} sampled stream of values
 */
Stream.prototype.sampleWith = function(sampler) {
	return sample.sampleWith(sampler, this);
};

/**
 * When an event arrives on this stream, emit the result of calling f with the latest
 * values of all streams being sampled
 * @param {function(...values):*} f function to apply to each set of sampled values
 * @returns {Stream} stream of sampled and transformed values
 */
Stream.prototype.sample = function(f /* ...streams */) {
	return sample.sampleArray(f, this, base.tail(arguments));
};

//-----------------------------------------------------------------------
// Zipping

var zip = __webpack_require__(164);

exports.zip = zip.zip;

/**
 * Pair-wise combine items with those in s. Given 2 streams:
 * [1,2,3] zipWith f [4,5,6] -> [f(1,4),f(2,5),f(3,6)]
 * Note: zip causes fast streams to buffer and wait for slow streams.
 * @param {function(a:Stream, b:Stream, ...):*} f function to combine items
 * @returns {Stream} new stream containing pairs
 */
Stream.prototype.zip = function(f /*, ...streams*/) {
	return zip.zipArray(f, base.replace(this, 0, arguments));
};

//-----------------------------------------------------------------------
// Switching

var switchLatest = __webpack_require__(159).switch;

exports.switch       = switchLatest;
exports.switchLatest = switchLatest;

/**
 * Given a stream of streams, return a new stream that adopts the behavior
 * of the most recent inner stream.
 * @returns {Stream} switching stream
 */
Stream.prototype.switch = Stream.prototype.switchLatest = function() {
	return switchLatest(this);
};

//-----------------------------------------------------------------------
// Filtering

var filter = __webpack_require__(151);

exports.filter          = filter.filter;
exports.skipRepeats     = exports.distinct   = filter.skipRepeats;
exports.skipRepeatsWith = exports.distinctBy = filter.skipRepeatsWith;

/**
 * Retain only items matching a predicate
 * stream:                           -12345678-
 * filter(x => x % 2 === 0, stream): --2-4-6-8-
 * @param {function(x:*):boolean} p filtering predicate called for each item
 * @returns {Stream} stream containing only items for which predicate returns truthy
 */
Stream.prototype.filter = function(p) {
	return filter.filter(p, this);
};

/**
 * Skip repeated events, using === to compare items
 * stream:           -abbcd-
 * distinct(stream): -ab-cd-
 * @returns {Stream} stream with no repeated events
 */
Stream.prototype.skipRepeats = function() {
	return filter.skipRepeats(this);
};

/**
 * Skip repeated events, using supplied equals function to compare items
 * @param {function(a:*, b:*):boolean} equals function to compare items
 * @returns {Stream} stream with no repeated events
 */
Stream.prototype.skipRepeatsWith = function(equals) {
	return filter.skipRepeatsWith(equals, this);
};

//-----------------------------------------------------------------------
// Slicing

var slice = __webpack_require__(158);

exports.take      = slice.take;
exports.skip      = slice.skip;
exports.slice     = slice.slice;
exports.takeWhile = slice.takeWhile;
exports.skipWhile = slice.skipWhile;

/**
 * stream:          -abcd-
 * take(2, stream): -ab|
 * @param {Number} n take up to this many events
 * @returns {Stream} stream containing at most the first n items from this stream
 */
Stream.prototype.take = function(n) {
	return slice.take(n, this);
};

/**
 * stream:          -abcd->
 * skip(2, stream): ---cd->
 * @param {Number} n skip this many events
 * @returns {Stream} stream not containing the first n events
 */
Stream.prototype.skip = function(n) {
	return slice.skip(n, this);
};

/**
 * Slice a stream by event index. Equivalent to, but more efficient than
 * stream.take(end).skip(start);
 * NOTE: Negative start and end are not supported
 * @param {Number} start skip all events before the start index
 * @param {Number} end allow all events from the start index to the end index
 * @returns {Stream} stream containing items where start <= index < end
 */
Stream.prototype.slice = function(start, end) {
	return slice.slice(start, end, this);
};

/**
 * stream:                        -123451234->
 * takeWhile(x => x < 5, stream): -1234|
 * @param {function(x:*):boolean} p predicate
 * @returns {Stream} stream containing items up to, but not including, the
 * first item for which p returns falsy.
 */
Stream.prototype.takeWhile = function(p) {
	return slice.takeWhile(p, this);
};

/**
 * stream:                        -123451234->
 * skipWhile(x => x < 5, stream): -----51234->
 * @param {function(x:*):boolean} p predicate
 * @returns {Stream} stream containing items following *and including* the
 * first item for which p returns falsy.
 */
Stream.prototype.skipWhile = function(p) {
	return slice.skipWhile(p, this);
};

//-----------------------------------------------------------------------
// Time slicing

var timeslice = __webpack_require__(161);

exports.until  = exports.takeUntil = timeslice.takeUntil;
exports.since  = exports.skipUntil = timeslice.skipUntil;
exports.during = timeslice.during;

/**
 * stream:                    -a-b-c-d-e-f-g->
 * signal:                    -------x
 * takeUntil(signal, stream): -a-b-c-|
 * @param {Stream} signal retain only events in stream before the first
 * event in signal
 * @returns {Stream} new stream containing only events that occur before
 * the first event in signal.
 */
Stream.prototype.until = Stream.prototype.takeUntil = function(signal) {
	return timeslice.takeUntil(signal, this);
};

/**
 * stream:                    -a-b-c-d-e-f-g->
 * signal:                    -------x
 * takeUntil(signal, stream): -------d-e-f-g->
 * @param {Stream} signal retain only events in stream at or after the first
 * event in signal
 * @returns {Stream} new stream containing only events that occur after
 * the first event in signal.
 */
Stream.prototype.since = Stream.prototype.skipUntil = function(signal) {
	return timeslice.skipUntil(signal, this);
};

/**
 * stream:                    -a-b-c-d-e-f-g->
 * timeWindow:                -----s
 * s:                               -----t
 * stream.during(timeWindow): -----c-d-e-|
 * @param {Stream<Stream>} timeWindow a stream whose first event (s) represents
 *  the window start time.  That event (s) is itself a stream whose first event (t)
 *  represents the window end time
 * @returns {Stream} new stream containing only events within the provided timespan
 */
Stream.prototype.during = function(timeWindow) {
	return timeslice.during(timeWindow, this);
};

//-----------------------------------------------------------------------
// Delaying

var delay = __webpack_require__(149).delay;

exports.delay = delay;

/**
 * @param {Number} delayTime milliseconds to delay each item
 * @returns {Stream} new stream containing the same items, but delayed by ms
 */
Stream.prototype.delay = function(delayTime) {
	return delay(delayTime, this);
};

//-----------------------------------------------------------------------
// Getting event timestamp

var timestamp = __webpack_require__(162).timestamp;

exports.timestamp = timestamp;

/**
 * Expose event timestamps into the stream. Turns a Stream<X> into
 * Stream<{time:t, value:X}>
 * @returns {Stream<{time:number, value:*}>}
 */
Stream.prototype.timestamp = function() {
	return timestamp(this);
};

//-----------------------------------------------------------------------
// Rate limiting

var limit = __webpack_require__(152);

exports.throttle = limit.throttle;
exports.debounce = limit.debounce;

/**
 * Limit the rate of events
 * stream:              abcd----abcd----
 * throttle(2, stream): a-c-----a-c-----
 * @param {Number} period time to suppress events
 * @returns {Stream} new stream that skips events for throttle period
 */
Stream.prototype.throttle = function(period) {
	return limit.throttle(period, this);
};

/**
 * Wait for a burst of events to subside and emit only the last event in the burst
 * stream:              abcd----abcd----
 * debounce(2, stream): -----d-------d--
 * @param {Number} period events occuring more frequently than this
 *  on the provided scheduler will be suppressed
 * @returns {Stream} new debounced stream
 */
Stream.prototype.debounce = function(period) {
	return limit.debounce(period, this);
};

//-----------------------------------------------------------------------
// Awaiting Promises

var promises = __webpack_require__(156);

exports.fromPromise = promises.fromPromise;
exports.await       = promises.awaitPromises;

/**
 * Await promises, turning a Stream<Promise<X>> into Stream<X>.  Preserves
 * event order, but timeshifts events based on promise resolution time.
 * @returns {Stream<X>} stream containing non-promise values
 */
Stream.prototype.await = function() {
	return promises.awaitPromises(this);
};

//-----------------------------------------------------------------------
// Error handling

var errors = __webpack_require__(150);

exports.recoverWith  = errors.flatMapError;
exports.flatMapError = errors.flatMapError;
exports.throwError   = errors.throwError;

/**
 * If this stream encounters an error, recover and continue with items from stream
 * returned by f.
 * stream:                  -a-b-c-X-
 * f(X):                           d-e-f-g-
 * flatMapError(f, stream): -a-b-c-d-e-f-g-
 * @param {function(error:*):Stream} f function which returns a new stream
 * @returns {Stream} new stream which will recover from an error by calling f
 */
Stream.prototype.recoverWith = Stream.prototype.flatMapError = function(f) {
	return errors.flatMapError(f, this);
};

//-----------------------------------------------------------------------
// Multicasting

var multicast = __webpack_require__(23).default;

exports.multicast = multicast;

/**
 * Transform the stream into multicast stream.  That means that many subscribers
 * to the stream will not cause multiple invocations of the internal machinery.
 * @returns {Stream} new stream which will multicast events to all observers.
 */
Stream.prototype.multicast = function() {
	return multicast(this);
};


/***/ },
/* 12 */
/***/ function(module, exports) {

"use strict";
"use strict";
function isElement(obj) {
    return typeof HTMLElement === "object" ?
        obj instanceof HTMLElement || obj instanceof DocumentFragment :
        obj && typeof obj === "object" && obj !== null &&
            (obj.nodeType === 1 || obj.nodeType === 11) &&
            typeof obj.nodeName === "string";
}
exports.SCOPE_PREFIX = "$$CYCLEDOM$$-";
function getElement(selectors) {
    var domElement = (typeof selectors === "string" ?
        document.querySelector(selectors) :
        selectors);
    if (typeof selectors === "string" && domElement === null) {
        throw new Error("Cannot render into unknown element `" + selectors + "`");
    }
    else if (!isElement(domElement)) {
        throw new Error("Given container is not a DOM element neither a " +
            "selector string.");
    }
    return domElement;
}
exports.getElement = getElement;
function getScope(namespace) {
    return namespace
        .filter(function (c) { return c.indexOf(exports.SCOPE_PREFIX) > -1; })
        .slice(-1) // only need the latest, most specific, isolated boundary
        .join("");
}
exports.getScope = getScope;
function getSelectors(namespace) {
    return namespace.filter(function (c) { return c.indexOf(exports.SCOPE_PREFIX) === -1; }).join(" ");
}
exports.getSelectors = getSelectors;
//# sourceMappingURL=utils.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(122)() ? Symbol : __webpack_require__(124);


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var thunk = __webpack_require__(202);
exports.thunk = thunk;
/**
 * A factory for the DOM driver function.
 *
 * Takes a `container` to define the target on the existing DOM which this
 * driver will operate on, and an `options` object as the second argument. The
 * input to this driver is a stream of virtual DOM objects, or in other words,
 * Snabbdom "VNode" objects. The output of this driver is a "DOMSource": a
 * collection of Observables queried with the methods `select()` and `events()`.
 *
 * `DOMSource.select(selector)` returns a new DOMSource with scope restricted to
 * the element(s) that matches the CSS `selector` given.
 *
 * `DOMSource.events(eventType, options)` returns a stream of events of
 * `eventType` happening on the elements that match the current DOMSource. The
 * returned stream is an *xstream* Stream if you use `@cycle/xstream-run` to run
 * your app with this driver, or it is an RxJS Observable if you use
 * `@cycle/rxjs-run`, and so forth. The `options` parameter can have the field
 * `useCapture`, which is by default `false`, except it is `true` for event
 * types that do not bubble. Read more here
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * about the `useCapture` and its purpose.
 *
 * `DOMSource.elements()` returns a stream of the DOM element(s) matched by the
 * selectors in the DOMSource. Also, `DOMSource.select(':root').elements()`
 * returns a stream of DOM element corresponding to the root (or container) of
 * the app on the DOM.
 *
 * @param {(String|HTMLElement)} container the DOM selector for the element
 * (or the element itself) to contain the rendering of the VTrees.
 * @param {DOMDriverOptions} options an object with two optional fields:
 * `transposition: boolean` enables/disables transposition of inner streams in
 * the virtual DOM tree, `modules: array` contains additional Snabbdom modules.
 * @return {Function} the DOM driver function. The function expects a stream of
 * of VNode as input, and outputs the DOMSource object.
 * @function makeDOMDriver
 */
var makeDOMDriver_1 = __webpack_require__(82);
exports.makeDOMDriver = makeDOMDriver_1.makeDOMDriver;
/**
 * A factory for the HTML driver function.
 *
 * Takes an `effect` callback function and an `options` object as arguments. The
 * input to this driver is a stream of virtual DOM objects, or in other words,
 * Snabbdom "VNode" objects. The output of this driver is a "DOMSource": a
 * collection of Observables queried with the methods `select()` and `events()`.
 *
 * The HTML Driver is supplementary to the DOM Driver. Instead of producing
 * elements on the DOM, it generates HTML as strings and does a side effect on
 * those HTML strings. That side effect is described by the `effect` callback
 * function. So, if you want to use the HTML Driver on the server-side to render
 * your application as HTML and send as a response (which is the typical use
 * case for the HTML Driver), you need to pass something like the
 * `html => response.send(html)` function as the `effect` argument. This way,
 * the driver knows what side effect to cause based on the HTML string it just
 * rendered.
 *
 * The HTML driver is useful only for that side effect in the `effect` callback.
 * It can be considered a sink-only driver. However, in order to serve as a
 * transparent replacement to the DOM Driver when rendering from the server, the
 * HTML driver returns a source object that behaves just like the DOMSource.
 * This helps reuse the same application that is written for the DOM Driver.
 * This fake DOMSource returns empty streams when you query it, because there
 * are no user events on the server.
 *
 * `DOMSource.select(selector)` returns a new DOMSource with scope restricted to
 * the element(s) that matches the CSS `selector` given.
 *
 * `DOMSource.events(eventType, options)` returns an empty stream. The returned
 * stream is an *xstream* Stream if you use `@cycle/xstream-run` to run your app
 * with this driver, or it is an RxJS Observable if you use `@cycle/rxjs-run`,
 * and so forth.
 *
 * `DOMSource.elements()` returns the stream of HTML string rendered from your
 * sink virtual DOM stream.
 *
 * @param {Function} effect a callback function that takes a string of rendered
 * HTML as input and should run a side effect, returning nothing.
 * @param {HTMLDriverOptions} options an object with one optional field:
 * `transposition: boolean` enables/disables transposition of inner streams in
 * the virtual DOM tree.
 * @return {Function} the HTML driver function. The function expects a stream of
 * of VNode as input, and outputs the DOMSource object.
 * @function makeHTMLDriver
 */
var makeHTMLDriver_1 = __webpack_require__(83);
exports.makeHTMLDriver = makeHTMLDriver_1.makeHTMLDriver;
/**
 * A factory function to create mocked DOMSource objects, for testing purposes.
 *
 * Takes a `streamAdapter` and a `mockConfig` object as arguments, and returns
 * a DOMSource that can be given to any Cycle.js app that expects a DOMSource in
 * the sources, for testing.
 *
 * The `streamAdapter` parameter is a package such as `@cycle/xstream-adapter`,
 * `@cycle/rxjs-adapter`, etc. Import it as `import a from '@cycle/rx-adapter`,
 * then provide it to `mockDOMSource. This is important so the DOMSource created
 * knows which stream library should it use to export its streams when you call
 * `DOMSource.events()` for instance.
 *
 * The `mockConfig` parameter is an object specifying selectors, eventTypes and
 * their streams. Example:
 *
 * ```js
 * const domSource = mockDOMSource(RxAdapter, {
 *   '.foo': {
 *     'click': Rx.Observable.of({target: {}}),
 *     'mouseover': Rx.Observable.of({target: {}}),
 *   },
 *   '.bar': {
 *     'scroll': Rx.Observable.of({target: {}}),
 *     elements: Rx.Observable.of({tagName: 'div'}),
 *   }
 * });
 *
 * // Usage
 * const click$ = domSource.select('.foo').events('click');
 * const element$ = domSource.select('.bar').elements();
 * ```
 *
 * The mocked DOM Source supports isolation. It has the functions `isolateSink`
 * and `isolateSource` attached to it, and performs simple isolation using
 * classNames. *isolateSink* with scope `foo` will append the class `___foo` to
 * the stream of virtual DOM nodes, and *isolateSource* with scope `foo` will
 * perform a conventional `mockedDOMSource.select('.__foo')` call.
 *
 * @param {Object} mockConfig an object where keys are selector strings
 * and values are objects. Those nested objects have `eventType` strings as keys
 * and values are streams you created.
 * @return {Object} fake DOM source object, with an API containing `select()`
 * and `events()` and `elements()` which can be used just like the DOM Driver's
 * DOMSource.
 *
 * @function mockDOMSource
 */
var mockDOMSource_1 = __webpack_require__(84);
exports.mockDOMSource = mockDOMSource_1.mockDOMSource;
/**
 * The hyperscript function `h()` is a function to create virtual DOM objects,
 * also known as VNodes. Call
 *
 * ```js
 * h('div.myClass', {style: {color: 'red'}}, [])
 * ```
 *
 * to create a VNode that represents a `DIV` element with className `myClass`,
 * styled with red color, and no children because the `[]` array was passed. The
 * API is `h(tagOrSelector, optionalData, optionalChildrenOrText)`.
 *
 * However, usually you should use "hyperscript helpers", which are shortcut
 * functions based on hyperscript. There is one hyperscript helper function for
 * each DOM tagName, such as `h1()`, `h2()`, `div()`, `span()`, `label()`,
 * `input()`. For instance, the previous example could have been written
 * as:
 *
 * ```js
 * div('.myClass', {style: {color: 'red'}}, [])
 * ```
 *
 * There are also SVG helper functions, which apply the appropriate SVG
 * namespace to the resulting elements. `svg()` function creates the top-most
 * SVG element, and `svg.g`, `svg.polygon`, `svg.circle`, `svg.path` are for
 * SVG-specific child elements. Example:
 *
 * ```js
 * svg({width: 150, height: 150}, [
 *   svg.polygon({
 *     attrs: {
 *       class: 'triangle',
 *       points: '20 0 20 150 150 20'
 *     }
 *   })
 * ])
 * ```
 *
 * @function h
 */
var hyperscript_1 = __webpack_require__(22);
exports.h = hyperscript_1.h;
var hyperscript_helpers_1 = __webpack_require__(79);
exports.svg = hyperscript_helpers_1.default.svg;
exports.a = hyperscript_helpers_1.default.a;
exports.abbr = hyperscript_helpers_1.default.abbr;
exports.address = hyperscript_helpers_1.default.address;
exports.area = hyperscript_helpers_1.default.area;
exports.article = hyperscript_helpers_1.default.article;
exports.aside = hyperscript_helpers_1.default.aside;
exports.audio = hyperscript_helpers_1.default.audio;
exports.b = hyperscript_helpers_1.default.b;
exports.base = hyperscript_helpers_1.default.base;
exports.bdi = hyperscript_helpers_1.default.bdi;
exports.bdo = hyperscript_helpers_1.default.bdo;
exports.blockquote = hyperscript_helpers_1.default.blockquote;
exports.body = hyperscript_helpers_1.default.body;
exports.br = hyperscript_helpers_1.default.br;
exports.button = hyperscript_helpers_1.default.button;
exports.canvas = hyperscript_helpers_1.default.canvas;
exports.caption = hyperscript_helpers_1.default.caption;
exports.cite = hyperscript_helpers_1.default.cite;
exports.code = hyperscript_helpers_1.default.code;
exports.col = hyperscript_helpers_1.default.col;
exports.colgroup = hyperscript_helpers_1.default.colgroup;
exports.dd = hyperscript_helpers_1.default.dd;
exports.del = hyperscript_helpers_1.default.del;
exports.dfn = hyperscript_helpers_1.default.dfn;
exports.dir = hyperscript_helpers_1.default.dir;
exports.div = hyperscript_helpers_1.default.div;
exports.dl = hyperscript_helpers_1.default.dl;
exports.dt = hyperscript_helpers_1.default.dt;
exports.em = hyperscript_helpers_1.default.em;
exports.embed = hyperscript_helpers_1.default.embed;
exports.fieldset = hyperscript_helpers_1.default.fieldset;
exports.figcaption = hyperscript_helpers_1.default.figcaption;
exports.figure = hyperscript_helpers_1.default.figure;
exports.footer = hyperscript_helpers_1.default.footer;
exports.form = hyperscript_helpers_1.default.form;
exports.h1 = hyperscript_helpers_1.default.h1;
exports.h2 = hyperscript_helpers_1.default.h2;
exports.h3 = hyperscript_helpers_1.default.h3;
exports.h4 = hyperscript_helpers_1.default.h4;
exports.h5 = hyperscript_helpers_1.default.h5;
exports.h6 = hyperscript_helpers_1.default.h6;
exports.head = hyperscript_helpers_1.default.head;
exports.header = hyperscript_helpers_1.default.header;
exports.hgroup = hyperscript_helpers_1.default.hgroup;
exports.hr = hyperscript_helpers_1.default.hr;
exports.html = hyperscript_helpers_1.default.html;
exports.i = hyperscript_helpers_1.default.i;
exports.iframe = hyperscript_helpers_1.default.iframe;
exports.img = hyperscript_helpers_1.default.img;
exports.input = hyperscript_helpers_1.default.input;
exports.ins = hyperscript_helpers_1.default.ins;
exports.kbd = hyperscript_helpers_1.default.kbd;
exports.keygen = hyperscript_helpers_1.default.keygen;
exports.label = hyperscript_helpers_1.default.label;
exports.legend = hyperscript_helpers_1.default.legend;
exports.li = hyperscript_helpers_1.default.li;
exports.link = hyperscript_helpers_1.default.link;
exports.main = hyperscript_helpers_1.default.main;
exports.map = hyperscript_helpers_1.default.map;
exports.mark = hyperscript_helpers_1.default.mark;
exports.menu = hyperscript_helpers_1.default.menu;
exports.meta = hyperscript_helpers_1.default.meta;
exports.nav = hyperscript_helpers_1.default.nav;
exports.noscript = hyperscript_helpers_1.default.noscript;
exports.object = hyperscript_helpers_1.default.object;
exports.ol = hyperscript_helpers_1.default.ol;
exports.optgroup = hyperscript_helpers_1.default.optgroup;
exports.option = hyperscript_helpers_1.default.option;
exports.p = hyperscript_helpers_1.default.p;
exports.param = hyperscript_helpers_1.default.param;
exports.pre = hyperscript_helpers_1.default.pre;
exports.progress = hyperscript_helpers_1.default.progress;
exports.q = hyperscript_helpers_1.default.q;
exports.rp = hyperscript_helpers_1.default.rp;
exports.rt = hyperscript_helpers_1.default.rt;
exports.ruby = hyperscript_helpers_1.default.ruby;
exports.s = hyperscript_helpers_1.default.s;
exports.samp = hyperscript_helpers_1.default.samp;
exports.script = hyperscript_helpers_1.default.script;
exports.section = hyperscript_helpers_1.default.section;
exports.select = hyperscript_helpers_1.default.select;
exports.small = hyperscript_helpers_1.default.small;
exports.source = hyperscript_helpers_1.default.source;
exports.span = hyperscript_helpers_1.default.span;
exports.strong = hyperscript_helpers_1.default.strong;
exports.style = hyperscript_helpers_1.default.style;
exports.sub = hyperscript_helpers_1.default.sub;
exports.sup = hyperscript_helpers_1.default.sup;
exports.table = hyperscript_helpers_1.default.table;
exports.tbody = hyperscript_helpers_1.default.tbody;
exports.td = hyperscript_helpers_1.default.td;
exports.textarea = hyperscript_helpers_1.default.textarea;
exports.tfoot = hyperscript_helpers_1.default.tfoot;
exports.th = hyperscript_helpers_1.default.th;
exports.thead = hyperscript_helpers_1.default.thead;
exports.title = hyperscript_helpers_1.default.title;
exports.tr = hyperscript_helpers_1.default.tr;
exports.u = hyperscript_helpers_1.default.u;
exports.ul = hyperscript_helpers_1.default.ul;
exports.video = hyperscript_helpers_1.default.video;
//# sourceMappingURL=index.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(43)()
	? Object.setPrototypeOf
	: __webpack_require__(44);


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var dispose = __webpack_require__(1);
var LinkedList = __webpack_require__(143);
var identity = __webpack_require__(3).id;

exports.mergeConcurrently = mergeConcurrently;
exports.mergeMapConcurrently = mergeMapConcurrently;

function mergeConcurrently(concurrency, stream) {
	return mergeMapConcurrently(identity, concurrency, stream);
}

function mergeMapConcurrently(f, concurrency, stream) {
	return new Stream(new MergeConcurrently(f, concurrency, stream.source));
}

function MergeConcurrently(f, concurrency, source) {
	this.f = f;
	this.concurrency = concurrency;
	this.source = source;
}

MergeConcurrently.prototype.run = function(sink, scheduler) {
	return new Outer(this.f, this.concurrency, this.source, sink, scheduler);
};

function Outer(f, concurrency, source, sink, scheduler) {
	this.f = f;
	this.concurrency = concurrency;
	this.sink = sink;
	this.scheduler = scheduler;
	this.pending = [];
	this.current = new LinkedList();
	this.disposable = dispose.once(source.run(this, scheduler));
	this.active = true;
}

Outer.prototype.event = function(t, x) {
	this._addInner(t, x);
};

Outer.prototype._addInner = function(t, x) {
	if(this.current.length < this.concurrency) {
		this._startInner(t, x);
	} else {
		this.pending.push(x);
	}
};

Outer.prototype._startInner = function(t, x) {
	try {
		this._initInner(t, x);
	} catch(e) {
		this.error(t, e);
	}
};

Outer.prototype._initInner = function(t, x) {
	var innerSink = new Inner(t, this, this.sink);
	innerSink.disposable = mapAndRun(this.f, x, innerSink, this.scheduler);
	this.current.add(innerSink);
}

function mapAndRun(f, x, sink, scheduler) {
	return f(x).source.run(sink, scheduler);
}

Outer.prototype.end = function(t, x) {
	this.active = false;
	dispose.tryDispose(t, this.disposable, this.sink);
	this._checkEnd(t, x);
};

Outer.prototype.error = function(t, e) {
	this.active = false;
	this.sink.error(t, e);
};

Outer.prototype.dispose = function() {
	this.active = false;
	this.pending.length = 0;
	return Promise.all([this.disposable.dispose(), this.current.dispose()]);
};

Outer.prototype._endInner = function(t, x, inner) {
	this.current.remove(inner);
	dispose.tryDispose(t, inner, this);

	if(this.pending.length === 0) {
		this._checkEnd(t, x);
	} else {
		this._startInner(t, this.pending.shift());
	}
};

Outer.prototype._checkEnd = function(t, x) {
	if(!this.active && this.current.isEmpty()) {
		this.sink.end(t, x);
	}
};

function Inner(time, outer, sink) {
	this.prev = this.next = null;
	this.time = time;
	this.outer = outer;
	this.sink = sink;
	this.disposable = void 0;
}

Inner.prototype.event = function(t, x) {
	this.sink.event(Math.max(t, this.time), x);
};

Inner.prototype.end = function(t, x) {
	this.outer._endInner(Math.max(t, this.time), x, this);
};

Inner.prototype.error = function(t, e) {
	this.outer.error(Math.max(t, this.time), e);
};

Inner.prototype.dispose = function() {
	return this.disposable.dispose();
};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var Map = __webpack_require__(32);
var Pipe = __webpack_require__(2);

exports.map = map;
exports.constant = constant;
exports.tap = tap;

/**
 * Transform each value in the stream by applying f to each
 * @param {function(*):*} f mapping function
 * @param {Stream} stream stream to map
 * @returns {Stream} stream containing items transformed by f
 */
function map(f, stream) {
	return new Stream(Map.create(f, stream.source));
}

/**
 * Replace each value in the stream with x
 * @param {*} x
 * @param {Stream} stream
 * @returns {Stream} stream containing items replaced with x
 */
function constant(x, stream) {
	return map(function() {
		return x;
	}, stream);
}

/**
 * Perform a side effect for each item in the stream
 * @param {function(x:*):*} f side effect to execute for each item. The
 *  return value will be discarded.
 * @param {Stream} stream stream to tap
 * @returns {Stream} new stream containing the same items as this stream
 */
function tap(f, stream) {
	return new Stream(new Tap(f, stream.source));
}

function Tap(f, source) {
	this.source = source;
	this.f = f;
}

Tap.prototype.run = function(sink, scheduler) {
	return this.source.run(new TapSink(this.f, sink), scheduler);
}

function TapSink(f, sink) {
	this.sink = sink;
	this.f = f;
}

TapSink.prototype.end = Pipe.prototype.end;
TapSink.prototype.error = Pipe.prototype.error;

TapSink.prototype.event = function(t, x) {
	var f = this.f;
	f(x);
	this.sink.event(t, x);
}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Scheduler = __webpack_require__(173);
var ClockTimer = __webpack_require__(171);
var Timeline = __webpack_require__(61);

module.exports = new Scheduler(new ClockTimer(), new Timeline());


/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = {
  array: Array.isArray,
  primitive: function(s) { return typeof s === 'string' || typeof s === 'number'; },
};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var base_1 = __webpack_require__(71);
var most_adapter_1 = __webpack_require__(86);
/**
 * Takes a `main` function and circularly connects it to the given collection
 * of driver functions.
 *
 * **Example:**
 * ```js
 * import {run} from '@cycle/most-run';
 * const dispose = run(main, drivers);
 * // ...
 * dispose();
 * ```
 *
 * The `main` function expects a collection of "source" streams (returned from
 * drivers) as input, and should return a collection of "sink" streams (to be
 * given to drivers). A "collection of streams" is a JavaScript object where
 * keys match the driver names registered by the `drivers` object, and values
 * are the streams. Refer to the documentation of each driver to see more
 * details on what types of sources it outputs and sinks it receives.
 *
 * @param {Function} main a function that takes `sources` as input and outputs
 * `sinks`.
 * @param {Object} drivers an object where keys are driver names and values
 * are driver functions.
 * @return {Function} a dispose function, used to terminate the execution of the
 * Cycle.js program, cleaning up resources used.
 * @function run
 */
function run(main, drivers) {
    return base_1.default(main, drivers, { streamAdapter: most_adapter_1.default }).run();
}
/**
 * A function that prepares the Cycle application to be executed. Takes a `main`
 * function and prepares to circularly connects it to the given collection of
 * driver functions. As an output, `Cycle()` returns an object with three
 * properties: `sources`, `sinks` and `run`. Only when `run()` is called will
 * the application actually execute. Refer to the documentation of `run()` for
 * more details.
 *
 * **Example:**
 * ```js
 * import Cycle from '@cycle/most-run';
 * const {sources, sinks, run} = Cycle(main, drivers);
 * // ...
 * const dispose = run(); // Executes the application
 * // ...
 * dispose();
 * ```
 *
 * @param {Function} main a function that takes `sources` as input
 * and outputs `sinks`.
 * @param {Object} drivers an object where keys are driver names and values
 * are driver functions.
 * @return {Object} an object with three properties: `sources`, `sinks` and
 * `run`. `sources` is the collection of driver sources, `sinks` is the
 * collection of driver sinks, these can be used for debugging or testing. `run`
 * is the function that once called will execute the application.
 * @function Cycle
 */
var Cycle = function (main, drivers) {
    return base_1.default(main, drivers, { streamAdapter: most_adapter_1.default });
};
Cycle.run = run;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Cycle;
//# sourceMappingURL=index.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var xstream_1 = __webpack_require__(4);
function fromEvent(element, eventName, useCapture) {
    if (useCapture === void 0) { useCapture = false; }
    return xstream_1.Stream.create({
        element: element,
        next: null,
        start: function start(listener) {
            this.next = function next(event) { listener.next(event); };
            this.element.addEventListener(eventName, this.next, useCapture);
        },
        stop: function stop() {
            this.element.removeEventListener(eventName, this.next, useCapture);
        }
    });
}
exports.fromEvent = fromEvent;
//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var is = __webpack_require__(19);
var vnode = __webpack_require__(37);
function isGenericStream(x) {
    return !Array.isArray(x) && typeof x.map === "function";
}
function mutateStreamWithNS(vNode) {
    addNS(vNode.data, vNode.children, vNode.sel);
    return vNode;
}
function addNS(data, children, selector) {
    data.ns = "http://www.w3.org/2000/svg";
    if (selector !== "foreignObject" && typeof children !== "undefined" && is.array(children)) {
        for (var i = 0; i < children.length; ++i) {
            if (isGenericStream(children[i])) {
                children[i] = children[i].map(mutateStreamWithNS);
            }
            else {
                addNS(children[i].data, children[i].children, children[i].sel);
            }
        }
    }
}
function h(sel, b, c) {
    var data = {};
    var children;
    var text;
    var i;
    if (arguments.length === 3) {
        data = b;
        if (is.array(c)) {
            children = c;
        }
        else if (is.primitive(c)) {
            text = c;
        }
    }
    else if (arguments.length === 2) {
        if (is.array(b)) {
            children = b;
        }
        else if (is.primitive(b)) {
            text = b;
        }
        else {
            data = b;
        }
    }
    if (is.array(children)) {
        children = children.filter(function (x) { return x; });
        for (i = 0; i < children.length; ++i) {
            if (is.primitive(children[i])) {
                children[i] = vnode(undefined, undefined, undefined, children[i]);
            }
        }
    }
    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g') {
        addNS(data, children, sel);
    }
    return vnode(sel, data, children, text, undefined);
}
exports.h = h;
;
//# sourceMappingURL=hyperscript.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('@most/prelude'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.prelude);
    global.mostMulticast = mod.exports;
  }
})(this, function (exports, _prelude) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MulticastSource = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var MulticastDisposable = function () {
    function MulticastDisposable(source, sink) {
      _classCallCheck(this, MulticastDisposable);

      this.source = source;
      this.sink = sink;
      this.disposed = false;
    }

    _createClass(MulticastDisposable, [{
      key: 'dispose',
      value: function dispose() {
        if (this.disposed) {
          return;
        }
        this.disposed = true;
        var remaining = this.source.remove(this.sink);
        return remaining === 0 && this.source._dispose();
      }
    }]);

    return MulticastDisposable;
  }();

  function tryEvent(t, x, sink) {
    try {
      sink.event(t, x);
    } catch (e) {
      sink.error(t, e);
    }
  }

  function tryEnd(t, x, sink) {
    try {
      sink.end(t, x);
    } catch (e) {
      sink.error(t, e);
    }
  }

  var dispose = function dispose(disposable) {
    return disposable.dispose();
  };

  var emptyDisposable = {
    dispose: function dispose() {}
  };

  var MulticastSource = function () {
    function MulticastSource(source) {
      _classCallCheck(this, MulticastSource);

      this.source = source;
      this.sinks = [];
      this._disposable = emptyDisposable;
    }

    _createClass(MulticastSource, [{
      key: 'run',
      value: function run(sink, scheduler) {
        var n = this.add(sink);
        if (n === 1) {
          this._disposable = this.source.run(this, scheduler);
        }
        return new MulticastDisposable(this, sink);
      }
    }, {
      key: '_dispose',
      value: function _dispose() {
        var disposable = this._disposable;
        this._disposable = emptyDisposable;
        return Promise.resolve(disposable).then(dispose);
      }
    }, {
      key: 'add',
      value: function add(sink) {
        this.sinks = (0, _prelude.append)(sink, this.sinks);
        return this.sinks.length;
      }
    }, {
      key: 'remove',
      value: function remove(sink) {
        var i = (0, _prelude.findIndex)(sink, this.sinks);
        // istanbul ignore next
        if (i >= 0) {
          this.sinks = (0, _prelude.remove)(i, this.sinks);
        }

        return this.sinks.length;
      }
    }, {
      key: 'event',
      value: function event(time, value) {
        var s = this.sinks;
        if (s.length === 1) {
          return s[0].event(time, value);
        }
        for (var i = 0; i < s.length; ++i) {
          tryEvent(time, value, s[i]);
        }
      }
    }, {
      key: 'end',
      value: function end(time, value) {
        var s = this.sinks;
        for (var i = 0; i < s.length; ++i) {
          tryEnd(time, value, s[i]);
        }
      }
    }, {
      key: 'error',
      value: function error(time, err) {
        var s = this.sinks;
        for (var i = 0; i < s.length; ++i) {
          s[i].error(time, err);
        }
      }
    }]);

    return MulticastSource;
  }();

  function multicast(stream) {
    var source = stream.source;
    return source instanceof MulticastSource ? stream : new stream.constructor(new MulticastSource(source));
  }

  exports.MulticastSource = MulticastSource;
  exports.default = multicast;
});


/***/ },
/* 24 */
/***/ function(module, exports) {

"use strict";
'use strict';

var toString = Object.prototype.toString

  , id = toString.call((function () { return arguments; }()));

module.exports = function (x) { return (toString.call(x) === id); };


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(97)()
	? Object.assign
	: __webpack_require__(98);


/***/ },
/* 26 */
/***/ function(module, exports) {

"use strict";
'use strict';

var toString = Object.prototype.toString

  , id = toString.call('');

module.exports = function (x) {
	return (typeof x === 'string') || (x && (typeof x === 'object') &&
		((x instanceof String) || (toString.call(x) === id))) || false;
};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var clear    = __webpack_require__(42)
  , assign   = __webpack_require__(25)
  , callable = __webpack_require__(9)
  , value    = __webpack_require__(5)
  , d        = __webpack_require__(8)
  , autoBind = __webpack_require__(89)
  , Symbol   = __webpack_require__(13)

  , defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties
  , Iterator;

module.exports = Iterator = function (list, context) {
	if (!(this instanceof Iterator)) return new Iterator(list, context);
	defineProperties(this, {
		__list__: d('w', value(list)),
		__context__: d('w', context),
		__nextIndex__: d('w', 0)
	});
	if (!context) return;
	callable(context.on);
	context.on('_add', this._onAdd);
	context.on('_delete', this._onDelete);
	context.on('_clear', this._onClear);
};

defineProperties(Iterator.prototype, assign({
	constructor: d(Iterator),
	_next: d(function () {
		var i;
		if (!this.__list__) return;
		if (this.__redo__) {
			i = this.__redo__.shift();
			if (i !== undefined) return i;
		}
		if (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;
		this._unBind();
	}),
	next: d(function () { return this._createResult(this._next()); }),
	_createResult: d(function (i) {
		if (i === undefined) return { done: true, value: undefined };
		return { done: false, value: this._resolve(i) };
	}),
	_resolve: d(function (i) { return this.__list__[i]; }),
	_unBind: d(function () {
		this.__list__ = null;
		delete this.__redo__;
		if (!this.__context__) return;
		this.__context__.off('_add', this._onAdd);
		this.__context__.off('_delete', this._onDelete);
		this.__context__.off('_clear', this._onClear);
		this.__context__ = null;
	}),
	toString: d(function () { return '[object Iterator]'; })
}, autoBind({
	_onAdd: d(function (index) {
		if (index >= this.__nextIndex__) return;
		++this.__nextIndex__;
		if (!this.__redo__) {
			defineProperty(this, '__redo__', d('c', [index]));
			return;
		}
		this.__redo__.forEach(function (redo, i) {
			if (redo >= index) this.__redo__[i] = ++redo;
		}, this);
		this.__redo__.push(index);
	}),
	_onDelete: d(function (index) {
		var i;
		if (index >= this.__nextIndex__) return;
		--this.__nextIndex__;
		if (!this.__redo__) return;
		i = this.__redo__.indexOf(index);
		if (i !== -1) this.__redo__.splice(i, 1);
		this.__redo__.forEach(function (redo, i) {
			if (redo > index) this.__redo__[i] = --redo;
		}, this);
	}),
	_onClear: d(function () {
		if (this.__redo__) clear.call(this.__redo__);
		this.__nextIndex__ = 0;
	})
})));

defineProperty(Iterator.prototype, Symbol.iterator, d(function () {
	return this;
}));
defineProperty(Iterator.prototype, Symbol.toStringTag, d('', 'Iterator'));


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used to determine if values are of the language type `Object`. */
var objectTypes = {
  'function': true,
  'object': true
};

/** Detect free variable `exports`. */
var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
  ? exports
  : undefined;

/** Detect free variable `module`. */
var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
  ? module
  : undefined;

/** Detect free variable `global` from Node.js. */
var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

/** Detect free variable `self`. */
var freeSelf = checkGlobal(objectTypes[typeof self] && self);

/** Detect free variable `window`. */
var freeWindow = checkGlobal(objectTypes[typeof window] && window);

/** Detect `this` as the global object. */
var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

/**
 * Used as a reference to the global object.
 *
 * The `this` value is used if it's the global object to avoid Greasemonkey's
 * restricted `window` object, otherwise the `window` object is used.
 */
var root = freeGlobal ||
  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
    freeSelf || thisGlobal || Function('return this')();

/**
 * Checks if `value` is a global object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
 */
function checkGlobal(value) {
  return (value && value.Object === Object) ? value : null;
}

module.exports = root;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(205)(module), __webpack_require__(38)))

/***/ },
/* 29 */
/***/ function(module, exports) {

"use strict";
'use strict';

var proto = Element.prototype;
var vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}

/***/ },
/* 30 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

exports.isPromise = isPromise;

function isPromise(p) {
	return p !== null && typeof p === 'object' && typeof p.then === 'function';
}


/***/ },
/* 31 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = fatalError;

function fatalError (e) {
	setTimeout(function() {
		throw e;
	}, 0);
}


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Pipe = __webpack_require__(2);
var Filter = __webpack_require__(58);
var FilterMap = __webpack_require__(167);
var base = __webpack_require__(3);

module.exports = Map;

function Map(f, source) {
	this.f = f;
	this.source = source;
}

/**
 * Create a mapped source, fusing adjacent map.map, filter.map,
 * and filter.map.map if possible
 * @param {function(*):*} f mapping function
 * @param {{run:function}} source source to map
 * @returns {Map|FilterMap} mapped source, possibly fused
 */
Map.create = function createMap(f, source) {
	if(source instanceof Map) {
		return new Map(base.compose(f, source.f), source.source);
	}

	if(source instanceof Filter) {
		return new FilterMap(source.p, f, source.source);
	}

	return new Map(f, source);
};

Map.prototype.run = function(sink, scheduler) {
	return this.source.run(new MapSink(this.f, sink), scheduler);
};

function MapSink(f, sink) {
	this.f = f;
	this.sink = sink;
}

MapSink.prototype.end   = Pipe.prototype.end;
MapSink.prototype.error = Pipe.prototype.error;

MapSink.prototype.event = function(t, x) {
	var f = this.f;
	this.sink.event(t, f(x));
};


/***/ },
/* 33 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = invoke;

function invoke(f, args) {
	/*eslint complexity: [2,7]*/
	switch(args.length) {
		case 0: return f();
		case 1: return f(args[0]);
		case 2: return f(args[0], args[1]);
		case 3: return f(args[0], args[1], args[2]);
		case 4: return f(args[0], args[1], args[2], args[3]);
		case 5: return f(args[0], args[1], args[2], args[3], args[4]);
		default:
			return f.apply(void 0, args);
	}
}


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Sink = __webpack_require__(2);

module.exports = IndexSink;

function IndexSink(i, sink) {
	this.sink = sink;
	this.index = i;
	this.active = true;
	this.value = void 0;
}

IndexSink.prototype.event = function(t, x) {
	if(!this.active) {
		return;
	}
	this.value = x;
	this.sink.event(t, this);
};

IndexSink.prototype.end = function(t, x) {
	if(!this.active) {
		return;
	}
	this.active = false;
	this.sink.end(t, { index: this.index, value: x });
};

IndexSink.prototype.error = Sink.prototype.error;


/***/ },
/* 35 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

exports.tryEvent = tryEvent;
exports.tryEnd = tryEnd;

function tryEvent(t, x, sink) {
	try {
		sink.event(t, x);
	} catch(e) {
		sink.error(t, e);
	}
}

function tryEnd(t, x, sink) {
	try {
		sink.end(t, x);
	} catch(e) {
		sink.error(t, e);
	}
}


/***/ },
/* 36 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

exports.defer = defer;
exports.runTask = runTask;

function defer(task) {
	return Promise.resolve(task).then(runTask);
}

function runTask(task) {
	try {
		return task.run();
	} catch(e) {
		return task.error(e);
	}
}


/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = function(sel, data, children, text, elm) {
  var key = data === undefined ? undefined : data.key;
  return {sel: sel, data: data, children: children,
          text: text, elm: elm, key: key};
};


/***/ },
/* 38 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 39 */
/***/ function(module, exports) {

"use strict";
"use strict";
var ScopeChecker = (function () {
    function ScopeChecker(scope, isolateModule) {
        this.scope = scope;
        this.isolateModule = isolateModule;
    }
    ScopeChecker.prototype.isStrictlyInRootScope = function (leaf) {
        for (var el = leaf; el; el = el.parentElement) {
            var scope = this.isolateModule.isIsolatedElement(el);
            if (scope && scope !== this.scope) {
                return false;
            }
            if (scope) {
                return true;
            }
        }
        return true;
    };
    return ScopeChecker;
}());
exports.ScopeChecker = ScopeChecker;
//# sourceMappingURL=ScopeChecker.js.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var xstream_adapter_1 = __webpack_require__(6);
var xstream_1 = __webpack_require__(4);
function createVTree(vnode, children) {
    return {
        sel: vnode.sel,
        data: vnode.data,
        text: vnode.text,
        elm: vnode.elm,
        key: vnode.key,
        children: children,
    };
}
function makeTransposeVNode(runStreamAdapter) {
    return function transposeVNode(vnode) {
        if (!vnode) {
            return null;
        }
        else if (vnode && typeof vnode.data === "object" && vnode.data.static) {
            return xstream_1.default.of(vnode);
        }
        else if (runStreamAdapter.isValidStream(vnode)) {
            var xsStream = xstream_adapter_1.default.adapt(vnode, runStreamAdapter.streamSubscribe);
            return xsStream.map(transposeVNode).flatten();
        }
        else if (typeof vnode === "object") {
            if (!vnode.children || vnode.children.length === 0) {
                return xstream_1.default.of(vnode);
            }
            var vnodeChildren = vnode.children
                .map(transposeVNode)
                .filter(function (x) { return x !== null; });
            if (vnodeChildren.length === 0) {
                return xstream_1.default.of(createVTree(vnode, []));
            }
            else {
                return xstream_1.default.combine.apply(xstream_1.default, vnodeChildren)
                    .map(function (children) { return createVTree(vnode, children.slice()); });
            }
        }
        else {
            throw new Error("Unhandled vTree Value");
        }
    };
}
exports.makeTransposeVNode = makeTransposeVNode;
//# sourceMappingURL=transposition.js.map

/***/ },
/* 41 */
/***/ function(module, exports) {

/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
module.exports = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// Inspired by Google Closure:
// http://closure-library.googlecode.com/svn/docs/
// closure_goog_array_array.js.html#goog.array.clear

'use strict';

var value = __webpack_require__(5);

module.exports = function () {
	value(this).length = 0;
	return this;
};


/***/ },
/* 43 */
/***/ function(module, exports) {

"use strict";
'use strict';

var create = Object.create, getPrototypeOf = Object.getPrototypeOf
  , x = {};

module.exports = function (/*customCreate*/) {
	var setPrototypeOf = Object.setPrototypeOf
	  , customCreate = arguments[0] || create;
	if (typeof setPrototypeOf !== 'function') return false;
	return getPrototypeOf(setPrototypeOf(customCreate(null), x)) === x;
};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// Big thanks to @WebReflection for sorting this out
// https://gist.github.com/WebReflection/5593554

'use strict';

var isObject      = __webpack_require__(103)
  , value         = __webpack_require__(5)

  , isPrototypeOf = Object.prototype.isPrototypeOf
  , defineProperty = Object.defineProperty
  , nullDesc = { configurable: true, enumerable: false, writable: true,
		value: undefined }
  , validate;

validate = function (obj, prototype) {
	value(obj);
	if ((prototype === null) || isObject(prototype)) return obj;
	throw new TypeError('Prototype must be null or an object');
};

module.exports = (function (status) {
	var fn, set;
	if (!status) return null;
	if (status.level === 2) {
		if (status.set) {
			set = status.set;
			fn = function (obj, prototype) {
				set.call(validate(obj, prototype), prototype);
				return obj;
			};
		} else {
			fn = function (obj, prototype) {
				validate(obj, prototype).__proto__ = prototype;
				return obj;
			};
		}
	} else {
		fn = function self(obj, prototype) {
			var isNullBase;
			validate(obj, prototype);
			isNullBase = isPrototypeOf.call(self.nullPolyfill, obj);
			if (isNullBase) delete self.nullPolyfill.__proto__;
			if (prototype === null) prototype = self.nullPolyfill;
			obj.__proto__ = prototype;
			if (isNullBase) defineProperty(self.nullPolyfill, '__proto__', nullDesc);
			return obj;
		};
	}
	return Object.defineProperty(fn, 'level', { configurable: false,
		enumerable: false, writable: false, value: status.level });
}((function () {
	var x = Object.create(null), y = {}, set
	  , desc = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');

	if (desc) {
		try {
			set = desc.set; // Opera crashes at this point
			set.call(x, y);
		} catch (ignore) { }
		if (Object.getPrototypeOf(x) === y) return { set: set, level: 2 };
	}

	x.__proto__ = y;
	if (Object.getPrototypeOf(x) === y) return { level: 2 };

	x = {};
	x.__proto__ = y;
	if (Object.getPrototypeOf(x) === y) return { level: 1 };

	return false;
}())));

__webpack_require__(100);


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(110)()
	? String.prototype.contains
	: __webpack_require__(111);


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var isIterable = __webpack_require__(115);

module.exports = function (value) {
	if (!isIterable(value)) throw new TypeError(value + " is not iterable");
	return value;
};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(117)() ? Map : __webpack_require__(121);


/***/ },
/* 48 */
/***/ function(module, exports) {

/**
 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = getNative;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

/**
 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var root = __webpack_require__(28);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"'`]/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;'
};

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
function escapeHtmlChar(chr) {
  return htmlEscapes[chr];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = Symbol ? symbolProto.toString : undefined;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  if (isSymbol(value)) {
    return Symbol ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
 * their corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value.
 * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * Backticks are escaped because in IE < 9, they can break out of
 * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
 * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
 * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
 * for more details.
 *
 * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
 * to reduce XSS vectors.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

module.exports = escape;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseFor = __webpack_require__(128),
    bindCallback = __webpack_require__(131),
    keys = __webpack_require__(136);

/**
 * The base implementation of `_.forOwn` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return baseFor(object, iteratee, keys);
}

/**
 * Creates a function for `_.forOwn` or `_.forOwnRight`.
 *
 * @private
 * @param {Function} objectFunc The function to iterate over an object.
 * @returns {Function} Returns the new each function.
 */
function createForOwn(objectFunc) {
  return function(object, iteratee, thisArg) {
    if (typeof iteratee != 'function' || thisArg !== undefined) {
      iteratee = bindCallback(iteratee, thisArg, 3);
    }
    return objectFunc(object, iteratee);
  };
}

/**
 * Iterates over own enumerable properties of an object invoking `iteratee`
 * for each property. The `iteratee` is bound to `thisArg` and invoked with
 * three arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => logs 'a' and 'b' (iteration order is not guaranteed)
 */
var forOwn = createForOwn(baseForOwn);

module.exports = forOwn;


/***/ },
/* 51 */
/***/ function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isArguments;


/***/ },
/* 52 */
/***/ function(module, exports) {

/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = isArray;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var SubjectDisposable_1 = __webpack_require__(141);
var util_1 = __webpack_require__(54);
var defaultScheduler = __webpack_require__(18);
var BasicSubjectSource = (function () {
    function BasicSubjectSource() {
        this.scheduler = defaultScheduler;
        this.sinks = [];
        this.active = false;
    }
    BasicSubjectSource.prototype.run = function (sink, scheduler) {
        var n = this.add(sink);
        if (n === 1) {
            this.scheduler = scheduler;
            this.active = true;
        }
        return new SubjectDisposable_1.SubjectDisposable(this, sink);
    };
    BasicSubjectSource.prototype.add = function (sink) {
        this.sinks = util_1.append(sink, this.sinks);
        return this.sinks.length;
    };
    BasicSubjectSource.prototype.remove = function (sink) {
        var i = util_1.findIndex(sink, this.sinks);
        if (i >= 0) {
            this.sinks = util_1.remove(i, this.sinks);
        }
        return this.sinks.length;
    };
    BasicSubjectSource.prototype._dispose = function () {
        this.active = false;
    };
    BasicSubjectSource.prototype.next = function (value) {
        if (!this.active || this.scheduler === void 0)
            return;
        this._next(this.scheduler.now(), value);
    };
    BasicSubjectSource.prototype.error = function (err) {
        if (!this.active || this.scheduler === void 0)
            return;
        this._dispose();
        this._error(this.scheduler.now(), err);
    };
    BasicSubjectSource.prototype.complete = function (value) {
        if (!this.active || this.scheduler === void 0)
            return;
        this._dispose();
        this._complete(this.scheduler.now(), value);
    };
    BasicSubjectSource.prototype._next = function (time, value) {
        var s = this.sinks;
        if (s.length === 1) {
            return s[0].event(time, value);
        }
        for (var i = 0; i < s.length; ++i) {
            util_1.tryEvent(time, value, s[i]);
        }
    };
    BasicSubjectSource.prototype._complete = function (time, value) {
        var s = this.sinks;
        for (var i = 0; i < s.length; ++i) {
            util_1.tryEnd(time, value, s[i]);
        }
    };
    BasicSubjectSource.prototype._error = function (time, err) {
        var s = this.sinks;
        for (var i = 0; i < s.length; ++i) {
            s[i].error(time, err);
        }
    };
    return BasicSubjectSource;
}());
exports.BasicSubjectSource = BasicSubjectSource;
//# sourceMappingURL=SubjectSource.js.map

/***/ },
/* 54 */
/***/ function(module, exports) {

"use strict";
"use strict";
function tryEvent(t, x, sink) {
    try {
        sink.event(t, x);
    }
    catch (e) {
        sink.error(t, e);
    }
}
exports.tryEvent = tryEvent;
function tryEnd(t, x, sink) {
    try {
        sink.end(t, x);
    }
    catch (e) {
        sink.error(t, e);
    }
}
exports.tryEnd = tryEnd;
function pushEvents(buffer, sink) {
    for (var i = 0; i < buffer.length; ++i) {
        var _a = buffer[i], time = _a.time, value = _a.value;
        sink.event(time, value);
    }
}
exports.pushEvents = pushEvents;
function dropAndAppend(event, buffer, bufferSize) {
    if (buffer.length === bufferSize) {
        return append(event, drop(1, buffer));
    }
    return append(event, buffer);
}
exports.dropAndAppend = dropAndAppend;
function append(x, a) {
    var l = a.length;
    var b = new Array(l + 1);
    for (var i = 0; i < l; ++i) {
        b[i] = a[i];
    }
    b[l] = x;
    return b;
}
exports.append = append;
function drop(n, a) {
    if (n < 0) {
        throw new TypeError('n must be >= 0');
    }
    var l = a.length;
    if (n === 0 || l === 0) {
        return a;
    }
    if (n >= l) {
        return [];
    }
    return unsafeDrop(n, a, l - n);
}
// unsafeDrop :: Int -> [a] -> Int -> [a]
// Internal helper for drop
function unsafeDrop(n, a, l) {
    var b = new Array(l);
    for (var i = 0; i < l; ++i) {
        b[i] = a[n + i];
    }
    return b;
}
function remove(i, a) {
    if (i < 0) {
        throw new TypeError('i must be >= 0');
    }
    var l = a.length;
    if (l === 0 || i >= l) {
        return a;
    }
    if (l === 1) {
        return [];
    }
    return unsafeRemove(i, a, l - 1);
}
exports.remove = remove;
// unsafeRemove :: Int -> [a] -> Int -> [a]
// Internal helper to remove element at index
function unsafeRemove(i, a, l) {
    var b = new Array(l);
    var j;
    for (j = 0; j < i; ++j) {
        b[j] = a[j];
    }
    for (j = i; j < l; ++j) {
        b[j] = a[j + 1];
    }
    return b;
}
function findIndex(x, a) {
    for (var i = 0, l = a.length; i < l; ++i) {
        if (x === a[i]) {
            return i;
        }
    }
    return -1;
}
exports.findIndex = findIndex;
//# sourceMappingURL=util.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var transform = __webpack_require__(17);
var core = __webpack_require__(10);
var Pipe = __webpack_require__(2);
var IndexSink = __webpack_require__(34);
var dispose = __webpack_require__(1);
var base = __webpack_require__(3);
var invoke = __webpack_require__(33);

var map = base.map;
var tail = base.tail;

exports.combineArray = combineArray;
exports.combine = combine;

/**
 * Combine latest events from all input streams
 * @param {function(...events):*} f function to combine most recent events
 * @returns {Stream} stream containing the result of applying f to the most recent
 *  event of each input stream, whenever a new event arrives on any stream.
 */
function combine(f /*, ...streams */) {
	return combineArray(f, tail(arguments));
}

/**
 * Combine latest events from all input streams
 * @param {function(...events):*} f function to combine most recent events
 * @param {[Stream]} streams most recent events
 * @returns {Stream} stream containing the result of applying f to the most recent
 *  event of each input stream, whenever a new event arrives on any stream.
 */
function combineArray(f, streams) {
	var l = streams.length;
	return l === 0 ? core.empty()
		 : l === 1 ? transform.map(f, streams[0])
		 : new Stream(combineSources(f, streams));
}

function combineSources(f, streams) {
	return new Combine(f, map(getSource, streams))
}

function getSource(stream) {
	return stream.source;
}

function Combine(f, sources) {
	this.f = f;
	this.sources = sources;
}

Combine.prototype.run = function(sink, scheduler) {
	var l = this.sources.length;
	var disposables = new Array(l);
	var sinks = new Array(l);

	var mergeSink = new CombineSink(disposables, sinks, sink, this.f);

	for(var indexSink, i=0; i<l; ++i) {
		indexSink = sinks[i] = new IndexSink(i, mergeSink);
		disposables[i] = this.sources[i].run(indexSink, scheduler);
	}

	return dispose.all(disposables);
};

function CombineSink(disposables, sinks, sink, f) {
	this.sink = sink;
	this.disposables = disposables;
	this.sinks = sinks;
	this.f = f;

	var l = sinks.length;
	this.awaiting = l;
	this.values = new Array(l);
	this.hasValue = new Array(l);
	for(var i = 0; i < l; ++i) {
		this.hasValue[i] = false;
	}

	this.activeCount = sinks.length;
}

CombineSink.prototype.error = Pipe.prototype.error;

CombineSink.prototype.event = function(t, indexedValue) {
	var i = indexedValue.index;
	var awaiting = this._updateReady(i);

	this.values[i] = indexedValue.value;
	if(awaiting === 0) {
		this.sink.event(t, invoke(this.f, this.values));
	}
};

CombineSink.prototype._updateReady = function(index) {
	if(this.awaiting > 0) {
		if(!this.hasValue[index]) {
			this.hasValue[index] = true
			this.awaiting -= 1
		}
	}
	return this.awaiting;
}

CombineSink.prototype.end = function(t, indexedValue) {
	dispose.tryDispose(t, this.disposables[indexedValue.index], this.sink);
	if(--this.activeCount === 0) {
		this.sink.end(t, indexedValue.value);
	}
};


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var Sink = __webpack_require__(2);
var dispose = __webpack_require__(1);
var isPromise = __webpack_require__(30).isPromise;

exports.continueWith = continueWith;

function continueWith(f, stream) {
	return new Stream(new ContinueWith(f, stream.source));
}

function ContinueWith(f, source) {
	this.f = f;
	this.source = source;
}

ContinueWith.prototype.run = function(sink, scheduler) {
	return new ContinueWithSink(this.f, this.source, sink, scheduler);
};

function ContinueWithSink(f, source, sink, scheduler) {
	this.f = f;
	this.sink = sink;
	this.scheduler = scheduler;
	this.active = true;
	this.disposable = dispose.once(source.run(this, scheduler));
}

ContinueWithSink.prototype.error = Sink.prototype.error;

ContinueWithSink.prototype.event = function(t, x) {
	if(!this.active) {
		return;
	}
	this.sink.event(t, x);
};

ContinueWithSink.prototype.end = function(t, x) {
	if(!this.active) {
		return;
	}

	dispose.tryDispose(t, this.disposable, this.sink);
	this._startNext(t, x, this.sink);
};

ContinueWithSink.prototype._startNext = function(t, x, sink) {
	try {
		this.disposable = this._continue(this.f, x, sink);
	} catch(e) {
		sink.error(t, e);
	}
};

ContinueWithSink.prototype._continue = function(f, x, sink) {
	return f(x).source.run(sink, this.scheduler);
};

ContinueWithSink.prototype.dispose = function() {
	this.active = false;
	return this.disposable.dispose();
};


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var mergeConcurrently = __webpack_require__(16).mergeConcurrently;
var mergeMapConcurrently = __webpack_require__(16).mergeMapConcurrently;

exports.flatMap = flatMap;
exports.join = join;

/**
 * Map each value in the stream to a new stream, and merge it into the
 * returned outer stream. Event arrival times are preserved.
 * @param {function(x:*):Stream} f chaining function, must return a Stream
 * @param {Stream} stream
 * @returns {Stream} new stream containing all events from each stream returned by f
 */
function flatMap(f, stream) {
	return mergeMapConcurrently(f, Infinity, stream);
}

/**
 * Monadic join. Flatten a Stream<Stream<X>> to Stream<X> by merging inner
 * streams to the outer. Event arrival times are preserved.
 * @param {Stream<Stream<X>>} stream stream of streams
 * @returns {Stream<X>} new stream containing all events of all inner streams
 */
function join(stream) {
	return mergeConcurrently(Infinity, stream);
}


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Pipe = __webpack_require__(2);

module.exports = Filter;

function Filter(p, source) {
	this.p = p;
	this.source = source;
}

/**
 * Create a filtered source, fusing adjacent filter.filter if possible
 * @param {function(x:*):boolean} p filtering predicate
 * @param {{run:function}} source source to filter
 * @returns {Filter} filtered source
 */
Filter.create = function createFilter(p, source) {
	if (source instanceof Filter) {
		return new Filter(and(source.p, p), source.source);
	}

	return new Filter(p, source);
};

Filter.prototype.run = function(sink, scheduler) {
	return this.source.run(new FilterSink(this.p, sink), scheduler);
};

function FilterSink(p, sink) {
	this.p = p;
	this.sink = sink;
}

FilterSink.prototype.end   = Pipe.prototype.end;
FilterSink.prototype.error = Pipe.prototype.error;

FilterSink.prototype.event = function(t, x) {
	var p = this.p;
	p(x) && this.sink.event(t, x);
};

function and(p, q) {
	return function(x) {
		return p(x) && q(x);
	};
}


/***/ },
/* 59 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

exports.isIterable = isIterable;
exports.getIterator = getIterator;
exports.makeIterable = makeIterable;

/*global Set, Symbol*/
var iteratorSymbol;
// Firefox ships a partial implementation using the name @@iterator.
// https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
if (typeof Set === 'function' && typeof new Set()['@@iterator'] === 'function') {
	iteratorSymbol = '@@iterator';
} else {
	iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator ||
	'_es6shim_iterator_';
}

function isIterable(o) {
	return typeof o[iteratorSymbol] === 'function';
}

function getIterator(o) {
	return o[iteratorSymbol]();
}

function makeIterable(f, o) {
	o[iteratorSymbol] = f;
	return o;
}


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var dispose = __webpack_require__(1);
var defaultScheduler = __webpack_require__(18);

exports.withDefaultScheduler = withDefaultScheduler;
exports.withScheduler = withScheduler;

function withDefaultScheduler(source) {
	return withScheduler(source, defaultScheduler);
}

function withScheduler(source, scheduler) {
	return new Promise(function (resolve, reject) {
		runSource(source, scheduler, resolve, reject);
	});
}

function runSource(source, scheduler, resolve, reject) {
	var disposable = dispose.settable();
	var observer = new Drain(resolve, reject, disposable);

	disposable.setDisposable(source.run(observer, scheduler));
}

function Drain(end, error, disposable) {
	this._end = end;
	this._error = error;
	this._disposable = disposable;
	this.active = true;
}

Drain.prototype.event = function(t, x) {};

Drain.prototype.end = function(t, x) {
	if (!this.active) {
		return;
	}
	this.active = false;
	disposeThen(this._end, this._error, this._disposable, x);
};

Drain.prototype.error = function(t, e) {
	this.active = false;
	disposeThen(this._error, this._error, this._disposable, e);
};

function disposeThen(end, error, disposable, x) {
	Promise.resolve(disposable.dispose()).then(function () {
		end(x);
	}, error);
}


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var base = __webpack_require__(3);

module.exports = Timeline;

function Timeline() {
	this.tasks = [];
}

Timeline.prototype.nextArrival = function() {
	return this.isEmpty() ? Infinity : this.tasks[0].time;
}

Timeline.prototype.isEmpty = function() {
	return this.tasks.length === 0;
}

Timeline.prototype.add = function(st) {
	insertByTime(st, this.tasks);
}

Timeline.prototype.remove = function(st) {
	var i = binarySearch(st.time, this.tasks);

	if(i >= 0 && i < this.tasks.length) {
		var at = base.findIndex(st, this.tasks[i].events);
		if(at >= 0) {
			this.tasks[i].events.splice(at, 1);
			return true;
		}
	}

	return false;
}

Timeline.prototype.removeAll = function(f) {
	for(var i = 0, l = this.tasks.length; i < l; ++i) {
		removeAllFrom(f, this.tasks[i]);
	}
};

Timeline.prototype.runTasks = function(t, runTask) {
	var tasks = this.tasks;
	var l = tasks.length;
	var i = 0;

	while(i < l && tasks[i].time <= t) {
		++i;
	}

	this.tasks = tasks.slice(i);

	// Run all ready tasks
	for (var j = 0; j < i; ++j) {
		this.tasks = runTasks(runTask, tasks[j], this.tasks);
	}
}

function runTasks(runTask, timeslot, tasks) {
	var events = timeslot.events;
	for(var i=0; i<events.length; ++i) {
		var task = events[i];

		if(task.active) {
			runTask(task);

			// Reschedule periodic repeating tasks
			// Check active again, since a task may have canceled itself
			if(task.period >= 0 && task.active) {
				task.time = task.time + task.period;
				insertByTime(task, tasks);
			}
		}
	}

	return tasks;
}

function insertByTime(task, timeslots) {
	var l = timeslots.length;

	if(l === 0) {
		timeslots.push(newTimeslot(task.time, [task]));
		return;
	}

	var i = binarySearch(task.time, timeslots);

	if(i >= l) {
		timeslots.push(newTimeslot(task.time, [task]));
	} else if(task.time === timeslots[i].time) {
		timeslots[i].events.push(task);
	} else {
		timeslots.splice(i, 0, newTimeslot(task.time, [task]));
	}
}

function removeAllFrom(f, timeslot) {
	timeslot.events = base.removeAll(f, timeslot.events);
}

function binarySearch(t, sortedArray) {
	var lo = 0;
	var hi = sortedArray.length;
	var mid, y;

	while (lo < hi) {
		mid = Math.floor((lo + hi) / 2);
		y = sortedArray[mid];

		if (t === y.time) {
			return mid;
		} else if (t < y.time) {
			hi = mid;
		} else {
			lo = mid + 1;
		}
	}
	return hi;
}

function newTimeslot(t, events) {
	return { time: t, events: events };
}


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectorParser;

var _browserSplit = __webpack_require__(41);

var _browserSplit2 = _interopRequireDefault(_browserSplit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
var notClassId = /^\.|#/;

function selectorParser() {
  var selector = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  var tagName = void 0;
  var id = '';
  var classes = [];

  var tagParts = (0, _browserSplit2.default)(selector, classIdSplit);

  if (notClassId.test(tagParts[1]) || selector === '') {
    tagName = 'div';
  }

  var part = void 0;
  var type = void 0;
  var i = void 0;

  for (i = 0; i < tagParts.length; i++) {
    part = tagParts[i];

    if (!part) {
      continue;
    }

    type = part.charAt(0);

    if (!tagName) {
      tagName = part;
    } else if (type === '.') {
      classes.push(part.substring(1, part.length));
    } else if (type === '#') {
      id = part.substring(1, part.length);
    }
  }

  return {
    tagName: tagName,
    id: id,
    className: classes.join(' ')
  };
}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {


// https://github.com/Matt-Esch/virtual-dom/blob/master/virtual-hyperscript/parse-tag.js

var split = __webpack_require__(41);

var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
var notClassId = /^\.|#/;

module.exports = function parseSelector(selector, upper) {
  selector = selector || '';
  var tagName;
  var id = '';
  var classes = [];

  var tagParts = split(selector, classIdSplit);

  if (notClassId.test(tagParts[1]) || selector === '') {
    tagName = 'div';
  }

  var part, type, i;

  for (i = 0; i < tagParts.length; i++) {
    part = tagParts[i];

    if (!part) {
      continue;
    }

    type = part.charAt(0);

    if (!tagName) {
      tagName = part;
    } else if (type === '.') {
      classes.push(part.substring(1, part.length));
    } else if (type === '#') {
      id = part.substring(1, part.length);
    }
  }

  return {
    tagName: upper === true ? tagName.toUpperCase() : tagName,
    id: id,
    className: classes.join(' ')
  };
};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(203);


/***/ },
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ function(module, exports) {

"use strict";
"use strict";
function logToConsoleError(err) {
    var target = err.stack || err;
    if (console && console.error) {
        console.error(target);
    }
    else if (console && console.log) {
        console.log(target);
    }
}
function makeSinkProxies(drivers, streamAdapter) {
    var sinkProxies = {};
    for (var name_1 in drivers) {
        if (drivers.hasOwnProperty(name_1)) {
            var holdSubject = streamAdapter.makeSubject();
            var driverStreamAdapter = drivers[name_1].streamAdapter || streamAdapter;
            var stream = driverStreamAdapter.adapt(holdSubject.stream, streamAdapter.streamSubscribe);
            sinkProxies[name_1] = {
                stream: stream,
                observer: holdSubject.observer,
            };
        }
    }
    return sinkProxies;
}
function callDrivers(drivers, sinkProxies, streamAdapter) {
    var sources = {};
    for (var name_2 in drivers) {
        if (drivers.hasOwnProperty(name_2)) {
            var driverOutput = drivers[name_2](sinkProxies[name_2].stream, streamAdapter, name_2);
            var driverStreamAdapter = drivers[name_2].streamAdapter;
            if (driverStreamAdapter && driverStreamAdapter.isValidStream(driverOutput)) {
                sources[name_2] = streamAdapter.adapt(driverOutput, driverStreamAdapter.streamSubscribe);
            }
            else {
                sources[name_2] = driverOutput;
            }
        }
    }
    return sources;
}
function replicateMany(sinks, sinkProxies, streamAdapter) {
    var results = Object.keys(sinks)
        .filter(function (name) { return !!sinkProxies[name]; })
        .map(function (name) {
        return streamAdapter.streamSubscribe(sinks[name], {
            next: function (x) { sinkProxies[name].observer.next(x); },
            error: function (err) {
                logToConsoleError(err);
                sinkProxies[name].observer.error(err);
            },
            complete: function (x) {
                sinkProxies[name].observer.complete(x);
            }
        });
    });
    var disposeFunctions = results
        .filter(function (dispose) { return typeof dispose === 'function'; });
    return function () {
        disposeFunctions.forEach(function (dispose) { return dispose(); });
    };
}
function disposeSources(sources) {
    for (var k in sources) {
        if (sources.hasOwnProperty(k) && sources[k]
            && typeof sources[k].dispose === 'function') {
            sources[k].dispose();
        }
    }
}
var isObjectEmpty = function (obj) { return Object.keys(obj).length === 0; };
function Cycle(main, drivers, options) {
    if (typeof main !== "function") {
        throw new Error("First argument given to Cycle must be the 'main' " +
            "function.");
    }
    if (typeof drivers !== "object" || drivers === null) {
        throw new Error("Second argument given to Cycle must be an object " +
            "with driver functions as properties.");
    }
    if (isObjectEmpty(drivers)) {
        throw new Error("Second argument given to Cycle must be an object " +
            "with at least one driver function declared as a property.");
    }
    var streamAdapter = options.streamAdapter;
    if (!streamAdapter || isObjectEmpty(streamAdapter)) {
        throw new Error("Third argument given to Cycle must be an options object " +
            "with the streamAdapter key supplied with a valid stream adapter.");
    }
    var sinkProxies = makeSinkProxies(drivers, streamAdapter);
    var sources = callDrivers(drivers, sinkProxies, streamAdapter);
    var sinks = main(sources);
    if (typeof window !== 'undefined') {
        window.Cyclejs = { sinks: sinks };
    }
    var run = function () {
        var disposeReplication = replicateMany(sinks, sinkProxies, streamAdapter);
        return function () {
            disposeSources(sources);
            disposeReplication();
        };
    };
    return { sinks: sinks, sources: sources, run: run };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Cycle;
//# sourceMappingURL=index.js.map

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var xstream_1 = __webpack_require__(4);
var xstream_adapter_1 = __webpack_require__(6);
var fromEvent_1 = __webpack_require__(21);
var BodyDOMSource = (function () {
    function BodyDOMSource(_runStreamAdapter) {
        this._runStreamAdapter = _runStreamAdapter;
    }
    BodyDOMSource.prototype.select = function (selector) {
        // This functionality is still undefined/undecided.
        return this;
    };
    BodyDOMSource.prototype.elements = function () {
        var runSA = this._runStreamAdapter;
        return runSA.remember(runSA.adapt(xstream_1.default.of(document.body), xstream_adapter_1.default.streamSubscribe));
    };
    BodyDOMSource.prototype.events = function (eventType, options) {
        if (options === void 0) { options = {}; }
        var stream;
        if (options && typeof options.useCapture === 'boolean') {
            stream = fromEvent_1.fromEvent(document.body, eventType, options.useCapture);
        }
        else {
            stream = fromEvent_1.fromEvent(document.body, eventType);
        }
        return this._runStreamAdapter.adapt(stream, xstream_adapter_1.default.streamSubscribe);
    };
    return BodyDOMSource;
}());
exports.BodyDOMSource = BodyDOMSource;
//# sourceMappingURL=BodyDOMSource.js.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var xstream_1 = __webpack_require__(4);
var xstream_adapter_1 = __webpack_require__(6);
var fromEvent_1 = __webpack_require__(21);
var DocumentDOMSource = (function () {
    function DocumentDOMSource(_runStreamAdapter) {
        this._runStreamAdapter = _runStreamAdapter;
    }
    DocumentDOMSource.prototype.select = function (selector) {
        // This functionality is still undefined/undecided.
        return this;
    };
    DocumentDOMSource.prototype.elements = function () {
        var runSA = this._runStreamAdapter;
        return runSA.remember(runSA.adapt(xstream_1.default.of(document), xstream_adapter_1.default.streamSubscribe));
    };
    DocumentDOMSource.prototype.events = function (eventType, options) {
        if (options === void 0) { options = {}; }
        var stream;
        if (options && typeof options.useCapture === 'boolean') {
            stream = fromEvent_1.fromEvent(document, eventType, options.useCapture);
        }
        else {
            stream = fromEvent_1.fromEvent(document, eventType);
        }
        return this._runStreamAdapter.adapt(stream, xstream_adapter_1.default.streamSubscribe);
    };
    return DocumentDOMSource;
}());
exports.DocumentDOMSource = DocumentDOMSource;
//# sourceMappingURL=DocumentDOMSource.js.map

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ScopeChecker_1 = __webpack_require__(39);
var utils_1 = __webpack_require__(12);
var matchesSelector;
try {
    matchesSelector = __webpack_require__(29);
}
catch (e) {
    matchesSelector = Function.prototype;
}
function toElArray(input) {
    return Array.prototype.slice.call(input);
}
var ElementFinder = (function () {
    function ElementFinder(namespace, isolateModule) {
        this.namespace = namespace;
        this.isolateModule = isolateModule;
    }
    ElementFinder.prototype.call = function (rootElement) {
        var namespace = this.namespace;
        if (namespace.join("") === "") {
            return rootElement;
        }
        var scope = utils_1.getScope(namespace);
        var scopeChecker = new ScopeChecker_1.ScopeChecker(scope, this.isolateModule);
        var selector = utils_1.getSelectors(namespace);
        var topNode = rootElement;
        var topNodeMatches = [];
        if (scope.length > 0) {
            topNode = this.isolateModule.getIsolatedElement(scope) || rootElement;
            if (selector && matchesSelector(topNode, selector)) {
                topNodeMatches.push(topNode);
            }
        }
        return toElArray(topNode.querySelectorAll(selector))
            .filter(scopeChecker.isStrictlyInRootScope, scopeChecker)
            .concat(topNodeMatches);
    };
    return ElementFinder;
}());
exports.ElementFinder = ElementFinder;
//# sourceMappingURL=ElementFinder.js.map

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ScopeChecker_1 = __webpack_require__(39);
var utils_1 = __webpack_require__(12);
var matchesSelector;
try {
    matchesSelector = __webpack_require__(29);
}
catch (e) {
    matchesSelector = Function.prototype;
}
var gDestinationId = 0;
function findDestinationId(arr, searchId) {
    var minIndex = 0;
    var maxIndex = arr.length - 1;
    var currentIndex;
    var currentElement;
    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = arr[currentIndex];
        var currentId = currentElement.destinationId;
        if (currentId < searchId) {
            minIndex = currentIndex + 1;
        }
        else if (currentId > searchId) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
/**
 * Attaches an actual event listener to the DOM root element,
 * handles "destinations" (interested DOMSource output subjects), and bubbling.
 */
var EventDelegator = (function () {
    function EventDelegator(topElement, eventType, useCapture, isolateModule) {
        var _this = this;
        this.topElement = topElement;
        this.eventType = eventType;
        this.useCapture = useCapture;
        this.isolateModule = isolateModule;
        this.destinations = [];
        this.roof = topElement.parentElement;
        if (useCapture) {
            this.domListener = function (ev) { return _this.capture(ev); };
        }
        else {
            this.domListener = function (ev) { return _this.bubble(ev); };
        }
        topElement.addEventListener(eventType, this.domListener, useCapture);
    }
    EventDelegator.prototype.bubble = function (rawEvent) {
        if (!document.body.contains(rawEvent.currentTarget)) {
            return;
        }
        var ev = this.patchEvent(rawEvent);
        for (var el = ev.target; el && el !== this.roof; el = el.parentElement) {
            if (!document.body.contains(el)) {
                ev.stopPropagation();
            }
            if (ev.propagationHasBeenStopped) {
                return;
            }
            this.matchEventAgainstDestinations(el, ev);
        }
    };
    EventDelegator.prototype.matchEventAgainstDestinations = function (el, ev) {
        for (var i = 0, n = this.destinations.length; i < n; i++) {
            var dest = this.destinations[i];
            if (!dest.scopeChecker.isStrictlyInRootScope(el)) {
                continue;
            }
            if (matchesSelector(el, dest.selector)) {
                this.mutateEventCurrentTarget(ev, el);
                dest.subject._n(ev);
            }
        }
    };
    EventDelegator.prototype.capture = function (ev) {
        for (var i = 0, n = this.destinations.length; i < n; i++) {
            var dest = this.destinations[i];
            if (matchesSelector(ev.target, dest.selector)) {
                dest.subject._n(ev);
            }
        }
    };
    EventDelegator.prototype.addDestination = function (subject, namespace, destinationId) {
        var scope = utils_1.getScope(namespace);
        var selector = utils_1.getSelectors(namespace);
        var scopeChecker = new ScopeChecker_1.ScopeChecker(scope, this.isolateModule);
        this.destinations.push({ subject: subject, scopeChecker: scopeChecker, selector: selector, destinationId: destinationId });
    };
    EventDelegator.prototype.createDestinationId = function () {
        return gDestinationId++;
    };
    EventDelegator.prototype.removeDestinationId = function (destinationId) {
        var i = findDestinationId(this.destinations, destinationId);
        if (i >= 0) {
            this.destinations.splice(i, 1);
        }
    };
    EventDelegator.prototype.patchEvent = function (event) {
        var pEvent = event;
        pEvent.propagationHasBeenStopped = false;
        var oldStopPropagation = pEvent.stopPropagation;
        pEvent.stopPropagation = function stopPropagation() {
            oldStopPropagation.call(this);
            this.propagationHasBeenStopped = true;
        };
        return pEvent;
    };
    EventDelegator.prototype.mutateEventCurrentTarget = function (event, currentTargetElement) {
        try {
            Object.defineProperty(event, "currentTarget", {
                value: currentTargetElement,
                configurable: true,
            });
        }
        catch (err) {
            console.log("please use event.ownerTarget");
        }
        event.ownerTarget = currentTargetElement;
    };
    EventDelegator.prototype.updateTopElement = function (newTopElement) {
        this.topElement.removeEventListener(this.eventType, this.domListener, this.useCapture);
        newTopElement.addEventListener(this.eventType, this.domListener, this.useCapture);
        this.topElement = newTopElement;
    };
    return EventDelegator;
}());
exports.EventDelegator = EventDelegator;
//# sourceMappingURL=EventDelegator.js.map

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var xstream_1 = __webpack_require__(4);
var xstream_adapter_1 = __webpack_require__(6);
var HTMLSource = (function () {
    function HTMLSource(html$, runSA) {
        this.runSA = runSA;
        this._html$ = html$;
        this._empty$ = runSA.adapt(xstream_1.default.empty(), xstream_adapter_1.default.streamSubscribe);
    }
    HTMLSource.prototype.elements = function () {
        return this.runSA.adapt(this._html$, xstream_adapter_1.default.streamSubscribe);
    };
    HTMLSource.prototype.select = function (selector) {
        return new HTMLSource(xstream_1.default.empty(), this.runSA);
    };
    HTMLSource.prototype.events = function (eventType, options) {
        return this._empty$;
    };
    return HTMLSource;
}());
exports.HTMLSource = HTMLSource;
//# sourceMappingURL=HTMLSource.js.map

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var xstream_adapter_1 = __webpack_require__(6);
var DocumentDOMSource_1 = __webpack_require__(73);
var BodyDOMSource_1 = __webpack_require__(72);
var xstream_1 = __webpack_require__(4);
var ElementFinder_1 = __webpack_require__(74);
var fromEvent_1 = __webpack_require__(21);
var isolate_1 = __webpack_require__(80);
var EventDelegator_1 = __webpack_require__(75);
var utils_1 = __webpack_require__(12);
var matchesSelector;
try {
    matchesSelector = __webpack_require__(29);
}
catch (e) {
    matchesSelector = Function.prototype;
}
var eventTypesThatDontBubble = [
    "blur",
    "canplay",
    "canplaythrough",
    "change",
    "durationchange",
    "emptied",
    "ended",
    "focus",
    "load",
    "loadeddata",
    "loadedmetadata",
    "mouseenter",
    "mouseleave",
    "pause",
    "play",
    "playing",
    "ratechange",
    "reset",
    "scroll",
    "seeked",
    "seeking",
    "stalled",
    "submit",
    "suspend",
    "timeupdate",
    "unload",
    "volumechange",
    "waiting",
];
function determineUseCapture(eventType, options) {
    var result = false;
    if (typeof options.useCapture === "boolean") {
        result = options.useCapture;
    }
    if (eventTypesThatDontBubble.indexOf(eventType) !== -1) {
        result = true;
    }
    return result;
}
var MainDOMSource = (function () {
    function MainDOMSource(_rootElement$, _runStreamAdapter, _namespace, _isolateModule, _delegators) {
        if (_namespace === void 0) { _namespace = []; }
        this._rootElement$ = _rootElement$;
        this._runStreamAdapter = _runStreamAdapter;
        this._namespace = _namespace;
        this._isolateModule = _isolateModule;
        this._delegators = _delegators;
        this.isolateSource = isolate_1.isolateSource;
        this.isolateSink = isolate_1.isolateSink;
    }
    MainDOMSource.prototype.elements = function () {
        var output$;
        if (this._namespace.length === 0) {
            output$ = this._rootElement$;
        }
        else {
            var elementFinder_1 = new ElementFinder_1.ElementFinder(this._namespace, this._isolateModule);
            output$ = this._rootElement$.map(function (el) { return elementFinder_1.call(el); });
        }
        var runSA = this._runStreamAdapter;
        return runSA.remember(runSA.adapt(output$, xstream_adapter_1.default.streamSubscribe));
    };
    Object.defineProperty(MainDOMSource.prototype, "namespace", {
        get: function () {
            return this._namespace;
        },
        enumerable: true,
        configurable: true
    });
    MainDOMSource.prototype.select = function (selector) {
        if (typeof selector !== 'string') {
            throw new Error("DOM driver's select() expects the argument to be a " +
                "string as a CSS selector");
        }
        if (selector === 'document') {
            return new DocumentDOMSource_1.DocumentDOMSource(this._runStreamAdapter);
        }
        if (selector === 'body') {
            return new BodyDOMSource_1.BodyDOMSource(this._runStreamAdapter);
        }
        var trimmedSelector = selector.trim();
        var childNamespace = trimmedSelector === ":root" ?
            this._namespace :
            this._namespace.concat(trimmedSelector);
        return new MainDOMSource(this._rootElement$, this._runStreamAdapter, childNamespace, this._isolateModule, this._delegators);
    };
    MainDOMSource.prototype.events = function (eventType, options) {
        if (options === void 0) { options = {}; }
        if (typeof eventType !== "string") {
            throw new Error("DOM driver's events() expects argument to be a " +
                "string representing the event type to listen for.");
        }
        var useCapture = determineUseCapture(eventType, options);
        var namespace = this._namespace;
        var scope = utils_1.getScope(namespace);
        var keyParts = [eventType, useCapture];
        if (scope) {
            keyParts.push(scope);
        }
        var key = keyParts.join('~');
        var domSource = this;
        var rootElement$;
        if (scope) {
            var hadIsolated_mutable_1 = false;
            rootElement$ = this._rootElement$
                .filter(function (rootElement) {
                var hasIsolated = !!domSource._isolateModule.getIsolatedElement(scope);
                var shouldPass = hasIsolated && !hadIsolated_mutable_1;
                hadIsolated_mutable_1 = hasIsolated;
                return shouldPass;
            });
        }
        else {
            rootElement$ = this._rootElement$.take(2);
        }
        var event$ = rootElement$
            .map(function setupEventDelegatorOnTopElement(rootElement) {
            // Event listener just for the root element
            if (!namespace || namespace.length === 0) {
                return fromEvent_1.fromEvent(rootElement, eventType, useCapture);
            }
            // Event listener on the top element as an EventDelegator
            var delegators = domSource._delegators;
            var top = scope
                ? domSource._isolateModule.getIsolatedElement(scope)
                : rootElement;
            var delegator;
            if (delegators.has(key)) {
                delegator = delegators.get(key);
                delegator.updateTopElement(top);
            }
            else {
                delegator = new EventDelegator_1.EventDelegator(top, eventType, useCapture, domSource._isolateModule);
                delegators.set(key, delegator);
            }
            if (scope) {
                domSource._isolateModule.addEventDelegator(scope, delegator);
            }
            var destinationId = delegator.createDestinationId();
            var subject = xstream_1.default.create({
                start: function () { },
                stop: function () {
                    if ('requestIdleCallback' in window) {
                        requestIdleCallback(function () {
                            delegator.removeDestinationId(destinationId);
                        });
                    }
                    else {
                        delegator.removeDestinationId(destinationId);
                    }
                }
            });
            delegator.addDestination(subject, namespace, destinationId);
            return subject;
        })
            .flatten();
        return this._runStreamAdapter.adapt(event$, xstream_adapter_1.default.streamSubscribe);
    };
    MainDOMSource.prototype.dispose = function () {
        this._isolateModule.reset();
    };
    return MainDOMSource;
}());
exports.MainDOMSource = MainDOMSource;
//# sourceMappingURL=MainDOMSource.js.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var hyperscript_1 = __webpack_require__(22);
var classNameFromVNode_1 = __webpack_require__(186);
var selectorParser_1 = __webpack_require__(62);
var VNodeWrapper = (function () {
    function VNodeWrapper(rootElement) {
        this.rootElement = rootElement;
    }
    VNodeWrapper.prototype.call = function (vnode) {
        var _a = selectorParser_1.default(vnode.sel), selectorTagName = _a.tagName, selectorId = _a.id;
        var vNodeClassName = classNameFromVNode_1.default(vnode);
        var vNodeData = vnode.data || {};
        var vNodeDataProps = vNodeData.props || {};
        var _b = vNodeDataProps.id, vNodeId = _b === void 0 ? selectorId : _b;
        var isVNodeAndRootElementIdentical = vNodeId.toUpperCase() === this.rootElement.id.toUpperCase() &&
            selectorTagName.toUpperCase() === this.rootElement.tagName.toUpperCase() &&
            vNodeClassName.toUpperCase() === this.rootElement.className.toUpperCase();
        if (isVNodeAndRootElementIdentical) {
            return vnode;
        }
        var _c = this.rootElement, tagName = _c.tagName, id = _c.id, className = _c.className;
        var elementId = id ? "#" + id : "";
        var elementClassName = className ?
            "." + className.split(" ").join(".") : "";
        return hyperscript_1.h("" + tagName + elementId + elementClassName, {}, [vnode]);
    };
    return VNodeWrapper;
}());
exports.VNodeWrapper = VNodeWrapper;
//# sourceMappingURL=VNodeWrapper.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var hyperscript_1 = __webpack_require__(22);
function isValidString(param) {
    return typeof param === 'string' && param.length > 0;
}
function isSelector(param) {
    return isValidString(param) && (param[0] === '.' || param[0] === '#');
}
function createTagFunction(tagName) {
    return function hyperscript(first, b, c) {
        if (isSelector(first)) {
            if (typeof b !== 'undefined' && typeof c !== 'undefined') {
                return hyperscript_1.h(tagName + first, b, c);
            }
            else if (typeof b !== 'undefined') {
                return hyperscript_1.h(tagName + first, b);
            }
            else {
                return hyperscript_1.h(tagName + first, {});
            }
        }
        else if (!!b) {
            return hyperscript_1.h(tagName, first, b);
        }
        else if (!!first) {
            return hyperscript_1.h(tagName, first);
        }
        else {
            return hyperscript_1.h(tagName, {});
        }
    };
}
var SVG_TAG_NAMES = [
    'a', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
    'animateMotion', 'animateTransform', 'circle', 'clipPath', 'colorProfile',
    'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',
    'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting',
    'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB',
    'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode',
    'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting',
    'feSpotlight', 'feTile', 'feTurbulence', 'filter', 'font', 'fontFace',
    'fontFaceFormat', 'fontFaceName', 'fontFaceSrc', 'fontFaceUri',
    'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line',
    'linearGradient', 'marker', 'mask', 'metadata', 'missingGlyph', 'mpath',
    'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'script',
    'set', 'stop', 'style', 'switch', 'symbol', 'text', 'textPath', 'title',
    'tref', 'tspan', 'use', 'view', 'vkern'
];
var svg = createTagFunction('svg');
SVG_TAG_NAMES.forEach(function (tag) {
    svg[tag] = createTagFunction(tag);
});
var TAG_NAMES = [
    'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base',
    'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption',
    'cite', 'code', 'col', 'colgroup', 'dd', 'del', 'dfn', 'dir', 'div', 'dl',
    'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html',
    'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend',
    'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'nav', 'noscript',
    'object', 'ol', 'optgroup', 'option', 'p', 'param', 'pre', 'progress', 'q',
    'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small',
    'source', 'span', 'strong', 'style', 'sub', 'sup', 'table', 'tbody', 'td',
    'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'u', 'ul', 'video'
];
var exported = { SVG_TAG_NAMES: SVG_TAG_NAMES, TAG_NAMES: TAG_NAMES, svg: svg, isSelector: isSelector, createTagFunction: createTagFunction };
TAG_NAMES.forEach(function (n) {
    exported[n] = createTagFunction(n);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exported;
//# sourceMappingURL=hyperscript-helpers.js.map

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var utils_1 = __webpack_require__(12);
function isolateSource(source, scope) {
    return source.select(utils_1.SCOPE_PREFIX + scope);
}
exports.isolateSource = isolateSource;
function isolateSink(sink, scope) {
    return sink.map(function (vTree) {
        if (vTree.data.isolate) {
            var existingScope = parseInt(vTree.data.isolate.split(utils_1.SCOPE_PREFIX + 'cycle')[1]);
            var _scope = parseInt(scope.split('cycle')[1]);
            if (isNaN(existingScope) || isNaN(_scope) || existingScope > _scope) {
                return vTree;
            }
        }
        vTree.data.isolate = utils_1.SCOPE_PREFIX + scope;
        if (typeof vTree.key === 'undefined') {
            vTree.key = utils_1.SCOPE_PREFIX + scope;
        }
        return vTree;
    });
}
exports.isolateSink = isolateSink;
//# sourceMappingURL=isolate.js.map

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var MapPolyfill = __webpack_require__(47);
var IsolateModule = (function () {
    function IsolateModule(isolatedElements) {
        this.isolatedElements = isolatedElements;
        this.eventDelegators = new MapPolyfill();
    }
    IsolateModule.prototype.setScope = function (elm, scope) {
        this.isolatedElements.set(scope, elm);
    };
    IsolateModule.prototype.removeScope = function (scope) {
        this.isolatedElements.delete(scope);
    };
    IsolateModule.prototype.getIsolatedElement = function (scope) {
        return this.isolatedElements.get(scope);
    };
    IsolateModule.prototype.isIsolatedElement = function (elm) {
        var iterator = this.isolatedElements.entries();
        var hasNext = true;
        while (hasNext) {
            try {
                var result = iterator.next();
                var _a = result.value, scope = _a[0], element = _a[1];
                if (elm === element) {
                    return scope;
                }
            }
            catch (err) {
                hasNext = false;
            }
        }
        return false;
    };
    IsolateModule.prototype.addEventDelegator = function (scope, eventDelegator) {
        var delegators = this.eventDelegators.get(scope);
        if (!delegators) {
            delegators = [];
            this.eventDelegators.set(scope, delegators);
        }
        delegators[delegators.length] = eventDelegator;
    };
    IsolateModule.prototype.reset = function () {
        this.isolatedElements.clear();
    };
    IsolateModule.prototype.createModule = function () {
        var self = this;
        return {
            create: function (oldVNode, vNode) {
                var _a = oldVNode.data, oldData = _a === void 0 ? {} : _a;
                var elm = vNode.elm, _b = vNode.data, data = _b === void 0 ? {} : _b;
                var oldScope = oldData.isolate || "";
                var scope = data.isolate || "";
                if (scope) {
                    if (oldScope) {
                        self.removeScope(oldScope);
                    }
                    self.setScope(elm, scope);
                    var delegators = self.eventDelegators.get(scope);
                    if (delegators) {
                        for (var i = 0, len = delegators.length; i < len; ++i) {
                            delegators[i].updateTopElement(elm);
                        }
                    }
                    else if (delegators === void 0) {
                        self.eventDelegators.set(scope, []);
                    }
                }
                if (oldScope && !scope) {
                    self.removeScope(scope);
                }
            },
            update: function (oldVNode, vNode) {
                var _a = oldVNode.data, oldData = _a === void 0 ? {} : _a;
                var elm = vNode.elm, _b = vNode.data, data = _b === void 0 ? {} : _b;
                var oldScope = oldData.isolate || "";
                var scope = data.isolate || "";
                if (scope && scope !== oldScope) {
                    if (oldScope) {
                        self.removeScope(oldScope);
                    }
                    self.setScope(elm, scope);
                }
                if (oldScope && !scope) {
                    self.removeScope(scope);
                }
            },
            remove: function (_a, cb) {
                var data = _a.data;
                data = data || {};
                var scope = data.isolate;
                if (scope) {
                    self.removeScope(scope);
                    if (self.eventDelegators.get(scope)) {
                        self.eventDelegators.set(scope, []);
                    }
                }
                cb();
            },
            destroy: function (_a) {
                var data = _a.data;
                data = data || {};
                var scope = data.isolate;
                if (scope) {
                    self.removeScope(scope);
                    if (self.eventDelegators.get(scope)) {
                        self.eventDelegators.set(scope, []);
                    }
                }
            }
        };
    };
    return IsolateModule;
}());
exports.IsolateModule = IsolateModule;
//# sourceMappingURL=isolateModule.js.map

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var snabbdom_1 = __webpack_require__(201);
var xstream_1 = __webpack_require__(4);
var MainDOMSource_1 = __webpack_require__(77);
var VNodeWrapper_1 = __webpack_require__(78);
var utils_1 = __webpack_require__(12);
var modules_1 = __webpack_require__(85);
var isolateModule_1 = __webpack_require__(81);
var transposition_1 = __webpack_require__(40);
var xstream_adapter_1 = __webpack_require__(6);
var MapPolyfill = __webpack_require__(47);
function makeDOMDriverInputGuard(modules) {
    if (!Array.isArray(modules)) {
        throw new Error("Optional modules option must be " +
            "an array for snabbdom modules");
    }
}
function domDriverInputGuard(view$) {
    if (!view$
        || typeof view$.addListener !== "function"
        || typeof view$.fold !== "function") {
        throw new Error("The DOM driver function expects as input a Stream of " +
            "virtual DOM elements");
    }
}
function makeDOMDriver(container, options) {
    if (!options) {
        options = {};
    }
    var transposition = options.transposition || false;
    var modules = options.modules || modules_1.default;
    var isolateModule = new isolateModule_1.IsolateModule((new MapPolyfill()));
    var patch = snabbdom_1.init([isolateModule.createModule()].concat(modules));
    var rootElement = utils_1.getElement(container);
    var vnodeWrapper = new VNodeWrapper_1.VNodeWrapper(rootElement);
    var delegators = new MapPolyfill();
    makeDOMDriverInputGuard(modules);
    function DOMDriver(vnode$, runStreamAdapter) {
        domDriverInputGuard(vnode$);
        var transposeVNode = transposition_1.makeTransposeVNode(runStreamAdapter);
        var preprocessedVNode$ = (transposition ? vnode$.map(transposeVNode).flatten() : vnode$);
        var rootElement$ = preprocessedVNode$
            .map(function (vnode) { return vnodeWrapper.call(vnode); })
            .fold(patch, rootElement)
            .drop(1)
            .map(function unwrapElementFromVNode(vnode) { return vnode.elm; })
            .compose(function (stream) { return xstream_1.default.merge(stream, xstream_1.default.never()); }) // don't complete this stream
            .startWith(rootElement);
        /* tslint:disable:no-empty */
        rootElement$.addListener({ next: function () { }, error: function () { }, complete: function () { } });
        /* tslint:enable:no-empty */
        return new MainDOMSource_1.MainDOMSource(rootElement$, runStreamAdapter, [], isolateModule, delegators);
    }
    ;
    DOMDriver.streamAdapter = xstream_adapter_1.default;
    return DOMDriver;
}
exports.makeDOMDriver = makeDOMDriver;
//# sourceMappingURL=makeDOMDriver.js.map

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var xstream_adapter_1 = __webpack_require__(6);
var transposition_1 = __webpack_require__(40);
var HTMLSource_1 = __webpack_require__(76);
var toHTML = __webpack_require__(188);
/* tslint:disable:no-empty */
var noop = function () { };
/* tslint:enable:no-empty */
function makeHTMLDriver(effect, options) {
    if (!options) {
        options = {};
    }
    var transposition = options.transposition || false;
    function htmlDriver(vnode$, runStreamAdapter) {
        var transposeVNode = transposition_1.makeTransposeVNode(runStreamAdapter);
        var preprocessedVNode$ = (transposition ? vnode$.map(transposeVNode).flatten() : vnode$);
        var html$ = preprocessedVNode$.map(toHTML);
        html$.addListener({
            next: effect || noop,
            error: noop,
            complete: noop,
        });
        return new HTMLSource_1.HTMLSource(html$, runStreamAdapter);
    }
    ;
    htmlDriver.streamAdapter = xstream_adapter_1.default;
    return htmlDriver;
}
exports.makeHTMLDriver = makeHTMLDriver;
//# sourceMappingURL=makeHTMLDriver.js.map

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var xstream_adapter_1 = __webpack_require__(6);
var xstream_1 = __webpack_require__(4);
var SCOPE_PREFIX = '___';
var MockedDOMSource = (function () {
    function MockedDOMSource(_streamAdapter, _mockConfig) {
        this._streamAdapter = _streamAdapter;
        this._mockConfig = _mockConfig;
        if (_mockConfig.elements) {
            this._elements = _mockConfig.elements;
        }
        else {
            this._elements = _streamAdapter.adapt(xstream_1.default.empty(), xstream_adapter_1.default.streamSubscribe);
        }
    }
    MockedDOMSource.prototype.elements = function () {
        return this._elements;
    };
    MockedDOMSource.prototype.events = function (eventType, options) {
        var mockConfig = this._mockConfig;
        var keys = Object.keys(mockConfig);
        var keysLen = keys.length;
        for (var i = 0; i < keysLen; i++) {
            var key = keys[i];
            if (key === eventType) {
                return mockConfig[key];
            }
        }
        return this._streamAdapter.adapt(xstream_1.default.empty(), xstream_adapter_1.default.streamSubscribe);
    };
    MockedDOMSource.prototype.select = function (selector) {
        var mockConfig = this._mockConfig;
        var keys = Object.keys(mockConfig);
        var keysLen = keys.length;
        for (var i = 0; i < keysLen; i++) {
            var key = keys[i];
            if (key === selector) {
                return new MockedDOMSource(this._streamAdapter, mockConfig[key]);
            }
        }
        return new MockedDOMSource(this._streamAdapter, {});
    };
    MockedDOMSource.prototype.isolateSource = function (source, scope) {
        return source.select('.' + SCOPE_PREFIX + scope);
    };
    MockedDOMSource.prototype.isolateSink = function (sink, scope) {
        return sink.map(function (vnode) {
            if (vnode.sel.indexOf(SCOPE_PREFIX + scope) !== -1) {
                return vnode;
            }
            else {
                vnode.sel += "." + SCOPE_PREFIX + scope;
                return vnode;
            }
        });
    };
    return MockedDOMSource;
}());
exports.MockedDOMSource = MockedDOMSource;
function mockDOMSource(streamAdapter, mockConfig) {
    return new MockedDOMSource(streamAdapter, mockConfig);
}
exports.mockDOMSource = mockDOMSource;
//# sourceMappingURL=mockDOMSource.js.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ClassModule = __webpack_require__(196);
exports.ClassModule = ClassModule;
var PropsModule = __webpack_require__(199);
exports.PropsModule = PropsModule;
var AttrsModule = __webpack_require__(195);
exports.AttrsModule = AttrsModule;
var EventsModule = __webpack_require__(197);
exports.EventsModule = EventsModule;
var StyleModule = __webpack_require__(200);
exports.StyleModule = StyleModule;
var HeroModule = __webpack_require__(198);
exports.HeroModule = HeroModule;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [StyleModule, ClassModule, PropsModule, AttrsModule];
//# sourceMappingURL=modules.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var most_subject_1 = __webpack_require__(142);
var hold_1 = __webpack_require__(88);
var create = __webpack_require__(87);
var MostAdapter = {
    adapt: function (originStream, originStreamSubscribe) {
        if (MostAdapter.isValidStream(originStream)) {
            return originStream;
        }
        ;
        var stream = create(function (add, end, error) {
            var disposer = originStreamSubscribe(originStream, {
                next: add,
                error: error,
                complete: end
            });
            return disposer;
        });
        return stream;
    },
    remember: function (stream) {
        return stream.thru(hold_1.default);
    },
    makeSubject: function () {
        var stream = most_subject_1.subject();
        var observer = {
            next: function (x) { stream.next(x); },
            error: function (err) { stream.error(err); },
            complete: function (x) { stream.complete(x); }
        };
        return { observer: observer, stream: stream };
    },
    isValidStream: function (stream) {
        return (typeof stream.drain === 'function' &&
            typeof stream.subscribe === 'function');
    },
    streamSubscribe: function (stream, observer) {
        var subscription = stream.subscribe(observer);
        return function () { return subscription.unsubscribe(); };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MostAdapter;
//# sourceMappingURL=index.js.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(11), __webpack_require__(23)) :
  typeof define === 'function' && define.amd ? define(['most', '@most/multicast'], factory) :
  (global.mostCreate = factory(global.most,global.mostMulticast));
}(this, function (most,_most_multicast) { 'use strict';

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  function defer (task) { return Promise.resolve(task).then(runTask); }

  function runTask (task) {
    try {
      return task.run()
    } catch (e) {
      return task.error(e)
    }
  }

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  var PropagateAllTask = function PropagateAllTask (sink, time, events) {
    this.sink = sink
    this.time = time
    this.events = events
  };

  PropagateAllTask.prototype.run = function run () {
      var this$1 = this;

    var events = this.events
    var sink = this.sink
    var event

    for (var i = 0, l = events.length; i < l; ++i) {
      event = events[i]
      this$1.time = event.time
      sink.event(event.time, event.value)
    }

    events.length = 0
  };

  PropagateAllTask.prototype.error = function error (e) {
    this.sink.error(this.time, e)
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  var EndTask = function EndTask (t, x, sink) {
    this.time = t
    this.value = x
    this.sink = sink
  };

  EndTask.prototype.run = function run () {
    this.sink.end(this.time, this.value)
  };

  EndTask.prototype.error = function error (e) {
    this.sink.error(this.time, e)
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  var ErrorTask = function ErrorTask (t, e, sink) {
    this.time = t
    this.value = e
    this.sink = sink
  };

  ErrorTask.prototype.run = function run () {
    this.sink.error(this.time, this.value)
  };

  ErrorTask.prototype.error = function error (e) {
    throw e
  };

  var DeferredSink = function DeferredSink (sink) {
    this.sink = sink
    this.events = []
    this.active = true
  };

  DeferredSink.prototype.event = function event (t, x) {
    if (!this.active) {
      return
    }

    if (this.events.length === 0) {
      defer(new PropagateAllTask(this.sink, t, this.events))
    }

    this.events.push({ time: t, value: x })
  };

  DeferredSink.prototype.end = function end (t, x) {
    if (!this.active) {
      return
    }

    this._end(new EndTask(t, x, this.sink))
  };

  DeferredSink.prototype.error = function error (t, e) {
    this._end(new ErrorTask(t, e, this.sink))
  };

  DeferredSink.prototype._end = function _end (task) {
    this.active = false
    defer(task)
  };

  /** @license MIT License (c) copyright 2010-2016 original author or authors */

  var CreateSubscriber = function CreateSubscriber (sink, scheduler, subscribe) {
    this.sink = sink
    this.scheduler = scheduler
    this._unsubscribe = this._init(subscribe)
  };

  CreateSubscriber.prototype._init = function _init (subscribe) {
      var this$1 = this;

    var add = function (x) { return this$1.sink.event(this$1.scheduler.now(), x); }
    var end = function (x) { return this$1.sink.end(this$1.scheduler.now(), x); }
    var error = function (e) { return this$1.sink.error(this$1.scheduler.now(), e); }

    try {
      return subscribe(add, end, error)
    } catch (e) {
      error(e)
    }
  };

  CreateSubscriber.prototype.dispose = function dispose () {
    if (typeof this._unsubscribe === 'function') {
      return this._unsubscribe.call(void 0)
    }
  };

  var Create = function Create (subscribe) {
    this._subscribe = subscribe
  };

  Create.prototype.run = function run (sink, scheduler) {
    return new CreateSubscriber(new DeferredSink(sink), scheduler, this._subscribe)
  };

  function index (run) { return new most.Stream(new _most_multicast.MulticastSource(new Create(run))); }

  return index;

}));

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(23)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('@most/multicast'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.multicast);
    global.mostHold = mod.exports;
  }
})(this, function (exports, _multicast) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  // hold :: Stream a -> Stream a
  var index = function index(stream) {
    return new stream.constructor(new _multicast.MulticastSource(new Hold(stream.source)));
  };

  var Hold = function () {
    function Hold(source) {
      _classCallCheck(this, Hold);

      this.source = source;
      this.time = -Infinity;
      this.value = void 0;
    }

    _createClass(Hold, [{
      key: 'run',
      value: function run(sink, scheduler) {
        /* istanbul ignore else */
        if (sink._hold !== this) {
          sink._hold = this;
          sink._holdAdd = sink.add;
          sink.add = holdAdd;

          sink._holdEvent = sink.event;
          sink.event = holdEvent;
        }

        return this.source.run(sink, scheduler);
      }
    }]);

    return Hold;
  }();

  function holdAdd(sink) {
    var len = this._holdAdd(sink);
    /* istanbul ignore else */
    if (this._hold.time >= 0) {
      sink.event(this._hold.time, this._hold.value);
    }
    return len;
  }

  function holdEvent(t, x) {
    /* istanbul ignore else */
    if (t >= this._hold.time) {
      this._hold.time = t;
      this._hold.value = x;
    }
    return this._holdEvent(t, x);
  }

  exports.default = index;
});


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var copy       = __webpack_require__(99)
  , map        = __webpack_require__(107)
  , callable   = __webpack_require__(9)
  , validValue = __webpack_require__(5)

  , bind = Function.prototype.bind, defineProperty = Object.defineProperty
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , define;

define = function (name, desc, bindTo) {
	var value = validValue(desc) && callable(desc.value), dgs;
	dgs = copy(desc);
	delete dgs.writable;
	delete dgs.value;
	dgs.get = function () {
		if (hasOwnProperty.call(this, name)) return value;
		desc.value = bind.call(value, (bindTo == null) ? this : this[bindTo]);
		defineProperty(this, name, desc);
		return this[name];
	};
	return dgs;
};

module.exports = function (props/*, bindTo*/) {
	var bindTo = arguments[1];
	return map(props, function (desc, name) {
		return define(name, desc, bindTo);
	});
};


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var toPosInt = __webpack_require__(95)
  , value    = __webpack_require__(5)

  , indexOf = Array.prototype.indexOf
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , abs = Math.abs, floor = Math.floor;

module.exports = function (searchElement/*, fromIndex*/) {
	var i, l, fromIndex, val;
	if (searchElement === searchElement) { //jslint: ignore
		return indexOf.apply(this, arguments);
	}

	l = toPosInt(value(this).length);
	fromIndex = arguments[1];
	if (isNaN(fromIndex)) fromIndex = 0;
	else if (fromIndex >= 0) fromIndex = floor(fromIndex);
	else fromIndex = toPosInt(this.length) - floor(abs(fromIndex));

	for (i = fromIndex; i < l; ++i) {
		if (hasOwnProperty.call(this, i)) {
			val = this[i];
			if (val !== val) return i; //jslint: ignore
		}
	}
	return -1;
};


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(92)()
	? Math.sign
	: __webpack_require__(93);


/***/ },
/* 92 */
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = function () {
	var sign = Math.sign;
	if (typeof sign !== 'function') return false;
	return ((sign(10) === 1) && (sign(-20) === -1));
};


/***/ },
/* 93 */
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = function (value) {
	value = Number(value);
	if (isNaN(value) || (value === 0)) return value;
	return (value > 0) ? 1 : -1;
};


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var sign = __webpack_require__(91)

  , abs = Math.abs, floor = Math.floor;

module.exports = function (value) {
	if (isNaN(value)) return 0;
	value = Number(value);
	if ((value === 0) || !isFinite(value)) return value;
	return sign(value) * floor(abs(value));
};


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var toInteger = __webpack_require__(94)

  , max = Math.max;

module.exports = function (value) { return max(0, toInteger(value)); };


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// Internal method, used by iteration functions.
// Calls a function for each key-value pair found in object
// Optionally takes compareFn to iterate object in specific order

'use strict';

var callable = __webpack_require__(9)
  , value    = __webpack_require__(5)

  , bind = Function.prototype.bind, call = Function.prototype.call, keys = Object.keys
  , propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

module.exports = function (method, defVal) {
	return function (obj, cb/*, thisArg, compareFn*/) {
		var list, thisArg = arguments[2], compareFn = arguments[3];
		obj = Object(value(obj));
		callable(cb);

		list = keys(obj);
		if (compareFn) {
			list.sort((typeof compareFn === 'function') ? bind.call(compareFn, obj) : undefined);
		}
		if (typeof method !== 'function') method = list[method];
		return call.call(method, list, function (key, index) {
			if (!propertyIsEnumerable.call(obj, key)) return defVal;
			return call.call(cb, thisArg, obj[key], key, obj, index);
		});
	};
};


/***/ },
/* 97 */
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== 'function') return false;
	obj = { foo: 'raz' };
	assign(obj, { bar: 'dwa' }, { trzy: 'trzy' });
	return (obj.foo + obj.bar + obj.trzy) === 'razdwatrzy';
};


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var keys  = __webpack_require__(104)
  , value = __webpack_require__(5)

  , max = Math.max;

module.exports = function (dest, src/*, …srcn*/) {
	var error, i, l = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try { dest[key] = src[key]; } catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < l; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var assign = __webpack_require__(25)
  , value  = __webpack_require__(5);

module.exports = function (obj) {
	var copy = Object(value(obj));
	if (copy !== obj) return copy;
	return assign({}, obj);
};


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// Workaround for http://code.google.com/p/v8/issues/detail?id=2804

'use strict';

var create = Object.create, shim;

if (!__webpack_require__(43)()) {
	shim = __webpack_require__(44);
}

module.exports = (function () {
	var nullObject, props, desc;
	if (!shim) return create;
	if (shim.level !== 1) return create;

	nullObject = {};
	props = {};
	desc = { configurable: false, enumerable: false, writable: true,
		value: undefined };
	Object.getOwnPropertyNames(Object.prototype).forEach(function (name) {
		if (name === '__proto__') {
			props[name] = { configurable: true, enumerable: false, writable: true,
				value: undefined };
			return;
		}
		props[name] = desc;
	});
	Object.defineProperties(nullObject, props);

	Object.defineProperty(shim, 'nullPolyfill', { configurable: false,
		enumerable: false, writable: false, value: nullObject });

	return function (prototype, props) {
		return create((prototype === null) ? nullObject : prototype, props);
	};
}());


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(96)('forEach');


/***/ },
/* 102 */
/***/ function(module, exports) {

"use strict";
// Deprecated

'use strict';

module.exports = function (obj) { return typeof obj === 'function'; };


/***/ },
/* 103 */
/***/ function(module, exports) {

"use strict";
'use strict';

var map = { function: true, object: true };

module.exports = function (x) {
	return ((x != null) && map[typeof x]) || false;
};


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(105)()
	? Object.keys
	: __webpack_require__(106);


/***/ },
/* 105 */
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = function () {
	try {
		Object.keys('primitive');
		return true;
	} catch (e) { return false; }
};


/***/ },
/* 106 */
/***/ function(module, exports) {

"use strict";
'use strict';

var keys = Object.keys;

module.exports = function (object) {
	return keys(object == null ? object : Object(object));
};


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var callable = __webpack_require__(9)
  , forEach  = __webpack_require__(101)

  , call = Function.prototype.call;

module.exports = function (obj, cb/*, thisArg*/) {
	var o = {}, thisArg = arguments[2];
	callable(cb);
	forEach(obj, function (value, key, obj, index) {
		o[key] = call.call(cb, thisArg, value, key, obj, index);
	});
	return o;
};


/***/ },
/* 108 */
/***/ function(module, exports) {

"use strict";
'use strict';

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

module.exports = function (options/*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (options == null) return;
		process(Object(options), result);
	});
	return result;
};


/***/ },
/* 109 */
/***/ function(module, exports) {

"use strict";
'use strict';

var forEach = Array.prototype.forEach, create = Object.create;

module.exports = function (arg/*, …args*/) {
	var set = create(null);
	forEach.call(arguments, function (name) { set[name] = true; });
	return set;
};


/***/ },
/* 110 */
/***/ function(module, exports) {

"use strict";
'use strict';

var str = 'razdwatrzy';

module.exports = function () {
	if (typeof str.contains !== 'function') return false;
	return ((str.contains('dwa') === true) && (str.contains('foo') === false));
};


/***/ },
/* 111 */
/***/ function(module, exports) {

"use strict";
'use strict';

var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var setPrototypeOf = __webpack_require__(15)
  , contains       = __webpack_require__(45)
  , d              = __webpack_require__(8)
  , Iterator       = __webpack_require__(27)

  , defineProperty = Object.defineProperty
  , ArrayIterator;

ArrayIterator = module.exports = function (arr, kind) {
	if (!(this instanceof ArrayIterator)) return new ArrayIterator(arr, kind);
	Iterator.call(this, arr);
	if (!kind) kind = 'value';
	else if (contains.call(kind, 'key+value')) kind = 'key+value';
	else if (contains.call(kind, 'key')) kind = 'key';
	else kind = 'value';
	defineProperty(this, '__kind__', d('', kind));
};
if (setPrototypeOf) setPrototypeOf(ArrayIterator, Iterator);

ArrayIterator.prototype = Object.create(Iterator.prototype, {
	constructor: d(ArrayIterator),
	_resolve: d(function (i) {
		if (this.__kind__ === 'value') return this.__list__[i];
		if (this.__kind__ === 'key+value') return [i, this.__list__[i]];
		return i;
	}),
	toString: d(function () { return '[object Array Iterator]'; })
});


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var isArguments = __webpack_require__(24)
  , callable    = __webpack_require__(9)
  , isString    = __webpack_require__(26)
  , get         = __webpack_require__(114)

  , isArray = Array.isArray, call = Function.prototype.call
  , some = Array.prototype.some;

module.exports = function (iterable, cb/*, thisArg*/) {
	var mode, thisArg = arguments[2], result, doBreak, broken, i, l, char, code;
	if (isArray(iterable) || isArguments(iterable)) mode = 'array';
	else if (isString(iterable)) mode = 'string';
	else iterable = get(iterable);

	callable(cb);
	doBreak = function () { broken = true; };
	if (mode === 'array') {
		some.call(iterable, function (value) {
			call.call(cb, thisArg, value, doBreak);
			if (broken) return true;
		});
		return;
	}
	if (mode === 'string') {
		l = iterable.length;
		for (i = 0; i < l; ++i) {
			char = iterable[i];
			if ((i + 1) < l) {
				code = char.charCodeAt(0);
				if ((code >= 0xD800) && (code <= 0xDBFF)) char += iterable[++i];
			}
			call.call(cb, thisArg, char, doBreak);
			if (broken) break;
		}
		return;
	}
	result = iterable.next();

	while (!result.done) {
		call.call(cb, thisArg, result.value, doBreak);
		if (broken) return;
		result = iterable.next();
	}
};


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var isArguments    = __webpack_require__(24)
  , isString       = __webpack_require__(26)
  , ArrayIterator  = __webpack_require__(112)
  , StringIterator = __webpack_require__(116)
  , iterable       = __webpack_require__(46)
  , iteratorSymbol = __webpack_require__(13).iterator;

module.exports = function (obj) {
	if (typeof iterable(obj)[iteratorSymbol] === 'function') return obj[iteratorSymbol]();
	if (isArguments(obj)) return new ArrayIterator(obj);
	if (isString(obj)) return new StringIterator(obj);
	return new ArrayIterator(obj);
};


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var isArguments    = __webpack_require__(24)
  , isString       = __webpack_require__(26)
  , iteratorSymbol = __webpack_require__(13).iterator

  , isArray = Array.isArray;

module.exports = function (value) {
	if (value == null) return false;
	if (isArray(value)) return true;
	if (isString(value)) return true;
	if (isArguments(value)) return true;
	return (typeof value[iteratorSymbol] === 'function');
};


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// Thanks @mathiasbynens
// http://mathiasbynens.be/notes/javascript-unicode#iterating-over-symbols

'use strict';

var setPrototypeOf = __webpack_require__(15)
  , d              = __webpack_require__(8)
  , Iterator       = __webpack_require__(27)

  , defineProperty = Object.defineProperty
  , StringIterator;

StringIterator = module.exports = function (str) {
	if (!(this instanceof StringIterator)) return new StringIterator(str);
	str = String(str);
	Iterator.call(this, str);
	defineProperty(this, '__length__', d('', str.length));

};
if (setPrototypeOf) setPrototypeOf(StringIterator, Iterator);

StringIterator.prototype = Object.create(Iterator.prototype, {
	constructor: d(StringIterator),
	_next: d(function () {
		if (!this.__list__) return;
		if (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;
		this._unBind();
	}),
	_resolve: d(function (i) {
		var char = this.__list__[i], code;
		if (this.__nextIndex__ === this.__length__) return char;
		code = char.charCodeAt(0);
		if ((code >= 0xD800) && (code <= 0xDBFF)) return char + this.__list__[this.__nextIndex__++];
		return char;
	}),
	toString: d(function () { return '[object String Iterator]'; })
});


/***/ },
/* 117 */
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = function () {
	var map, iterator, result;
	if (typeof Map !== 'function') return false;
	try {
		// WebKit doesn't support arguments and crashes
		map = new Map([['raz', 'one'], ['dwa', 'two'], ['trzy', 'three']]);
	} catch (e) {
		return false;
	}
	if (String(map) !== '[object Map]') return false;
	if (map.size !== 3) return false;
	if (typeof map.clear !== 'function') return false;
	if (typeof map.delete !== 'function') return false;
	if (typeof map.entries !== 'function') return false;
	if (typeof map.forEach !== 'function') return false;
	if (typeof map.get !== 'function') return false;
	if (typeof map.has !== 'function') return false;
	if (typeof map.keys !== 'function') return false;
	if (typeof map.set !== 'function') return false;
	if (typeof map.values !== 'function') return false;

	iterator = map.entries();
	result = iterator.next();
	if (result.done !== false) return false;
	if (!result.value) return false;
	if (result.value[0] !== 'raz') return false;
	if (result.value[1] !== 'one') return false;

	return true;
};


/***/ },
/* 118 */
/***/ function(module, exports) {

"use strict";
// Exports true if environment provides native `Map` implementation,
// whatever that is.

'use strict';

module.exports = (function () {
	if (typeof Map === 'undefined') return false;
	return (Object.prototype.toString.call(new Map()) === '[object Map]');
}());


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(109)('key',
	'value', 'key+value');


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var setPrototypeOf    = __webpack_require__(15)
  , d                 = __webpack_require__(8)
  , Iterator          = __webpack_require__(27)
  , toStringTagSymbol = __webpack_require__(13).toStringTag
  , kinds             = __webpack_require__(119)

  , defineProperties = Object.defineProperties
  , unBind = Iterator.prototype._unBind
  , MapIterator;

MapIterator = module.exports = function (map, kind) {
	if (!(this instanceof MapIterator)) return new MapIterator(map, kind);
	Iterator.call(this, map.__mapKeysData__, map);
	if (!kind || !kinds[kind]) kind = 'key+value';
	defineProperties(this, {
		__kind__: d('', kind),
		__values__: d('w', map.__mapValuesData__)
	});
};
if (setPrototypeOf) setPrototypeOf(MapIterator, Iterator);

MapIterator.prototype = Object.create(Iterator.prototype, {
	constructor: d(MapIterator),
	_resolve: d(function (i) {
		if (this.__kind__ === 'value') return this.__values__[i];
		if (this.__kind__ === 'key') return this.__list__[i];
		return [this.__list__[i], this.__values__[i]];
	}),
	_unBind: d(function () {
		this.__values__ = null;
		unBind.call(this);
	}),
	toString: d(function () { return '[object Map Iterator]'; })
});
Object.defineProperty(MapIterator.prototype, toStringTagSymbol,
	d('c', 'Map Iterator'));


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var clear          = __webpack_require__(42)
  , eIndexOf       = __webpack_require__(90)
  , setPrototypeOf = __webpack_require__(15)
  , callable       = __webpack_require__(9)
  , validValue     = __webpack_require__(5)
  , d              = __webpack_require__(8)
  , ee             = __webpack_require__(126)
  , Symbol         = __webpack_require__(13)
  , iterator       = __webpack_require__(46)
  , forOf          = __webpack_require__(113)
  , Iterator       = __webpack_require__(120)
  , isNative       = __webpack_require__(118)

  , call = Function.prototype.call
  , defineProperties = Object.defineProperties, getPrototypeOf = Object.getPrototypeOf
  , MapPoly;

module.exports = MapPoly = function (/*iterable*/) {
	var iterable = arguments[0], keys, values, self;
	if (!(this instanceof MapPoly)) throw new TypeError('Constructor requires \'new\'');
	if (isNative && setPrototypeOf && (Map !== MapPoly)) {
		self = setPrototypeOf(new Map(), getPrototypeOf(this));
	} else {
		self = this;
	}
	if (iterable != null) iterator(iterable);
	defineProperties(self, {
		__mapKeysData__: d('c', keys = []),
		__mapValuesData__: d('c', values = [])
	});
	if (!iterable) return self;
	forOf(iterable, function (value) {
		var key = validValue(value)[0];
		value = value[1];
		if (eIndexOf.call(keys, key) !== -1) return;
		keys.push(key);
		values.push(value);
	}, self);
	return self;
};

if (isNative) {
	if (setPrototypeOf) setPrototypeOf(MapPoly, Map);
	MapPoly.prototype = Object.create(Map.prototype, {
		constructor: d(MapPoly)
	});
}

ee(defineProperties(MapPoly.prototype, {
	clear: d(function () {
		if (!this.__mapKeysData__.length) return;
		clear.call(this.__mapKeysData__);
		clear.call(this.__mapValuesData__);
		this.emit('_clear');
	}),
	delete: d(function (key) {
		var index = eIndexOf.call(this.__mapKeysData__, key);
		if (index === -1) return false;
		this.__mapKeysData__.splice(index, 1);
		this.__mapValuesData__.splice(index, 1);
		this.emit('_delete', index, key);
		return true;
	}),
	entries: d(function () { return new Iterator(this, 'key+value'); }),
	forEach: d(function (cb/*, thisArg*/) {
		var thisArg = arguments[1], iterator, result;
		callable(cb);
		iterator = this.entries();
		result = iterator._next();
		while (result !== undefined) {
			call.call(cb, thisArg, this.__mapValuesData__[result],
				this.__mapKeysData__[result], this);
			result = iterator._next();
		}
	}),
	get: d(function (key) {
		var index = eIndexOf.call(this.__mapKeysData__, key);
		if (index === -1) return;
		return this.__mapValuesData__[index];
	}),
	has: d(function (key) {
		return (eIndexOf.call(this.__mapKeysData__, key) !== -1);
	}),
	keys: d(function () { return new Iterator(this, 'key'); }),
	set: d(function (key, value) {
		var index = eIndexOf.call(this.__mapKeysData__, key), emit;
		if (index === -1) {
			index = this.__mapKeysData__.push(key) - 1;
			emit = true;
		}
		this.__mapValuesData__[index] = value;
		if (emit) this.emit('_add', index, key);
		return this;
	}),
	size: d.gs(function () { return this.__mapKeysData__.length; }),
	values: d(function () { return new Iterator(this, 'value'); }),
	toString: d(function () { return '[object Map]'; })
}));
Object.defineProperty(MapPoly.prototype, Symbol.iterator, d(function () {
	return this.entries();
}));
Object.defineProperty(MapPoly.prototype, Symbol.toStringTag, d('c', 'Map'));


/***/ },
/* 122 */
/***/ function(module, exports) {

"use strict";
'use strict';

var validTypes = { object: true, symbol: true };

module.exports = function () {
	var symbol;
	if (typeof Symbol !== 'function') return false;
	symbol = Symbol('test symbol');
	try { String(symbol); } catch (e) { return false; }

	// Return 'true' also for polyfills
	if (!validTypes[typeof Symbol.iterator]) return false;
	if (!validTypes[typeof Symbol.toPrimitive]) return false;
	if (!validTypes[typeof Symbol.toStringTag]) return false;

	return true;
};


/***/ },
/* 123 */
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = function (x) {
	if (!x) return false;
	if (typeof x === 'symbol') return true;
	if (!x.constructor) return false;
	if (x.constructor.name !== 'Symbol') return false;
	return (x[x.constructor.toStringTag] === 'Symbol');
};


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// ES2015 Symbol polyfill for environments that do not support it (or partially support it)

'use strict';

var d              = __webpack_require__(8)
  , validateSymbol = __webpack_require__(125)

  , create = Object.create, defineProperties = Object.defineProperties
  , defineProperty = Object.defineProperty, objPrototype = Object.prototype
  , NativeSymbol, SymbolPolyfill, HiddenSymbol, globalSymbols = create(null)
  , isNativeSafe;

if (typeof Symbol === 'function') {
	NativeSymbol = Symbol;
	try {
		String(NativeSymbol());
		isNativeSafe = true;
	} catch (ignore) {}
}

var generateName = (function () {
	var created = create(null);
	return function (desc) {
		var postfix = 0, name, ie11BugWorkaround;
		while (created[desc + (postfix || '')]) ++postfix;
		desc += (postfix || '');
		created[desc] = true;
		name = '@@' + desc;
		defineProperty(objPrototype, name, d.gs(null, function (value) {
			// For IE11 issue see:
			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
			//    ie11-broken-getters-on-dom-objects
			// https://github.com/medikoo/es6-symbol/issues/12
			if (ie11BugWorkaround) return;
			ie11BugWorkaround = true;
			defineProperty(this, name, d(value));
			ie11BugWorkaround = false;
		}));
		return name;
	};
}());

// Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false
HiddenSymbol = function Symbol(description) {
	if (this instanceof HiddenSymbol) throw new TypeError('TypeError: Symbol is not a constructor');
	return SymbolPolyfill(description);
};

// Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)
module.exports = SymbolPolyfill = function Symbol(description) {
	var symbol;
	if (this instanceof Symbol) throw new TypeError('TypeError: Symbol is not a constructor');
	if (isNativeSafe) return NativeSymbol(description);
	symbol = create(HiddenSymbol.prototype);
	description = (description === undefined ? '' : String(description));
	return defineProperties(symbol, {
		__description__: d('', description),
		__name__: d('', generateName(description))
	});
};
defineProperties(SymbolPolyfill, {
	for: d(function (key) {
		if (globalSymbols[key]) return globalSymbols[key];
		return (globalSymbols[key] = SymbolPolyfill(String(key)));
	}),
	keyFor: d(function (s) {
		var key;
		validateSymbol(s);
		for (key in globalSymbols) if (globalSymbols[key] === s) return key;
	}),

	// If there's native implementation of given symbol, let's fallback to it
	// to ensure proper interoperability with other native functions e.g. Array.from
	hasInstance: d('', (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill('hasInstance')),
	isConcatSpreadable: d('', (NativeSymbol && NativeSymbol.isConcatSpreadable) ||
		SymbolPolyfill('isConcatSpreadable')),
	iterator: d('', (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill('iterator')),
	match: d('', (NativeSymbol && NativeSymbol.match) || SymbolPolyfill('match')),
	replace: d('', (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill('replace')),
	search: d('', (NativeSymbol && NativeSymbol.search) || SymbolPolyfill('search')),
	species: d('', (NativeSymbol && NativeSymbol.species) || SymbolPolyfill('species')),
	split: d('', (NativeSymbol && NativeSymbol.split) || SymbolPolyfill('split')),
	toPrimitive: d('', (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill('toPrimitive')),
	toStringTag: d('', (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill('toStringTag')),
	unscopables: d('', (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill('unscopables'))
});

// Internal tweaks for real symbol producer
defineProperties(HiddenSymbol.prototype, {
	constructor: d(SymbolPolyfill),
	toString: d('', function () { return this.__name__; })
});

// Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
defineProperties(SymbolPolyfill.prototype, {
	toString: d(function () { return 'Symbol (' + validateSymbol(this).__description__ + ')'; }),
	valueOf: d(function () { return validateSymbol(this); })
});
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {
	var symbol = validateSymbol(this);
	if (typeof symbol === 'symbol') return symbol;
	return symbol.toString();
}));
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol'));

// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
	d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));

// Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
	d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var isSymbol = __webpack_require__(123);

module.exports = function (value) {
	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
	return value;
};


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var d        = __webpack_require__(8)
  , callable = __webpack_require__(9)

  , apply = Function.prototype.apply, call = Function.prototype.call
  , create = Object.create, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , descriptor = { configurable: true, enumerable: false, writable: true }

  , on, once, off, emit, methods, descriptors, base;

on = function (type, listener) {
	var data;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;
	else if (typeof data[type] === 'object') data[type].push(listener);
	else data[type] = [data[type], listener];

	return this;
};

once = function (type, listener) {
	var once, self;

	callable(listener);
	self = this;
	on.call(this, type, once = function () {
		off.call(self, type, once);
		apply.call(listener, this, arguments);
	});

	once.__eeOnceListener__ = listener;
	return this;
};

off = function (type, listener) {
	var data, listeners, candidate, i;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if (typeof listeners === 'object') {
		for (i = 0; (candidate = listeners[i]); ++i) {
			if ((candidate === listener) ||
					(candidate.__eeOnceListener__ === listener)) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];
				else listeners.splice(i, 1);
			}
		}
	} else {
		if ((listeners === listener) ||
				(listeners.__eeOnceListener__ === listener)) {
			delete data[type];
		}
	}

	return this;
};

emit = function (type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if (typeof listeners === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) args[i - 1] = arguments[i];

		listeners = listeners.slice();
		for (i = 0; (listener = listeners[i]); ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
		case 1:
			call.call(listeners, this);
			break;
		case 2:
			call.call(listeners, this, arguments[1]);
			break;
		case 3:
			call.call(listeners, this, arguments[1], arguments[2]);
			break;
		default:
			l = arguments.length;
			args = new Array(l - 1);
			for (i = 1; i < l; ++i) {
				args[i - 1] = arguments[i];
			}
			apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: once,
	off: off,
	emit: emit
};

descriptors = {
	on: d(on),
	once: d(once),
	off: d(off),
	emit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function (o) {
	return (o == null) ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var isArguments = __webpack_require__(51),
    isArray = __webpack_require__(52);

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * The base implementation of `_.flatten` with added support for restricting
 * flattening and specifying the start index.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {boolean} [isDeep] Specify a deep flatten.
 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, isDeep, isStrict, result) {
  result || (result = []);

  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index];
    if (isObjectLike(value) && isArrayLike(value) &&
        (isStrict || isArray(value) || isArguments(value))) {
      if (isDeep) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, isDeep, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = baseFlatten;


/***/ },
/* 128 */
/***/ function(module, exports) {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * The base implementation of `baseForIn` and `baseForOwn` which iterates
 * over `object` properties returned by `keysFunc` invoking `iteratee` for
 * each property. Iteratee functions may exit iteration early by explicitly
 * returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * Creates a base function for methods like `_.forIn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = baseFor;


/***/ },
/* 129 */
/***/ function(module, exports) {

/**
 * lodash 3.1.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * The base implementation of `_.indexOf` without support for binary searches.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return indexOfNaN(array, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * Gets the index at which the first occurrence of `NaN` is found in `array`.
 * If `fromRight` is provided elements of `array` are iterated from right to left.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
 */
function indexOfNaN(array, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 0 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    var other = array[index];
    if (other !== other) {
      return index;
    }
  }
  return -1;
}

module.exports = baseIndexOf;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseIndexOf = __webpack_require__(129),
    cacheIndexOf = __webpack_require__(132),
    createCache = __webpack_require__(133);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniq` without support for callback shorthands
 * and `this` binding.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The function invoked per iteration.
 * @returns {Array} Returns the new duplicate-value-free array.
 */
function baseUniq(array, iteratee) {
  var index = -1,
      indexOf = baseIndexOf,
      length = array.length,
      isCommon = true,
      isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
      seen = isLarge ? createCache() : null,
      result = [];

  if (seen) {
    indexOf = cacheIndexOf;
    isCommon = false;
  } else {
    isLarge = false;
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value, index, array) : value;

    if (isCommon && value === value) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (indexOf(seen, computed, 0) < 0) {
      if (iteratee || isLarge) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ },
/* 131 */
/***/ function(module, exports) {

/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * A specialized version of `baseCallback` which only supports `this` binding
 * and specifying the number of arguments to provide to `func`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function bindCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  if (thisArg === undefined) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return function() {
    return func.apply(thisArg, arguments);
  };
}

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = bindCallback;


/***/ },
/* 132 */
/***/ function(module, exports) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is in `cache` mimicking the return signature of
 * `_.indexOf` by returning `0` if the value is found, else `-1`.
 *
 * @private
 * @param {Object} cache The cache to search.
 * @param {*} value The value to search for.
 * @returns {number} Returns `0` if `value` is found, else `-1`.
 */
function cacheIndexOf(cache, value) {
  var data = cache.data,
      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

  return result ? 0 : -1;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = cacheIndexOf;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = __webpack_require__(48);

/** Native method references. */
var Set = getNative(global, 'Set');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeCreate = getNative(Object, 'create');

/**
 *
 * Creates a cache object to store unique values.
 *
 * @private
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var length = values ? values.length : 0;

  this.data = { 'hash': nativeCreate(null), 'set': new Set };
  while (length--) {
    this.push(values[length]);
  }
}

/**
 * Adds `value` to the cache.
 *
 * @private
 * @name push
 * @memberOf SetCache
 * @param {*} value The value to cache.
 */
function cachePush(value) {
  var data = this.data;
  if (typeof value == 'string' || isObject(value)) {
    data.set.add(value);
  } else {
    data.hash[value] = true;
  }
}

/**
 * Creates a `Set` cache object to optimize linear searches of large arrays.
 *
 * @private
 * @param {Array} [values] The values to cache.
 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
 */
function createCache(values) {
  return (nativeCreate && Set) ? new SetCache(values) : null;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

// Add functions to the `Set` cache.
SetCache.prototype.push = cachePush;

module.exports = createCache;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)))

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

/**
 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var root = __webpack_require__(28);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match latin-1 supplementary letters (excluding mathematical operators). */
var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0';

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to map latin-1 supplementary letters to basic latin letters. */
var deburredLetters = {
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss'
};

/**
 * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
function deburrLetter(letter) {
  return deburredLetters[letter];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = Symbol ? symbolProto.toString : undefined;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  if (isSymbol(value)) {
    return Symbol ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var deburr = __webpack_require__(134),
    words = __webpack_require__(139);

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string)), callback, '');
  };
}

/**
 * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__foo_bar__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

module.exports = kebabCase;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = __webpack_require__(48),
    isArguments = __webpack_require__(51),
    isArray = __webpack_require__(52);

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;


/***/ },
/* 137 */
/***/ function(module, exports) {

/**
 * lodash 3.6.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as an array.
 *
 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.restParam(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function restParam(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        rest = Array(length);

    while (++index < length) {
      rest[index] = args[start + index];
    }
    switch (start) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, args[0], rest);
      case 2: return func.call(this, args[0], args[1], rest);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = rest;
    return func.apply(this, otherArgs);
  };
}

module.exports = restParam;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseFlatten = __webpack_require__(127),
    baseUniq = __webpack_require__(130),
    restParam = __webpack_require__(137);

/**
 * Creates an array of unique values, in order, of the provided arrays using
 * `SameValueZero` for equality comparisons.
 *
 * **Note:** [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
 * comparisons are like strict equality comparisons, e.g. `===`, except that
 * `NaN` matches `NaN`.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([1, 2], [4, 2], [2, 1]);
 * // => [1, 2, 4]
 */
var union = restParam(function(arrays) {
  return baseUniq(baseFlatten(arrays, false, true));
});

module.exports = union;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

/**
 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var root = __webpack_require__(28);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsQuoteRange = '\\u2018\\u2019\\u201c\\u201d',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsQuoteRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match non-compound words composed of alphanumeric characters. */
var reBasicWord = /[a-zA-Z0-9]+/g;

/** Used to match complex or compound words. */
var reComplexWord = RegExp([
  rsUpper + '?' + rsLower + '+(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsUpperMisc + '+(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
  rsUpper + '?' + rsLowerMisc + '+',
  rsUpper + '+',
  rsDigits,
  rsEmoji
].join('|'), 'g');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasComplexWord = /[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = Symbol ? symbolProto.toString : undefined;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  if (isSymbol(value)) {
    return Symbol ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    pattern = reHasComplexWord.test(string) ? reComplexWord : reBasicWord;
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SubjectSource_1 = __webpack_require__(53);
var util_1 = __webpack_require__(54);
var HoldSubjectSource = (function (_super) {
    __extends(HoldSubjectSource, _super);
    function HoldSubjectSource(bufferSize) {
        _super.call(this);
        this.buffer = [];
        this.bufferSize = bufferSize;
    }
    HoldSubjectSource.prototype.add = function (sink) {
        var buffer = this.buffer;
        if (buffer.length > 0) {
            util_1.pushEvents(buffer, sink);
        }
        return _super.prototype.add.call(this, sink);
    };
    HoldSubjectSource.prototype.next = function (value) {
        if (this.scheduler === void 0) {
            return;
        }
        var time = this.scheduler.now();
        this.buffer = util_1.dropAndAppend({ time: time, value: value }, this.buffer, this.bufferSize);
        if (this.active) {
            this._next(time, value);
        }
    };
    return HoldSubjectSource;
}(SubjectSource_1.BasicSubjectSource));
exports.HoldSubjectSource = HoldSubjectSource;
//# sourceMappingURL=HoldSubjectSource.js.map

/***/ },
/* 141 */
/***/ function(module, exports) {

"use strict";
"use strict";
var SubjectDisposable = (function () {
    function SubjectDisposable(source, sink) {
        this.source = source;
        this.sink = sink;
        this.disposed = false;
    }
    SubjectDisposable.prototype.dispose = function () {
        if (this.disposed)
            return;
        this.disposed = true;
        var remaining = this.source.remove(this.sink);
        return remaining === 0 && this.source._dispose();
    };
    return SubjectDisposable;
}());
exports.SubjectDisposable = SubjectDisposable;
//# sourceMappingURL=SubjectDisposable.js.map

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var most_1 = __webpack_require__(11);
var SubjectSource_1 = __webpack_require__(53);
exports.BasicSubjectSource = SubjectSource_1.BasicSubjectSource;
var HoldSubjectSource_1 = __webpack_require__(140);
exports.HoldSubjectSource = HoldSubjectSource_1.HoldSubjectSource;
function subject() {
    return new Subject(new SubjectSource_1.BasicSubjectSource());
}
exports.subject = subject;
function holdSubject(bufferSize) {
    if (bufferSize === void 0) { bufferSize = 1; }
    if (bufferSize <= 0) {
        throw new Error('bufferSize must be an integer 1 or greater');
    }
    return new Subject(new HoldSubjectSource_1.HoldSubjectSource(bufferSize));
}
exports.holdSubject = holdSubject;
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject(source) {
        _super.call(this, source);
    }
    Subject.prototype.next = function (value) {
        this.source.next(value);
    };
    Subject.prototype.error = function (err) {
        this.source.error(err);
    };
    Subject.prototype.complete = function (value) {
        this.source.complete(value);
    };
    return Subject;
}(most_1.Stream));
exports.Subject = Subject;
//# sourceMappingURL=index.js.map

/***/ },
/* 143 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = LinkedList;

/**
 * Doubly linked list
 * @constructor
 */
function LinkedList() {
	this.head = null;
	this.length = 0;
}

/**
 * Add a node to the end of the list
 * @param {{prev:Object|null, next:Object|null, dispose:function}} x node to add
 */
LinkedList.prototype.add = function(x) {
	if(this.head !== null) {
		this.head.prev = x;
		x.next = this.head;
	}
	this.head = x;
	++this.length;
};

/**
 * Remove the provided node from the list
 * @param {{prev:Object|null, next:Object|null, dispose:function}} x node to remove
 */
LinkedList.prototype.remove = function(x) {
	--this.length;
	if(x === this.head) {
		this.head = this.head.next;
	}
	if(x.next !== null) {
		x.next.prev = x.prev;
		x.next = null;
	}
	if(x.prev !== null) {
		x.prev.next = x.next;
		x.prev = null;
	}
};

/**
 * @returns {boolean} true iff there are no nodes in the list
 */
LinkedList.prototype.isEmpty = function() {
	return this.length === 0;
};

/**
 * Dispose all nodes
 * @returns {Promise} promise that fulfills when all nodes have been disposed,
 *  or rejects if an error occurs while disposing
 */
LinkedList.prototype.dispose = function() {
	if(this.isEmpty()) {
		return Promise.resolve();
	}

	var promises = [];
	var x = this.head;
	this.head = null;
	this.length = 0;

	while(x !== null) {
		promises.push(x.dispose());
		x = x.next;
	}

	return Promise.all(promises);
};


/***/ },
/* 144 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

// Based on https://github.com/petkaantonov/deque

module.exports = Queue;

function Queue(capPow2) {
	this._capacity = capPow2||32;
	this._length = 0;
	this._head = 0;
}

Queue.prototype.push = function (x) {
	var len = this._length;
	this._checkCapacity(len + 1);

	var i = (this._head + len) & (this._capacity - 1);
	this[i] = x;
	this._length = len + 1;
};

Queue.prototype.shift = function () {
	var head = this._head;
	var x = this[head];

	this[head] = void 0;
	this._head = (head + 1) & (this._capacity - 1);
	this._length--;
	return x;
};

Queue.prototype.isEmpty = function() {
	return this._length === 0;
};

Queue.prototype.length = function () {
	return this._length;
};

Queue.prototype._checkCapacity = function (size) {
	if (this._capacity < size) {
		this._ensureCapacity(this._capacity << 1);
	}
};

Queue.prototype._ensureCapacity = function (capacity) {
	var oldCapacity = this._capacity;
	this._capacity = capacity;

	var last = this._head + this._length;

	if (last > oldCapacity) {
		copy(this, 0, this, oldCapacity, last & (oldCapacity - 1));
	}
};

function copy(src, srcIndex, dst, dstIndex, len) {
	for (var j = 0; j < len; ++j) {
		dst[j + dstIndex] = src[j + srcIndex];
		src[j + srcIndex] = void 0;
	}
}



/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var Pipe = __webpack_require__(2);
var runSource = __webpack_require__(60).withDefaultScheduler;
var dispose = __webpack_require__(1);
var PropagateTask = __webpack_require__(7);

exports.scan = scan;
exports.reduce = reduce;

/**
 * Create a stream containing successive reduce results of applying f to
 * the previous reduce result and the current stream item.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial initial value
 * @param {Stream} stream stream to scan
 * @returns {Stream} new stream containing successive reduce results
 */
function scan(f, initial, stream) {
	return new Stream(new Scan(f, initial, stream.source));
}

function Scan(f, z, source) {
	this.source = source;
	this.f = f;
	this.value = z;
}

Scan.prototype.run = function(sink, scheduler) {
	var d1 = scheduler.asap(PropagateTask.event(this.value, sink));
	var d2 = this.source.run(new ScanSink(this.f, this.value, sink), scheduler);
	return dispose.all([d1, d2]);
};

function ScanSink(f, z, sink) {
	this.f = f;
	this.value = z;
	this.sink = sink;
}

ScanSink.prototype.event = function(t, x) {
	var f = this.f;
	this.value = f(this.value, x);
	this.sink.event(t, this.value);
};

ScanSink.prototype.error = Pipe.prototype.error;
ScanSink.prototype.end = Pipe.prototype.end;

/**
 * Reduce a stream to produce a single result.  Note that reducing an infinite
 * stream will return a Promise that never fulfills, but that may reject if an error
 * occurs.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial initial value
 * @param {Stream} stream to reduce
 * @returns {Promise} promise for the file result of the reduce
 */
function reduce(f, initial, stream) {
	return runSource(new Reduce(f, initial, stream.source));
}

function Reduce(f, z, source) {
	this.source = source;
	this.f = f;
	this.value = z;
}

Reduce.prototype.run = function(sink, scheduler) {
	return this.source.run(new ReduceSink(this.f, this.value, sink), scheduler);
};

function ReduceSink(f, z, sink) {
	this.f = f;
	this.value = z;
	this.sink = sink;
}

ReduceSink.prototype.event = function(t, x) {
	var f = this.f;
	this.value = f(this.value, x);
	this.sink.event(t, this.value);
};

ReduceSink.prototype.error = Pipe.prototype.error;

ReduceSink.prototype.end = function(t) {
	this.sink.end(t, this.value);
};

function noop() {}


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var combine = __webpack_require__(55).combine;
var apply = __webpack_require__(3).apply;

exports.ap  = ap;

/**
 * Assume fs is a stream containing functions, and apply the latest function
 * in fs to the latest value in xs.
 * fs:         --f---------g--------h------>
 * xs:         -a-------b-------c-------d-->
 * ap(fs, xs): --fa-----fb-gb---gc--hc--hd->
 * @param {Stream} fs stream of functions to apply to the latest x
 * @param {Stream} xs stream of values to which to apply all the latest f
 * @returns {Stream} stream containing all the applications of fs to xs
 */
function ap(fs, xs) {
	return combine(apply, fs, xs);
}


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var streamOf = __webpack_require__(10).of;
var continueWith = __webpack_require__(56).continueWith;

exports.concat = concat;
exports.cons = cons;

/**
 * @param {*} x value to prepend
 * @param {Stream} stream
 * @returns {Stream} new stream with x prepended
 */
function cons(x, stream) {
	return concat(streamOf(x), stream);
}

/**
 * @param {Stream} left
 * @param {Stream} right
 * @returns {Stream} new stream containing all events in left followed by all
 *  events in right.  This *timeshifts* right to the end of left.
 */
function concat(left, right) {
	return continueWith(function() {
		return right;
	}, left);
}


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var mergeMapConcurrently = __webpack_require__(16).mergeMapConcurrently;

exports.concatMap = concatMap;

/**
 * Map each value in stream to a new stream, and concatenate them all
 * stream:              -a---b---cX
 * f(a):                 1-1-1-1X
 * f(b):                        -2-2-2-2X
 * f(c):                                -3-3-3-3X
 * stream.concatMap(f): -1-1-1-1-2-2-2-2-3-3-3-3X
 * @param {function(x:*):Stream} f function to map each value to a stream
 * @param {Stream} stream
 * @returns {Stream} new stream containing all events from each stream returned by f
 */
function concatMap(f, stream) {
	return mergeMapConcurrently(f, 1, stream);
}


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var Sink = __webpack_require__(2);
var dispose = __webpack_require__(1);
var PropagateTask = __webpack_require__(7);

exports.delay = delay;

/**
 * @param {Number} delayTime milliseconds to delay each item
 * @param {Stream} stream
 * @returns {Stream} new stream containing the same items, but delayed by ms
 */
function delay(delayTime, stream) {
	return delayTime <= 0 ? stream
		 : new Stream(new Delay(delayTime, stream.source));
}

function Delay(dt, source) {
	this.dt = dt;
	this.source = source;
}

Delay.prototype.run = function(sink, scheduler) {
	var delaySink = new DelaySink(this.dt, sink, scheduler);
	return dispose.all([delaySink, this.source.run(delaySink, scheduler)]);
};

function DelaySink(dt, sink, scheduler) {
	this.dt = dt;
	this.sink = sink;
	this.scheduler = scheduler;
}

DelaySink.prototype.dispose = function() {
	var self = this;
	this.scheduler.cancelAll(function(task) {
		return task.sink === self.sink;
	});
};

DelaySink.prototype.event = function(t, x) {
	this.scheduler.delay(this.dt, PropagateTask.event(x, this.sink));
};

DelaySink.prototype.end = function(t, x) {
	this.scheduler.delay(this.dt, PropagateTask.end(x, this.sink));
};

DelaySink.prototype.error = Sink.prototype.error;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var SafeSink = __webpack_require__(175);
var Pipe = __webpack_require__(2);
var dispose = __webpack_require__(1);
var tryEvent = __webpack_require__(35);
var isPromise = __webpack_require__(30).isPromise;
var PropagateTask = __webpack_require__(7);

exports.flatMapError = recoverWith;
exports.recoverWith  = recoverWith;
exports.throwError   = throwError;

/**
 * If stream encounters an error, recover and continue with items from stream
 * returned by f.
 * @param {function(error:*):Stream} f function which returns a new stream
 * @param {Stream} stream
 * @returns {Stream} new stream which will recover from an error by calling f
 */
function recoverWith(f, stream) {
	return new Stream(new RecoverWith(f, stream.source));
}

/**
 * Create a stream containing only an error
 * @param {*} e error value, preferably an Error or Error subtype
 * @returns {Stream} new stream containing only an error
 */
function throwError(e) {
	return new Stream(new ErrorSource(e));
}

function ErrorSource(e) {
	this.value = e;
}

ErrorSource.prototype.run = function(sink, scheduler) {
	return scheduler.asap(new PropagateTask(runError, this.value, sink));
};

function runError(t, e, sink) {
	sink.error(t, e);
}

function RecoverWith(f, source) {
	this.f = f;
	this.source = source;
}

RecoverWith.prototype.run = function(sink, scheduler) {
	return new RecoverWithSink(this.f, this.source, sink, scheduler);
};

function RecoverWithSink(f, source, sink, scheduler) {
	this.f = f;
	this.sink = new SafeSink(sink);
	this.scheduler = scheduler;
	this.disposable = source.run(this, scheduler);
}

RecoverWithSink.prototype.event = function(t, x) {
		tryEvent.tryEvent(t, x, this.sink);
}

RecoverWithSink.prototype.end = function(t, x) {
		tryEvent.tryEnd(t, x, this.sink);
}

RecoverWithSink.prototype.error = function(t, e) {
	var nextSink = this.sink.disable();

	dispose.tryDispose(t, this.disposable, this.sink);
	this._startNext(t, e, nextSink);
};

RecoverWithSink.prototype._startNext = function(t, x, sink) {
	try {
		this.disposable = this._continue(this.f, x, sink);
	} catch(e) {
		sink.error(t, e);
	}
};

RecoverWithSink.prototype._continue = function(f, x, sink) {
	var stream = f(x);
	return stream.source.run(sink, this.scheduler);
};

RecoverWithSink.prototype.dispose = function() {
	return this.disposable.dispose();
};


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var Sink = __webpack_require__(2);
var Filter = __webpack_require__(58);

exports.filter = filter;
exports.skipRepeats = skipRepeats;
exports.skipRepeatsWith = skipRepeatsWith;

/**
 * Retain only items matching a predicate
 * @param {function(x:*):boolean} p filtering predicate called for each item
 * @param {Stream} stream stream to filter
 * @returns {Stream} stream containing only items for which predicate returns truthy
 */
function filter(p, stream) {
	return new Stream(Filter.create(p, stream.source));
}

/**
 * Skip repeated events, using === to detect duplicates
 * @param {Stream} stream stream from which to omit repeated events
 * @returns {Stream} stream without repeated events
 */
function skipRepeats(stream) {
	return skipRepeatsWith(same, stream);
}

/**
 * Skip repeated events using the provided equals function to detect duplicates
 * @param {function(a:*, b:*):boolean} equals optional function to compare items
 * @param {Stream} stream stream from which to omit repeated events
 * @returns {Stream} stream without repeated events
 */
function skipRepeatsWith(equals, stream) {
	return new Stream(new SkipRepeats(equals, stream.source));
}

function SkipRepeats(equals, source) {
	this.equals = equals;
	this.source = source;
}

SkipRepeats.prototype.run = function(sink, scheduler) {
	return this.source.run(new SkipRepeatsSink(this.equals, sink), scheduler);
};

function SkipRepeatsSink(equals, sink) {
	this.equals = equals;
	this.sink = sink;
	this.value = void 0;
	this.init = true;
}

SkipRepeatsSink.prototype.end   = Sink.prototype.end;
SkipRepeatsSink.prototype.error = Sink.prototype.error;

SkipRepeatsSink.prototype.event = function(t, x) {
	if(this.init) {
		this.init = false;
		this.value = x;
		this.sink.event(t, x);
	} else if(!this.equals(this.value, x)) {
		this.value = x;
		this.sink.event(t, x);
	}
};

function same(a, b) {
	return a === b;
}


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var Sink = __webpack_require__(2);
var dispose = __webpack_require__(1);
var PropagateTask = __webpack_require__(7);
var Map = __webpack_require__(32);

exports.throttle = throttle;
exports.debounce = debounce;

/**
 * Limit the rate of events by suppressing events that occur too often
 * @param {Number} period time to suppress events
 * @param {Stream} stream
 * @returns {Stream}
 */
function throttle(period, stream) {
	return new Stream(throttleSource(period, stream.source));
}

function throttleSource(period, source) {
	return source instanceof Map ? commuteMapThrottle(period, source)
		: source instanceof Throttle ? fuseThrottle(period, source)
		: new Throttle(period, source)
}

function commuteMapThrottle(period, source) {
	return Map.create(source.f, throttleSource(period, source.source))
}

function fuseThrottle(period, source) {
	return new Throttle(Math.max(period, source.period), source.source)
}

function Throttle(period, source) {
	this.period = period;
	this.source = source;
}

Throttle.prototype.run = function(sink, scheduler) {
	return this.source.run(new ThrottleSink(this.period, sink), scheduler);
};

function ThrottleSink(period, sink) {
	this.time = 0;
	this.period = period;
	this.sink = sink;
}

ThrottleSink.prototype.event = function(t, x) {
	if(t >= this.time) {
		this.time = t + this.period;
		this.sink.event(t, x);
	}
};

ThrottleSink.prototype.end   = Sink.prototype.end;

ThrottleSink.prototype.error = Sink.prototype.error;

/**
 * Wait for a burst of events to subside and emit only the last event in the burst
 * @param {Number} period events occuring more frequently than this
 *  will be suppressed
 * @param {Stream} stream stream to debounce
 * @returns {Stream} new debounced stream
 */
function debounce(period, stream) {
	return new Stream(new Debounce(period, stream.source));
}

function Debounce(dt, source) {
	this.dt = dt;
	this.source = source;
}

Debounce.prototype.run = function(sink, scheduler) {
	return new DebounceSink(this.dt, this.source, sink, scheduler);
};

function DebounceSink(dt, source, sink, scheduler) {
	this.dt = dt;
	this.sink = sink;
	this.scheduler = scheduler;
	this.value = void 0;
	this.timer = null;

	var sourceDisposable = source.run(this, scheduler);
	this.disposable = dispose.all([this, sourceDisposable]);
}

DebounceSink.prototype.event = function(t, x) {
	this._clearTimer();
	this.value = x;
	this.timer = this.scheduler.delay(this.dt, PropagateTask.event(x, this.sink));
};

DebounceSink.prototype.end = function(t, x) {
	if(this._clearTimer()) {
		this.sink.event(t, this.value);
		this.value = void 0;
	}
	this.sink.end(t, x);
};

DebounceSink.prototype.error = function(t, x) {
	this._clearTimer();
	this.sink.error(t, x);
};

DebounceSink.prototype.dispose = function() {
	this._clearTimer();
};

DebounceSink.prototype._clearTimer = function() {
	if(this.timer === null) {
		return false;
	}
	this.timer.dispose();
	this.timer = null;
	return true;
};


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var Pipe = __webpack_require__(2);

exports.loop = loop;

/**
 * Generalized feedback loop. Call a stepper function for each event. The stepper
 * will be called with 2 params: the current seed and the an event value.  It must
 * return a new { seed, value } pair. The `seed` will be fed back into the next
 * invocation of stepper, and the `value` will be propagated as the event value.
 * @param {function(seed:*, value:*):{seed:*, value:*}} stepper loop step function
 * @param {*} seed initial seed value passed to first stepper call
 * @param {Stream} stream event stream
 * @returns {Stream} new stream whose values are the `value` field of the objects
 * returned by the stepper
 */
function loop(stepper, seed, stream) {
	return new Stream(new Loop(stepper, seed, stream.source));
}

function Loop(stepper, seed, source) {
	this.step = stepper;
	this.seed = seed;
	this.source = source;
}

Loop.prototype.run = function(sink, scheduler) {
	return this.source.run(new LoopSink(this.step, this.seed, sink), scheduler);
};

function LoopSink(stepper, seed, sink) {
	this.step = stepper;
	this.seed = seed;
	this.sink = sink;
}

LoopSink.prototype.error = Pipe.prototype.error;

LoopSink.prototype.event = function(t, x) {
	var result = this.step(this.seed, x);
	this.seed = result.seed;
	this.sink.event(t, result.value);
};

LoopSink.prototype.end = function(t) {
	this.sink.end(t, this.seed);
};


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var Pipe = __webpack_require__(2);
var IndexSink = __webpack_require__(34);
var empty = __webpack_require__(10).empty;
var dispose = __webpack_require__(1);
var base = __webpack_require__(3);

var copy = base.copy;
var reduce = base.reduce;

exports.merge = merge;
exports.mergeArray = mergeArray;

/**
 * @returns {Stream} stream containing events from all streams in the argument
 * list in time order.  If two events are simultaneous they will be merged in
 * arbitrary order.
 */
function merge(/*...streams*/) {
	return mergeArray(copy(arguments));
}

/**
 * @param {Array} streams array of stream to merge
 * @returns {Stream} stream containing events from all input observables
 * in time order.  If two events are simultaneous they will be merged in
 * arbitrary order.
 */
function mergeArray(streams) {
    var l = streams.length;
    return l === 0 ? empty()
		 : l === 1 ? streams[0]
		 : new Stream(mergeSources(streams));
}

/**
 * This implements fusion/flattening for merge.  It will
 * fuse adjacent merge operations.  For example:
 * - a.merge(b).merge(c) effectively becomes merge(a, b, c)
 * - merge(a, merge(b, c)) effectively becomes merge(a, b, c)
 * It does this by concatenating the sources arrays of
 * any nested Merge sources, in effect "flattening" nested
 * merge operations into a single merge.
 */
function mergeSources(streams) {
	return new Merge(reduce(appendSources, [], streams))
}

function appendSources(sources, stream) {
	var source = stream.source;
	return source instanceof Merge
		? sources.concat(source.sources)
		: sources.concat(source)
}

function Merge(sources) {
	this.sources = sources;
}

Merge.prototype.run = function(sink, scheduler) {
	var l = this.sources.length;
	var disposables = new Array(l);
	var sinks = new Array(l);

	var mergeSink = new MergeSink(disposables, sinks, sink);

	for(var indexSink, i=0; i<l; ++i) {
		indexSink = sinks[i] = new IndexSink(i, mergeSink);
		disposables[i] = this.sources[i].run(indexSink, scheduler);
	}

	return dispose.all(disposables);
};

function MergeSink(disposables, sinks, sink) {
	this.sink = sink;
	this.disposables = disposables;
	this.activeCount = sinks.length;
}

MergeSink.prototype.error = Pipe.prototype.error;

MergeSink.prototype.event = function(t, indexValue) {
	this.sink.event(t, indexValue.value);
};

MergeSink.prototype.end = function(t, indexedValue) {
	dispose.tryDispose(t, this.disposables[indexedValue.index], this.sink);
	if(--this.activeCount === 0) {
		this.sink.end(t, indexedValue.value);
	}
};


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var run = __webpack_require__(60).withDefaultScheduler;
var tap = __webpack_require__(17).tap;

exports.observe = observe;
exports.drain = drain;

/**
 * Observe all the event values in the stream in time order. The
 * provided function `f` will be called for each event value
 * @param {function(x:T):*} f function to call with each event value
 * @param {Stream<T>} stream stream to observe
 * @return {Promise} promise that fulfills after the stream ends without
 *  an error, or rejects if the stream ends with an error.
 */
function observe(f, stream) {
	return drain(tap(f, stream));
}

var defaultScheduler = __webpack_require__(18);
var dispose = __webpack_require__(1);

/**
 * "Run" a stream by creating demand and consuming all events
 * @param {Stream<T>} stream stream to drain
 * @return {Promise} promise that fulfills after the stream ends without
 *  an error, or rejects if the stream ends with an error.
 */
function drain(stream) {
	return run(stream.source);
}


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var fatal = __webpack_require__(31);
var just = __webpack_require__(10).of;

exports.fromPromise = fromPromise;
exports.awaitPromises = awaitPromises;

/**
 * Create a stream containing only the promise's fulfillment
 * value at the time it fulfills.
 * @param {Promise<T>} p promise
 * @return {Stream<T>} stream containing promise's fulfillment value.
 *  If the promise rejects, the stream will error
 */
function fromPromise(p) {
	return awaitPromises(just(p));
}

/**
 * Turn a Stream<Promise<T>> into Stream<T> by awaiting each promise.
 * Event order is preserved.
 * @param {Stream<Promise<T>>} stream
 * @return {Stream<T>} stream of fulfillment values.  The stream will
 * error if any promise rejects.
 */
function awaitPromises(stream) {
	return new Stream(new Await(stream.source));
}

function Await(source) {
	this.source = source;
}

Await.prototype.run = function(sink, scheduler) {
	return this.source.run(new AwaitSink(sink, scheduler), scheduler);
};

function AwaitSink(sink, scheduler) {
	this.sink = sink;
	this.scheduler = scheduler;
	this.queue = Promise.resolve();
	var self = this;

	// Pre-create closures, to avoid creating them per event
	this._eventBound = function(x) {
		self.sink.event(self.scheduler.now(), x);
	};

	this._endBound = function(x) {
		self.sink.end(self.scheduler.now(), x);
	};

	this._errorBound = function(e) {
		self.sink.error(self.scheduler.now(), e);
	};
}

AwaitSink.prototype.event = function(t, promise) {
	var self = this;
	this.queue = this.queue.then(function() {
		return self._event(promise);
	}).catch(this._errorBound);
};

AwaitSink.prototype.end = function(t, x) {
	var self = this;
	this.queue = this.queue.then(function() {
		return self._end(x);
	}).catch(this._errorBound);
};

AwaitSink.prototype.error = function(t, e) {
	var self = this;
	// Don't resolve error values, propagate directly
	this.queue = this.queue.then(function() {
		return self._errorBound(e);
	}).catch(fatal);
};

AwaitSink.prototype._event = function(promise) {
	return promise.then(this._eventBound);
};

AwaitSink.prototype._end = function(x) {
	return Promise.resolve(x).then(this._endBound);
};


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var Pipe = __webpack_require__(2);
var dispose = __webpack_require__(1);
var base = __webpack_require__(3);
var invoke = __webpack_require__(33);

exports.sample = sample;
exports.sampleWith = sampleWith;
exports.sampleArray = sampleArray;

/**
 * When an event arrives on sampler, emit the result of calling f with the latest
 * values of all streams being sampled
 * @param {function(...values):*} f function to apply to each set of sampled values
 * @param {Stream} sampler streams will be sampled whenever an event arrives
 *  on sampler
 * @returns {Stream} stream of sampled and transformed values
 */
function sample(f, sampler /*, ...streams */) {
	return sampleArray(f, sampler, base.drop(2, arguments));
}

/**
 * When an event arrives on sampler, emit the latest event value from stream.
 * @param {Stream} sampler stream of events at whose arrival time
 *  stream's latest value will be propagated
 * @param {Stream} stream stream of values
 * @returns {Stream} sampled stream of values
 */
function sampleWith(sampler, stream) {
	return new Stream(new Sampler(base.id, sampler.source, [stream.source]));
}

function sampleArray(f, sampler, streams) {
	return new Stream(new Sampler(f, sampler.source, base.map(getSource, streams)));
}

function getSource(stream) {
	return stream.source;
}

function Sampler(f, sampler, sources) {
	this.f = f;
	this.sampler = sampler;
	this.sources = sources;
}

Sampler.prototype.run = function(sink, scheduler) {
	var l = this.sources.length;
	var disposables = new Array(l+1);
	var sinks = new Array(l);

	var sampleSink = new SampleSink(this.f, sinks, sink);

	for(var hold, i=0; i<l; ++i) {
		hold = sinks[i] = new Hold(sampleSink);
		disposables[i] = this.sources[i].run(hold, scheduler);
	}

	disposables[i] = this.sampler.run(sampleSink, scheduler);

	return dispose.all(disposables);
};

function Hold(sink) {
	this.sink = sink;
	this.hasValue = false;
}

Hold.prototype.event = function(t, x) {
	this.value = x;
	this.hasValue = true;
	this.sink._notify(this);
};

Hold.prototype.end = function () {};
Hold.prototype.error = Pipe.prototype.error;

function SampleSink(f, sinks, sink) {
	this.f = f;
	this.sinks = sinks;
	this.sink = sink;
	this.active = false;
}

SampleSink.prototype._notify = function() {
	if(!this.active) {
		this.active = this.sinks.every(hasValue);
	}
};

SampleSink.prototype.event = function(t) {
	if(this.active) {
		this.sink.event(t, invoke(this.f, base.map(getValue, this.sinks)));
	}
};

SampleSink.prototype.end = Pipe.prototype.end;
SampleSink.prototype.error = Pipe.prototype.error;

function hasValue(hold) {
	return hold.hasValue;
}

function getValue(hold) {
	return hold.value;
}


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var Sink = __webpack_require__(2);
var core = __webpack_require__(10);
var dispose = __webpack_require__(1);
var Map = __webpack_require__(32);

exports.take = take;
exports.skip = skip;
exports.slice = slice;
exports.takeWhile = takeWhile;
exports.skipWhile = skipWhile;

/**
 * @param {number} n
 * @param {Stream} stream
 * @returns {Stream} new stream containing only up to the first n items from stream
 */
function take(n, stream) {
	return slice(0, n, stream);
}

/**
 * @param {number} n
 * @param {Stream} stream
 * @returns {Stream} new stream with the first n items removed
 */
function skip(n, stream) {
	return slice(n, Infinity, stream);
}

/**
 * Slice a stream by index. Negative start/end indexes are not supported
 * @param {number} start
 * @param {number} end
 * @param {Stream} stream
 * @returns {Stream} stream containing items where start <= index < end
 */
function slice(start, end, stream) {
	return end <= start ? core.empty()
		: new Stream(sliceSource(start, end, stream.source));
}

function sliceSource(start, end, source) {
	return source instanceof Map ? commuteMapSlice(start, end, source)
		: source instanceof Slice ? fuseSlice(start, end, source)
		: new Slice(start, end, source);
}

function commuteMapSlice(start, end, source) {
	return Map.create(source.f, sliceSource(start, end, source.source))
}

function fuseSlice(start, end, source) {
	start += source.min;
	end = Math.min(end + source.min, source.max);
	return new Slice(start, end, source.source);
}

function Slice(min, max, source) {
	this.source = source;
	this.min = min;
	this.max = max;
}

Slice.prototype.run = function(sink, scheduler) {
	return new SliceSink(this.min, this.max - this.min, this.source, sink, scheduler);
};

function SliceSink(skip, take, source, sink, scheduler) {
	this.sink = sink;
	this.skip = skip;
	this.take = take;
	this.disposable = dispose.once(source.run(this, scheduler));
}

SliceSink.prototype.end   = Sink.prototype.end;
SliceSink.prototype.error = Sink.prototype.error;

SliceSink.prototype.event = function(t, x) {
	if(this.skip > 0) {
		this.skip -= 1;
		return;
	}

	if(this.take === 0) {
		return;
	}

	this.take -= 1;
	this.sink.event(t, x);
	if(this.take === 0) {
		this.dispose();
		this.sink.end(t, x);
	}
};

SliceSink.prototype.dispose = function() {
	return this.disposable.dispose();
};

function takeWhile(p, stream) {
	return new Stream(new TakeWhile(p, stream.source));
}

function TakeWhile(p, source) {
	this.p = p;
	this.source = source;
}

TakeWhile.prototype.run = function(sink, scheduler) {
	return new TakeWhileSink(this.p, this.source, sink, scheduler);
};

function TakeWhileSink(p, source, sink, scheduler) {
	this.p = p;
	this.sink = sink;
	this.active = true;
	this.disposable = dispose.once(source.run(this, scheduler));
}

TakeWhileSink.prototype.end   = Sink.prototype.end;
TakeWhileSink.prototype.error = Sink.prototype.error;

TakeWhileSink.prototype.event = function(t, x) {
	if(!this.active) {
		return;
	}

	var p = this.p;
	this.active = p(x);
	if(this.active) {
		this.sink.event(t, x);
	} else {
		this.dispose();
		this.sink.end(t, x);
	}
};

TakeWhileSink.prototype.dispose = function() {
	return this.disposable.dispose();
};

function skipWhile(p, stream) {
	return new Stream(new SkipWhile(p, stream.source));
}

function SkipWhile(p, source) {
	this.p = p;
	this.source = source;
}

SkipWhile.prototype.run = function(sink, scheduler) {
	return this.source.run(new SkipWhileSink(this.p, sink), scheduler);
};

function SkipWhileSink(p, sink) {
	this.p = p;
	this.sink = sink;
	this.skipping = true;
}

SkipWhileSink.prototype.end   = Sink.prototype.end;
SkipWhileSink.prototype.error = Sink.prototype.error;

SkipWhileSink.prototype.event = function(t, x) {
	if(this.skipping) {
		var p = this.p;
		this.skipping = p(x);
		if(this.skipping) {
			return;
		}
	}

	this.sink.event(t, x);
};


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var dispose = __webpack_require__(1);

exports.switch = switchLatest;

/**
 * Given a stream of streams, return a new stream that adopts the behavior
 * of the most recent inner stream.
 * @param {Stream} stream of streams on which to switch
 * @returns {Stream} switching stream
 */
function switchLatest(stream) {
	return new Stream(new Switch(stream.source));
}

function Switch(source) {
	this.source = source;
}

Switch.prototype.run = function(sink, scheduler) {
	var switchSink = new SwitchSink(sink, scheduler);
	return dispose.all([switchSink, this.source.run(switchSink, scheduler)]);
};

function SwitchSink(sink, scheduler) {
	this.sink = sink;
	this.scheduler = scheduler;
	this.current = null;
	this.ended = false;
}

SwitchSink.prototype.event = function(t, stream) {
	this._disposeCurrent(t); // TODO: capture the result of this dispose
	this.current = new Segment(t, Infinity, this, this.sink);
	this.current.disposable = stream.source.run(this.current, this.scheduler);
};

SwitchSink.prototype.end = function(t, x) {
	this.ended = true;
	this._checkEnd(t, x);
};

SwitchSink.prototype.error = function(t, e) {
	this.ended = true;
	this.sink.error(t, e);
};

SwitchSink.prototype.dispose = function() {
	return this._disposeCurrent(this.scheduler.now());
};

SwitchSink.prototype._disposeCurrent = function(t) {
	if(this.current !== null) {
		return this.current._dispose(t);
	}
};

SwitchSink.prototype._disposeInner = function(t, inner) {
	inner._dispose(t); // TODO: capture the result of this dispose
	if(inner === this.current) {
		this.current = null;
	}
};

SwitchSink.prototype._checkEnd = function(t, x) {
	if(this.ended && this.current === null) {
		this.sink.end(t, x);
	}
};

SwitchSink.prototype._endInner = function(t, x, inner) {
	this._disposeInner(t, inner);
	this._checkEnd(t, x);
};

SwitchSink.prototype._errorInner = function(t, e, inner) {
	this._disposeInner(t, inner);
	this.sink.error(t, e);
};

function Segment(min, max, outer, sink) {
	this.min = min;
	this.max = max;
	this.outer = outer;
	this.sink = sink;
	this.disposable = dispose.empty();
}

Segment.prototype.event = function(t, x) {
	if(t < this.max) {
		this.sink.event(Math.max(t, this.min), x);
	}
};

Segment.prototype.end = function(t, x) {
	this.outer._endInner(Math.max(t, this.min), x, this);
};

Segment.prototype.error = function(t, e) {
	this.outer._errorInner(Math.max(t, this.min), e, this);
};

Segment.prototype._dispose = function(t) {
	this.max = t;
	dispose.tryDispose(t, this.disposable, this.sink)
};


/***/ },
/* 160 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

exports.thru = function thru(f, stream) {
	return f(stream);
}


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var Pipe = __webpack_require__(2);
var dispose = __webpack_require__(1);
var join = __webpack_require__(57).join;

exports.during    = during;
exports.takeUntil = takeUntil;
exports.skipUntil = skipUntil;

function takeUntil(signal, stream) {
	return new Stream(new Until(signal.source, stream.source));
}

function skipUntil(signal, stream) {
	return new Stream(new Since(signal.source, stream.source));
}

function during(timeWindow, stream) {
	return takeUntil(join(timeWindow), skipUntil(timeWindow, stream));
}

function Until(maxSignal, source) {
	this.maxSignal = maxSignal;
	this.source = source;
}

Until.prototype.run = function(sink, scheduler) {
	var min = new Bound(-Infinity, sink);
	var max = new UpperBound(this.maxSignal, sink, scheduler);
	var disposable = this.source.run(new TimeWindowSink(min, max, sink), scheduler);

	return dispose.all([min, max, disposable]);
};

function Since(minSignal, source) {
	this.minSignal = minSignal;
	this.source = source;
}

Since.prototype.run = function(sink, scheduler) {
	var min = new LowerBound(this.minSignal, sink, scheduler);
	var max = new Bound(Infinity, sink);
	var disposable = this.source.run(new TimeWindowSink(min, max, sink), scheduler);

	return dispose.all([min, max, disposable]);
};

function Bound(value, sink) {
	this.value = value;
	this.sink = sink;
}

Bound.prototype.error = Pipe.prototype.error;
Bound.prototype.event = noop;
Bound.prototype.end = noop;
Bound.prototype.dispose = noop;

function TimeWindowSink(min, max, sink) {
	this.min = min;
	this.max = max;
	this.sink = sink;
}

TimeWindowSink.prototype.event = function(t, x) {
	if(t >= this.min.value && t < this.max.value) {
		this.sink.event(t, x);
	}
};

TimeWindowSink.prototype.error = Pipe.prototype.error;
TimeWindowSink.prototype.end = Pipe.prototype.end;

function LowerBound(signal, sink, scheduler) {
	this.value = Infinity;
	this.sink = sink;
	this.disposable = signal.run(this, scheduler);
}

LowerBound.prototype.event = function(t /*, x */) {
	if(t < this.value) {
		this.value = t;
	}
};

LowerBound.prototype.end = noop;
LowerBound.prototype.error = Pipe.prototype.error;

LowerBound.prototype.dispose = function() {
	return this.disposable.dispose();
};

function UpperBound(signal, sink, scheduler) {
	this.value = Infinity;
	this.sink = sink;
	this.disposable = signal.run(this, scheduler);
}

UpperBound.prototype.event = function(t, x) {
	if(t < this.value) {
		this.value = t;
		this.sink.end(t, x);
	}
};

UpperBound.prototype.end = noop;
UpperBound.prototype.error = Pipe.prototype.error;

UpperBound.prototype.dispose = function() {
	return this.disposable.dispose();
};

function noop() {}


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var Sink = __webpack_require__(2);

exports.timestamp = timestamp;

function timestamp(stream) {
	return new Stream(new Timestamp(stream.source));
}

function Timestamp(source) {
	this.source = source;
}

Timestamp.prototype.run = function(sink, scheduler) {
	return this.source.run(new TimestampSink(sink), scheduler);
};

function TimestampSink(sink) {
	this.sink = sink;
}

TimestampSink.prototype.end   = Sink.prototype.end;
TimestampSink.prototype.error = Sink.prototype.error;

TimestampSink.prototype.event = function(t, x) {
	this.sink.event(t, { time: t, value: x });
};


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);

exports.transduce = transduce;

/**
 * Transform a stream by passing its events through a transducer.
 * @param  {function} transducer transducer function
 * @param  {Stream} stream stream whose events will be passed through the
 *  transducer
 * @return {Stream} stream of events transformed by the transducer
 */
function transduce(transducer, stream) {
	return new Stream(new Transduce(transducer, stream.source));
}

function Transduce(transducer, source) {
	this.transducer = transducer;
	this.source = source;
}

Transduce.prototype.run = function(sink, scheduler) {
	var xf = this.transducer(new Transformer(sink));
	return this.source.run(new TransduceSink(getTxHandler(xf), sink), scheduler);
};

function TransduceSink(adapter, sink) {
	this.xf = adapter;
	this.sink = sink;
}

TransduceSink.prototype.event = function(t, x) {
	var next = this.xf.step(t, x);

	return this.xf.isReduced(next)
		? this.sink.end(t, this.xf.getResult(next))
		: next;
};

TransduceSink.prototype.end = function(t, x) {
	return this.xf.result(x);
};

TransduceSink.prototype.error = function(t, e) {
	return this.sink.error(t, e);
};

function Transformer(sink) {
	this.time = -Infinity;
	this.sink = sink;
}

Transformer.prototype['@@transducer/init'] = Transformer.prototype.init = function() {};

Transformer.prototype['@@transducer/step'] = Transformer.prototype.step = function(t, x) {
	if(!isNaN(t)) {
		this.time = Math.max(t, this.time);
	}
	return this.sink.event(this.time, x);
};

Transformer.prototype['@@transducer/result'] = Transformer.prototype.result = function(x) {
	return this.sink.end(this.time, x);
};

/**
 * Given an object supporting the new or legacy transducer protocol,
 * create an adapter for it.
 * @param {object} tx transform
 * @returns {TxAdapter|LegacyTxAdapter}
 */
function getTxHandler(tx) {
	return typeof tx['@@transducer/step'] === 'function'
		? new TxAdapter(tx)
		: new LegacyTxAdapter(tx);
}

/**
 * Adapter for new official transducer protocol
 * @param {object} tx transform
 * @constructor
 */
function TxAdapter(tx) {
	this.tx = tx;
}

TxAdapter.prototype.step = function(t, x) {
	return this.tx['@@transducer/step'](t, x);
};
TxAdapter.prototype.result = function(x) {
	return this.tx['@@transducer/result'](x);
};
TxAdapter.prototype.isReduced = function(x) {
	return x != null && x['@@transducer/reduced'];
};
TxAdapter.prototype.getResult = function(x) {
	return x['@@transducer/value'];
};

/**
 * Adapter for older transducer protocol
 * @param {object} tx transform
 * @constructor
 */
function LegacyTxAdapter(tx) {
	this.tx = tx;
}

LegacyTxAdapter.prototype.step = function(t, x) {
	return this.tx.step(t, x);
};
LegacyTxAdapter.prototype.result = function(x) {
	return this.tx.result(x);
};
LegacyTxAdapter.prototype.isReduced = function(x) {
	return x != null && x.__transducers_reduced__;
};
LegacyTxAdapter.prototype.getResult = function(x) {
	return x.value;
};


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var transform = __webpack_require__(17);
var core = __webpack_require__(10);
var Sink = __webpack_require__(2);
var IndexSink = __webpack_require__(34);
var dispose = __webpack_require__(1);
var base = __webpack_require__(3);
var invoke = __webpack_require__(33);
var Queue = __webpack_require__(144);

var map = base.map;
var tail = base.tail;

exports.zip = zip;
exports.zipArray = zipArray;

/**
 * Combine streams pairwise (or tuple-wise) by index by applying f to values
 * at corresponding indices.  The returned stream ends when any of the input
 * streams ends.
 * @param {function} f function to combine values
 * @returns {Stream} new stream with items at corresponding indices combined
 *  using f
 */
function zip(f /*,...streams */) {
	return zipArray(f, tail(arguments));
}

/**
 * Combine streams pairwise (or tuple-wise) by index by applying f to values
 * at corresponding indices.  The returned stream ends when any of the input
 * streams ends.
 * @param {function} f function to combine values
 * @param {[Stream]} streams streams to zip using f
 * @returns {Stream} new stream with items at corresponding indices combined
 *  using f
 */
function zipArray(f, streams) {
	return streams.length === 0 ? core.empty()
		 : streams.length === 1 ? transform.map(f, streams[0])
		 : new Stream(new Zip(f, map(getSource, streams)));
}

function getSource(stream) {
	return stream.source;
}

function Zip(f, sources) {
	this.f = f;
	this.sources = sources;
}

Zip.prototype.run = function(sink, scheduler) {
	var l = this.sources.length;
	var disposables = new Array(l);
	var sinks = new Array(l);
	var buffers = new Array(l);

	var zipSink = new ZipSink(this.f, buffers, sinks, sink);

	for(var indexSink, i=0; i<l; ++i) {
		buffers[i] = new Queue();
		indexSink = sinks[i] = new IndexSink(i, zipSink);
		disposables[i] = this.sources[i].run(indexSink, scheduler);
	}

	return dispose.all(disposables);
};

function ZipSink(f, buffers, sinks, sink) {
	this.f = f;
	this.sinks = sinks;
	this.sink = sink;
	this.buffers = buffers;
}

ZipSink.prototype.event = function(t, indexedValue) {
	var buffers = this.buffers;
	var buffer = buffers[indexedValue.index];

	buffer.push(indexedValue.value);

	if(buffer.length() === 1) {
		if(!ready(this.buffers)) {
			return;
		}

		emitZipped(this.f, t, buffers, this.sink);

		if (ended(this.buffers, this.sinks)) {
			this.sink.end(t, void 0);
		}
	}
};

ZipSink.prototype.end = function(t, indexedValue) {
	var buffer = this.buffers[indexedValue.index];
	if(buffer.isEmpty()) {
		this.sink.end(t, indexedValue.value);
	}
};

ZipSink.prototype.error = Sink.prototype.error;

function emitZipped (f, t, buffers, sink) {
	sink.event(t, invoke(f, map(head, buffers)));
}

function head(buffer) {
	return buffer.shift();
}

function ended(buffers, sinks) {
	for(var i=0, l=buffers.length; i<l; ++i) {
		if(buffers[i].isEmpty() && !sinks[i].active) {
			return true;
		}
	}
	return false;
}

function ready(buffers) {
	for(var i=0, l=buffers.length; i<l; ++i) {
		if(buffers[i].isEmpty()) {
			return false;
		}
	}
	return true;
}


/***/ },
/* 165 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = Disposable;

/**
 * Create a new Disposable which will dispose its underlying resource.
 * @param {function} dispose function
 * @param {*?} data any data to be passed to disposer function
 * @constructor
 */
function Disposable(dispose, data) {
	this._dispose = dispose;
	this._data = data;
}

Disposable.prototype.dispose = function() {
	return this._dispose(this._data);
};


/***/ },
/* 166 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = SettableDisposable;

function SettableDisposable() {
	this.disposable = void 0;
	this.disposed = false;
	this._resolve = void 0;

	var self = this;
	this.result = new Promise(function(resolve) {
		self._resolve = resolve;
	});
}

SettableDisposable.prototype.setDisposable = function(disposable) {
	if(this.disposable !== void 0) {
		throw new Error('setDisposable called more than once');
	}

	this.disposable = disposable;

	if(this.disposed) {
		this._resolve(disposable.dispose());
	}
};

SettableDisposable.prototype.dispose = function() {
	if(this.disposed) {
		return this.result;
	}

	this.disposed = true;

	if(this.disposable !== void 0) {
		this.result = this.disposable.dispose();
	}

	return this.result;
};


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Pipe = __webpack_require__(2);

module.exports = FilterMap;

function FilterMap(p, f, source) {
	this.p = p;
	this.f = f;
	this.source = source;
}

FilterMap.prototype.run = function(sink, scheduler) {
	return this.source.run(new FilterMapSink(this.p, this.f, sink), scheduler);
};

function FilterMapSink(p, f, sink) {
	this.p = p;
	this.f = f;
	this.sink = sink;
}

FilterMapSink.prototype.event = function(t, x) {
	var f = this.f;
	var p = this.p;
	p(x) && this.sink.event(t, f(x));
};

FilterMapSink.prototype.end = Pipe.prototype.end;
FilterMapSink.prototype.error = Pipe.prototype.error;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var dispose = __webpack_require__(1);

exports.fromObservable = fromObservable;
exports.ObservableSource = ObservableSource;
exports.SubscriberSink = SubscriberSink;

function fromObservable(observable) {
	return new Stream(new ObservableSource(observable));
}

function ObservableSource(observable) {
	this.observable = observable;
}

ObservableSource.prototype.run = function(sink, scheduler) {
	var sub = this.observable.subscribe(new SubscriberSink(sink, scheduler));
	if(typeof sub === 'function') {
		return dispose.create(sub);
	} else if(sub && typeof sub.unsubscribe === 'function') {
		return dispose.create(unsubscribe, sub);
	}

	throw new TypeError('Observable returned invalid subscription ' + String(sub));
}

function SubscriberSink(sink, scheduler) {
	this.sink = sink;
	this.scheduler = scheduler;
}

SubscriberSink.prototype.next = function(x) {
	this.sink.event(this.scheduler.now(), x);
}

SubscriberSink.prototype.complete = function(x) {
	this.sink.end(this.scheduler.now(), x);
}

SubscriberSink.prototype.error = function(e) {
	this.sink.error(this.scheduler.now(), e);
}

function unsubscribe(subscription) {
	return subscription.unsubscribe();
}


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var symbolObservable = __webpack_require__(64).default;

module.exports = getObservable;

function getObservable(o) {
	var obs = null;
	if(o) {
		// Access foreign method only once
		var method = o[symbolObservable];
		if(typeof method === 'function') {
			obs = method.call(o);
			if(!(obs && typeof obs.subscribe === 'function')) {
				throw new TypeError('invalid observable ' + obs);
			}
		}
	}

	return obs;
}


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var defaultScheduler = __webpack_require__(18);
var dispose = __webpack_require__(1);
var fatalError = __webpack_require__(31);

exports.subscribe = subscribe;
exports.SubscribeObserver = SubscribeObserver;
exports.Subscription = Subscription;

function subscribe(subscriber, stream) {
	if(subscriber == null || typeof subscriber !== 'object') {
		throw new TypeError('subscriber must be an object');
	}

	var disposable = dispose.settable();
	var observer = new SubscribeObserver(fatalError, subscriber, disposable);

	disposable.setDisposable(stream.source.run(observer, defaultScheduler));

	return new Subscription(disposable);
}

function SubscribeObserver(fatalError, subscriber, disposable) {
	this.fatalError = fatalError;
	this.subscriber = subscriber;
	this.disposable = disposable;
}

SubscribeObserver.prototype.event = function(t, x) {
	if(typeof this.subscriber.next === 'function') {
		this.subscriber.next(x);
	}
};

SubscribeObserver.prototype.end = function(t, x) {
	var s = this.subscriber;
	doDispose(this.fatalError, s, s.complete, s.error, this.disposable, x);
};

SubscribeObserver.prototype.error = function(t, e) {
	var s = this.subscriber;
	doDispose(this.fatalError, s, s.error, s.error, this.disposable, e);
};

function Subscription(disposable) {
	this.disposable = disposable;
}

Subscription.prototype.unsubscribe = function() {
	this.disposable.dispose();
}

function doDispose(fatal, subscriber, complete, error, disposable, x) {
	Promise.resolve(disposable.dispose()).then(function () {
		if(typeof complete === 'function') {
			complete.call(subscriber, x);
		}
	}).catch(function(e) {
		if(typeof error === 'function') {
			error.call(subscriber, e);
		}
	}).catch(fatal);
}


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var defer = __webpack_require__(36).defer;

/*global setTimeout, clearTimeout*/

module.exports = ClockTimer;

function ClockTimer() {}

ClockTimer.prototype.now = Date.now;

ClockTimer.prototype.setTimer = function(f, dt) {
	return dt <= 0 ? runAsap(f) : setTimeout(f, dt);
};

ClockTimer.prototype.clearTimer = function(t) {
	return t instanceof Asap ? t.cancel() : clearTimeout(t);
};

function Asap(f) {
	this.f = f;
	this.active = true;
}

Asap.prototype.run = function() {
	return this.active && this.f();
};

Asap.prototype.error = function(e) {
	throw e;
};

Asap.prototype.cancel = function() {
	this.active = false;
};

function runAsap(f) {
	var task = new Asap(f);
	defer(task);
	return task;
}


/***/ },
/* 172 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = ScheduledTask;

function ScheduledTask(delay, period, task, scheduler) {
	this.time = delay;
	this.period = period;
	this.task = task;
	this.scheduler = scheduler;
	this.active = true;
}

ScheduledTask.prototype.run = function() {
	return this.task.run(this.time);
};

ScheduledTask.prototype.error = function(e) {
	return this.task.error(this.time, e);
};

ScheduledTask.prototype.dispose = function() {
	this.scheduler.cancel(this);
	return this.task.dispose();
};


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var base = __webpack_require__(3);
var ScheduledTask = __webpack_require__(172);
var runTask = __webpack_require__(36).runTask;
var Timeline = __webpack_require__(61);

module.exports = Scheduler;

function Scheduler(timer, timeline) {
	this.timer = timer;
	this.timeline = timeline;

	this._timer = null;
	this._nextArrival = Infinity;

	var self = this;
	this._runReadyTasksBound = function() {
		self._runReadyTasks(self.now());
	};
}

Scheduler.prototype.now = function() {
	return this.timer.now();
};

Scheduler.prototype.asap = function(task) {
	return this.schedule(0, -1, task);
};

Scheduler.prototype.delay = function(delay, task) {
	return this.schedule(delay, -1, task);
};

Scheduler.prototype.periodic = function(period, task) {
	return this.schedule(0, period, task);
};

Scheduler.prototype.schedule = function(delay, period, task) {
	var now = this.now();
	var st = new ScheduledTask(now + Math.max(0, delay), period, task, this);

	this.timeline.add(st);
	this._scheduleNextRun(now);
	return st;
};

Scheduler.prototype.cancel = function(task) {
	task.active = false;
	if(this.timeline.remove(task)) {
		this._reschedule();
	}
};

Scheduler.prototype.cancelAll = function(f) {
	this.timeline.removeAll(f);
	this._reschedule();
}

Scheduler.prototype._reschedule = function() {
	if(this.timeline.isEmpty()) {
		this._unschedule();
	} else {
		this._scheduleNextRun(this.now());
	}
};

Scheduler.prototype._unschedule = function() {
	this.timer.clearTimer(this._timer);
	this._timer = null;
};

Scheduler.prototype._scheduleNextRun = function(now) {
	if(this.timeline.isEmpty()) {
		return;
	}

	var nextArrival = this.timeline.nextArrival();

	if(this._timer === null) {
		this._scheduleNextArrival(nextArrival, now);
	} else if(nextArrival < this._nextArrival) {
		this._unschedule();
		this._scheduleNextArrival(nextArrival, now);
	}
};

Scheduler.prototype._scheduleNextArrival = function(nextArrival, now) {
	this._nextArrival = nextArrival;
	var delay = Math.max(0, nextArrival - now);
	this._timer = this.timer.setTimer(this._runReadyTasksBound, delay);
};

Scheduler.prototype._runReadyTasks = function(now) {
	this._timer = null;
	this.timeline.runTasks(now, runTask)
	this._scheduleNextRun(this.now());
};


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var defer = __webpack_require__(36).defer;

module.exports = DeferredSink;

function DeferredSink(sink) {
	this.sink = sink;
	this.events = [];
	this.active = true;
}

DeferredSink.prototype.event = function(t, x) {
	if(!this.active) {
		return;
	}

	if(this.events.length === 0) {
		defer(new PropagateAllTask(this.sink, t, this.events));
	}

	this.events.push({ time: t, value: x });
};

DeferredSink.prototype.end = function(t, x) {
	if(!this.active) {
		return;
	}

	this._end(new EndTask(t, x, this.sink));
};

DeferredSink.prototype.error = function(t, e) {
	this._end(new ErrorTask(t, e, this.sink));
};

DeferredSink.prototype._end = function(task) {
	this.active = false;
	defer(task);
}

function PropagateAllTask(sink, time, events) {
	this.sink = sink;
	this.events = events;
	this.time = time;
}

PropagateAllTask.prototype.run = function() {
	var events = this.events;
	var sink = this.sink;
	var event;

	for(var i = 0, l = events.length; i<l; ++i) {
		event = events[i];
		this.time = event.time;
		sink.event(event.time, event.value);
	}

	events.length = 0;
};

PropagateAllTask.prototype.error = function(e) {
	this.sink.error(this.time, e);
};

function EndTask(t, x, sink) {
	this.time = t;
	this.value = x;
	this.sink = sink;
}

EndTask.prototype.run = function() {
	this.sink.end(this.time, this.value);
};

EndTask.prototype.error = function(e) {
	this.sink.error(this.time, e);
};

function ErrorTask(t, e, sink) {
	this.time = t;
	this.value = e;
	this.sink = sink;
}

ErrorTask.prototype.run = function() {
	this.sink.error(this.time, this.value);
};

ErrorTask.prototype.error = function(e) {
	throw e;
};


/***/ },
/* 175 */
/***/ function(module, exports) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = SafeSink;

function SafeSink(sink) {
	this.sink = sink;
	this.active = true;
}

SafeSink.prototype.event = function(t, x) {
	if(!this.active) {
		return;
	}
	this.sink.event(t, x);
};

SafeSink.prototype.end = function(t, x) {
	if(!this.active) {
		return;
	}
	this.disable();
	this.sink.end(t, x);
};

SafeSink.prototype.error = function(t, e) {
	this.disable();
	this.sink.error(t, e);
};

SafeSink.prototype.disable = function() {
	this.active = false;
	return this.sink;
}


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var DeferredSink = __webpack_require__(174);
var dispose = __webpack_require__(1);
var tryEvent = __webpack_require__(35);

module.exports = EventEmitterSource;

function EventEmitterSource(event, source) {
	this.event = event;
	this.source = source;
}

EventEmitterSource.prototype.run = function(sink, scheduler) {
	// NOTE: Because EventEmitter allows events in the same call stack as
	// a listener is added, use a DeferredSink to buffer events
	// until the stack clears, then propagate.  This maintains most.js's
	// invariant that no event will be delivered in the same call stack
	// as an observer begins observing.
	var dsink = new DeferredSink(sink);

	function addEventVariadic(a) {
		var l = arguments.length;
		if(l > 1) {
			var arr = new Array(l);
			for(var i=0; i<l; ++i) {
				arr[i] = arguments[i];
			}
			tryEvent.tryEvent(scheduler.now(), arr, dsink);
		} else {
			tryEvent.tryEvent(scheduler.now(), a, dsink);
		}
	}

	this.source.addListener(this.event, addEventVariadic);

	return dispose.create(disposeEventEmitter, { target: this, addEvent: addEventVariadic });
};

function disposeEventEmitter(info) {
	var target = info.target;
	target.source.removeListener(target.event, info.addEvent);
}


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var dispose = __webpack_require__(1);
var tryEvent = __webpack_require__(35);

module.exports = EventTargetSource;

function EventTargetSource(event, source, capture) {
	this.event = event;
	this.source = source;
	this.capture = capture;
}

EventTargetSource.prototype.run = function(sink, scheduler) {
	function addEvent(e) {
		tryEvent.tryEvent(scheduler.now(), e, sink);
	}

	this.source.addEventListener(this.event, addEvent, this.capture);

	return dispose.create(disposeEventTarget,
		{ target: this, addEvent: addEvent });
};

function disposeEventTarget(info) {
	var target = info.target;
	target.source.removeEventListener(target.event, info.addEvent, target.capture);
}


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var fromArray = __webpack_require__(179).fromArray;
var isIterable = __webpack_require__(59).isIterable;
var fromIterable = __webpack_require__(181).fromIterable;
var getObservable = __webpack_require__(169);
var fromObservable = __webpack_require__(168).fromObservable;
var isArrayLike = __webpack_require__(3).isArrayLike;

exports.from = from;

function from(a) { // eslint-disable-line complexity
	if(a instanceof Stream) {
		return a;
	}

	var observable = getObservable(a);
	if(observable != null) {
		return fromObservable(observable);
	}

	if(Array.isArray(a) || isArrayLike(a)) {
		return fromArray(a);
	}

	if(isIterable(a)) {
		return fromIterable(a);
	}

	throw new TypeError('from(x) must be observable, iterable, or array-like: ' + a);
}


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var PropagateTask = __webpack_require__(7);

exports.fromArray = fromArray;

function fromArray (a) {
	return new Stream(new ArraySource(a));
}

function ArraySource(a) {
	this.array = a;
}

ArraySource.prototype.run = function(sink, scheduler) {
	return scheduler.asap(new PropagateTask(runProducer, this.array, sink));
};

function runProducer(t, array, sink) {
	for(var i=0, l=array.length; i<l && this.active; ++i) {
		sink.event(t, array[i]);
	}

	this.active && end(t);

	function end(t) {
		sink.end(t);
	}
}


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var EventTargetSource = __webpack_require__(177);
var EventEmitterSource = __webpack_require__(176);

exports.fromEvent = fromEvent;

/**
 * Create a stream from an EventTarget, such as a DOM Node, or EventEmitter.
 * @param {String} event event type name, e.g. 'click'
 * @param {EventTarget|EventEmitter} source EventTarget or EventEmitter
 * @param {*?} capture for DOM events, whether to use
 *  capturing--passed as 3rd parameter to addEventListener.
 * @returns {Stream} stream containing all events of the specified type
 * from the source.
 */
function fromEvent(event, source, capture) {
	var s;

	if(typeof source.addEventListener === 'function' && typeof source.removeEventListener === 'function') {
		if(arguments.length < 3) {
			capture = false
		}

		s = new EventTargetSource(event, source, capture);
	} else if(typeof source.addListener === 'function' && typeof source.removeListener === 'function') {
		s = new EventEmitterSource(event, source);
	} else {
		throw new Error('source must support addEventListener/removeEventListener or addListener/removeListener');
	}

	return new Stream(s);
}


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var getIterator = __webpack_require__(59).getIterator;
var PropagateTask = __webpack_require__(7);

exports.fromIterable = fromIterable;

function fromIterable(iterable) {
	return new Stream(new IterableSource(iterable));
}

function IterableSource(iterable) {
	this.iterable = iterable;
}

IterableSource.prototype.run = function(sink, scheduler) {
	return new IteratorProducer(getIterator(this.iterable), sink, scheduler);
};

function IteratorProducer(iterator, sink, scheduler) {
	this.scheduler = scheduler;
	this.iterator = iterator;
	this.task = new PropagateTask(runProducer, this, sink);
	scheduler.asap(this.task);
}

IteratorProducer.prototype.dispose = function() {
	return this.task.dispose();
};

function runProducer(t, producer, sink) {
	var x = producer.iterator.next();
	if(x.done) {
		sink.end(t, x.value);
	} else {
		sink.event(t, x.value);
	}

	producer.scheduler.asap(producer.task);
}


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var base = __webpack_require__(3);

exports.generate = generate;

/**
 * Compute a stream using an *async* generator, which yields promises
 * to control event times.
 * @param f
 * @returns {Stream}
 */
function generate(f /*, ...args */) {
	return new Stream(new GenerateSource(f, base.tail(arguments)));
}

function GenerateSource(f, args) {
	this.f = f;
	this.args = args;
}

GenerateSource.prototype.run = function(sink, scheduler) {
	return new Generate(this.f.apply(void 0, this.args), sink, scheduler);
};

function Generate(iterator, sink, scheduler) {
	this.iterator = iterator;
	this.sink = sink;
	this.scheduler = scheduler;
	this.active = true;

	var self = this;
	function err(e) {
		self.sink.error(self.scheduler.now(), e);
	}

	Promise.resolve(this).then(next).catch(err);
}

function next(generate, x) {
	return generate.active ? handle(generate, generate.iterator.next(x)) : x;
}

function handle(generate, result) {
	if (result.done) {
		return generate.sink.end(generate.scheduler.now(), result.value);
	}

	return Promise.resolve(result.value).then(function (x) {
		return emit(generate, x);
	}, function(e) {
		return error(generate, e);
	});
}

function emit(generate, x) {
	generate.sink.event(generate.scheduler.now(), x);
	return next(generate, x);
}

function error(generate, e) {
	return handle(generate, generate.iterator.throw(e));
}

Generate.prototype.dispose = function() {
	this.active = false;
};


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);

exports.iterate = iterate;

/**
 * Compute a stream by iteratively calling f to produce values
 * Event times may be controlled by returning a Promise from f
 * @param {function(x:*):*|Promise<*>} f
 * @param {*} x initial value
 * @returns {Stream}
 */
function iterate(f, x) {
	return new Stream(new IterateSource(f, x));
}

function IterateSource(f, x) {
	this.f = f;
	this.value = x;
}

IterateSource.prototype.run = function(sink, scheduler) {
	return new Iterate(this.f, this.value, sink, scheduler);
};

function Iterate(f, initial, sink, scheduler) {
	this.f = f;
	this.sink = sink;
	this.scheduler = scheduler;
	this.active = true;

	var x = initial;

	var self = this;
	function err(e) {
		self.sink.error(self.scheduler.now(), e);
	}

	function start(iterate) {
		return stepIterate(iterate, x);
	}

	Promise.resolve(this).then(start).catch(err);
}

Iterate.prototype.dispose = function() {
	this.active = false;
};

function stepIterate(iterate, x) {
	iterate.sink.event(iterate.scheduler.now(), x);

	if(!iterate.active) {
		return x;
	}

	var f = iterate.f;
	return Promise.resolve(f(x)).then(function(y) {
		return continueIterate(iterate, y);
	});
}

function continueIterate(iterate, x) {
	return !iterate.active ? iterate.value : stepIterate(iterate, x);
}


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);
var dispose = __webpack_require__(1);
var PropagateTask = __webpack_require__(7);

exports.periodic = periodic;

/**
 * Create a stream that emits the current time periodically
 * @param {Number} period periodicity of events in millis
 * @param {*} value value to emit each period
 * @returns {Stream} new stream that emits the current time every period
 */
function periodic(period, value) {
	return new Stream(new Periodic(period, value));
}

function Periodic(period, value) {
	this.period = period;
	this.value = value;
}

Periodic.prototype.run = function(sink, scheduler) {
	return scheduler.periodic(this.period, PropagateTask.event(this.value, sink));
};


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

/** @license MIT License (c) copyright 2010-2016 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = __webpack_require__(0);

exports.unfold = unfold;

/**
 * Compute a stream by unfolding tuples of future values from a seed value
 * Event times may be controlled by returning a Promise from f
 * @param {function(seed:*):{value:*, seed:*, done:boolean}|Promise<{value:*, seed:*, done:boolean}>} f unfolding function accepts
 *  a seed and returns a new tuple with a value, new seed, and boolean done flag.
 *  If tuple.done is true, the stream will end.
 * @param {*} seed seed value
 * @returns {Stream} stream containing all value of all tuples produced by the
 *  unfolding function.
 */
function unfold(f, seed) {
	return new Stream(new UnfoldSource(f, seed));
}

function UnfoldSource(f, seed) {
	this.f = f;
	this.value = seed;
}

UnfoldSource.prototype.run = function(sink, scheduler) {
	return new Unfold(this.f, this.value, sink, scheduler);
};

function Unfold(f, x, sink, scheduler) {
	this.f = f;
	this.sink = sink;
	this.scheduler = scheduler;
	this.active = true;

	var self = this;
	function err(e) {
		self.sink.error(self.scheduler.now(), e);
	}

	function start(unfold) {
		return stepUnfold(unfold, x);
	}

	Promise.resolve(this).then(start).catch(err);
}

Unfold.prototype.dispose = function() {
	this.active = false;
};

function stepUnfold(unfold, x) {
	var f = unfold.f;
	return Promise.resolve(f(x)).then(function(tuple) {
		return continueUnfold(unfold, tuple);
	});
}

function continueUnfold(unfold, tuple) {
	if(tuple.done) {
		unfold.sink.end(unfold.scheduler.now(), tuple.value);
		return tuple.value;
	}

	unfold.sink.event(unfold.scheduler.now(), tuple.value);

	if(!unfold.active) {
		return tuple.value;
	}
	return stepUnfold(unfold, tuple.seed);
}


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = classNameFromVNode;

var _selectorParser2 = __webpack_require__(62);

var _selectorParser3 = _interopRequireDefault(_selectorParser2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function classNameFromVNode(vNode) {
  var _selectorParser = (0, _selectorParser3.default)(vNode.sel);

  var cn = _selectorParser.className;


  if (!vNode.data) {
    return cn;
  }

  var _vNode$data = vNode.data;
  var dataClass = _vNode$data.class;
  var props = _vNode$data.props;


  if (dataClass) {
    var c = Object.keys(vNode.data.class).filter(function (cl) {
      return vNode.data.class[cl];
    });
    cn += ' ' + c.join(' ');
  }

  if (props && props.className) {
    cn += ' ' + props.className;
  }

  return cn.trim();
}

/***/ },
/* 187 */
/***/ function(module, exports) {


// All SVG children elements, not in this list, should self-close

module.exports = {
  // http://www.w3.org/TR/SVG/intro.html#TermContainerElement
  'a': true,
  'defs': true,
  'glyph': true,
  'g': true,
  'marker': true,
  'mask': true,
  'missing-glyph': true,
  'pattern': true,
  'svg': true,
  'switch': true,
  'symbol': true,

  // http://www.w3.org/TR/SVG/intro.html#TermDescriptiveElement
  'desc': true,
  'metadata': true,
  'title': true
};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {


var init = __webpack_require__(189);

module.exports = init([__webpack_require__(190), __webpack_require__(191)]);

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {


var parseSelector = __webpack_require__(63);
var VOID_ELEMENTS = __webpack_require__(192);
var CONTAINER_ELEMENTS = __webpack_require__(187);

module.exports = function init(modules) {
  function parse(data) {
    return modules.reduce(function (arr, fn) {
      arr.push(fn(data));
      return arr;
    }, []).filter(function (result) {
      return result !== '';
    });
  }

  return function renderToString(vnode) {
    if (!vnode.sel && vnode.text) {
      return vnode.text;
    }

    vnode.data = vnode.data || {};

    // Support thunks
    if (typeof vnode.sel === 'string' && vnode.sel.slice(0, 5) === 'thunk') {
      vnode = vnode.data.fn.apply(null, vnode.data.args);
    }

    var tagName = parseSelector(vnode.sel).tagName;
    var attributes = parse(vnode);
    var svg = vnode.data.ns === 'http://www.w3.org/2000/svg';
    var tag = [];

    // Open tag
    tag.push('<' + tagName);
    if (attributes.length) {
      tag.push(' ' + attributes.join(' '));
    }
    if (svg && CONTAINER_ELEMENTS[tagName] !== true) {
      tag.push(' /');
    }
    tag.push('>');

    // Close tag, if needed
    if (VOID_ELEMENTS[tagName] !== true && !svg || svg && CONTAINER_ELEMENTS[tagName] === true) {
      if (vnode.data.props && vnode.data.props.innerHTML) {
        tag.push(vnode.data.props.innerHTML);
      } else if (vnode.text) {
        tag.push(vnode.text);
      } else if (vnode.children) {
        vnode.children.forEach(function (child) {
          tag.push(renderToString(child));
        });
      }
      tag.push('</' + tagName + '>');
    }

    return tag.join('');
  };
};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {


var forOwn = __webpack_require__(50);
var escape = __webpack_require__(49);
var union = __webpack_require__(138);

var parseSelector = __webpack_require__(63);

// data.attrs, data.props, data.class

module.exports = function attributes(vnode) {
  var selector = parseSelector(vnode.sel);
  var parsedClasses = selector.className.split(' ');

  var attributes = [];
  var classes = [];
  var values = {};

  if (selector.id) {
    values.id = selector.id;
  }

  setAttributes(vnode.data.props, values);
  setAttributes(vnode.data.attrs, values); // `attrs` override `props`, not sure if this is good so

  if (vnode.data.class) {
    // Omit `className` attribute if `class` is set on vnode
    values.class = undefined;
  }
  forOwn(vnode.data.class, function (value, key) {
    if (value === true) {
      classes.push(key);
    }
  });
  classes = union(classes, values.class, parsedClasses).filter(function (x) {
    return x !== '';
  });

  if (classes.length) {
    values.class = classes.join(' ');
  }

  forOwn(values, function (value, key) {
    attributes.push(value === true ? key : key + '="' + escape(value) + '"');
  });

  return attributes.length ? attributes.join(' ') : '';
};

function setAttributes(values, target) {
  forOwn(values, function (value, key) {
    if (key === 'htmlFor') {
      target['for'] = value;
      return;
    }
    if (key === 'className') {
      target['class'] = value.split(' ');
      return;
    }
    if (key === 'innerHTML') {
      return;
    }
    target[key] = value;
  });
}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var forOwn = __webpack_require__(50);
var escape = __webpack_require__(49);
var kebabCase = __webpack_require__(135);

// data.style

module.exports = function style(vnode) {
  var styles = [];
  var style = vnode.data.style || {};

  // merge in `delayed` properties
  if (style.delayed) {
    _extends(style, style.delayed);
  }

  forOwn(style, function (value, key) {
    // omit hook objects
    if (typeof value === 'string') {
      styles.push(kebabCase(key) + ': ' + escape(value));
    }
  });

  return styles.length ? 'style="' + styles.join('; ') + '"' : '';
};

/***/ },
/* 192 */
/***/ function(module, exports) {


// http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements

module.exports = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

var VNode = __webpack_require__(37);
var is = __webpack_require__(19);

function addNS(data, children) {
  data.ns = 'http://www.w3.org/2000/svg';
  if (children !== undefined) {
    for (var i = 0; i < children.length; ++i) {
      addNS(children[i].data, children[i].children);
    }
  }
}

module.exports = function h(sel, b, c) {
  var data = {}, children, text, i;
  if (c !== undefined) {
    data = b;
    if (is.array(c)) { children = c; }
    else if (is.primitive(c)) { text = c; }
  } else if (b !== undefined) {
    if (is.array(b)) { children = b; }
    else if (is.primitive(b)) { text = b; }
    else { data = b; }
  }
  if (is.array(children)) {
    for (i = 0; i < children.length; ++i) {
      if (is.primitive(children[i])) children[i] = VNode(undefined, undefined, undefined, children[i]);
    }
  }
  if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g') {
    addNS(data, children);
  }
  return VNode(sel, data, children, text, undefined);
};


/***/ },
/* 194 */
/***/ function(module, exports) {

function createElement(tagName){
  return document.createElement(tagName);
}

function createElementNS(namespaceURI, qualifiedName){
  return document.createElementNS(namespaceURI, qualifiedName);
}

function createTextNode(text){
  return document.createTextNode(text);
}


function insertBefore(parentNode, newNode, referenceNode){
  parentNode.insertBefore(newNode, referenceNode);
}


function removeChild(node, child){
  node.removeChild(child);
}

function appendChild(node, child){
  node.appendChild(child);
}

function parentNode(node){
  return node.parentElement;
}

function nextSibling(node){
  return node.nextSibling;
}

function tagName(node){
  return node.tagName;
}

function setTextContent(node, text){
  node.textContent = text;
}

module.exports = {
  createElement: createElement,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  appendChild: appendChild,
  removeChild: removeChild,
  insertBefore: insertBefore,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent
};


/***/ },
/* 195 */
/***/ function(module, exports) {

var booleanAttrs = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare", 
                "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "draggable", 
                "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple", 
                "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly", 
                "required", "reversed", "scoped", "seamless", "selected", "sortable", "spellcheck", "translate", 
                "truespeed", "typemustmatch", "visible"];
    
var booleanAttrsDict = {};
for(var i=0, len = booleanAttrs.length; i < len; i++) {
  booleanAttrsDict[booleanAttrs[i]] = true;
}
    
function updateAttrs(oldVnode, vnode) {
  var key, cur, old, elm = vnode.elm,
      oldAttrs = oldVnode.data.attrs || {}, attrs = vnode.data.attrs || {};
  
  // update modified attributes, add new attributes
  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      // TODO: add support to namespaced attributes (setAttributeNS)
      if(!cur && booleanAttrsDict[key])
        elm.removeAttribute(key);
      else
        elm.setAttribute(key, cur);
    }
  }
  //remove removed attributes
  // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
  // the other option is to remove all attributes with value == undefined
  for (key in oldAttrs) {
    if (!(key in attrs)) {
      elm.removeAttribute(key);
    }
  }
}

module.exports = {create: updateAttrs, update: updateAttrs};


/***/ },
/* 196 */
/***/ function(module, exports) {

function updateClass(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldClass = oldVnode.data.class || {},
      klass = vnode.data.class || {};
  for (name in oldClass) {
    if (!klass[name]) {
      elm.classList.remove(name);
    }
  }
  for (name in klass) {
    cur = klass[name];
    if (cur !== oldClass[name]) {
      elm.classList[cur ? 'add' : 'remove'](name);
    }
  }
}

module.exports = {create: updateClass, update: updateClass};


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

var is = __webpack_require__(19);

function arrInvoker(arr) {
  return function() {
    if (!arr.length) return;
    // Special case when length is two, for performance
    arr.length === 2 ? arr[0](arr[1]) : arr[0].apply(undefined, arr.slice(1));
  };
}

function fnInvoker(o) {
  return function(ev) { 
    if (o.fn === null) return;
    o.fn(ev); 
  };
}

function updateEventListeners(oldVnode, vnode) {
  var name, cur, old, elm = vnode.elm,
      oldOn = oldVnode.data.on || {}, on = vnode.data.on;
  if (!on) return;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    if (old === undefined) {
      if (is.array(cur)) {
        elm.addEventListener(name, arrInvoker(cur));
      } else {
        cur = {fn: cur};
        on[name] = cur;
        elm.addEventListener(name, fnInvoker(cur));
      }
    } else if (is.array(old)) {
      // Deliberately modify old array since it's captured in closure created with `arrInvoker`
      old.length = cur.length;
      for (var i = 0; i < old.length; ++i) old[i] = cur[i];
      on[name]  = old;
    } else {
      old.fn = cur;
      on[name] = old;
    }
  }
  if (oldOn) {
    for (name in oldOn) {
      if (on[name] === undefined) {
        var old = oldOn[name];
        if (is.array(old)) {
          old.length = 0;
        }
        else {
          old.fn = null;
        }
      }
    }
  }
}

module.exports = {create: updateEventListeners, update: updateEventListeners};


/***/ },
/* 198 */
/***/ function(module, exports) {

var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
var nextFrame = function(fn) { raf(function() { raf(fn); }); };

function setNextFrame(obj, prop, val) {
  nextFrame(function() { obj[prop] = val; });
}

function getTextNodeRect(textNode) {
  var rect;
  if (document.createRange) {
    var range = document.createRange();
    range.selectNodeContents(textNode);
    if (range.getBoundingClientRect) {
        rect = range.getBoundingClientRect();
    }
  }
  return rect;
}

function calcTransformOrigin(isTextNode, textRect, boundingRect) {
  if (isTextNode) {
    if (textRect) {
      //calculate pixels to center of text from left edge of bounding box
      var relativeCenterX = textRect.left + textRect.width/2 - boundingRect.left;
      var relativeCenterY = textRect.top + textRect.height/2 - boundingRect.top;
      return relativeCenterX + 'px ' + relativeCenterY + 'px';
    }
  }
  return '0 0'; //top left
}

function getTextDx(oldTextRect, newTextRect) {
  if (oldTextRect && newTextRect) {
    return ((oldTextRect.left + oldTextRect.width/2) - (newTextRect.left + newTextRect.width/2));
  }
  return 0;
}
function getTextDy(oldTextRect, newTextRect) {
  if (oldTextRect && newTextRect) {
    return ((oldTextRect.top + oldTextRect.height/2) - (newTextRect.top + newTextRect.height/2));
  }
  return 0;
}

function isTextElement(elm) {
  return elm.childNodes.length === 1 && elm.childNodes[0].nodeType === 3;
}

var removed, created;

function pre(oldVnode, vnode) {
  removed = {};
  created = [];
}

function create(oldVnode, vnode) {
  var hero = vnode.data.hero;
  if (hero && hero.id) {
    created.push(hero.id);
    created.push(vnode);
  }
}

function destroy(vnode) {
  var hero = vnode.data.hero;
  if (hero && hero.id) {
    var elm = vnode.elm;
    vnode.isTextNode = isTextElement(elm); //is this a text node?
    vnode.boundingRect = elm.getBoundingClientRect(); //save the bounding rectangle to a new property on the vnode
    vnode.textRect = vnode.isTextNode ? getTextNodeRect(elm.childNodes[0]) : null; //save bounding rect of inner text node
    var computedStyle = window.getComputedStyle(elm, null); //get current styles (includes inherited properties)
    vnode.savedStyle = JSON.parse(JSON.stringify(computedStyle)); //save a copy of computed style values
    removed[hero.id] = vnode;
  }
}

function post() {
  var i, id, newElm, oldVnode, oldElm, hRatio, wRatio,
      oldRect, newRect, dx, dy, origTransform, origTransition,
      newStyle, oldStyle, newComputedStyle, isTextNode,
      newTextRect, oldTextRect;
  for (i = 0; i < created.length; i += 2) {
    id = created[i];
    newElm = created[i+1].elm;
    oldVnode = removed[id];
    if (oldVnode) {
      isTextNode = oldVnode.isTextNode && isTextElement(newElm); //Are old & new both text?
      newStyle = newElm.style;
      newComputedStyle = window.getComputedStyle(newElm, null); //get full computed style for new element
      oldElm = oldVnode.elm;
      oldStyle = oldElm.style;
      //Overall element bounding boxes
      newRect = newElm.getBoundingClientRect();
      oldRect = oldVnode.boundingRect; //previously saved bounding rect
      //Text node bounding boxes & distances
      if (isTextNode) {
        newTextRect = getTextNodeRect(newElm.childNodes[0]);
        oldTextRect = oldVnode.textRect;
        dx = getTextDx(oldTextRect, newTextRect);
        dy = getTextDy(oldTextRect, newTextRect);
      } else {
        //Calculate distances between old & new positions
        dx = oldRect.left - newRect.left;
        dy = oldRect.top - newRect.top;
      }
      hRatio = newRect.height / (Math.max(oldRect.height, 1));
      wRatio = isTextNode ? hRatio : newRect.width / (Math.max(oldRect.width, 1)); //text scales based on hRatio
      // Animate new element
      origTransform = newStyle.transform;
      origTransition = newStyle.transition;
      if (newComputedStyle.display === 'inline') //inline elements cannot be transformed
        newStyle.display = 'inline-block';        //this does not appear to have any negative side effects
      newStyle.transition = origTransition + 'transform 0s';
      newStyle.transformOrigin = calcTransformOrigin(isTextNode, newTextRect, newRect);
      newStyle.opacity = '0';
      newStyle.transform = origTransform + 'translate('+dx+'px, '+dy+'px) ' +
                               'scale('+1/wRatio+', '+1/hRatio+')';
      setNextFrame(newStyle, 'transition', origTransition);
      setNextFrame(newStyle, 'transform', origTransform);
      setNextFrame(newStyle, 'opacity', '1');
      // Animate old element
      for (var key in oldVnode.savedStyle) { //re-apply saved inherited properties
        if (parseInt(key) != key) {
          var ms = key.substring(0,2) === 'ms';
          var moz = key.substring(0,3) === 'moz';
          var webkit = key.substring(0,6) === 'webkit';
      	  if (!ms && !moz && !webkit) //ignore prefixed style properties
        	  oldStyle[key] = oldVnode.savedStyle[key];
        }
      }
      oldStyle.position = 'absolute';
      oldStyle.top = oldRect.top + 'px'; //start at existing position
      oldStyle.left = oldRect.left + 'px';
      oldStyle.width = oldRect.width + 'px'; //Needed for elements who were sized relative to their parents
      oldStyle.height = oldRect.height + 'px'; //Needed for elements who were sized relative to their parents
      oldStyle.margin = 0; //Margin on hero element leads to incorrect positioning
      oldStyle.transformOrigin = calcTransformOrigin(isTextNode, oldTextRect, oldRect);
      oldStyle.transform = '';
      oldStyle.opacity = '1';
      document.body.appendChild(oldElm);
      setNextFrame(oldStyle, 'transform', 'translate('+ -dx +'px, '+ -dy +'px) scale('+wRatio+', '+hRatio+')'); //scale must be on far right for translate to be correct
      setNextFrame(oldStyle, 'opacity', '0');
      oldElm.addEventListener('transitionend', function(ev) {
        if (ev.propertyName === 'transform')
          document.body.removeChild(ev.target);
      });
    }
  }
  removed = created = undefined;
}

module.exports = {pre: pre, create: create, destroy: destroy, post: post};


/***/ },
/* 199 */
/***/ function(module, exports) {

function updateProps(oldVnode, vnode) {
  var key, cur, old, elm = vnode.elm,
      oldProps = oldVnode.data.props || {}, props = vnode.data.props || {};
  for (key in oldProps) {
    if (!props[key]) {
      delete elm[key];
    }
  }
  for (key in props) {
    cur = props[key];
    old = oldProps[key];
    if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
      elm[key] = cur;
    }
  }
}

module.exports = {create: updateProps, update: updateProps};


/***/ },
/* 200 */
/***/ function(module, exports) {

var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
var nextFrame = function(fn) { raf(function() { raf(fn); }); };

function setNextFrame(obj, prop, val) {
  nextFrame(function() { obj[prop] = val; });
}

function updateStyle(oldVnode, vnode) {
  var cur, name, elm = vnode.elm,
      oldStyle = oldVnode.data.style || {},
      style = vnode.data.style || {},
      oldHasDel = 'delayed' in oldStyle;
  for (name in oldStyle) {
    if (!style[name]) {
      elm.style[name] = '';
    }
  }
  for (name in style) {
    cur = style[name];
    if (name === 'delayed') {
      for (name in style.delayed) {
        cur = style.delayed[name];
        if (!oldHasDel || cur !== oldStyle.delayed[name]) {
          setNextFrame(elm.style, name, cur);
        }
      }
    } else if (name !== 'remove' && cur !== oldStyle[name]) {
      elm.style[name] = cur;
    }
  }
}

function applyDestroyStyle(vnode) {
  var style, name, elm = vnode.elm, s = vnode.data.style;
  if (!s || !(style = s.destroy)) return;
  for (name in style) {
    elm.style[name] = style[name];
  }
}

function applyRemoveStyle(vnode, rm) {
  var s = vnode.data.style;
  if (!s || !s.remove) {
    rm();
    return;
  }
  var name, elm = vnode.elm, idx, i = 0, maxDur = 0,
      compStyle, style = s.remove, amount = 0, applied = [];
  for (name in style) {
    applied.push(name);
    elm.style[name] = style[name];
  }
  compStyle = getComputedStyle(elm);
  var props = compStyle['transition-property'].split(', ');
  for (; i < props.length; ++i) {
    if(applied.indexOf(props[i]) !== -1) amount++;
  }
  elm.addEventListener('transitionend', function(ev) {
    if (ev.target === elm) --amount;
    if (amount === 0) rm();
  });
}

module.exports = {create: updateStyle, update: updateStyle, destroy: applyDestroyStyle, remove: applyRemoveStyle};


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// jshint newcap: false
/* global require, module, document, Node */
'use strict';

var VNode = __webpack_require__(37);
var is = __webpack_require__(19);
var domApi = __webpack_require__(194);

function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }

var emptyNode = VNode('', {}, [], undefined, undefined);

function sameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, map = {}, key;
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) map[key] = i;
  }
  return map;
}

var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];

function init(modules, api) {
  var i, j, cbs = {};

  if (isUndef(api)) api = domApi;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks[i]] !== undefined) cbs[hooks[i]].push(modules[j][hooks[i]]);
    }
  }

  function emptyNodeAt(elm) {
    return VNode(api.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    return function() {
      if (--listeners === 0) {
        var parent = api.parentNode(childElm);
        api.removeChild(parent, childElm);
      }
    };
  }

  function createElm(vnode, insertedVnodeQueue) {
    var i, data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode);
        data = vnode.data;
      }
    }
    var elm, children = vnode.children, sel = vnode.sel;
    if (isDef(sel)) {
      // Parse selector
      var hashIdx = sel.indexOf('#');
      var dotIdx = sel.indexOf('.', hashIdx);
      var hash = hashIdx > 0 ? hashIdx : sel.length;
      var dot = dotIdx > 0 ? dotIdx : sel.length;
      var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
      elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
                                                          : api.createElement(tag);
      if (hash < dot) elm.id = sel.slice(hash + 1, dot);
      if (dotIdx > 0) elm.className = sel.slice(dot+1).replace(/\./g, ' ');
      if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
          api.appendChild(elm, createElm(children[i], insertedVnodeQueue));
        }
      } else if (is.primitive(vnode.text)) {
        api.appendChild(elm, api.createTextNode(vnode.text));
      }
      for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (i.create) i.create(emptyNode, vnode);
        if (i.insert) insertedVnodeQueue.push(vnode);
      }
    } else {
      elm = vnode.elm = api.createTextNode(vnode.text);
    }
    return vnode.elm;
  }

  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      api.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j, data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) i(vnode);
      for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var i, listeners, rm, ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.sel)) {
          invokeDestroyHook(ch);
          listeners = cbs.remove.length + 1;
          rm = createRmCb(ch.elm, listeners);
          for (i = 0; i < cbs.remove.length; ++i) cbs.remove[i](ch, rm);
          if (isDef(i = ch.data) && isDef(i = i.hook) && isDef(i = i.remove)) {
            i(ch, rm);
          } else {
            rm();
          }
        } else { // Text node
          api.removeChild(parentElm, ch.elm);
        }
      }
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
    var oldStartIdx = 0, newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, before;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        idxInOld = oldKeyToIdx[newStartVnode.key];
        if (isUndef(idxInOld)) { // New element
          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
          oldCh[idxInOld] = undefined;
          api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      before = isUndef(newCh[newEndIdx+1]) ? null : newCh[newEndIdx+1].elm;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
    var i, hook;
    if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm, oldCh = oldVnode.children, ch = vnode.children;
    if (oldVnode === vnode) return;
    if (!sameVnode(oldVnode, vnode)) {
      var parentElm = api.parentNode(oldVnode.elm);
      elm = createElm(vnode, insertedVnodeQueue);
      api.insertBefore(parentElm, elm, oldVnode.elm);
      removeVnodes(parentElm, [oldVnode], 0, 0);
      return;
    }
    if (isDef(vnode.data)) {
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
      i = vnode.data.hook;
      if (isDef(i) && isDef(i = i.update)) i(oldVnode, vnode);
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) api.setTextContent(elm, '');
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        api.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      api.setTextContent(elm, vnode.text);
    }
    if (isDef(hook) && isDef(i = hook.postpatch)) {
      i(oldVnode, vnode);
    }
  }

  return function(oldVnode, vnode) {
    var i, elm, parent;
    var insertedVnodeQueue = [];
    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]();

    if (isUndef(oldVnode.sel)) {
      oldVnode = emptyNodeAt(oldVnode);
    }

    if (sameVnode(oldVnode, vnode)) {
      patchVnode(oldVnode, vnode, insertedVnodeQueue);
    } else {
      elm = oldVnode.elm;
      parent = api.parentNode(elm);

      createElm(vnode, insertedVnodeQueue);

      if (parent !== null) {
        api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
        removeVnodes(parent, [oldVnode], 0, 0);
      }
    }

    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
    }
    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]();
    return vnode;
  };
}

module.exports = {init: init};


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

var h = __webpack_require__(193);

function copyToThunk(vnode, thunk) {
  thunk.elm = vnode.elm;
  vnode.data.fn = thunk.data.fn;
  vnode.data.args = thunk.data.args;
  thunk.data = vnode.data;
  thunk.children = vnode.children;
  thunk.text = vnode.text;
  thunk.elm = vnode.elm;
}

function init(thunk) {
  var i, cur = thunk.data;
  var vnode = cur.fn.apply(undefined, cur.args);
  copyToThunk(vnode, thunk);
}

function prepatch(oldVnode, thunk) {
  var i, old = oldVnode.data, cur = thunk.data, vnode;
  var oldArgs = old.args, args = cur.args;
  if (old.fn !== cur.fn || oldArgs.length !== args.length) {
    copyToThunk(cur.fn.apply(undefined, args), thunk);
  }
  for (i = 0; i < args.length; ++i) {
    if (oldArgs[i] !== args[i]) {
      copyToThunk(cur.fn.apply(undefined, args), thunk);
      return;
    }
  }
  copyToThunk(oldVnode, thunk);
}

module.exports = function(sel, key, fn, args) {
  if (args === undefined) {
    args = fn;
    fn = key;
    key = undefined;
  }
  return h(sel, {
    key: key,
    hook: {init: init, prepatch: prepatch},
    fn: fn,
    args: args
  });
};


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ponyfill = __webpack_require__(204);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root = undefined; /* global window */

if (typeof global !== 'undefined') {
	root = global;
} else if (typeof window !== 'undefined') {
	root = window;
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)))

/***/ },
/* 204 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ },
/* 205 */
/***/ function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			configurable: false,
			get: function() { return module.l; }
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			configurable: false,
			get: function() { return module.i; }
		});
		module.webpackPolyfill = 1;
	}
	return module;
}


/***/ },
/* 206 */
/***/ function(module, exports) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NO = {};
function noop() { }
function copy(a) {
    var l = a.length;
    var b = Array(l);
    for (var i = 0; i < l; ++i) {
        b[i] = a[i];
    }
    return b;
}
exports.NO_IL = {
    _n: noop,
    _e: noop,
    _c: noop,
};
// mutates the input
function internalizeProducer(producer) {
    producer._start =
        function _start(il) {
            il.next = il._n;
            il.error = il._e;
            il.complete = il._c;
            this.start(il);
        };
    producer._stop = producer.stop;
}
function compose2(f1, f2) {
    return function composedFn(arg) {
        return f1(f2(arg));
    };
}
function and(f1, f2) {
    return function andFn(t) {
        return f1(t) && f2(t);
    };
}
var MergeProducer = (function () {
    function MergeProducer(insArr) {
        this.type = 'merge';
        this.insArr = insArr;
        this.out = NO;
        this.ac = 0;
    }
    MergeProducer.prototype._start = function (out) {
        this.out = out;
        var s = this.insArr;
        var L = s.length;
        this.ac = L;
        for (var i = 0; i < L; i++) {
            s[i]._add(this);
        }
    };
    MergeProducer.prototype._stop = function () {
        var s = this.insArr;
        var L = s.length;
        for (var i = 0; i < L; i++) {
            s[i]._remove(this);
        }
        this.out = NO;
    };
    MergeProducer.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        u._n(t);
    };
    MergeProducer.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    MergeProducer.prototype._c = function () {
        if (--this.ac <= 0) {
            var u = this.out;
            if (u === NO)
                return;
            u._c();
        }
    };
    return MergeProducer;
}());
exports.MergeProducer = MergeProducer;
var CombineListener = (function () {
    function CombineListener(i, out, p) {
        this.i = i;
        this.out = out;
        this.p = p;
        p.ils.push(this);
    }
    CombineListener.prototype._n = function (t) {
        var p = this.p, out = this.out;
        if (!out)
            return;
        if (p.up(t, this.i)) {
            out._n(p.vals);
        }
    };
    CombineListener.prototype._e = function (err) {
        var out = this.out;
        if (!out)
            return;
        out._e(err);
    };
    CombineListener.prototype._c = function () {
        var p = this.p;
        if (!p.out)
            return;
        if (--p.Nc === 0) {
            p.out._c();
        }
    };
    return CombineListener;
}());
exports.CombineListener = CombineListener;
var CombineProducer = (function () {
    function CombineProducer(insArr) {
        this.type = 'combine';
        this.insArr = insArr;
        this.out = NO;
        this.ils = [];
        this.Nc = this.Nn = 0;
        this.vals = [];
    }
    CombineProducer.prototype.up = function (t, i) {
        var v = this.vals[i];
        var Nn = !this.Nn ? 0 : v === NO ? --this.Nn : this.Nn;
        this.vals[i] = t;
        return Nn === 0;
    };
    CombineProducer.prototype._start = function (out) {
        this.out = out;
        var s = this.insArr;
        var n = this.Nc = this.Nn = s.length;
        var vals = this.vals = new Array(n);
        if (n === 0) {
            out._n([]);
            out._c();
        }
        else {
            for (var i = 0; i < n; i++) {
                vals[i] = NO;
                s[i]._add(new CombineListener(i, out, this));
            }
        }
    };
    CombineProducer.prototype._stop = function () {
        var s = this.insArr;
        var n = s.length;
        for (var i = 0; i < n; i++) {
            s[i]._remove(this.ils[i]);
        }
        this.out = NO;
        this.ils = [];
        this.vals = [];
    };
    return CombineProducer;
}());
exports.CombineProducer = CombineProducer;
var FromArrayProducer = (function () {
    function FromArrayProducer(a) {
        this.type = 'fromArray';
        this.a = a;
    }
    FromArrayProducer.prototype._start = function (out) {
        var a = this.a;
        for (var i = 0, l = a.length; i < l; i++) {
            out._n(a[i]);
        }
        out._c();
    };
    FromArrayProducer.prototype._stop = function () {
    };
    return FromArrayProducer;
}());
exports.FromArrayProducer = FromArrayProducer;
var FromPromiseProducer = (function () {
    function FromPromiseProducer(p) {
        this.type = 'fromPromise';
        this.on = false;
        this.p = p;
    }
    FromPromiseProducer.prototype._start = function (out) {
        var prod = this;
        this.on = true;
        this.p.then(function (v) {
            if (prod.on) {
                out._n(v);
                out._c();
            }
        }, function (e) {
            out._e(e);
        }).then(null, function (err) {
            setTimeout(function () { throw err; });
        });
    };
    FromPromiseProducer.prototype._stop = function () {
        this.on = false;
    };
    return FromPromiseProducer;
}());
exports.FromPromiseProducer = FromPromiseProducer;
var PeriodicProducer = (function () {
    function PeriodicProducer(period) {
        this.type = 'periodic';
        this.period = period;
        this.intervalID = -1;
        this.i = 0;
    }
    PeriodicProducer.prototype._start = function (stream) {
        var self = this;
        function intervalHandler() { stream._n(self.i++); }
        this.intervalID = setInterval(intervalHandler, this.period);
    };
    PeriodicProducer.prototype._stop = function () {
        if (this.intervalID !== -1)
            clearInterval(this.intervalID);
        this.intervalID = -1;
        this.i = 0;
    };
    return PeriodicProducer;
}());
exports.PeriodicProducer = PeriodicProducer;
var DebugOperator = (function () {
    function DebugOperator(arg, ins) {
        this.type = 'debug';
        this.ins = ins;
        this.out = NO;
        this.s = noop;
        this.l = '';
        if (typeof arg === 'string') {
            this.l = arg;
        }
        else if (typeof arg === 'function') {
            this.s = arg;
        }
    }
    DebugOperator.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    DebugOperator.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    DebugOperator.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        var s = this.s, l = this.l;
        if (s !== noop) {
            try {
                s(t);
            }
            catch (e) {
                u._e(e);
            }
        }
        else if (l) {
            console.log(l + ':', t);
        }
        else {
            console.log(t);
        }
        u._n(t);
    };
    DebugOperator.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    DebugOperator.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return DebugOperator;
}());
exports.DebugOperator = DebugOperator;
var DropOperator = (function () {
    function DropOperator(max, ins) {
        this.type = 'drop';
        this.ins = ins;
        this.out = NO;
        this.max = max;
        this.dropped = 0;
    }
    DropOperator.prototype._start = function (out) {
        this.out = out;
        this.dropped = 0;
        this.ins._add(this);
    };
    DropOperator.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    DropOperator.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        if (this.dropped++ >= this.max)
            u._n(t);
    };
    DropOperator.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    DropOperator.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return DropOperator;
}());
exports.DropOperator = DropOperator;
var OtherIL = (function () {
    function OtherIL(out, op) {
        this.out = out;
        this.op = op;
    }
    OtherIL.prototype._n = function (t) {
        this.op.end();
    };
    OtherIL.prototype._e = function (err) {
        this.out._e(err);
    };
    OtherIL.prototype._c = function () {
        this.op.end();
    };
    return OtherIL;
}());
var EndWhenOperator = (function () {
    function EndWhenOperator(o, ins) {
        this.type = 'endWhen';
        this.ins = ins;
        this.out = NO;
        this.o = o;
        this.oil = exports.NO_IL;
    }
    EndWhenOperator.prototype._start = function (out) {
        this.out = out;
        this.o._add(this.oil = new OtherIL(out, this));
        this.ins._add(this);
    };
    EndWhenOperator.prototype._stop = function () {
        this.ins._remove(this);
        this.o._remove(this.oil);
        this.out = NO;
        this.oil = exports.NO_IL;
    };
    EndWhenOperator.prototype.end = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    EndWhenOperator.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        u._n(t);
    };
    EndWhenOperator.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    EndWhenOperator.prototype._c = function () {
        this.end();
    };
    return EndWhenOperator;
}());
exports.EndWhenOperator = EndWhenOperator;
var FilterOperator = (function () {
    function FilterOperator(passes, ins) {
        this.type = 'filter';
        this.ins = ins;
        this.out = NO;
        this.passes = passes;
    }
    FilterOperator.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    FilterOperator.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    FilterOperator.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        try {
            if (this.passes(t))
                u._n(t);
        }
        catch (e) {
            u._e(e);
        }
    };
    FilterOperator.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    FilterOperator.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return FilterOperator;
}());
exports.FilterOperator = FilterOperator;
var FlattenListener = (function () {
    function FlattenListener(out, op) {
        this.out = out;
        this.op = op;
    }
    FlattenListener.prototype._n = function (t) {
        this.out._n(t);
    };
    FlattenListener.prototype._e = function (err) {
        this.out._e(err);
    };
    FlattenListener.prototype._c = function () {
        this.op.inner = NO;
        this.op.less();
    };
    return FlattenListener;
}());
var FlattenOperator = (function () {
    function FlattenOperator(ins) {
        this.type = 'flatten';
        this.ins = ins;
        this.out = NO;
        this.open = true;
        this.inner = NO;
        this.il = exports.NO_IL;
    }
    FlattenOperator.prototype._start = function (out) {
        this.out = out;
        this.open = true;
        this.inner = NO;
        this.il = exports.NO_IL;
        this.ins._add(this);
    };
    FlattenOperator.prototype._stop = function () {
        this.ins._remove(this);
        if (this.inner !== NO)
            this.inner._remove(this.il);
        this.out = NO;
        this.open = true;
        this.inner = NO;
        this.il = exports.NO_IL;
    };
    FlattenOperator.prototype.less = function () {
        var u = this.out;
        if (u === NO)
            return;
        if (!this.open && this.inner === NO)
            u._c();
    };
    FlattenOperator.prototype._n = function (s) {
        var u = this.out;
        if (u === NO)
            return;
        var _a = this, inner = _a.inner, il = _a.il;
        if (inner !== NO && il !== exports.NO_IL)
            inner._remove(il);
        (this.inner = s)._add(this.il = new FlattenListener(u, this));
    };
    FlattenOperator.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    FlattenOperator.prototype._c = function () {
        this.open = false;
        this.less();
    };
    return FlattenOperator;
}());
exports.FlattenOperator = FlattenOperator;
var FoldOperator = (function () {
    function FoldOperator(f, seed, ins) {
        this.type = 'fold';
        this.ins = ins;
        this.out = NO;
        this.f = f;
        this.acc = this.seed = seed;
    }
    FoldOperator.prototype._start = function (out) {
        this.out = out;
        this.acc = this.seed;
        out._n(this.acc);
        this.ins._add(this);
    };
    FoldOperator.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
        this.acc = this.seed;
    };
    FoldOperator.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        try {
            u._n(this.acc = this.f(this.acc, t));
        }
        catch (e) {
            u._e(e);
        }
    };
    FoldOperator.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    FoldOperator.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return FoldOperator;
}());
exports.FoldOperator = FoldOperator;
var LastOperator = (function () {
    function LastOperator(ins) {
        this.type = 'last';
        this.ins = ins;
        this.out = NO;
        this.has = false;
        this.val = NO;
    }
    LastOperator.prototype._start = function (out) {
        this.out = out;
        this.has = false;
        this.ins._add(this);
    };
    LastOperator.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
        this.val = NO;
    };
    LastOperator.prototype._n = function (t) {
        this.has = true;
        this.val = t;
    };
    LastOperator.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    LastOperator.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        if (this.has) {
            u._n(this.val);
            u._c();
        }
        else {
            u._e('TODO show proper error');
        }
    };
    return LastOperator;
}());
exports.LastOperator = LastOperator;
var MapFlattenInner = (function () {
    function MapFlattenInner(out, op) {
        this.out = out;
        this.op = op;
    }
    MapFlattenInner.prototype._n = function (r) {
        this.out._n(r);
    };
    MapFlattenInner.prototype._e = function (err) {
        this.out._e(err);
    };
    MapFlattenInner.prototype._c = function () {
        this.op.inner = NO;
        this.op.less();
    };
    return MapFlattenInner;
}());
var MapFlattenOperator = (function () {
    function MapFlattenOperator(mapOp) {
        this.type = mapOp.type + "+flatten";
        this.ins = mapOp.ins;
        this.out = NO;
        this.mapOp = mapOp;
        this.inner = NO;
        this.il = exports.NO_IL;
        this.open = true;
    }
    MapFlattenOperator.prototype._start = function (out) {
        this.out = out;
        this.inner = NO;
        this.il = exports.NO_IL;
        this.open = true;
        this.mapOp.ins._add(this);
    };
    MapFlattenOperator.prototype._stop = function () {
        this.mapOp.ins._remove(this);
        if (this.inner !== NO)
            this.inner._remove(this.il);
        this.out = NO;
        this.inner = NO;
        this.il = exports.NO_IL;
    };
    MapFlattenOperator.prototype.less = function () {
        if (!this.open && this.inner === NO) {
            var u = this.out;
            if (u === NO)
                return;
            u._c();
        }
    };
    MapFlattenOperator.prototype._n = function (v) {
        var u = this.out;
        if (u === NO)
            return;
        var _a = this, inner = _a.inner, il = _a.il;
        var s;
        try {
            s = this.mapOp.project(v);
        }
        catch (e) {
            u._e(e);
            return;
        }
        if (inner !== NO && il !== exports.NO_IL)
            inner._remove(il);
        (this.inner = s)._add(this.il = new MapFlattenInner(u, this));
    };
    MapFlattenOperator.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    MapFlattenOperator.prototype._c = function () {
        this.open = false;
        this.less();
    };
    return MapFlattenOperator;
}());
exports.MapFlattenOperator = MapFlattenOperator;
var MapOperator = (function () {
    function MapOperator(project, ins) {
        this.type = 'map';
        this.ins = ins;
        this.out = NO;
        this.project = project;
    }
    MapOperator.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    MapOperator.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    MapOperator.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        try {
            u._n(this.project(t));
        }
        catch (e) {
            u._e(e);
        }
    };
    MapOperator.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    MapOperator.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var FilterMapOperator = (function (_super) {
    __extends(FilterMapOperator, _super);
    function FilterMapOperator(passes, project, ins) {
        _super.call(this, project, ins);
        this.type = 'filter+map';
        this.passes = passes;
    }
    FilterMapOperator.prototype._n = function (v) {
        if (this.passes(v)) {
            _super.prototype._n.call(this, v);
        }
        ;
    };
    return FilterMapOperator;
}(MapOperator));
exports.FilterMapOperator = FilterMapOperator;
var RememberOperator = (function () {
    function RememberOperator(ins) {
        this.type = 'remember';
        this.ins = ins;
        this.out = NO;
    }
    RememberOperator.prototype._start = function (out) {
        this.out = out;
        this.ins._add(out);
    };
    RememberOperator.prototype._stop = function () {
        this.ins._remove(this.out);
        this.out = NO;
    };
    return RememberOperator;
}());
exports.RememberOperator = RememberOperator;
var ReplaceErrorOperator = (function () {
    function ReplaceErrorOperator(fn, ins) {
        this.type = 'replaceError';
        this.ins = ins;
        this.out = NO;
        this.fn = fn;
    }
    ReplaceErrorOperator.prototype._start = function (out) {
        this.out = out;
        this.ins._add(this);
    };
    ReplaceErrorOperator.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    ReplaceErrorOperator.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        u._n(t);
    };
    ReplaceErrorOperator.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        try {
            this.ins._remove(this);
            (this.ins = this.fn(err))._add(this);
        }
        catch (e) {
            u._e(e);
        }
    };
    ReplaceErrorOperator.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return ReplaceErrorOperator;
}());
exports.ReplaceErrorOperator = ReplaceErrorOperator;
var StartWithOperator = (function () {
    function StartWithOperator(ins, val) {
        this.type = 'startWith';
        this.ins = ins;
        this.out = NO;
        this.val = val;
    }
    StartWithOperator.prototype._start = function (out) {
        this.out = out;
        this.out._n(this.val);
        this.ins._add(out);
    };
    StartWithOperator.prototype._stop = function () {
        this.ins._remove(this.out);
        this.out = NO;
    };
    return StartWithOperator;
}());
exports.StartWithOperator = StartWithOperator;
var TakeOperator = (function () {
    function TakeOperator(max, ins) {
        this.type = 'take';
        this.ins = ins;
        this.out = NO;
        this.max = max;
        this.taken = 0;
    }
    TakeOperator.prototype._start = function (out) {
        this.out = out;
        this.taken = 0;
        if (this.max <= 0) {
            out._c();
        }
        else {
            this.ins._add(this);
        }
    };
    TakeOperator.prototype._stop = function () {
        this.ins._remove(this);
        this.out = NO;
    };
    TakeOperator.prototype._n = function (t) {
        var u = this.out;
        if (u === NO)
            return;
        if (this.taken++ < this.max - 1) {
            u._n(t);
        }
        else {
            u._n(t);
            u._c();
        }
    };
    TakeOperator.prototype._e = function (err) {
        var u = this.out;
        if (u === NO)
            return;
        u._e(err);
    };
    TakeOperator.prototype._c = function () {
        var u = this.out;
        if (u === NO)
            return;
        u._c();
    };
    return TakeOperator;
}());
exports.TakeOperator = TakeOperator;
var Stream = (function () {
    function Stream(producer) {
        this._prod = producer || NO;
        this._ils = [];
        this._stopID = NO;
        this._target = NO;
        this._err = NO;
    }
    Stream.prototype._n = function (t) {
        var a = this._ils;
        var L = a.length;
        if (L == 1)
            a[0]._n(t);
        else {
            var b = copy(a);
            for (var i = 0; i < L; i++)
                b[i]._n(t);
        }
    };
    Stream.prototype._e = function (err) {
        if (this._err !== NO)
            return;
        this._err = err;
        var a = this._ils;
        var L = a.length;
        if (L == 1)
            a[0]._e(err);
        else {
            var b = copy(a);
            for (var i = 0; i < L; i++)
                b[i]._e(err);
        }
        this._x();
    };
    Stream.prototype._c = function () {
        var a = this._ils;
        var L = a.length;
        if (L == 1)
            a[0]._c();
        else {
            var b = copy(a);
            for (var i = 0; i < L; i++)
                b[i]._c();
        }
        this._x();
    };
    Stream.prototype._x = function () {
        if (this._ils.length === 0)
            return;
        if (this._prod !== NO)
            this._prod._stop();
        this._err = NO;
        this._ils = [];
    };
    Stream.prototype._stopNow = function () {
        // WARNING: code that calls this method should
        // first check if this._prod is valid (not `NO`)
        this._prod._stop();
        this._err = NO;
        this._stopID = NO;
    };
    Stream.prototype._add = function (il) {
        var ta = this._target;
        if (ta !== NO)
            return ta._add(il);
        var a = this._ils;
        a.push(il);
        if (a.length === 1) {
            if (this._stopID !== NO) {
                clearTimeout(this._stopID);
                this._stopID = NO;
            }
            var p = this._prod;
            if (p !== NO)
                p._start(this);
        }
    };
    Stream.prototype._remove = function (il) {
        var _this = this;
        var ta = this._target;
        if (ta !== NO)
            return ta._remove(il);
        var a = this._ils;
        var i = a.indexOf(il);
        if (i > -1) {
            a.splice(i, 1);
            if (this._prod !== NO && a.length <= 0) {
                this._err = NO;
                this._stopID = setTimeout(function () { return _this._stopNow(); });
            }
            else if (a.length === 1) {
                this._pruneCycles();
            }
        }
    };
    // If all paths stemming from `this` stream eventually end at `this`
    // stream, then we remove the single listener of `this` stream, to
    // force it to end its execution and dispose resources. This method
    // assumes as a precondition that this._ils has just one listener.
    Stream.prototype._pruneCycles = function () {
        if (this._hasNoSinks(this, [])) {
            this._remove(this._ils[0]);
        }
    };
    // Checks whether *there is no* path starting from `x` that leads to an end
    // listener (sink) in the stream graph, following edges A->B where B is a
    // listener of A. This means these paths constitute a cycle somehow. Is given
    // a trace of all visited nodes so far.
    Stream.prototype._hasNoSinks = function (x, trace) {
        if (trace.indexOf(x) !== -1) {
            return true;
        }
        else if (x.out === this) {
            return true;
        }
        else if (x.out && x.out !== NO) {
            return this._hasNoSinks(x.out, trace.concat(x));
        }
        else if (x._ils) {
            for (var i = 0, N = x._ils.length; i < N; i++) {
                if (!this._hasNoSinks(x._ils[i], trace.concat(x))) {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    };
    Stream.prototype.ctor = function () {
        return this instanceof MemoryStream ? MemoryStream : Stream;
    };
    /**
     * Adds a Listener to the Stream.
     *
     * @param {Listener<T>} listener
     */
    Stream.prototype.addListener = function (listener) {
        if (typeof listener.next !== 'function'
            || typeof listener.error !== 'function'
            || typeof listener.complete !== 'function') {
            throw new Error('stream.addListener() requires all three next, error, ' +
                'and complete functions.');
        }
        listener._n = listener.next;
        listener._e = listener.error;
        listener._c = listener.complete;
        this._add(listener);
    };
    /**
     * Removes a Listener from the Stream, assuming the Listener was added to it.
     *
     * @param {Listener<T>} listener
     */
    Stream.prototype.removeListener = function (listener) {
        this._remove(listener);
    };
    /**
     * Creates a new Stream given a Producer.
     *
     * @factory true
     * @param {Producer} producer An optional Producer that dictates how to
     * start, generate events, and stop the Stream.
     * @return {Stream}
     */
    Stream.create = function (producer) {
        if (producer) {
            if (typeof producer.start !== 'function'
                || typeof producer.stop !== 'function') {
                throw new Error('producer requires both start and stop functions');
            }
            internalizeProducer(producer); // mutates the input
        }
        return new Stream(producer);
    };
    /**
     * Creates a new MemoryStream given a Producer.
     *
     * @factory true
     * @param {Producer} producer An optional Producer that dictates how to
     * start, generate events, and stop the Stream.
     * @return {MemoryStream}
     */
    Stream.createWithMemory = function (producer) {
        if (producer) {
            internalizeProducer(producer); // mutates the input
        }
        return new MemoryStream(producer);
    };
    /**
     * Creates a Stream that does nothing when started. It never emits any event.
     *
     * Marble diagram:
     *
     * ```text
     *          never
     * -----------------------
     * ```
     *
     * @factory true
     * @return {Stream}
     */
    Stream.never = function () {
        return new Stream({ _start: noop, _stop: noop });
    };
    /**
     * Creates a Stream that immediately emits the "complete" notification when
     * started, and that's it.
     *
     * Marble diagram:
     *
     * ```text
     * empty
     * -|
     * ```
     *
     * @factory true
     * @return {Stream}
     */
    Stream.empty = function () {
        return new Stream({
            _start: function (il) { il._c(); },
            _stop: noop,
        });
    };
    /**
     * Creates a Stream that immediately emits an "error" notification with the
     * value you passed as the `error` argument when the stream starts, and that's
     * it.
     *
     * Marble diagram:
     *
     * ```text
     * throw(X)
     * -X
     * ```
     *
     * @factory true
     * @param error The error event to emit on the created stream.
     * @return {Stream}
     */
    Stream.throw = function (error) {
        return new Stream({
            _start: function (il) { il._e(error); },
            _stop: noop,
        });
    };
    /**
     * Creates a Stream that immediately emits the arguments that you give to
     * *of*, then completes.
     *
     * Marble diagram:
     *
     * ```text
     * of(1,2,3)
     * 123|
     * ```
     *
     * @factory true
     * @param a The first value you want to emit as an event on the stream.
     * @param b The second value you want to emit as an event on the stream. One
     * or more of these values may be given as arguments.
     * @return {Stream}
     */
    Stream.of = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i - 0] = arguments[_i];
        }
        return Stream.fromArray(items);
    };
    /**
     * Converts an array to a stream. The returned stream will emit synchronously
     * all the items in the array, and then complete.
     *
     * Marble diagram:
     *
     * ```text
     * fromArray([1,2,3])
     * 123|
     * ```
     *
     * @factory true
     * @param {Array} array The array to be converted as a stream.
     * @return {Stream}
     */
    Stream.fromArray = function (array) {
        return new Stream(new FromArrayProducer(array));
    };
    /**
     * Converts a promise to a stream. The returned stream will emit the resolved
     * value of the promise, and then complete. However, if the promise is
     * rejected, the stream will emit the corresponding error.
     *
     * Marble diagram:
     *
     * ```text
     * fromPromise( ----42 )
     * -----------------42|
     * ```
     *
     * @factory true
     * @param {Promise} promise The promise to be converted as a stream.
     * @return {Stream}
     */
    Stream.fromPromise = function (promise) {
        return new Stream(new FromPromiseProducer(promise));
    };
    /**
     * Creates a stream that periodically emits incremental numbers, every
     * `period` milliseconds.
     *
     * Marble diagram:
     *
     * ```text
     *     periodic(1000)
     * ---0---1---2---3---4---...
     * ```
     *
     * @factory true
     * @param {number} period The interval in milliseconds to use as a rate of
     * emission.
     * @return {Stream}
     */
    Stream.periodic = function (period) {
        return new Stream(new PeriodicProducer(period));
    };
    Stream.prototype._map = function (project) {
        var p = this._prod;
        var ctor = this.ctor();
        if (p instanceof FilterOperator) {
            return new ctor(new FilterMapOperator(p.passes, project, p.ins));
        }
        if (p instanceof FilterMapOperator) {
            return new ctor(new FilterMapOperator(p.passes, compose2(project, p.project), p.ins));
        }
        if (p instanceof MapOperator) {
            return new ctor(new MapOperator(compose2(project, p.project), p.ins));
        }
        return new ctor(new MapOperator(project, this));
    };
    /**
     * Transforms each event from the input Stream through a `project` function,
     * to get a Stream that emits those transformed events.
     *
     * Marble diagram:
     *
     * ```text
     * --1---3--5-----7------
     *    map(i => i * 10)
     * --10--30-50----70-----
     * ```
     *
     * @param {Function} project A function of type `(t: T) => U` that takes event
     * `t` of type `T` from the input Stream and produces an event of type `U`, to
     * be emitted on the output Stream.
     * @return {Stream}
     */
    Stream.prototype.map = function (project) {
        return this._map(project);
    };
    /**
     * It's like `map`, but transforms each input event to always the same
     * constant value on the output Stream.
     *
     * Marble diagram:
     *
     * ```text
     * --1---3--5-----7-----
     *       mapTo(10)
     * --10--10-10----10----
     * ```
     *
     * @param projectedValue A value to emit on the output Stream whenever the
     * input Stream emits any value.
     * @return {Stream}
     */
    Stream.prototype.mapTo = function (projectedValue) {
        var s = this.map(function () { return projectedValue; });
        var op = s._prod;
        op.type = op.type.replace('map', 'mapTo');
        return s;
    };
    /**
     * Only allows events that pass the test given by the `passes` argument.
     *
     * Each event from the input stream is given to the `passes` function. If the
     * function returns `true`, the event is forwarded to the output stream,
     * otherwise it is ignored and not forwarded.
     *
     * Marble diagram:
     *
     * ```text
     * --1---2--3-----4-----5---6--7-8--
     *     filter(i => i % 2 === 0)
     * ------2--------4---------6----8--
     * ```
     *
     * @param {Function} passes A function of type `(t: T) +> boolean` that takes
     * an event from the input stream and checks if it passes, by returning a
     * boolean.
     * @return {Stream}
     */
    Stream.prototype.filter = function (passes) {
        var p = this._prod;
        if (p instanceof FilterOperator) {
            return new Stream(new FilterOperator(and(p.passes, passes), p.ins));
        }
        return new Stream(new FilterOperator(passes, this));
    };
    /**
     * Lets the first `amount` many events from the input stream pass to the
     * output stream, then makes the output stream complete.
     *
     * Marble diagram:
     *
     * ```text
     * --a---b--c----d---e--
     *    take(3)
     * --a---b--c|
     * ```
     *
     * @param {number} amount How many events to allow from the input stream
     * before completing the output stream.
     * @return {Stream}
     */
    Stream.prototype.take = function (amount) {
        return new (this.ctor())(new TakeOperator(amount, this));
    };
    /**
     * Ignores the first `amount` many events from the input stream, and then
     * after that starts forwarding events from the input stream to the output
     * stream.
     *
     * Marble diagram:
     *
     * ```text
     * --a---b--c----d---e--
     *       drop(3)
     * --------------d---e--
     * ```
     *
     * @param {number} amount How many events to ignore from the input stream
     * before forwarding all events from the input stream to the output stream.
     * @return {Stream}
     */
    Stream.prototype.drop = function (amount) {
        return new Stream(new DropOperator(amount, this));
    };
    /**
     * When the input stream completes, the output stream will emit the last event
     * emitted by the input stream, and then will also complete.
     *
     * Marble diagram:
     *
     * ```text
     * --a---b--c--d----|
     *       last()
     * -----------------d|
     * ```
     *
     * @return {Stream}
     */
    Stream.prototype.last = function () {
        return new Stream(new LastOperator(this));
    };
    /**
     * Prepends the given `initial` value to the sequence of events emitted by the
     * input stream. The returned stream is a MemoryStream, which means it is
     * already `remember()`'d.
     *
     * Marble diagram:
     *
     * ```text
     * ---1---2-----3---
     *   startWith(0)
     * 0--1---2-----3---
     * ```
     *
     * @param initial The value or event to prepend.
     * @return {MemoryStream}
     */
    Stream.prototype.startWith = function (initial) {
        return new MemoryStream(new StartWithOperator(this, initial));
    };
    /**
     * Uses another stream to determine when to complete the current stream.
     *
     * When the given `other` stream emits an event or completes, the output
     * stream will complete. Before that happens, the output stream will behaves
     * like the input stream.
     *
     * Marble diagram:
     *
     * ```text
     * ---1---2-----3--4----5----6---
     *   endWhen( --------a--b--| )
     * ---1---2-----3--4--|
     * ```
     *
     * @param other Some other stream that is used to know when should the output
     * stream of this operator complete.
     * @return {Stream}
     */
    Stream.prototype.endWhen = function (other) {
        return new (this.ctor())(new EndWhenOperator(other, this));
    };
    /**
     * "Folds" the stream onto itself.
     *
     * Combines events from the past throughout
     * the entire execution of the input stream, allowing you to accumulate them
     * together. It's essentially like `Array.prototype.reduce`. The returned
     * stream is a MemoryStream, which means it is already `remember()`'d.
     *
     * The output stream starts by emitting the `seed` which you give as argument.
     * Then, when an event happens on the input stream, it is combined with that
     * seed value through the `accumulate` function, and the output value is
     * emitted on the output stream. `fold` remembers that output value as `acc`
     * ("accumulator"), and then when a new input event `t` happens, `acc` will be
     * combined with that to produce the new `acc` and so forth.
     *
     * Marble diagram:
     *
     * ```text
     * ------1-----1--2----1----1------
     *   fold((acc, x) => acc + x, 3)
     * 3-----4-----5--7----8----9------
     * ```
     *
     * @param {Function} accumulate A function of type `(acc: R, t: T) => R` that
     * takes the previous accumulated value `acc` and the incoming event from the
     * input stream and produces the new accumulated value.
     * @param seed The initial accumulated value, of type `R`.
     * @return {MemoryStream}
     */
    Stream.prototype.fold = function (accumulate, seed) {
        return new MemoryStream(new FoldOperator(accumulate, seed, this));
    };
    /**
     * Replaces an error with another stream.
     *
     * When (and if) an error happens on the input stream, instead of forwarding
     * that error to the output stream, *replaceError* will call the `replace`
     * function which returns the stream that the output stream will replicate.
     * And, in case that new stream also emits an error, `replace` will be called
     * again to get another stream to start replicating.
     *
     * Marble diagram:
     *
     * ```text
     * --1---2-----3--4-----X
     *   replaceError( () => --10--| )
     * --1---2-----3--4--------10--|
     * ```
     *
     * @param {Function} replace A function of type `(err) => Stream` that takes
     * the error that occurred on the input stream or on the previous replacement
     * stream and returns a new stream. The output stream will behave like the
     * stream that this function returns.
     * @return {Stream}
     */
    Stream.prototype.replaceError = function (replace) {
        return new (this.ctor())(new ReplaceErrorOperator(replace, this));
    };
    /**
     * Flattens a "stream of streams", handling only one nested stream at a time
     * (no concurrency).
     *
     * If the input stream is a stream that emits streams, then this operator will
     * return an output stream which is a flat stream: emits regular events. The
     * flattening happens without concurrency. It works like this: when the input
     * stream emits a nested stream, *flatten* will start imitating that nested
     * one. However, as soon as the next nested stream is emitted on the input
     * stream, *flatten* will forget the previous nested one it was imitating, and
     * will start imitating the new nested one.
     *
     * Marble diagram:
     *
     * ```text
     * --+--------+---------------
     *   \        \
     *    \       ----1----2---3--
     *    --a--b----c----d--------
     *           flatten
     * -----a--b------1----2---3--
     * ```
     *
     * @return {Stream}
     */
    Stream.prototype.flatten = function () {
        var p = this._prod;
        return new Stream(p instanceof MapOperator && !(p instanceof FilterMapOperator) ?
            new MapFlattenOperator(p) :
            new FlattenOperator(this));
    };
    /**
     * Passes the input stream to a custom operator, to produce an output stream.
     *
     * *compose* is a handy way of using an existing function in a chained style.
     * Instead of writing `outStream = f(inStream)` you can write
     * `outStream = inStream.compose(f)`.
     *
     * @param {function} operator A function that takes a stream as input and
     * returns a stream as well.
     * @return {Stream}
     */
    Stream.prototype.compose = function (operator) {
        return operator(this);
    };
    /**
     * Returns an output stream that behaves like the input stream, but also
     * remembers the most recent event that happens on the input stream, so that a
     * newly added listener will immediately receive that memorised event.
     *
     * @return {MemoryStream}
     */
    Stream.prototype.remember = function () {
        return new MemoryStream(new RememberOperator(this));
    };
    /**
     * Returns an output stream that identically behaves like the input stream,
     * but also runs a `spy` function fo each event, to help you debug your app.
     *
     * *debug* takes a `spy` function as argument, and runs that for each event
     * happening on the input stream. If you don't provide the `spy` argument,
     * then *debug* will just `console.log` each event. This helps you to
     * understand the flow of events through some operator chain.
     *
     * Please note that if the output stream has no listeners, then it will not
     * start, which means `spy` will never run because no actual event happens in
     * that case.
     *
     * Marble diagram:
     *
     * ```text
     * --1----2-----3-----4--
     *         debug
     * --1----2-----3-----4--
     * ```
     *
     * @param {function} labelOrSpy A string to use as the label when printing
     * debug information on the console, or a 'spy' function that takes an event
     * as argument, and does not need to return anything.
     * @return {Stream}
     */
    Stream.prototype.debug = function (labelOrSpy) {
        return new (this.ctor())(new DebugOperator(labelOrSpy, this));
    };
    /**
     * *imitate* changes this current Stream to emit the same events that the
     * `other` given Stream does. This method returns nothing.
     *
     * This method exists to allow one thing: **circular dependency of streams**.
     * For instance, let's imagine that for some reason you need to create a
     * circular dependency where stream `first$` depends on stream `second$`
     * which in turn depends on `first$`:
     *
     * <!-- skip-example -->
     * ```js
     * import delay from 'xstream/extra/delay'
     *
     * var first$ = second$.map(x => x * 10).take(3);
     * var second$ = first$.map(x => x + 1).startWith(1).compose(delay(100));
     * ```
     *
     * However, that is invalid JavaScript, because `second$` is undefined
     * on the first line. This is how *imitate* can help solve it:
     *
     * ```js
     * import delay from 'xstream/extra/delay'
     *
     * var secondProxy$ = xs.create();
     * var first$ = secondProxy$.map(x => x * 10).take(3);
     * var second$ = first$.map(x => x + 1).startWith(1).compose(delay(100));
     * secondProxy$.imitate(second$);
     * ```
     *
     * We create `secondProxy$` before the others, so it can be used in the
     * declaration of `first$`. Then, after both `first$` and `second$` are
     * defined, we hook `secondProxy$` with `second$` with `imitate()` to tell
     * that they are "the same". `imitate` will not trigger the start of any
     * stream, it just binds `secondProxy$` and `second$` together.
     *
     * The following is an example where `imitate()` is important in Cycle.js
     * applications. A parent component contains some child components. A child
     * has an action stream which is given to the parent to define its state:
     *
     * <!-- skip-example -->
     * ```js
     * const childActionProxy$ = xs.create();
     * const parent = Parent({...sources, childAction$: childActionProxy$});
     * const childAction$ = parent.state$.map(s => s.child.action$).flatten();
     * childActionProxy$.imitate(childAction$);
     * ```
     *
     * Note, though, that **`imitate()` does not support MemoryStreams**. If we
     * would attempt to imitate a MemoryStream in a circular dependency, we would
     * either get a race condition (where the symptom would be "nothing happens")
     * or an infinite cyclic emission of values. It's useful to think about
     * MemoryStreams as cells in a spreadsheet. It doesn't make any sense to
     * define a spreadsheet cell `A1` with a formula that depends on `B1` and
     * cell `B1` defined with a formula that depends on `A1`.
     *
     * If you find yourself wanting to use `imitate()` with a
     * MemoryStream, you should rework your code around `imitate()` to use a
     * Stream instead. Look for the stream in the circular dependency that
     * represents an event stream, and that would be a candidate for creating a
     * proxy Stream which then imitates the target Stream.
     *
     * @param {Stream} target The other stream to imitate on the current one. Must
     * not be a MemoryStream.
     */
    Stream.prototype.imitate = function (target) {
        if (target instanceof MemoryStream) {
            throw new Error('A MemoryStream was given to imitate(), but it only ' +
                'supports a Stream. Read more about this restriction here: ' +
                'https://github.com/staltz/xstream#faq');
        }
        this._target = target;
        for (var ils = this._ils, N = ils.length, i = 0; i < N; i++) {
            target._add(ils[i]);
        }
        this._ils = [];
    };
    /**
     * Forces the Stream to emit the given value to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     *
     * @param value The "next" value you want to broadcast to all listeners of
     * this Stream.
     */
    Stream.prototype.shamefullySendNext = function (value) {
        this._n(value);
    };
    /**
     * Forces the Stream to emit the given error to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     *
     * @param {any} error The error you want to broadcast to all the listeners of
     * this Stream.
     */
    Stream.prototype.shamefullySendError = function (error) {
        this._e(error);
    };
    /**
     * Forces the Stream to emit the "completed" event to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     */
    Stream.prototype.shamefullySendComplete = function () {
        this._c();
    };
    /**
     * Blends multiple streams together, emitting events from all of them
     * concurrently.
     *
     * *merge* takes multiple streams as arguments, and creates a stream that
     * behaves like each of the argument streams, in parallel.
     *
     * Marble diagram:
     *
     * ```text
     * --1----2-----3--------4---
     * ----a-----b----c---d------
     *            merge
     * --1-a--2--b--3-c---d--4---
     * ```
     *
     * @factory true
     * @param {Stream} stream1 A stream to merge together with other streams.
     * @param {Stream} stream2 A stream to merge together with other streams. Two
     * or more streams may be given as arguments.
     * @return {Stream}
     */
    Stream.merge = function merge() {
        var streams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            streams[_i - 0] = arguments[_i];
        }
        return new Stream(new MergeProducer(streams));
    };
    /**
     * Combines multiple input streams together to return a stream whose events
     * are arrays that collect the latest events from each input stream.
     *
     * *combine* internally remembers the most recent event from each of the input
     * streams. When any of the input streams emits an event, that event together
     * with all the other saved events are combined into an array. That array will
     * be emitted on the output stream. It's essentially a way of joining together
     * the events from multiple streams.
     *
     * Marble diagram:
     *
     * ```text
     * --1----2-----3--------4---
     * ----a-----b-----c--d------
     *          combine
     * ----1a-2a-2b-3b-3c-3d-4d--
     * ```
     *
     * @factory true
     * @param {Stream} stream1 A stream to combine together with other streams.
     * @param {Stream} stream2 A stream to combine together with other streams.
     * Multiple streams, not just two, may be given as arguments.
     * @return {Stream}
     */
    Stream.combine = function combine() {
        var streams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            streams[_i - 0] = arguments[_i];
        }
        return new Stream(new CombineProducer(streams));
    };
    return Stream;
}());
exports.Stream = Stream;
var MemoryStream = (function (_super) {
    __extends(MemoryStream, _super);
    function MemoryStream(producer) {
        _super.call(this, producer);
        this._has = false;
    }
    MemoryStream.prototype._n = function (x) {
        this._v = x;
        this._has = true;
        _super.prototype._n.call(this, x);
    };
    MemoryStream.prototype._add = function (il) {
        if (this._has) {
            il._n(this._v);
        }
        _super.prototype._add.call(this, il);
    };
    MemoryStream.prototype._stopNow = function () {
        this._has = false;
        _super.prototype._stopNow.call(this);
    };
    MemoryStream.prototype._x = function () {
        this._has = false;
        _super.prototype._x.call(this);
    };
    MemoryStream.prototype.map = function (project) {
        return this._map(project);
    };
    MemoryStream.prototype.mapTo = function (projectedValue) {
        return _super.prototype.mapTo.call(this, projectedValue);
    };
    MemoryStream.prototype.take = function (amount) {
        return _super.prototype.take.call(this, amount);
    };
    MemoryStream.prototype.endWhen = function (other) {
        return _super.prototype.endWhen.call(this, other);
    };
    MemoryStream.prototype.replaceError = function (replace) {
        return _super.prototype.replaceError.call(this, replace);
    };
    MemoryStream.prototype.remember = function () {
        return this;
    };
    MemoryStream.prototype.debug = function (labelOrSpy) {
        return _super.prototype.debug.call(this, labelOrSpy);
    };
    return MemoryStream;
}(Stream));
exports.MemoryStream = MemoryStream;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Stream;
//# sourceMappingURL=core.js.map

/***/ },
/* 207 */,
/* 208 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(20);
__webpack_require__(14);
__webpack_require__(11);
module.exports = __webpack_require__(4);


/***/ }
/******/ ]);