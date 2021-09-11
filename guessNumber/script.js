var inputMinNumber = document.querySelector(".input__min-number");
var inputMaxNumber = document.querySelector(".input__max-number");
var inputNumberOfAttempts = document.querySelector(".input__number-of-attempts");
var inputGuessedNumber = document.querySelector(".input__guessed-number");
var buttonGenerate = document.querySelector(".button__section-generate");
var buttonExit = document.querySelector(".button__section-exit");
var outputCheckInputOfMinNumber = document.querySelector(".output__check-input-of-min-number");
var outputCheckInputOfMaxNumber = document.querySelector(".output__check-input-of-max-number");
var helpSendToTextOutput = document.querySelector(".output__help-text");
var outputCheckInputOfAttemps = document.querySelector(".output__check-input-of-attemps");
var result, resultCheckAttempts = "";
var resultCheckMinNumber, resultCheckMaxNumber, resultCheckMinAndMaxNumber = "";
var countClickGo = 0;
var randomNumber = [];
var tooltipElem;
buttonGenerate.addEventListener("click", compareSecretNumberAndGuessedNumber);
buttonExit.addEventListener("click", resetPage);
document.onmouseover = function (event) {
	var target = event.target;
	var tooltipHtml = target.dataset.tooltip;
	if (!tooltipHtml) {
		return;
	}
	tooltipElem = document.createElement('div');
	tooltipElem.className = 'tooltip';
	tooltipElem.innerHTML = tooltipHtml;
	document.body.append(tooltipElem);
	var coords = target.getBoundingClientRect();
	var left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
	if (left < 0) {
		left = 0;
	}
	var top = coords.top - tooltipElem.offsetHeight - 5;
	if (top < 0) {
		top = coords.top + target.offsetHeight + 5;
	}
	tooltipElem.style.left = left + 'px';
	tooltipElem.style.top = top + 'px';
};
document.onmouseout = function (e) {
	if (tooltipElem) {
		tooltipElem.remove();
		tooltipElem = null;
	}
};
function checkInputOfAttempts() {
	inputNumberOfAttempts.addEventListener("change", function antiHack() {
		buttonGenerate.disabled = true;
		return outputCheckInputOfAttemps.innerHTML = "Не жульничай &#128545";
	});
	var inputAttempts = +inputNumberOfAttempts.value;
	while (inputAttempts) {
		if (inputAttempts < 0) {
			inputNumberOfAttempts.value = 0;
			resultCheckAttempts = "Вводи число больше 0";
			return outputCheckInputOfAttemps.innerHTML = "" + resultCheckAttempts;
		}
		if (inputAttempts > 15) {
			inputNumberOfAttempts.value = 15;
			resultCheckAttempts = "Вводи число меньше 15";
			return outputCheckInputOfAttemps.innerHTML = "" + resultCheckAttempts;
		}
		if (inputAttempts % 1 !== 0) {
			inputNumberOfAttempts.value = Math.round(inputNumberOfAttempts.value);
			resultCheckAttempts = "Я округлил &#128521";
			return outputCheckInputOfAttemps.innerHTML = "" + resultCheckAttempts;
		} else {
			break;
		}
	}
	return outputCheckInputOfAttemps.innerHTML = "";
};
function checkOfInputMinAndMaxNumber() {
	inputMinNumber.addEventListener("change", function antiHack() {
		return outputCheckInputOfMinNumber.innerHTML = "Да сколько хочешь, число уже загадано &#128523";
	});
	inputMaxNumber.addEventListener("change", function antiHack() {
		return outputCheckInputOfMaxNumber.innerHTML = "Да сколько хочешь, число уже загадано &#128523";
	});
	var minNumber = +inputMinNumber.value;
	var maxNumber = +inputMaxNumber.value;
	if (minNumber < 0) {
		inputMinNumber.value *= -1;
		resultCheckMinNumber = "Вводи число больше 0 в следующий раз, а сейчас я сделал число положительным сам.";
		return outputCheckInputOfMinNumber.innerHTML = "" + resultCheckMinNumber;
	}
	if (minNumber >= 200) {
		inputMinNumber.value = 199;
		resultCheckMinNumber = "Вводи число меньше 199";
		return outputCheckInputOfMinNumber.innerHTML = "" + resultCheckMinNumber;
	}
	if (maxNumber < 1) {
		inputMaxNumber.value = 1;
		resultCheckMaxNumber = "Вводи число больше 1";
		return outputCheckInputOfMaxNumber.innerHTML = "" + resultCheckMaxNumber;
	}
	if (minNumber >= maxNumber) {
		var swap = 0;
		swap = inputMinNumber.value;
		inputMinNumber.value = inputMaxNumber.value;
		inputMaxNumber.value = swap;
		resultCheckMinAndMaxNumber = "Минимальное число не может быть больше максимального. Поменяю их местами &#128521";
		return outputCheckInputOfMaxNumber.innerHTML = "" + resultCheckMinAndMaxNumber;
	}
	if (maxNumber > 200) {
		inputMaxNumber.value = 200;
		resultCheckMaxNumber = "Вводи число меньше 200";
		return outputCheckInputOfMaxNumber.innerHTML = "" + resultCheckMaxNumber;
	}
	if (minNumber % 1 !== 0) {
		inputMinNumber.value = Math.round(inputMinNumber.value);
		resultCheckMinNumber = "Я округлил &#128521";
		return outputCheckInputOfMinNumber.innerHTML = "" + resultCheckMinNumber;
	}
	if (maxNumber % 1 !== 0) {
		inputMaxNumber.value = Math.round(inputMaxNumber.value);
		resultCheckMaxNumber = "Я округлил &#128521";
		return outputCheckInputOfMaxNumber.innerHTML = "" + resultCheckMaxNumber;
	}
	return outputCheckInputOfMaxNumber.innerHTML = "";
};
function generateSecretNumberForUser(min, max) {
	var ranNum = Math.floor(Math.random() * (max - min + 1) + min);
	randomNumber.push(ranNum);
	return randomNumber[0];
};
function compareSecretNumberAndGuessedNumber() {
	checkInputOfAttempts();
	checkOfInputMinAndMaxNumber();
	var guessedNumber = +inputGuessedNumber.value;
	var minNumber = +inputMinNumber.value;
	var maxNumber = +inputMaxNumber.value;
	var secretNumber = generateSecretNumberForUser(minNumber, maxNumber);
	var quantityOfAttempts = +inputNumberOfAttempts.value;
	countClickGo++;
	quantityOfAttempts -= countClickGo;
	if (guessedNumber > secretNumber) {
		result = "Неа, моё число меньше. У тебя осталось " + `${quantityOfAttempts}` + " попыток";
	}
	if (guessedNumber < secretNumber) {
		result = "Неа, моё число больше. У тебя осталось " + `${quantityOfAttempts}` + " попыток";
	}
	if (guessedNumber === secretNumber) {
		countClickGo -= quantityOfAttempts;
		if (countClickGo < quantityOfAttempts) {
			countClickGo *= -1;
			countClickGo -= quantityOfAttempts;
			countClickGo *= -1;
		}
		result = "Поздравляю! Ты угадал загаданное число за " + `${countClickGo}` + " попыток!";
		buttonGenerate.disabled = true;
	}
	if (quantityOfAttempts <= 0) {
		result = "Твои попытки закончились. Так себе интуиция, честно говоря.";
		buttonGenerate.disabled = true;
	}
	return helpSendToTextOutput.innerHTML = result;
};
function resetPage() {
	location.reload();
	buttonGenerate.disabled = false;
};
