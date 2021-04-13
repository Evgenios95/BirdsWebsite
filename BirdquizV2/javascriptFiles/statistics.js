/**
 * Create an empty array and fill it with the sessions from the localStorage, 
 * which will be parsed as soon as they are defined.
 * @returns an array filled with the sessions.
 */
function retrieveSessions() {
  let arrayOfSessions = [];
  let sessionsAsString = localStorage.sessions;
  if (sessionsAsString !== undefined) {
    arrayOfSessions = JSON.parse(sessionsAsString);
  }
  return arrayOfSessions;
}

/**
 * In case it's not an array throw an error.
 * Otherwise, store the stringified version of the sessions in
 * a variable sessionsAsString which will then be fed to the localStorage.
 * @param {*} arrayOfSessions the array, stringified. 
 */
function saveSessions(arrayOfSessions) {
  if (!Array.isArray(arrayOfSessions)) {
    throw new Error("Mate this is not an array! 👩🏻‍⚖️");
  }
  let sessionsAsString = JSON.stringify(arrayOfSessions);
  localStorage.sessions = sessionsAsString;
}

/**
 * Here is the method that is called in the first page, as soon as the quiz starts.
 * a new array is created, and I feed it to my sessions array and then save it.
 */
function incrementGames() {
  let arrayOfSessions = retrieveSessions();
  let newSession = { isAWin: false };
  if (newSession === undefined) {
    throw new Error("The session is not here.");
  }
  arrayOfSessions.push(newSession);
  saveSessions(arrayOfSessions);
}

function retrieveAttempts() {
  let arrayOfSessions = retrieveSessions();
  return arrayOfSessions.reduce((accumulator, curr) => ++accumulator, 0);
}

function incrementWins() {
  let arrayOfSessions = retrieveSessions();
  if (arrayOfSessions.length > 0) {
    let thisSession = arrayOfSessions[arrayOfSessions.length - 1];
    thisSession.isAWin = true;
  }
  saveSessions(arrayOfSessions);
}

function incrementLosses() {
  let arrayOfSessions = retrieveSessions();
  if (arrayOfSessions.length > 0) {
    let thisSession = arrayOfSessions[arrayOfSessions.length - 1];
    thisSession.isAWin = false;
  }
  saveSessions(arrayOfSessions);
}

function getWonSessions() {
  let arrayOfSessions = retrieveSessions();
  let wins = arrayOfSessions
    .filter((val) => val.isAWin)
    .reduce((acc, curr) => ++acc, 0);
  return wins;
}

function getLostSessions() {
  let arrayOfSessions = retrieveSessions();
  let losses = arrayOfSessions
    .filter((val) => !val.isAWin)
    .reduce((acc, curr) => ++acc, 0);
  return losses;
}

/**
 * reset everything in order to start again from the beginning.
 */
function dataReset() {
  localStorage.sessions = undefined;
}

function renderData() {
  var nameHere = document.getElementById("nameHere");
  var attemptsHere = document.getElementById("attemptsHere");
  var winsHere = document.getElementById("winsHere");
  var lossesHere = document.getElementById("lossesHere");

  if (nameHere === undefined) {
    alert("Hey there is no player fam.");
  } else {
    nameHere.innerHTML = `Here are your stats ${localStorage.currentUser}! 💹`;
    attemptsHere.innerHTML = "Number of attempts:" + retrieveAttempts();
    winsHere.innerHTML = "Number of wins:" + getWonSessions();
    lossesHere.innerHTML = "Number of losses:" + getLostSessions();
  }

  let data = generateSessionTable();
  document.getElementById("sessions").innerHTML = data;
}

function makeRow(curr, index) {
  //using ternary to asign win or loss regarding what's happening.
  return `<tr> <td>${index + 1}</td> <td>${
    curr.isAWin ? "Win" : "Loss"
  }</td> </tr>`;
}

function con(acc, curr) {
  let res = acc + curr;
  return res;
}

function generateSessionTable() {
  let arrayOfSessions = retrieveSessions();
  //feed rows to the html
  let rows = arrayOfSessions.map(makeRow).reduce(con, "");
  return `
    <table>
      <tr>
      <th>Session</th>
      <th>Result</th>
    </tr>
    ${rows}
    </table>
    `;
}
