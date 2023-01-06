// Посредник — это поведенческий паттерн проектирования,
// который позволяет уменьшить связанность множества классов между собой,
// благодаря перемещению этих связей в один класс-посредник.

// На рефакторинг гуру пример максимально не понятен - https://www.youtube.com/watch?v=tWZfcmmGf1w будет попроще,но проблема в том,
// что по факту,это пережеванный материал с реф. гуру,так-что как-то так :|


  
  class MonitorPlant {
	makeMonitor(monitorType){
	  console.log(`${monitorType} was created`);
	  return "Common";
	}
  }
  
  class MonitorPlantSpec {
	makeMonitor(monitorType) {
	  console.log(`${monitorType} was created`);
	  return "Spec";
	}
  }
  
  class OfficialDistributor {
	constructor() {
	  this.customers = [];
	}
  
	orderMonitor(customer, monitorType, info = "no add info") {
	  const monitorPlant = new MonitorPlant();
	  const monitorPlantSpec = new MonitorPlantSpec();
  
	  if (monitorType === "Common") {
		monitorPlant.makeMonitor(monitorType);
		const name = customer.getName();
  
		console.log(`Order name: ${name}. Order monitor is ${monitorType}`);
		console.log(`Additional info: ${info}`);
		this.addToCustomerList(name);
	  } else if (monitorType === "Spec") {
		monitorPlantSpec.makeMonitor(monitorType);
  
		const name = customer.getName();
  
		console.log(`Order name: ${name}. Order monitor is ${monitorType}`);
		console.log(`Additional info: ${info}`);
		this.addToCustomerList(name);
	  }
	}
  
	addToCustomerList(name) {
	  this.customers.push(name);
	}
  
	getCustomerList() {
	  return this.customers;
	}
  }
  

  class Customer {

  
	constructor(name, officialDistributor) {
	  this.name = name;
	  this.officialDistributor = officialDistributor;
	}
  
	getName() {
	  return this.name;
	}
  
	makeOrder(monitor, info) {
	  this.officialDistributor.orderMonitor(this, monitor, info);
	}
  }
  
  const mediator = new OfficialDistributor();
  
  const commonCustomer = new Customer("Default", mediator);
  const specCustomer = new Customer("High Contrast", mediator);
  
  commonCustomer.makeOrder("Common", "It should be pink");
  specCustomer.makeOrder("Spec", "It should be able to see ghosts");
  
  console.log(mediator.getCustomerList());
  