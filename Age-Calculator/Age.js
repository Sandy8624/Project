function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    
    if (birthdate === "") {
        alert("Please enter your birthdate.");
        return;
    }
    
    const today = new Date();
    const birthDate = new Date(birthdate);
    
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    
    let ageInMonths = today.getMonth() - birthDate.getMonth();
    if (today.getDate() < birthDate.getDate()) {
        ageInMonths--;
    }
    
    const ageInDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));
    
    const result = document.getElementById("result");
    document.getElementById("years").textContent = `${ageInYears} years`;
    document.getElementById("months").textContent = `${Math.abs(ageInMonths)} months`;
    document.getElementById("days").textContent = `${Math.abs(ageInDays)} days`;
}