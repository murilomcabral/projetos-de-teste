function createArray(func) {
  console.log('processando...')
  setTimeout(() => {
    let arr = [],
    num = 7,
    i = 1;
    while (i<=num) {
      arr.push(i)
      i++
    }
    //func é função que foi passada como parâmetro para a função createArray.
    func(arr)
  }, 1);
}

createArray(function(array){console.log('fim do processo...\nLista gerada: '+ array)})

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
  },
  {
    nome: 'Maria',
    idade: 29,
    pais: 'Brasil'
  },
  {
    nome: 'Hilda',
    idade: 55,
    pais: 'Estados Unidos'
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