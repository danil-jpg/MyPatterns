//  * Имеет смысл использовать паттерн Строитель только тогда, когда ваши продукты
//  * достаточно сложны и требуют обширной конфигурации.


  
  class TankBuilder   {

  
	constructor() {
	  this.tankType = new T72();
	}
  
	setFrame(frame){
	  this.tankType.frame = frame;
	}
  
	setTower(tower) {
	  this.tankType.tower = tower;
	}
  
	setCanon(canon) {
	  this.tankType.canon = canon;
	}
  
	setExportVersion(frame, tower, canon) {
	  this.tankType.frame = frame + "M";
	  this.tankType.tower = tower + "M";
	  this.tankType.canon = canon + "M";
	}
  
	getResault(){
	  return this.tankType;
	}
  }
  
  class T72 {
	
  
	constructor() {
	  this.engine = "diesel engine";
	  this.tracks = "Default tracks";
	}
  
	testEngine() {
	  const digit = Math.round(Math.random() * 10);
	  let res ;
  
	  if (digit > 6) {
		res = true;
	  } else {
		res = false;
	  }
  
	  return res;
	}
  }
  
  class ManualTankBuilder   {

  
	constructor() {
	  this.tankType = new ManualForT72();
	}
	setFrame(frame)   {
	  this.tankType.frame = frame;
	}
  
	setTower(tower)   {
	  this.tankType.tower = tower;
	}
  
	setCanon(canon)   {
	  this.tankType.canon = canon;
	}
  
	setExportVersion(frame, tower, canon)   {
	  this.tankType.frame = frame + "M";
	  this.tankType.tower = tower + "M";
	  this.tankType.canon = canon + "M";
	}
  
	getResault() {
	  return this.tankType;
	}
  }
  
  class ManualForT72 {
	  author   ;
	  year    ;
  
	  frame   ;
	  tower   ;
	  canon   ;
  
	constructor() {
	  this.author = "author1";
	  this.year = 1973;
	}
  
	testAuthor() {
	  const digit     = Math.round(Math.random() * 10);
	  let res;
  
	  if (digit > 6) {
		res = true;
	  } else {
		res = false;
	  }
  
	  return res;
	}
  }
  
  function makeT72()   {
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
  