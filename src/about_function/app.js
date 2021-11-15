const user = {
    fullName: 'Mango', 
    showName() {
        console.log('this:', this);
        console.log('this.fullName:', this.fullName);

        const inner = () => {
            console.log('inner:', this);
        };
        inner();
    }
};
user.showName();

const numbers = [1, 3, 6, 2, 5, 4];

const greaterThanTwo = numbers.filter(num => num > 2);
console.log(greaterThanTwo);

const multByTwo = greaterThanTwo.map(num => num * 3);
console.log(multByTwo);

const sorted = multByTwo.sort ((a, b) => a - b);
console.log(sorted); 

// Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.
// num = 3;
// alert(num)

// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
// const a = 10;
// const b = 2;
// alert(a-b);
// alert(a+b);
// alert(a/b);
// alert(a*b);

// Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.


// Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.


// Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. 
// Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.


