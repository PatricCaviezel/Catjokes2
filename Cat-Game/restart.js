function restart() {
    if (event.keyCode == 32 || onclick) {
        if (gameOver == true) {
            window.location.reload();
        }
    }
}
window.addEventListener("keydown", restart)
document.getElementById("restartButton").addEventListener("click", restart)
