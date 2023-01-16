class Person {

  name
  lastname
  birth_date

  constructor(name, lastname, birth_date) {
    this.name = name;
    this.lastname = lastname;
    this.fullName = name + ' ' + lastname;

    this.birth_date = birth_date;

    this.bDay = this.birth_date.slice(0,2);
    this.bMonth = this.birth_date.slice(2,4);
    this.bYear = this.birth_date.slice(4);
  }

  age() {
    const date = new Date();

    const acDay = date.getDate();
    const acMonth = date.getMonth();
    const acYear = date.getFullYear();

    // `${this.bDay}/${this.bMonth}/${this.bYear}`

    if(this.birth_date.length !== 8) {
      return 'ERRO! Data must have two digits for day and month, and four digits for year (fullyear). (e.g., 03101986 results in 03/10/1986)'
    } else if (acMonth < this.bMonth || (acMonth == this.bMonth && acDay < this.bDay)) {
      return `${acYear - this.bYear}`
    } else {
      return `${(acYear - this.bYear) - 1}`
    }
  }

  greet() {
    const greetings = `> Hi, ${this.name}!\n  That's what we know about you:\n    >Fullname: ${this.fullName}\n    >Age: ${this.age()}`
    return greetings
  }

}

const pessoa1 = new Person('Murilo','Moraes Cabral','01111992')

console.log(pessoa1.greet())