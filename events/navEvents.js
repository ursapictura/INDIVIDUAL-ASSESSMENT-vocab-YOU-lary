import addVocabForm from '../components/forms/addVocabForm';
import { signOut } from '../utils/auth';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';

const navEvents = (uid) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#add-vocab').addEventListener('click', () => {
    addVocabForm(uid);
  });

  document.querySelector('#logo').addEventListener('click', () => {
    getVocab(uid).then((vocab) => showVocab(uid, vocab));
  });
};

export default navEvents;
