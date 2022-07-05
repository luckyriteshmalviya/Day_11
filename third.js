// Converting one dimensional array into n dimensional array using slice.
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
