function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function fly() {
    let x = Math.floor((Math.random() * 2) + 1);
    console.log(x);
    if (x == 1) {
        console.log(x);
        let cat1 = document.getElementById("flycat1");
        cat1.style.display = "initial";
        cat1.style.animation = "catmove 15s";
        sleep(15000);
        cat1.style.display = "none";
    } else {
        let cat2 = document.getElementById("flycat2");
        cat2.style.display = "initial";
        cat2.style.animation = "catmove 15s";
        sleep(15000);
        cat2.style.display = "none";
    }
}
