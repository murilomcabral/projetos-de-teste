const table = document.querySelector('table');
const bttGenerate = document.querySelector('#btnGenerateNew');
let arr = [];
const xA = document.querySelector('#xAxis');
const yA = document.querySelector('#yAxis');
const elementsArray = [xA,yA]
let arrLength = '';
//maximum number of cells per axis
const AxisMin = 1;
const AxisMax = 100;

xA.setAttribute('min', AxisMin)
xA.setAttribute('max', AxisMax)
yA.setAttribute('min', AxisMin)
yA.setAttribute('max', AxisMax)

//Limita valor mínimo e máximo
elementsArray.forEach((elem) => {
  elem.addEventListener('input', () => {
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

//===================================================================
//===================================================================

const menuIcon = document.querySelector('.menuBtt');
const optBox = document.querySelector('.optBox');

//cell width controller
const widthSlider = document.querySelector('.cel-width-slider');
const widthOutput = document.querySelector('.cel-width-output');
widthOutput.textContent = widthSlider.value = 12 + " mm";

//cell height controller
const heightSlider = document.querySelector('.cel-height-slider');
const heightOutput = document.querySelector('.cel-height-output');
heightOutput.textContent = heightSlider.value = 12 + " mm";

//cell font size controller
const fontSizeSlider = document.querySelector('.cel-font-size-slider');
const fontSizeOutput = document.querySelector('.cel-font-size-output');
fontSizeOutput.textContent = fontSizeSlider.value = 12 + " pt";

function showMenu(ev) {
  if (optBox.style.display =='block') {
    optBox.style.display = 'none';
  } else {
    optBox.style.display = 'block';
  }
}

menuIcon.addEventListener('click', showMenu);

function changeWidth(celW) {
  celW.style.width = `${widthSlider.value}mm`;
}

widthSlider.addEventListener('input', () => {
  const tableCel = document.querySelectorAll('td');
  widthOutput.textContent = widthSlider.value + " mm";
  tableCel.forEach(changeWidth);
});


function changeHeight(celH) {
  celH.style.height = `${heightSlider.value}mm`;
}

heightSlider.addEventListener('input', () => {
  const tableCel = document.querySelectorAll('td');
  heightOutput.textContent = heightSlider.value + " mm";
  tableCel.forEach(changeHeight);
});


function changeFontSize(celFontSize) {
  celFontSize.style.fontSize = `${fontSizeSlider.value}pt`;
}

fontSizeSlider.addEventListener('input', () => {
  const tableCel = document.querySelectorAll('td');
  fontSizeOutput.textContent = fontSizeSlider.value + " pt";
  tableCel.forEach(changeFontSize);
});



//===================================================================
//===================================================================

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
  fontSizeOutput.textContent = fontSizeSlider.value + " pt";
  tableCel.forEach(changeFontSize);
});