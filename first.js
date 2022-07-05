// Print string n times in custom way using loops

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
