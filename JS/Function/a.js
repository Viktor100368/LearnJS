(function() {
        let p = 10;
        let q = document.querySelector('.btn1');
        q.onclick = () => {
            p = p+ 1;
            console.log('work button1 '+p);
        };
    })();