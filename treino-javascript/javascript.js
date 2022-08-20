window.addEventListener('scroll', function () {
   let navA = document.querySelector('header.nav1');
   navA.classList.toggle('nav2', this.scrollY > 0)
})