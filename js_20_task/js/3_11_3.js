function average(){
    let l= arguments.length,sum=0,count=0,el,el2,arrSum=0,arrCount=0;
    for(let i=0;i<l;i++){
       el = arguments[i];
        switch(typeof el){
            case 'number':
                sum +=arguments[i];
                count++;
                break;
            case 'object':
                for(let k=0;k<el.length;k++){
                    if(typeof(el[k]) === 'number'){
                    arrSum += el[k];
                    arrCount++;
                    }
                }
                break;
        }
    }
    let arr= sum/count;
    let innArr = arrSum/arrCount;
    return ("average array= "+arr+" average innerArray= "+innArr+"<br>");
}
console.log(Math.sin(30));