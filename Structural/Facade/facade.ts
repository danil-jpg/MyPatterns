// Фасад — это структурный паттерн проектирования, который предоставляет простой интерфейс к сложной системе классов, библиотеке или фреймворку.

class GoogleFontsAPI {
  public helvetica(): string {
    return "This is helvetica font and its loaded|";
  }

  public timesNewRoman(): string {
    return "This is time new roman font and its loaded|";
  }

  public orbicle(): string {
    return "This is orbicle font and its loaded|";
  }
}

class TextLoaderAPI {
  public greetingTextUser(font): string {
    return `${font} Greetings,user!`;
  }

  public greetingTextAdmin(font): string {
    return `${font} Greetings,admin!`;
  }

  public greetingTextWorker(font): string {
    return `${font} Greetings,worker!`;
  }
}

class SuperUsersControl {
  public greetUser(): string {
    const fontForUser = new GoogleFontsAPI().helvetica();
    const textForUser = new TextLoaderAPI().greetingTextUser(fontForUser);
    return textForUser;
  }

  public greetWorker(): string {
    const fontForWorker = new GoogleFontsAPI().timesNewRoman();
    const textForWorker = new TextLoaderAPI().greetingTextWorker(fontForWorker);
    return textForWorker;
  }

  public greetAdmin(): string {
    const fontForAdmin = new GoogleFontsAPI().orbicle();
    const textForAdmin = new TextLoaderAPI().greetingTextAdmin(fontForAdmin);
    return textForAdmin;
  }
}

const facade1 = new SuperUsersControl();

const greetUser = facade1.greetUser();
const greetAdmin = facade1.greetAdmin();
const greetWorker = facade1.greetWorker();

console.log(greetUser);
console.log("-");
console.log(greetAdmin);
console.log("-");
console.log(greetWorker);
