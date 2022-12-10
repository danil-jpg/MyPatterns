// Легковес — это структурный паттерн, который экономит память, благодаря разделению общего состояния,
//  вынесенного в один объект, между множеством объектов.
// class Tree {
//   private type: string;
//   constructor(type) {
//     this.type = type;
//   }
// }
// class TreeFactory {
//   private name: any;
//   constructor(name) {
// 	this.name = name
//   }
// }
var Auto = /** @class */ (function () {
    function Auto(model) {
        this.model = model;
    }
    return Auto;
}());
var AutoFactory = /** @class */ (function () {
    function AutoFactory() {
        this.models = {};
    }
    AutoFactory.prototype.create = function (name) {
        var model = this.models[name];
        console.log(model);
        if (model)
            return model;
        this.models[name] = new Auto(name);
        return this.models[name];
    };
    AutoFactory.prototype.getModels = function () {
        console.log(this.models);
    };
    return AutoFactory;
}());
var factory = new AutoFactory();
var bmw = factory.create("BMW");
var audi = factory.create("Audi");
var tesla = factory.create("Tesla");
var teslaBlack = factory.create("Tesla");
console.log(factory.getModels());
var obj1 = {
    models: "SomeName"
};
// console.log(obj1.models["Somename"]);
