class Builder {
	Step1()
	Step2()
	Step3()
  }
  
  class ConcreteFabric extends Builder {
	Step1() {
	  console.log("FirstStepCompleted");
	}
  
	Step2() {
	  return new SmallFabric();
	}
  
	Step3() {
	  return new MediumFabric();
	}
  }
  
  class SmallFabric {}
  
  class MediumFabric {}
  
  class Director {
	 #builder;
  
	 setBuilder(builder) {
	  this.builder = builder;
	}
  
	 getSmallFabric() {
	  this.builder.Step1();
	  this.builder.Step2();
	}
  
	 getSmallMedium() {
	  this.builder.Step1();
	  this.builder.Step3();
	}
  }
  
  const director = new Director();
  director.setBuilder(new ConcreteFabric());
  
  director.getSmallFabric();
  
  director.getSmallMedium();
  