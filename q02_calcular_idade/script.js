//<button onclick="calculadora()">Calcular</button>
function calcular() {
    var ano_nascimento = parseInt(prompt("Bem vindo a Calculadora de Idade\nInforme o ano que você nasceu"));

    //exemplo manipulação de datas - https://www.w3schools.com/jsref/jsref_getfullyear.asp
    const data = new Date();

    try {
        if (ano_nascimento < 0) {
            throw "O ano informado não pode ser negativo!"; // gera uma exceção
        } else {
            let idade_atual = data.getFullYear() - ano_nascimento;

            document.getElementById("resultado").innerHTML = "Quem Nasceu em <b>" + ano_nascimento + "</b> vai completar <b>" + idade_atual + "</b> anos em 2022.";
            console.log(idade_atual);
        }
    } catch (e) {
        alert(e);
        console.log(e);
    }


}



