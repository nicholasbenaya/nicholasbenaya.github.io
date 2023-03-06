function addUser() {
  const user = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#number").value,
    message: document.querySelector("#message").value,
  };
  let userAsString = JSON.stringify(user);
  localStorage.setItem("user", userAsString);
  location.href = "ty.html";
}
