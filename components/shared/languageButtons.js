import renderToDom from '../../utils/renderToDom';

const languageButtons = (array) => {
  console.warn(array);
  let domString = '';

  array.forEach((language) => {
    domString += `<button id="filter-language--${language.firebaseKey}" class="btn btn-secondary">${language.title}</button>`;
  });
  renderToDom('#language-button', domString);
};

export default languageButtons;
