let mond = document.getElementById("Mond")
let sun = document.getElementById("Sun")
let body = document.body
let div = document.getElementById("GameContent")
sun.style.display = "none"
mond.style.display = "none"
let night = false;

let xcords0 = Math.floor(Math.random() * 2700);
let xcords1 = Math.floor(Math.random() * 2700);
let xcords2 = Math.floor(Math.random() * 2700);
let xcords3 = Math.floor(Math.random() * 2700);
let xcords4 = Math.floor(Math.random() * 2700);
let xcords5 = Math.floor(Math.random() * 2700);
let xcords6 = Math.floor(Math.random() * 2700);


let t = 0;
function zyklus() {
    if (gameOver) {
        return
    }
    setTimeout(function() {
        if (t < 5000) {
            t++;
            if (t < 2500) {
                night = true;
                xcords0 += 0.5
                xcords1 += 0.8
                xcords2 += 0.6
                xcords3 += 0.5
                xcords4 += 0.3
                xcords5 += 0.7
                xcords6 += 0.5
                stars[0].style.left = `${0.035 * xcords0}%`
                stars[1].style.left = `${0.035 * xcords1}%`
                stars[2].style.left = `${0.035 * xcords2}%`
                stars[3].style.left = `${0.035 * xcords3}%`
                stars[4].style.left = `${0.035 * xcords4}%`
                stars[5].style.left = `${0.035 * xcords5}%`
                stars[6].style.left = `${0.035 * xcords6}%`

                if(xcords0 > 2750){
                    xcords0 = -200
                }
                if(xcords1 > 2750){
                    xcords1 = -200
                }
                if(xcords2 > 2750){
                    xcords2 = -200
                }
                if(xcords3 > 2750){
                    xcords3 = -200
                }
                if(xcords4 > 2750){
                    xcords4 = -200
                }
                if(xcords5 > 2750){
                    xcords5 = -200
                }
                if(xcords6 > 2750){
                    xcords6 = -200
                }

                stars[0].style.display = "block"
                stars[1].style.display = "block"
                stars[2].style.display = "block"
                stars[3].style.display = "block"
                stars[4].style.display = "block"
                stars[5].style.display = "block"
                stars[6].style.display = "block"
                mond.style.display = "block"
                mond.style.left = `${0.035 * t}%`
                sun.style.display = "none"
                body.style.backgroundColor = "dimgrey"
                div.style.backgroundColor = "rgb(43, 43, 43)"
            } else {
                night = false;
                mond.style.display = "none"
                sun.style.display = "block"
                sun.style.left = `${0.03 * (t - 2500)}%`
                body.style.backgroundColor = "rgb(55, 101, 255)"
                div.style.backgroundColor = "rgb(0, 225, 255)"
                stars[0].style.display = "none"
                stars[1].style.display = "none"
                stars[2].style.display = "none"
                stars[3].style.display = "none"
                stars[4].style.display = "none"
                stars[5].style.display = "none"
                stars[6].style.display = "none"
            }
        } else {
            t = 0;
        }
        zyklus()
    }, 10)
}

zyklus()

let stars = document.getElementsByClassName("star")

ycords1 = Math.floor(Math.random() * 50);
stars[0].style.top = `${ycords1}%`

ycords2 = Math.floor(Math.random() * 50);
stars[1].style.top = `${ycords2}%`

ycords3 = Math.floor(Math.random() * 50);
stars[2].style.top = `${ycords3}%`

ycords4 = Math.floor(Math.random() * 50);
stars[3].style.top = `${ycords4}%`

ycords5 = Math.floor(Math.random() * 50);
stars[4].style.top = `${ycords5}%`

ycords6 = Math.floor(Math.random() * 50);
stars[5].style.top = `${ycords6}%`

ycords7 = Math.floor(Math.random() * 50);
stars[6].style.top = `${ycords7}%`

function star() {
    setInterval(function() {
    if (night = true) {

        ycords1 = Math.floor(Math.random() * 50);
        stars[0].style.top = `${ycords1}%`

        ycords2 = Math.floor(Math.random() * 50);
        stars[1].style.top = `${ycords2}%`

        ycords3 = Math.floor(Math.random() * 50);
        stars[2].style.top = `${ycords3}%`

        ycords4 = Math.floor(Math.random() * 50);
        stars[3].style.top = `${ycords4}%`

        ycords5 = Math.floor(Math.random() * 50);
        stars[4].style.top = `${ycords5}%`

        ycords6 = Math.floor(Math.random() * 50);
        stars[5].style.top = `${ycords6}%`

        ycords7 = Math.floor(Math.random() * 50);
        stars[6].style.top = `${ycords7}%`

    } else {
    }
    star()
}, 50000)
}

star()