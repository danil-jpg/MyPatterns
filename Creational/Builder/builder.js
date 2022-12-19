//  * Имеет смысл использовать паттерн Строитель только тогда, когда ваши продукты
//  * достаточно сложны и требуют обширной конфигурации.
var TankBuilder = /** @class */ (function () {
    function TankBuilder() {
        this.tankType = new T72();
    }
    TankBuilder.prototype.setFrame = function (frame) {
        this.tankType.frame = frame;
    };
    TankBuilder.prototype.setTower = function (tower) {
        this.tankType.tower = tower;
    };
    TankBuilder.prototype.setCanon = function (canon) {
        this.tankType.canon = canon;
    };
    TankBuilder.prototype.setExportVersion = function (frame, tower, canon) {
        this.tankType.frame = frame + "M";
        this.tankType.tower = tower + "M";
        this.tankType.canon = canon + "M";
    };
    TankBuilder.prototype.getResault = function () {
        return this.tankType;
    };
    return TankBuilder;
}());
var T72 = /** @class */ (function () {
    function T72() {
        this.engine = "diesel engine";
        this.tracks = "Default tracks";
    }
    T72.prototype.testEngine = function () {
        var digit = Math.round(Math.random() * 10);
        var res;
        if (digit > 6) {
            res = true;
        }
        else {
            res = false;
        }
        return res;
    };
    return T72;
}());
var ManualTankBuilder = /** @class */ (function () {
    function ManualTankBuilder() {
        this.tankType = new ManualForT72();
    }
    ManualTankBuilder.prototype.setFrame = function (frame) {
        this.tankType.frame = frame;
    };
    ManualTankBuilder.prototype.setTower = function (tower) {
        this.tankType.tower = tower;
    };
    ManualTankBuilder.prototype.setCanon = function (canon) {
        this.tankType.canon = canon;
    };
    ManualTankBuilder.prototype.setExportVersion = function (frame, tower, canon) {
        this.tankType.frame = frame + "M";
        this.tankType.tower = tower + "M";
        this.tankType.canon = canon + "M";
    };
    ManualTankBuilder.prototype.getResault = function () {
        return this.tankType;
    };
    return ManualTankBuilder;
}());
var ManualForT72 = /** @class */ (function () {
    function ManualForT72() {
        this.author = "author1";
        this.year = 1973;
    }
    ManualForT72.prototype.testAuthor = function () {
        var digit = Math.round(Math.random() * 10);
        var res;
        if (digit > 6) {
            res = true;
        }
        else {
            res = false;
        }
        return res;
    };
    return ManualForT72;
}());
function makeT72() {
    var t72DefBuilder = new TankBuilder();
    t72DefBuilder.setFrame("Default frame");
    t72DefBuilder.setCanon("Default Canon");
    t72DefBuilder.setTower("Default tower");
    var t72Def = t72DefBuilder.getResault();
    console.table(t72Def);
    var t72MBuilder = new TankBuilder();
    t72MBuilder.setFrame("modified frame");
    t72MBuilder.setCanon("modified Canon");
    t72MBuilder.setTower("modified tower");
    var t72M = t72MBuilder.getResault();
    console.table(t72M);
    var t72DefManualBuilder = new ManualTankBuilder();
    t72DefManualBuilder.setFrame("This is a def frame");
    t72DefManualBuilder.setCanon("This is a def Canon");
    t72DefManualBuilder.setTower("This is a def tower");
    var t72ManualDef = t72DefManualBuilder.getResault();
    console.table(t72ManualDef);
    var t72ModBuilder = new ManualTankBuilder();
    t72ModBuilder.setFrame("This is a modified frame");
    t72ModBuilder.setCanon("This is a modified Canon");
    t72ModBuilder.setTower("This is a modified tower");
    var t72ManualM = t72ModBuilder.getResault();
    console.table(t72ManualM);
}
makeT72();
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
