//  * Имеет смысл использовать паттерн Строитель только тогда, когда ваши продукты
//  * достаточно сложны и требуют обширной конфигурации.

interface Tank {
  tankType: T72 | ManualForT72;
  frame: string;
  tower: string;
  canon: string;
  setFrame(frame): void;
  setTower(tower): void;
  setCanon(canon): void;
  setExportVersion(frame, tower, canon): void;
}

class TankBuilder implements Tank {
  public frame: string;
  public tower: string;
  public canon: string;

  public tankType: T72;

  constructor() {
    this.tankType = new T72();
  }

  setFrame(frame): void {
    this.tankType.frame = frame;
  }

  setTower(tower): void {
    this.tankType.tower = tower;
  }

  setCanon(canon): void {
    this.tankType.canon = canon;
  }

  setExportVersion(frame, tower, canon): void {
    this.tankType.frame = frame + "M";
    this.tankType.tower = tower + "M";
    this.tankType.canon = canon + "M";
  }

  getResault(): T72 {
    return this.tankType;
  }
}

class T72 {
  public engine: string;
  public tracks: string;

  public frame: string;
  public tower: string;
  public canon: string;

  constructor() {
    this.engine = "diesel engine";
    this.tracks = "Default tracks";
  }

  testEngine(): boolean {
    const digit: number = Math.round(Math.random() * 10);
    let res: boolean;

    if (digit > 6) {
      res = true;
    } else {
      res = false;
    }

    return res;
  }
}

class ManualTankBuilder implements Tank {
  public frame: string;
  public tower: string;
  public canon: string;

  public tankType: ManualForT72;

  constructor() {
    this.tankType = new ManualForT72();
  }
  setFrame(frame): void {
    this.tankType.frame = frame;
  }

  setTower(tower): void {
    this.tankType.tower = tower;
  }

  setCanon(canon): void {
    this.tankType.canon = canon;
  }

  setExportVersion(frame, tower, canon): void {
    this.tankType.frame = frame + "M";
    this.tankType.tower = tower + "M";
    this.tankType.canon = canon + "M";
  }

  getResault(): ManualForT72 {
    return this.tankType;
  }
}

class ManualForT72 {
  public author: string;
  public year: number;

  public frame: string;
  public tower: string;
  public canon: string;

  constructor() {
    this.author = "author1";
    this.year = 1973;
  }

  testAuthor(): boolean {
    const digit: number = Math.round(Math.random() * 10);
    let res: boolean;

    if (digit > 6) {
      res = true;
    } else {
      res = false;
    }

    return res;
  }
}

function makeT72(): void {
  const t72DefBuilder = new TankBuilder();
  t72DefBuilder.setFrame("Default frame");
  t72DefBuilder.setCanon("Default Canon");
  t72DefBuilder.setTower("Default tower");
  const t72Def = t72DefBuilder.getResault();
  console.table(t72Def);

  const t72MBuilder = new TankBuilder();
  t72MBuilder.setFrame("modified frame");
  t72MBuilder.setCanon("modified Canon");
  t72MBuilder.setTower("modified tower");
  const t72M = t72MBuilder.getResault();
  console.table(t72M);

  const t72DefManualBuilder = new ManualTankBuilder();
  t72DefManualBuilder.setFrame("This is a def frame");
  t72DefManualBuilder.setCanon("This is a def Canon");
  t72DefManualBuilder.setTower("This is a def tower");
  const t72ManualDef = t72DefManualBuilder.getResault();
  console.table(t72ManualDef);

  const t72ModBuilder = new ManualTankBuilder();
  t72ModBuilder.setFrame("This is a modified frame");
  t72ModBuilder.setCanon("This is a modified Canon");
  t72ModBuilder.setTower("This is a modified tower");
  const t72ManualM = t72ModBuilder.getResault();
  console.table(t72ManualM);
}

makeT72();
