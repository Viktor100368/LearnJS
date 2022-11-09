let a='';//first number
let b='';//second number
let sign='';//знак операции
let finish = false;
let flag = false;
let count = 0;
const digit=['0','1','2','3','4','5','6','7','8','9','.'];
const action=['-','+','X','/'];
// экран
const out=document.querySelector('.calc-screen p');

function clearAll(){
     a='';//first number
     b='';//second number
     sign='';//знак операции
     finish = false;    
     out.textContent=0;
}
document.querySelector('.ac').onclick=clearAll;
document.querySelector('.buttons').onclick=function(event){
    //нажате не кнопка
    if(!event.target.classList.contains('btn')) return;
    //нажаиа кнопка ClearAll ac
    if(event.target.classList.contains('ac'))return;
    out.textContent='';
    //получаю нажатую кнопку
    const key = event.target.textContent;
    //если нажата кнопка 0-9
    if(digit.includes(key)){
        if(b==='' && sign ===''){
            a+=key;
            
            out.textContent=a;
        }
        else if(a !== '' && b !=='' && finish){
            b= key;
            finish=false;
            out.textContent=b;
        }
        else{
            b += key;
            out.textContent= b;
        }
       // console.log(a,b,sign);
        return;     
    }

    //если нажата клавиша +  - / X
    if(action.includes(key)){
        count++;
        if(count>1){
            flag=true;
            count=1;
        }
        sign = key;
        out.textContent=sign;
        console.log(a,sign);
        return;
    }
    //если нажата =
    if(key === '=' || (action.includes(key) && flag)){
        if(b==='') b=a;
        switch(sign){
            case '+':
                a=(+a) + (+b);
                break;
            case '-':
                a= a - b;
                break;
            case 'X':
                a= a*b;
                break;
            case '/':
                if(b === '0'){
                    out.textContent = 'Ошибка / на 0';
                    a='';
                    b='';
                    sign='';
                    return;
                }
                a= a / b;
                break;
        }
        finish=true;
        if(a>10000000){
            out.textContent='overflow';
        }else
        out.textContent=a;
        console.log(a,'type = '+typeof(a),' length = '+a.length);
    }
};