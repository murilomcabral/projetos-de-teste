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
   console.log(dataArray)
}
//=================================================================
function generateArray() {
   const numLinhas = (fim.value - ini.value + 1) / qtdBloco.value;
   const numColunas = qtdBloco.value;
   const totCell = numLinhas * numColunas + qtdBloco.value;
   let i = 0;
   while (i < totCell) {
      if (i < qtdBloco.value) {
         dataArray.push(i+1);
      } else {
         dataArray.push(0);
      }
      i++
   }
   console.log(dataArray)
}
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
   generateArray();
   // addData();
}
//=================================================================
elementsArray.forEach(function (ele) {
   ele.addEventListener('change', () => {
      if (ini.value != '' && fim.value != '' && qtdBloco.value != ''){
         update();
      }
   });
});