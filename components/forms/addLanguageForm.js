import renderToDom from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

const addLanguageForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-language--${obj.firebaseKey}` : 'submit-language'}" class="mb-4">
      <div class="form-group">
        <label for="title">Language Name</label>
        <input type="text" class="form-control" id="title" placeholder="Language" value="${obj.title || ''}" required>
      </div>
      <button type="submit" class="btn btn-outline-success mt-3">Submit Language</button>
    </form>`;

  renderToDom('#form-container', domString);
};

export default addLanguageForm;
