# Day_11
Solution of day_11 from 24 days GitHub question series.

  
## Print string n times in custom way using loops  
  
// By while loop  
function repeatStringNTimes(str, num) {  
  while (num > 0) {  
    console.log(num, str);  
    num -= 1;  
  }  
}  
console.log(repeatStringNTimes("Ritesh", 5));  
  
// By Recursion  
let i = 0;  
function repeatString(str, num) {  
  i = i + 1;  
  console.log(i, str);  
  if (num === 1) {  
    return;  
  } else {  
    num = num - 1;  
    return repeatString(str, num);  
  }  
}  
// console.log(repeatString("Ritesh", 50));  
  
  
    
## Truncate the string upto specific character. For ex ("I am priya", 3) => "I am..."  
  
let str = "Hi I am Ritesh Malviya";  
let num = 4;  
function truncate(str, num) {  
  let res = [];  
  for (let i = 0; i < num; i++) {  
    res.push(str[i]);  
  }  
  res.push("...");  
  res = res.join("");  
  res = res.toString();  
  return res;  
}  
console.log(truncate(str, num));  
    

## Converting one dimensional array into n dimensional array using slice.  
// const input = covertArryInOneDimension(["a", "b", "c", "d"], 2);  
//  Output  
// [  
//   ["a", "b"],  
//   ["c", "d"],  
// ];  
  
function covertArryInOneDimension(arr, num) {  
  let res = [];  
  let slice = [];  
  for (let i = 0; i < arr.length; i++) {  
    slice = arr.splice(i, num);  
    i -= 1;  
    res.push(slice);  
  }  
  return res;  
}  
console.log(covertArryInOneDimension(["a", "b", "c", "d"], 2));  


## To find only truthy values from an array.  
const input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];  
// // Output  
// ["priya", "ate", 9];  
  
function truthyValues(input) {  
  let res = [];  
  for (let i = 0; i < input.length; i++) {  
    if (input[i]) {  
      res.push(input[i]);  
    }  
  }  
  return res;  
}  
console.log(truthyValues(input));  


## To find only truthy values using filter.  
let input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];  
// // Output  
// ["priya", "ate", 9];  
  
input = input.filter((item) => {  
  return item;  
});  
console.log(input);  

