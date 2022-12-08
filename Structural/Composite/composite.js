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
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.getPrice = function () {
        return this.price || 0;
    };
    Component.prototype.getName = function () {
        return this.name;
    };
    return Component;
}());
var Item1 = /** @class */ (function (_super) {
    __extends(Item1, _super);
    function Item1() {
        var _this = _super.call(this) || this;
        _this.price = 24;
        return _this;
    }
    return Item1;
}(Component));
var Item2 = /** @class */ (function (_super) {
    __extends(Item2, _super);
    function Item2() {
        var _this = _super.call(this) || this;
        _this.price = 22;
        return _this;
    }
    return Item2;
}(Component));
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        var _this = _super.call(this) || this;
        _this.items = [];
        return _this;
    }
    Box.prototype.add = function (item) {
        // this.items.push(item);
        console.log(this.items);
    };
    Box.prototype.getPrice = function () {
        return this.items.map(function (equipment) { return equipment.getPrice(); }).reduce(function (a, b) { return a + b; });
    };
    return Box;
}(Component));
var box = new Box();
box.add(new Item1());
console.log(box.add(new Item2()));
// console.log(new Item2().price);
