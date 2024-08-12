const form = document.getElementById('form-comparacao');
const numeroA = document.getElementById('numeroA');
const numeroB = document.getElementById('numeroB');
const h3Element = document.getElementById('menor-element');

function checarMenor(A, B){
    return A<B
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemMaior = `<b>Incorreto!</b> ${numeroA.value} é maior que ${numeroB.value}`
    const mensagemMenor = `<b>Correto!</b> ${numeroA.value} é menor que ${numeroB.value}`

    if(numeroA.value < numeroB.value){
        const containerMensagemMenor = document.querySelector('.success-message');

        containerMensagemMenor.innerHTML = mensagemMenor;
        containerMensagemMenor.style.display = 'block';

        document.getElementById('menor-element').style.color = '#27ae60';
    } else{
        const containerMensagemMenor = document.querySelector('.failure-message');

        containerMensagemMenor.innerHTML = mensagemMaior;
        containerMensagemMenor.style.display = 'block';

        document.getElementById('menor-element').style.color = 'red';
    }

})