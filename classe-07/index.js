const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: true,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const ehValido = usuários.filter(x => x.idade >= 18 && x.idade <= 65).every(x => x.habilitado);

if (ehValido) {
    console.log("todos passaram no teste");
} else {
    console.log("todos precisam estar habilitados");
}