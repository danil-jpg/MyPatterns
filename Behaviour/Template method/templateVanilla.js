// Шаблонный метод — это поведенческий паттерн проектирования, который определяет скелет алгоритма,
//  перекладывая ответственность за некоторые его шаги на подклассы.
//  Паттерн позволяет подклассам переопределять шаги алгоритма, не меняя его общей структуры.

// По сути это скелет алгоритма.

 class ClosetTemplate {
	build() {
	  this.makeBottom();
	  this.makeDoor();
	  this.makeSides();
	  this.makeTop();
	}
  
	makeBottom() {
	  console.log(`This closet has standart bottom`);
	}
  
	makeDoor() {
	  console.log(`This closet has standart door`);
	}
  
	makeSides() {
	  console.log(`This closet has standart sides`);
	}
  
	makeTop() {
	  console.log(`This closet has standart top`);
	}
  }
  
  class ClosetWithHighTop extends ClosetTemplate {
	makeTop() {
	  console.log(`This closet has high top`);
	}
  }
  
  class ClosetWithYellowSides extends ClosetTemplate {
	makeSides() {
	  console.log(`This closet has yellow sides`);
	}
  }
  
  const closetWithHighTop = new ClosetWithHighTop();
  
  const closetWithYellowSides = new ClosetWithYellowSides();
  
  closetWithHighTop.build();
  closetWithYellowSides.build();
  