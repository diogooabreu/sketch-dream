(function () {
    document.getElementById('join-form').addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;

        const nameInput = document.getElementById('input-name');
        const emailInput = document.getElementById('input-email');
        const emailError = document.getElementById('email-error');
        const rememberMeChek = document.getElementById('rememberMe');

        if (!emailInput.checkValidity()) {
            isValid = false;
            emailError.textContent = 'insira um e-mail válido!!!';
        } else {
            emailError.textContent = '';
        }

        const passwordInput = document.getElementById('input-password');
        const errorPassword = document.getElementById('password-error');

        if (!passwordInput.checkValidity()) {
            isValid = false;
            errorPassword.textContent = 'A senha deve ter entre 8 e 20 caracteres!!!!'
        } else {
            errorPassword.textContent = '';
        }
        
        if (isValid) {
            const userData = {
                user: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            };

            if (rememberMeChek.checked) {
                localStorage.setItem('userData', JSON.stringify(userData));
                alert(`Bem vindo ${userData.user}`);
            } else {
                alert(`Bem vindo ${userData.user}, seus dados não serão salvos, deseja mesmo seguir?`);
            }

            window.location.href = 'feed.html';
        }
    }) 
})();

