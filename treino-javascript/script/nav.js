window.addEventListener('scroll', function () {
   let navA = document.querySelector('body header');
   navA.classList.toggle('sticky', this.scrollY > 0)
})

function navOpenClose() {
   if (navBar.style.display == 'none') {
      navBar.style.display = 'flex';
      document.getElementById('lin2').classList.add('lin2');
      document.getElementById('lin1').classList.add('lin1');
      document.getElementById('lin3').classList.add('lin3');
      
   } else {
      navBar.style.display = 'none';
      document.getElementById('lin2').classList.remove('lin2');
      document.getElementById('lin1').classList.remove('lin1');
      document.getElementById('lin3').classList.remove('lin3');
   }
}