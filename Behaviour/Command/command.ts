// Команда — это поведенческий паттерн проектирования, который превращает запросы в объекты,
//  позволяя передавать их как аргументы при вызове методов,

// По факту прослойка между клиентом и бизнес-логикой

// Реализовать пример с кафе.

// посетитель - говоритЧтоХочетЗаказать()(invoker);

// официант - запись(говоритЧтоХочетЗаказать())(комманда);

// повар - готовить(запись(говоритЧтоХочетЗаказать()))(получатель);

class Visitor {
  public command: Iwaiter;

  makeOrder(command: Iwaiter, order: string): string {
    this.command = command;
    this.command.writeDownTheOrderAndDeliverIt(order);

    return order;
  }
}

interface Iwaiter {
  writeDownTheOrderAndDeliverIt(order: string);
}

class Waiter1 implements Iwaiter {
  public receiver: Kitchener;

  constructor(receiver: Kitchener) {
    this.receiver = receiver;
  }

  writeDownTheOrderAndDeliverIt(order: string): void {
    this.receiver.cook(order);
  }
}

class Ikitchener {
  cook(order: string): void {}
  doNothing(): void {}
}

class Kitchener implements Ikitchener {
  cook(order: string): void {
    console.log(`${order} is ready`);
  }

  doNothing(): void {
    console.log(`Operation has been stopped`);
  }
}

const visitor = new Visitor();

const kitchener = new Kitchener();

const waiter = new Waiter1(kitchener);

visitor.makeOrder(waiter, "Some fish chips");
