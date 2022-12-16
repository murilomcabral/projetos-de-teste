const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgFileName = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']

/* Declaring the alternative text for each image file */
const altText = ['blurry-sight','desert-sand','purple-flower','egypt-wall-drawing','butterfly-and-flower']

/* Looping through images */
for (let i = 0; i < imgFileName.length; i++) {
   const newImage = document.createElement('img');
   newImage.setAttribute('src', 'images/' + imgFileName[i]);
   newImage.setAttribute('alt', altText[i]);
   thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
function darkenLighten() {
   if (btn.innerText === 'Darken') {
      btn.innerText = 'Lighten';
      overlay.setAttribute('style','background-color: rgba(0 0 0 / 0.5)');
   } else {
      btn.innerText = 'Darken';
      overlay.setAttribute('style','background-color: rgba(0 0 0 / 0)');
   }
}

btn.addEventListener('click', darkenLighten)

/* Changing displayed image */

/* thumbBar */
thumbBar.addEventListener('click', function displayImage(event) {
   displayedImage.setAttribute('src',event.target.getAttribute('src'))
   displayedImage.setAttribute('alt',event.target.getAttribute('alt'))
})

/* arrowNavigation */