// //create menu button
// const menuIcon = document.createElement('span')
// const marginDist = 10;

// menuIcon.setAttribute('class','material-symbols-outlined')
// menuIcon.textContent = 'settings'
// menuIcon.style.cssText = `position: absolute; top: ${marginDist}px; right: ${marginDist}px; cursor: pointer;`

// document.body.appendChild(menuIcon)

// //create menu options
// const menuContainer = document.createElement('nav')
// const menuOpt = document.createElement('ul')

const menuIcon = document.querySelector('.menuBtt')
const optBox = document.querySelector('.optBox')

function showMenu() {
  // alert('test')
  optBox.style.display = 'block';
  optBox.addEventListener('mouseleave', hideMenu)
}

function hideMenu() {
  // alert('test')
  optBox.style.display = 'none';
}

menuIcon.addEventListener('click', showMenu)
