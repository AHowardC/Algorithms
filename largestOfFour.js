function largestOfFour(arr) {
	var max = [];
	for (var i = 0; i < arr.length; i++) {
		var tempMax = arr[i][0];
		console.log(tempMax)
		console.log(arr[i])


		using nested loop
		for (var j = 0; j < arr[i].length; j++) {
			var currentElement = arr[i][j];
			console.log(arr[i][j]);
			if (currentElement >= tempMax) {
				tempMax = currentElement;
			}
		}
		max.push(tempMax);
	}
	return max;
}

largestOfFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[99,111,1120,545]])
