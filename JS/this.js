// document.querySelector('.btn1').onclick = function(){
//     console.log(this);
//     this.innerHTML+= 0;
// };

// document.querySelector('.btn1').addEventListener('click',function(){
//     console.log(this);
//     this.innerHTML += 0;
// });

// document.querySelector('.btn1').onclick = f1; 
// function f1(){
//     console.log(this);
//     this.innerHTML+= 0;
// };
document.querySelector('.s-1').addEventListener('change',f2);
function f2(){
    console.log(this);
    document.querySelector('.out-2').textContent = this.value;
};
f2.apply(document.querySelector('.s-1'));