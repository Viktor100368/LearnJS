//Функции замыкания

//==========================================
//как функция обращется к глобальной переменной
let a=10;
function f1(){
    console.log('value global = '+a);
}
f1();
//========================================
//Как функция обращается к локальной переменной
function f2(){
    let a=33;
    console.log('value local = '+a);
} 
f2();
// иногда переменные объявленные внутри функции нужны снаружи
function createStep(){
    let count=0;        //создается счетчик
    return function step(){ // создается блок видимости функции step
        count++;             //счетчик увеличивается и возвращиется в функцию createStep 
        console.log(count);//счетчик count замкнут внутри функции creatStep он не виден снаружи этой функции
    } ;//название функции step необязательно нужно использовать анонимную функцию
}
let step1= createStep();//получили два блока видимости step1,step2
let step2 = createStep();//и два независимых счетчика
step1();
step1();
step1();
step2();
step2();
console.log('=======================');

//поиграимся с примером

function createStep(n = 0){
    let count=n;        //создается счетчик
    return function (){ // создается блок видимости функции step
        count++;             //счетчик увеличивается и возвращиется в функцию createStep 
        console.log(count);//счетчик count замкнут внутри функции creatStep он не виден снаружи этой функции
    } ;//название функции step необязательно нужно использовать анонимную функцию
}
let step3= createStep();//получили два блока видимости step1,step2
let step4 = createStep(200);//и два независимых счетчика
step3();
step3();
step4();
step3();
step4();
console.log('----------------------------');
//задвча: функция попрошайка с рекурсией
//===================================
function randomInteger(min, max){
    //получить случайное число от(min-0.5) до (max+0,5)
    let rand = min - 0.5 + Math.random()*(max -min +1);
    return Math.round(rand);
}
let s= 0;


function beggar(){
    s+= randomInteger(0,100);
    console.log(s);
    if(s >= 250) {
        return;}
    beggar();
}
beggar();
//здесь проблева в том, что переменная s доступна везде в коде
//уберем s из глобальной области видимости
console.log("теперь с помощью замыкания");
function createBeggar(){
    let s=0;
    return function beggar(){
        s+= randomInteger(0,100);
        console.log(s);
        if(s >= 250) {
            return;}
        beggar();
    };
}
let begg1 = createBeggar();
begg1();
//в этом случае мы убрали s из глобальной области видимости, 
//теперь можем создавать  сколько угодно попращаек
console.log('__________________');
let begg2 = createBeggar();
begg2();
