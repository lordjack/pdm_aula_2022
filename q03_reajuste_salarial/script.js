//<button onclick="calculadora()">Calcular</button>
function calcular() {

    var funcionario = {};

    funcionario.nome = prompt("Qual é o nome do funcionário?");
    funcionario.telefone = prompt("Qual é o telefone do funcionário?");
    funcionario.salario_atual = parseFloat(prompt("Qual é o salário de " + funcionario.nome));
    var porcentagem_reajuste = parseInt(prompt("O salário de " + funcionario.nome + " vai ser reajustado em qual porcentagem?"));
    console.log(porcentagem_reajuste);

    try {
        if (porcentagem_reajuste < 0) {
            throw "A porcentagem informada não pode ser negativo!"; // gera uma exceção
        } else {

            var valor_reajustado = (funcionario.salario_atual * porcentagem_reajuste) / 100;
            var salario_reajustado = funcionario.salario_atual + valor_reajustado;

            console.log("funcionario.nome " + funcionario.nome);
            console.log("funcionario.salario_atual " + funcionario.salario_atual);
            console.log("porcentagem_reajuste " + porcentagem_reajuste);
            console.log("valor_reajustado " + valor_reajustado);
            console.log("salario_reajustado " + salario_reajustado);

            document.getElementById("resultado").innerHTML = "" +
                "<b>" + funcionario.nome + " recebeu um aumento salarial!</b>" +
                "<p>O salário atual era R$" + funcionario.salario_atual + " e telefone " + funcionario.telefone + ".</p>" +
                "<p>Com o aumento de " + porcentagem_reajuste + "%, o salário vai aumentar R$ " + valor_reajustado + " no próximo mês.</p>" +
                "<p>É a partir daí, " + funcionario.nome + " vai passar a ganhar R$ " + salario_reajustado + ".</p>";

        }
    } catch (e) {
        alert(e);
        console.log(e);
    }
}

