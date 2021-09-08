var { getCookingTime, getNumber, findTitle, countCharacters, isPalindrome, getNextPalindrome } = require("./objects.js");

describe("getCookingTime", function () {
	it("should be defined", function () {
		expect(getCookingTime).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof getCookingTime).toBe("function");
	});
	it("shouldn`t work without arguments", function () {
		expect(getCookingTime()).toBe("error");
	});
	it("shouldn`t work with string", function () {
		expect(getCookingTime("string")).toBe("error");
	});
	it("shouldn`t work with array", function () {
		expect(getCookingTime([1, 1])).toBe("error");
	});
	it("should be work with number", function () {
		expect(getCookingTime(9)).toBe(10);
	});
});
describe("getNumber", function () {
	it("should be defined", function () {
		expect(getNumber).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof getNumber).toBe("function");
	});
	it("should be work only with arrays", function () {
		expect(getNumber(59667)).toBe("work only with arrays");
	});
	it("should be work only with arrays 1", function () {
		expect(getNumber("text")).toBe("work only with arrays");
	});
	it("array should be empty", function () {
		expect(getNumber([])).toBe("array is empty");
	});
	it("should be find one even element", function () {
		expect(getNumber([7, 15, 20, 9, 3, 55, 87])).toBe(20);
	});
	it("should be find one odd element", function () {
		expect(getNumber([72, 6, 2, 5, 88, 90, 16])).toBe(5);
	});
});
describe("findTitle", function () {
	it("should be defined", function () {
		expect(findTitle).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof findTitle).toBe("function");
	});
	it("shouldn`t work just with numbers", function () {
		expect(findTitle(5, 5)).toBe("incorrect arguments");
	});
	it("shouldn`t work just with array", function () {
		expect(findTitle([5], [5])).toBe("incorrect arguments");
	});
	it("shouldn`t work just with string", function () {
		expect(findTitle("5", "5")).toBe("incorrect arguments");
	});
	it("shouldn`t work without array", function () {
		expect(findTitle(5, "text")).toBe("incorrect arguments");
	});
	it("shouldn`t work without string", function () {
		expect(findTitle([5], 5)).toBe("incorrect arguments");
	});
	it("array should be empty", function () {
		expect(findTitle([], "text")).toBe("arguments is empty");
	});
	it("string should be empty", function () {
		expect(findTitle([1, 1], "")).toBe("arguments is empty");
	});
	it("should be return title in object in array", function () {
		expect(findTitle([
			7,
			15,
			{ title: "I like JS" },
			5,
			3],
			"js")).toStrictEqual([{ title: "I like JS" }]);
	});
});
describe("countCharacters", function () {
	it("should be defined", function () {
		expect(countCharacters).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof countCharacters).toBe("function");
	});
	it("shouldn`t work with array", function () {
		expect(countCharacters([1])).toBe("work only with string");
	});
	it("shouldn`t work with number", function () {
		expect(countCharacters(1)).toBe("work only with string");
	});
	it("shouldn`t work with object", function () {
		expect(countCharacters({ 1: "1" })).toBe("work only with string");
	});
	it("should be work with string", function () {
		expect(countCharacters("string")).toStrictEqual({ s: 1, t: 1, r: 1, i: 1, n: 1, g: 1 });
	});
	it("should be work with any register", function () {
		expect(countCharacters("JavaScript")).toStrictEqual({ j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 });
	});
	it("should be work with many words", function () {
		expect(countCharacters("JavaScript is best")).toStrictEqual({ j: 1, a: 2, v: 1, s: 3, c: 1, r: 1, i: 2, p: 1, t: 2, b: 1, e: 1 });
	});
	it("should be work ignored special symbols", function () {
		expect(countCharacters("(Java!Script& is2 +=best55")).toStrictEqual({ j: 1, a: 2, v: 1, s: 3, c: 1, r: 1, i: 2, p: 1, t: 2, b: 1, e: 1, 2: 1, 5: 2 });
	});
});
describe("isPalindrome", function () {
	it("should be defined", function () {
		expect(isPalindrome).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof isPalindrome).toBe("function");
	});
	it("shouldn`t work with array", function () {
		expect(isPalindrome([1])).toBe("work only with number");
	});
	it("shouldn`t work with string", function () {
		expect(isPalindrome("1")).toBe("work only with number");
	});
	it("shouldn`t work with object", function () {
		expect(isPalindrome({ 1: 1 })).toBe("work only with number");
	});
	it("should be return true (palindrome)", function () {
		expect(isPalindrome(111)).toBe(true);
	});
	it("should be return false (not palindrome)", function () {
		expect(isPalindrome(123)).toBe(false);
	});
	it("should be return false with one number(0-9)", function () {
		expect(isPalindrome(2)).toBe(false);
	});
});
describe("getNextPalindrome", function () {
	it("should be defined", function () {
		expect(getNextPalindrome).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof getNextPalindrome).toBe("function");
	});
	it("shouldn`t work with array", function () {
		expect(getNextPalindrome([1])).toBe("work only with number");
	});
	it("shouldn`t work with string", function () {
		expect(getNextPalindrome("1")).toBe("work only with number");
	});
	it("shouldn`t work with object", function () {
		expect(getNextPalindrome({ 1: 1 })).toBe("work only with number");
	});
	it("should be return next palindrome 11", function () {
		expect(getNextPalindrome(7)).toBe(11);
	});
	it("should be return next palindrome 1001", function () {
		expect(getNextPalindrome(999)).toBe(1001);
	});
});
