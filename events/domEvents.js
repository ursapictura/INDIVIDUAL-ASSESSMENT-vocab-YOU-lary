import { getLanguageVocab } from '../api/languageData';
import { deleteVocab, getSingleVocab, getVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../pages/vocab';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj, uid));
    }

    if (e.target.id.includes('delete-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      deleteVocab(firebaseKey).then(() => getVocab(uid).then((array) => showVocab(array)));
    }

    if (e.target.id.includes('filter-language')) {
      const [, firebaseKey] = e.target.id.split('--');

      getLanguageVocab(firebaseKey).then((array) => showVocab(array));
    }
  });
};

export default domEvents;
