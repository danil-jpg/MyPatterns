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
        this.color = color;
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
// class Color {
//   public color;
//   constructor(color) {
//     this.color = color;
//   }
//   getColor() {
//     return this.color;
//   }
// }
// Класс Цвет - реализация
var BlackColor = /** @class */ (function () {
    function BlackColor() {
        this.color = "Black";
    }
    BlackColor.prototype.getColor = function () {
        return this.color;
    };
    return BlackColor;
}());
var RedColor = /** @class */ (function () {
    function RedColor() {
        this.color = "Red";
    }
    RedColor.prototype.getColor = function () {
        return this.color;
    };
    return RedColor;
}());
console.log(new ConcreteCar(new BlackColor()).paint());
console.log(new ConcreteCar(new RedColor()).paint());
// Мост — это структурный паттерн, который разделяет бизнес-логику или большой класс на несколько отдельных иерархий, которые потом можно развивать отдельно друг от друга.
