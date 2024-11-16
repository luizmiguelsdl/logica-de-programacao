//vetor para armazenar os números

let numeros = [];

//entrada de 10 números

for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i + 1}:`)); // solicita o número
    numeros.push(numero); // adiciona valores ao vetor
}

//vetor na ordem inserida

document.write("Números na ordem inserida:");
document.write(numeros);

// vetor em ordem decrescente

numeros.sort(function(a, b) {
    return b - a; // Comparação para ordem decrescente
});

// vetor ordenado

document.write("Números em ordem decrescente:");
document.write(numeros);
