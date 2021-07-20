const numeros = [0, 122, 4, 6, 8, 44, 53];

const ehValido = numeros.every(x => x % 2 === 0);

if (ehValido) {
    console.log("array válido");
} else {
    console.log("array inválido")
}

