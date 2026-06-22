
let homeScore = 0;
let guestScore = 0;

let homeScoreText = document.getElementById("homeScoreText");
let guestScoreText = document.getElementById("guestScoreText");

function addScore(val, owner) {
    if (owner == "home") {
        homeScore += val;
        homeScoreText.textContent = homeScore < 10 ? "0" + homeScore : homeScore;
    } else {
        guestScore += val;
        guestScoreText.textContent = guestScore < 10 ? "0" + guestScore : guestScore;
    }
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    homeScoreText.textContent = "00";
    guestScoreText.textContent = "00";
}