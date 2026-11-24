const email = document.getElementById("email");
const name = document.getElementById("name");
const formation = document.getElementById("formation");
const total_participants = document.getElementById("total-participants");
const Ajouter = document.getElementById("Ajouter");
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

let participants = [] ;

form.addEventListener("submit" , function(e){
    e.preventDefault();
    form.value = "";
      
    let participant = {
        name : name.value ,
        formation : formation.value ,
        email : email.value
    }
    participants.push(participant);
    localStorage.setItem("participants" , JSON.stringify(participants));
    total_participants.textContent = participants.length ;

   console.log(participants);
})
  




