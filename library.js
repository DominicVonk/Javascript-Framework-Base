/* By Dominic Vonk (based on jQuery) */
(function (window, undefined) {
    var _$_ = window.$_ || window.libraries || [],
        _$ = window.$,
        _Mimbu = window.Mimbu,
        version = "0.0.2a",
        library = "Mimbu",
        _addtolist = true;
    Mimbu = function (selector, context) {
        return new Mimbu.fn.init(selector, context);
    };
    var libraries = _$_.slice();
   for(i = 0; i < libraries.length; i++) {
    if(libraries[i] === library + " " + version) {
      _addtolist = false;
    }
  }
  if (_addtolist) {
    libraries.push(library + " " + version);
  }
    Mimbu.fn = Mimbu.prototype = {
        constructor: Mimbu,
        init: function (selector, context) {
            var match, elem;
            if (!selector) {
                return this;
            } else if (selector !== undefined) {
                this.selector = selector;
                this.context = context;
            }
            for (var key in this) {
                selector[key] = this[key];
            }

            return selector;
        },
        selector: "",
        length: 0

    };
    Mimbu.fn.init.prototype = Mimbu.fn;

    Mimbu.extend = Mimbu.fn.extend = function () {
        var target = arguments[0] || {},

            i = 1,
            length = arguments.length;
        if (length === i) {
            target = this;
            --i;
        }
        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    target[name] = options[name];
                }
            }
        }
        return target;
    };

    Mimbu.extend({
        version: version,
        library: library,

        noConflict: function (hard) {
            if (window.$ === Mimbu) {
                window.$ = _$;
            }
            if (hard && window.$ === Mimbu) {
                window.Mimbu = _Mimbu;
            }
            return Mimbu;
        },
        noListing: function () {
            window.$_ = window.libraries = _$_;
        }
    });

    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = Mimbu;
    } else {
        window.Mimbu = window.$ = Mimbu;
        window.$_ = window.libraries = libraries;
        if (typeof define === "function" && define.amd) {
            define("mimbu", [], function () {
                return Mimbu;
            });
        }
    }

})(window);

$.extend({
    say: function (msg) {
        console.log(msg);
    }
});
$.say($.library + " " + $.version);
$.say(libraries);
