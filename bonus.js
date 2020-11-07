//buttons
const rulesBtn = document.getElementById("rules");
const closeModalBtn = document.getElementById("close");
const playAgain = document.getElementById("playAgain");
//modal, boards
const modal = document.getElementById("modal");
const board1 = document.getElementById("board1");
const board2 = document.getElementById("board2");
const user = document.getElementById("user");
const house = document.getElementById("house");
//text fields
const text = document.getElementById("finalText");
const score = document.getElementById("score");
//selectors
const possibleChoices = Array.from(document.querySelectorAll(".board_select_5"));
//object
const data = {
  userChoice: "",
  userScore: 0,
  houseChoice: "",
};
let win;

rulesBtn.addEventListener("click", () => {
  modal.classList.remove("hide");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hide");
});

const handleClick = (el) => {
  data.userChoice = el.id;
  showChoices();
};

playAgain.addEventListener("click", () => {
  data.userChoice = "";
  data.houseChoice = "";
  // location.reload();

  //hide results
  board2.classList.add("hide");

  //remove children
  user.removeChild(user.firstChild);
  house.removeChild(house.firstChild);

  //show main
  board1.classList.remove("hide");
});

const showChoices = () => {
  data.houseChoice = houseChoice(data.userChoice);

  //hide board1
  board1.classList.add("hide");

  //show board2
  board2.classList.remove("hide");

  //show user selection
  let cloneUser = document.getElementById(data.userChoice).cloneNode(true);
  cloneUser.removeAttribute("onclick");
  user.appendChild(cloneUser);

  //show house selection
  let cloneHouse = document.getElementById(data.houseChoice).cloneNode(true);
  cloneHouse.removeAttribute("onclick");
  house.appendChild(cloneHouse);

  //play game
  play(data.userChoice, data.houseChoice);

  if (win) {
    text.innerText = "You win";
    data.userScore++;
    cloneUser.classList.add("pulse");
  } else {
    text.innerText = "You lose";
    cloneHouse.classList.add("pulse");
  }

  score.innerText = data.userScore;
};

const houseChoice = (userChoice) => {
  let randomNum = Math.floor(Math.random() * 5);
  let go = true;
  while (go) {
    randomNum = Math.floor(Math.random() * 5);

    if (possibleChoices[randomNum].id != userChoice) {
      go = false;
    }
  }
  return possibleChoices[randomNum].id;
};

const play = (user, house) => {
  if (user === house) {
    text.innerText="And... It's a tie!";
  }

  //If the user chose rock...
  else if (user === "rock") {
    if (house === "scissors") {
      win = true;
    } else if (house === "paper") {
        win=false;
    } else if (house === "lizard") {
      win = true;
    } else {
        win=false;
    }
  }

  //If the user chose paper...
  else if (user === "paper") {
    if (house === "scissors") {
        win=false;
    } else if (house === "rock") {
      win = true;
    } else if (house === "lizard") {
        win=false;
    } else {
      win = true;
    }
  }

  //If the user chose scissors...
  else if (user === "scissors") {
    if (house === "paper") {
      win = true;
    } else if (house === "rock") {
        win=false;
    } else if (house === "lizard") {
      win = true;
    } else {
        win=false;
    }
  }

  //If the user chose lizard...
  else if (user === "lizard") {
    if (house === "scissors") {
        win=false;
    } else if (house === "rock") {
        win=false;
    } else if (house === "paper") {
      win = true;
    } else {
      win = true;
    }
  }

  //If the user chose spock...
  else if (user === "spock") {
    if (house === "scissors") {
      win = true;
    } else if (house === "rock") {
      win = true;
    } else if (house === "lizard") {
      win = false;
    } else {
      win = false;
    }
  }
};
