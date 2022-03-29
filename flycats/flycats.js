

function fly() {
    let x = Math.floor((Math.random() * 2) + 1);
    console.log(x);
    if (x == 1) {
        const myTimeout = setTimeout(display, 15000);
        let cat1 = document.getElementById("flycat1");
        cat1.style.display = "initial";
        cat1.style.animation = "catmove 15s";
    } else {
        const myTimeout = setTimeout(display, 15000);
        let cat2 = document.getElementById("flycat2");
        cat2.style.display = "initial";
        cat2.style.animation = "catmove 15s";
    }
}

function display() {
    let cat1 = document.getElementById("flycat1");
    cat1.style.display = "none";
    let cat2 = document.getElementById("flycat2");
    cat2.style.display = "none";
}
