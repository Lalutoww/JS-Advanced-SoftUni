function notify(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    notification.addEventListener('click', clickHandler);

    function clickHandler() {
        notification.style.display = 'none';
    }
}
