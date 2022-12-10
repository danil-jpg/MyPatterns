// Легковес — это структурный паттерн, который экономит память, благодаря разделению общего состояния,
//  вынесенного в один объект, между множеством объектов.

class Tree {
  private type;
  constructor(type) {
    this.type = type;
  }
}

// Легковес - класс дерева

class TreeFactory {
  private models;
  constructor() {
    this.models = {};
  }

  create(name): Tree {
    let model = this.models[name];
    if (model) {
      return model;
    } else {
      this.models[name] = new Tree(name);
      return this.models[name];
    }
  }
}

const treeFac = new TreeFactory();

const oak = treeFac.create("Oak");
const birch = treeFac.create("Birch");
const oldOak = treeFac.create("Oak");
