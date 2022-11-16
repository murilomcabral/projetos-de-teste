// const caixaHora = document.querySelector('.hora');;
// const caixaMinuto = document.querySelector('.minuto');
// const caixaSegundo = document.querySelector('.segundo');

// function timeUpdate() {
//    let dataHora = new Date();
//    caixaHora.textContent = `${dataHora.getHours()}`
//    caixaMinuto.textContent = `${dataHora.getMinutes()}`
//    caixaSegundo.textContent = `${dataHora.getSeconds()}`
// }

// setInterval(() => {timeUpdate()}, 100);

function dateTimeUpdate() {
   let today = new Date();
   let hora = today.getHours();
   let minuto = today.getMinutes();
   let segundo = today.getSeconds();

   if (hora < 10) {
      hora = '0' + hora;
   }

   if (minuto < 10) {
      minuto = '0' + minuto;
   }

   if (segundo < 10) {
      segundo = '0' + segundo;
   }

   let dataHora = [hora,minuto,segundo];
   let box = document.querySelector('.container p')
box.textContent = dataHora.join(':')
}
setInterval(() => {dateTimeUpdate()}, 100);