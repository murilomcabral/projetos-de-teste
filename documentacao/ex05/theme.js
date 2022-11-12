const setTheme = document.querySelector('img.lightSymbol');
const footer = document.querySelector('footer');

setTheme.setAttribute('src','images/dark.svg');

setTheme.addEventListener('click', changeTheme);

function darkTheme() {
   setTheme.setAttribute('src','images/dark.svg')
   document.body.style.backgroundColor = 'white'
   document.body.style.color = 'black'
}

function lightTheme() {
   setTheme.setAttribute('src','images/light.svg')
   document.body.style.backgroundColor = 'black'
   document.body.style.color = 'white'
}

function changeTheme() {
   let actualTheme = setTheme.getAttribute('src')
   if (actualTheme == 'images/dark.svg') {
      lightTheme()
   } else {
      darkTheme()
   }
}

// ==========================================================================
// ==========================================================================

let footerTemp = document.querySelector('footer')
   footerTemp = footerTemp.innerHTML = `<p>Since 2021</p>`