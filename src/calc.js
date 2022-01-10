class Calc {

	constructor() {

	}

	hash(name) {
		return name.split("").map(s => s.charCodeAt(0)).reduce((a, c) => a + c);
	}
}

module.exports = Calc;