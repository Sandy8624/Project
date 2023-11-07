let form = document.getElementById("myform");
let email = document.getElementById("myemail");
let password = document.getElementById("mypassword");

form.addEventListener('submit', (data) => {

    if (!validateInputs()) {
        data.preventDefault();
    }
})

function validateInputs() {
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    let success = true;
    
    if (emailVal === '') {
        success = false;
        setError(email, '*Email is required')
        return false;
    }
    else if (!validateemail(emailVal)) {
        success = false;
        setError(email, '*Please enter a valid email')
        return false;
    }
    else {
        setSuccess(email)
    }

    if (passwordVal === '') {
        success = false;
        setError(password, '*Password is required')
        
    }
    else if (passwordVal.length < 8) {
        success = false;
        setError(password, '*Password must be atleast 8 characters long')

    }
    else {
        setSuccess(password)
    }

    return success;

}

function setError(element, message) {
    const input = element.parentElement;
    const errorElement = input.querySelector('.error')

    errorElement.innerText = message;
    input.classList.add('error')
    input.classList.remove('success')
}

function setSuccess(element) {
    const input = element.parentElement;
    const errorElement = input.querySelector('.error')

    errorElement.innerText = '';
    input.classList.add('success')
    input.classList.remove('error')
}

function validateemail(email) {
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
}

