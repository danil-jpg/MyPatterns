class Database {
	// #constructor() {}
  
	static #instance;
  
	Connection(a) {
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