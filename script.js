const email = document.getElementById("email");
const name = document.getElementById("name");
const form = document.getElementById("form");
const emailError = document.getElementById("email-error");
const nameerror = document.getElementById("nameerror");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,30}$/;

    if (regex.test(email.value)) {
         emailError.textContent = "";
        console.log("Email valide");
    } else {
        emailError.textContent = "Veuillez entrer un email valide";
    }
    if(nameRegex.test(name.value)){
        nameerror.textContent = "";

    }else{
        nameerror.textContent = "Veuillez entrer un name valide"
    }
});





