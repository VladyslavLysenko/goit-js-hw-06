const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };

  if (data.email == "") {
    alert("Поле Email не заполнено!");
  } else if (data.password == "") {
    alert("Поле Password не заполнено!");
  } else {
    console.log(data);
    event.currentTarget.reset();
  }
}

// Var 2
// const form = document.querySelector(".login-form");

// form.setAttribute("action", "submit")

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {

//   event.preventDefault();

//   const email = event.currentTarget.elements.email.value;

//   const password = event.currentTarget.elements.password.value;




//   if (email == "" || password == "") {

//     alert("Please fill in all the fields!");

//   } else {

//     const data = {

//       email: email,

//       password: password,

//     };

//     console.log(data);

//     event.currentTarget.reset();

//   }

// }





