let c=9;
function count(){
    c++;
    console.log(c);
}
document.querySelector('.out').addEventListener('mousemove',blockWidth);
let w=100;
function blockWidth(){
    w++;
    document.querySelector('.out').style.width = w + 'px';
}
function showSum(elem, x, y){
    document.querySelector(elem).textContent = x+y;
}
function showSum2(elem, x, y){
    elem.textContent=x+y;
}
showSum('.out-1',4,6);
// showSum2(document.querySelector('.out-2'),12,14);
const out2 = document.querySelector('.out-2');
showSum2(out2,33,45);

//свойство arguments
function showSumAll(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i];        
    }
    console.log(sum);    
}
showSumAll(2,3,5,6,7,8,8,8);


function showSumAll2(...args){
    console.log(args);
    let sum = args.reduce((accum,item) => accum += item);
    console.log(sum);    
}
showSumAll2(2,3,5,6,7,8,8,8);

//функция как аргумент
function showAll(res){
    document.querySelector('.out-1').innerHTML= `<br>${res}</br>`;
}
function showAll2(num,drawFunction){
    drawFunction(num);
}
showAll(123,showAll)