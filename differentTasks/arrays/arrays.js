function findMinElem(array) {
	if (!Array.isArray(array)) {
		return "work only with arrays";
	}
	if (array.length < 1) {
		return "array is empty";
	}
	var minElement = array[0];
	for (var i = 0; i < array.length; i++) {
		if (minElement > array[i]) {
			minElement = array[i];
		}
	}
	return minElement;
};
function findMaxElem(array) {
	if (!Array.isArray(array)) {
		return "work only with arrays";
	}
	if (array.length < 1) {
		return "array is empty";
	}
	var maxElement = array[0];
	for (var i = 0; i < array.length; i++) {
		if (maxElement < array[i]) {
			maxElement = array[i];
		}
	}
	return maxElement;
};
function findIndexMinElem(array) {
	if (!Array.isArray(array)) {
		return "work only with arrays";
	}
	if (array.length < 1) {
		return "array is empty";
	}
	var minElementIndex = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] < array[minElementIndex]) {
			minElementIndex = i;
		}
	}
	return minElementIndex;
};
function findIndexMaxElem(array) {
	if (!Array.isArray(array)) {
		return "work only with arrays";
	}
	if (array.length < 1) {
		return "array is empty";
	}
	var maxElementIndex = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] > array[maxElementIndex]) {
			maxElementIndex = i;
		}
	}
	return maxElementIndex;
}
function sumElemOddIndex(array) {
	if (!Array.isArray(array)) {
		return "work only with arrays";
	}
	if (array.length < 1) {
		return "array is empty";
	}
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		if (i % 2 !== 0) {
			sum += array[i];
		}
	}
	return sum;
}
function reverseArray(array) {
	if (!Array.isArray(array)) {
		return "work only with arrays";
	}
	if (array.length < 1) {
		return "array is empty";
	}
	var reverse = [];
	for (var i = 0; i < array.length; i++) {
		reverse[i] = array[array.length - i - 1];
	}
	return reverse;
}
function amountOddElem(array) {
	if (!Array.isArray(array)) {
		return "work only with arrays";
	}
	if (array.length < 1) {
		return "array is empty";
	}
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] % 2 !== 0) {
			sum += array[i];
		}
	}
	return sum;
};
function swapFirstAndSecHalf(array) {
	if (!Array.isArray(array)) {
		return "work only with arrays";
	}
	if (array.length < 1) {
		return "array is empty";
	}
	reverseFromMiddle = [];
	var firstPart = Math.floor(array.length / 2);
	var secondPart = array.length - firstPart;
	for (var i = 0; i < firstPart; i++) {
		reverseFromMiddle[i + secondPart] = array[i];
	}
	for (var i = 0; i < secondPart; i++) {
		reverseFromMiddle[i] = array[i + firstPart];
	}
	return reverseFromMiddle;
};
function sortBubble(array) {
	if (!Array.isArray(array)) {
		return "work only with arrays";
	}
	if (array.length < 1) {
		return "array is empty";
	}
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				var change = array[j + 1];
				array[j + 1] = array[j];
				array[j] = change;
			}
		}
	}
	return array;
};
function sortSelect(array) {
	if (!Array.isArray(array)) {
		return "work only with arrays";
	}
	if (array.length < 1) {
		return "array is empty";
	}
	for (var i = 0; i < array.length; i++) {
		var minIndex = i;
		for (var j = i + 1; j < array.length; j++) {
			if (array[j] < array[minIndex]) {
				minIndex = j;
			}
		}
		var change = array[minIndex];
		array[minIndex] = array[i];
		array[i] = change;
	}
	return array;
};
function sortInsert(array) {
	if (!Array.isArray(array)) {
		return "work only with arrays";
	}
	if (array.length < 1) {
		return "array is empty";
	}
	for (var i = 0; i < array.length; i++) {
		var take = array[i];
		var inset = i - 1;
		while (inset >= 0 && array[inset] > take) {
			array[inset + 1] = array[inset];
			inset--;
		}
		array[inset + 1] = take;
	}
	return array;
};

module.exports = { findMinElem, findMaxElem, findIndexMinElem, findIndexMaxElem, sumElemOddIndex, reverseArray, amountOddElem, swapFirstAndSecHalf, sortBubble, sortSelect, sortInsert };