function parityDefinition(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		return false;
	}
	if (a % 2 === 0) {
		return a * b;
	} else {
		return a + b;
	}
};
function quarterAffiliation(x, y) {
	if (typeof x !== "number" || typeof y !== "number") {
		return false;
	}
	if (x > 0 && y > 0) {
		return "Точка находится в 1 четверти";
	}
	if (x < 0 && y > 0) {
		return "Точка находится в 2 четверти";
	}
	if (x < 0 && y < 0) {
		return "Точка находится в 3 четверти";
	}
	if (x > 0 && y < 0) {
		return "Точка находится в 4 четверти";
	}
	if (x === 0 && y > 0) {
		return "Точка находится на системе координат между 1 и 2 четвертью";
	}
	if (x === 0 && y < 0) {
		return "Точка находится на системе координат между 3 и 4 четвертью";
	}
	if (x > 0 && y === 0) {
		return "Точка находится на системе координат между 1 и 4 четвертью";
	}
	if (x < 0 && y === 0) {
		return "Точка находится на системе координат между 2 и 3 четвертью";
	}
	if (x === 0 && y === 0) {
		return "Точка в начале системы координат";
	}
};
function sumOfPositiveThreeNumbers(a, b, c) {
	if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
		return false;
	}
	var result = 0;
	if (a > 0) {
		result += a;
	}
	if (b > 0) {
		result += b;
	}
	if (c > 0) {
		result += c;
	}
	return result;
};
function expressionResult(a, b, c) {
	if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
		return false;
	}
	var x = a * b * c;
	var y = a + b + c;
	var i = Math.max(x, y);
	var j = i + 3;
	return j;
};
function definitionScoreByRating(a) {
	if (typeof a !== "number") {
		return false;
	}
	if (a > 100 || a <= 0) {
		return "Рейтинг оценок начинается с 1 и заканчивается 100. Введите корректную оценку";
	}
	if (a <= 19) {
		return "Ваша оценка - F";
	}
	if (a <= 39) {
		return "Ваша оценка - E";
	}
	if (a <= 59) {
		return "Ваша оценка - D";
	}
	if (a <= 74) {
		return "Ваша оценка - C";
	}
	if (a <= 89) {
		return "Ваша оценка - B";
	}
	if (a <= 100) {
		return "Ваша оценка - A";
	}
};

module.exports = { parityDefinition, quarterAffiliation, sumOfPositiveThreeNumbers, expressionResult, definitionScoreByRating };