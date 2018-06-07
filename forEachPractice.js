var curArray = [1, 2, 3, 4];

var addOne = function (element, index, array) {
  // console.log(element); // prints the current element it is iterating through
  // console.log(index); // prints the current index of the element
  // console.log(array); // prints the whole array
  array[index] += 1;
}

console.log("Before invoking addOne: " + curArray);
curArray.forEach(addOne);
console.log("After invoking addOne: " + curArray);
console.log(curArray);
