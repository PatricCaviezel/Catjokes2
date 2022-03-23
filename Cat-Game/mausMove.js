
var mauss = document.getElementsByClassName("maus")
let mausNumber = 0
let mausXArray = []

function movemaus(mausX, Currentmaus, mauss) {
    mauss[Currentmaus].style.left = mausX
    if((mausX < 10 && mausX > 2) && (catY < 10)){
        mauss[Currentmaus].style.display = "none"
        mausBonus = true
    }
    if(gameOver){
        return
    }
    setTimeout(function() {
        mauss[Currentmaus].style.left = (mausX + "%")
        if (mausX > -5) {
            mausX -= 1;
            movemaus(mausX, Currentmaus, mauss);
        } else {
            mauss[Currentmaus].style.display = "none";
        }
    }, 20 / gamespeed)
}
function spawnmaus(mausXArray, mausNumber, mauss){
    if(gameOver){
        return
    }

    setTimeout(function(){
        if (Math.floor(Math.random() * 10) < 4){
            mausXArray[mausNumber] = 95;
            mauss[mausNumber].style.display = "block"
            movemaus(mausXArray[mausNumber], mausNumber, mauss)
            mausNumber++
            if(mausNumber == 3){
                mausNumber = 0
            }
        }
        spawnmaus(mausXArray, mausNumber, mauss)

    },RanomTime())
}

function RanomTime() {
    number = (Math.random() + 1)* 2000 / gamespeed
    return number
}
function DelayStart() {

    setTimeout(function(){
        spawnmaus(mausXArray, mausNumber, mauss)
    },2000)
}

DelayStart()

