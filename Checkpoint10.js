function digitSquare(number) {
  let numberAsString = number.toString();
  let result = "";
  for (let i = 0; i < numberAsString.length; i++) {
    let digit = parseInt(numberAsString[i]);
    let square = digit * digit;
    result += square.toString();
  }
  return number;
}
//learned about tostring and parseInt :3
