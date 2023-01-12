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

function showMenu(ev) {

  console.log(ev.target)

  if (optBox.style.display =='block') {
    optBox.style.display = 'none';
  } else {
    optBox.style.display = 'block';
  }

  // optBox.addEventListener('mouseleave', hideMenu)
}

// function hideMenu(e) {
//   optBox.style.display = 'none';
//   optBox.removeEventListener('mouseleave', hideMenu)
// }

menuIcon.addEventListener('click', showMenu)