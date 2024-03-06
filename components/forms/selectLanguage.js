import getLanguages from '../../api/languageData';
import renderToDom from '../../utils/renderToDom';

const selectLanguage = (languageId) => {
  let domString = `<label for="language">Select an Language</label>
    <select class="form-control" id="language_id" required>
    <option value="">Select a Language</option>`;

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
