function multiplyarray(num, length) {
  let array = [];
  let m = 1;
  for (let i = 0; i < length; i++) {
    array[i] = num * m;
    m++;
  }
  return array;
}
