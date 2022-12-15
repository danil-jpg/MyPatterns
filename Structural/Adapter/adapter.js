// Розетки типа С - Европейские (используются в Украине),розетки типа Ф - используются в Америке.
// Нужно разетку С адаптировать под Ф (из Украины в Америку).
var SocketC = /** @class */ (function () {
    function SocketC() {
    }
    SocketC.prototype.rechargePhoneC = function () {
        console.log("Your phone was recharged with C-soket");
    };
    return SocketC;
}());
var SoketF = /** @class */ (function () {
    function SoketF() {
    }
    SoketF.prototype.rechargePhoneF = function () {
        console.log("Your phone was recharged with F-soket");
    };
    return SoketF;
}());
var SocketCAdapter = /** @class */ (function () {
    function SocketCAdapter(soketC) {
        this.soketC = soketC;
    }
    SocketCAdapter.prototype.rechargePhoneF = function () {
        console.log("".concat(this.soketC.rechargePhoneC(), " thanks to SoketC Adapter"));
    };
    return SocketCAdapter;
}());
var soketC = new SocketC();
var soketF = new SoketF();
var soketCAdapter = new SocketCAdapter(new SocketC());
console.log(soketC.rechargePhoneC());
console.log(soketF.rechargePhoneF());
console.log(soketCAdapter.rechargePhoneF());
// Адаптер — это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.
// Вопросы: так с чем в итоге нужно работать,с самим адаптером или целевым классом ,или дальше по цепочке.
// Можно ли наследовать адаптер или же просто возвращать значение с адаптера (поля,метода)
