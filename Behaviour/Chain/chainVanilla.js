// Цепочка обязанностей — это поведенческий паттерн проектирования,
//  который позволяет передавать запросы последовательно по цепочке обработчиков.
// Каждый последующий обработчик решает, может ли он обработать запрос сам и стоит ли передавать запрос дальше по цепи.


  
  class defBanking  {

  
	pay(price ) {
	  if (this.isEnough(price)) {
		console.log(`There are at least ${price} on the card`);
	  } else if (this.otherCard) {
		this.otherCard.pay(price);
		console.log(`There wasn't enough money in your current card (${this.name}),so we changed it`);
	  } else {
		console.log(`There isn't enough money on all of your cards`);
	  }
	}
  
	isEnough(price) {
	  if (this.balance >= price) {
		return true;
	  } else {
		return false;
	  }
	}
  
	setOtherCard(card) {
	  this.otherCard = card;
	}
  }
  
  class Master extends defBanking {

	constructor(name, id, balance) {
	  super();
	  this.name = name;
	  this.id = id;
	  this.balance = balance;
	}
  }
  
  class Visa extends defBanking {

  
	constructor(name, id, balance) {
	  super();
	  this.name = name;
	  this.id = id;
	  this.balance = balance;
	}
  }
  
  class UnpopularCard1 extends defBanking {

  
	constructor(name, id, balance) {
	  super();
	  this.name = name;
	  this.id = id;
	  this.balance = balance;
	}
  }
  
  const masterCard = new Master("MasterCard", 1, 1000);
  const visa = new Visa("Visa", 2, 2000);
  const UnpopularCard = new UnpopularCard1("Visa", 3, 3000);
  
  masterCard.pay(1000);
  
  masterCard.pay(2000);
  
  masterCard.setOtherCard(visa);
  
  masterCard.pay(2000);
  
  masterCard.setOtherCard(UnpopularCard);
  
  masterCard.pay(3000);
  