function sumar() {

    const valores = document.getElementById('form');
    let valorA = valores['a'];
    let valorB = valores['b'];
    let resultado = parseInt(valorA.value) + parseInt(valorB.value);

    if (isNaN(resultado))
        resultado = '"No se ha incluido ningun valor"';

    document.getElementById('resultado').innerHTML = `El resultado de la operacion es: ${ resultado }`;

}