function imprimirSoma(a, b) {
    console.log(a + b);
}
imprimirSoma(1, 3)
imprimirSoma(2, 4)
imprimirSoma()

// funcao com retorno
function soma(a, b = 0) {
    return a + b;
}
console.log(soma(2, 3))