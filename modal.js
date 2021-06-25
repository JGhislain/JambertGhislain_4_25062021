function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalDisplay = document.querySelector(".bground");
const modalBoutons = document.querySelectorAll(".modal-btn");
const formulaire = document.querySelectorAll(".formData");
const modalBoutonClose = document.querySelectorAll('.close');
const formulaireId = document.getElementById('formulaire');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const city = document.getElementsByName('location');
const checkbox1 = document.getElementById('checkbox1');

// launch modal event
modalBoutons.forEach((btn) => btn.addEventListener("click", launchModal));

//Event fermeture fenetre d'inscription
modalBoutonClose[0].addEventListener("click", closeModal);

//Execution du code
// launch modal form
function launchModal() {
  modalDisplay.style.display = "block";
}

//Fermeture de la fenetre 
function closeModal() {
  modalDisplay.style.display = "none";
}

//Ecoute du formulaire (partie prénom)
formulaire[0].addEventListener('input', function(e) {
//Création d'une regex pour la validation du prénom  
  let firstRegex = /^[a-zA-Z-]{2,}$/;
//Récupération de la balise span
  let firstError = document.getElementById('first-validation');
//Test du champ prénom
  if (firstRegex.test(firstName.value) == false) {
//Si le prénom ne respecte pas la regex    
    firstError.style.display = 'block';
    firstError.style.color = 'red';
    firstError.style.fontSize = '10px';
    firstError.innerHTML = "Veuillez entrer deux caractères ou plus dans le champs du prénom.";
    return false;

  } else {
//Sinon la regex est valide    
    firstError.style.display = 'none';
    return true;

  }
});

//Ecoute du formulaire (partie nom)
formulaire[1].addEventListener('input', function(e) {
//Création d'une regex pour la validation du nom 
    let lastRegex = /^[a-zA-Z-]{2,}$/;
//Récupération de la balise span
    let lastError = document.getElementById('last-validation');
//Test du champ nom
    if (lastRegex.test(lastName.value) == false) {
//Si le nom ne respecte pas la regex      
      lastError.style.display = 'block';
      lastError.style.color = 'red';
      lastError.style.fontSize = '10px';
      lastError.innerHTML = "Veuillez entrer deux caractères ou plus dans le champs du nom.";
      return false;
  
    } else {
//Sinon la regex est valide       
      lastError.style.display = 'none';
      return true;
  
    }
  });

//Ecoute du formulaire (partie email)
formulaire[2].addEventListener('input', function(e) {
//Création d'une regex pour la validation de l'email
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//Récupération de la balise span
    let emailError = document.getElementById('email-validation');
//Test du champ email
    if (emailRegex.test(email.value) == false) {
//Si l'adresse ne respecte pas la regex
      emailError.style.display = 'block';
      emailError.style.color = 'red';
      emailError.style.fontSize = '10px';
      emailError.innerHTML = "L'adresse éléctronique n'est pas valide";
      return false;

    } else {
//Sinon la regex est valide       
      emailError.style.display = 'none';
      return true;  
    }
  });

//Ecoute du formulaire (partie birthday)
formulaire[3].addEventListener('input', function(e) {
//Création d'une regex pour la validation de la date de naissance
    let birthRegex = /^(19[3-9][0-9]|20[0-1][0-9])[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12][0-9]|3[01])$/;
//Récupération de la balise span
    let birthError = document.getElementById('birth-validation');
//Test du champ birthdate
    if (birthRegex.test(birthdate.value) == false) {
//Si la date ne respecte pas la regex
      birthError.style.display = 'block';
      birthError.style.color = 'red';
      birthError.style.fontSize = '10px';
      birthError.innerHTML = "La date de naissance n'est pas valide";
      return false;

    } else {
//Sinon la regex est valide       
      birthError.style.display = 'none';
      return true;  
    }
  });

//Ecoute du formulaire (partie quantity)
formulaire[4].addEventListener('input', function(e) {
//Création d'une regex pour la validation du nb de tournoi
    let quantityRegex = /^[0-9]{1,2}$/;
//Récupération de la balise span
    let quantityError = document.getElementById('quantity-validation');
//Test du champ quantity
    if (quantityRegex.test(quantity.value) == false) {
//Si le nb ne respecte pas la regex      
      quantityError.style.display = 'block';
      quantityError.style.color = 'red';
      quantityError.style.fontSize = '10px';
      quantityError.innerHTML = "Veuillez entrer un chiffre entre 0 et 99.";
      return false;
  
    } else {
//Sinon la regex est valide       
      quantityError.style.display = 'none';
      return true;
  
    }
  });

//Ecoute du formulaire (partie radio)
formulaire[5].addEventListener('change', function(e) {
//Récupération de la balise span
  let radioError = document.getElementById('radio-validation');

    if (city.checked != null) {
//Si une ville n'est pas séléctionné
      radioError.style.display = 'block';
      radioError.style.color = 'red';
      radioError.style.fontSize = '10px';
      radioError.innerHTML = "Veuillez séléctionner une ville";
      return false;
    } else {
//Sinon la séléction est valide
      radioError.style.display = 'none';
      return true;
    }
  });

//Ecoute du formulaire (partie checkbox)
formulaire[6].addEventListener('change', function(e) {
  //Récupération de la balise span
    let checkboxError = document.getElementById('checkbox-validation');
  
    if (checkbox1.checked == false) {
//Si la case conditions d'utilisation n'est pas séléctionné
      checkboxError.style.display = 'block';
      checkboxError.style.color = 'red';
      checkboxError.style.fontSize = '10px';
      checkboxError.innerHTML = "Veuillez accepté les conditions d'utilisation";
      return false;
    } else {
//Sinon la séléction est valide
      checkboxError.style.display = 'none';
      return true;
    }
  });

/* *******************TRAITEMENT CAS PAR CAS******************
//Ecoute du formulaire dans son ensemble pour valider l'envoi
formulaireId.addEventListener('submit', function(e) {

  if (!firstName.value) {
    
    let firstError = document.getElementById('first-validation');
    firstError.style.display = 'block';
    firstError.style.color = 'red';
    firstError.style.fontSize = '10px';
    firstError.innerHTML = "Veuillez renseigner votre prénom";
    e.preventDefault();
    return false;

  } if (!lastName.value) {
    
    let lastError = document.getElementById('last-validation');
    lastError.style.display = 'block';
    lastError.style.color = 'red';
    lastError.style.fontSize = '10px';
    lastError.innerHTML = "Veuillez renseigner votre nom";
    e.preventDefault();
    return false;

  } if (!email.value) {
    
    let emailError = document.getElementById('email-validation');
    emailError.style.display = 'block';
    emailError.style.color = 'red';
    emailError.style.fontSize = '10px';
    emailError.innerHTML = "Veuillez renseigner votre adresse mail";
    e.preventDefault();
    return false;

  } if (!birthdate.value) {
    
    let birthError = document.getElementById('birth-validation');
    birthError.style.display = 'block';
    birthError.style.color = 'red';
    birthError.style.fontSize = '10px';
    birthError.innerHTML = "Veuillez renseigner votre date de naissance";
    e.preventDefault();
    return false;

  } if (!quantity.value) {
    
    let quantityError = document.getElementById('quantity-validation');
    quantityError.style.display = 'block';
    quantityError.style.color = 'red';
    quantityError.style.fontSize = '10px';
    quantityError.innerHTML = "Veuillez indiquer vos participations aux tournois";
    e.preventDefault();
    return false;

  } if (city.checked != null) {
    
    let radioError = document.getElementById('radio-validation');
    radioError.style.display = 'block';
    radioError.style.color = 'red';
    radioError.style.fontSize = '10px';
    radioError.innerHTML = "Veuillez séléctionner une ville";
    e.preventDefault();
    return false;

  } if (!checkbox1.checked) {
    
    let checkboxError = document.getElementById('checkbox-validation');
    checkboxError.style.display = 'block';
    checkboxError.style.color = 'red';
    checkboxError.style.fontSize = '10px';
    checkboxError.innerHTML = "Les conditions d'utilisation ne sont pas acceptées";
    e.preventDefault();
    return false;

  } else {

    alert("Merci! Votre réservation a été reçue.")

  }
});
*/

//  *************TRAITEMENT GENERIQUE ***************
//Ecoute du formulaire dans sa globalité via "name" pour l'envoi
document.forms["reserve"].addEventListener('submit', function(e) {
//Création d'une variable pour le message d erreur
  var erreur;
//Création d'une variable regroupant tout les éléments du type 'input'  
  var inputs = this;
//Création d'une boucle for pour toutes les entrées du formulaire
  for (var i = 0; i < inputs.length; i++) {
//Si une des entrées d'input' n'a pas de valeur
    if (!inputs[i].value) {
      erreur = "Veuillez renseigner tout les champs";
    }
//Si pas de valeur retourne une erreur défini ici
  } if (erreur) {

    e.preventDefault();
    document.getElementById('error-validation').innerHTML = erreur;
    document.getElementById('error-validation').style.color = 'red';
    document.getElementById('error-validation').style.fontSize = '14px';
    return false;
//Sinon le formulaire est envoyé
  } else {
    alert("Merci! Votre réservation a été reçue.");
  }
});