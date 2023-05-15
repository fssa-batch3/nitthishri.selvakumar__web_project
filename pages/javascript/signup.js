const form = document.getElementById("register_form");

const first_name = document.getElementById("first_name");

const last_name = document.getElementById("last_name");

const email_id = document.getElementById("email");

const password = document.getElementById("password");

const formValidation = () => {
  const firstnamevalue = first_name.value.trim();

  const lastnamevalue = last_name.value.trim();

  const emailvalue = email_id.value.trim();

  const passwordvalue = password.value.trim();

  const usersList = [];

  const user = {};

  user.firstname = firstnamevalue;
  user.lastname = lastnamevalue;
  user.emailid = emailvalue;
  user.password = passwordvalue;
  user.count = "";
  user.favourite_count = "";

  const user_Details =
    JSON.parse(localStorage.getItem("user_list")) ?? usersList;

  let success = true;

  if (user_Details != null) {
    for (let i = 0; i < user_Details.length; i++) {
      if (user_Details[i].emailid == emailvalue) {
        alert("Already Have a account");

        success = false;

        break;
      }
    }
  }

  if (success) {
    user_Details.push(user);

    localStorage.setItem("user_list", JSON.stringify(user_Details));

    alert("Account created Successfully");

    window.location.href = "login.html";
  } else {
    alert("Already Have a account");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formValidation();

  // console.log("working");
});
