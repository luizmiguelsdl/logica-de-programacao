//variáveis dos funcionários

let funcionarios = [];

// dados de 3 funcionários

for (let i = 0; i < 3; i++) {
    let nome = prompt(`Digite o nome do funcionário ${i + 1}:`);

    let salario = parseFloat(prompt(`Digite o salário do funcionário ${nome}:`));

    let tempoServico = parseInt(prompt(`Digite o tempo de serviço ${nome} anos:`));

    funcionarios.push({ nome, salario, tempoServico });
}

// dados de cada funcionário

for (let i = 0; i < funcionarios.length; i++) {

    let funcionario = funcionarios[i];

    let aumento = 0;

    // condições para aumento de salário

    if (funcionario.tempoServico > 5 && funcionario.salario < 400) {
        aumento = funcionario.salario * 0.35; // 35%
    } else if (funcionario.tempoServico > 5) {
        aumento = funcionario.salario * 0.25; //  25%
    } else if (funcionario.salario < 400) {
        aumento = funcionario.salario * 0.25; // 25%
    }

    // Exibe o resultado

    if (aumento > 0) {
        let novoSalario = funcionario.salario + aumento;
        document.write(`Funcionário: ${funcionario.nome}`);
        document.write(`Salário anterior: R$ ${funcionario.salario.toFixed(2)}`);
        document.write(`Aumento: R$ ${aumento.toFixed(2)}`);
        document.write(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
        document.write("------------------------------");
    } else {
        document.write(`Funcionário: ${funcionario.nome} não receberá aumento.`);
        document.write("------------------------------");
    }
}