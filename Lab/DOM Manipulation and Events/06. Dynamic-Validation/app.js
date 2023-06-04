function validate() {
    //Get input
    const email = document.getElementById('email');
    
    email.addEventListener('change', validate);
    // Change event: When the element loses focus after its value was changed.

    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/; 
    //regex for email -> <name>@<domain>.<extension>

    //Define Function
    function validate(e){
        const emailField = e.target
        if(reg.test(emailField.value)){
            emailField.classList.remove('error');
            return;
        }
        emailField.classList.add('error');
    }

}
