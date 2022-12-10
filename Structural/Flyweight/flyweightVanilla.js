class Tree {
	constructor(type) {
	  this.type = type;
	}
  }
  
  class TreeFactory {
	constructor() {
	  this.models = {};
	}
  
	create(name) {
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
  