// Снимок — это поведенческий паттерн проектирования,
// который позволяет сохранять и восстанавливать прошлые состояния объектов, не раскрывая подробностей их реализации.

class SavePlace {
  
	constructor(x, y, z, inventory, health) {
	  this.x = x;
	  this.y = y;
	  this.z = z;
	  this.inventory = inventory;
	  this.health = health;
	}
  
	changePos(x, y, z) {
	  this.x = x;
	  this.y = y;
	  this.z = z;
	}
  
	save()  {
	  const memento = new Memento([this.x, this.y, this.z, this.inventory, this.health]);
	  return memento;
	}
  
	savePrev(memento) {
	  memento.value;
	  return memento.value;
	}
  }
  
  class Memento  {
	constructor(value) {
	  this.value = value;
	}
  }
  
  class Caretaker {
  
	constructor() {
	  this.values = [];
	}
  
	addMemento(memento) {
	  this.values.push(memento);
	}
  
	getMemento(index) {
	  return this.values[index];
	}
  }
  const caretaker1 = new Caretaker();
  
  const saveTest1 = new SavePlace(10, 1, 1, { weapon: "sword" }, 100);
  caretaker1.addMemento(saveTest1.save());
  console.log(caretaker1.getMemento(0));
  
  saveTest1.changePos(2332, 124, 422);
  caretaker1.addMemento(saveTest1.save());
  
  console.log(caretaker1.getMemento(1));
  