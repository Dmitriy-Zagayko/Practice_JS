var start = document.querySelector('#start');
var gameBox = document.querySelector('#game');
var timeOutput = document.querySelector('#time');
var result = document.querySelector('#result');
var timeHeader = document.querySelector('#time-header');
var resultHeader = document.querySelector('#result-header');
var timeGame = document.querySelector('#game-time');
start.addEventListener('click', startGame);
gameBox.addEventListener('click', handleBoxClick);
timeGame.addEventListener('input', setGameTime);
var score = 0;
var isGameStarted = false;

function show(el) {
	el.classList.remove('hide');
};
function hide(el) {
	el.classList.add('hide');
};
function startGame() {
	score = 0;
	setGameTime();
	timeGame.setAttribute('disabled', 'true');
	isGameStarted = true;
	gameBox.style.backgroundColor = '#fff';
	hide(start);
	var interval = setInterval(function () {
		var gameTime = parseFloat(timeOutput.textContent);
		if (gameTime <= 0) {
			clearInterval(interval);
			endGame();
		} else {
			timeOutput.textContent = (gameTime - 0.1).toFixed(1);
		}
	}, 100);
	renderBox();
};
function setGameScore() {
	result.textContent = score.toString();
};
function setGameTime() {
	var time = +timeGame.value;
	timeOutput.textContent = time.toFixed(1);
	show(timeHeader);
	hide(resultHeader);
};
function endGame() {
	isGameStarted = false;
	setGameScore();
	timeGame.removeAttribute('disabled');
	show(start);
	gameBox.innerHTML = '';
	gameBox.style.backgroundColor = '#ccc';
	hide(timeHeader);
	show(resultHeader);
};
function renderBox() {
	gameBox.innerHTML = '';
	var newBox = document.createElement('div');
	var boxSize = randomBox(30, 100);
	var gameSize = gameBox.getBoundingClientRect();
	var maxTop = gameSize.height - boxSize;
	var maxLeft = gameSize.width - boxSize;
	newBox.style.backgroundColor = randomColorBox();
	newBox.style.width = boxSize + 'px';
	newBox.style.height = boxSize + 'px';
	newBox.style.position = 'absolute';
	newBox.style.cursor = 'pointer';
	newBox.style.top = randomBox(0, maxTop) + 'px';
	newBox.style.left = randomBox(0, maxLeft) + 'px';
	newBox.setAttribute('data-box', 'true');
	gameBox.insertAdjacentElement('afterbegin', newBox);
};
function handleBoxClick(event) {
	if (!isGameStarted) {
		return;
	}
	if (event.target.dataset.box) {
		score++;
		renderBox();
	}
};
function randomBox(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
};
function randomColorBox() {
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	var randomColor = "rgb(" + r + "," + g + "," + b + ")";
	return randomColor;
};
