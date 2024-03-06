import { deleteVocab, getSingleVocab, getVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../pages/vocab';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
    }

    if (e.target.id.includes('delete-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      deleteVocab(firebaseKey).then(() => getVocab(uid).then(showVocab));
    }
  });
};

export default domEvents;
