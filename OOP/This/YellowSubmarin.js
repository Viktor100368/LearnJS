class YellowSubmarin extends U2{
    constructor(model,color){
        super(model);
        this.color = color;
    }
    showThis(){
        console.log(this.model+" "+this.color);
    }
}