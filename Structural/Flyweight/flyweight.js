// Легковес — это структурный паттерн, который экономит память, благодаря разделению общего состояния,
//  вынесенного в один объект, между множеством объектов.
var ToySoldierFlyweight = /** @class */ (function () {
    function ToySoldierFlyweight(color, position, price) {
        this.color = color;
        this.position = position;
        this.price = price;
    }
    return ToySoldierFlyweight;
}());
// Внутренее состояние
var ToySoldier = /** @class */ (function () {
    function ToySoldier(toySolderShared, sn) {
        this.toySolderShared = toySolderShared;
        this.color = toySolderShared.color;
        this.position = toySolderShared.position;
        this.price = toySolderShared.price;
        this.sn = sn;
    }
    return ToySoldier;
}());
// Внешнее состояние
var ToySoldierFlyweightFactory = /** @class */ (function () {
    function ToySoldierFlyweightFactory() {
        this.collection = {};
    }
    ToySoldierFlyweightFactory.prototype.createRed = function (color) {
        var collection = this.collection[color];
        if (collection) {
            return collection;
        }
        else {
            this.collection[color] = new ToySoldierFlyweight("Red", "Attacking", 0.7);
            return this.collection[color];
        }
    };
    ToySoldierFlyweightFactory.prototype.createGreen = function (color) {
        var collection = this.collection[color];
        if (collection) {
            return collection;
        }
        else {
            this.collection[color] = new ToySoldierFlyweight("Green", "Defending", 0.5);
            return this.collection[color];
        }
    };
    return ToySoldierFlyweightFactory;
}());
// Внутренее состояние
var toySoldiersPack = [];
var soldierFactory = new ToySoldierFlyweightFactory();
for (var i = 0; i < 100; i++) {
    var res = i % 2;
    var soldier = void 0;
    if (res === 0) {
        var soldier_1 = new ToySoldier(soldierFactory.createRed("Red"), i);
        toySoldiersPack.push(soldier_1);
    }
    else {
        var soldier_2 = new ToySoldier(soldierFactory.createGreen("Green"), i);
        toySoldiersPack.push(soldier_2);
    }
}
console.log(toySoldiersPack);
