// Toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogchiig 0; hoyrdugaar toglogchiig 1 gej temgdegley.
var activePlayer = 0;

// Toglogchiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalah huwisagch heregtei.(1-6 gesen utgiig ene huwisagchid sanamsargvi ugnu.)

// Programm ehlehed beltgey
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1-6 zurgaa dotor sanamsargvi neg toog gargaj awna
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Shoonii zurgiig web deer gargaj irne
  diceDom.style.display = "block";
  // Buusan sanamsargvi toond hargalzah shoonii zurgiig web deer gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";

  // Buusan too ni 1 ees ylagatai bol idewhte toglogchiin eeljiin onoog nemegdvvlne.
  if (diceNumber !== 1) {
    // 1-ees ylgaatai too buulaa. Buusan toog toglogchid nemj ugnu.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan bol tul toglogchiin eeljiig ene hesegt solij ugnu.

    // Ene toglogchiin eeljindee tsugluulsan onoo 0 bolno.
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // Herew idewhtei toglogch ni 0 baiwal idewhtei toglogchiig 1 bolgo.
    // Vgvi bol idewhtei toglogchiig 0 bolgo.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Ulaan tsegiig shiljuuleh.
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Shoog tvr alga bolgono.
    diceDom.style.display = "none";
  }
});
