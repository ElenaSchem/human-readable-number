module.exports = function toReadable (number) {
  const ones = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };

  const teens = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };

  const tens = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };

  if (number < 10) return ones[number];
    if (number < 20) return teens[number];
    let digit = number % 10;
    if (number < 100) return tens[(~~(number/10))*10] + (digit ? " " + ones[digit]: "");
    return ones[~~(number/100)] +" hundred" + (number%100 == 0 ? "" : " " + toReadable(number%100));
}
