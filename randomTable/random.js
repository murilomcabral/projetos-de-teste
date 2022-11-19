const table = document.querySelector('table');
let arr = [];
const xA = document.querySelector('#xAxis');
const yA = document.querySelector('#yAxis');
let xAxis = 5;
let yAxis = 4;
const arrLength = xAxis * yAxis;

function generate() {

   for (let i = 0; arr.length < arrLength; i++) {

      let rnd = Math.floor(Math.random() * 1000)

      if (rnd > 0 && rnd <= arrLength && !arr.includes(rnd)) {
         arr.push(rnd);
      }
   }

   //number sort function
   //sort(function(a, b){return a-b})
   
   return
}

function reset() {
   arr = [];
   table.innerHTML = '';
}

function createTable() {
   let i = 0;
   while (i < yAxis) {
      const tableRow = document.createElement('tr')
      for (let i = 0; i < xAxis; i++) {
         const tableData = document.createElement('td')
         tableRow.appendChild(tableData)
         table.appendChild(tableRow)
      }
      i++;
   }
}

function update() {
   const cell = table.querySelectorAll('td')
   let i = 0;
   for (let cel of cell) {
      cel.textContent = arr[i];
      i++
   }
}

xA.addEventListener('change', () => {
   reset()
   generate();
   createTable();
   update();
});