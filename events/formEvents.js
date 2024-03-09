import { createLanguage, updateLanguage } from '../api/languageData';
import { createVocab, getVocab, updateVocab } from '../api/vocabData';
// import languageButtons from '../components/shared/languageButtons';
import { showVocab } from '../pages/vocab';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-vocab')) {
      console.warn('Clicked Submit Vocab!', e.target.id);

      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_id: document.querySelector('#language_id').value,
        time: Date.now(),
        uid,
      };

      console.warn(payload);
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(uid).then((array) => showVocab(uid, array));
        });
      });
    }

    if (e.target.id.includes('update-vocab')) {
      console.warn('Updating Vocab!');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_id: document.querySelector('#language_id').value,
        time: Date.now(),
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab(uid).then((array) => showVocab(uid, array));
      });
    }

    if (e.target.id.includes('submit-language')) {
      console.warn('Clicked Submit Language!', e.target.id);

      const payload = {
        title: document.querySelector('#title').value,
        uid,
      };

      console.warn(payload);
      createLanguage(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateLanguage(patchPayload).then(() => {
          getVocab(uid).then((array) => showVocab(uid, array));
        });
      });
    }

    if (e.target.id.includes('update-language')) {
      console.warn('Updating Language!');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        firebaseKey,
      };

      updateLanguage(payload).then(() => {
        getVocab(uid).then((array) => showVocab(uid, array));
      });
    }
  });
};

export default formEvents;
