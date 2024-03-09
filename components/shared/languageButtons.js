import renderToDom from '../../utils/renderToDom';

const emptyLanguages = () => {
  const domString = 'no languages added';
  renderToDom('#language-buttons', domString);
};

const languageButtons = (array) => {
  console.warn(array);
  let domString = '';

  if (array.length === 0) {
    emptyLanguages();
  } else {
    array.forEach((language) => {
      domString += `<button id="filter-language--${language.firebaseKey}" class="btn btn-outline-success">${language.title}</button>`;
    });
    renderToDom('#language-buttons', domString);
  }
};

export { languageButtons, emptyLanguages };
