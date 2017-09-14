console.log("Running");
// Question 1
function maxOfTwoNumbers(a, b) {
	return Math.max(a, b);
}

console.log(maxOfTwoNumbers(3, 8));

// Question 2
function maxOfThree(a, b, c) {
	return Math.max(a, b, c);

}

console.log(maxOfThree(3, 8, 15));


// Question 3
function isCharacterAVowel(char) {
	// switch (char){
	// 	case "a":
	// 	case "e":
	// 	case "i":
	// 	case "o":
	// 	case "u":
	// 		return true;
	// 		break;
	// 	default:
	// 		return false;
	// }

	vowels = "aeiou".split("");
	console.log(char.toLowerCase());
	return (vowels.indexOf(char.toLowerCase()) !== -1);
}

console.log(isCharacterAVowel("c"));
console.log(isCharacterAVowel("a"));

// Question 4
function sumArray(numArr) {
	var sum = 0;
	numArr.forEach(function(number){
		sum += number;
	});
	return sum;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([1,2,3,4]));


// Question 4
function multiplyArray(numArr) {
	var product = 1;
	numArr.forEach(function(number){
		product *= number;
	});
	return product;
}

console.log(multiplyArray([1, 2, 3]));
console.log(multiplyArray([1,2,3,4]));

// Question 5
var numberOfArguments = function(){
	return arguments.length;
}

console.log(numberOfArguments(1,2,3,4,5,6,7,8,9));
console.log(numberOfArguments(1,2,3,4,5));



// Question 6
var reverseString = function (string){
	return string.split("").reverse().join("");
};

console.log(reverseString("Hello World!"));


// Question 7
function findLongestWord (wordsArr) {
	var wLenArr = [];
	wordsArr.forEach(function(element){
		wLenArr.push(element.length);
	});
	return wLenArr.reduce(function(a,b){
		return	Math.max(a,b);
	});
}

console.log(findLongestWord(["hi", "world", "superlongwordfortesting","small","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]));
console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa".length);

// Question 8
function filterLongWords (wordsArr, i) {
	var longWords =[];
	for (j = 0; j < wordsArr.length; j++){
		if (wordsArr[j].length > i){
			longWords.push(wordsArr[j]);
		}
	}
	return longWords;
}
var arraytest = "these are random words to make sure that we have filtered long words!".split(" ");
console.log(arraytest);
console.log(filterLongWords(arraytest, 4));


// Bonus 1
function charactersOccurencesCount(stringarg) {
	//accept string, into array
	var characters = stringarg.toLowerCase().split("");
	//create object for insertion
	var letterCount = {
		
	};
	//test letter: if new property, :if space next letter
	for (var i = 0; i < characters.length; i++) {
		//check for a 'space'
		if (characters[i] === " ") {
			if (debug)
			console.log("detected space charcter, continueing in array");
			continue;
		}
		//testing letter to see if it is already a property in 'letterCount'
		if (characters[i] in letterCount){
			if (debug)
			console.log("found prev key: " + characters[i] +", adding one to value.");
			//add 1 to old letter property
			letterCount[characters[i]] +=1;
			if (debug)
			console.log("new value is: " + letterCount[characters[i]]);
		}else{
			if (debug)
			console.log("No key prior, adding " + characters[i] + " property with value: 1");
			//add new property with value 1
			letterCount[characters[i]] = 1;
		}

	}
	//return object
	return letterCount;
}
debug = true;
console.log(charactersOccurencesCount("General Assembly"));










