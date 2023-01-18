// Посредник — это поведенческий паттерн проектирования,
// который позволяет уменьшить связанность множества классов между собой,
// благодаря перемещению этих связей в один класс-посредник.

// На рефакторинг гуру пример максимально не понятен - https://www.youtube.com/watch?v=tWZfcmmGf1w будет попроще,но проблема в том,
// что по факту,это пережеванный материал с реф. гуру,так-что как-то так :|

interface Imediator {
  orderMonitor(customer, monitorType, info): void;
  addToCustomerList(name): void;
  getCustomerList(): string[];
}

class MonitorParts {
  makeMonitor(monitorType: string): string {
    console.log(`${monitorType} was created`);
    return "Common";
  }
}

class MonitorPartsSpec {
  makeMonitor(monitorType: string): string {
    console.log(`${monitorType} was created`);
    return "Spec";
  }
}

class OfficialDistributor implements Imediator {
  public customers: string[];
  constructor() {
    this.customers = [];
  }

  orderMonitor(customer: ICustomer, monitorType: string, info: string = "no add info"): void {
    const monitorParts = new MonitorParts();
    const monitorPartsSpec = new MonitorPartsSpec();

    if (monitorType === "Common") {
      monitorParts.makeMonitor(monitorType);
      const name = customer.getName();

      console.log(`Order name: ${name}. Order monitor is ${monitorType}`);
      console.log(`Additional info: ${info}`);
      this.addToCustomerList(name);
    } else if (monitorType === "Spec") {
      monitorPartsSpec.makeMonitor(monitorType);

      const name = customer.getName();

      console.log(`Order name: ${name}. Order monitor is ${monitorType}`);
      console.log(`Additional info: ${info}`);
      this.addToCustomerList(name);
    }
  }

  addToCustomerList(name): void {
    this.customers.push(name);
  }

  getCustomerList(): string[] {
    return this.customers;
  }
}

interface ICustomer {
  getName(): void;
  makeOrder(monitor, info): void;
}

class Customer implements ICustomer {
  public name: string;
  public officialDistributor: Imediator;

  constructor(name, officialDistributor) {
    this.name = name;
    this.officialDistributor = officialDistributor;
  }

  getName(): string {
    return this.name;
  }

  makeOrder(monitor, info): void {
    this.officialDistributor.orderMonitor(this, monitor, info);
  }
}

const mediator = new OfficialDistributor();

const commonCustomer = new Customer("Default", mediator);
const specCustomer = new Customer("High Contrast", mediator);

commonCustomer.makeOrder("Common", "It should be pink");
specCustomer.makeOrder("Spec", "It should be able to see ghosts");

console.log(mediator.getCustomerList());
