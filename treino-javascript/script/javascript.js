let containerLista = document.querySelector('section.containerLista');
let lista = [];
function contarNum() {
      for (let num = 0; num < 10; num++) {
      let paragrafo = document.createElement('p');
      paragrafo.textContent = num;
      setInterval(() => {
         containerLista.appendChild(paragrafo);
      }, 1000);
   };
}