
var strArray = ["I", "Don't", "like", "eating", "pizza"];

function strLengthLongerThanFive(element) {
  if (element.length >= 5) {
    return true;
  }
  return false;
}

var result = strArray.filter(strLengthLongerThanFive);
console.log(result);
