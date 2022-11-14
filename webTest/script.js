function timesTable(x) {
   for (let i = 1; i <= 10; i++){
      console.log(`${i} x ${x} = ${i*x}`)
   }
}

const numTab = 8; //numero a ser calculado

timesTable(numTab);
// 1 x 8 = 8
// 2 x 8 = 16
// 3 x 8 = 24
// 4 x 8 = 32
// 5 x 8 = 40
// 6 x 8 = 48
// 7 x 8 = 56
// 8 x 8 = 64
// 9 x 8 = 72
// 10 x 8 = 80

const cats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {   // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`
  } else {
    myFavoriteCats += `${cats[i]}, `
  }
}

console.log(myFavoriteCats);     // "My cats are called Pete, Biggles, and Jasmine."