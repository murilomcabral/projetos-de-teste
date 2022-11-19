const table = document.querySelector('table');

const arr = [];
const min = 1;
const max = 15;
const rowLength = 5;

function generate() {

   for (let i = 0; arr.length < (max - min) + 1; i++) {

      let rnd = Math.floor(Math.random() * 1000)

      if (rnd >= min && rnd <= max && !arr.includes(rnd)) {
         arr.push(rnd);
      }
   }

   //number sort function
   //sort(function(a, b){return a-b})
   
   return
}

function update() {
   let i = 0;
   while (i < max / rowLength) {
      const tableRow = document.createElement('tr')
      for (let i = 0; i < arr.length; i++) {
         const tableData = document.createElement('td')
         tableData.textContent = arr[i]
         tableRow.appendChild(tableData)
         table.appendChild(tableRow)
         if (i == 10) {
            const tableRow = document.createElement('tr')
         }
      }
      i++;
   }
}

generate()
update()

console.log(arr)