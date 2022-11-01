const lista = [];
let listaAlt = lista;
let nome = '';
let i = 0;
let cidadeInput = document.querySelector('.cadastrarCidade');

// function verifMais(){
//    let resp = prompt('Tentar outra vez? (s/n)')
//    if (resp == 's' || resp == '') {
//       verificar()
//    } else {
//       alert('Operação finalizada.')
//    };
// }

// ==========================================================================================
// ==========================================================================================

function addData(cidade) {
   let dataAdd = document.querySelector('[add]');
   let contRow = document.createElement('tr');
   listaAlt.push(cidade);
   contRow.innerHTML = `<td id="ind${i}">${cidade}</td>`;
   i++
   dataAdd.appendChild(contRow);         
}

function delData(cidade) {
   let index = listaAlt.indexOf(cidade);
   listaAlt.splice(index,1);
   // let dataAdd = document.querySelector('tr#ind'+index);
   // dataAdd.remove();
   // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> buscando uma forma de remover elementos baseado em seu conteudo         
}

// ==========================================================================================
// ==========================================================================================

function deletar() {
   let cidade = cidadeInput.value;
   if (cidade == ''){
      alert(`O campo precisa ser preenchido.`);
   } else if (listaAlt.includes(cidade)){
      delData();
      alert(`O nome \"${cidade}\" foi deletado da lista.`);
      cidadeInput.value = '';
      cidadeInput.focus()
   } else {
      alert(`O nome \"${cidade}\" não existe na lista.`);
      cidadeInput.focus()
   }
}

function cadastrar() {
   let cidade = cidadeInput.value;
   if (cidade == '') {
      alert(`O campo precisa ser preenchido.`);
   } else if (!listaAlt.includes(cidade)) {
      addData(cidade);
      // alert(`O nome \"${cidade}\" foi cadastrado.`);
      cidadeInput.value = '';
      cidadeInput.focus()
   } else {
      alert(`O nome \"${cidade}\" já existe na lista.`);
      cidadeInput.focus()
   }
}