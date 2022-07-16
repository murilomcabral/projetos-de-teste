const tagSVG = document.querySelector('svg');

const pathDoSVG = document.querySelector('svg path');
const tamanhoTotalDoPath = pathDoSVG.getTotalLenght();
tagSVG.style.setProperty('--tamanhoTotalDoPath',tamanhoTotalDoPath);

console.log(tamanhoTotalDoPath) //