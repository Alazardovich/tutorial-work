const formRefs = document.querySelector('.js-feedback-form');
const textAreaRef = document.querySelector('.js-feedback-comment');
const nameRef = document.querySelector('.js-feedback-name');
const emailRef = document.querySelector('.js-feedback-email');

const elements = formRefs.elements;

for (let i = 0; i < elements.length; i++) {
    if (elements[i].name !== 'password' && elements[i].name !== '') {
        
    elements[i].addEventListener('input', onTextareaInput);
    }
    getFromLocalStorage(elements[i].name);
 
}

function onFormSubmit(evt){
    evt.preventDefault();
    const form = evt.target;
    // console.log(form.elements);
    const getLocal = localStorage.getItem('message');

if (getLocal) {
    localStorage.removeItem('message')
    form.reset();
}

}


function onTextareaInput(evt) {

const textValue = evt.target.value;
localStorage.setItem('message', textValue);
// console.log(evt.target.name);
// console.log(evt.target.placeholder);
// console.log(evt.target.cols);
}

function getFromLocalStorage (){
   const message = localStorage.getItem('message');
if (message) {
    textAreaRef.textContent = message; 
}
}
function getInputValue(elentName) {
    let inputText = elentName.target.value;
    saveToLS(elentName.target.name, inputText);
}

function saveToLS(key, itemValue) {
    localStorage.setItem(key, JSON.stringify(itemValue));
}

function getFromLocalStorage(formElem) {
    const keyFromLS = localStorage.getItem(formElem.name);
    if (keyFromLS) {
        formElem.value = JSON.parse(keyFromLS);
    }
}


formRefs.addEventListener('submit', onFormSubmit);

// textAreaRef.addEventListener('input', onTextareaInput);

