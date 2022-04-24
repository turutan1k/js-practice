function myFunction() {
    let x = document.getElementById('myDiv');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

let close = document.getElementsByClassName('closeBtn');
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.opacity = '0';
        setTimeout(() => {
            div.style.display = 'none';
        }, 600);
    };
}
