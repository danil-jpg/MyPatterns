class TargetString {
	getString()  {
	  return "12345";
	}
  }
  
  class AdapteeNum {
	getNum()  {
	  return 12345;
	}
  }
  
  class Adapter extends TargetString {
	 #adaptee
  
	constructor(adaptee ) {
	  super();
	  this.adaptee = adaptee;
	}
  
	getNum() {
	  const result = `${this.adaptee.getNum().toString()} and some other symbols`;
	  return `${result}`;
	}
  }
  
  const adaptee1 = new Adapter(new AdapteeNum());
  
  console.log(adaptee1.getNum());
  