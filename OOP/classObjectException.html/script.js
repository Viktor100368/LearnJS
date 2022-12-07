class User{
    constructor(username,password){
        this.username=username;
        this.password= password;
    }
}

let a = 'Ivan';
let b = 453;
let person = new User(a,b);
console.log(person);