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

// bttGenerate.addEventListener('click', () => {
//    clearTable()
//    generateNumbers();
//    createTable();
//    populateTable();
// });

   //number sort function
   //sort(function(a, b){return a-b})

//============================================================================
//============================================================================

const menuIcon = document.querySelector('.menuBtt');
const optBox = document.querySelector('.optBox');

const widthSlider = document.querySelector('.cel-width-slider');
const widthOutput = document.querySelector('.cel-width-output');
widthOutput.textContent = widthSlider.value = 7 + " mm";

const heightSlider = document.querySelector('.cel-height-slider');
const heightOutput = document.querySelector('.cel-height-output');
heightOutput.textContent = heightSlider.value = 7 + " mm";

function showMenu(ev) {
  if (optBox.style.display =='block') {
    optBox.style.display = 'none';
  } else {
    optBox.style.display = 'block';
  }
  // optBox.addEventListener('mouseleave', hideMenu);
}

// function hideMenu(e) {
//   optBox.style.display = 'none';
//   optBox.removeEventListener('mouseleave', hideMenu);
// }

menuIcon.addEventListener('click', showMenu);


//cel width controller
function changeWidth(celW) {
  console.log(celW)
  celW.style.width = `${widthSlider.value}mm`;
}

widthSlider.addEventListener('change', () => {
  const tableCel = document.querySelectorAll('td');
  widthOutput.textContent = widthSlider.value + " mm";
  tableCel.forEach(changeWidth);
});

//cel height controller
function changeHeight(celH) {
  console.log(celH)
  celH.style.height = `${heightSlider.value}mm`;
}

heightSlider.addEventListener('change', () => {
  const tableCel = document.querySelectorAll('td');
  heightOutput.textContent = heightSlider.value + " mm";
  tableCel.forEach(changeHeight);
});

//============================================================================
//============================================================================

bttGenerate.addEventListener('click', () => {
  clearTable()
  generateNumbers();
  createTable();
  populateTable();
  const tableCel = document.querySelectorAll('td');
  heightOutput.textContent = heightSlider.value + " mm";
  tableCel.forEach(changeHeight);
  widthOutput.textContent = widthSlider.value + " mm";
  tableCel.forEach(changeWidth);
});