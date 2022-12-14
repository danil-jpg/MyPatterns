// Итератор — это поведенческий паттерн проектирования,
//  который даёт возможность последовательно обходить элементы составных объектов, не раскрывая их внутреннего представления.

// не раскрывая их внутреннего представления. - что это значит?

// MP3 player


  
  class SongIterator{

  
	constructor(songClass) {
	  this.songClass = songClass;
	  this.index = 0;
	}
  
	playNext() {
	  console.log(this.songClass.songsArr[this.index++]);
	}
	hasNext() {
	  if (this.index < this.songClass.songsArr.length) {
		return true;
	  } else {
		return false;
	  }
	}
  }
  
  class SongIteratorRev  {
  
	constructor(songClass) {
	  this.songClass = songClass;
	  this.index = songClass.songsArr.length - 1;
	}
  
	playNext()  {
	  console.log(this.songClass.songsArr[this.index--]);
	}
	hasNext() {
	  if (this.index >= 0) {
		return true;
	  } else {
		return false;
	  }
	}
  }
  
  class SongList {
  
	constructor() {
		this.songsArr = []
	}
  
	addSong(song) {
	  this.songsArr.push(song);
	}
  }
  
  const songList1 = new SongList();
  songList1.addSong("SOng1");
  songList1.addSong("SOng2");
  songList1.addSong("SOng3");
  
  const songListIterator = new SongIteratorRev(songList1);
  
  while (songListIterator.hasNext()) {
	songListIterator.playNext();
  }
  