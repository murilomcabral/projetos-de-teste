// function createArray(func) {
//   setTimeout(() => {
//     let arr = [],
//     num = 7,
//     i = 1;
//     while (i<=num) {
//       arr.push(i)
//       i++
//     }
//     //func é função que foi passada como parâmetro para a função createArray.
//     func(arr, num)
//   }, 500);
// }

// createArray(function(array, loopX){console.log(array + ' with ' + loopX + ' loops.')})

// for (let n = 0; n < 10; n++) {
//   console.log('teste1 ' + n)
// }

//=====================================

const arr = [
  {
  nome: 'Manoel',
  idade: 30,
  pais: 'Brasil'
  },
  {
    nome: 'Edward',
    idade: 65,
    pais: 'Brasil'
  },
  {
    nome: 'Gabriel',
    idade: 27,
    pais: 'Irlanda'
  },
  {
    nome: 'Jason',
    idade: 32,
    pais: 'Brasil'
  },
  {
    nome: 'Joana',
    idade: 24,
    pais: 'Brasil'
  },
  {
    nome: 'Mariana',
    idade: 29,
    pais: 'Brasil'
  },
  {
    nome: 'Hilda',
    idade: 55,
    pais: 'Estados Unidos'
  }
]
const separator1 = '='
const separator2 = '-------------'

function getData() {
  let lengthSum = 0
  let maxLength = 0;
  console.log(separator1.repeat(20))
  for (let i = 0; i < arr.length; i++) {
    i == 0 ? '':console.log(separator2);
    for (let i2 in arr[i]) {
      console.log([i2] + ': ' + arr[i][i2])
    }
  }
  console.log(separator1.repeat(20))
}

getData()