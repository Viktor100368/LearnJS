let hour;
let minutes;
let seconds;
let d;

function data() {
    d=new Date();
    hour = d.getHours();
    if(hour<10) hour='0'+hour;
    minutes = d.getMinutes();
    if(minutes<10) minutes = '0'+minutes;
    seconds = d.getSeconds();
    if(seconds<10) seconds="0"+seconds;
    out.textContent=hour+':'+minutes+":"+seconds;
}


let out = document.querySelector('.out');
const interval = setInterval(function () {
    data();
}, 1000);