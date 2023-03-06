let users = JSON.parse(localStorage.getItem("user"));
let page = document.querySelector("h1");
let thankyou = `<h1>Thankyou ${users.f_name} ${users.l_name} a.k.a ${users.username}!</h1>`;
page.innerHTML = thankyou;
