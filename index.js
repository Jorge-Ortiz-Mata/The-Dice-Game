const resultText = document.getElementById('result');
const buttonStart = document.getElementById('start-game');
const imageOnePlayer = document.getElementById('player-1-img');
const imageSecondPlayer = document.getElementById('player-2-img');
const imagesArray = ['dice1', 'dice2', 'dice3', 'dice4', 'dice5', 'dice6'];

buttonStart.addEventListener('click', function(){
    const num1 = Math.round(((Math.random() * 10) * 5) / 10);
    const num2 = Math.round(((Math.random() * 10) * 5) / 10);

    imageOnePlayer.src = `./images/${imagesArray[num1]}.png`;
    imageSecondPlayer.src = `./images/${imagesArray[num2]}.png`;

    if(num1 > num2) {
        resultText.innerHTML = 'Player One won!'
    } else if(num2 > num1) {
        resultText.innerHTML = 'Player Two won!'
    } else {
        resultText.innerHTML = 'Draw'
    }
})
