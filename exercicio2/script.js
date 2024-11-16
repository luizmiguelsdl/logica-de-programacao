//  respostas corretas do gabarito

let gabarito = [];

for (let i = 0; i < 10; i++) {
    let resposta = prompt(`Digite a resposta correta para a questão ${i + 1} (A, B, C, D ou E):`).toUpperCase();
    gabarito.push(resposta);
}

//  dados dos alunos

let alunos = [];

let notas = [];

let aprovados = 0;

// respostas de 10 alunos

for (let i = 0; i < 10; i++) {
    let numeroAluno = prompt(`Digite o número do aluno ${i + 1}:`);
    let respostasAluno = [];
    
    for (let j = 0; j < 10; j++) {
        let resposta = prompt(`Digite a resposta do aluno ${numeroAluno} para a questão ${j + 1} (A, B, C, D ou E):`).toUpperCase();
        respostasAluno.push(resposta);
    }

    //  nota do aluno

    let nota = 0;

    for (let k = 0; k < 10; k++) {
        if (respostasAluno[k] === gabarito[k]) {
            nota++;
        }
    }

    // número do aluno e sua nota

    alunos.push({ numero: numeroAluno, nota: nota });

    // número de aprovados
    if (nota >= 6) {
        aprovados++;
    }
}

// notas de cada aluno
document.write("Notas dos alunos:");
alunos.forEach(aluno => {
    document.write(`Aluno ${aluno.numero}: Nota ${aluno.nota}`);
});

// percentual de aprovados
let percentualAprovados = (aprovados / 10) * 100;
document.write(`Percentual de alunos aprovados: ${percentualAprovados}%`);
