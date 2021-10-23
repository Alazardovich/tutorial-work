import BSN from 'bootstrap.native';
import { func, ref } from 'joi';
const refs = {
    modal: document.querySelector('#subscription-modal'),
    btnSubscribe: document.querySelector('button[data-subscribe]'),
    btnClose: document.querySelector('.btn-secondary'),
}
console.log(refs.btnClose);
const modal = new BSN.Modal('#subscription-modal');
const PROMT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;

console.log(modal);
openModal()


refs.modal.addEventListener('hide.bs.modal', openModal);

refs.btnSubscribe.addEventListener('click', ()=>{
    hasSubscribed = true;
    modal.hide();
    // console.dir(e);
});
refs.btnClose.addEventListener('click', onCloseBtn);

function onCloseBtn() {
    hasSubscribed = false;
    modal.hide();
};

function openModal() {
    if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
        return;
    }
    setTimeout(() => {
        console.log('Open modal');
        modal.show();
        promptCounter+=1;
    }, PROMT_DELAY);

}

// =================================================================

// const PROMT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS) {
//         console.log('STOP');
//         clearInterval(intervalId);
//         return;
//     }
// console.log("Подпишись на рассылку - " + Date.now());
// promptCounter += 1;
// }, PROMT_DELAY);