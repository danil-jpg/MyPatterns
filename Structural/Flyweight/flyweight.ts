// Легковес — это структурный паттерн, который экономит память, благодаря разделению общего состояния,
//  вынесенного в один объект, между множеством объектов.

// class ToySoldier {
//   private color: string;
//   private position: string;
//   private price: number;

//   constructor(color, position, price ) {
//     this.color = color;
//     this.position = position;
//     this.price = price;
//   }
// }

// // Нужно создать 100 солдатиков

// let toySoldiersPack: any = [];
// for (let i = 0; i < 100; i++) {
//   let res: number = i % 2;
//   let soldier: any;
//   if (res === 0) {
//     let soldier = new ToySoldier("Red", "Attacking", 0.7);
//     toySoldiersPack.push(soldier);
//   } else {
//     let soldier = new ToySoldier("Green", "Defending", 0.5);
//     toySoldiersPack.push(soldier);
//   }
// }

// console.log(toySoldiersPack);

// У такого подхода есть проблема,а именно то,что все свойства повторяются

class ToySoldierFlyweight {
  private color: string;
  private position: string;
  private price: number;

  constructor(color, position, price) {
    this.color = color;
    this.position = position;
    this.price = price;
  }
}

// Внутренее состояние

class ToySoldier {
  private toySolderShared: ToySoldierFlyweightFactory;
  private sn: number;
  private color: string;
  private position: string;
  private price: number;

  constructor(toySolderShared, sn) {
    this.color = toySolderShared.color;
    this.position = toySolderShared.position;
    this.price = toySolderShared.price;
    this.sn = sn;
  }
}

// Внешнее состояние

class ToySoldierFlyweightFactory {
  private collection: object;

  constructor() {
    this.collection = {};
  }

  createRed(color: string): ToySoldierFlyweight {
    let collection = this.collection[color];
    if (collection) {
      return collection;
    } else {
      this.collection[color] = new ToySoldierFlyweight("Red", "Attacking", 0.7);
      return this.collection[color];
    }
  }

  createGreen(color: string): ToySoldierFlyweight {
    let collection = this.collection[color];
    if (collection) {
      return collection;
    } else {
      this.collection[color] = new ToySoldierFlyweight("Green", "Defending", 0.5);
      return this.collection[color];
    }
  }
}

// Внутренее состояние

let toySoldiersPack: any = [];
let soldierFactory = new ToySoldierFlyweightFactory();

for (let i = 0; i < 100; i++) {
  let res: number = i % 2;
  let soldier: any;
  if (res === 0) {
    let soldier = new ToySoldier(soldierFactory.createRed("Red"), i);
    toySoldiersPack.push(soldier);
  } else {
    let soldier = new ToySoldier(soldierFactory.createGreen("Green"), i);
    toySoldiersPack.push(soldier);
  }
}

console.log(toySoldiersPack);
