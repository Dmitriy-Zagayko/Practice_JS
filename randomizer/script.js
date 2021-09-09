var maxInputNumber = document.querySelector('.input__max-number');
var minInputNumber = document.querySelector('.input__min-number');
var buttonGenerate = document.querySelector('.button__generate');
var buttonReset = document.querySelector('.button__reset');
var resultSendToTextOutput = document.querySelector('.text__output-generate-number');
var arrayOfGenerateNumber = [];
buttonGenerate.addEventListener('click', getNumberInDiapasonAndSendToTextOutput);
buttonReset.addEventListener('click', resetPage);
function generateRandomNumberInDiapason(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function getNumberInDiapasonAndSendToTextOutput() {
	var maxNumber = Math.floor(+maxInputNumber.value);
	var minNumber = Math.floor(+minInputNumber.value);
	var randomNumberInDiapason = generateRandomNumberInDiapason(minNumber, maxNumber);
	while (arrayOfGenerateNumber.indexOf(randomNumberInDiapason) !== - 1) {
		randomNumberInDiapason = generateRandomNumberInDiapason(minNumber, maxNumber);
	}
	arrayOfGenerateNumber.push(randomNumberInDiapason);
	resultSendToTextOutput.innerHTML = '' + randomNumberInDiapason;

	if (arrayOfGenerateNumber.length === maxNumber - minNumber + 1) {
		buttonGenerate.disabled = true;
		resultSendToTextOutput.innerHTML = randomNumberInDiapason + ' - last random number. Number is over.'
	}
}
function resetPage() {
	location.reload();
	buttonGenerate.disabled = false;
}

module.exports = { generateRandomNumberInDiapason, getNumberInDiapasonAndSendToTextOutput, resetPage };