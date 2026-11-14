
let turn = "X";
let gameOver = false;

let boxes = ["", "", "", "", "", "", "", "", ""];

// Jeetne ke saare 8 tarike
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function play(btn, index) {

    // Check karo box pehle se bhara hai ya game khatam ho gaya hai
    if (boxes[index] !== "" || gameOver) return;

    // Box mein X ya O likho
    boxes[index] = turn;
    btn.innerText = turn;

    // Check karo koi player jeeta hai ya nahi
    for (let pattern of winPatterns) {

        let [a, b, c] = pattern;

        if (
            boxes[a] &&
            boxes[a] === boxes[b] &&
            boxes[a] === boxes[c]
        ) {

            document.getElementById("msg").innerText =
                "Player " + turn + " Jeet Gaya!";

            gameOver = true;
            return;
        }
    }

    // Check karo match draw toh nahi ho gaya
    if (!boxes.includes("")) {

        document.getElementById("msg").innerText =
            "Match Draw!";

        gameOver = true;
        return;
    }

    // X se O ya O se X ki baari badlo
    turn = (turn === "X") ? "O" : "X";

    document.getElementById("msg").innerText =
        "Player " + turn + " ki baari";
}
