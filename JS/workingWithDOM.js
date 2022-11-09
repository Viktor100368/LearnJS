const one = document.querySelector('.one');
one.style.width = '150px';
one.style.paddingBottom = '40px'; 
//console.log(one.style);
one.classList.add('two', 'three');
const toggle = document.querySelector('.toggle');
toggle.onclick = function(){
    this.classList.toggle('three');
};
//атрибуты data
console.log(one.getAttribute('data'));
console.log(document.querySelectorAll('link')[0].getAttribute('href'));

one.setAttribute('data-num',6);
let gas = document.querySelectorAll('.gas');
for(let i=0;i<gas.length;i++){
    gas[i].onclick= function (){
        let gallons = document.querySelector('.gallons').value;
        //console.log(gallons);
        let amount = this.getAttribute('data');
        //console.log(amount);
        console.log(gallons * amount);
    };
}
let a=document.createElement('div');
console.log(a);
a.innerHTML = 'Hello';
document.querySelector('.test').appendChild(a);
document.querySelector('.pushMe').onclick= function (){
    let newElem = document.createElement('button');
    const text = document.createTextNode('aimHier');
    newElem.append(text);
    document.body.appendChild(newElem);
};

