const arr= [3,4,5,6,7,34,345];
let b=arr.filter(el=>{
    if(el % 3 === 0){
        return true;
    }
});
console.log(b);
let str='hello, Dolly, i, am, hear';
let st1= str.split(', ');
console.log(st1);
let x=arr.join(',');
console.log(x);