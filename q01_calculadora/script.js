//<button onclick="calculadora()">Calcular</button>
function calculadora() {
    var num1 = parseFloat(prompt("Bem vindo a Calculadora\nInforme o primeiro valor"));
    var num2 = parseFloat(prompt("Informe o segundo valor"));

    var opcao = parseInt(prompt("Escolha uma opção:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"));
    if (opcao === 1) {
        soma(num1, num2);
    } else if (opcao === 2) {
        subtracao(num1, num2);
    } else if (opcao === 3) {
        multiplicacao(num1, num2);
    } else if (opcao === 4) {
        divisao(num1, num2);
    }
}

function soma(a, b) {
    var result = a + b;
    console.log(result);
    alert(result);
    //In O resultado é: <p id="q01"></p>
    document.getElementById("q01").innerHTML = result;
}

var subtracao = function (a, b) {
    var result = a - b;
    console.log(result);
    alert(result);
    //In O resultado é: <p id="q01"></p>
    document.getElementById("q01").innerHTML = result;
}

var multiplicacao = (a, b) => {
    var result = a * b;
    console.log(result);
    alert(result);
    //In O resultado é: <p id="q01"></p>
    document.getElementById("q01").innerHTML = result;
}

var divisao = (a, b) => {
    var result = a / b;
    console.log(result);
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






