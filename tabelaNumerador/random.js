const table = document.querySelector('table');
let arrTitulo = [];
let arrNumerador = [];
let ini = document.querySelector('#inicio');
let fim = document.querySelector('#fim');
const qtdBloco = document.querySelector('#qtdBloco');
const elementsArray = [ini,fim,qtdBloco]
let arrLength = '';

//===========================================================================
//===========================================================================

function reset() {
   arrTitulo = [];
   arrNumerador = [];
   table.innerHTML = '';
}

//===========================================================================
//===========================================================================

function gerarTitulos() {
   for (let i = 1; i <= qtdBloco.value; i++) {
      const tableData = document.createElement('td')
      tableData.textContent = i
      arrTitulo.push(tableData);
   }

   const tableRow = document.createElement('tr')

   for (let i = 0; i < qtdBloco.value; i++) {
      tableRow.appendChild(arrTitulo[i])
   }
   table.appendChild(tableRow)
}

//===========================================================================
//===========================================================================

function gerarNumerador() {
   for (let iA = 0; iA <= qtdBloco.value; iA++) {
      const tableRow = document.createElement('tr');
      const tableData = document.createElement('td')
      tableData.textContent = ini.value + iA;
      tableRow.appendChild(tableData)
      

      //todos em 1 só 'for loop'

      const tableData = document.createElement('td')
      tableData.textContent = 6;
      arrNumerador.push(tableData);

      for (let i = 0; i < qtdBloco.value; i++) {
         tableRow.appendChild(arrNumerador[i]);
      }
      table.appendChild(tableRow)

   }
}

// fim.value = Math.ceil(fim.value / qtdBloco.value) * qtdBloco.value

//===========================================================================
//===========================================================================

function update() {
   reset();
   gerarTitulos();
   gerarNumerador();
}

elementsArray.forEach(function (ele) {
   ele.addEventListener('change', () => {
      if (ini.value != '' && fim.value != '' && qtdBloco.value != ''){
         update();
      }
   });
});