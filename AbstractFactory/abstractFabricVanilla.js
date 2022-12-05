// Monitor,peripherals,block

 class Computer {
	 makeMonitor() ;
	 makePer() ;
	 makeBlock() ;
	//   Теоритически ,все методы нужно прописать в абстрактном классе,далее их будут насследывать фабрики
  }
  
  class ConcreteFactoryCheap extends Computer {
	makeMonitor() {
	  return new MonitorCheap();
	}
	makePer()  {
	  return new PerCheap();
	}
	makeBlock() {
	  return new BlockCheap();
	}
  }
  
  class ConcreteFactoryMedium extends Computer {
	makeMonitor() {
	  return new MonitorMedium();
	}
	makePer() {
	  return new PerMedium();
	}
	makeBlock() {
	  return new BlockMedium();
	}
  }
  
  class ConcreteFactoryWealth extends Computer {
	makeMonitor() {
	  return new MonitorWealth();
	}
	makePer() {
	  return new PerWealth();
	}
	makeBlock() {
	  return new BlockWealth();
	}
  }
  
  class Monitor {
	getWIdth() ;
  }
  class Peripherals {
	getAmount() ;
  }
  class Block {
	getPrice() ;
  }
  
  class MonitorCheap extends Monitor {
	getWIdth() {
	  return 1280;
	}
  }
  
  class MonitorMedium extends Monitor {
	getWIdth() {
	  return 1440;
	}
  }
  
  class MonitorWealth extends Monitor {
	getWIdth() {
	  return 1920;
	}
  }
  
  class PerCheap extends Peripherals {
	getAmount() {
	  return 3;
	}
  }
  
  class PerMedium extends Peripherals {
	getAmount() {
	  return 4;
	}
  }
  
  class PerWealth extends Peripherals {
	getAmount() {
	  return 5;
	}
  }
  
  class BlockCheap extends Block {
	getPrice() {
	  return 4000;
	}
  }
  
  class BlockMedium extends Block {
	getPrice() {
	  return 6000;
	}
  }
  
  class BlockWealth extends Block {
	getPrice() {
	  return 8000;
	}
  }
  // Далее вы создаёте абстрактную фабрику — общий интерфейс, который содержит методы создания всех продуктов семейства
  
  // Абстрактная фабрика — это порождающий паттерн проектирования, который решает проблему создания целых семейств связанных продуктов, без указания конкретных классов продуктов.
  
  // Так и не понял,что значит без указания конкретных классов продуктов
  
  // class ConcreteButtonCreator1 extends ButtonFactory {
  //   public factory(): Button {
  //     return new ConcreteBtn1();
  //   }
  // }
  
  // Button - интерфейс,а не класс, - без указания конкретных классов продуктов.
  