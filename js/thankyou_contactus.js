let users = JSON.parse(localStorage.getItem("user"));
let page = document.querySelector("h1");
let thankyou = `<h1> Thank you for contacting us, ${users.name}! We'll reach out to you ASAP! </h1>`;
page.innerHTML = thankyou;
