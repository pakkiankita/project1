const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("signin");
console.log(email.value);
button.addEventListener("click", async (e) => {
  e.preventDefault();
  await fetch(" http://localhost:8089/users", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const comparision = data.find((ele) => ele.email === email.value);
      console.log(comparision);
      if (
        comparision.email === email.value &&
        comparision.password === password.value
      ) {
        alert("Logged in Successfully!");
        localStorage.setItem("token", JSON.stringify(Date.now()));
        localStorage.setItem("id", JSON.stringify(comparision.id));
        window.location.href = "./home.html";
      } else {
        alert("You are not registered in plz sign up!");
      }
    });
});
