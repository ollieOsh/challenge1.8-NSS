function happy(number, counter) {
	var arr = number.toString().split(""),
		newNum = 0;

	for (var i = 0; i < arr.length; i++) {
	arr[i] = Math.pow(Number(arr[i]), 2);
	}
	i = 0;
	while (i < arr.length){
		newNum += arr[i];
		i++;
	}
	if(newNum != 1 && counter < 10){
		counter++;
		return happy(newNum, counter);
	}else if (newNum == 1){
		return "It's happy!";
	}
	else {
		return "No happy. Much sad."
	}
};
var num = 998;

console.log(happy(num, 0));
console.log(happy(999938, 0));
console.log(happy(3797, 0));