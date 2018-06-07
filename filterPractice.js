
var strArray = ["I", "Don't", "like", "eating", "pizza"];

function strLengthLongerThanFive(element, index, array) {
  // if (index == 1) {
  //   return false;
  // }
  if (element.length >= 5) {
    return true;
  }
  return false;
}

var result = strArray.filter(strLengthLongerThanFive);
console.log(result);
