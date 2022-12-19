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
// Розетки типа С - Европейские (используются в Украине),розетки типа Ф - используются в Америке.
// Нужно разетку С адаптировать под Ф (из Украины в Америку).
var RechargerC = /** @class */ (function () {
    function RechargerC() {
    }
    RechargerC.prototype.rechargePhoneC = function () {
        console.log("Your phone was recharged with C-soket");
    };
    return RechargerC;
}());
var RechargerF = /** @class */ (function () {
    function RechargerF() {
    }
    RechargerF.prototype.rechargePhoneF = function () {
        console.log("Your phone was recharged with F-soket");
    };
    return RechargerF;
}());
var SocketCAdapter = /** @class */ (function (_super) {
    __extends(SocketCAdapter, _super);
    function SocketCAdapter(soketC) {
        var _this = _super.call(this) || this;
        _this.soketC = soketC;
        return _this;
    }
    SocketCAdapter.prototype.rechargePhoneF = function () {
        console.log("".concat(this.soketC.rechargePhoneC(), " thanks to RechargerC Adapter"));
    };
    return SocketCAdapter;
}(RechargerF));
var soketC = new RechargerC();
var soketF = new RechargerF();
var soketCAdapter = new SocketCAdapter(new RechargerC());
console.log(soketC.rechargePhoneC());
console.log(soketF.rechargePhoneF());
console.log(soketCAdapter.rechargePhoneF());
// Адаптер — это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.
// Вопросы: так с чем в итоге нужно работать,с самим адаптером или целевым классом ,или дальше по цепочке.
// Можно ли наследовать адаптер или же просто возвращать значение с адаптера (поля,метода)
