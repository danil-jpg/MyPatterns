// Заместитель — это объект, который выступает прослойкой между клиентом и реальным сервисным объектом. Заместитель получает вызовы от клиента, выполняет свою функцию (контроль доступа, кеширование, изменение запроса и прочее), а затем передаёт вызов сервисному объекту.

// Заместитель имеет тот же интерфейс, что и реальный объект, поэтому для клиента нет разницы — работать через заместителя или напрямую.

interface Database {
  getReq(): any;
  setReq(): any;
}

class ConcreteDatabase implements Database {
  getReq() {
    console.log("Get some data");
  }
  setReq() {
    console.log("Set some data");
  }
}

class Proxy1 implements Database {
  public database: ConcreteDatabase;
  constructor(database: ConcreteDatabase) {
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
