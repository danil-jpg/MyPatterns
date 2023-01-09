// Наблюдатель — это поведенческий паттерн проектирования,
//  который создаёт механизм подписки, позволяющий одним объектам следить и реагировать на события, происходящие в других объектах.

class YoutubeNotify {
  
	constructor() {
	  this.arr = [];
	}
  
	notifyAll() {
	  this.arr.forEach((item) => {
		item.inform("A new video has been arrived!");
	  });
	}
  
	addSubscriber(subscriber) {
	  this.arr.push(subscriber);
	  return this.arr.indexOf(subscriber);
	}
	removeSubsriber(index) {
	  this.arr.splice(index, 1);
	}
  }
  

  
  class Max  {
	inform(text) {
	  console.log(text);
	}
  }
  
  class Dan{
	inform(text) {
	  console.log(text);
	}
  }
  
  class Serg  {
	inform(text) {
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
  