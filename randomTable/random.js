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

const AxisAttr = {'min': AxisMin, 'max': AxisMax, 'value': '1'}

for (let attrib in AxisAttr) {
  elementsArray.forEach((elem) => {
    elem.setAttribute(attrib, AxisAttr[attrib])
  })
}

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

const menuIcon = document.querySelector('.menuBtt')
const optBox = document.querySelector('.optBox')

//cell width controller
const widthSlider = document.querySelector('.cel-width-slider')
const widthOutput = document.querySelector('.cel-width-output')
widthSlider.value = 10
widthOutput.textContent = widthSlider.value + " mm"

//cell height controller
const heightSlider = document.querySelector('.cel-height-slider')
const heightOutput = document.querySelector('.cel-height-output')
heightSlider.value = 9
heightOutput.textContent = heightSlider.value + " mm"

//cell font size controller
const fontSizeSlider = document.querySelector('.cel-font-size-slider')
const fontSizeOutput = document.querySelector('.cel-font-size-output')
fontSizeSlider.value = 10
fontSizeOutput.textContent = fontSizeSlider.value + " pt"

//cell horizontal spacing controller
const horizontalSpacingSlider = document.querySelector('.horizontal-spacing-slider')
const horizontalSpacingOutput = document.querySelector('.horizontal-spacing-output')
horizontalSpacingSlider.value = 1
horizontalSpacingOutput.textContent = horizontalSpacingSlider.value + " mm"

//cell vertical spacing controller
const verticalSpacingSlider = document.querySelector('.vertical-spacing-slider')
const verticalSpacingOutput = document.querySelector('.vertical-spacing-output')
verticalSpacingSlider.value = 1
verticalSpacingOutput.textContent =  verticalSpacingSlider.value + " mm"

//cell data color controller
const dataColorBox = document.querySelector('.data-color-box')
const dataColorOutput = document.querySelector('.data-color-output')
dataColorBox.value = '#000000'

const menuOptionsList = [widthSlider, heightSlider, fontSizeSlider, horizontalSpacingSlider, verticalSpacingSlider, dataColorBox]

function styleTable() {
  const tableCel = document.querySelectorAll('td');
  tableCel.forEach((elem) => {
    elem.style.cssText = `width: ${widthSlider.value}mm; height: ${heightSlider.value}mm; font-size: ${fontSizeSlider.value}pt; color: ${dataColorBox.value};`
    table.style.borderSpacing = `${horizontalSpacingSlider.value}mm ${verticalSpacingSlider.value}mm`
  });

  heightOutput.textContent = heightSlider.value + " mm";
  widthOutput.textContent = widthSlider.value + " mm";
  fontSizeOutput.textContent = fontSizeSlider.value + " pt";
  horizontalSpacingOutput.textContent = horizontalSpacingSlider.value + " mm";
  verticalSpacingOutput.textContent = verticalSpacingSlider.value + " mm";
}

menuIcon.addEventListener('click', showMenu);

menuOptionsList.forEach((elem) => {
  elem.addEventListener('input', styleTable)
})

//===================================================================
//===================================================================

bttGenerate.addEventListener('click', () => {
  clearTable()
  generateNumbers();
  createTable();
  populateTable();
  styleTable();
});

function showMenu(ev) {
  if (optBox.style.display =='block') {
    optBox.style.display = 'none';
  } else {
    optBox.style.display = 'block';
  }
}