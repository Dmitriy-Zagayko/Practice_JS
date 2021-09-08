function getStringWeekDayByNum (day) {
	if (typeof day !== 'number') {
		return 'Введите число';
	}
	if (1 > day || day > 7) {
		return 'Нет такого дня недели.';
	}
	var week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
	return week[day-1];
};
function findDistanceInCartesianSpace(x1, x2, y1, y2) {
	if (
		typeof x1 !== 'number' ||
		typeof x2 !== 'number' ||
		typeof y1 !== 'number' ||
		typeof y2 !== 'number'
	) {
		return 'Введите число';
	} else {
		return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
	}
};
function getNumInString (number) {
	if (typeof number !== 'number') {
		return 'Введите число';
	}
	var result = '';
	var single = ['', 'один', 'два', 'три', 'четыри', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
	var tenths = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
	var hundredths = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
	if (number === 0) {
		return 'ноль';
	}
	if (number < 0 || number > 999) {
		return 'Вводи числа в диапазоне от 0 до 999';
	} else {
		var numHundredths = Math.floor(number / 100);
		result += hundredths[numHundredths];
	}
	var numTenths = number % 100;
	if (numTenths < 20) {
		result += ' ' + single[numTenths];
	} else {
		var numTenths = Math.floor(numTenths / 10);
		result += ' ' + tenths[numTenths];
		var numSingle = numTenths % 10;
		result += ' ' + single[numSingle];
	}
	return result;
};
function getStringInNum (str) {
	if (typeof str !== 'string') {
		return 'Введите число';
	}
	var wordArray = str.split(' ');
	var numbersArray = [];
	var result = 0;
	const WORDS = {
		сто: 100,
		девяносто: 90,
		восемьдесят: 80,
		семьдесят: 70,
		шестьдесят: 60,
		пятьдесят: 50,
		сорок: 40,
		тридцать: 30,
		двадцать: 20,
		девятнадцать: 19,
		восемнадцать: 18,
		семнадцать: 17,
		шестнадцать: 16,
		пятнадцать: 15,
		четырнадцать: 14,
		тринадцать: 13,
		двенадцать: 12,
		одинадцать: 11,
		десять: 10,
		девять: 9,
		восемь: 8,
		семь: 7,
		шесть: 6,
		пять: 5,
		четыри: 4,
		три: 3,
		два: 2,
		один: 1,
		ноль: 0,
	};
	for (var i = 0; i <= wordArray.length; i++) {
		for (keys in WORDS) {
			if (WORDS.hasOwnProperty(wordArray[i])) {
				numbersArray.push(WORDS[wordArray[i]]);
				break;
			}
		}
	}
	if (numbersArray[1] === 100) {
		numbersArray[1] = numbersArray[0] * numbersArray[1];
		numbersArray = numbersArray.slice(1);
	}
	for (var i = 0; i < numbersArray.length; i++) {
		result += numbersArray[i];
	}
	return result;
};

module.exports = { getStringWeekDayByNum, findDistanceInCartesianSpace, getNumInString, getStringInNum };