function setGamesInitially() {
  let gameTries = 1;
  localStorage.setItem("gameTries", gameTries);
}

function incrementGames() {
  const beginQuizBtn = document.getElementById("begin");
  const localGames = localStorage.gameTries;

  beginQuizBtn.addEventListener("click", () => {
    if (localGames === undefined) {
      setGamesInitially();
    } else {
      localStorage.gameTries++;
    }
  });
}

function renderData() {
  var nameHere = document.getElementById("nameHere");
  var attemptsHere = document.getElementById("attemptsHere");
  var winsHere = document.getElementById("winsHere");
  var lossesHere = document.getElementById("lossesHere");

  if (nameHere === undefined) {
    alert("Hey there is no player fam.");
  } else {
    nameHere.innerHTML = `${localStorage.currentUser}`;
    attemptsHere.innerHTML = `${localStorage.gameTries}`;
    winsHere.innerHTML = `${localStorage.numOfWins}`;
    lossesHere.innerHTML = `${localStorage.numOfLosses}`;
  }
}

function dataReset() {
  localStorage.gameTries = 0;
  localStorage.numOfWins = 0;
  localStorage.numOfLosses = 0;
  renderData();
}

function incrementWins() {
  let incrementedWins = localStorage.numOfWins;
  if (incrementedWins !== undefined) {
    localStorage.numOfWins++;
  } else {
    var winsCount = 1;
    localStorage.setItem("numOfWins", winsCount);
  }
}

function incrementLosses() {
  let incrementedLosses = localStorage.numOfLosses;
  if (incrementedLosses !== undefined) {
    localStorage.numOfLosses++;
  } else {
    var lossCount = 1;
    localStorage.setItem("numOfLosses", lossCount);
  }
}

