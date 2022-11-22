const table = document.querySelector('table');
let arrTitulo = [];
let arrNumerador = [];
let ini = document.querySelector('#inicio');
let fim = document.querySelector('#fim');
const qtdBloco = document.querySelector('#qtdBloco');
const elementsArray = [ini,fim,qtdBloco]
let arrLength = '';

//=================================================================
//=================================================================

function reset() {
   arrTitulo = [];
   arrNumerador = [];
   table.innerHTML = '';
}

//=================================================================
//=================================================================

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

//=================================================================
//=================================================================

function gerarNumerador() {
   const razao = (fim.value - ini.value + 1) / qtdBloco.value;
   for (let i = 0; i <= qtdBloco.value; i++) {
      const tableData = document.createElement('td')
      tableData.textContent = ini.value + i
      arrNumerador.push(tableData)
      for (let i2 = 0; i2 < qtdBloco.value; i2++){
         const tableData = document.createElement('td')
         tableData.textContent = arrNumerador[i2] + razao;
         arrNumerador.push(tableData);
      }
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = arrNumerador;
   }
   table.appendChild(tableRow);
}

// fim.value = Math.ceil(fim.value / qtdBloco.value) * qtdBloco.value

//=================================================================
//=================================================================

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