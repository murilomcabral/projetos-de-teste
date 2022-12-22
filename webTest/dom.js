let bandInfo;

// =====================
const favBand = {
  name:'The Beatles',
  nationality:'English',
  genre:'rock',
  members: 4,
  formed: 1960,
  split: 1970,
  albums: {
    first: {
      name: 'Please Please Me',
      released: 1963
    },
    bestseller: {
      name: 'Abbey Road',
      released: 1969
    },
  },
  // name:'AC/DC',
  // nationality:'Australian',
  // genre:'rock',
  // members: 5,
  // formed: 1973,
  // split: false,
  // albums: {
  //   first: {
  //     name: 'High Voltage',
  //     released: 1975
  //   },
  //   bestseller: {
  //     name: 'Highway to Hell',
  //     released: 1980
  //   },
  // },
  info() {
    const charSelect = this.nationality.charAt(0).toLowerCase();
    const charString = 'aeiou';
    return bandInfo = `${this.name} ${this.split == false ? 'are' : 'were'} ${charString.includes(charSelect) ? 'an' : 'a'} ${this.nationality} ${this.genre} band formed in ${this.formed}. ${this.name}\'s first album name was \"${this.albums.first.name}\", released in ${this.albums.first.released}, and the bestseller \"${this.albums.bestseller.name}\", released in ${this.albums.bestseller.released}. ${this.split == false ? `Today, with ${this.members}, they're still on the road` : `They split in ${this.split}, with ${this.members}`}.` ;
  },
}

favBand.info()

// =====================

console.log(bandInfo)