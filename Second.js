const runGame = function() {
    // Your code additions go here

    let team1 = prompt("Enter the name of the first team:");
    let score1 = parseInt(prompt("Enter the score for " + team1 + ":"));

    let team2 = prompt("Enter the name of the second team:");
    let score2 = parseInt(prompt("Enter the score for " + team2 + ":"));

    let result;

    if (score1 > score2) {
        result = team1 + " won " + score1 + " to " + score2;
    }
    else if (score2 > score1) {
        result = team2 + " won " + score2 + " to " + score1;
    }
    else {
        result = "The game was a tie: " + score1 + " to " + score2;
    }

    // Code that adds a new paragraph with a string to the "div" in the HTML file 
    const divId = document.getElementById("results");
    const newPara = document.createElement("p");
    newPara.textContent = result;
    divId.appendChild(newPara);
}
