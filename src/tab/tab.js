"use strict";
// ===========constructor============
class Tabs {
  constructor({
    rootSelector,
    activeControlClass = "active",
    paneActiveClass = "active",
    activeTab = 1,
  }) {
    this._refs = this._getRefs(rootSelector);
    this._activeControlClass = activeControlClass;
    this._paneActiveClass = paneActiveClass;
    this._activeTabId = activeTab - 1;

    this._bindEvents();
    this._setActiveTab();
  }
  _getRefs(root) {
    const refs = {};

    refs.controls = document.querySelector(`${root} [data-controls`);
    refs.panes = document.querySelector(`${root} [data-panes]`);
    return refs;
  }
  _bindEvents() {
    this._refs.controls.addEventListener("click", this._onControlClick);
  }
  _onControlClick = (event) => {
    event.preventDefault();

    if (event.target.nodeName !== "A") {
      console.log("RETURN");
      return;
    }
    this._removeActiveTab();

    const controlItem = event.target;
    controlItem.classList.add(this._activeControlClass);

    const paneId = this._getPaneId(controlItem);
    // console.log(controlItem.getAttribute('href'));

    // const pane =  this._getPaneById(paneId);
    // // console.log(pane);
    // pane.classList.add(this._paneActiveClass);
    this._setActivePane(paneId);
  };
  _setActiveTab() {
    const controlItem = this._refs.controls.querySelectorAll("a");
    const control = controlItem[this._activeTabId];

    control.classList.add(this._activeControlClass);
    const paneId = this._getPaneId(control);
    this._setActivePane(paneId);
  }
  _removeActiveTab() {
    const currentControlItem = this._refs.controls.querySelector(
      `.${this._activeControlClass}`
    );
    // console.log(currentControlItem);
    if (!currentControlItem) {
      return;
    }
    currentControlItem.classList.remove(this._activeControlClass);

    const paneId = this._getPaneId(currentControlItem);
    //   console.log(paneId);
    this._removeActivePane(paneId);
  }
  _setActivePane(paneId) {
    const pane = this._getPaneById(paneId);
    pane.classList.add(this._paneActiveClass);
  }
  _removeActivePane(paneId) {
    const pane = this._getPaneById(paneId);
    //   console.log(pane);
    pane.classList.remove(this._paneActiveClass);
  }

  _getPaneId(control) {
    return control.getAttribute("href").slice(1);
  }
  _getPaneById(id) {
    return this._refs.panes.querySelector(`#${id}`);
  }
}

const tabs1 = new Tabs({
  rootSelector: "#tabs-1",
  activeControlClass: "controls__item--active",
  paneActiveClass: "pane--active",
  activeTab: 1,
});

const tabs2 = new Tabs({
  rootSelector: "#tabs-2",
  activeControlClass: "controls__item--active",
  paneActiveClass: "pane--active",
  activeTab: 3,
});

// ====================================================
// const refs = {
//     controls: document.querySelector('#tabs-1 [data-controls'),
//     panes: document.querySelector('#tabs-1 [data-panes]'),
//     title: document.querySelectorAll('#tabs-1 [data-title]')
// };
// // console.log(refs.title);
// // refs.title.classList.remove('pane__fruit');

// refs.controls.addEventListener('click', event => {
//     event.preventDefault();
//     if (event.target.nodeName !== 'A') {
//         console.log('RETURN');
//         return;
//     }
//     const currentControlItem = refs.controls.querySelector('.controls__item--active');
//     if (currentControlItem) {
//         currentControlItem.classList.remove('controls__item--active');

//         const paneId = getPaneId(currentControlItem);
//         const pane =  getPaneById(paneId);
//         pane.classList.remove('pane--active');
//     }
//     const controlItem = event.target;
//     controlItem.classList.add('controls__item--active');
//     // console.log(controlItem);
//     const paneId = getPaneId(controlItem);
//     // console.log(controlItem.getAttribute('href'));

//     const pane =  getPaneById(paneId);
//     // console.log(pane);
//     pane.classList.add('pane--active');

//     function getPaneId(control) {
//         return control.getAttribute('href').slice(1);
//     };
//     function getPaneById(id) {
//         return refs.panes.querySelector(`#${id}`);
//     }
// })
