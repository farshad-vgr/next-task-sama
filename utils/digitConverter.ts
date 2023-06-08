export function convertFarsiDigitsToEnglish(str: string) {
	const zero = "۰".charCodeAt(0);

	let digits = new Array(str.length);

	for (var i = 0; i < str.length; i++) {
		digits[i] = str.charCodeAt(i);

		if (zero <= digits[i] && digits[i] < zero + 10) {
			digits[i] -= zero - 48; // '0' = ASCII 48
		}
	}

	return String.fromCharCode.apply(null, digits);
}
