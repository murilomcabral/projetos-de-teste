function createArray(func) {
  setTimeout(() => {
    let arr = [],
    num = 7,
    i = 1;
    while (i<=num) {
      arr.push(i)
      i++
    }
    //func é função que foi passada como parâmetro para a função createArray.
    func(arr, num)
  }, 1000);
}

//função anônima é passada como parâmetro na chamada da função "createArray", a função anônima é passada com dois parâmetros.
         //|======================função passada como parâmetro======================|  
createArray(function(array, loopX){console.log(array + ' with ' + loopX + ' loops.')})
for (let n = 0; n < 10; n++) {
  console.log('teste1 ' + n)
}