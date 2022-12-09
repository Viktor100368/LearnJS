class Student extends User{
    constructor(username,password,nicname){
        super(username,password);
        this.nicname=nicname;
    }
      validatePassword(){
        if(this.password.length > 10){
            return true;
        }
        return false;
    }
}