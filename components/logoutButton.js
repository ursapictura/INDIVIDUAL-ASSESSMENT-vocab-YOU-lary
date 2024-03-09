import { signOut } from '../utils/auth';
import clearDom from '../utils/clearDom';

const logoutButton = () => {
  clearDom();
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
