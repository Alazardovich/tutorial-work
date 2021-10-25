class Timer {
  constructor() {
      this.startBtn = document.querySelector(".js-btn-start");
      this.stopBtn = document.querySelector(".js-btn-stop");
      this.clearBtn = document.querySelector(".js-btn-clear");
      this.p = document.querySelector(".js-timer");
      this.startTime = 0;
      this.distance = 0;
      this.intervalId = 0;
  }

  onStart = () => {
      this.startTime = Date.now();
      this.intervalId = setInterval(() => {
          if (this.distance == 0) {
              this.distance = Date.now() - this.startTime;
          } else {
              this.distance += 1000;
          }
          this.displayTimer(this.distance, this.p);
      }, 1000);
  };

  onStop = () => {
      clearInterval(this.intervalId);
  };

  onClear = () => {
      this.onStop();
      this.distance = 0;
      this.startTime = 0;
      this.displayTimer(this.distance, this.p);
  };

  displayTimer = (distance, domElem) => {
      if (distance != 0) {
          const days = Math.floor(distance / (24 * 60 * 60 * 1000));
          const hours = Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const mins = Math.floor(
              (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          const secs = Math.floor((distance % (1000 * 60)) / 1000);
          domElem.innerHTML = `days:${days} hours:${hours} mins:${mins} secs: ${secs}`;
      } else {
          domElem.innerHTML = `days:00 hours:00 mins:00 secs:00`;
      }
  };

  // displayTimer = (distance, domElem) => {
  //     DispTimer.displayTimer(distance, domElem);
  // };

  addListeners = () => {
      this.startBtn.addEventListener("click", this.onStart);
      this.stopBtn.addEventListener("click", this.onStop);
      this.clearBtn.addEventListener("click", this.onClear);
  };

  init = () => {
      this.addListeners();
  };
}

// class DispTimer {
//     static displayTimer = (distance, domElem) => {
//         if (distance != 0) {
//             const days = Math.floor(distance / (24 * 60 * 60 * 1000));
//             const hours = Math.floor(
//                 (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//             );
//             const mins = Math.floor(
//                 (distance % (1000 * 60 * 60)) / (1000 * 60)
//             );
//             const secs = Math.floor((distance % (1000 * 60)) / 1000);
//             domElem.innerHTML = `days:${days} hours:${hours} mins:${mins} secs: ${secs}`;
//         } else {
//             domElem.innerHTML = `days:00 hours:00 mins:00 secs:00`;
//         }
//     };
// }

// new Timer().init()

let timer = new Timer();
timer.init();
// =============================================================
// const startBtn = document.querySelector('.js-btn-start');
// const stopBtn = document.querySelector('.js-btn-stop');
// const clearBtn = document.querySelector('.js-btn-clear');
// const p = document.querySelector('.js-timer');

// startBtn.addEventListener('click', onStart);
// stopBtn.addEventListener('click', onStop);
// clearBtn.addEventListener('click', onClear);

// let startTime = 0;
// let distance = 0;
// let intervalId = 0

// function onStart(){
//     startTime = Date.now();
   
//     intervalId = setInterval(() => {
//         if(distance == 0){
//             distance = Date.now() - startTime;
//         } else {
//             distance+=1000
//         }
//         displayTimer(distance,p)
//     }, 1000);
// }

// function onStop(){
//     clearInterval(intervalId);
// }

// function onClear(){
//     onStop()
//     distance = 0;
//     startTime = 0;
//     displayTimer(distance,p);
// }

// function displayTimer(distance,domElem){
//     if(distance != 0){
//         const days =  Math.floor(distance/(24*60*60*1000));
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const mins = (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
//         const secs = Math.floor((distance % (1000 * 60)) / 1000);
//         domElem.innerHTML= `days:${days} hours:${hours} mins:${mins} secs: ${secs}`;
//     } else {
//         domElem.innerHTML= `days:00 hours:00 mins:00 secs:00`;
//     }
// }
