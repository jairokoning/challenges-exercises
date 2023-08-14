/*
Exercise 7: Grade Average
Create a program that takes a student's grades in three different subjects and 
calculates the average of the grades. Then display the calculated average.
*/

function calcGradeAverage(subjectsGrades) {
  const subjectsAverages = subjectsGrades.map(subject => {
    let sumOfGrades = subject.grades.reduce((accumulator, grade) => {
      return accumulator + grade;
    }, 0);    
    const average = sumOfGrades / subject.grades.length;
    return { subjectName: subject.name, average};
  })
  return subjectsAverages;  
}

const subjects = [
  {
    name: 'English',
    grades: [80, 77, 85, 68],
  },
  {
    name: 'Math',
    grades: [62, 70, 65, 72],
  },
  {
    name: 'History',
    grades: [90, 100, 86, 95],
  }
]

console.log(calcGradeAverage(subjects));