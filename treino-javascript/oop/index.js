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
    const acMonth = date.getMonth() + 1;
    const acYear = date.getFullYear();

    if(this.birth_date.length !== 8) {
      return 'ERRO! O dado deve conter 2 dígitos para dia e mês, e 4 dígitos para ano. (Exemplo: 01011983 resulta em 01/01/1983)'
    } else {
      if (acMonth > this.bMonth || (acMonth == this.bMonth && acDay >= this.bDay)) {
        return `${acYear - this.bYear}`
      } else {
        return `${(acYear - this.bYear) - 1}`
      }      
    }
  }

  greet() {
    const greetings = `> Olá, ${this.name}!\n  Sua informações:\n    > Nome completo: ${this.fullName}\n    > Data de Nascimento: ${this.bDay}/${this.bMonth}/${this.bYear}\n    > Idade: ${this.age()}`
    return greetings
  }

}

const pessoa1 = new Person('José','da Silva','08011989')
console.log(pessoa1.greet())