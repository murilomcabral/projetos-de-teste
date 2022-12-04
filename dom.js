const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
console.log(names);

function random(x,y){
   return Math.floor(Math.random()*(x-y))+y;
}

function chooseName(y, x = names.length){
   y--
   if (y >= 0) {
      return names[random(x,y)]
   } else {
      return 'ERRO'
   }
}

console.log(chooseName(3,4))