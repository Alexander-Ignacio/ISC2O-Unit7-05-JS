let day = 0
let age = 0

document.getElementById('button').addEventListener('click', calculateSchool)

function calculateSchool () {
  day = document.getElementById('input1').value
  age = document.getElementById('input2').value

  age = parseInt(age)

  if (day === 'Saturday' || day === 'Sunday') {
    document.getElementById('answer').innerHTML = 'Time to relax for the weekend!'
  } else if (age < 18) {
    document.getElementById('answer').innerHTML = 'Time for school!'
  } else if (age >= 18) {
    document.getElementById('answer').innerHTML = 'Time to go to work!'
  }
}
