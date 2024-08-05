module.exports = function toReadable (number) {
  
  const collection = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const collectionTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


  if (number < 20) {
    return collection[number];
  } else if (number < 100) {
    return collectionTens[Math.floor(number / 10 - 2)] + ' ' + collection[number % 10];
  } else if (number < 1000) {
    return collection[Math.floor(number / 100)] + ' hundred' + ' ' + toReadable(number % 100) + ' ';
  };
}
