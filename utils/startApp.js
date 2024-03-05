import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { showVocab } from '../pages/vocab';
import { getVocab } from '../api/vocabData';

const startApp = (uid) => {
  console.warn(uid);
  domBuilder(uid);
  navBar();
  logoutButton();
  getVocab(uid).then(showVocab);
};

export default startApp;
