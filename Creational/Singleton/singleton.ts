class Database {
  private constructor() {}

  private static instance: Database;

  Connection(a): object {
    return { a };
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const x1 = Database.getInstance();
const x2 = Database.getInstance();

if (x1 === x2) {
  console.log(true);
} else {
  console.log("Failed");
}

// const x = new Database() - не работает,тк конструктор приватный

//  Когда в программе должен
// быть единственный экземпляр какого-то класса, доступный всем клиентам (например, общий доступ к базе данных из разных частей программы).
