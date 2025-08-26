
function playerSelect(){
    while(true){
        console.log("Please enter your choice")
        console.log("1. Rock")
        console.log("2. Paper")
        console.log("3. Scissors")
        let choice = prompt("Enter a number (q to quit): ")

        if (choice == "1")
            return "r"
        else if (choice == "2")
            return "p"
        else if (choice == "3")
            return "s"
        else if (choice == "q"){
            return undefined
        }
        else
            continue
    }

}
function compSelect(){
    let choice = Math.random();
    if(choice <= 0.33 && choice >= 0)
        return "r"
    else if(choice >0.33 && choice < 0.67)
        return "p"
    else if(choice >=0.67 && choice <= 1)
        return "s"
}
function playRound(humanChoice, compChoice) {
    if (humanChoice === compChoice)
        return 0;
    else if(humanChoice == "r"){
        if(compChoice == "p")
            return -1
        else
            return 1
    }
    else if(humanChoice == "p"){
        if(compChoice == "s")
            return -1
        else
            return 1
    }
    else if(humanChoice == "s"){
        if(compChoice == "r")
            return -1
        else
            return 1
    }
    else{
        console.log("Ending game. Goodbye!")
        return
    }
}
function Game(){
    let humanScore = 0
    let compScore = 0
    while (true){

        let PC = playerSelect()
        if(PC == undefined)
            break
        let CC = compSelect()
        console.log(`You selected: ${PC}`)
        console.log(`CPU selected: ${CC}`)

        let result = playRound(PC, CC)
        if(result > 0){
            humanScore++
            console.log("You've won this round!")
        }
        else if(result < 0){
            compScore++
            console.log("The CPU has won this round.")
        }
        else
            console.log("The round has ended in a tie!")
        if(humanScore == 5 || compScore == 5){
            if(humanScore == 5)
                console.log("You win!")
            else
                console.log("CPU wins!")
            return
        }

        console.log(`${humanScore} : ${compScore}`)
        console.log(" ")
    }
}

Game()