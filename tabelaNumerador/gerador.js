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
   const totCell = document.querySelectorAll('td').length;
   const colSize = (totCell - qtdBloco.value) / qtdBloco.value;
   dataArray.push(Number(ini.value));
   let prevIndex = 0;
   let i = Number(qtdBloco.value) + 1;
   while (i <= totCell) {
      dataArray.push()
      if (i % qtdBloco.value != 0) {
         dataArray.push(Number(dataArray[i-1]) + colSize);
      } else {
         prevIndex = qtdBloco.value
         dataArray.push(Number(dataArray[i-qtdBloco.value]) + 1);
         prevIndex++
      }
      i++
   }
}
//=================================================================
function addData() {
   const cellArray = document.querySelectorAll('td');
   let i = 0;
   cellArray.forEach(ele => {
         ele.textContent = dataArray[i];
         i++;      
      });
   }
//=================================================================
function update() {
   reset();
   createTable();
   generateTitles();
   generateNum();
   addData();
   console.log(dataArray)

   // if (fim.value != dataArray[dataArray.length-2]){
   //    fim.value = `${dataArray[dataArray.length-2]}`
   // }
   // Me falta conhecimento para adicionar essa funcionalidade da forma que gostaria. 24/11/2022.
}
//=================================================================
elementsArray.forEach(function (ele) {
   ele.addEventListener('change', () => {
      if (ini.value != '' && fim.value != '' && qtdBloco.value != ''){
         update();
      }
   });
});