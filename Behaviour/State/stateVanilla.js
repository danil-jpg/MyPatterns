// Состояние — это поведенческий паттерн, позволяющий динамически изменять поведение объекта при смене его состояния.

// Поведения, зависящие от состояния, переезжают в отдельные классы.
//  Первоначальный класс хранит ссылку на один из таких объектов-состояний и делегирует ему работу.

// Состояния гусеницы : яццо - гусеница - куколка - бабочка

// Вопрос : необходим ли метод переключения на следущий класс (у меня он назван changeState)

class LifeLoop {
  
	getState(state) {
	  this.state = state;
	  this.state.thisState();
	}
  
	doStateAction(state) {
	  this.state = state;
	  console.log(`${this.state.thisState()},this is a ${this.state.phase} phase`);
	}
  
	changeState(nextState) {
	  this.doStateAction(nextState);
	}
  }
  

  class Egg  {

  
	thisState() {
	  return "This is an egg";
	}
  
	doSomething(){
	  return "You are an egg,you can do nothing with it";
	}
  }
  
  class Caterpillar  {
  
	thisState() {
	  return "This is a Caterpillar";
	}
  
	doSomething() {
	  return "You can eat a leaf";
	}
  }
  
  class Pupa  {
  
	thisState() {
	  return "This is a Pupa";
	}
  
	doSomething() {
	  return "You are a pupa,you can do nothing with it,again";
	}
  }
  
  class Butterfly  {
  
	thisState() {
	  return "This is a butterfly";
	}
  
	doSomething() {
	  return "You are a butterfly,you can fly!";
	}
  }
  
  const lifeLoop = new LifeLoop();
  const egg = new Egg();
  const caterpillar = new Caterpillar();
  const pupa = new Pupa();
  const butterfly = new Butterfly();
  
  lifeLoop.doStateAction(egg);
  lifeLoop.changeState(caterpillar);
  lifeLoop.changeState(pupa);
  lifeLoop.changeState(butterfly);
  