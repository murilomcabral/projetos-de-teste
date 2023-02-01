const diff = (arr1, arr2) => [
  ...arr1.filter(e => !arr2.includes(e)),
  ...arr2.filter(e => !arr1.includes(e))
];

const sym = (...args) => [...new Set(args.reduce(diff))];

console.log(sym([1, 2, 3], [5, 2, 28, 3, 1, 1, 5 , 3, 4, 3, 4, 7, 0, 1, 4],[2, 7, , 8, 1, 9, 2, 39, 13, 23]).sort((a, b) => a - b));