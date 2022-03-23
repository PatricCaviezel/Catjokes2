var catY = 0;
var gameOver = false
var sneakTrue = false
var spatzBonus = false
var mausBonus = false
var gamespeed = 1

function CatJump(flowCounter) {
    setTimeout(function() {
        cat.style.bottom = (catY + "%")
        catY++;
        catY++;
        if (sneakTrue) {
            CatJumpdown()
        } else if(catY < 60){
            CatJump(flowCounter);
        }else {
            CatJumpflow()
            // break;
        }
    }, 5/gamespeed)
}

function CatJumpflow(flowCounter){
    setTimeout(function(){
        flowCounter++
        if (flowCounter < 10){
            CatJumpflow(flowCounter)
        } else {
            CatJumpdown()
        }
    },90/gamespeed)
}

function CatJumpdown() {
    setTimeout(function() {
        cat.style.bottom = (catY + "%")
        catY--;
        catY--;
        if(sneakTrue){
            catY--
        }
        if (catY >= 4) {
            CatJumpdown();
        } else {
            cat.style.bottom = "2%"
            AllowcatJump = true
        }
    },5/gamespeed)
}

const jump = function(){
    if (AllowcatJump){
        AllowcatJump = false
        catY = 0
        CatJump()
    }

}


const sneak = function(){
    sneakTrue = true
}

const move = function(){
    if (event.keyCode == 32){
        jump()
    } else if (event.keyCode == 40){
        sneak()
        AllowcatJump = false
    } else if(event.keyCode == 38){
        jump()
    }
}

const unsneakif = function(){
    if (event.keyCode == 40){
        sneakTrue = false
        AllowcatJump = true
    }
}


let AllowcatJump = true
let cat = document.getElementById("cat")
// let sneakTrue = false
cat.style.bottom = "2%"
let frame = 1
let position = 1

window.addEventListener("keydown", move)
window.addEventListener("keyup", unsneakif)

const Catanimation = function(){
    if (gameOver){
        window.removeEventListener("keydown", move)
        window.removeEventListener("keyup", unsneak)
        return
    }
    setTimeout(function() {
        if (sneakTrue) {
            if (position == 1){
                cat.src = "./character/Cat/cat-walk-sneak2.png"
                frame++
                if (frame > 12){
                    frame = 0
                    position = 2
                }
            } else {
                cat.src = "./character/Cat/cat-walk-sneak1.png"
                frame++
                if (frame > 12){
                    frame = 0
                    position = 1
                }
            }
        } else {
            if (position == 1){
                cat.src = "./character/Cat/cat-walk2.png"
                frame++
                if (frame > 12){
                    frame = 0
                    position = 2
                }
            } else {
                cat.src = "./character/Cat/cat-walk1.png"
                frame++
                if (frame > 12){
                    frame = 0
                    position = 1
                }
            }
        }
        Catanimation()
    }, 10/gamespeed)
}
Catanimation()