import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const addVocabBtn = () => {
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add A Vocabulary Term!</button>';
  renderToDom('#add-button', btnString);
};

const emptyVocab = () => {
  clearDom();
  addVocabBtn();
  const domString = '<h1>No Vocabulary Terms</h1>';
  renderToDom('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 30%;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-language mb-2 text-body-secondary">${item.language_id}</h6>
        <p class="card-text">${item.definition}</p>
        <a href="#" class="card-link" id="edit-vocab-btn--${item.firebaseKey}">edit</a>
        <a href="#" class="card-link" id="edit-vocab-btn--${item.firebaseKey}">delete</a>
      </div>
    </div>`;
  });
  renderToDom('#cards', domString);
};

export { addVocabBtn, emptyVocab, showVocab };
