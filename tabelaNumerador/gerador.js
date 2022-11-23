const table = document.querySelector('table');
let dataArray = [];
let ini = document.querySelector('#inicio');
let fim = document.querySelector('#fim');
const qtdBloco = document.querySelector('#qtdBloco');
const elementsArray = [ini,fim,qtdBloco]
//=================================================================
function reset() {
   dataArray = [];
   const cellArray = [];
   table.innerHTML = '';
   console.clear()
}
//=================================================================
function createTable() {
   const numLinhas = ((fim.value - ini.value + 1) / qtdBloco.value) + 1;
   const numColunas = qtdBloco.value;
   let i = 0
   while (i < numLinhas) {
      const tableRow = document.createElement('tr');
      for (let i = 0; i < numColunas; i++ ) {
         const tableData = document.createElement('td');
         tableRow.appendChild(tableData);
         table.appendChild(tableRow);
      }
      i++;
   }
}
//=================================================================
function generateTitles() {
   // const numLinhas = Math.ceil(((fim.value - ini.value) + 1) / qtdBloco.value) + 1 ;
   // const numColunas = qtdBloco.value;
   const totCell = document.querySelectorAll('td').length;
   let i = 0;
   while (i < totCell) {
      if (i < qtdBloco.value) {
         dataArray.push(i+1);
      }
      i++
   }
}
//=================================================================
function generateNum() {
   // const numLinhas = Math.ceil(((fim.value - ini.value) + 1) / qtdBloco.value) + 1 ;
   // const numColunas = qtdBloco.value;
   const totCell = document.querySelectorAll('td').length;
   let i = 0;
   while (i < totCell - qtdBloco.value) {
         dataArray.push(0);
         i++
      }
   console.log(`total celulas: ${totCell}`)
   console.log('qtdBloco: ' + qtdBloco.value)
}
   // console.log('linhas: ' + numLinhas)
   // console.log('colunas: ' + numColunas)
   // console.log(`total celulas: ${totCell - 4}`)
   // console.log(dataArray)
//=================================================================
// function addData(){
//    const cellArray = document.querySelectorAll('td');
//    let i = 0;
//    cellArray.forEach(ele => {
//          ele.textContent = dataArray[i];
//          i++;      
//       });
//    }
//=================================================================
function update() {
   reset();
   createTable();
   generateTitles();
   generateNum();
   // addData();
   console.log(dataArray)
}
//=================================================================
elementsArray.forEach(function (ele) {
   ele.addEventListener('change', () => {
      if (ini.value != '' && fim.value != '' && qtdBloco.value != ''){
         update();
      }
   });
});