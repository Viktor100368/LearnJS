(function(){
    let p=40;
    let q = document.querySelector('.btn2');
    q.onclick = ()=>{
        p=p+10;
        console.log('work button2 '+p);
    };
})();