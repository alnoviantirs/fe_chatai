document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "chat.html";
  });

document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "chat.html";
  });

function sendMessage() {
  const chatInput = document.getElementById("chat-input");
  const message = chatInput.value;
  if (message.trim() === "") return;

  const messagesDiv = document.getElementById("messages");
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messagesDiv.appendChild(messageDiv);

  chatInput.value = "";
}
