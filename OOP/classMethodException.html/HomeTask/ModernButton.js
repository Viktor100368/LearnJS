class ModernButton extends Button{
    constructor(width,height,background,value,borderRadius=0){
        super(width,height,background,value);
        this.borderRadius=borderRadius;        
    }
    render(){
        let button = document.createElement("button");
        button.style.width=this.width+'px';
        button.style.height=this.height+'px';
        button.style.background=this.background;
        button.innerHTML=this.value;     
        button.style.color='white';   
        button.style.borderRadius=this.borderRadius+'px';
        document.body.append(button);
    }
}