class ContextCountClass {
  protected strategy: Istratagy;

  constructor(strategy: Istratagy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Istratagy): void {
    this.strategy = strategy;
  }

  countNumbers(nubArr: number[]): number[] {
    const res = this.strategy.count(nubArr);
    return res;
  }
}

interface Istratagy {
  count(numArr: number[]): number[];
}

class CountReg {
  count(numArr: number[]): number[] {
    const res = numArr.sort((a, b) => a - b);

    console.log(res);
    return res;
  }
}

class CountRev {
  count(numArr: number[]): number[] {
    const res = numArr.sort((a, b) => b - a);

    console.log(res);
    return res;
  }
}

const countReg = new CountReg();
const countRev = new CountRev();

const contextCountClass = new ContextCountClass(countReg);
contextCountClass.countNumbers([2, 42, 2, 242, 2]);

contextCountClass.setStrategy(countRev);
contextCountClass.countNumbers([2, 42, 2, 242, 2]);
