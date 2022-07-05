// To find only truthy values from an array.
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
