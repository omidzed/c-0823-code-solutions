/* exported getStudentNames */

function getStudentNames(students) {
  const studentNames = [];

  for (let i = 0; i <= students.length - 1; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}
