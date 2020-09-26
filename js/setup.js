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

let arrayRandElement = function (arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

let getRandomObjects = function () {
  let array = [];
  for (let i = 0; i < 4; i++) {
    let object = {
      name: arrayRandElement(names) + ` ` + arrayRandElement(surnames),
      coatColor: arrayRandElement(coatColors),
      eyesColor: arrayRandElement(eyesColors)
    };
    array.push(object);
  }
  return array;
};


let renderPlayersSetting = function () {
  let randomObjects = getRandomObjects();
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
}

renderPlayersSetting();
