import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { showVocab } from '../pages/vocab';
import { getVocab } from '../api/vocabData';
import navEvents from '../events/navEvents';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';

const startApp = (uid) => {
  console.warn(uid);
  domBuilder(uid);
  domEvents(uid);
  formEvents(uid);
  navBar();
  logoutButton();
  navEvents(uid);
  getVocab(uid).then((vocab) => showVocab(vocab));
};

export default startApp;
