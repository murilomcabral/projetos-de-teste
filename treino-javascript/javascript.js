window.addEventListener('scroll', function () {
   let navA = document.querySelector('body header');
   navA.classList.toggle('sticky', this.scrollY > 0)
})