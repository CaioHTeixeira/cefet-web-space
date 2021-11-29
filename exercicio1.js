// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let inputResultado = document.querySelector('#resultado');
const btnCalcular = document.querySelector('#calcular');
const inputConstante = document.querySelector('#constante');
const inputMassa1 = document.querySelector('#massa1');
const inputMassa2 = document.querySelector('#massa2');
const inputDistancia = document.querySelector('#distancia');

btnCalcular.addEventListener('click', () => {
    let resultado = (inputConstante.value * inputMassa1.value 
        * inputMassa2.value)/(Math.pow(inputDistancia.value, 2));
    
    inputResultado.value = resultado;
})
