// Monitor,peripherals,block

abstract class Computer {
  abstract makeMonitor(): Monitor;
  abstract makePer(): Peripherals;
  abstract makeBlock(): Block;

  //   Теоритически ,все методы нужно прописать в абстрактном классе,далее их будут насследывать фабрики
}

class ConcreteFactoryCheap extends Computer {
  makeMonitor(): Monitor {
    return new MonitorCheap();
  }
  makePer(): Peripherals {
    return new PerCheap();
  }
  makeBlock(): Block {
    return new BlockCheap();
  }
}

class ConcreteFactoryMedium extends Computer {
  makeMonitor(): Monitor {
    return new MonitorMedium();
  }
  makePer(): Peripherals {
    return new PerMedium();
  }
  makeBlock(): Block {
    return new BlockMedium();
  }
}

class ConcreteFactoryWealth extends Computer {
  makeMonitor(): Monitor {
    return new MonitorWealth();
  }
  makePer(): Peripherals {
    return new PerWealth();
  }
  makeBlock(): Block {
    return new BlockWealth();
  }
}

interface Monitor {
  getWIdth(): number;
}
interface Peripherals {
  getAmount(): number;
}
interface Block {
  getPrice(): number;
}

class MonitorCheap implements Monitor {
  getWIdth(): number {
    return 1280;
  }
}

class MonitorMedium implements Monitor {
  getWIdth(): number {
    return 1440;
  }
}

class MonitorWealth implements Monitor {
  getWIdth(): number {
    return 1920;
  }
}

class PerCheap implements Peripherals {
  getAmount(): number {
    return 3;
  }
}

class PerMedium implements Peripherals {
  getAmount(): number {
    return 4;
  }
}

class PerWealth implements Peripherals {
  getAmount(): number {
    return 5;
  }
}

class BlockCheap implements Block {
  getPrice(): number {
    return 4000;
  }
}

class BlockMedium implements Block {
  getPrice(): number {
    return 6000;
  }
}

class BlockWealth implements Block {
  getPrice(): number {
    return 8000;
  }
}
// Далее вы создаёте абстрактную фабрику — общий интерфейс, который содержит методы создания всех продуктов семейства

// Абстрактная фабрика — это порождающий паттерн проектирования, который решает проблему создания целых семейств связанных продуктов, без указания конкретных классов продуктов.

// Так и не понял,что значит без указания конкретных классов продуктов
