function Cube() {
	var symbol = "";
	for (var i = 0; i < 7; i++) {
		for (var j = 0; j < 7; j++) {
			if (j == 6) {
				symbol += "*\n";
			} else {
				symbol += "*  ";
			}
		}
	}
	return symbol;
};
console.log(Cube());
function emptyCube() {
	var symbol = "";
	for (var i = 0; i < 7; i++) {
		for (var j = 0; j < 7; j++) {
			if (i == 0 || i == 6) {
				symbol += "*  ";
			} else if (j == 0 || j == 6) {
				symbol += "*  ";
			} else {
				symbol += "   ";
			}
		}
		symbol += "\n";
	}
	return symbol;
};
console.log(emptyCube());
function leftUpTriangle() {
	var symbol = "";
	for (var i = 0, x = 6; i < 7; i++, x--) {
		for (var j = 0; j < 7; j++) {
			if (i == 0) {
				symbol += "*  ";
			} else if (j == 0 || j == x) {
				symbol += "*  ";
			} else {
				symbol += "   ";
			}
		}
		symbol += "\n";
	}
	return symbol;
};
console.log(leftUpTriangle());
function leftDownTriangle() {
	var symbol = "";
	for (var i = 0, x = 0; i < 7; i++, x++) {
		for (var j = 0; j < 7; j++) {
			if (i == 6) {
				symbol += "*  ";
			} else if (j == 0 || j == x) {
				symbol += "*  ";
			} else {
				symbol += "   ";
			}
		}
		symbol += "\n";
	}
	return symbol;
};
console.log(leftDownTriangle());
function rightDownTriangle() {
	var symbol = "";
	for (var i = 7, x = 6; i > 0; i--, x--) {
		for (var j = 0; j < 7; j++) {
			if (i == 1) {
				symbol += "*  ";
			} else if (j == 6 || j == x) {
				symbol += "*  ";
			} else {
				symbol += "   ";
			}
		}
		symbol += "\n";
	}
	return symbol;
};
console.log(rightDownTriangle());
function rightUpTriangle() {
	var symbol = "";
	for (var i = 0, x = 0; i < 7; i++, x++) {
		for (var j = 0; j < 7; j++) {
			if (i == 0) {
				symbol += "*  ";
			} else if (j == 6 || j == x) {
				symbol += "*  ";
			} else {
				symbol += "   ";
			}
		}
		symbol += "\n";
	}
	return symbol;
};
console.log(rightUpTriangle());
function cross() {
	var symbol = "";
	for (var i = 0, x = 6; i < 7; i++, x--) {
		for (var j = 0; j < 7; j++) {
			if (j == i || j == x) {
				symbol += "*  ";
			} else {
				symbol += "   ";
			}
		}
		symbol += "\n";
	}
	return symbol;
};
console.log(cross());
function upTriangle() {
	var symbol = "";
	for (var i = 0, x = 6; i < 7; i++, x--) {
		for (var j = 0; j < 7; j++) {
			if (i == 0) {
				symbol += "*  ";
			} else if (j == i && j <= x || j == x && j >= i) {
				symbol += "*  ";
			} else {
				symbol += "   ";
			}
		}
		symbol += "\n";
	}
	return symbol;
};
console.log(upTriangle());
function downTriangle() {
	var symbol = "";
	for (var i = 0, x = 6; i < 7; i++, x--) {
		for (var j = 0; j < 7; j++) {
			if (i == 6) {
				symbol += "*  ";
			} else if (j == i && j >= x || j == x && j <= i) {
				symbol += "*  ";
			} else {
				symbol += "   ";
			}
		}
		symbol += "\n";
	}
	return symbol;
};
console.log(downTriangle());
