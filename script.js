const email = document.getElementById("email");
const name = document.getElementById("name");
const formation = document.getElementById("formation");
const total_participants = document.getElementById("total-participants");
const total_selection = document.getElementById("total_selection");
const Ajouter = document.getElementById("Ajouter");
const form = document.getElementById("form");
const emailError = document.getElementById("email-error");
const nameerror = document.getElementById("nameerror");
const Ajouterform = document.getElementById("Ajouterform");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,30}$/;

    if (regex.test(email.value)) {
        emailError.textContent = "";
        console.log("Email valide");
    } else {
        emailError.textContent = "Veuillez entrer un email valide";
    }
    if (nameRegex.test(name.value)) {
        nameerror.textContent = "";

    } else {
        nameerror.textContent = "Veuillez entrer un name valide"
    }
});

let participants = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();
 

    let participant = {
        name: name.value,
        formation: formation.value,
        email: email.value
    }
    participants.push(participant);
     localStorage.setItem("participants", JSON.stringify(participants));
      showcart(participants);
   
    total_participants.textContent = participants.length;

    // console.log(participants);
       form.reset() = "";
})


 function showcart(data){
Ajouterform.innerHTML = "" ;

data.forEach(element => {
const div = document.createElement("div");


div.innerHTML += `
   
<div class="flex items-center gap-5 w-full bg-white border border-gray-200 rounded-2xl px-6 py-5">

 
  <input
    type="checkbox"
    class="w-6 h-6 shrink-0 rounded-md border-gray-300 accent-emerald-600 cursor-pointer"
  />


  
  <div class="flex-1 min-w-0">
    <h3 class="text-base font-semibold text-gray-900 truncate">
         ${element.name}
    </h3>

    <p class="text-sm text-gray-500 truncate">
     ${element.email}
    </p>
  </div>

  
  <span class="shrink-0 px-5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
    ${element.formation}
  </span>

  
  <button class="shrink-0 ml-3 text-gray-400 hover:text-red-500 transition">
    
  </button>

</div>

`
Ajouterform.append(div);
});
   
  
 }
   




