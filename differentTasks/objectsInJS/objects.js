function getCookingTime(eggsAmount) {
	if (typeof eggsAmount !== "number") {
		return "error";
	};
	return Math.ceil(eggsAmount / 5) * 5;
};
function getNumber(array) {
	if (!Array.isArray(array)) {
		return "work only with arrays";
	}
	if (array.length < 1) {
		return "array is empty";
	}
	var result = 0;
	var odd = [];
	var even = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			even.push(array[i]);
		} else {
			odd.push(array[i]);
		}
	}
	if (even.length > odd.length) {
		result = odd[0];
	} else {
		result = even[0];
	}
	return result;
};
function findTitle(array, string) {
	if (!Array.isArray(array) || typeof string !== "string") {
		return "incorrect arguments";
	}
	if (array.length < 1 || string === "") {
		return "arguments is empty";
	}
	var result = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i].hasOwnProperty("title")) {
			if (array[i].title.toLowerCase().includes(string)) {
				result.push(array[i]);
			}
		}
	}
	return result;
};
function countCharacters(string) {
	if (typeof string !== "string") {
		return "work only with string";
	}
	var result = {};
	string = string.toLowerCase();
	for (var i = 0; i < string.length; i++) {
		if (
			(string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) ||
			(string[i].charCodeAt() >= 48 && string[i].charCodeAt() <= 57)
		) {
			if ((result[string[i]] = result[string[i]])) {
				result[string[i]] += 1;
			} else {
				result[string[i]] = 1;
			}
		}
	}
	return result;
};
function isPalindrome(number) {
	if (typeof number !== "number") {
		return "work only with number";
	}
	number = number.toString();
	var result = "";
	for (var i = number.length - 1; i > -1; i--) {
		result += number[i];
	}
	if (Number(result) === Number(number) && result.length > 1) {
		return true;
	} else {
		return false;
	}
};
function getNextPalindrome(number) {
	if (typeof number !== "number") {
		return "work only with number";
	}
	var result = 0;
	for (var i = number + 1; ; i++) {
		if (isPalindrome(i)) {
			result = i;
			break;
		}
	}
	return result;
};

module.exports = { getCookingTime, getNumber, findTitle, countCharacters, isPalindrome, getNextPalindrome };