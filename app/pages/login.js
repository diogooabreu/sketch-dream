document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('input-name').value;
    const password = document.getElementById('input-password').value;

    if (verificarLogin(username, password)) {
        window.location.href = '../index.html';
    } else {
        alert('Incorrect username or password.');
    }
});

function verificarLogin(username, password) {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.name === username && userData.password === password) {
        return true;
    }

    return false;
}
