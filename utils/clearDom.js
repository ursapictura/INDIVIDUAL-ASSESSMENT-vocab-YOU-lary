const clearDom = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#language-buttons').innerHTML = '';
  // document.querySelector('#login-form-container').innerHTML = '';
};

export default clearDom;
