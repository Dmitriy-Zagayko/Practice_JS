var { findMinElem, findMaxElem, findIndexMinElem, findIndexMaxElem, sumElemOddIndex, reverseArray, amountOddElem, swapFirstAndSecHalf, sortBubble, sortSelect, sortInsert } = require("./arrays.js");

describe("findMinElem", function () {
	it("should be defined", function () {
		expect(findMinElem).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof findMinElem).toBe("function");
	});
	it("should work only with arrays", function () {
		expect(findMinElem(59667)).toBe("work only with arrays");
	});
	it("array should be empty", function () {
		expect(findMinElem([])).toBe("array is empty");
	});
	it("should return min element", function () {
		expect(findMinElem([7, 6, 2])).toBe(2);
	});
});
describe("findMaxElem", function () {
	it("should be defined", function () {
		expect(findMaxElem).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof findMaxElem).toBe("function");
	});
	it("should work only with arrays", function () {
		expect(findMaxElem(59667)).toBe("work only with arrays");
	});
	it("array should be empty", function () {
		expect(findMaxElem([])).toBe("array is empty");
	});
	it("should return max element", function () {
		expect(findMaxElem([7, 6, 2])).toBe(7);
	});
});
describe("findIndexMinElem", function () {
	it("should be defined", function () {
		expect(findIndexMinElem).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof findIndexMinElem).toBe("function");
	});
	it("should work only with arrays", function () {
		expect(findIndexMinElem(59667)).toBe("work only with arrays");
	});
	it("array should be empty", function () {
		expect(findIndexMinElem([])).toBe("array is empty");
	});
	it("should return min index element", function () {
		expect(findIndexMinElem([7, 6, 2])).toBe(2);
	});
});
describe("findIndexMaxElem", function () {
	it("should be defined", function () {
		expect(findIndexMaxElem).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof findIndexMaxElem).toBe("function");
	});
	it("should work only with arrays", function () {
		expect(findIndexMaxElem(59667)).toBe("work only with arrays");
	});
	it("array should be empty", function () {
		expect(findIndexMaxElem([])).toBe("array is empty");
	});
	it("should return max index element", function () {
		expect(findIndexMaxElem([7, 6, 2])).toBe(0);
	});
});
describe("sumElemOddIndex", function () {
	it("should be defined", function () {
		expect(sumElemOddIndex).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof sumElemOddIndex).toBe("function");
	});
	it("should work only with arrays", function () {
		expect(sumElemOddIndex(59667)).toBe("work only with arrays");
	});
	it("array should be empty", function () {
		expect(sumElemOddIndex([])).toBe("array is empty");
	});
	it("should return max index element", function () {
		expect(sumElemOddIndex([7, 1, 2, 1, 3, 1])).toBe(3);
	});
});
describe("reverseArray", function () {
	it("should be defined", function () {
		expect(reverseArray).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof reverseArray).toBe("function");
	});
	it("should work only with arrays", function () {
		expect(reverseArray(59667)).toBe("work only with arrays");
	});
	it("array should be empty", function () {
		expect(reverseArray([])).toBe("array is empty");
	});
	it("should return reverse arrays", function () {
		expect(reverseArray([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
	});
});
describe("amountOddElem", function () {
	it("should be defined", function () {
		expect(amountOddElem).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof amountOddElem).toBe("function");
	});
	it("should work only with arrays", function () {
		expect(amountOddElem(59667)).toBe("work only with arrays");
	});
	it("array should be empty", function () {
		expect(amountOddElem([])).toBe("array is empty");
	});
	it("should count odd elements", function () {
		expect(amountOddElem([1, 2, 3, 5, 6])).toBe(9);
	});
});
describe("swapFirstAndSecHalf", function () {
	it("should be defined", function () {
		expect(swapFirstAndSecHalf).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof swapFirstAndSecHalf).toBe("function");
	});
	it("should work only with arrays", function () {
		expect(swapFirstAndSecHalf(59667)).toBe("work only with arrays");
	});
	it("array should be empty", function () {
		expect(swapFirstAndSecHalf([])).toBe("array is empty");
	});
	it("should be swap both half", function () {
		expect(swapFirstAndSecHalf([1, 2, 3, 4, 5, 6])).toStrictEqual([4, 5, 6, 1, 2, 3]);
	});
});
describe("sortBubble", function () {
	it("should be defined", function () {
		expect(sortBubble).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof sortBubble).toBe("function");
	});
	it("should work only with arrays", function () {
		expect(sortBubble(59667)).toBe("work only with arrays");
	});
	it("array should be empty", function () {
		expect(sortBubble([])).toBe("array is empty");
	});
	it("should be sort bubble", function () {
		expect(sortBubble([5, 3, 7, 0, -1, 2])).toStrictEqual([-1, 0, 2, 3, 5, 7]);
	});
});
describe("sortSelect", function () {
	it("should be defined", function () {
		expect(sortSelect).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof sortSelect).toBe("function");
	});
	it("should work only with arrays", function () {
		expect(sortSelect(59667)).toBe("work only with arrays");
	});
	it("array should be empty", function () {
		expect(sortSelect([])).toBe("array is empty");
	});
	it("should be sort bubble", function () {
		expect(sortSelect([5, 3, 7, 0, -1, 2])).toStrictEqual([-1, 0, 2, 3, 5, 7]);
	});
});
describe("sortInsert", function () {
	it("should be defined", function () {
		expect(sortInsert).toBeDefined();
	});
	it("should be a function", function () {
		expect(typeof sortInsert).toBe("function");
	});
	it("should work only with arrays", function () {
		expect(sortInsert(59667)).toBe("work only with arrays");
	});
	it("array should be empty", function () {
		expect(sortInsert([])).toBe("array is empty");
	});
	it("should be sort bubble", function () {
		expect(sortInsert([5, 3, 7, 0, -1, 2])).toStrictEqual([-1, 0, 2, 3, 5, 7]);
	});
});
