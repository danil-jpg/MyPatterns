//  * Имеет смысл использовать паттерн Строитель только тогда, когда ваши продукты
//  * достаточно сложны и требуют обширной конфигурации.
var TankBuilder = /** @class */ (function () {
    function TankBuilder() {
    }
    TankBuilder.prototype.setFrame = function (frame) {
        this.frame = frame;
        return this;
    };
    TankBuilder.prototype.setTower = function (tower) {
        this.tower = tower;
        return this;
    };
    TankBuilder.prototype.setCanon = function (canon) {
        this.canon = canon;
        return this;
    };
    TankBuilder.prototype.getResault = function () {
        return this;
    };
    return TankBuilder;
}());
var ManualTankBuilder = /** @class */ (function () {
    function ManualTankBuilder() {
    }
    ManualTankBuilder.prototype.setFrame = function (frame) {
        this.frame = frame;
        return this;
    };
    ManualTankBuilder.prototype.setTower = function (tower) {
        this.tower = tower;
        return this;
    };
    ManualTankBuilder.prototype.setCanon = function (canon) {
        this.canon = canon;
        return this;
    };
    ManualTankBuilder.prototype.getResault = function () {
        return this;
    };
    return ManualTankBuilder;
}());
var T72 = /** @class */ (function () {
    function T72() {
    }
    return T72;
}());
var ManualForT72 = /** @class */ (function () {
    function ManualForT72() {
    }
    return ManualForT72;
}());
var t72Def = new TankBuilder().setFrame("Defaul frame").setTower("T64 Tower").setCanon("T72 canon").getResault();
console.table(t72Def);
var t72ManualDef = new TankBuilder().setFrame("There is a def frame").setTower("There is a t64 tower").setCanon("There is a def T72 canon").getResault();
console.table(t72ManualDef);
var t72M = new TankBuilder().setFrame("modification frame ").setTower("T64 Tower modification").setCanon("T72 canon modification").getResault();
console.table(t72M);
var t72ManualM = new TankBuilder().setFrame("There is a modification  frame").setTower("There is a modification t64 tower").setCanon("There is a modification T72 canon").getResault();
console.table(t72ManualM);
// interface TankBuilderInterface {
//   frameType: string;
//   tankType: string;
//   canonType: string;
//   updateFrame(frame): object;
//   updateTankType(tower): object;
//   updateTankCanon(canon): object;
// }
// class AnyTankBuilder implements TankBuilderInterface {
//   public frameType: string;
//   public tankType: string;
//   public canonType: string;
//   public tank: object;
//   constructor(tank, frame, tankType, canonType) {
//     this.tank = tank;
//     this.frameType = frame;
//     this.tankType = tankType;
//     this.canonType = canonType;
//   }
//   updateFrame(frame: string = "default frame") {
//     const resF = `There is a ${frame} frame`;
//     this.frameType = resF;
//     return this;
//   }
//   updateTankType(tower: string = "default tower") {
//     const resT = `There is a ${tower} tower`;
//     this.tankType = resT;
//     return this;
//   }
//   updateTankCanon(canon: string = "default canon") {
//     const resC = `There is a ${canon} canon`;
//     this.canonType = resC;
//     return this;
//   }
// }
// class T72 {}
// Класс anyTank - то от,чего строитель спасает
// const t72 = new AnyTankBuilder("t72", "40mm", "medium tank", "defaultCanon");
// Слишком много свойств в конструкторе + нужно помнить порядок.
