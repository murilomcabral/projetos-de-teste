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
//for...in pode trabalhar com objetos
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
  }    
]

function getData() {
  console.log('=============')
  for (let i = 0; i < arr.length; i++) {
    i == 0 ? '':console.log('------------');
    for (let i2 in arr[i]) {
      console.log([i2] + ': ' + arr[i][i2])
    }
  }
  console.log('=============')
}

getData()