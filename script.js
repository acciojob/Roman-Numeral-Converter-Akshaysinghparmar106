function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let num = 18; 
// 700 + 90 + 8
// 500 + 100 + 100 + 90 + 5 + 1 + 1 + 1
//DCCXCVIII

let result = "";

symbol.forEach((item) => {
    // console.log(item);
    // let val1 = item[0];
    // let val2 = item[1];
    // console.log(val1, val2);
    const [key, val] = item; //destructuring of array
    // console.log(key, val);

    while(num >= val) {
        num -= val;
        result += key;
    }
})

console.log(result);
	
	// g the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman


