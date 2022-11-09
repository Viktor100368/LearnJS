function sum(a,b){
    return a+b;
}

function multi(a,b){
    return a*b;
}
document.querySelector('.btn1').addEventListener('click',function(){
    let res = sum(24,45);
    console.log(res);
});
document.querySelector('.btn1').addEventListener('click',()=>{
    let res = sum(24,45);
    console.log(res);
});
//запуск двух функций
document.querySelector('.btn2').addEventListener('click',function(){
    let res = sum(24,45);
    console.log(res);
    let res2 = multi(23,34);
    console.log(res2); 
});
document.querySelector('.btn2').addEventListener('click',()=>{
    let res = sum(24,45);
    console.log(res);
    let res2 = multi(23,34);
    console.log(res2); 
});
//callback
let ar1 = [2,3,4,5,6];
function pow2(a){
    return a**2;
}
const res3 = ar1.map(pow2);
console.log(res3);
const res4= ar1.map(function(a){
    return a**2;
});
console.log(res4);
//стрелочные функции
const res5= ar1.map((a)=>{
    return a**2;
});
console.log(res5);

//сокращенный синтаксис
// одна строка, убрать {} return
// один аргумент, убрать ()

const res6 = ar1.map(a => a**2);
console.log(res6);

//filter
let ar2 = [3,4,5,6,7,8];
const elem1 = ar2.filter(function(item,index){
    if(index % 2 === 0){
        return true;
    }
});
console.log(elem1);
//пишем на стрелочной функции

const elem2 = ar2.filter((item,index)=> (index % 2 === 0));
    
console.log(elem1);

//arrow & this
document.querySelector('.btn3').addEventListener('click',function(){
    console.log(this);
});

document.querySelector('.btn3').addEventListener('click',()=>{
    console.log(this);
});

//arrow аргументы
const f1 = ()=>{
    console.log('work');
};
f1();
// принятие аргументов
const f2 = (...arg) =>{
  for(let i=0;i<arg.length;i++){
    arg[i]*=2;
  }
  console.log(arg);
};
f2(226,34,45);