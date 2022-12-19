// Декоратор — это структурный паттерн, который позволяет добавлять объектам новые поведения на лету, помещая их в объекты-обёртки.

// Декоратор позволяет оборачивать объекты бесчисленное количество раз благодаря тому, что и обёртки, и реальные оборачиваемые объекты имеют общий интерфейс.

abstract class Car {
  public price;
  public name;
  public amountOfWheels;

  numOfWheels(): number {
    return this.amountOfWheels;
  }
}

class BMV extends Car {
  constructor() {
    super();
    this.price = 20000;
    this.name = "BMW1";
    this.amountOfWheels = 4;
  }
}

class Bike extends Car {
  constructor() {
    super();
    this.price = 10000;
    this.name = "someBike";
    this.amountOfWheels = 2;
  }
}

class Upgrade extends Car {
  public ConcreteCar: Car;

  constructor(ConcreteCar) {
    super();
    this.ConcreteCar = ConcreteCar;
  }

  upgrade() {}
}

class UpdateEngine extends Upgrade {
  upgrade(): string {
    return `Your ${this.ConcreteCar.name} has been upgraded and now costs ${this.ConcreteCar.price + 1400}`;
  }
}

class UpdateWheels extends Upgrade {
  upgrade(): string {
    return `Your ${this.ConcreteCar.name} has been upgraded and now costs ${this.ConcreteCar.price + 1000}`;
  }
}

const bmvDef = new BMV();
const bikeDef = new Bike();

const upgradedBMW = new UpdateEngine(bmvDef);
const upgradeBike = new UpdateWheels(bikeDef);

console.log(upgradedBMW.upgrade());
console.log(upgradeBike.upgrade());
