// Заместитель — это объект, который выступает прослойкой между клиентом и реальным сервисным объектом. Заместитель получает вызовы от клиента, выполняет свою функцию (контроль доступа, кеширование, изменение запроса и прочее), а затем передаёт вызов сервисному объекту.

// Заместитель имеет тот же интерфейс, что и реальный объект, поэтому для клиента нет разницы — работать через заместителя или напрямую.

class Database {
	getReq(){
	}
	setReq(){
	}
}
  
  class ConcreteDatabase extends Database {
	getReq() {
	  console.log("Got some data");
	}
	setReq() {
	  console.log("Set some data");
	}
  }
  
  class Proxy1 extends Database {
	constructor(database) {
		super()
	  this.database = database;
	}
  
	getReq() {
	  console.log(this.database.getReq());
	  console.log("Little change in Database");
	}
	setReq() {
	  console.log("Little change in Database");
	}
  }
  
  console.log(new Proxy1(new ConcreteDatabase()).getReq());
  