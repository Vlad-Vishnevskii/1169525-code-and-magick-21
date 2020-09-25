'use strict';

let names =
  [`Иван`,
    `Хуан Себастьян`,
    `Мария`,
    `Кристоф`,
    `Виктор`,
    `Юлия`,
    `Люпита`,
    `Вашингтон`];

let surnames =
  [`да Марья`,
    `Верон`,
    `Мирабелла`,
    `Вальц`,
    `Онопко`,
    `Топольницкая`,
    `Нионго`,
    `Ирвинг`];

let coatColors =
  [`rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`];

let eyesColors =
  [`black`,
    `red`,
    `blue`,
    `yellow`,
    `green`];

let renderRandomObjects = function (array) {
  function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }

  for (let i = 0; i < 4; i++) {
    array[i] = {
      name: arrayRandElement(names) + ` ` + arrayRandElement(surnames),
      coatColor: arrayRandElement(coatColors),
      eyesColor: arrayRandElement(eyesColors)
    };
  }
};

let randomObjects = [];

renderRandomObjects(randomObjects);


let userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);

let similarListElement = userDialog.querySelector(`.setup-similar-list`);

let similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

let renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

let fragment = document.createDocumentFragment();
for (let i = 0; i < randomObjects.length; i++) {
  fragment.appendChild(renderWizard(randomObjects[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
