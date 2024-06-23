document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.btn-close');
    closeButton.addEventListener('click', function() {
        window.location.href = '../../../app/index.html';
    });
});