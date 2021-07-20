const palavras = ["arroz", "feijão", "carne", "macarrão", "vodka"];

const ehInvalido = palavras.some(x => x === "cerveja" || x === "vodka");

if (ehInvalido) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!")
} else {
    console.log("tudo certo, vamos as compras!")
}