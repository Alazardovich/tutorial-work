// const { func } = require("joi");

const { func } = require("joi");

const date1 = new Date().getTime();/*отображение прописью*/
// console.log(date1);

setTimeout(() => {
    const date2 = Date.now();/*время в unix*/
    // console.log(date2);
    // console.log(date2-date1);
},1000);
//===============================================
const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface')
}
class Timer {
    constructor({ onTick }) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick= onTick;
    }
    
    start() {
        if (this.isActive) {
            return;
        }
        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            // console.log(startTime,'current time:', currentTime);
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponent(deltaTime);
            this.onTick(time);
            // updateClockFace(time)
            //счетчик сделан деструктуризацией, с возможным вкл. дней в формуле ниже
        //    console.log(`${hours}:${mins}:${secs}`);

            //  console.log(new Date(deltaTime).getUTCHours());
        //    нулевая параллель-  дата Гринвич(), обнуляет час. пояс
        // console.log(new Date(deltaTime).getMinutes());
        // console.log(new Date(deltaTime).getSeconds());
        // console.log(new Date(deltaTime).getUTCHours());
        },1000);
    }
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        const time = this.getTimeComponent(0);
        this.onTick(time);
    }
    
    getTimeComponent(time) {
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
            return { hours, mins, secs };
    }
    pad(value) {
        return String(value).padStart(2,'0');
    }
};
const timer = new Timer({
    onTick: updateClockFace,
    
});

// refs.startBtn.addEventListener('click', () => {
//     timer.start();
// });

// refs.stopBtn.addEventListener('click', () => {
//     timer.stop();
// })
refs.startBtn.addEventListener('click', timer.start.bind(timer));

refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockFace({ hours, mins, secs }) {
    refs.clockface.textContent = `${hours}: ${mins}: ${secs}`;
}





// const timer = {
//     intervalId: null,
//     isActive: false,
//     start() {
//         if (this.isActive) {
//             return;
//         }
//         const startTime = Date.now();
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             // console.log(startTime,'current time:', currentTime);
//             const deltaTime = currentTime-startTime;
//             const time = getTimeComponent(deltaTime);
//             updateClockFace(time)
//             //счетчик сделан деструктуризацией, с возможным вкл. дней в формуле ниже
//         //    console.log(`${hours}:${mins}:${secs}`);

//             //  console.log(new Date(deltaTime).getUTCHours());
//         //    нулевая параллель-  дата Гринвич(), обнуляет час. пояс
//         // console.log(new Date(deltaTime).getMinutes());
//         // console.log(new Date(deltaTime).getSeconds());
//         // console.log(new Date(deltaTime).getUTCHours());
//         },1000);
//     },
//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//     }
// };
