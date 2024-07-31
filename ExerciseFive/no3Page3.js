function game(player){
    const choices= ["rock", "paper", "scissor"];
    var bot= choices[Math.floor(Math.random() * 3)];

    if (player === bot ){
    return "Tie";
} else if (
    (bot === "rock" && player === "scissor") ||
    (bot === "paper" && player === "rock") ||
    (bot === "scissor" && player === "paper")
) { 
    return "You Win! Bot chose " + bot;
} else {
    return "You Lose! Bot chose " + bot;
}
}

console.log(game('paper'));


// function game(player){
//     var bot= Math.random();
//     if (bot < 0.33){
//         bot= "paper";
//     } else if (bot <=0.33 && bot >0.66){
//         bot= "rock";
//     } else {
//         bot= "scissor";
//     }

//     var result= ""
//     if (player === bot){
//         result= "Tie"
//     } else if (player == "paper"){
//         result= (bot == "scissor") ? "Lose!" : "Win!"
//     } else if (player == "rock"){
//         result= (bot == "paper") ? "Lose!" : "Win!"
//     } else if(player == "scissor"){
//         result= (bot == "paper") ? "Win!" : "Lose!"
//     } else {
//         result= "wrong input! choose between Rock, Paper or Scissor!"
//     }
//     return result
// }

// console.log(game("scissor"));