const birthdate = document.getElementById("birthday");
const submit = document.querySelector(".submit");

function calculateAge() {
  let birthdayValue = birthdate.value;

  if (!birthdayValue) {
    alert("Please Enter Your Birthdate First");
  } else {
    let age = getAge(birthdayValue);
  }
}

submit.addEventListener("click", calculateAge);

function getAge(birthdayValue) {
  let currentDate = new Date();
  let birthyear = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthyear.getFullYear();
  console.log(age);

  let month = currentDate.getMonth() - birthyear.getMonth();
  console.log(month);

  if (
    month < 0 ||
    (month === 0 && currentDate.getMonth() > birthyear.getMonth)
  ) {
    age--;
    month = 12 + month;
  }

  let result = document.querySelector(".result");
  result.textContent = `Your age is ${age} ${
    age < 1 ? "years" : "year"
  } and ${month} ${month < 1 ? "months" : "month"} `;
}
