// Фасад — это структурный паттерн проектирования, который предоставляет простой интерфейс к сложной системе классов, библиотеке или фреймворку.

class GoogleFontsAPI {
	 helvetica() {
	  return "This is helvetica font and its loaded|";
	}
  
	 timesNewRoman() {
	  return "This is time new roman font and its loaded|";
	}
  
	 orbicle() {
	  return "This is orbicle font and its loaded|";
	}
  }
  
  class TextLoaderAPI {
	 greetingTextUser(font) {
	  return `${font} Greetings,user!`;
	}
  
	 greetingTextAdmin(font) {
	  return `${font} Greetings,admin!`;
	}
  
	 greetingTextWorker(font) {
	  return `${font} Greetings,worker!`;
	}
  }
  
  class Facade {
	 greetUser() {
	  const fontForUser = new GoogleFontsAPI().helvetica();
	  const textForUser = new TextLoaderAPI().greetingTextUser(fontForUser);
	  return textForUser;
	}
  
	 greetWorker() {
	  const fontForWorker = new GoogleFontsAPI().timesNewRoman();
	  const textForWorker = new TextLoaderAPI().greetingTextWorker(fontForWorker);
	  return textForWorker;
	}
  
	 greetAdmin() {
	  const fontForAdmin = new GoogleFontsAPI().orbicle();
	  const textForAdmin = new TextLoaderAPI().greetingTextAdmin(fontForAdmin);
	  return textForAdmin;
	}
  }
  
  const facade1 = new Facade();
  
  const greetUser = facade1.greetUser();
  const greetAdmin = facade1.greetAdmin();
  const greetWorker = facade1.greetWorker();
  
  console.log(greetUser);
  console.log("-");
  console.log(greetAdmin);
  console.log("-");
  console.log(greetWorker);
  