const $textArea = document.querySelector('textarea')
const $resultBox = document.querySelector('.result')

$textArea.setAttribute('placeholder', `Exemplo 1:\nMaria,Samanta,Joaquina,Pedro\n\nExemplo 2:\nMaria\nSamanta\nJoaquina\nPedro`)

function delList() {
  $textArea.value = ''
  $resultBox.innerHTML = ''
  $resultBox.style.display = 'none'
}

function getList() {
  let list = []
  let val = $textArea.value

  if (val != '') {
    if (val.includes(',')) {
      list = val.split(',')
      raffle(list)
    } else if (val.includes('\n')) {
      list = val.split('\n')
      raffle(list)
    } else {
      alert('Os valores devem ser separados por vírgula ou quebra de linha!')
    }
  }
}

function raffle(list) {
  let rnd = Math.floor(Math.random() * (list.length))
  let winner = list[rnd]
  $resultBox.style.display = 'block'
  $resultBox.innerHTML = ''
  const winAlert = document.createElement('h1')
  winAlert.innerText = `${winner} ganhou!`
  $resultBox.appendChild(winAlert)
}