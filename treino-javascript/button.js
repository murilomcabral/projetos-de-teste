function fontDec () {
   let fontSDec = document.querySelectorAll('p');
   for (let i = 0; i < 10; i++) {
      fontSDec[i].style.fontSize = '80%';
   }
}

function fontNor () {
   let fontSInc = document.querySelectorAll('p');
   for (let i = 0; i < 10; i++) {
      fontSInc[i].style.fontSize = '';
   }
}

function fontInc () {
   let fontSInc = document.querySelectorAll('p');
   for (let i = 0; i < 10; i++) {
      fontSInc[i].style.fontSize = '120%';
   }
}