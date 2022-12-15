console.log(this);//window
// arrow function -> this -> window
let p = document.querySelectorAll('p');
let button1 = document.querySelector('.btn1').onclick= function(){
    console.log(this);
    this.style.background = 'orange';
};
function f1(){
    this.style.background = 'orange';
}

for(let i=0;i<p.length;i++){
    p[i].onclick = f1;
}
document.querySelector('.btn2').addEventListener('click', function(){
    this.style.background = 'orange';
    console.log(this);
});

const boat = new U2(744);
console.log(boat);

const U3 = new YellowSubmarin(666, 'yellow');
console.log(U3);
U3.showThis();
