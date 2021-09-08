var { parityDefinition, quarterAffiliation, sumOfPositiveThreeNumbers, expressionResult, definitionScoreByRating } = require('./operators');

describe("parityDefinition", function () {
	it("should be defined", function () {
		expect(parityDefinition).toBeDefined();
	});
	it("should be function", function () {
		expect(typeof parityDefinition).toBe("function");
	});
	it("should be a even", function () {
		expect(parityDefinition(4, 4)).toBe(16);
	});
	it("should be a is odd", function () {
		expect(parityDefinition(3, 4)).toBe(7);
	});
	it("should be without arguments", function () {
		expect(parityDefinition()).toBe(false);
	});
	it("arguments should be a numbers", function () {
		expect(parityDefinition("4", "4")).toBe(false);
	});
});
describe("quarterAffiliation", function () {
	it("should be defined", function () {
		expect(quarterAffiliation).toBeDefined();
	});
	it("should be function", function () {
		expect(typeof quarterAffiliation).toBe("function");
	});
	it("should be without arguments", function () {
		expect(quarterAffiliation()).toBe(false);
	});
	it("arguments should be a numbers", function () {
		expect(quarterAffiliation("1", "1")).toBe(false);
	});
	it("x > 0 && y > 0", function () {
		expect(quarterAffiliation(1, 1)).toBe("Точка находится в 1 четверти");
	});
	it("x < 0 && y > 0", function () {
		expect(quarterAffiliation(-1, 1)).toBe("Точка находится в 2 четверти");
	});
	it("x < 0 && y < 0", function () {
		expect(quarterAffiliation(-1, -1)).toBe("Точка находится в 3 четверти");
	});
	it("x > 0 && y < 0", function () {
		expect(quarterAffiliation(1, -1)).toBe("Точка находится в 4 четверти");
	});
	it("x === 0 && y === 0", function () {
		expect(quarterAffiliation(0, 0)).toBe("Точка в начале системы координат");
	});
	it("x === 0 && y > 0", function () {
		expect(quarterAffiliation(0, 1)).toBe("Точка находится на системе координат между 1 и 2 четвертью");
	});
	it("x === 0 && y < 0", function () {
		expect(quarterAffiliation(0, -1)).toBe("Точка находится на системе координат между 3 и 4 четвертью");
	});
	it("x > 0 && y === 0", function () {
		expect(quarterAffiliation(1, 0)).toBe("Точка находится на системе координат между 1 и 4 четвертью");
	});
	it("x < 0 && y === 0", function () {
		expect(quarterAffiliation(-1, 0)).toBe("Точка находится на системе координат между 2 и 3 четвертью");
	});
});
describe("sumOfPositiveThreeNumbers", function () {
	it("should be defined", function () {
		expect(sumOfPositiveThreeNumbers).toBeDefined();
	});
	it("should be function", function () {
		expect(typeof sumOfPositiveThreeNumbers).toBe("function");
	});
	it("should be false without arguments", function () {
		expect(sumOfPositiveThreeNumbers()).toBe(false);
	});
	it("arguments should be a numbers", function () {
		expect(sumOfPositiveThreeNumbers("1", "1", "1")).toBe(false);
	});
	it("should be sum three positive numbers", function () {
		expect(sumOfPositiveThreeNumbers(1, 1, 1)).toBe(3);
	});
	it("should be sum with two positive numbers", function () {
		expect(sumOfPositiveThreeNumbers(-1, 1, 1)).toBe(2);
	});
	it("should be one positive numbers", function () {
		expect(sumOfPositiveThreeNumbers(-1, -1, 1)).toBe(1);
	});
});
describe("expressionResult", function () {
	it("should be defined", function () {
		expect(expressionResult).toBeDefined();
	});
	it("should be function", function () {
		expect(typeof expressionResult).toBe("function");
	});
	it("should be false without arguments", function () {
		expect(expressionResult()).toBe(false);
	});
	it("arguments should be a numbers", function () {
		expect(expressionResult("1", "1", "1")).toBe(false);
	});
	it("should be x positive result", function () {
		expect(expressionResult(1, 3, 5)).toBe(18);
	});
	it("should be y positive result", function () {
		expect(expressionResult(1, 1, 1)).toBe(6);
	});
	it("should be negative result", function () {
		expect(expressionResult(1, 3, -10)).toBe(-3);
	});
});
describe("definitionScoreByRating", function () {
	it("should be defined", function () {
		expect(definitionScoreByRating).toBeDefined();
	});
	it("should be function", function () {
		expect(typeof definitionScoreByRating).toBe("function");
	});
	it("should be false without arguments", function () {
		expect(definitionScoreByRating()).toBe(false);
	});
	it("arguments should be a numbers", function () {
		expect(definitionScoreByRating("1")).toBe(false);
	});
	it("a > 100", function () {
		expect(definitionScoreByRating(101)).toBe("Рейтинг оценок начинается с 1 и заканчивается 100. Введите корректную оценку");
	});
	it("a <= 0", function () {
		expect(definitionScoreByRating(-10)).toBe("Рейтинг оценок начинается с 1 и заканчивается 100. Введите корректную оценку");
	});
	it("a <= 19", function () {
		expect(definitionScoreByRating(10)).toBe("Ваша оценка - F");
	});
	it("a <= 39", function () {
		expect(definitionScoreByRating(20)).toBe("Ваша оценка - E");
	});
	it("a <= 59", function () {
		expect(definitionScoreByRating(40)).toBe("Ваша оценка - D");
	});
	it("a <= 74", function () {
		expect(definitionScoreByRating(60)).toBe("Ваша оценка - C");
	});
	it("a <= 89", function () {
		expect(definitionScoreByRating(80)).toBe("Ваша оценка - B");
	});
	it("a <= 100", function () {
		expect(definitionScoreByRating(100)).toBe("Ваша оценка - A");
	});
});
