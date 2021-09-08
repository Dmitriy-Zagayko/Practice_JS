function sumEvenNumInTheRange() {
	var result = '';
	var sum = 0;
	var count = 0;
	for (var i = 1; i < 100; i++) {
		if (i % 2 == 0) {
			sum += i;
			count++;
		}
	}
	result = 'Сумма четных чисел равна ' + sum + '. Количество сложений четных чисел равно ' + count;
	return result;
};
function checkPrimeNum(x) {
	if (typeof x !== 'number') {
		return 'Введите число';
	}
	for (var i = 2; i < x; i++) {
		if (x % i == 0) {
			return 'Число не простое';
		}
		return 'Число простое';
	}
};
function squareSearchRootNaturalNum(x) {
	if (typeof x !== 'number') {
		return 'Введите число';
	}
	var result = 0;
	for (var i = 0; i * i <= x; i++) {
		result = i;
		Math.floor(result);
	}
	return result;
};
function binarySearchRootNaturalNum(x) {
	if (typeof x !== 'number') {
		return 'Введите число';
	}
	var result = 0;
	var first = 0;
	var last = x;
	while (first <= last) {
		var middle = Math.floor((first + last) / 2);
		if (middle * middle == x) {
			return middle;
		}
		if (middle * middle < x) {
			first = middle + 1;
			result = middle;
		} else {
			last = middle - 1;
		}
	}
	return result;
};
function calculateFactorial(x) {
	if (typeof x !== 'number') {
		return 'Введите число';
	}
	var factorial = 1;
	for (var i = 1; i <= x; i++) {
		factorial *= i;
	}
	return factorial;
};
function calculateSumDigitsNum(x) {
	if (typeof x !== 'number') {
		return 'Введите число';
	}
	var y = 0;
	while (x > 0) {
		y += x % 10;
		x = Math.floor(x / 10)
	} return y;
};
function mirrorNum(x) {
	if (typeof x !== 'number') {
		return 'Введите число';
	}
	var y = 0;
	var result = '';
	while (x > 0) {
		y = x % 10;
		result += y;
		y = x / 10;
		x = Math.floor(y);
	}
	return result;
};

module.exports = { sumEvenNumInTheRange, checkPrimeNum, squareSearchRootNaturalNum, binarySearchRootNaturalNum, calculateFactorial, calculateSumDigitsNum, mirrorNum };