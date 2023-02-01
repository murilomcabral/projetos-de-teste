const diff = (arr1, arr2) => [
  ...arr1.filter(e => !arr2.includes(e)),
  ...arr2.filter(e => !arr1.includes(e))
];

const sym = (...args) => [...new Set(args.reduce(diff))];

console.log(sym([1, 2, 3, 12], [28, 3, 1, 1, 5, 3, 4, 7, 0],[2, 8, 1, 2, 13, 23]).sort((a, b) => a - b));