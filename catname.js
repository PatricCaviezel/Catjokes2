let catname = document.getElementById("catname");
let p = document.createElement("p");
catname.addEventListener('keypress', function (e) {
    let namecat = catname.value;
    if (e.key === 'Enter') {
        p.innerText = namecat;
    }
});
document.body.append(p);

