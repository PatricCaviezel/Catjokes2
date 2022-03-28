const getjson = async function() {
    let data = await fetch('/questions.json')
    .then(response => response.json())
    .then(data => {
        for (var key in data.Fragen) {
            console.log(key);
            getanswers(data.Fragen, key);
        }
    });
}

function getanswers(json, key) {
    //console.log(data.Fragen[key]);
    let div = document.createElement("div");
    div.setAttribute("id", "answers");
    document.body.append(div);
    for(let i = 0; i < json[key].length; i++) {
        let div = document.getElementById("answers");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        h3.innerText = key;
        p.innerText = json[key][i];
        div.append(h3, p);
    }
}

getjson();
