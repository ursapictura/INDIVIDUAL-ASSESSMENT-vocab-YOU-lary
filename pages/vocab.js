import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';
import { getLanguages } from '../api/languageData';
// import languageButtons from '../components/shared/languageButtons';

const addVocabBtn = () => {
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add A Vocabulary Term!</button>';
  renderToDom('#add-button', btnString);
};

const emptyVocab = () => {
  clearDom();
  addVocabBtn();
  const domString = '<h1>No Vocabulary Terms</h1>';
  renderToDom('#cards', domString);
};

const showVocab = async (uid, array) => {
  console.warn(array);
  clearDom();

  let domString = '';
  const languages = await getLanguages(uid);
  array.forEach((item) => {
    const singleLanguage = languages.find((lang) => lang.firebaseKey === item.language_id);

    domString += `
    <div class="card" style="width: 30%;">
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
};

export { addVocabBtn, emptyVocab, showVocab };
