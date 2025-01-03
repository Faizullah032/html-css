// const startGameBtn = document.getElementById('start-game-btn');
// const paperSelection = 'PAPER';
// const rockSelection = 'ROCK';
// const scissorsSelection = 'SCISSORS';
// const defaultUserChoice = 'ROCK';
// const resultDraw = 'DRAW';
// const resultPlayerWin = 'PLAYER-WINS';
// const resultComputerWin = 'COMPUTER-WINS';


// let gameIsRunning = false;
// const getPlayerChoice = function () {
//  const selection =  prompt(`${rockSelection}, ${paperSelection} or ${scissorsSelection}`, '').toUpperCase();
//  if (
//     selection !== paperSelection &&
//     selection !== rockSelection &&
//     selection !== scissorsSelection
//  ) {
//     alert (`invalid choice we choose ${defaultUserChoice} for you`);
//     return;
// }
// return selection;
// };


// const getComputerChoice = function (){
//     const randomValue = Math.random();
//     if (randomValue < 0.34) {
//         return rockSelection;
//     } else if (randomValue < 0.67) {
//         return paperSelection;
//     } else {
//         return scissorsSelection;
//     }
// };

// ---------------

// // const add = (a, b) => a + b;

// // const add2 = function (a, b) {
// //     return a+b;
// // }


// -----------------

// const getWinner = (cChoice,pChoice) =>
//        cChoice === pChoice 
//        ? returnDraw 
//        : (cChoice === rockSelection && pChoice === paperSelection) ||
//         (cChoice === paperSelection && pChoice === scissorsSelection) ||
//         (cChoice === scissorsSelection && pChoice === rockSelection ) 
//         ? resultPlayerWin
//         : resultComputerWin;


//  --------------       

// // const getWinner = function (cChoice, pChoice) {
// //     if (cChoice === pChoice) {
// //         return resultDraw;
// //     } else if (cChoice === rockSelection && pChoice === paperSelection ||
// //                cChoice === paperSelection && pChoice === scissorsSelection ||
// //                cChoice === scissorsSelection && pChoice === rockSelection ) {
// //                 return resultPlayerWin;
// //                } else {
// //                return  resultComputerWin;
// //                }
// // };

// ---------------

// startGameBtn.addEventListener('click', function() {
//     if (gameIsRunning) {
//         return;
//     }
//     gameIsRunning = true;
//     console.log('game is starting...');
//     const playerChoice = getPlayerChoice();
//     const computerChoice = getComputerChoice();
//     const winner = getWinner (computerChoice,playerChoice);
//     console.log(winner);
//     let message =  `you picked ${playerChoice}, computer picked ${computerChoice}, therefor  `;
// if (winner === resultDraw) {
//     message = message + 'had a draw';
// } else if (winner === resultPlayerWin) {
//     message = message + 'you won';
// } else {
//     message = message + 'computer won';
// }
// alert (message);
// gameIsRunning = false;
// });


// const sumUp = (...numbers) => {
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num;
//     }
//     return sum;
// };


// const substractUp = function ()  {
//     let sum = 0;
//     for (const num of arguments) {
//         sum -= num;
//     }
//     return sum;
// }; 
// console.log(sumUp(3,53*3,23,23 /5,4,54,4-3));
// console.log(substractUp(3,53*3,23,23 /5,4,54,4-3));


// console.log(sumUp([3,53*3,23,23 /5,4,54,4-3,43,12,654,45,42]));




// ---------------------------------------------------------------------

// const startGameBtn = document.getElementById('start-game-btn');

// function startGame () {
//  console.log('Game is starting');
// }

// startGameBtn.addEventListener('click', startGame);


// const startGameBtn = document.getElementById('start-game-btn');

// const  defaultChoice = "ROCK";
// const  playerChoice = "PAPER";
// const  computerChoice = "SCISSORS";


// let gameIsStarting = false;

// function getPlayerChoice () {
//     const selection = prompt(`${defaultChoice},${playerChoice},${computerChoice}!`,'').toUpperCase;
//         if (
//             selection !== defaultChoice &&
//             selection !== playerChoice &&
//             selection !== computerChoice
//             ) {
//                 alert (`invalid  we choice ${defaultChoice} for you`);    
//                 return defaultChoice;
//             }  
//             return selection;
//         };


// function getComputerChoice () {
//     const randomValue = Math.random ();
//         if ( randomValue < 0.34) {
//                     return defaultChoice;
//                 } else if (randomValue < 0.64) {
//                     return playerChoice;
//                 } else {
//                     return computerChoice
//                 }
                
//                 };

// startGameBtn.addEventListener('click', function gameStart() {
//     if (gameIsStarting) {
//         return;
//     }
//     gameIsStarting =true;
// console.log('Game is loading...');
// const playerSelection = getPlayerChoice();
// console.log(playerSelection);
// const userSelection = getPlayerChoice;
// const robotSelection = getComputerChoice;
// });



// function lognUwenMEssage (userName) {
//     return (`${userName} just logged in`);
// }
// console.log(lognUwenMEssage('faiz'));


// function add (...num1) {
//     return num1;
// }
// console.log(add (5,25,4,75,453,74,6374));

// for (let i= 1; i<=10;  i++){
    
//    if(i <= 4) {
//     document.write("*")
//    } else {
//     document.write("#<br>")
//    }
// }

