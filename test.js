const arr = [];
const min = 1;
const max = 300;

function generate() {

   for (let i = 0; arr.length < (max - min) + 1; i++) {

      let rnd = Math.floor(Math.random() * 1000)

      if (rnd >= min && rnd <= max && !arr.includes(rnd)) {
         arr.push(rnd);
      }
   }
   
   return
}

generate()

console.log(arr)