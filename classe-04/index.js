const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const ehInvalido = palavras.some(x => x.length > 5);

if (ehInvalido) {
    console.log("existe palavra inválida");
} else {
    console.log("array validado");
}