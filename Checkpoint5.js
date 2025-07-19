function isSpecial(numbers) {
  let special = true;

  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0 && numbers[i] % 2 !== 0) {
      special = false;
      break;
    }
    if (i % 2 !== 0 && numbers[i] % 2 === 0) {
      special = false;
      break;
    }
  }

  if (special === true) {
    return "The array is special";
  } else {
    return "The array is not special";
  }
}
// shorter version that i found in chatgpt
function isSpecial(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 !== numbers[i] % 2) {
      return "The array is not special";
    }
  }
  return "The array is special";
}
