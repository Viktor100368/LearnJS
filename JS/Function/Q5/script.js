const arr1 = [7,4,5,6,8];
const out1 = document.querySelector('.out1');
const out2 = document.querySelector('.out2');
const out3 = document.querySelector('.out3');
function f1(arr,myFunc,block){
    arr[3] *= 2;
    myFunc(arr,block);
}
function showArr(arr,block){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result += arr[i]+' :';
    }
    block.innerHTML=result;
}
function showArr2(arr,block){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result += arr[i]+'*';
    }
    block.innerHTML=result;
}
f1(arr1,showArr,out1);
f1(arr1,showArr2,out2);

//Пример collback
function squar(item){
    return item**2;
}
//вызов collback
//const arr2 = arr1.map(squar);
//вызов через анонимную функцию
const arr2 = arr1.map(item => item**2);
//out3.innerHTML = arr2;
showArr2(arr2,out3);
//Пример с input
document.querySelector('.btn1').addEventListener('click',function(){
    out1.innerHTML = getUserName(fixUserName);
});
function getUserName(fixFunc){
    const userName = document.querySelector('.in1').value;
    console.log(fixFunc(userName));
    return fixFunc(userName);
}
function fixUserName(str){
    return str.trim().toLowerCase();
}