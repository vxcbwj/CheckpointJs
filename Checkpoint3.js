function filter(numbers) {
  let numbersfiltered = [];
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      numbersfiltered.push(numbers[i]);
    }
  }
  return numbersfiltered;
}
