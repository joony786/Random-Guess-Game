/*
 Game Functions
 -player must guess between min and max number
- Player gets certin amount of guess
- Notifiy the player remaining guesss
- notifiy the player correct answer if he loose
- let player choose to play again
Note: if things got reptative its better to wrap them in a fucntion
*/

// Game Values
let min = 1,
    max = 10,
    winningNum = randomNum(),
    guessLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// Assign ui min and max
 minNum.textContent = min;
 maxNum.textContent = max;

// event listener for new game 
game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();}
});

 // Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    
    // Validate
    if(isNaN(guess) || guess < min || guess > max){
      setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
   

if(guess === winningNum){
    // Game won
 gameWon(true,`you won!! ${winningNum} is correct`)

//  alternative
    // // disbale the nput
    // guessInput.disabled = true;
    // // turn border green
    // guessInput.style.color = 'green';
    // // show winning message 
    // setMessage(`you won!! ${winningNum} is correct`, 'green');

}
else{
    // game lost
    // wrong answer
    guessLeft -= 1;
    //   check remaing inputs
    if(guessLeft === 0){
        // //   you lost 
        
        gameWon(false,`You lost better try luck next time winning number was ${winningNum}`);
    
        // // turn border green
    // guessInput.style.color = 'red';
    // setMessage(`You lost better try luck next time winning number was ${winningNum}`, 'red');
    // // disbale the nput
    // guessInput.disabled = true;

  }
//   wrong answer
  else{
      guessInput.value = ''
    setMessage(`${guess} Guess is not correct remaining guesses are ${guessLeft}`, 'red');
    guessInput.style.borderColor = 'red';
  }
}

 });
// get random number
function randomNum(min,max){
    return  Math.floor(Math.random()*(max-min-1)+min);
  
  }

// Create  setMessage function 
function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}
function gameWon(won,msg){
    let color;
    won === true ? color ='green' : color='red';
  // disbale the nput
  guessInput.disabled = true;
  // turn border green
  guessInput.style.color;
  // show winning message 
  setMessage(msg);

//   play again?
guessBtn.value = 'Play Again';
guessBtn.className += 'play-again';
}

