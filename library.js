(function (window, undefined) {
    var
    _$ = window.$,
        _Mimbu = window.Mimbu,
        version = "0.0.1a",
        library = "Mimbu";
    Mimbu = function (selector, context) {
        return new Mimbu.fn.init(selector, context);
    };

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
        }
    });
    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = Mimbu;
    } else {
        window.Mimbu = window.$ = Mimbu;
        if (typeof define === "function" && define.amd) {
            define("mimbu", [], function () {
                return Mimbu;
            });
        }
    }

})(window);

$.say = function (msg) {
    console.log(msg);
};
$.say("ey");
