// Truncate the string upto specific character. For ex ("I am priya", 3) => "I am..."

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
