const calculadora = require("./calculos");
const prompt = require("prompt-sync")();


function options() {
    console.log(`
    1- Somar
    2- Subtrair
    3- Multiplicar
    4- Dividir
    0- Sair
    `);
}

function opcaoSelecionada(opcao){
    const n1 = Number(prompt("Digite o primeiro numero: "));
    const n2 = Number(prompt("Digite o segundo numero: "));
    switch (opcao) {
        case "1":
            return calculadora.soma(n1,n2);
            break;
        case "2":
            return calculadora.subtracao(n1,n2);
            break;
        case "3":
            return calculadora.multiplicacao(n1,n2);
            break;
        case "4":
            return calculadora.divisao(n1,n2);
            break;
    }
}

let opcao;
do {
    options();
    opcao= prompt("Qual a opção? ");
    if (opcao=="0") {
        break;
    }
    const resultado = opcaoSelecionada(opcao);

    console.log(`O resultado é ${resultado}`);
} while (opcao != "0"); 
