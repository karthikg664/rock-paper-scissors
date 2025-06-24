//Global variables
let humanScore = 0;
let computerScore = 0;

//Get DOM elements
const humanChoiceDisplay = document.querySelector("#human-choice-display");
const computerChoiceDisplay = document.querySelector("#computer-choice-display");
const messageDisplay = document.querySelector("#msg");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const container = document.querySelector("#container");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

function updateScoreBoard() {
    humanScoreDisplay.textContent = `Your score ${humanScore}`;
    computerScoreDisplay.textContent = `Computer score ${computerScore}`;
};

function playGame(humanSelection) {
    const computerSelection = getComputerChoice();

    //Dicplay choices
    humanChoiceDisplay.textContent = `YOU CHOOSE: ${humanSelection}`;
    computerChoiceDisplay.textContent = `COMPUTER CHOOSE: ${computerSelection}`;

    let roundMessage = "";

    if (humanSelection === computerSelection) {
        roundMessage = "It's a Tie!";
    } else if (
        (humanSelection === "Rock" && computerSelection === "Scissors") ||
        (humanSelection === "Paper" && computerSelection === "Rock") ||
        (humanSelection === "Scissors" && computerSelection === "Paper")
    ) {
        roundMessage = `You Win! ${humanSelection} beats ${computerSelection}`;
        humanScore++;
    } else {
        roundMessage = `You Lost! ${computerSelection} beats ${humanSelection}`;
        computerScore++;
    }

    //Display message and Update Score
    messageDisplay.textContent = roundMessage;
    updateScoreBoard();

    //game end
    if (humanScore === 5) {
        messageDisplay.textContent = "Congratulations! You Won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        messageDisplay.textContent = "Oh no! The computer won the game!";
        disableButtons();
    }
};

//disablebuttons function
function disableButtons() {
    const btns = document.querySelectorAll(".btn");
    btns.forEach(button => {
        button.disabled = true;
        button.style.opacity = 0.5;
    });
};

//enablebuttons function

function enableButtons() {
    const btns = document.querySelectorAll(".btn");
    btns.forEach(button => {
        button.disabled = false;
        button.style.opacity = 1;
    });
};

//Event listeners
const btns = document.querySelectorAll(".btn");
btns.forEach(button => {
    button.addEventListener("click", (event) => {
        const humanChoice = event.target.textContent;
        playGame(humanChoice);
    });
});

updateScoreBoard();

//Reset button
const resetbtn = document.createElement("button");
resetbtn.textContent = "Reset Game";
resetbtn.id = "reset-btn";
container.appendChild(resetbtn);

resetbtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    updateScoreBoard();
    messageDisplay.textContent = "Make your move!";
    humanChoiceDisplay.textContent = "YOU CHOOSE: ";
    computerChoiceDisplay.textContent = "COMPUTER CHOOSE: ";
    enableButtons();
});