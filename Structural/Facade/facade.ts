class VeryLargeClass {
  public method1() {}

  public method2() {}

  public method5() {}
}

class VeryLargeClass2 {
  public method1() {}

  public method2() {}

  public method5() {}
}

class Facade {
  public check: boolean;
  constructor(check: boolean) {
    this.check = check;
  }
  public operation1(): void {
    const var1 = new VeryLargeClass().method1();
    const var2 = new VeryLargeClass2().method2();
  }

  public operation2(): void {
    const var1 = new VeryLargeClass().method5();
    const var2 = new VeryLargeClass2().method1();
  }
}

const facade1 = new Facade(true).operation1();
