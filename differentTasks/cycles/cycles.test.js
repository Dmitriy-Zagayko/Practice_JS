var { sumEvenNumInTheRange, checkPrimeNum, squareSearchRootNaturalNum, binarySearchRootNaturalNum, calculateFactorial, calculateSumDigitsNum, mirrorNum } = require('./cycles');

describe('sumEvenNumInTheRange', function () {
	it('should be defined', function () {
		expect(sumEvenNumInTheRange()).toBeDefined();
	});
	it('should be a function', function () {
		expect(typeof sumEvenNumInTheRange).toBe('function');
	});
	it('should be sum even numbers in the rating 100', function () {
		expect(sumEvenNumInTheRange()).toBe('Сумма четных чисел равна 2450. Количество сложений четных чисел равно 49');
	});
});
describe('checkPrimeNum', function () {
	it('should be defined', function () {
		expect(checkPrimeNum()).toBeDefined();
	});
	it('should be a function', function () {
		expect(typeof checkPrimeNum).toBe('function');
	});
		it('should be work only with number', function () {
			expect(checkPrimeNum('25')).toBe('Введите число');
	});
		it('dont work without arguments', function () {
			expect(checkPrimeNum()).toBe('Введите число');
	});
	it('should be x prime number 7', function () {
		expect(checkPrimeNum(7)).toBe('Число простое');
	});
	it('should be x prime number 41', function () {
		expect(checkPrimeNum(41)).toBe('Число простое');
	});
	it('should be x not prime number 8', function () {
		expect(checkPrimeNum(8)).toBe('Число не простое');
	});
	it('should be x not prime number 42', function () {
		expect(checkPrimeNum(42)).toBe('Число не простое');
	});
});
describe('squareSearchRootNaturalNum', function () {
	it('should be defined', function () {
		expect(squareSearchRootNaturalNum()).toBeDefined();
	});
	it('should be a function', function () {
		expect(typeof squareSearchRootNaturalNum).toBe('function');
	});
	it('should be work only with number', function () {
		expect(squareSearchRootNaturalNum('25')).toBe('Введите число');
	});
	it('dont work without arguments', function () {
		expect(squareSearchRootNaturalNum()).toBe('Введите число');
	});
	it('square search root natural number', function () {
		expect(squareSearchRootNaturalNum(46)).toBe(6);
	});
});
describe('binarySearchRootNaturalNum', function () {
	it('should be defined', function () {
		expect(binarySearchRootNaturalNum()).toBeDefined();
	});
	it('should be a function', function () {
		expect(typeof binarySearchRootNaturalNum).toBe('function');
	});
	it('should be work only with number', function () {
		expect(binarySearchRootNaturalNum('25')).toBe('Введите число');
	});
	it('dont work without arguments', function () {
		expect(binarySearchRootNaturalNum()).toBe('Введите число');
	});
	it('binary search root natural number', function () {
		expect(binarySearchRootNaturalNum(46)).toBe(6);
	});
});
describe('calculateFactorial', function () {
	it('should be defined', function () {
		expect(calculateFactorial()).toBeDefined();
	});
	it('should be a function', function () {
		expect(typeof calculateFactorial).toBe('function');
	});
	it('should be work only with number', function () {
		expect(calculateFactorial('25')).toBe('Введите число');
	});
	it('dont work without arguments', function () {
		expect(calculateFactorial()).toBe('Введите число');
	});
	it('should be factorial number 5', function () {
		expect(calculateFactorial(5)).toBe(120);
	});
	it('should be factorial number 6', function () {
		expect(calculateFactorial(6)).toBe(720);
	});
});
describe('calculateSumDigitsNum', function () {
	it('should be defined', function () {
		expect(calculateSumDigitsNum()).toBeDefined();
	});
	it('should be a function', function () {
		expect(typeof calculateSumDigitsNum).toBe('function');
	});
	it('should be work only with number', function () {
		expect(calculateSumDigitsNum('25')).toBe('Введите число');
	});
	it('dont work without arguments', function () {
		expect(calculateSumDigitsNum()).toBe('Введите число');
	});
	it('calculate sum digits number 12', function () {
		expect(calculateSumDigitsNum(12)).toBe(3);
	});
	it('calculate sum digits number 22', function () {
		expect(calculateSumDigitsNum(22)).toBe(4);
	});
});
describe('mirrorNum', function () {
	it('should be defined', function () {
		expect(mirrorNum()).toBeDefined();
	});
	it('should be a function', function () {
		expect(typeof mirrorNum).toBe('function');
	});
	it('should be work only with number', function () {
		expect(mirrorNum('25')).toBe('Введите число');
	});
	it('dont work without arguments', function () {
		expect(mirrorNum()).toBe('Введите число');
	});
	it('mirror number 123', function () {
		expect(mirrorNum(123)).toBe('321');
	});
	it('mirror number 4321', function () {
		expect(mirrorNum(4321)).toBe('1234');
	});
});
