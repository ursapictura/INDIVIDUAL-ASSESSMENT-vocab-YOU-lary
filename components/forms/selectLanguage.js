import getLanguages from '../../api/languageData';
import renderToDom from '../../utils/renderToDom';

const selectLanguage = (languageId) => {
  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Author</option>`;

  getLanguages().then((languageArray) => {
    languageArray.forEach((language) => {
      domString += `
          <option 
            value="${language.firebaseKey}" 
            ${languageId === language.firebaseKey ? 'selected' : ''}>
              ${language.title}
          </option>`;
    });

    domString += '</select>';

    renderToDom('#select-language', domString);
  });
};

export default selectLanguage;
