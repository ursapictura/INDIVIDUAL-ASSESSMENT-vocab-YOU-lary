import addVocabForm from '../components/forms/addVocabForm';
import { signOut } from '../utils/auth';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import addLanguageForm from '../components/forms/addLanguageForm';

const navEvents = (uid) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#add-vocab').addEventListener('click', () => {
    addVocabForm(uid);
  });

  document.querySelector('#add-language').addEventListener('click', () => {
    addLanguageForm();
  });

  document.querySelector('#logo').addEventListener('click', () => {
    getVocab(uid).then((vocab) => showVocab(uid, vocab));
  });
};

export default navEvents;
