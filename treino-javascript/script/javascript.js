function contarNum() {
   let lista = [];
      for (let num = 0; num < 10; num++) {
      let paragrafo = document.createElement('p');
      paragrafo.textContent = `Cont ${num}`;
      lista[num] = paragrafo;
      containerLista.appendChild = lista[num];
   }
}