// Togloomiin bvh gazar ashiglagdah GLOBAL huwisagchid.

// Ali toglogch shoo shideh we gedgiig end hadgalna.
var activePlayer;

// Hoyr toglogchiin tsugluulsan onoo.
var scores;

// Idehwtei toglogchiin tsugluulj baigaa eeljiin onoo.
var roundScore;

// shoonii zurgiig vzvvleh elemetiig DOM-oos haij olood end hadgalay.
var diceDom = document.querySelector(".dice");

// Togloomiig ehlvvlne.
initGame();

// Togloomiig shineer ehlehed beltgene.
function initGame() {
  // Toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogchiig 0; hoyrdugaar toglogchiig 1 gej temgdegley.
  activePlayer = 0;

  // Toglogchiin tsugluulsan onoog hadgalah huwisagch
  scores = [0, 0];

  // Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
  roundScore = 0;

  // Programm ehlehed beltgey
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  diceDom.style.display = "none";

  // Toglogchdiin neriig butsaaj gargah.
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 0";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

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
    swithToNextPlayer();
  }
});

// HOLD towchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function() {
  // Ug toglogch ni tsugluulsan eeljnii onoog global onoon deer ni nemj ugnu.
  scores[activePlayer] = scores[activePlayer] + roundScore;

  // Delgets deer onoog ni uurchilnu.
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Ugg toglogch hojson esehiig (onoo ni 100-s ih eseh) shalgah.
  if (scores[activePlayer] >= 10) {
    // Ylagch gesen textiig nerniih ni door gargana.
    document.getElementById("name-" + activePlayer).textContent = "WINNER !!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // Toglogchiin eeljiig solino.
    swithToNextPlayer();
  }
});

// Ene funcion ni togloh eeljiig daraagiin function rvv shiljvlne.
function swithToNextPlayer() {
  // Ene toglogchiin eeljindee tsugluulsan onoo 0 bolno.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Ulaan tsegiig shiljuuleh.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Shoog tvr alga bolgono.
  diceDom.style.display = "none";
}

// New game buyu shine togloom ehlvvleh event listener
document.querySelector(".btn-new").addEventListener("click", initGame);
