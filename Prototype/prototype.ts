// The Prototype design pattern is good for when creating new objects requires more resources than you want to use or have available.

// Prototype design pattern is used when the Object creation is a costly affair and requires a lot of time and resources and you have a similar object already existing.

interface Clonable {
  clone(): Clonable;
}

class Robot implements Clonable {
  private defConfig: object = {
    defInfo: "SomeInformation",
  };

  constructor(public height: number, public width: number, public color: string, public price: number) {
    // this.height = height
  }

  public clone(): Robot {
    return new Robot(this.height, this.width, this.color, this.price);
  }
}

const prototype = new Robot(150, 70, "grey", 1500);

const testVar = Object.create(prototype);
// for (let i in testVar) {
//   console.log(testVar[i]);
// }

const robot1 = prototype.clone();

robot1.color = "Red";
console.log(testVar);

console.log(prototype);
