let a = {
    'text':'Hello',
    'color':'red',
    'show':function(){
        console.log(this.color);
    }
};
let b = {
    'fontSize':'24px',
    __proto__:a,
};
let c = {
    
}