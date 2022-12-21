// Компоновщик — это структурный паттерн проектирования, который позволяет сгруппировать множество объектов в древовидную структуру, а затем работать с ней так, как будто это единичный объект.

// General - Major - officer - soldier
 class CommonClass {
	// Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:

  
	  setParent(parent)  {
	  this.parent = parent;
	}
  
	  getParent() {
	  return this.parent;
	}
  
	  doesHaveAttachedSoldiers() {
	  return false;
	}
  
	  addSoldier(soldier)  {}
  
	   getStatus(){}
  }
  
  class Officer extends CommonClass {
	constructor(){
		super()
		this.soldierClass = []
	}
	  addSoldier(soldier)  {
	  this.soldierClass.push(soldier);
	  soldier.setParent(this);
	}
  
	  doesHaveAttachedSoldiers() {
	  if (this.soldierClass[0]) {
		return true;
	  } else {
		return false;
	  }
	}
  
	getStatus() {
	  let res = [];
	  for (let key in this.soldierClass) {
		res.push(this.soldierClass[key].getStatus());
	  }
  
	  return res;
	}
  }
  
  class PrivateSoldier extends CommonClass {
	  getStatus() {
	  const random  = Math.round(Math.random() * 10);
	  const numOfSoldier  = Math.round(Math.random() * 10);
	  let order ;
  
	  if (random * numOfSoldier > 15) {
		order = "This order was completed successfully";
	  } else {
		order = "This order was failed";
	  }
  
	  const res = { numOfSoldier, order };
  
	  return res;
	}
  }
  
  const general = new Officer();
  const officerEmpty = new Officer();
  const officerAttached = new Officer();
  
  const private1 = new PrivateSoldier();
  const private2 = new PrivateSoldier();
  const private3 = new PrivateSoldier();
  
  officerAttached.addSoldier(private1);
  officerAttached.addSoldier(private2);
  officerAttached.addSoldier(private3);
  general.addSoldier(officerEmpty);
  general.addSoldier(officerAttached);
  
  console.log(general.getStatus());
  
  // console.log(new PrivateSoldier().getStatus());
  