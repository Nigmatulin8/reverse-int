module.exports = function reverse (n) {
	return JSON.stringify(Math.abs(n)).split("").reverse().join("");
}
