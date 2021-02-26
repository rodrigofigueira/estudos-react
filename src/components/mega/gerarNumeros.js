function gerarNumeros(qtd) {

    const min = Math.ceil(1);
    const max = Math.floor(60);
    let numeros = [];

    while (numeros.length < qtd) {
        numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
        numeros = [...new Set(numeros)];
    }

    return numeros.sort((a, b) => a - b);

}

export default gerarNumeros;