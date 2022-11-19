let table = document.querySelector('table');
let arr = [];
let x = 20;
let y = 10;

// function generate(x, y) {
// }

const tableRow = document.createElement('tr');
table.appendChild(tableRow);

for (let iY = 0; iY < y; iY--) {

   for (let iX = 0; arr.length < x; iX++){
      let rand = Math.floor(Math.random()*100);
      if (!arr.includes(rand)) {
         arr.push(rand);
      } else {
         continue;
      }
   }

   for (let i = 0; i < x; i++){
      arr.sort(function(a, b){return a-b}) //sort numeros
      const tableCell = document.createElement('td');
      tableCell.textContent = `${arr[i]}`;
      table.appendChild(tableCell);
   }

   const tableRow = document.createElement('tr');
   table.appendChild(tableRow);
   tableRow.appendChild(tableCell);

}
// let table = document.querySelector('table');
// let arr = [];
// let x = 20;
// let y = 3;

// // function generate(x, y) {
// // }

// const tableRow = document.createElement('tr');

// for (let iY = 0; iY < y; iY--) {

//    for (let iX = 0; arr.length < x; iX++){
//       let rand = Math.floor(Math.random()*100);
//       if (!arr.includes(rand)) {
//          arr.push(rand);
//       }
//    }

//    arr.sort(function(a, b){return a-b}) //sort numeros

//    for (let i = 0; i < arr.length; i++){
//       if (i != 0 && (i+1) % 10 == 0) {
//          const tableRow = document.createElement('tr');
//       } else {
//          const tableCell = document.createElement('td');
//          tableCell.textContent = ${i};
//          tableRow.appendChild(tableCell);
//       }
//    }
//    table.appendChild(tableCell);



// }