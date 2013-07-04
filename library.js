/*
 * Javascript Library Base
 * Dominic Vonk - July 4th 2013
 * Based on the jQuery Library
 * License: Free
 */
 
(function (window, undefined) {
    var
    _Mimbu = window.Mimbu,
        _$ = window.$,
        Mimbu = {
            noConflict: function (hard) {
                if (window.$ === Mimbu) {
                    window.$ = _$;
                }
                if (hard && window.$ === Mimbu) {
                    window.Mimbu = _Mimbu;
                }
                return Mimbu;
            },
            extends: function (args) {
                for (var key in args) {
                    if (args.hasOwnProperty(key)) {
                        Mimbu[key] = args[key];
                    }
                }
                return Mimbu;
            },
            curtail: function (args) {
                Mimbu[args] = null;
                return Mimbu;
            },
            version: "0.0.1a",
            library: "Mimbu"
        };
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
 
(function ($) {
    $.extends({
        say: function (msg) {
            return console.log(msg);
        }
    });
})(Mimbu);
 
$.say("hey");
