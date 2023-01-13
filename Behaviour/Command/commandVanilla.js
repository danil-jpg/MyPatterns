

class Visitor {
  
	makeOrder(command, order) {
	  this.command = command;
	  this.command.writeDownTheOrder(order);
  
	  return order;
	}
  }
  

  
  class Waiter1  {
  
	constructor(receiver) {
	  this.receiver = receiver;
	}
  
	writeDownTheOrder(order) {
	  this.receiver.cook(order);
	}
  }

  
  class Kitchener {
	cook(order){
	  console.log(`${order} is ready`);
	}
  
	doNothing() {
	  console.log(`Operation has been stopped`);
	}
  }
  
  const visitor = new Visitor();
  
  const kitchener = new Kitchener();
  
  const waiter = new Waiter1(kitchener);
  
  visitor.makeOrder(waiter, "Some fish chips");
  