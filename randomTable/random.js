// window.addEventListener('load', () => {
//   const containerAlerta = document.createElement('div')
//   const alerta = document.createElement('p')

//   alerta.textContent = 'PROJETO EM CONSTRUÇÃO'

//   containerAlerta.style.cssText = 'margin: 0; padding: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-weight: bold; font-family: Arial, sans-serif; font-size: 2rem; text-align: center; width: 100vw; height: 100vh; background-color: rgba(0 0 0 / .5); backdrop-filter: blur(2px)'

//   alerta.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'

//   containerAlerta.appendChild(alerta)
//   document.body.appendChild(containerAlerta)

//   function removeAlert() {
//     document.body.removeChild(containerAlerta)
//     return window.removeEventListener('click', removeAlert)
//   }

//   window.addEventListener('click', removeAlert)
// })

const table = document.querySelector('table');
const bttGenerate = document.querySelector('#btnGenerateNew');
let arr = [];
const xA = document.querySelector('#xAxis');
const yA = document.querySelector('#yAxis');
const elementsArray = [xA,yA]
let arrLength = '';
const AxisMin = 1;
const AxisMax = 100;

xA.setAttribute('min', AxisMin)
xA.setAttribute('max', AxisMax)
yA.setAttribute('min', AxisMin)
yA.setAttribute('max', AxisMax)

//Limita valor mínimo e máximo na input box.
elementsArray.forEach((elem) => {
  elem.addEventListener('change', () => {
    if (elem.value < AxisMin) {
      elem.value = AxisMin;
    } else if (elem.value > AxisMax) {
      elem.value = AxisMax;
    }
    bttGenerate.value = "Gerar " + xA.value * yA.value + " números aleatórios"
  })
});

function clearTable() {
   arr = [];
   table.innerHTML = '';
   xAxis = xA.value;
   yAxis = yA.value;
   arrLength = xAxis * yAxis;
}

function generateNumbers() {
  for (let i = 0; arr.length < arrLength; i++) {
     let rnd = Math.floor(Math.random() * (xA.value * yA.value + 1));
     if (rnd > 0 && rnd <= arrLength && !arr.includes(rnd)) {
        arr.push(rnd);
     }
  }
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

function populateTable() {
   const cell = table.querySelectorAll('td')
   let i = 0;
   for (let cel of cell) {
      cel.textContent = arr[i];
      i++
   }
}

bttGenerate.addEventListener('click', () => {
   clearTable()
   generateNumbers();
   createTable();
   populateTable();
});

   //number sort function
   //sort(function(a, b){return a-b})