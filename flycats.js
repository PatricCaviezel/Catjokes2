function fly() {
    let x = Math.floor((Math.random() * 2) + 1);

    if (x == 1) {
        let cat1 = document.getElementById("flycat1");
        cat1.style.display = "initial";
    }
}