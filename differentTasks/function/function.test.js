var { getStringWeekDayByNum, findDistanceInCartesianSpace, getNumInString, getStringInNum } = require('./function');

describe('getStringWeekDayByNum', function () {
	it('should be defined ', function () {
		expect(getStringWeekDayByNum).toBeDefined();
	});
	it('should be function', function () {
		expect(typeof getStringWeekDayByNum).toBe('function');
	});
	it('should be without arguments', function () {
		expect(getStringWeekDayByNum()).toBe('Введите число');
	});
	it('should work only with number', function () {
		expect(getStringWeekDayByNum('2')).toBe('Введите число');
	});
	it('should be < 1', function () {
		expect(getStringWeekDayByNum(0)).toBe('Нет такого дня недели.');
	});
	it('should be > 7', function () {
		expect(getStringWeekDayByNum(8)).toBe('Нет такого дня недели.');
	});
	it('should be 1', function () {
		expect(getStringWeekDayByNum(1)).toBe('Понедельник');
	});
	it('should be 2', function () {
		expect(getStringWeekDayByNum(2)).toBe('Вторник');
	});
	it('should be 3', function () {
		expect(getStringWeekDayByNum(3)).toBe('Среда');
	});
	it('should be 4', function () {
		expect(getStringWeekDayByNum(4)).toBe('Четверг');
	});
	it('should be 5', function () {
		expect(getStringWeekDayByNum(5)).toBe('Пятница');
	});
	it('should be 6', function () {
		expect(getStringWeekDayByNum(6)).toBe('Суббота');
	});
	it('should be 7', function () {
		expect(getStringWeekDayByNum(7)).toBe('Воскресенье');
	});
});
describe('findDistanceInCartesianSpace', function () {
	it('should be defined ', function () {
		expect(findDistanceInCartesianSpace).toBeDefined();
	});
	it('should be function', function () {
		expect(typeof findDistanceInCartesianSpace).toBe('function');
	});
	it('should be without arguments', function () {
		expect(findDistanceInCartesianSpace()).toBe('Введите число');
	});
	it('should work only with number', function () {
		expect(findDistanceInCartesianSpace('2')).toBe('Введите число');
	});
	it('should return distance in two-dimensional cartesian 4, 4, 3, 8', function () {
		expect(findDistanceInCartesianSpace(4, 4, 3, 8)).toBe(5);
	});
	it('should return distance in two-dimensional cartesian try 84, 26, 32, 12', function () {
		expect(findDistanceInCartesianSpace(85, 25, 30, 10)).toBe(63.245553203367585);
	});
});
describe('getNumInString', function () {
	it('should be defined ', function () {
		expect(getNumInString).toBeDefined();
	});
	it('should be function', function () {
		expect(typeof getNumInString).toBe('function');
	});
	it('should be without arguments', function () {
		expect(getNumInString()).toBe('Введите число');
	});
	it('should work only with number', function () {
		expect(getNumInString('2')).toBe('Введите число');
	});
	it('argument < 0', function () {
		expect(getNumInString(-1)).toBe('Вводи числа в диапазоне от 0 до 999');
	});
	it('argument > 0', function () {
		expect(getNumInString(1000)).toBe('Вводи числа в диапазоне от 0 до 999');
	});
	it('argument should be 0', function () {
		expect(getNumInString(0)).toBe('ноль');
	});
	it('argument should be 10', function () {
		expect(getNumInString(10)).toBe(' десять');
	});
	it('argument should be 110', function () {
		expect(getNumInString(110)).toBe('сто десять');
	});
	it('argument should be 866', function () {
		expect(getNumInString(866)).toBe('восемьсот шестьдесят шесть');
	});
});
describe('getStringInNum', function () {
	it('should be defined ', function () {
		expect(getStringInNum).toBeDefined();
	});
	it('should be function', function () {
		expect(typeof getStringInNum).toBe('function');
	});
	it('should be without arguments', function () {
		expect(getStringInNum()).toBe('Введите число');
	});
	it('should be return number from string number 0', function () {
		expect(getStringInNum('ноль')).toBe(0);
	});
	it('should be return number from string number 3', function () {
		expect(getStringInNum('три')).toBe(3);
	});
	it('should be return number from string number name 99', function () {
		expect(getStringInNum('девяносто девять')).toBe(99);
	});
	it('should be return number from string number name 125', function () {
		expect(getStringInNum('сто двадцать пять')).toBe(125);
	});
});
