function validateForm() {
  const form = document.getElementById("form");
  const frist = document.getElementById("frist");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const text = document.getElementById("text", "text1", "text3", "text4");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
  });

  function checkInput() {
    const fristValue = frist.value;
    const lastValue = last.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    // Frist
    if (fristValue === "") {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML = "Frist name cannot be empty";
      text.style.color = "#ff0000";
      frist.style.borderColor = "#ff0000";
    } else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.innerHTML = "";
      text.style.color = "";
      frist.style.borderColor = " #16c79a";
    }

    // Last
    if (lastValue === "") {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text1.innerHTML = "Last name cannot be empty";
      text1.style.color = "#ff0000";
      last.style.borderColor = "#ff0000";
    } else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text1.innerHTML = "";
      text1.style.color = "";
      last.style.borderColor = "#16c79a";
    }

    if (emailValue === "") {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text2.innerHTML = "Please!! Enter email Address";
      text2.style.color = "#ff0000";
      email.style.borderColor = "#ff0000";
    } else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text2.innerHTML = "";
      text2.style.color = "";
      email.style.borderColor = "#16c79a";
    }

    if (passwordValue === "") {
      form.classList.add("valid");
      form.classList.remove("invalid");
      text3.innerHTML = "Please!! Enter Password";
      text3.style.color = "#ff0000";
      password.style.borderColor = "#ff0000";
    } else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text3.innerHTML = "";
      text3.style.color = "";
      password.style.borderColor = "#16c79a";
    }
  }
}
