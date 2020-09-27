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

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const userDialog = document.querySelector(`.setup`);

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

const showSimilarWizards = function () {
  userDialog.classList.remove(`hidden`);
  document.querySelector(`.setup-similar`).classList.remove(`hidden`);
  userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
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

showSimilarWizards();
fillingElements();
