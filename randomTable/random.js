const table = document.querySelector('table');
const bttGenerate = document.querySelector('#btnGenerateNew');
let arr = [];
const xA = document.querySelector('#xAxis');
const yA = document.querySelector('#yAxis');
const elementsArray = [xA,yA]
let arrLength = '';

function generate() {

   for (let i = 0; arr.length < arrLength; i++) {

      let rnd = Math.floor(Math.random() * 1000)

      if (rnd > 0 && rnd <= arrLength && !arr.includes(rnd)) {
         arr.push(rnd);
      }
   }
   return
}

function reset() {
   arr = [];
   table.innerHTML = '';
   xAxis = xA.value;
   yAxis = yA.value;
   arrLength = xAxis * yAxis;
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

elementsArray.forEach(function(elem){
 elem.addEventListener('change', () => {
      reset()
      generate();
      createTable();
      update();
   });
})

bttGenerate.addEventListener('click', () => {
   reset()
   generate();
   createTable();
   update();
});

reset()
generate();
createTable();
update();

   //number sort function
   //sort(function(a, b){return a-b})