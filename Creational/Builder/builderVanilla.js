//  * Имеет смысл использовать паттерн Строитель только тогда, когда ваши продукты
//  * достаточно сложны и требуют обширной конфигурации.

class Tank {
    constructor(){
    }
    setFrame(){

    };
    setTower(){

    };
    setCanon(){
    };
  }
  
  class TankBuilder extends Tank {
  
    constructor() {
        super()

    }
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
  
    getResault() {
      return this;
    }
  }
  
  class ManualTankBuilder extends Tank {
    constructor() {
        super()

    }
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
  
    getResault()  {
      return this;
    }
  }
  
  class T72 {}
  
  class ManualForT72 {}
  
  const t72Def = new TankBuilder().setFrame("Defaul frame").setTower("T64 Tower").setCanon("T72 canon").getResault();
  console.table(t72Def);
  
  const t72ManualDef = new TankBuilder().setFrame("There is a def frame").setTower("There is a t64 tower").setCanon("There is a def T72 canon").getResault();
  console.table(t72ManualDef);
  
  const t72M = new TankBuilder().setFrame("modification frame ").setTower("T64 Tower modification").setCanon("T72 canon modification").getResault();
  console.table(t72M);
  
  const t72ManualM = new TankBuilder().setFrame("There is a modification  frame").setTower("There is a modification t64 tower").setCanon("There is a modification T72 canon").getResault();
  console.table(t72ManualM);
  

  