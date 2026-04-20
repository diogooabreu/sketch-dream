(function () {
    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('input-name').value;
        const password = document.getElementById('input-password').value;

        if (verificacao(username, password)) {
            window.location.href = 'feed.html';
        } else {
            if (username.length === 0 || password.length === 0) {
                alertify.error('Por favor, preencha todos os campos.');
            } else {
                alertify.alert('Nome de usuário ou senha incorretos.');
            }
        }
    });

    function verificacao(username, password) {
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData && userData.user === username && userData.password === password) {
            return true;
        }

        return false;
    }
})();
