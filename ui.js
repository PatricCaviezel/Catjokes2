function hideSections() {
    let parent = document.getElementById("parts");
    const childern = parent.childNodes;
    childern.forEach(element => {
        element.style.display = "none";
    });    
}

function showSection(element) {
    let section = document.getElementById(element);
    section.style.display = "block";
}

function generateResultSlot(key) {
    var slot = document.createElement("div");
    slot.id = key + "Result"; //"selectPart"
    // slot.innerHTML = slot.id;
    document.getElementById("result").appendChild(slot);
}

function generateDropdown(data) {
    var select = document.createElement("select");
    select.name = "selectPart";
    select.id = "selectPart"

    select.addEventListener("change", function() {
        // console.log(select.value);
        hideSections();
        if (select.value) {
            showSection(select.value);
        }
    });

    // var value = select.options[select.selectedIndex].value;
    let option = document.createElement("option");
    option.value = "";
    option.text = "-";
    select.appendChild(option);

    for (var key in data) {
        let option = document.createElement("option");
        option.value = key + "Section";
        option.text = key.charAt(0).toUpperCase() + key.slice(1);
        select.appendChild(option);
        generateResultSlot(key);
    }
    let label = document.createElement("label");
    label.innerHTML = "Choose a body part: "
    label.htmlFor = "selectPart";
    document.getElementById("actions").appendChild(label).appendChild(select);
}

function setPartialResult(content, parent) {
    let result = parent.replace("Section", "Result");
    let container = document.getElementById(result);
    container.innerHTML = content;
}

function generatePartSection(name, data) {
    let section = document.createElement("section");
    section.id = name + "Section";
    section.classList.add("grid");
    for (var key in data) {
        var button = document.createElement("button");
        button.innerHTML = data[key];
        button.addEventListener("click", function () {
            let content = this.innerHTML;
            let parent = this.parentElement.id;
            setPartialResult(content, parent);
        });
        section.appendChild(button);
    }
    document.getElementById("parts").appendChild(section);
}

const UIfromData = async function() {
let data = await fetch('/data.json')
.then(response => response.json())
.then(data => {
    generateDropdown(data.cats);
    for (var key in data.cats) {
        generatePartSection(key, data.cats[key]);
    }
});
}

UIfromData().then(() => {
    hideSections();
});
