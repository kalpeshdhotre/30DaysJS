let ws;
const btnConnect = document.getElementById("btnConnect");
const btnDisconnect = document.getElementById("btnDisconnect");
const btnSend = document.getElementById("btnSend");
const msgBox = document.getElementById("userMsg");
const userName = document.getElementById("userName");
const messagesDiv = document.getElementById("messages");

// function appendMessage(userName, message, isSent) {
//   const messageDiv = document.createElement("div");
//   messageDiv.className = `message ${isSent ? "sent" : "received"}`;

//   const messageTextDiv = document.createElement("div");
//   messageTextDiv.className = "message-text";

//   if (isSent) {
//     messageTextDiv.textContent = `You: ${message}`;
//   } else {
//     messageTextDiv.textContent = `${userName}: ${message}`;
//   }

//   messageDiv.appendChild(messageTextDiv);
//   messagesDiv.appendChild(messageDiv);

//   // Scroll to the bottom of the messages div
//   messagesDiv.scrollTop = messagesDiv.scrollHeight;
// }
function appendMessage(userName, message, isSent) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${isSent ? "sent" : "received"}`;

  const messageTextDiv = document.createElement("div");
  messageTextDiv.className = "message-text";

  // Create username and message span elements
  const userSpan = document.createElement("span");
  userSpan.className = "message-username";
  userSpan.textContent = isSent ? "You" : userName;

  const msgSpan = document.createElement("span");
  msgSpan.className = "message-content";
  msgSpan.textContent = ` ${message}`;

  // Append spans to the messageTextDiv
  messageTextDiv.appendChild(userSpan);
  messageTextDiv.appendChild(msgSpan);

  messageDiv.appendChild(messageTextDiv);
  messagesDiv.prepend(messageDiv);

  // Scroll to the bottom of the messages div
  // messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// function to send message on enter or click
function sendMessage() {
  const message = JSON.stringify({
    userName: userName.value,
    msg: msgBox.value,
  });
  ws.send(message);
  appendMessage(userName.value, msgBox.value, true);
  msgBox.value = "";
}
const connectServer = async (user) => {
  ws = new WebSocket("ws://localhost:8080");
  ws.onopen = () => {
    // ws.send(`${user} Connected to server`);
    console.log(`Connected to WebSocket server`);
    const conStatus = document.getElementById("connectionStatus");
    conStatus.innerText = "Connected";
    conStatus.style.color = "green";
  };

  //add event listner for on connection close
  ws.onclose = () => {
    console.log("WebSocket connection closed");
    const conStatus = document.getElementById("connectionStatus");
    conStatus.innerText = "Disconnected";
    conStatus.style.color = "red";
    btnConnect.disabled = false;
    btnDisconnect.disabled = true;
    userName.disabled = false;
    btnSend.disabled = true;
    msgBox.disabled = true;
  };

  ws.onmessage = (event) => {
    // console.log(event.data);
    // const message = event.data;
    const message = JSON.parse(event.data);
    console.log(message);

    console.log(`${message.userName} : ${message.msg}`);
    appendMessage(message.userName, message.msg, false);
  };
};

btnConnect.addEventListener("click", () => {
  connectServer(userName.value);
  userName.disabled = true;
  btnConnect.disabled = true;
  btnDisconnect.disabled = false;
  btnSend.disabled = false;
  msgBox.disabled = false;
});

btnSend.addEventListener("click", () => {
  sendMessage();
  msgBox.focus();
});

btnDisconnect.addEventListener("click", () => {
  ws.close();
  console.log("Disconnected");
  btnConnect.disabled = false;
  btnDisconnect.disabled = true;
  userName.disabled = false;
  btnSend.disabled = true;
  msgBox.disabled = true;
});

msgBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});
