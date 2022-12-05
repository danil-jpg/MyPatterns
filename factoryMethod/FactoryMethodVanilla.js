 class ButtonFactory {
	 factory();
  }
  
  class Button {
	constructor(width,height,text){
		this.width = width
		this.height =  height
		this.text = text
	}
	getValue(text){

	}
  }
  
  class ConcreteBtn1 extends Button {
	constructor(width,height,text){
		super(width,height,text)
	}
		width =  45
		height = 34
		text = "ClickMe!"

	getValue(value)  {
	  console.log(`There is a ${value} text`);
	}
  }
  
  class ConcreteBtn2 extends Button {
	constructor(width,height,text){
		super(width,height,text)
	}
		width =  50
		height = 44
		text = "NotClickMe!"

	getValue(value) {
	  console.log(`There is a ${value} text`);
	}
  }
  
  class ConcreteButtonCreator1 extends ButtonFactory {
	 factory() {
	  return new ConcreteBtn1();
	}
  }
  
  class ConcreteButtonCreator2 extends ButtonFactory {
	 factory() {
	  return new ConcreteBtn2();
	}
  }
  
  const btn = new ConcreteButtonCreator1();
  
  const Btn1 = new ConcreteBtn1();
  console.log(btn.factory().getValue(1));
  
  // классу заранее неизвестно, объекты каких подклассов ему нужно создавать.
  
  // класс делегирует свои обязанности одному из нескольких вспомогательных подклассов, и планируется локализовать знание о том, какой класс принимает эти обязанности на себя.
  
  // Но теперь вы сможете переопределить фабричный метод в подклассе, чтобы изменить тип создаваемого продукта.
  