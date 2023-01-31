// const $container = document.querySelector('.container');
function largestPrimeFactor(number) {
  let prime = 2,
  max = 0;
  while (prime <= number) {
    if (number % prime === 0) {
      number /= prime
      max = prime
    } else prime++
  }
  return max;
}

console.log(largestPrimeFactor(13195));