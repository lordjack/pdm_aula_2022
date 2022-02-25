//<button onclick="calculadora()">Calcular</button>
function calculadora() {
  var num1 = parseFloat(prompt("Informe o primeiro valor"));
  var num2 = parseFloat(prompt("Informe o segundo valor"));
  
  var opcao = parseInt(prompt("Escolha uma opção: 1 - Soma, 2 - Subtração, 3 - Multiplicação, 4 - Divisão"));
  if(opcao === 1){
    soma(num1,num2);  
  }
}
function soma(a, b) {
  var result = a + b;
  //console.log(result);
  alert(result);
  //In O resultado é: <p id="q01"></p>
  document.getElementById("q01").innerHTML = result;
  
}


/*
//reproduzir o slide 31
var mensagem = "";

//prompt entrada de dados
var pergunta = prompt("Qual é o prof. mais legal do IFSC");

//saida de dados
console.log(mensagem);

alert(pergunta);
alert(mensagem);

/*  
trecho
*/

//Q02 - pedir ao usuário 2 numeros e mostrar a soma deles no console

//Q03 - peça ao usuário duas notas e imprima a maior nota que 6






