class Car {
  public color;

  constructor(color) {
    this.color = color;
  }
}
// Класс машина - абстракция

class ConcreteCar extends Car {
  constructor(color) {
    super(color);
  }

  paint() {
    return `This is a ${this.color.getColor()} car`;
  }
}

class Color {
  public color;
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}

// Класс Цвет - реализация

class BlackColor extends Color {
  constructor() {
    super("Black");
  }
}

class RedColor extends Color {
  constructor() {
    super("Red");
  }
}

console.log(new ConcreteCar(new BlackColor()).paint());

console.log(new ConcreteCar(new RedColor()).paint());
