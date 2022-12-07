//Приватные и защищенные методы
class User{
  
    constructor(name){
        this.name=name;
    }
    #test = 'hohoho';
    set name(value){
        console.log("Private - "+this.#test)
        this._name=value.trim().toLowerCase();
    }
    get name(){
        return this._name;
    }
    
}
const student = new User('alex');
console.log(student);
console.log(student.name);
student.name='     MaX    ';
console.log(student.test);