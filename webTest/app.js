const arr1 = [-1, 3, 8, 2, 9, 6];
const arr2 = [4, 1, 2, 10, 5, 20];
const tgt = 24;

console.log('Resultado: ' + getTarget(arr1, arr2, tgt))

function getTarget(array1, array2, target) {
  let arr = [];
  for (let i = 0; i < array1.length; i++) {
    let sum = 0;
    for (let j = 0; j < array2.length; j++) {
      sum = array1[i] + array2[j]
      arr.push(sum)
    }
  }
  sum = undefined

  let prox = 0;

  for (let i = 0; i < arr.length; i++) {
    //test arr[i] vs arr[i+1] vs prox
  }
  
  return prox
}

// //=====================================

// async function createArray(num) {
//   console.log('processando...')
//   let a = 6, b = num;
//   let c = a * b;
//   let final = await typeof(c) + ' ' + c
//   console.log(final)
// }

// createArray(2)

// //=====================================

// const arr = [
//   {
//   nome: 'Manoel',
//   idade: 30,
//   pais: 'Brasil'
//   },
//   {
//     nome: 'Edward',
//     idade: 65,
//     pais: 'Brasil'
//   },
//   {
//     nome: 'Gabriel',
//     idade: 27,
//     pais: 'Brasil'
//   },
//   {
//     nome: 'Jason',
//     idade: 32,
//     pais: 'Brasil'
//   },
//   {
//     nome: 'Joana',
//     idade: 24,
//     pais: 'Brasil'
//   }
// ]

// function getData() {
//   const separator1 = '='.repeat(20)
//   const separator2 = '-'.repeat(15)+'<'
//   console.log('\n'+separator1+'\nInício da lista\n'+separator1)

//   for (let i = 0; i < arr.length; i++) {
//     i == 0 ? '':console.log(separator2);
//     for (let i2 in arr[i]) {
//       console.log([i2] + ': ' + arr[i][i2])
//     }
//   }

//   console.log(separator1+'\nFim da lista\n'+separator1+'\n')
// }

// getData()