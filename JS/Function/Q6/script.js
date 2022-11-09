//Кантекст = область видимости + переменная this
//this - ссылка на объект, который вызывает код в даннный момент
let count=0;

function f1(){
    console.log(count);
    console.log(this);
    this.textContent = count;
    count++;
}
document.querySelector('.btn1').addEventListener('click',f1);

//В стрелочной вункции this не работает
const f2 = ()=>{
    console.log(count);
    console.log(this);
    this.textContent = count;
    count++;
};
document.querySelector('.btn2').addEventListener('click',f2);
// call позволяет вызывать функции и передавать ей необходимые аргументы

f1.call(document.querySelector('.btn1'));
f1.call(document.querySelector('.btn1'));
f1.call(document.querySelector('.btn1'));
f1();


let count2=0;
function f3(){
    this.textContent = count2;
    count2++;
}
document.querySelector('.btn3').addEventListener('click',()=>{
    f3.call(document.querySelector('.btn4'));
});

function f4(){
    console.log(count2);
    console.log(this);
    this.textContent = count2;
}
document.querySelector('.btn5').addEventListener('click',()=>{
    count2++;
    f4.call(document.querySelector('.btn2'),count2);
});
//================================
function sum(a,b){
    this.innerHTML = a+b;
}
document.querySelector('.btn6').addEventListener('click',()=>{
    sum.call(document.querySelector('.out1'),13,4);
    sum.apply(document.querySelector('.out2'),[13,4]);
});
//bind
const f5= f1.bind(document.querySelector('.out3'));
document.querySelector('.btn7').addEventListener('click',f5);