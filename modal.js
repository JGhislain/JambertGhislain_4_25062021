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
const formData = document.querySelectorAll(".formData");
const modalBoutonClose = document.querySelectorAll('.close');
const formulaire = document.getElementById('formulaire');
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
formData[0].addEventListener('input', function(e) {
  //Création d'une variable pour une regex de validation du prénom  
  let firstRegex = /^[a-zA-Z '\-éèêëçäâàù]{2,}$/;
  //Récupération de la balise span
  let firstValidate = document.getElementById('first-validation');
  //Test du champ prénom
  if (firstRegex.test(firstName.value) == false) {
    //Si le prénom ne respecte pas la regex    
    firstValidate.style.display = 'block';
    firstValidate.style.color = 'red';
    firstValidate.style.fontSize = '13px';
    firstValidate.innerHTML = "Veuillez entrer deux caractères ou plus dans le champs du prénom.";
    return false;

  } else {
    //Sinon la regex est valide    
    firstValidate.style.display = 'none';
    return true;

  }
});

//Ecoute du formulaire (partie nom)
formData[1].addEventListener('input', function(e) {
  //Création d'une variable pour une regex de validation du nom 
  let lastRegex = /^[a-zA-Z '\-éèêëçäâàù]{2,}$/;
  //Récupération de la balise span
  let lastValidate = document.getElementById('last-validation');
  //Test du champ nom
  if (lastRegex.test(lastName.value) == false) {
  //Si le nom ne respecte pas la regex      
    lastValidate.style.display = 'block';
    lastValidate.style.color = 'red';
    lastValidate.style.fontSize = '13px';
    lastValidate.innerHTML = "Veuillez entrer deux caractères ou plus dans le champs du nom.";
    return false;

  } else {
    //Sinon la regex est valide       
    lastValidate.style.display = 'none';
    return true;

  }
});
//Création d'une variable qui vérifie la bonne saisie de l'adresse mail
var validationEmailRegex = false;

//Ecoute du formulaire (partie email)
formData[2].addEventListener('input', function(e) {
  //Création d'une variable pour une regex de validation de l'email
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //Récupération de la balise span
  let emailValidate = document.getElementById('email-validation');
  //Test du champ email
  if (emailRegex.test(email.value) == false) {
    //Si l'adresse ne respecte pas la regex
    emailValidate.style.display = 'block';
    emailValidate.style.color = 'red';
    emailValidate.style.fontSize = '13px';
    emailValidate.innerHTML = "L'adresse éléctronique n'est pas valide";
    validationEmailRegex = false;
    return false;

  } else {
    //Sinon la regex est valide       
    emailValidate.style.display = 'none';
    validationEmailRegex = true;
    return true;  
  }
});
//Création d'une variable qui vérifie la bonne saisie du la date de  naissance
var validationBirthRegex = false;

//Ecoute du formulaire (partie birthday)
formData[3].addEventListener('input', function(e) {
  //Création d'une variable pour une regex de validation de la date de naissance
  let birthRegex = /^(19[0-9][0-9]|20[0][0-8])[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12][0-9]|3[01])$/;
  //Récupération de la balise span
  let birthValidate = document.getElementById('birth-validation');
  //Test du champ birthdate
  if (birthRegex.test(birthdate.value) == false) {
    //Si la date ne respecte pas la regex
    birthValidate.style.display = 'block';
    birthValidate.style.color = 'red';
    birthValidate.style.fontSize = '13px';
    birthValidate.innerHTML = "La date de naissance n'est pas valide";
    validationBirthRegex = false;
    return false;

  } else {
    //Sinon la regex est valide       
    birthValidate.style.display = 'none';
    validationBirthRegex = true;
    return true;  
  }
});

//Ecoute du formulaire (partie quantity)
formData[4].addEventListener('input', function(e) {
  //Création d'une variable pour une regex de validation du nb de tournoi
  let quantityRegex = /^[0-9]{1,2}$/;
  //Récupération de la balise span
  let quantityValidate = document.getElementById('quantity-validation');
  //Test du champ quantity
  if (quantityRegex.test(quantity.value) == false) {
    //Si le nb ne respecte pas la regex      
    quantityValidate.style.display = 'block';
    quantityValidate.style.color = 'red';
    quantityValidate.style.fontSize = '13px';
    quantityValidate.innerHTML = "Veuillez entrer un chiffre entre 0 et 99.";
    return false;

  } else {
    //Sinon la regex est valide       
    quantityValidate.style.display = 'none';
    return true;

  }
});

//Ecoute du formulaire (partie checkbox)
formData[6].addEventListener('change', function(e) {
  //Récupération de la balise span
  let checkboxValidate = document.getElementById('checkbox-validation');

  if (checkbox1.checked == false) {
    //Si la case conditions d'utilisation n'est pas séléctionné
    checkboxValidate.style.display = 'block';
    checkboxValidate.style.color = 'red';
    checkboxValidate.style.fontSize = '13px';
    checkboxValidate.innerHTML = "Veuillez accepté les conditions d'utilisation";
    return false;
  } else {
    //Sinon la séléction est valide
    checkboxValidate.style.display = 'none';
    return true;
  }
});

// TRAITEMENT CAS PAR CAS

//Création d'une variable qui définira si les différentes conditions d'envoie au cas par cas sont remplis
var validationChampsIndividuel = false;
//Ecoute du formulaire dans son ensemble pour valider l'envoi
formulaire.addEventListener('submit', function(e) {

  if (firstName.value.length < 2) {
  // si moins de 2 caractères saisie dans le champ prénom alors le champ n est pas valide et l envoi est refusé
    let firstValidate = document.getElementById('first-validation');
    firstValidate.style.display = 'block';
    firstValidate.style.color = 'red';
    firstValidate.style.fontSize = '13px';
    firstValidate.innerHTML = "Veuillez renseigner votre prénom";
    e.preventDefault();
    return validationChampsIndividuel = false;

  } else if (lastName.value. length < 2) {
    // si moins de 2 caractères saisie dans le champ nom alors le champ n est pas valide et l envoi est refusé
    let lastValidate = document.getElementById('last-validation');
    lastValidate.style.display = 'block';
    lastValidate.style.color = 'red';
    lastValidate.style.fontSize = '13px';
    lastValidate.innerHTML = "Veuillez renseigner votre nom";
    e.preventDefault();
    return validationChampsIndividuel = false;

  } else if (!email.value || validationEmailRegex === false) {
    // si champ email vide ou si la variable validationEmailRegex = false alors le champ n est pas valide et l envoi est refusé
    let emailValidate = document.getElementById('email-validation');
    emailValidate.style.display = 'block';
    emailValidate.style.color = 'red';
    emailValidate.style.fontSize = '13px';
    emailValidate.innerHTML = "Veuillez renseigner votre adresse mail";
    e.preventDefault();
    return validationChampsIndividuel = false;

  } else if (validationBirthRegex === false) {
    // si la variable validationBirthRegex = false alors le champ n est pas valide et l envoi est refusé
    let birthValidate = document.getElementById('birth-validation');
    birthValidate.style.display = 'block';
    birthValidate.style.color = 'red';
    birthValidate.style.fontSize = '13px';
    birthValidate.innerHTML = "Vous devez avoir plus de 13 ans ou entrer une adresse valide";
    e.preventDefault();
    return validationChampsIndividuel = false;

  } else if (!quantity.value || quantity.value < 0) {
    // si aucune quantité saisie ou si la valeur est négative alors le champs n'est pas valide et l envoi est refusé
    let quantityValidate = document.getElementById('quantity-validation');
    quantityValidate.style.display = 'block';
    quantityValidate.style.color = 'red';
    quantityValidate.style.fontSize = '13px';
    quantityValidate.innerHTML = "Veuillez indiquer vos participations aux tournois ou entrer un chiffre entre 0 et 99";
    e.preventDefault();
    return validationChampsIndividuel = false;

  } else if (!(city[0].checked || city[1].checked || city[2].checked || city[3].checked || city[4].checked || city[5].checked)) {
    //si aucune ville séléctionné l envoi est refusé
    let radioValidate = document.getElementById('radio-validation');
    radioValidate.style.display = 'block';
    radioValidate.style.color = 'red';
    radioValidate.style.fontSize = '13px';
    radioValidate.innerHTML = "Veuillez séléctionner une ville";
    e.preventDefault();
    return validationChampsIndividuel = false;

  } else if (!checkbox1.checked) {
    //si la case n'est pas coché l envoi est refusé
    let checkboxValidate = document.getElementById('checkbox-validation');
    checkboxValidate.style.display = 'block';
    checkboxValidate.style.color = 'red';
    checkboxValidate.style.fontSize = '13px';
    checkboxValidate.innerHTML = "Les conditions d'utilisation ne sont pas acceptées";
    e.preventDefault();
    return validationChampsIndividuel = false;

  } else {
    //sinon les champs sont valides et return true sur la variable validationChampsIndividuel
    validationChampsIndividuel = true;
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(birthdate.value);
    console.log(quantity.value);
    console.log(document.querySelector("input[name='location']:checked").value);
    return validationChampsIndividuel = true;

  }
});


//TRAITEMENT DE LA VALIDATION GLOBALE
//Création d'une variable qui définira si les conditions globale d'envoie sont remplis
var validationChampsTexte = false;

//Ecoute du formulaire dans sa globalité via "name" pour l'envoi
document.forms["reserve"].addEventListener('submit', function(e) {
//Création d'une variable pour le message d erreur
  var erreur;
//Création d'une variable regroupant tout les éléments du type 'input' grâce à l'opérateur this
  var inputs = this;
//Création d'une boucle for pour toutes les entrées du formulaire
  for (var i = 0; i < inputs.length; i++) {
//Si une des entrées d'input' n'a pas de valeur
    if (!inputs[i].value) {
      
      erreur = "Veuillez renseigner tout les champs";
      break;

    }
//Si pas de valeur retourne une erreur défini ici
  } if (erreur) {

    e.preventDefault();
    document.getElementById('error-validation').innerHTML = erreur;
    document.getElementById('error-validation').style.transition = '0.3s';
    document.getElementById('error-validation').style.color = '#e54858';
    document.getElementById('error-validation').style.fontSize = '16px';
    return validationChampsTexte = false;
//Sinon return validationChampsTexte = true
  } else {
    
    console.log("Bravo! Les champs de textes sont remplis.");
    document.getElementById('error-validation').style.display = 'none';
    return validationChampsTexte = true;
  
  }
});

//Validation des vérifications des conditions au cas par cas et globale
formulaire.addEventListener('submit', function(e) {
//Si validationChamps = true et validationGlobale = true alors le document est envoyé avec message de confirmation  
  if ((validationChampsTexte === true) && (validationChampsIndividuel === true)) {
    
    alert("Merci! Votre réservation a été reçue.");
    return true;
  
  } else {
    e.preventDefault;
    return false;
  }
});