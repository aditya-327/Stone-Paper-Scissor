let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const CompScorePara = document.querySelector("#comp");


const genCompchoice = () =>{
    const opt = ["stone", "paper", "scissor"];
    // stone , paper, scissors
   const randIdx =  Math.floor(Math.random()*3);        // numbers between 0 to 3
    return opt[randIdx];
}


const draw = () =>{
    // console.log("Game was Draw");
    msg.innerText = "Game was Draw.Play again";
    msg.style.backgroundColor = "#081b31";
    
}


const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win");
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        CompScorePara.innerText = compScore;
        // console.log("You Loss");
        msg.innerText = "You lose.";
        msg.style.backgroundColor = "Red";
    }
}  


// computer choice
const playGame = (userChoice)=>{
    // console.log("user choice is ",userChoice);  // user choice

    const compChoice = genCompchoice();
    console.log("Computer choice is ",compChoice);  // computer choice

    if(userChoice === compChoice){
        draw();
    }
    else{
        let userWin = true
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin);
    }
}


choices.forEach((choice) => {
    //console.log(choice);    // to print indivial div
    choice.addEventListener("click", () => {

        // to access id 
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});