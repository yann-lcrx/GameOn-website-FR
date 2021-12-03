function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName("close")[0];
const submitBtn = document.getElementsByClassName("btn-submit")[0];
const termsOfUse = document.getElementById("terms-of-use");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const numberOfEntries = document.getElementById("quantity");
const allFields = document.getElementsByTagName("input");
const form = document.getElementsByTagName("form")[0];
const validationAlert = document.getElementsByClassName("validation")[0];
const validationBtn = document.getElementsByClassName("btn-validation")[0];

// Error messages
const noFirstName = "Veuillez renseigner votre prénom.";
const shortFirstName = "Le prénom doit contenir au minimum deux caractères.";
const noLastName = "Veuillez renseigner votre nom.";
const shortLastName = "Le nom doit contenir au minimum deux caractères.";
const invalidBirthdate = "Veuillez renseigner une date de naissance complète.";
const noEmail = "Veuillez renseigner une adresse électronique.";
const invalidEmail = "Veuillez renseigner une adresse électronique valide.";
const invalidEntries =
  "Veuillez renseigner un nombre de participations valide.";
const noCity = "Veuillez sélectionner une ville.";
const noAgreement = "Veuillez accepter les conditions d'utilisation.";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", () => {
  closeModal();
  resetValidationAlert();
});

// same on validation screen
validationBtn.addEventListener("click", () => {
  closeModal();
  resetValidationAlert();
});

// validate form event
submitBtn.addEventListener("click", (submission) => {
  clearErrorMessages();
  submission.preventDefault();
  if (validateInput()) {
    displayValidationAlert();
  } else {
    addErrorMessage();
  }
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// add error message
function addErrorMessage() {
  if (!firstName.value) {
    firstName.nextElementSibling.innerText = noFirstName;
  }
  if (firstName.value.length === 1) {
    firstName.nextElementSibling.innerText = shortFirstName;
  }
  if (!lastName.value) {
    lastName.nextElementSibling.innerText = noLastName;
  }
  if (lastName.value.length === 1) {
    lastName.nextElementSibling.innerText = shortLastName;
  }
  if (!email.checkValidity() && !email.value) {
    email.nextElementSibling.innerText = noEmail;
  } else if (!email.checkValidity()) {
    email.nextElementSibling.innerText = invalidEmail;
  }
  if (!birthdate.checkValidity()) {
    birthdate.nextElementSibling.innerText = invalidBirthdate;
  }
  if (!numberOfEntries.checkValidity()) {
    numberOfEntries.nextElementSibling.innerText = invalidEntries;
  }
  if (!termsOfUse.checkValidity()) {
    document.getElementsByClassName("no-agreement")[0].innerText = noAgreement;
  }
  if (!document.getElementsByName("location")[0].checkValidity()) {
    document.getElementsByClassName("no-city")[0].innerText = noCity;
  }
}

function clearErrorMessages() {
  for (let errMessage of document.getElementsByClassName("err-message")) {
    errMessage.innerText = "";
  }
}

// validate form
function validateInput() {
  let valid = true;
  for (let input of allFields) {
    if (!input.checkValidity()) {
      input.classList.add("is-invalid");
      valid = false;
    } else {
      input.classList.remove("is-invalid");
    }
  }

  return valid;
}

// display validation message
function displayValidationAlert() {
  form.classList.add("invisible");
  validationAlert.classList.remove("invisible");
}

// displays form for next use
function resetValidationAlert() {
  form.classList.remove("invisible");
  validationAlert.classList.add("invisible");
}
