class VeryLargeClass {
	  method1() {}
  
	  method2() {}
  
	  method5() {}
  }
  
  class VeryLargeClass2 {
	  method1() {}
  
	  method2() {}
  
	  method5() {}
  }
  
  class Facade {
	constructor(check) {
	  this.check = check;
	}
	  operation1()  {
	  const var1 = new VeryLargeClass().method1();
	  const var2 = new VeryLargeClass2().method2();
	}
  
	  operation2() {
	  const var1 = new VeryLargeClass().method5();
	  const var2 = new VeryLargeClass2().method1();
	}
  }
  
  const facade1 = new Facade(true).operation1();
  