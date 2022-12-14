//  * Имеет смысл использовать паттерн Строитель только тогда, когда ваши продукты
//  * достаточно сложны и требуют обширной конфигурации.

interface Tank {
  tankType: T72;
  frame: string;
  tower: string;
  canon: string;
  setFrame(frame): any;
  setTower(tower): any;
  setCanon(canon): any;
}

class TankBuilder implements Tank {
  public frame: string;
  public tower: string;
  public canon: string;

  public tankType: T72;

  constructor() {}
  setFrame(frame) {
    this.frame = frame;
    return this;
  }

  setTower(tower) {
    this.tower = tower;
    return this;
  }

  setCanon(canon) {
    this.canon = canon;
    return this;
  }

  getResault(): T72 {
    return this;
  }
}

class ManualTankBuilder implements Tank {
  public frame: string;
  public tower: string;
  public canon: string;

  public tankType: ManualForT72;

  constructor() {}
  setFrame(frame) {
    this.frame = frame;
    return this;
  }

  setTower(tower) {
    this.tower = tower;
    return this;
  }

  setCanon(canon) {
    this.canon = canon;
    return this;
  }

  getResault(): ManualForT72 {
    return this;
  }
}

class T72 {
  private date: number;

  setDate(date): object {
    this.date = date;
    return this;
  }
}

class ManualForT72 {
  private author: string;

  setAuthor(author): object {
    this.author = author;
    return this;
  }
}

const t72Def = new TankBuilder().setFrame("Defaul frame").setTower("T64 Tower").setCanon("T72 canon").getResault();
console.table(t72Def);

const t72ManualDef = new TankBuilder().setFrame("There is a def frame").setTower("There is a t64 tower").setCanon("There is a def T72 canon").getResault();
console.table(t72ManualDef);

const t72M = new TankBuilder().setFrame("modification frame ").setTower("T64 Tower modification").setCanon("T72 canon modification").getResault();
console.table(t72M);

const t72ManualM = new TankBuilder().setFrame("There is a modification  frame").setTower("There is a modification t64 tower").setCanon("There is a modification T72 canon").getResault();
console.table(t72ManualM);

// interface TankBuilderInterface {
//   frameType: string;
//   tankType: string;
//   canonType: string;

//   updateFrame(frame): object;
//   updateTankType(tower): object;
//   updateTankCanon(canon): object;
// }

// class AnyTankBuilder implements TankBuilderInterface {
//   public frameType: string;
//   public tankType: string;
//   public canonType: string;
//   public tank: object;

//   constructor(tank, frame, tankType, canonType) {
//     this.tank = tank;
//     this.frameType = frame;
//     this.tankType = tankType;
//     this.canonType = canonType;
//   }

//   updateFrame(frame: string = "default frame") {
//     const resF = `There is a ${frame} frame`;
//     this.frameType = resF;
//     return this;
//   }
//   updateTankType(tower: string = "default tower") {
//     const resT = `There is a ${tower} tower`;
//     this.tankType = resT;
//     return this;
//   }
//   updateTankCanon(canon: string = "default canon") {
//     const resC = `There is a ${canon} canon`;
//     this.canonType = resC;
//     return this;
//   }
// }

// class T72 {}

// Класс anyTank - то от,чего строитель спасает
// const t72 = new AnyTankBuilder("t72", "40mm", "medium tank", "defaultCanon");

// Слишком много свойств в конструкторе + нужно помнить порядок.
