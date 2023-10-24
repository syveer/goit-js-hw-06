const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Previne reîncărcarea paginii la trimiterea formularului

  const formData = new FormData(loginForm);

  const userData = {};
  formData.forEach((value, key) => {
    userData[key] = value;
  });

  if (userData.email.trim() === "" || userData.password.trim() === "") {
    alert("Toate câmpurile trebuie completate!");
  } else {
    console.log("Datele introduse:", userData);
    loginForm.reset(); // Șterge valorile câmpurilor din formular
  }
});
