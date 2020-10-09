var gameOn = false;
document.onkeydown = checkKey;

function start() {
    for (var x = 1; x <= 16; x++) {
        document.getElementById("t-" + x).innerHTML = "0";

    }
    var y = Math.ceil(Math.random() * 16);
    var z = Math.ceil(Math.random() * 16);
    while (y == z) {
        z = Math.round(Math.random() * 16);
    }
    document.getElementById("t-" + y).innerHTML = "" + Math.round(Math.random() + 1) * 2;
    document.getElementById("t-" + z).innerHTML = "" + Math.round(Math.random() + 1) * 2;

    gameOn = true;
    document.getElementById("gameover").style.display="none";



}
function nexttile() {
    if (gamecheck() == false) { gameover(); return false; }
    var res = [];
    for (var x = 1; x <= 16; x++) {
        if (document.getElementById("t-" + x).innerHTML == "0") {
            console.log("120");
            res.push(x);
        }
    }
    if (res.length == 0) {
        if (gamecheck() == false) { console.log("125"); gameover(); }
    }
    else {

        document.getElementById("t-" + res[Math.floor(Math.random() * res.length)]).innerHTML = Math.round(Math.random() + 1) * 2;
    }
}




function left() {
    console.log("136");
    var a = row(1, 2, 3, 4);
    var b = row(5, 6, 7, 8);
    var c = row(9, 10, 11, 12);
    var d = row(13, 14, 15, 16);
    if (a || b || c || d) {
        nexttile();
    }
    if (gamecheck() == false) {
        gameover();
    }
}
function right() {
    var a = row(4, 3, 2, 1);
    var b = row(8, 6, 7, 5);
    var c = row(12, 11, 10, 9);
    var d = row(16, 15, 14, 13);
    if (a || b || c || d) {
        nexttile();
    }
    if (gamecheck() == false) {
        gameover();
    }
}
function up() {
    var a = row(1, 5, 9, 13);
    var b = row(2, 6, 10, 14);
    var c = row(3, 7, 11, 15);
    var d = row(4, 8, 12, 16);
    if (a || b || c || d) {
        nexttile();
    }
    if (gamecheck() == false) {
        gameover();
    }
}
function down() {
    var a = row(13, 9, 5, 1);
    var b = row(14, 10, 6, 2);
    var c = row(15, 11, 7, 3);
    var d = row(16, 12, 8, 4);
    if (a || b || c || d) {
        nexttile();
    }
    if (gamecheck() == false) {
        gameover();
    }
}
function row(aa, bb, cc, dd) {
    var inputs = [aa, bb, cc, dd];

    var a = parseInt(document.getElementById("t-" + aa).innerHTML);
    var b = parseInt(document.getElementById("t-" + bb).innerHTML);
    var c = parseInt(document.getElementById("t-" + cc).innerHTML);
    var d = parseInt(document.getElementById("t-" + dd).innerHTML);

    var vals = [];
    var res = [];
    if (a != 0) { vals.push(a); }
    if (b != 0) { vals.push(b); }
    if (c != 0) { vals.push(c); }
    if (d != 0) { vals.push(d); }
    for (var x = 0; x < vals.length; x++) {
        if (typeof vals[x + 1] !== 'undefined') {
            if (vals[x] == vals[x + 1]) {
                res.push(vals[x] + vals[x + 1]);
                var newscore = parseInt(document.getElementById("scoreUI").innerHTML) + (vals[x] + vals[x + 1]);
                document.getElementById("scoreUI").innerHTML = newscore;
                // if(newscore>parseInt(document.getElementById("highscoreUI").innerHTML)){
                //     localStorage.setItem();
                // }
                x = x + 1;
            }
            else {
                res.push(vals[x]);
            }

        }
        else {
            res.push(vals[x]);
        }
    }

    var z = 0; var input = [a, b, c, d]; var output = [];
    while (z < res.length) {
        document.getElementById("t-" + (inputs[z])).innerHTML = "" + res[z];
        output.push(res[z]);
        z = z + 1;
    }
    while (z < 4) {
        document.getElementById("t-" + (inputs[z])).innerHTML = "0";
        output.push(0);
        z = z + 1;

    }
    console.log(vals, res.z)
    if ("" + input[0] + "," + input[1] + "," + input[2] + "," + input[3] + "" == "" + output[0] + "," + output[1] + "," + output[2] + "," + output[3] + "") {
        return false;
    }
    else {
        return true;
    }
}







function gamecheck() {
    if (rowcheck(1, 2, 3, 4)) {
        
        return true;
    }
    if (rowcheck(5, 6, 7, 8)) {
        return true;
    } if (rowcheck(9, 10, 11, 12)) {
        return true;
    } if (rowcheck(13, 14, 15, 16)) {
        return true;
    } if (rowcheck(4, 3, 2, 1)) {
        return true;
    } if (rowcheck(8, 7, 6, 5)) {
        return true;
    } if (rowcheck(12, 11, 10, 9)) {
        return true;
    } if (rowcheck(16, 15, 14, 13)) {
        return true;
    } if (rowcheck(1, 5, 9, 13)) {
        return true;
    } if (rowcheck(2, 6, 10, 14)) {
        return true;
    } if (rowcheck(3, 7, 11, 15)) {
        return true;
    } if (rowcheck(4, 8, 12, 16)) {
        return true;
    } if (rowcheck(13, 9, 5, 1)) {
        return true;
    } if (rowcheck(14, 10, 6, 2)) {
        return true;
    } if (rowcheck(16, 12, 8, 4)) {
        return true;
    }
}


function rowcheck(aa, bb, cc, dd) {
    var inputs = [aa, bb, cc, dd];
    var a = parseInt(document.getElementById("t-" + aa).innerHTML);
    var b = parseInt(document.getElementById("t-" + bb).innerHTML);
    var c = parseInt(document.getElementById("t-" + cc).innerHTML);
    var d = parseInt(document.getElementById("t-" + dd).innerHTML);
    var vals = [];
    if (a != 0) {
        vals.push(a);
    }

    else { return true; }
    if (b != 0) {
        vals.push(b);
    }
    else { return true; }
    if (c != 0) {
        vals.push(c);
    }
    else {
        return true;
    }
    if (d != 0) {
        vals.push(d);
    }
    else {
        return true;
    }
    for (var x = 0; x < vals.length; x++) {
        if (typeof vals[x + 1] !== 'undefined') {
            if (vals[x] == vals[x + 1]) {
                return true;
            }
        }
    }
    return false;


}
function gameover() {
    gameOn = false;
    document.getElementById("gameover").style.display = "block";
}

function checkKey(e) {
    e = e || window.event;
    console.log(e.keyCode);

    if (e.keyCode == 38) {
        document.getElementById("controlsUI").innerHTML = "UP";
        up();
    }

    else if (e.keyCode == 40) {
        document.getElementById("controlsUI").innerHTML = "DOWN";
        down();
    }
    else if (e.keyCode == 37) {
        left();
        document.getElementById("controlsUI").innerHTML = "LEFT";
    }
    else if (e.keyCode == 39) {
        right();
        document.getElementById("controlsUI").innerHTML = "RIGHT";
    }

    else if (e.keyCode == 82) {

        document.getElementById("controlsUI").innerHTML = "R";
        start();
    }
    else if (e.keyCode == 78) {

        document.getElementById("controlsUI").innerHTML = "N";
        newtile();
    }
    else if (e.keyCode == 71) {

        document.getElementById("controlsUI").innerHTML = "G";
        gameover();
    }


}
