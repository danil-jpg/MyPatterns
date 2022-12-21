// Компоновщик — это структурный паттерн проектирования, который позволяет сгруппировать множество объектов в древовидную структуру, а затем работать с ней так, как будто это единичный объект.

// General - Major - officer - soldier
abstract class CommonClass {
  protected parent!: CommonClass;
  // Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:
  // Так и не понял зачем ! нужно сдесь

  public setParent(parent: CommonClass): void {
    this.parent = parent;
  }

  public getParent(): CommonClass {
    return this.parent;
  }

  public doesHaveAttachedSoldiers(): boolean {
    return false;
  }

  public addSoldier(soldier): void {}

  public abstract getStatus();
}

class Officer extends CommonClass {
  protected soldierClass: PrivateSoldier[] = [];

  public addSoldier(soldier: PrivateSoldier): void {
    this.soldierClass.push(soldier);
    soldier.setParent(this);
  }

  public doesHaveAttachedSoldiers(): boolean {
    if (this.soldierClass[0]) {
      return true;
    } else {
      return false;
    }
  }

  getStatus() {
    let res: object[] = [];
    for (let key in this.soldierClass) {
      res.push(this.soldierClass[key].getStatus());
    }

    return res;
  }
}

class PrivateSoldier extends CommonClass {
  public getStatus(): object {
    const random: number = Math.round(Math.random() * 10);
    const numOfSoldier: number = Math.round(Math.random() * 10);
    let order: string;

    if (random * numOfSoldier > 15) {
      order = "This order was completed successfully";
    } else {
      order = "This order was failed";
    }

    const res: object = { numOfSoldier, order };

    return res;
  }
}

const general = new Officer();
const officerEmpty = new Officer();
const officerAttached = new Officer();

const private1 = new PrivateSoldier();
const private2 = new PrivateSoldier();
const private3 = new PrivateSoldier();

officerAttached.addSoldier(private1);
officerAttached.addSoldier(private2);
officerAttached.addSoldier(private3);
general.addSoldier(officerEmpty);
general.addSoldier(officerAttached);

console.log(general.getStatus());

// console.log(new PrivateSoldier().getStatus());
