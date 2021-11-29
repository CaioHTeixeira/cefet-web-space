// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const paragraphs = document.querySelectorAll('.botao-expandir-retrair');

Array.from(paragraphs).forEach((item, index) => {
    item.addEventListener('click', e => {
        let colocou = item.parentNode.classList.toggle('expandido');

        if (colocou) {
            item.textContent = "-";
        } else {
            item.textContent = "+";
        }
    })
})