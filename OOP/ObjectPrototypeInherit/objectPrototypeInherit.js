let a = {
    "text":"Hello",
    "color":"red",
    show:function(){
       return this.color;
    },
};
console.log(a);
// let b ={
//     "fontSize" : "24px",
//     __proto__:a
// };

let b = Object.create(a);
b.fontSize='24px';
b.color = 'green';

let c =Object.create(b);
c.fontFamily = 'verdana';


console.log(b);
console.log(b.text);
console.log(`a.color = ${a.show()}`);
console.log(`b.color = ${b.show()}`);
console.log(c);
console.log(`c.fontFamily = ${c.fontFamily}`);