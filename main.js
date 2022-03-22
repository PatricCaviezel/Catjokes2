function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
function refresh() {
    window.location = window.location;
}
function cat(num) {
    var bodyparts = [" /\\_/\\ ", " |\\_/| ", " /|_|\\ ", "(=^.^=)", "(=*.*=)","(=-.-=)","(=+.+=)","(=°.°=)","(=`.´=)", "(='.'=)", "(=>.<=)", "(=^o^=)", "( u u )", "( v v )", "( o o )", "( O O )", "| u u |", "| v v |", "| o o |", "| O O |"];
    var body = document.body;
    var ears = document.getElementById("ears");
    var head = document.getElementById("head");
    var feet = document.getElementById("feet");
    if(num <=2) {
        ears.innerText = bodyparts[num];
        body.append(ears);
    } else if(num >=3 && num <=11) {
        head.innerText = bodyparts[num];
        body.append(head);
    } else if(num >=12 && num <= 19) {
        feet.innerText = bodyparts[num];
        body.append(feet);
    }

}
