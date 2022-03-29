const getjson = async function() {
    let data = await fetch('./questions.json')
    .then(response => response.json())
    .then(data => {
        toarray(data);
    });
}

function toarray(data) {
    for(var key in data.Fragen) {
        let div = document.getElementById("whatcat");
        for(let i = 0; i < Object.keys(data).length; i++) {
            let h3 = document.createElement("h3");
            h3.innerText = key;
            div.append(h3);
        }
        for(let i = 0; i < data.Fragen[key].length; i++) {
            let p = document.createElement("p");
            p.innerText = data.Fragen[key][i];
            div.append(p);
        }
    }
}

getjson();
