document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Logged in successfully!");
  });

document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Registered successfully!");
  });

function sendMessage() {
  const messages = document.getElementById("messages");
  const input = document.getElementById("chat-input");
  const message = document.createElement("div");
  message.textContent = input.value;
  messages.appendChild(message);
  input.value = "";
}
