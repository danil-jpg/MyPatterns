// Итератор — это поведенческий паттерн проектирования,
//  который даёт возможность последовательно обходить элементы составных объектов, не раскрывая их внутреннего представления.

// не раскрывая их внутреннего представления. - что это значит?
// * коллекции

// MP3 player

interface IsongIterator {
  playNext(): void;
  hasNext(): boolean;
}

interface IsongList {
  songsArr: string[];
  addSong(song: string): void;
}

class SongIterator implements IsongIterator {
  public songClass: IsongList;
  public index: number;

  constructor(songClass) {
    this.songClass = songClass;
    this.index = 0;
  }

  playNext(): void {
    console.log(this.songClass.songsArr[this.index++]);
  }
  hasNext(): boolean {
    if (this.index < this.songClass.songsArr.length) {
      return true;
    } else {
      return false;
    }
  }
}

class SongIteratorRev implements IsongIterator {
  public songClass: IsongList;
  public index: number;

  constructor(songClass) {
    this.songClass = songClass;
    this.index = songClass.songsArr.length - 1;
  }

  playNext(): void {
    console.log(this.songClass.songsArr[this.index--]);
  }
  hasNext(): boolean {
    if (this.index >= 0) {
      return true;
    } else {
      return false;
    }
  }
}

class SongList implements IsongList {
  public songsArr: string[] = [];

  constructor() {}

  addSong(song: string): void {
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
