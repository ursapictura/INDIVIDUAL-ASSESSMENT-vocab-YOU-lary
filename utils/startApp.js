import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { showVocab } from '../pages/vocab';
import { getVocab } from '../api/vocabData';
import navEvents from '../events/navEvents';

const startApp = (uid) => {
  console.warn(uid);
  domBuilder(uid);
  navBar();
  logoutButton();
  navEvents(uid);
  getVocab(uid).then(showVocab);
};

export default startApp;
