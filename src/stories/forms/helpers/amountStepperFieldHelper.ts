// true if amount is missing both decimal numbers and has a dot
// passing: "10.", "."
// failing: "10.00", "10.0", ".00", ".0"
const isAmountMissingBothDecimalsAndHasDot = (value: string): boolean =>
  /^[0-9]{0,4}\.$/.test(value);

// true if amount is missing both decimal numbers and dot
// passing: "10", ""
// failing: "10.00", "10.0", "10.", ".00", ".0", ""
const isAmountMissingDecimalsAndDot = (value: string): boolean =>
  /^[0-9]{0,4}$/.test(value);

// true if amount is missing single decimal number, it may have missing whole part
// passing: "10.0", ".0"
// failing: "10.00", "10.", "10", ".00", ".", ""
const isAmountMissingSingleDecimal = (value: string): boolean =>
  /^[0-9]{0,4}\.[0-9]{1}$/.test(value);

// true if amount is missing a whole number before dot, it may be empty
// passing: ".00", ".0", ".", ""
// failing: "10.00", "10.0", "10.", "10"
const isAmountMissingWholePart = (value: string): boolean =>
  /^\.[0-9]{0,2}$/.test(value) || /^$/.test(value);

// true if amount can be fixed by below operations:
//     - providing missing zero in decimals: 10.0 -> 10.00
//     - providing both missing zeros in decimals: 10. -> 10.00
//     - providing both missing zeros and dot after whole part: 10 -> 10.00
//     - providing whole part when provided dot and any decimals: .00 -> 0.00 , .0 -> 0.00
//     - providing whole part and decimals when provided only dot: . -> 0.00
//     - providing whole part with dot and decimals when provided empty string:  -> 0.00
const isValidTypingAmount = (value: string): boolean =>
  /^[0-9]{0,4}\.?[0-9]{0,2}$/.test(value) &&
  (value === '' ? true : parseFloat(value) >= 0 && parseFloat(value) < 10000);

// true if is float number between 0.00 and 9999.99 inclusive, with precision 2
// allowed characters are 0-9 and .
const isValidAmount = (value: string): boolean =>
  /^[0-9]{1,4}\.[0-9]{2}$/.test(value);

const getFixedAmount = (amountToFix: string): string => {
  if (isValidAmount(amountToFix)) return amountToFix;

  let newAmount = amountToFix;

  switch (true) {
    case isAmountMissingDecimalsAndDot(newAmount):
      newAmount = `${newAmount}.00`;
      break;
    case isAmountMissingBothDecimalsAndHasDot(newAmount):
      newAmount = `${newAmount}00`;
      break;
    case isAmountMissingSingleDecimal(newAmount):
      newAmount = `${newAmount}0`;
      break;
    default:
  }

  if (isAmountMissingWholePart(newAmount)) {
    newAmount = `0${newAmount}`;
  }

  return newAmount;
};

export { getFixedAmount, isValidTypingAmount };
