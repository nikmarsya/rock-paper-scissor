function computerPlay(){
    /*let number=Math.round(10*Math.random());
    if(number<=2) return "Rock";
    else if(number>=3&&number<6) return "Paper";
    else return "Scissor";*/
    const symbol=["rock","paper","scissor"];
    let number=Math.floor(Math.random()*3);
    return symbol[number];

}

function playRound(playerSelection,computerSelection){
        playerSelection= playerSelection.toString().toLowerCase();
        computerSelection= computerSelection.toString().toLowerCase();

        if(playerSelection=="paper"){
                if(computerSelection=="paper")
                    return "It's a tie";
                if(computerSelection=="rock")
                    return "You win! Paper beats rock";
                if(computerSelection=="scissor")
                    return "You lose! Scissor beats paper";
        }
        else if(playerSelection=="rock"){
            if(computerSelection=="paper")
                return "You lose! Scissor beats paper";
            if(computerSelection=="rock")
                return "It's a tie";
            if(computerSelection=="scissor")
                return "You win! Paper beats rock";
        }else{
            if(computerSelection=="paper")
                return "You win! Paper beats rock";
            if(computerSelection=="rock")
                return "You lose! Scissor beats paper";
            if(computerSelection=="scissor")
                return "It's a tie";
    }
    }

    function game(){
            let result="";
            let computer=0;
            let player=0;
            for(let i=0;i<5;i++){
                let playerChoice=prompt("Type either rock or paper or scissor");
                let computerChoice=computerPlay();
                result=playRound(playerChoice,computerChoice);
                console.log(result);
                if(result.includes("lose"))
                    computer++;
                else if(result.includes("win"))
                    player++;
            }
            if(player>computer)
                console.log(`The winner is player with the score of ${player} over ${computer}`);
            else if(computer>player)
                console.log(`The winner is computer with the score of ${computer} over ${player}`);
            else
            console.log(`It is a tie with the score of ${player}`);
    }

