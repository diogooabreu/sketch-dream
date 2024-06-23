document.getElementById('join-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('input-name').value;
    const password = document.getElementById('input-password').value;

    if (!isValidPassword(password)) {
        alert('Invalid password. Your password must contain at least one number and cannot be a simple string.');
        return;
    }

    const userId = generateUserId();

    const userData = {
        userId: userId,
        name: name,
        password: password
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    alert(`Welcome, ${name}!`);

    window.location.href = '../index.html';
});

function isValidPassword(password) {
    const regexSequential = /^(?:123456789|abcdefg|ABCDEFG)$/;
    const regexNumber = /\d/;

    if (regexSequential.test(password) || !regexNumber.test(password)) {
        return false;
    }

    return true;
}

function generateUserId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
