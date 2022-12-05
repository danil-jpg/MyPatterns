interface Builder {
  Step1(): any;
  Step2(): any;
  Step3(): any;
}

class ConcreteFabric implements Builder {
  Step1(): void {
    console.log("FirstStepCompleted");
  }

  Step2(): SmallFabric {
    return new SmallFabric();
  }

  Step3(): MediumFabric {
    return new MediumFabric();
  }
}

class SmallFabric {}

class MediumFabric {}

class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public getSmallFabric(): void {
    this.builder.Step1();
    this.builder.Step2();
  }

  public getSmallMedium(): void {
    this.builder.Step1();
    this.builder.Step3();
  }
}

const director = new Director();
director.setBuilder(new ConcreteFabric());

director.getSmallFabric();

director.getSmallMedium();
