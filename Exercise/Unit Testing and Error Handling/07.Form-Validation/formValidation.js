function validate() {
    //Get inputs
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const isCompany = document.getElementById('company');
    const submitBtn = document.getElementById('submit');

    //Hidden for now
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const valid = document.getElementById('valid');

    //Regex Patterns
    const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    const passwordPattern = /^[\w]{5,15}$/;
    const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;

    submitBtn.addEventListener('click', clickHandler);
    isCompany.addEventListener('change', changeHandler);

    function changeHandler() {
        if (isCompany.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }

    function clickHandler(event) {
        const validatedItemsArr = [];
        if (event.target.matches('#submit')) {
            event.preventDefault();
        }
        //Username Check
        if (usernamePattern.test(username.value)) {
            username.style.border = 'none';
            validatedItemsArr.push(true);
        } else {
            username.style.borderColor = 'red';
            validatedItemsArr.push(false);
        }
        //Email Check
        if (emailPattern.test(email.value)) {
            email.style.border = 'none';
            validatedItemsArr.push(true);
        } else {
            email.style.borderColor = 'red';
            validatedItemsArr.push(false);
        }
        //Password Check
        if (
            passwordPattern.test(password.value) === true &&
            password.value === confirmPassword.value &&
            passwordPattern.test(confirmPassword.value) === true
        ) {
            password.style.border = 'none';
            confirmPassword.style.border = 'none';
            validatedItemsArr.push(true);
        } else {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            validatedItemsArr.push(false);
        }
        //Company Number Check
        if (isCompany.checked) {
            if (companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumber.style.border = 'none';
                validatedItemsArr.push(true);
            } else {
                companyNumber.style.borderColor = 'red';
                validatedItemsArr.push(false);
            }
        }
        if (!validatedItemsArr.includes(false)) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }
    }
}
