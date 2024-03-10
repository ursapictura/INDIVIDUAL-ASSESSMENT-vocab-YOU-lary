import addVocabForm from '../components/forms/addVocabForm';
import { signOut } from '../utils/auth';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import addLanguageForm from '../components/forms/addLanguageForm';
import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';
import searchVocab from '../api/mergedData';

const navEvents = (uid) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#add-vocab').addEventListener('click', () => {
    addVocabForm(uid);
  });

  document.querySelector('#add-language').addEventListener('click', () => {
    addLanguageForm();
  });

  document.querySelector('#logo').addEventListener('click', () => {
    getVocab(uid).then((vocab) => showVocab(vocab));
  });

  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE
      searchVocab(uid, searchValue).then((vocab) => {
        document.querySelector('#search').value = '';
        if (vocab.length > 0) {
          showVocab(vocab);
        } else {
          clearDom();
          const domString = '<h1>No Results</h1>';
          renderToDom('#cards', domString);
        }
      });
    }
  });
};

export default navEvents;
