function validateNumber() {

    // paragrafo que ira imprimir o resultado:
    let p = document.getElementById('paragrafo')

    // zerar o paragrafo sempre que executar a função
    p.innerHTML = ''

    //pegando os numeros do input para trabalhar com eles:
    const numeros = document.querySelector('#number').value;

    // codigo para executar as condições pedidas no exercicio:
    if (numeros.length != 4) {
        alert('este numero não contem 4 digitos')
    } else if (numeros < 1000) {
        alert('Numero não está entre 1000 e 9999')
    } else {
        let pares = '';
        
        for(var i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 == 0){
                pares += numeros[i]
            }
        }
  
        p.innerHTML = `Contem ${pares.length} Números Pares`

    }
};

// função que valida para digitar apenas numeros
const mascaraApenasNumeros = (field) => {
    valor = field.value;
    valor = valor.replace(/\D/g, ""); 					    /**Substitui o que não é dígito por "", /g é [Global][1]*/
    field.value = valor;
};

document.querySelector("#number").addEventListener("input", function () {
    mascaraApenasNumeros(this);
});
