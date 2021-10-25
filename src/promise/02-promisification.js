// const fetchPokemonById = id => {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// };

// // fetchPokemonById(1, onFetchSucces, onFetchError);
// fetchPokemonById(2).then(onFetchSucces).catch(onFetchError);

// function onFetchSucces(pokemon) {
//     console.log('onFetchSucces -> onFetchSucces');
//     console.log(pokemon);
// };
// function onFetchError(err) {
//     console.log('onFetchError -> onFetchError');
//     console.log('block -> catch');
//     console.log(err);
// }
/* Покемоны с https://pokeapi.co/
*/

const fetchPokemonById = id => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
};

fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);

fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);

fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);

function onFetchSuccess(pokemon) {
  console.log('onFetchSuccess -> onFetchSuccess');
  console.log(pokemon);
}

function onFetchError(error) {
  console.log('onFetchError -> onFetchError');
  console.log('Это в блоке catch');
  console.log(error);
}
// =================================================================
// const makeOrder = (dish) => {
//     const DELAY = 1000;
//     //Чтобы сократить ставить return в начало вместо переменной promise
//     const promise = new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;
//         setTimeout(() =>{
            
//             if(passed) {
//                 resolve(`its promise - onSucces${dish}`);
//             }
//                 reject(`${dish} its onError Promise`);
//         }, DELAY);
//     })
//     /* Чтобы промис состоял в функции - return*/
//     return promise;
// };

// // makeOrder('subject NEW').then(result => {
// //     console.log('result', result);
// // }).catch(err => {
// //     console.log('error', err);
// // })

// makeOrder('subject NEW').then(onMakeForSucces).catch(onMakeForError);

// function onMakeForSucces(result) {
//     console.log('onMakeForSucces', result);
// };
// function onMakeForError(error) {
//     console.log('onMakeForError', error);
// };

// ============ с помощью CALLBACK =====================

// const makeOrder = (dish, onSucces, onError) => {
//     const DELAY = 1000;
//     const passed = Math.random() > 0.5;
//     setTimeout(() =>{
//         if(passed) {
//             onSucces('its onSucces');
//         } else {
//             onError('its onError');
//         }
//     }, DELAY);
// };
// makeOrder('subject', onMakeForSucces, onMakeForError);

// function onMakeForSucces(result) {
//     console.log('onMakeForSucces', result);
// };
// function onMakeForError(error) {
//     console.log('onMakeForError', error);
// };
