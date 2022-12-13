let card = document.querySelector('.container')

function random(number) {
   return Math.floor(Math.random() * number);
}

card.addEventListener('mouseover', (event) => {
   event.target.style.backgroundColor = `rgba(${random(255)} ${0} ${0} / .7)`
})