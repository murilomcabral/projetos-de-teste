window.addEventListener('scroll', function () {
   let navA = document.querySelector('body header');
   navA.classList.toggle('sticky', this.scrollY > 0)
})

function navOpenClose() {
   if (navBar.style.display == 'none') {
      navBar.style.display = 'flex';
   } else {
      navBar.style.display = 'none';
   }
}