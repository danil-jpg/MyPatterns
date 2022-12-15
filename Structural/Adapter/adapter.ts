// Розетки типа С - Европейские (используются в Украине),розетки типа Ф - используются в Америке.
// Нужно разетку С адаптировать под Ф (из Украины в Америку).
class SocketC {
  rechargePhoneC(): void {
    console.log("Your phone was recharged with C-soket");
  }
}

class SoketF {
  rechargePhoneF(): void {
    console.log("Your phone was recharged with F-soket");
  }
}

class SocketCAdapter extends SoketF {
  public soketC: SocketC;
  constructor(soketC) {
    super();
    this.soketC = soketC;
  }

  rechargePhoneF(): void {
    console.log(`${this.soketC.rechargePhoneC()} thanks to SoketC Adapter`);
  }
}

const soketC = new SocketC();

const soketF = new SoketF();

const soketCAdapter = new SocketCAdapter(new SocketC());

console.log(soketC.rechargePhoneC());
console.log(soketF.rechargePhoneF());
console.log(soketCAdapter.rechargePhoneF());

// Адаптер — это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.

// Вопросы: так с чем в итоге нужно работать,с самим адаптером или целевым классом ,или дальше по цепочке.

// Можно ли наследовать адаптер или же просто возвращать значение с адаптера (поля,метода)
