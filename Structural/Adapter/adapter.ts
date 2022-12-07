class TargetString {
  getString(): string {
    return "12345";
  }
}

class AdapteeNum {
  getNum(): number {
    return 12345;
  }
}

class Adapter extends TargetString {
  private adaptee: AdapteeNum;

  constructor(adaptee: AdapteeNum) {
    super();
    this.adaptee = adaptee;
  }

  getConvertedString() {
    const result = `${this.adaptee.getNum().toString()} and some other symbols`;
    return `${result}`;
  }
}

class ImportantClass {
  adaptee1 = new Adapter(new AdapteeNum()).getConvertedString();

  importantMethod() {
    return this.adaptee1;
  }
}

const impClass = new ImportantClass().importantMethod();

console.log(impClass);

// Адаптер — это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.

// Вопросы: так с чем в итоге нужно работать,с самим адаптером или целевым классом.

// Нужно ли наследовать адаптер или же просто возвращать значение с адаптера (поля,метода)
