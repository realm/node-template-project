"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Bonjour, " + this.greeting + "!";
    };
    return Greeter;
}());
exports.Greeter = Greeter;
//# sourceMappingURL=greeter.js.map