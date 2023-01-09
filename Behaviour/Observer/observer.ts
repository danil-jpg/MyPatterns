// Наблюдатель — это поведенческий паттерн проектирования,
//  который создаёт механизм подписки, позволяющий одним объектам следить и реагировать на события, происходящие в других объектах.

class YoutubeNotify {
  public news: string;
  public arr: Isubscriber[];

  constructor() {
    this.arr = [];
  }

  notifyAll(): void {
    this.arr.forEach((item) => {
      item.inform("A new video has been arrived!");
    });
  }

  addSubscriber(subscriber: Isubscriber): number {
    this.arr.push(subscriber);
    return this.arr.indexOf(subscriber);
  }
  removeSubsriber(index: number): void {
    this.arr.splice(index, 1);
  }
}

interface Isubscriber {
  inform(text: string);
}

class Max implements Isubscriber {
  inform(text: string) {
    console.log(text);
  }
}

class Dan implements Isubscriber {
  inform(text: string) {
    console.log(text);
  }
}

class Serg implements Isubscriber {
  inform(text: string) {
    console.log(text);
  }
}

const youtubeNotify = new YoutubeNotify();
const user1 = new Max();
const user2 = new Dan();
const user3 = new Serg();

youtubeNotify.addSubscriber(user1);
youtubeNotify.addSubscriber(user2);
youtubeNotify.addSubscriber(user3);

youtubeNotify.notifyAll();
