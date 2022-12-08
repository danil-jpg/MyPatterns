// Декоратор — это структурный паттерн, который позволяет добавлять объектам новые поведения на лету, помещая их в объекты-обёртки.
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
// Декоратор позволяет оборачивать объекты бесчисленное количество раз благодаря тому, что и обёртки, и реальные оборачиваемые объекты имеют общий интерфейс.
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.numOfWheels = function () {
        return this.amountOfWheels;
    };
    return Car;
}());
var BMV = /** @class */ (function (_super) {
    __extends(BMV, _super);
    function BMV() {
        var _this = _super.call(this) || this;
        _this.price = 20000;
        _this.name = "BMW1";
        _this.amountOfWheels = 4;
        return _this;
    }
    return BMV;
}(Car));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        var _this = _super.call(this) || this;
        _this.price = 10000;
        _this.name = "someBike";
        _this.amountOfWheels = 2;
        return _this;
    }
    return Bike;
}(Car));
var Upgrade = /** @class */ (function (_super) {
    __extends(Upgrade, _super);
    function Upgrade(ConcreteCar) {
        var _this = _super.call(this) || this;
        _this.ConcreteCar = ConcreteCar;
        return _this;
    }
    Upgrade.prototype.upgrade = function () { };
    return Upgrade;
}(Car));
var UpdateEngine = /** @class */ (function (_super) {
    __extends(UpdateEngine, _super);
    function UpdateEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateEngine.prototype.upgrade = function () {
        return "Your ".concat(this.ConcreteCar.name, " has been upgraded and now costs ").concat(this.ConcreteCar.price + 1400);
    };
    return UpdateEngine;
}(Upgrade));
var UpdateWheels = /** @class */ (function (_super) {
    __extends(UpdateWheels, _super);
    function UpdateWheels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateWheels.prototype.upgrade = function () {
        return "Your ".concat(this.ConcreteCar.name, " has been upgraded and now costs ").concat(this.ConcreteCar.price + 1000);
    };
    return UpdateWheels;
}(Upgrade));
var bmvDef = new BMV();
var bikeDef = new Bike();
var upgradedBMW = new UpdateEngine(bmvDef);
var upgradeBike = new UpdateWheels(bikeDef);
console.log(upgradedBMW.upgrade());
console.log(upgradeBike.upgrade());
