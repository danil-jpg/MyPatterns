// Стратегия — это поведенческий паттерн, выносит набор алгоритмов в собственные классы и делает их взаимозаменимыми.

class ContextCountClass {
  
	constructor(strategy) {
	  this.strategy = strategy;
	}
  
	setStrategy(strategy) {
	  this.strategy = strategy;
	}
  
	countNumbers(nubArr) {
	  const res = this.strategy.count(nubArr);
	  return res;
	}
  }
  

  class CountReg {
	count(numArr) {
	  const res = numArr.sort((a, b) => a - b);
  
	  console.log(res);
	  return res;
	}
  }
  
  class CountRev {
	count(numArr) {
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
  