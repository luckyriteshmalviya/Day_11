// To find only truthy values using filter.
let input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];
// // Output
// ["priya", "ate", 9];

input = input.filter((item) => {
  return item;
});
console.log(input);
