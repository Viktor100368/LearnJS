function pow(x,n){
    let result =1;
    for(let i=0;i<n;i++){
        result *=x;
    }
    return result;
}
function rec(x,n){
    if(n===1) return x;
    else{
        x *=rec(x,n-1);
    }
    return x;
}
let operation;
let a = document.querySelector('.s-1');
a.addEventListener('blur',function(){
    console.log(a.value);
    operation=a.value;
});
let out=document.querySelector('.out');
let inVal= document.querySelector('.in1');
let inDeg= document.querySelector('.in2');

inDeg.addEventListener('blur',function(){
    if(operation =='iteration'){
out.innerHTML = pow(+inVal.value , +inDeg.value);
console.log('Итерация');
    }
});

inDeg.addEventListener('blur',function(){
    if(operation == 'recursion'){
    out.innerHTML = rec(+inVal.value , +inDeg.value);
    console.log("Рекурсия");
    }
});


