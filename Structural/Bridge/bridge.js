var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(color) {
        // this.color = color;
    }
    return Car;
}());
// Класс машина - абстракция
var ConcreteCar = /** @class */ (function (_super) {
    __extends(ConcreteCar, _super);
    function ConcreteCar(color) {
        return _super.call(this, color) || this;
    }
    ConcreteCar.prototype.paint = function () {
        return "This is a ".concat(this.color.getColor(), " car");
    };
    return ConcreteCar;
}(Car));
var Color = /** @class */ (function () {
    function Color(color) {
        // this.color = color;
    }
    Color.prototype.getColor = function () {
        return this.color;
    };
    return Color;
}());
// Класс Цвет - реализация
var BlackColor = /** @class */ (function (_super) {
    __extends(BlackColor, _super);
    function BlackColor() {
        return _super.call(this, "Black") || this;
    }
    return BlackColor;
}(Color));
var RedColor = /** @class */ (function (_super) {
    __extends(RedColor, _super);
    function RedColor() {
        return _super.call(this, "Red") || this;
    }
    return RedColor;
}(Color));
console.log(new ConcreteCar(new BlackColor()).paint());
console.log(new ConcreteCar(new RedColor()).paint());
