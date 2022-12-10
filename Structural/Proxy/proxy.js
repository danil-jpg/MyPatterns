// Заместитель — это объект, который выступает прослойкой между клиентом и реальным сервисным объектом. Заместитель получает вызовы от клиента, выполняет свою функцию (контроль доступа, кеширование, изменение запроса и прочее), а затем передаёт вызов сервисному объекту.
var ConcreteDatabase = /** @class */ (function () {
    function ConcreteDatabase() {
    }
    ConcreteDatabase.prototype.getReq = function () {
        console.log("Got some data");
    };
    ConcreteDatabase.prototype.setReq = function () {
        console.log("Set some data");
    };
    return ConcreteDatabase;
}());
var Proxy1 = /** @class */ (function () {
    function Proxy1(database) {
        this.database = database;
    }
    Proxy1.prototype.getReq = function () {
        console.log(this.database.getReq());
        console.log("Little change in Database");
    };
    Proxy1.prototype.setReq = function () {
        console.log("Little change in Database");
    };
    return Proxy1;
}());
console.log(new Proxy1(new ConcreteDatabase()).getReq());
