//tornar a senha visivel
let btn = document.querySelector('#pass-eye');

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#input-password');

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.btn-close');
    closeButton.addEventListener('click', function() {
        window.location.href = '../../../app/index.html';
    });
});
