// Мост — это структурный паттерн проектирования, который разделяет один или несколько классов на две отдельные иерархии — абстракцию и реализацию, позволяя изменять их независимо друг от друга.

class Car {
  public color;

  constructor(color) {
    this.color = color;
  }
}
// Класс машина - абстракция

class ConcreteCar extends Car {
  public color;
  constructor(color) {
    super();
  }

  paint() {
    return `This is a ${this.color.getColor()} car`;
  }
}
// Это расширеная абстракция или нет?

interface Color {
  color: string;
  getColor(): string;
}

// Класс Цвет - реализация

class BlackColor implements Color {
  public color: string;
  constructor() {
    this.color = "Black";
  }
  getColor() {
    return this.color;
  }
}

class RedColor implements Color {
  public color: string;
  constructor() {
    this.color = "Red";
  }
  getColor() {
    return this.color;
  }
}

// new BlackCar1,new RedCar1,new BrownCar1 etc

console.log(new ConcreteCar(new BlackColor()).paint());

console.log(new ConcreteCar(new RedColor()).paint());

// Мост — это структурный паттерн, который разделяет бизнес-логику или большой класс на несколько отдельных иерархий, которые потом можно развивать отдельно друг от друга.
