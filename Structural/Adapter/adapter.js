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
var TargetString = /** @class */ (function () {
    function TargetString() {
    }
    TargetString.prototype.getString = function () {
        return "12345";
    };
    return TargetString;
}());
var AdapteeNum = /** @class */ (function () {
    function AdapteeNum() {
    }
    AdapteeNum.prototype.getNum = function () {
        return 12345;
    };
    return AdapteeNum;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    Adapter.prototype.getConvertedString = function () {
        var result = "".concat(this.adaptee.getNum().toString(), " and some other symbols");
        return "".concat(result);
    };
    return Adapter;
}(TargetString));
var ImportantClass = /** @class */ (function () {
    function ImportantClass() {
        this.adaptee1 = new Adapter(new AdapteeNum()).getConvertedString();
    }
    ImportantClass.prototype.importantMethod = function () {
        return this.adaptee1;
    };
    return ImportantClass;
}());
var impClass = new ImportantClass().importantMethod();
console.log(impClass);
// Адаптер — это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.
// Вопросы: так с чем в итоге нужно работать,с самим адаптером или целевым классом.
// Нужно ли наследовать адаптер или же просто возвращать значение с адаптера (поля,метода)
