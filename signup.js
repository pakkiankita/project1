const email = document.getElementById("email");
const uname = document.getElementById("name");
const pass = document.getElementById("password");
const button = document.getElementById("signup");

button.addEventListener("click", () => {
  const dataobj = {
    email: email.value,
    name: uname.value,
    password: password.value,
  };
  fetch("http://localhost:8089/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(alert("Account created successfully!"));
      window.location.href = "./signin.html";
    });
});
