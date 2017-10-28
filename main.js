const raindrops = (num) => {
	let str="";

	for (let i = 3; i <= 7; i++) {
		if (i == 3 && num % i === 0) {
			str = str + "Pling";
		} 
		if (i == 5 && num % i === 0) {
			str = str + "Plang";
		} 
		if (i == 7 && num % i === 0) {
			str = str + "Plong";
		}
	}

	return (str==="") ? num : str;
}

module.exports = raindrops;
