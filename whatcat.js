const UIfromData = async function() {
    let data = await fetch('/questions.json')
    .then(response => response.json())
    .then(data => {
        for (var key in data.Fragen) {
            console.log(data.Fragen[key]);
        }
        for (var key in data) {
            console.log(data[key]);
        }
    });
}
UIfromData();