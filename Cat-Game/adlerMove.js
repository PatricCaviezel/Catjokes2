
var adlers = document.getElementsByClassName("adler")
let adlerNumber = 0
let adlerXArray = []

function moveadler(adlerX, Currentadler, adlers, adlerY) {
    adlers[Currentadler].style.left = adlerX
    adlers[Currentadler].style.display = "block"
    if((adlerX < 10 && adlerX > 2) && (catY > (100-adlerY)-40 /*-((sneakTrue + 1)*20)*/ && catY < (100-adlerY))){
        gameOver = true
    }
    if(gameOver){
        return
    }
    setTimeout(function() {
        adlers[Currentadler].style.left = (adlerX + "%")
        if (adlerX > -5) {
            adlerX -= 0.5;
            moveadler(adlerX, Currentadler, adlers, adlerY);
        } else {
            adlers[Currentadler].style.display = "none";
        }
    }, 10 / gamespeed)
}
function spawnadler(adlerXArray, adlerNumber, adlers){
    if(gameOver){
        return
    }

    setTimeout(function(){
        if (Math.floor(Math.random() * 10) < 9){
            adlerXArray[adlerNumber] = 95;
            let adlerY = Math.floor(Math.random() * 75)
            adlers[adlerNumber].style.top = `${adlerY}%`
            moveadler(adlerXArray[adlerNumber], adlerNumber, adlers, adlerY)
            adlerNumber++
            if(adlerNumber == 3){
                adlerNumber = 0
            }
        }
        spawnadler(adlerXArray, adlerNumber, adlers)

    },RanomTime())
}

function RanomTime() {
    number = (Math.random() + 1)* 2000 / gamespeed
    return number
}
function DelayStartAdler() {

    setTimeout(function(){
        spawnadler(adlerXArray, adlerNumber, adlers)
    },52000)
}

DelayStartAdler()



let AdlerFrame0 = 1
let AdlerPosition0 = 1
let adler0 = document.getElementById("adler0")
let AdlerFrame1 = 1
let AdlerPosition1 = 1
let adler1 = document.getElementById("adler1")
let AdlerFrame2 = 1
let AdlerPosition2 = 1
let adler2 = document.getElementById("adler2")
const AdlerAnimation0 = function(){
    if (gameOver){
        window.removeEventListener("keydown", move)
        window.removeEventListener("keyup", unsneak)
        return
    }
    setTimeout(function() {
        if (AdlerPosition0 == 1){
            adler0.src = "./character/Birds/Gbad-bird2.png"
            AdlerFrame0++
            if (AdlerFrame0 > 12){
                AdlerFrame0 = 0
                AdlerPosition0 = 2
            }
        } else {
            adler0.src = "./character/Birds/Gbad-bird1.png"
            AdlerFrame0++
            if (AdlerFrame0 > 12){
                AdlerFrame0 = 0
                AdlerPosition0 = 1
            }
        }
    AdlerAnimation0()
    }, 10 / gamespeed)
}
const AdlerAnimation1 = function(){
    if (gameOver){
        window.removeEventListener("keydown", move)
        window.removeEventListener("keyup", unsneak)
        return
    }
    setTimeout(function() {
        if (AdlerPosition1 == 1){
            adler1.src = "./character/Birds/Gbad-bird2.png"
            AdlerFrame1++
            if (AdlerFrame1 > 12){
                AdlerFrame1 = 0
                AdlerPosition1 = 2
            }
        } else {
            adler1.src = "./character/Birds/Gbad-bird1.png"
            AdlerFrame1++
            if (AdlerFrame1 > 12){
                AdlerFrame1 = 0
                AdlerPosition1 = 1
            }
        }
    AdlerAnimation1()
    },10 / gamespeed)
}
const AdlerAnimation2 = function(){
    if (gameOver){
        window.removeEventListener("keydown", move)
        window.removeEventListener("keyup", unsneak)
        return
    }
    setTimeout(function() {
        if (AdlerPosition2 == 1){
            adler2.src = "./character/Birds/Gbad-bird2.png"
            AdlerFrame2++
            if (AdlerFrame2 > 12){
                AdlerFrame2 = 0
                AdlerPosition2 = 2
            }
        } else {
            adler2.src = "./character/Birds/Gbad-bird1.png"
            AdlerFrame2++
            if (AdlerFrame2 > 12){
                AdlerFrame2 = 0
                AdlerPosition2 = 1
            }
        }
    AdlerAnimation2()
    }, 10 / gamespeed)
}
AdlerAnimation0()
AdlerAnimation1()
AdlerAnimation2()