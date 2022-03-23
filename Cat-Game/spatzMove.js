
var spatzs = document.getElementsByClassName("spatz")
let spatzNumber = 0

let spatzXArray = []

function movespatz(spatzX, Currentspatz, spatzs, spatzY) {
    spatzs[Currentspatz].style.left = spatzX
    if((spatzX < 10 && spatzX > 2) && (catY > (100-spatzY)-20 /*-((sneakTrue + 1)*20)*/ && catY < (100-spatzY))){
        spatzBonus = true
        spatzs[Currentspatz].style.display = "none";
    }
    if(gameOver){
        return
    }
    setTimeout(function() {
        spatzs[Currentspatz].style.left = (spatzX + "%")
        if (spatzX > -5) {
            spatzX -= 0.3;
            movespatz(spatzX, Currentspatz, spatzs, spatzY);
        } else {
            spatzs[Currentspatz].style.display = "none";
        }
    }, 10 / gamespeed)
}
function spawnspatz(spatzXArray, spatzNumber, spatzs){
    if(gameOver){
        return
    }

    setTimeout(function(){
        if (Math.floor(Math.random() * 20) < 6){
            spatzXArray[spatzNumber] = 95;
            let spatzY = Math.floor(Math.random() * 75)
            spatzs[spatzNumber].style.top = `${spatzY}%`
            spatzs[spatzNumber].style.display = "block"
            movespatz(spatzXArray[spatzNumber], spatzNumber, spatzs, spatzY)
            spatzNumber++
            if(spatzNumber == 3){
                spatzNumber = 0
            }
        }
        spawnspatz(spatzXArray, spatzNumber, spatzs)

    },RanomTime())
}

function RanomTime() {
    number = (Math.random() + 1)* 4000 / gamespeed
    return number
}
function DelayStartSpatz() {

    setTimeout(function(){
        spawnspatz(spatzXArray, spatzNumber, spatzs)
    },35000)
}

DelayStartSpatz()



let spatzFrame0 = 1
let spatzPosition0 = 1
let spatz0 = document.getElementById("spatz0")
let spatzFrame1 = 1
let spatzPosition1 = 1
let spatz1 = document.getElementById("spatz1")
let spatzFrame2 = 1
let spatzPosition2 = 1
let spatz2 = document.getElementById("spatz2")
const spatzAnimation0 = function(){
    if (gameOver){
        window.removeEventListener("keydown", move)
        window.removeEventListener("keyup", unsneak)
        return
    }
    setTimeout(function() {
        if (spatzPosition0 == 1){
            spatz0.src = "./character/Birds/Gbird2.png"
            spatzFrame0++
            if (spatzFrame0 > 12){
                spatzFrame0 = 0
                spatzPosition0 = 2
            }
        } else {
            spatz0.src = "./character/Birds/Gbird1.png"
            spatzFrame0++
            if (spatzFrame0 > 12){
                spatzFrame0 = 0
                spatzPosition0 = 1
            }
        }
    spatzAnimation0()
    }, 10 / gamespeed)
}
const spatzAnimation1 = function(){
    if (gameOver){
        window.removeEventListener("keydown", move)
        window.removeEventListener("keyup", unsneak)
        return
    }
    setTimeout(function() {
        if (spatzPosition1 == 1){
            spatz1.src = "./character/Birds/Gbird2.png"
            spatzFrame1++
            if (spatzFrame1 > 12){
                spatzFrame1 = 0
                spatzPosition1 = 2
            }
        } else {
            spatz1.src = "./character/Birds/Gbird1.png"
            spatzFrame1++
            if (spatzFrame1 > 12){
                spatzFrame1 = 0
                spatzPosition1 = 1
            }
        }
    spatzAnimation1()
    },10 / gamespeed)
}
const spatzAnimation2 = function(){
    if (gameOver){
        window.removeEventListener("keydown", move)
        window.removeEventListener("keyup", unsneak)
        return
    }
    setTimeout(function() {
        if (spatzPosition2 == 1){
            spatz2.src = "./character/Birds/Gbird2.png"
            spatzFrame2++
            if (spatzFrame2 > 12){
                spatzFrame2 = 0
                spatzPosition2 = 2
            }
        } else {
            spatz2.src = "./character/Birds/Gbird1.png"
            spatzFrame2++
            if (spatzFrame2 > 12){
                spatzFrame2 = 0
                spatzPosition2 = 1
            }
        }
    spatzAnimation2()
    }, 10 / gamespeed)
}
spatzAnimation0()
spatzAnimation1()
spatzAnimation2()