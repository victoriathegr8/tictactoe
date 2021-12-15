let winCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
let xArr = [];
let oArr = [];
let xTurn = true;

function resetBoard() {
    document.getElementById("table").style.pointerEvents = "auto";
    let boxes = document.querySelectorAll("td");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "&nbsp;&nbsp;&nbsp;"
    }
    xTurn = true;
    xArr = [];
    oArr = [];
    document.getElementById("message").innerHTML = "";
    document.getElementById('turn').innerHTML = "Turn: X";
}

function checkWin(arr) {
    let winStatus = false;
    for (let i = 0; i < winCombos.length; i++) {
        winStatus = winCombos[i].every(y => arr.includes(y));
        if (winStatus) break;
    }
    return winStatus;
}

function handleWin(winner) {
    document.getElementById("message").innerHTML = winner + " has won!"
    document.getElementById("table").style.pointerEvents = "none";
    xArr = [];
    oArr = [];
}

function handleTie() {
    document.getElementById("message").innerHTML = "Tie!"
    document.getElementById("table").style.pointerEvents = "none";
}

function handleClick(id) {
    if (document.getElementById(id).innerHTML != "&nbsp;&nbsp;&nbsp;") {
        alert("place in an unfilled box")
    }
    else if (xTurn) {
        document.getElementById(id).innerHTML = "X";
        document.getElementById('turn').innerHTML = "Turn: O";
        xTurn = false;
        xArr.push(Number(id));
        if (checkWin(xArr)) handleWin("X");
        if (xArr.length > 4) handleTie();
    }
    else {
        document.getElementById(id).innerHTML = "O";
        document.getElementById('turn').innerHTML = "Turn: X";
        xTurn = true;
        oArr.push(Number(id));
        if (checkWin(oArr)) handleWin("O");
        if (oArr.length > 4) handleTie();
    }
}