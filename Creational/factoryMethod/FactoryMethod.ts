abstract class ButtonFactory {
  abstract factory(): Button;
}

// interface ButtonFactory {
//   factory(): Button;
// }

interface Button {
  width: number;
  height: number;
  text: string;
  getValue(text): void;
}

class ConcreteBtn1 implements Button {
  width: 45;
  height: 34;
  text: "ClickMe!";
  getValue(value): void {
    console.log(`There is a ${value} text`);
  }
}

class ConcreteBtn2 implements Button {
  public width: 50;
  public height: 44;
  public text: "NotClickMe!";
  getValue(value): void {
    console.log(`There is a ${value} text`);
  }
}

class ConcreteButtonCreator1 extends ButtonFactory {
  public factory(): Button {
    return new ConcreteBtn1();
  }
}

class ConcreteButtonCreator2 extends ButtonFactory {
  public factory(): Button {
    return new ConcreteBtn2();
  }
}

const btn = new ConcreteButtonCreator1();

const Btn1 = new ConcreteBtn1();
console.log(btn);

// классу заранее неизвестно, объекты каких подклассов ему нужно создавать.

// класс делегирует свои обязанности одному из нескольких вспомогательных подклассов, и планируется локализовать знание о том, какой класс принимает эти обязанности на себя.

// Но теперь вы сможете переопределить фабричный метод в подклассе, чтобы изменить тип создаваемого продукта.
