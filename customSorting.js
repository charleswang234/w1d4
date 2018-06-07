
var anArray = [25, 8, 7, 41];

function sortNumbers(myarray) {
  myarray.sort(function(a,b){ //Array now becomes [41, 25, 8, 7]
    return b - a;
  })
}

// sortNumbers(anArray);
// console.log(anArray);


function sortStudents(people) {
  people.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    var ageA = a.age;
    var ageB = b.age;
    if (ageA > ageB) {
      return -1;
    } else {
      return 1;
    }
  });
}

sortStudents(students);
