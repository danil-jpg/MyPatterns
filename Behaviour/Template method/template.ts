// Шаблонный метод — это поведенческий паттерн проектирования, который определяет скелет алгоритма,
//  перекладывая ответственность за некоторые его шаги на подклассы.
//  Паттерн позволяет подклассам переопределять шаги алгоритма, не меняя его общей структуры.

// По сути это скелет алгоритма.

abstract class ClosetTemplate {
  build(): void {
    this.makeBottom();
    this.makeDoor();
    this.makeSides();
    this.makeTop();
  }

  makeBottom(): void {
    console.log(`This closet has standart bottom`);
  }

  makeDoor(): void {
    console.log(`This closet has standart door`);
  }

  makeSides(): void {
    console.log(`This closet has standart sides`);
  }

  makeTop(): void {
    console.log(`This closet has standart top`);
  }
}

class ClosetWithHighTop extends ClosetTemplate {
  makeTop(): void {
    console.log(`This closet has high top`);
  }
}

class ClosetWithYellowSides extends ClosetTemplate {
  makeSides(): void {
    console.log(`This closet has yellow sides`);
  }
}

const closetWithHighTop = new ClosetWithHighTop();

const closetWithYellowSides = new ClosetWithYellowSides();

closetWithHighTop.build();
closetWithYellowSides.build();
