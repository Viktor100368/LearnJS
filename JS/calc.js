let a='';
let b='';
let sign='';
let digit=['0','1','2','3','4','5','6','7','8','9'];
let symbol=['+','-','x','/'];

let out=document.querySelector('.screen p');

function clearAll(){
    a='';
    b='';
    sign='';
    out.textContent=0;
    console.log('clearAll');
}
document.querySelector('.ac').onclick=clearAll();