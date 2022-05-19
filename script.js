var num1 = 10; //Inteiro
var num2 = 7.5; // float = real
var fezTrabalho = false; // float = real
var funcionario = "Chico";

var frutas = ["Abacaxi", "Limão", "Laranja"];
var mistura = [5.5, "Limão", false, 50, { nome: "Chico", idade: 50 }];

var pessoa = {
  nome: "Jackson",
  idade: 19,
  frutas: ["Abacaxi", "Limão", "Laranja"],
  carro: { modelo: "Celta", cor: "Preto", Marca: "Nike" },
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.frutas.length);

var div = document.getElementById("carregar");

for (var i = 0; i < pessoa.frutas.length; i++) {
  // console.log(pessoa.frutas[i]);
  div.innerHTML += pessoa.frutas[i] + "<br>";
}

pessoa.frutas.forEach((element) => {
  console.log(element);
});

pessoa.frutas.map((item) => {
  console.log(item);
});

var div = document.getElementById("carregar");
function clicar() {
  // alert("Entrou");
  var novasFrutas = ["Damasco", "Bergamota", "Ponkan"];
  try {
    novasFrutas.map((item) => {
      div.innerHTML += item + "<br>";
    });
  } catch (error) {
    alert(error);
  }
}

//<button onclick="calculadora()">Calcular</button>
async function calculadora() {
  var num1 = parseFloat(prompt("Informe o primeiro valor"));
  var num2 = parseFloat(prompt("Informe o segundo valor"));

  var opcao = parseInt(
    prompt(
      "Escolha uma opção: 1 - Soma, 2 - Subtração, 3 - Multiplicação, 4 - Divisão"
    )
  );
  if (opcao === 1) {
    await soma(num1, num2);
  }
}
async function soma(a, b) {
  var result = (await a) + b;
  setTimeout(() => {
    alert(result);
    //In O resultado é: <p id="q01"></p>
    document.getElementById("q01").innerHTML = result;
  }, 3000);
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
