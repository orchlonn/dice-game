// Toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogchiig 0; hoyrdugaar toglogchiig 1 gej temgdegley.
var activePlayer = 1;

// Toglogchiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];
// Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
var roundScore = 0;
// Shoonii ali talaaraa buusniig hadgalah huwisagch heregtei.(1-6 gesen utgiig ene huwisagchid sanamsargvi ugnu.)
var dice = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").textContent = dice;

// Programm ehlehed beltgeu
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";
console.log("shoo :" + dice);
