class User{
    #test = "qwerty";
    static counter = 0;
    constructor(){
        User.counter++;
    }
    static getCounter(){
        return User.counter;
    }
    set name(name){
        this._name = name.trim().toLowerCase();
    }
    get name(){
        return this._name;
    }
    set gender(gender){
        this._gender = gender;
    }
    get gender(){
        return this._gender;
    }
    sayHello(){
        return this.name+' hello';
    }
    showGemder(){
        return this.gender;
    }
    showTest(){
        return this.#test;
    }
    setTest(value){
        this.#test = value;
    }
   
}
const alex = new User();
alex.name = 'Alex';
console.log(alex);
console.log(alex.name);
class Person extends User{
    constructor(email){
        super();
        this.email = email;
    }
}
const li = new Person('li@mail.com');
li.name ='LiVdin';
console.log(li);
console.log(li.name);
console.log(li.sayHello());
li.gender='male';
console.log(li.showGemder());
console.log(li.showTest());
li.setTest('hello Pashtet');
console.log(li.showTest());
console.log('counter = '+User.getCounter());