let x = 1;
let scores = document.getElementById("Score")

function score() {
    if (gameOver){
        document.body.style.backgroundColor = "#ff6666"
        return
    }
    setTimeout(function(){
        x++ ;
        if(spatzBonus){
            x += 30
            spatzBonus = false
        }
        if(mausBonus){
            x += 30
            mausBonus = false
        }
        gamespeed += 0.0005
        scores.innerText = "Score: " + x;

        score();
    }, 100)
}

score();