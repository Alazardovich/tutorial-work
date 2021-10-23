const promise = new Promise((resolve, reject) =>{
    const canFullFill = Math.random() > 0.5;
    if(canFullFill) {
        resolve('Promise completed successfully');
    }
    reject('Promise completed with error');
},1000);
// promise.then(result => {
//     console.log(result);
// }, err => {
//     console.log(err);
// })
// ================function compare-сравнение==============
// console.log(promise);
// promise.then(resultFunc, errorFunction);
// function resultFunc(result) {
//     console.log(`Super, ${result}`);
// };
// function errorFunction(err) {
//     console.log(`Oops, ${err}`);
// };
// ======== ChaininG =================

promise.then(result => {
    console.log(`5 ${result}`);
    return result + ' 25';
})
.then(x =>{
    console.log(x);
    return 10;
})
.then(y => {
    console.log(y);
})
.catch(err => {
    console.log(err);
}).finally('Fanally - Будет выполнен в любом случае');


// =================================================================
// const delay = ms => {
//    new Promise((resolve,reject) => {
//     setTimeout(() => resolve, ms);
//    })
//   };
  
//   const logger = time => console.log(`Resolved after ${time}ms`);
//   console.log(delay);
//   delay(2000).then(logger)

//   // Вызовы функции для проверки
//   delay(2000).then(logger); // Resolved after 2000ms
//   delay(1000).then(logger); // Resolved after 1000ms
//   delay(1500).then(logger); // Resolved after 1500ms
// //   =========================================================
// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
//   ];
  
//   const toggleUserState = (allUsers, userName, callback) => {
//     const updatedUsers = allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user,
//     );
  
//     callback(updatedUsers);
//   };
  
//   const logger = updatedUsers => console.table(updatedUsers);
  
//   /*
//    * Сейчас работает так
//    */
//   toggleUserState(users, 'Mango', logger);
//   toggleUserState(users, 'Lux', logger);
  
//   /*
//    * Должно работать так
//    */
//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);
// //   =================================================================
// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
  
//   const makeTransaction = (transaction, onSuccess, onError) => {
//     const delay = randomIntegerFromInterval(200, 500);
  
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;
  
//       if (canProcess) {
//         onSuccess(transaction.id, delay);
//       } else {
//         onError(transaction.id);
//       }
//     }, delay);
//   };
  
//   const logSuccess = (id, time) => {
//     console.log(`Transaction ${id} processed in ${time}ms`);
//   };
  
//   const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
//   };
  
//   /*
//    * Работает так
//    */
//   makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
//   makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
//   makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
//   makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
//   /*
//    * Должно работать так
//    */
//   makeTransaction({ id: 70, amount: 150 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 71, amount: 230 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 72, amount: 75 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 73, amount: 100 })
//     .then(logSuccess)
//     .catch(logError);
//     // ======================================================