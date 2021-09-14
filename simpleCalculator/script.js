const display = document.getElementById("display");
const clear1 = document.getElementById("clear");
const deleteSymbol1 = document.getElementById("delete");
const openParenthesis = document.getElementById("openParenthesis");
const closingParenthesis = document.getElementById("closingParenthesis");
const percent1 = document.getElementById("percent");
const division = document.getElementById("division");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multiplication = document.getElementById("multiplication");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const minus = document.getElementById("minus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const plus = document.getElementById("plus");
const plusMinus1 = document.getElementById("plusMinus");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const equal1 = document.getElementById("equal");

division.addEventListener('click', () => { addValue('/') });
dot.addEventListener('click', () => { addValue('.') });
minus.addEventListener('click', () => { addValue('-') });
plus.addEventListener('click', () => { addValue('+') });
multiplication.addEventListener('click', () => { addValue('*') });
openParenthesis.addEventListener('click', () => { addValue('(') });
closingParenthesis.addEventListener('click', () => { addValue(')') });
nine.addEventListener('click', () => { addValue('9') });
eight.addEventListener('click', () => { addValue('8') });
seven.addEventListener('click', () => { addValue('7') });
six.addEventListener('click', () => { addValue('6') });
five.addEventListener('click', () => { addValue('5') });
four.addEventListener('click', () => { addValue('4') });
three.addEventListener('click', () => { addValue('3') });
two.addEventListener('click', () => { addValue('2') });
one.addEventListener('click', () => { addValue('1') });
zero.addEventListener('click', () => { addValue('0') });

clear1.addEventListener('click', clear);
deleteSymbol1.addEventListener('click', deleteSymbol);
equal1.addEventListener('click', equal);
percent1.addEventListener('click', percent);
plusMinus1.addEventListener('click', plusMinus);

function addValue(value) {
	if (display.value === '0') {
		display.value = '';
	}
	display.value += value;
};

function clear() {
	display.value = '0';
};

function deleteSymbol() {
	display.value = display.value.slice(0, -1);
	if (display.value === '') {
		display.value = '0';
	}
};

function equal() {
	display.value = eval(display.value);
};

function percent() {
	display.value /= 100;
};

function plusMinus() {
	display.value = display.value * (-1);
};
