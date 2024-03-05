const clearDom = () => {
  document.querySelector('#cards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
};

export default clearDom;
