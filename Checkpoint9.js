function mile(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += Math.abs(array[i]);
  }
  return sum === 25;
}
