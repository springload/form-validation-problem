// Input fields
const getElement = id => document.getElementById(id);
const email = getElement('email');
const password = getElement('password');
const color = getElement('colour');
const animalParent = getElement('bear').parentElement;
const animals = ['bear', 'tiger', 'snake', 'donkey'].map(animal => getElement(animal));
const tiger = getElement('tiger');
const typeOfTiger = getElement('tiger_type');
const newDiv = document.createElement('div');

// Checks for a valid email with regex
function validateEmail() {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (regex.test(String(email.value).toLocaleLowerCase())) return isValid(email.parentElement);
  isInvalid(email.parentElement, 'Please enter a valid email');
  return false;
}

// Makes sure the password is longer than 8 characters
function validatePassword() {
  if (password.value.length > 8) return isValid(password.parentElement);
  isInvalid(password.parentElement, 'Password must be longer than 8 characters');
  return false;
}

// Checks that a color has been selected
function validateColorSelect() {
  if (color.value !== '') return isValid(color.parentElement);
  isInvalid(color.parentElement, 'Please select a color');
  return false;
}

// Checks to see if 2 or more animals were picked
function wereAnimalsPicked() {
  let chosenAnimals = 0;
  animals.forEach(animal => animal.checked && chosenAnimals++);
  if (chosenAnimals >= 2) return true;
  return false;
}

// If less than 2 animals were picked field is invalid
function validateAnimal() {
  if (wereAnimalsPicked()) return isValid(animalParent)
  isInvalid(animalParent, 'Choose at least 2 animals');
  return false;
}

// Checks that type of tiger is not empty if tiger was picked
function validateTigerPick() {
  if (!tiger.checked || tiger.checked && typeOfTiger.value !== '') return isValid(typeOfTiger.parentElement);
  isInvalid(typeOfTiger.parentElement, 'Type of tiger is required if animal tiger is chosen');
  return false;
}

// Adds error styling to parent class and red helper text under field
function isInvalid(parentElement, text) {
  parentElement.className = 'error';
  parentElement.lastElementChild.insertAdjacentElement('afterend', newDiv);
  parentElement.lastElementChild.className = 'helper-text';
  parentElement.lastElementChild.id = 'helper-text';
  parentElement.lastElementChild.innerHTML = text;
  return false;
}

//  Removes error class from parent and removes heper-text node
function isValid(parentElement) {
  parentElement.className = '';
  if (parentElement.lastElementChild.id === 'helper-text') {
    parentElement.lastElementChild.remove();
  }
  return true;
}
