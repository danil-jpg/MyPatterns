// Состояние — это поведенческий паттерн, позволяющий динамически изменять поведение объекта при смене его состояния.

// Поведения, зависящие от состояния, переезжают в отдельные классы.
//  Первоначальный класс хранит ссылку на один из таких объектов-состояний и делегирует ему работу.

// Состояния гусеницы : яццо - гусеница - куколка - бабочка

// Очень важным нюансом, отличающим этот паттерн от Стратегии, является то,
//  что и контекст, и сами конкретные состояния могут знать друг о друге и инициировать переходы от одного состояния к другому.

// Скорее всего с этим паттерном налажал,уж больно он напоминает стратегию.

class LifeLoop {
  public state: IlifeState;

  getState(state: IlifeState): void {
    this.state = state;
    this.state.thisState();
  }

  doStateAction(state: IlifeState): void {
    this.state = state;
    console.log(`${this.state.thisState()},this is a ${this.state.phase} phase`);
  }

  changeState(nextState: IlifeState): void {
    this.doStateAction(nextState);
  }
}

interface IlifeState {
  stage: string;
  phase: number;
  thisState(): string;
  doSomething(): string;
}

class Egg implements IlifeState {
  public stage: string = "Egg";
  public phase: number = 1;

  thisState() {
    return "This is an egg";
  }

  doSomething(): string {
    return "You are an egg,you can do nothing with it";
  }
  changeToNextState(): IlifeState {
    return new Caterpillar();
  }
}

class Caterpillar implements IlifeState {
  public stage: string = "Caterpillar";
  public phase: number = 2;

  thisState() {
    return "This is a Caterpillar";
  }

  doSomething(): string {
    return "You can eat a leaf";
  }
  changeToNextState(): IlifeState {
    return new Pupa();
  }
}

class Pupa implements IlifeState {
  public stage: string = "Pupa";
  public phase: number = 3;

  thisState() {
    return "This is a Pupa";
  }

  doSomething(): string {
    return "You are a pupa,you can do nothing with it,again";
  }
  changeToNextState(): IlifeState {
    return new Butterfly();
  }
}

class Butterfly implements IlifeState {
  public stage: string = "Butterfly";
  public phase: number = 4;

  thisState() {
    return "This is a butterfly";
  }

  doSomething(): string {
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
