function countTrues(boolArray) {
  let count = 0;
  if (boolArray.length == 0) {
    return 0;
  }
  for (let i = 0; i < boolArray.length; i++) {
    if (boolArray[i] == true) {
      count++;
    }
  }
  return count;
}
//improved version from chatgpt
if (boolArray[i]) {
  count++;
}
//using this condition
