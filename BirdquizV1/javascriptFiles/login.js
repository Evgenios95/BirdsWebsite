function whenLogsIn() {
  localStorage.clear();
  storeUserName();
}

function storeUserName() {
  //get the value of the form
  const userName = document.getElementById("firstName").value;
  //store the the input value in localstorage
  localStorage.setItem("currentUser", userName);
}

function addUserName() {
  const currentUserName = localStorage.currentUser;
  // console.log(currentUserName);
  //if the currentUser key exists in localstorage.
  if (currentUserName !== undefined) {
    //print the username with the following message.
    document.getElementById(
      "loginMessage"
    ).innerHTML = `Welcome ${currentUserName}! 🤸‍♂️`;
  } else {
    console.log("Something's wrong at addUserName()! 👮‍♂️");
  }
}

