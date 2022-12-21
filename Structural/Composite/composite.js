// Компоновщик — это структурный паттерн проектирования, который позволяет сгруппировать множество объектов в древовидную структуру, а затем работать с ней так, как будто это единичный объект.
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
// General - Major - officer - soldier
var CommonClass = /** @class */ (function () {
    function CommonClass() {
    }
    // Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:
    CommonClass.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    CommonClass.prototype.getParent = function () {
        return this.parent;
    };
    CommonClass.prototype.doesHaveAttachedSoldiers = function () {
        return false;
    };
    CommonClass.prototype.addSoldier = function (soldier) { };
    return CommonClass;
}());
var Officer = /** @class */ (function (_super) {
    __extends(Officer, _super);
    function Officer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soldierClass = [];
        return _this;
    }
    Officer.prototype.addSoldier = function (soldier) {
        this.soldierClass.push(soldier);
        soldier.setParent(this);
    };
    Officer.prototype.doesHaveAttachedSoldiers = function () {
        if (this.soldierClass[0]) {
            return true;
        }
        else {
            return false;
        }
    };
    Officer.prototype.getStatus = function () {
        var res = [];
        for (var key in this.soldierClass) {
            res.push(this.soldierClass[key].getStatus());
        }
        return res;
    };
    return Officer;
}(CommonClass));
var PrivateSoldier = /** @class */ (function (_super) {
    __extends(PrivateSoldier, _super);
    function PrivateSoldier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrivateSoldier.prototype.getStatus = function () {
        var random = Math.round(Math.random() * 10);
        var numOfSoldier = Math.round(Math.random() * 10);
        var order;
        if (random * numOfSoldier > 15) {
            order = "This order was completed successfully";
        }
        else {
            order = "This order was failed";
        }
        var res = { numOfSoldier: numOfSoldier, order: order };
        return res;
    };
    return PrivateSoldier;
}(CommonClass));
var general = new Officer();
var officerEmpty = new Officer();
var officerAttached = new Officer();
var private1 = new PrivateSoldier();
var private2 = new PrivateSoldier();
var private3 = new PrivateSoldier();
officerAttached.addSoldier(private1);
officerAttached.addSoldier(private2);
officerAttached.addSoldier(private3);
general.addSoldier(officerEmpty);
general.addSoldier(officerAttached);
console.log(general.getStatus());
// console.log(new PrivateSoldier().getStatus());
