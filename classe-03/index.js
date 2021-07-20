const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44, 180];

const maiorNumero = numeros.reduce((acumulador, item) => {
    if (item > acumulador) {
        acumulador = item;
    }
    return acumulador;
});

console.log(maiorNumero);