class Band {

  constructor(name, nationality, genre, members, formed, split, firstAlbumName, firstAlbumReleased, bestsellerAlbumName, bestsellerAlbumReleased) {
    this.name = name;
    this.nationality = nationality;
    this.genre = genre;
    this.members = members;
    this.formed = formed;
    this.split = split;
    this.albums.first.name = firstAlbumName;
    this.albums.first.released = firstAlbumReleased;
    this.albums.bestseller.name = bestsellerAlbumName;
    this.albums.bestseller.released = bestsellerAlbumReleased;
  }

  bandInfo() {
    console.log (`${this.name} ${this.split == false ? 'are' : 'were'} ${charString.includes(charSelect) ? 'an' : 'a'} ${this.nationality} ${this.genre} band formed in ${this.formed}. ${this.name}\'s first album name was \"${this.albums.first.name}\", released in ${this.albums.first.released}, and the bestseller \"${this.albums.bestseller.name}\", released in ${this.albums.bestseller.released}. ${this.split == false ? `Today, with ${this.members}, they're still on the road` : `They split in ${this.split}, with ${this.members}`}.`)
  }

}

const band1 = new Band(
  'The Beatles',
  'English',
  'rock',
  4,
  1960,
  1970,
  'Please Please Me',
  1963,
  'Abbey Road',
  1969
)


// =====================

console.log(band1)