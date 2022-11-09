function f1(x, y) {
    return x + y;
}

function f2() {
    return 15;
}
console.log(5 + f2());

function randInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let r = randInt(222, 333);
console.log(r);
console.log(randInt(222, 333) + 100);
//выводить куда угодно
console.log(f1(100, 200));
document.querySelector('.out-1').textContent = f1(110, 300);
//alert(f1(330,400));
document.querySelector('.out-1').style.background = 'rgb(100,20,123)';
document.querySelector('.out-1').style.background =
    `rgb(${randInt(0,255)},${randInt(0,255)},${randInt(0,255)})`;
//вывод данных введенных пользователем
document.querySelector('.b-3').addEventListener('click',
    function () {
        const s = document.querySelector('.i-3').value;
        document.querySelector('.out_3').innerHTML = 'Hello ' + clearText(s);
        console.log('Hello '+clearText(s));
    });
//Очищаем выаод
function clearText(data){
  return data.trim().toLowerCase();
}
//прерывание функции
//эмулируем indexOf
function indexOfEmul(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == num) return i;
    }
    return -1;
}
let result = indexOfEmul([33,22,11,444],1);
console.log(result);
//пользователь вводит количество дет
document.querySelector('.b-4').addEventListener('click',
function(){
    let year= +document.querySelector('.i-4').value;
    if(isNaN(year)) return;
    if(year <=0 || year > 130) return;
    document.querySelector('.out-4').innerHTML=2022 - year;
});
//ex 5 Сумма
console.group('example 5');
const arr5 = [[3,4,5],[6,7,8]];
function t5(){
    let s=0;
    for(let i=0;i<arr5.length;i++){
        s+= sum(arr5[i]);
    }
    return s;
}
function sum(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
console.log(t5());
console.groupEnd();
// return не любит переноса, если необходимо
// пишем так return (
     // dafafartqwrqrqr
        //);


console.group('example 7');
const arr7 = [[3,4,5],[6,7,9],[7,7,1],[2,2]];
const eventArr7 = arr7.filter(function(item){
    return (sum(item) % 2 === 0);
});
console.log(eventArr7);
console.groupEnd();
//ex 8
console.group('return function');
function t8(){
    return sum;
}
let s= t8();
console.log(s([20,30,40]));
console.groupEnd();