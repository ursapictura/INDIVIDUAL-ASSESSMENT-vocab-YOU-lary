import selectLanguage from './selectLanguage';
import renderToDom from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocabulary Term</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocabulary Term" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocabulary Term
      </button>
    </form>`;

  renderToDom('#form-container', domString);
  selectLanguage(`${obj.language_id || ''}`);
};

export default addVocabForm;
