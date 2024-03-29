import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="language-buttons"></div>
    <div id="form-container"></div>
    <div id="cards"></div>
  </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
