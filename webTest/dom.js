async function createArray(num) {
  console.log('processando...')
  let a = 6, b = num;
  let c = await a * b;
  console.log(typeof(c), c)
}

createArray(2)

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
    pais: 'Brasil'
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
  }
]

function getData() {
  const separator1 = '='.repeat(20)
  const separator2 = '-'.repeat(15)+'<'
  console.log('\n'+separator1+'\nInício da lista\n'+separator1)

  for (let i = 0; i < arr.length; i++) {
    i == 0 ? '':console.log(separator2);
    for (let i2 in arr[i]) {
      console.log([i2] + ': ' + arr[i][i2])
    }
  }

  console.log(separator1+'\nFim da lista\n'+separator1+'\n')
}

getData()