// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function gradingStudents(grades) {
  // iterate over the grades
  return grades.map((grade) => {
    // if grade < 38 return grade
    if (grade < 38 || grade % 5 === 0) return grade;
    // If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5
    // place to store next increment of 5
    let nextIncrement = grade;
    // while grade % 5 !== 0
    while (nextIncrement % 5 !== 0) {
      // increment grade
      nextIncrement += 1;
      // if nextIncrement of 5 - grade < 3
      if (nextIncrement % 5 === 0 && nextIncrement - grade < 3) {
        // return next increment of 5
        return nextIncrement;
      }
    }
    return grade;
  });
}

function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) return grade;
    const nextMultipleOfFive = Math.ceil(grade / 5) * 5;
    return nextMultipleOfFive - grade < 3 ? nextMultipleOfFive : grade;
  });
}

console.log(gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33]);
// console.log(
//   gradingStudents([84, 29, 57, 65, 74, 84, 65, 84, 29, 84, 84, 29, 57, 57, 84]),
//   [85, 29, 57, 65, 75, 85, 65, 85, 29, 85, 85, 29, 57, 57, 85]
// );
