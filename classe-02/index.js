const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro', 'Jaboatão dos Guararapes'];

const cidade = cidades.reduce((cidade, item) => {
    if (item.length > cidade.length) {
        cidade = item;
    }
    return cidade;
});
console.log(cidade);