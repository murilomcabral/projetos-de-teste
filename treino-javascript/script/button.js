function fontDec () {
   let fontSDec = document.querySelectorAll('p');
   for (let i = 0; i < 10; i++) {
      fontSDec[i].style.fontSize = '0.7em';
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
      fontSInc[i].style.fontSize = '1.3em';
   }
}

// tabindex adicionado aos elementos

for (let i = 0; i < 10; i++) {
   let aLLD = document.querySelectorAll('p');
   aLLD[i].setAttribute('tabindex','0');
}