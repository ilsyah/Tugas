const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });
        // Computer options
        const computerOptions = ["batu","kertas","gunting"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                // computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //Here is where we call compare hands
                    compareHands(this.textContent, computerChoice);
                    //update img
                    playerHand.src = `assets/images/${this.textContent}.png`;
                    computerHand.src = `assets/images/${computerChoice}.png`;
                }, 2000);
                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        //update text
        const winner = document.querySelector(".winner");
        //checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "seri";
            return ;
        }
        //checking for batu
        if (playerChoice === "batu") {
            if (computerChoice === "gunting") {
                winner.textContent = "Player win";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer win";
                cScore++;
                updateScore();
                return;
            }
        }
        // checking for kertas
        if (playerChoice === "kertas") {
            if (computerChoice === "gunting") {
                winner.textContent = "Computer win";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player win";
                pScore++;
                updateScore();
                return;
            }
        }
        // checking for gunting
        if (playerChoice === "gunting") {
            if (computerChoice === "batu") {
                winner.textContent = "Computer win";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player win";
                pScore++;
                updateScore();
                return;
            }
        }
    };

    //is call all the inner function
    startGame();
    playMatch();
};

//start the game function
game();
