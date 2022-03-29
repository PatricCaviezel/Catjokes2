let catname = document.getElementById("catname");
let p = document.createElement("p");
p.setAttribute("id", "cattitle");
catname.addEventListener('keypress', function (e) {
    let namecat = catname.value;
    if (e.key === 'Enter') {
        p.innerText = namecat;
    }
});
document.body.append(p);

