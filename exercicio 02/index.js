// função que valida se o numero é negativo ou maior que 5000
function validateNumber() {
    let multiplicando = document.getElementById('multiplicando').value
    let inicio = document.getElementById('inicio').value
    let final = document.getElementById('final').value

    if (multiplicando < 0 || multiplicando > 5000) {
        alert('Multiplicando não pode ser negativo ou maior que 5000')
        document.getElementById('multiplicando').value = ''
    }
    if (inicio < 0 || inicio > 5000) {
        alert('inicio não pode ser negativo ou maior que 5000')
        document.getElementById('inicio').value = ''
    }
    if (final < 0 || final > 5000) {
        alert('final não pode ser negativo ou maior que 5000')
        document.getElementById('final').value = ''
    }

};

// função que calcula o multiplicando
function calcular() {
    document.getElementById('resultado').innerText = 'Resultado:'

    let multiplicando = document.getElementById('multiplicando').value
    let inicio = document.getElementById('inicio').value
    let final = document.getElementById('final').value

    // condição que valida se a diferença do inicio e final esta no maximo entre 10
    if (multiplicando == '' || inicio == '' || final == '') {
        alert('digite os valores')
    } else if (Number(final) - Number(inicio) > 10) {
        alert('A diferença entre inicio e final não pode ser maior que 10')
    } else if (Number(inicio) >= Number(final)) {
        alert('inicio não pode ser maior nem igual ao final')
        console.log(inicio)
        console.log(final)
        
    } else {
        let paragrafo = document.getElementById('resultado')
        let resultado = `\n
        Multiplicando: ${multiplicando}\n 
        Inicio do Intervalo: ${inicio}\n 
        Fim do intervalo: ${final}\n 
        Resultado:\n`

        for (let i = inicio; i <= final; i++) {
            resultado += `${multiplicando} x ${i} = ${multiplicando * i}\n`
        }

        paragrafo.innerText = resultado
    }
};

// função que valida para digitar apenas numeros
const mascaraApenasNumeros = (field) => {
    valor = field.value;
    valor = valor.replace(/\D/g, ""); 					    /**Substitui o que não é dígito por "", /g é [Global][1]*/
    field.value = valor;
};

document.querySelector("#multiplicando").addEventListener("input", function () {
    mascaraApenasNumeros(this);
});
document.querySelector("#inicio").addEventListener("input", function () {
    mascaraApenasNumeros(this);
});
document.querySelector("#final").addEventListener("input", function () {
    mascaraApenasNumeros(this);
});
