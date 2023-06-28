function validate() {
    const input = document.getElementById('email');
    input.addEventListener('change', changeHandler);

    function changeHandler(e) {
        const target = e.target;
        const value = target.value;
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        const isRemoveOperation = pattern.test(value);

        const operation = isRemoveOperation ? 'remove' : 'add';
        target.classList[operation]('error');
    }
}
