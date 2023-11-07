const form = document.querySelector('#form');
const email = document.querySelector('#email');
const success = document.querySelector('#success')

form.addEventListener('submit', (e) => {
    if (!validateEmail2()) {
        e.preventDefault();
    }
});

function validateEmail2() {

    const emailVal = email.value.trim();
    const specificEmail = 'sandy@gmail.com';
    let success = true;

    if (emailVal === specificEmail) {
        alert('sucess');
        setSuccessState(state, "sandy@gmail.com")
        return true;
    }
    else {
        setError(email, 'Valid email required'); 
                return false;
    }
}

function setError(email, message) {
    
    const input = email.parentElement;
    const errorElement = input.querySelector('.error');

    errorElement.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');
}

function setSuccess(email) {
    const input = email.parentElement;
    const successElement = input.querySelector('.success');

    successElement.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
}

function setSuccessState(success, message) {
    const input = success.parentElement;
    const successstateElement = input.querySelector('.state')

    successstateElement.innerText = '';
    input.classList.add('state');
    input.classList.remove('error');
}
{
    console.log("SANDY SANTHOSH")
}