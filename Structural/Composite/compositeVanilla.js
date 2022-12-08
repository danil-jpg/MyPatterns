 class Component {
	 price ;
	 name;
  
	getPrice() {
	  return this.price || 0;
	}
  
	getName()  {
	  return this.name;
	}
  
  }
  
  class Item1 extends Component {
	constructor() {
	  super();
	  this.price = 24;
	}
  }
  
  class Item2 extends Component {
	constructor() {
	  super();
	  this.price = 22;
	}
  }
  
  class Box extends Component {
	constructor() {
	  super();
	  this.items = [];
	}
  
	add(item ) {
	  this.items.push(item);
	//   console.log(this.items);
	}
  
	getPrice() {
	  return this.items.map((equipment) => equipment.getPrice()).reduce((a, b) => a + b);
	}
  }
  
  const box = new Box();
  
  box.add(new Item1());
  
  console.log(box.getPrice());
  
  // console.log(new Item2().price);
  