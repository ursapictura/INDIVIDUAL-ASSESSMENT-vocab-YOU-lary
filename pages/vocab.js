import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';
import { getLanguages } from '../api/languageData';
import { languageButtons } from '../components/shared/languageButtons';

const emptyVocab = () => {
  clearDom();
  const domString = '<h1>No Vocabulary Terms</h1>';
  renderToDom('#cards', domString);
};

const showVocab = async (uid, array) => {
  console.warn(array);
  clearDom();
  getLanguages(uid).then((languageArray) => languageButtons(languageArray));

  let domString = '';
  const languages = await getLanguages(uid);

  if (array.length === 0) {
    emptyVocab();
  } else {
    array.forEach((item) => {
      const singleLanguage = languages.find((lang) => lang.firebaseKey === item.language_id);

      domString += `
      <div class="card vocab-card" style="width: 30%;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-language mb-2 text-body-secondary">${singleLanguage.title}</h6>
          <p class="card-text">${item.definition}</p>
          <a href="#" class="card-link" id="edit-vocab-btn--${item.firebaseKey}">edit</a>
          <a href="#" class="card-link" id="delete-vocab-btn--${item.firebaseKey}">delete</a>
        </div>
      </div>`;
    });
    renderToDom('#cards', domString);
  }
};

export { emptyVocab, showVocab };
