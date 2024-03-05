import addVocabForm from '../components/forms/addVocabForm';
import { signOut } from '../utils/auth';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';

const navEvents = (uid) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#add-vocab').addEventListener('click', addVocabForm);

  document.querySelector('#logo').addEventListener('click', () => {
    getVocab(uid).then(showVocab);
  });
};

export default navEvents;
