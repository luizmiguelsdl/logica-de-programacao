// modelos e consumos dos carros

let modelos = [];

let consumos = [];

// entrada do modelo e consumo dos 5 carros

for (let i = 0; i < 5; i++) {
    let modelo = prompt(`Digite o modelo do veículo ${i + 1}:`);

    let consumo = parseFloat(prompt(`Digite o consumo de combustível do veículo ${modelo} (em km/l):`));

    modelos.push(modelo);
    
    consumos.push(consumo);
}

// quantidade de combustível necessária para percorrer 1000 km para cada carro

document.write("Consumo para percorrer 1000 km:");

let menorConsumo = consumos[0];

let modeloMaisEconomico = modelos[0];

for (let i = 0; i < 5; i++) {
    let combustivelNecessario = 1000 / consumos[i];
    document.write(`Veículo: ${modelos[i]} - Combustível necessário: ${combustivelNecessario.toFixed(2)} litros`);
    
    // carro mais econômico
    if (consumos[i] > menorConsumo) {
        menorConsumo = consumos[i];
        modeloMaisEconomico = modelos[i];
    }
}

// Exibe o carro mais econômico
document.write(`O veículo mais econômico é o ${modeloMaisEconomico}, com consumo de ${menorConsumo} km/l.`);
