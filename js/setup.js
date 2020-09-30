'use strict';

const names =
  [`Иван`,
    `Хуан Себастьян`,
    `Мария`,
    `Кристоф`,
    `Виктор`,
    `Юлия`,
    `Люпита`,
    `Вашингтон`];

const surnames =
  [`да Марья`,
    `Верон`,
    `Мирабелла`,
    `Вальц`,
    `Онопко`,
    `Топольницкая`,
    `Нионго`,
    `Ирвинг`];

const coatColors =
  [`rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`];

const eyesColors =
  [`black`,
    `red`,
    `blue`,
    `yellow`,
    `green`];

const fireballColors =
  [`#ee4830`,
    `#30a8ee`,
    `#5ce6c0`,
    `#e848d5`,
    `#e6e848`];

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);
const userDialog = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = document.querySelector(`.setup-close`);
const setupWizard = userDialog.querySelector(`.setup-wizard`);
const setupWizardCoat = setupWizard.querySelector(`.wizard-coat`);
const setupWizardEyes = setupWizard.querySelector(`.wizard-eyes`);
const setupWizardFireball = userDialog.querySelector(`.setup-fireball-wrap`);
const inputWizardCoat = userDialog.querySelector(`input[name=coat-color]`);
const inputWizardEyes = userDialog.querySelector(`input[name=eyes-color]`);
const inputWizardFireball = userDialog.querySelector(`input[name=fireball-color]`);

const onUserDialogEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    evt.stopPropagation();
    userDialog.classList.add(`hidden`);
  }
};

const openUserDialog = function () {
  userDialog.classList.remove(`hidden`);

  setupOpen.addEventListener(`keydown`, onUserDialogEscPress);
};

const closeUserDialog = function () {
  userDialog.classList.add(`hidden`);

  setupClose.removeEventListener(`keydown`, onUserDialogEscPress);
};

const arrayRandElement = function (arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const getRandomWizard = function () {
  return {
    name: arrayRandElement(names) + ` ` + arrayRandElement(surnames),
    coatColor: arrayRandElement(coatColors),
    eyesColor: arrayRandElement(eyesColors)
  };
};

const getRandomObjects = function () {
  const array = [];
  for (let i = 0; i < 4; i++) {
    array.push(getRandomWizard());
  }
  return array;
};

const renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fillingElements = function () {
  const similarListElement = document.querySelector(`.setup-similar-list`);
  let fragment = document.createDocumentFragment();
  const randomObjects = getRandomObjects();
  for (let i = 0; i < randomObjects.length; i++) {
    fragment.appendChild(renderWizard(randomObjects[i]));
  }
  similarListElement.appendChild(fragment);
};

const changeWizardColorFill = function (element, arrayColors, input) {
  element.style.fill = arrayRandElement(arrayColors);
  input.value = element.style.fill;
};

const changeWizardColorBackground = function (element, arrayColors, input) {
  let randomFireBallColor = arrayRandElement(arrayColors);
  element.style.background = randomFireBallColor;
  input.value = randomFireBallColor;
};

setupOpen.addEventListener(`click`, function () {
  openUserDialog();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openUserDialog();
  }
});

setupClose.addEventListener(`click`, function () {
  closeUserDialog();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closeUserDialog();
  }
});

fillingElements();

setupWizardCoat.addEventListener(`click`, function () {
  changeWizardColorFill(setupWizardCoat, coatColors, inputWizardCoat);
});

setupWizardEyes.addEventListener(`click`, function () {
  changeWizardColorFill(setupWizardEyes, eyesColors, inputWizardEyes);
});

setupWizardFireball.addEventListener(`click`, function () {
  changeWizardColorBackground(setupWizardFireball, fireballColors, inputWizardFireball);
});
