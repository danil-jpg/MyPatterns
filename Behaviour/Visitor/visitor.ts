// Посетитель — это поведенческий паттерн, который позволяет добавить новую операцию для целой иерархии классов,
//  не изменяя код этих классов.

// Посетитель — это поведенческий паттерн, который позволяет добавить новую операцию для целой иерархии классов, не изменяя код этих классов.

// https://stackoverflow.com/questions/9363582/difference-between-decorator-design-pattern-and-visitor-design-pattern#:~:text=Considered%20Bad%20Design%3F-,Decorator%20works%20on%20an%20object%2C%20Visitor%20works%20on%20composite%20structure,visitor%20is%20Behavioral%20design%20pattern.
// - различие с декоратором.

abstract class Car {
  accept(visitor): void {
    visitor(this);
  }
}

class Tesla extends Car {
  info(): string {
    return "It is a Tesla car!";
  }
}

class Bmw extends Car {
  info(): string {
    return "It is a BMW car!";
  }
}

class Audi extends Car {
  info(): string {
    return "It is an Audi car!";
  }
}

function exportInfo(car: Car): void {
  let res: string = "";
  if (car instanceof Tesla) {
    res = `Exported data: ${car.info()}`;
    console.log(res);
  }
  if (car instanceof Bmw) {
    res = `Exported data: ${car.info()}`;
    console.log(res);
  }
  if (car instanceof Audi) {
    res = `Exported data: ${car.info()}`;
    console.log(res);
  }
}

const bmw = new Bmw();

const audi = new Audi();

bmw.accept(exportInfo);

// console.log(exportInfo(bmw));
