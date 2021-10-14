const formRefs = document.querySelector('.js-feedback-form');
const textAreaRef = document.querySelector('.js-feedback-comment');
const nameRef = document.querySelector('.js-feedback-name');
const emailRef = document.querySelector('.js-feedback-email');

const elements = formRefs.elements;
const elForm = Object.values(elements);
console.log(elForm);

elForm.forEach(el => {
    if(el.name !== "password" && el.name !=="") {
        el.addEventListener('input', getInputValue);
    }
    getFromLocalStorage(el.name, el);
})

function onFormSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    elForm.forEach((el) => {
        console.log(el);
        const getLocal = localStorage.getItem(el.name);
        if (getLocal) {
            localStorage.removeItem(el.name)
    form.reset();
      }
    })
}

function getInputValue(elentName) {
    let inputText = elentName.target.value;
    saveToLS(elentName.target.name, inputText);
}

function saveToLS(key, itemValue) {
    localStorage.setItem(key, JSON.stringify(itemValue));
}

function getFromLocalStorage(key, obj) {
    const keyFromLS = localStorage.getItem(key);
    if (keyFromLS) {
        obj.value = JSON.parse(keyFromLS);
    }
}


formRefs.addEventListener('submit', onFormSubmit);

// textAreaRef.addEventListener('input', onTextareaInput);

// function onTextareaInput(evt) {

// const textValue = evt.target.value;
// localStorage.setItem(evt.target.name, textValue);
// // console.log(evt.target.name);
// // console.log(evt.target.placeholder);
// // console.log(evt.target.cols);
// }

// function getFromLocalStorage (){
//    const  = localStorage.getItem('');
// if () {
//     textAreaRef.textContent = ; 
// }
// }