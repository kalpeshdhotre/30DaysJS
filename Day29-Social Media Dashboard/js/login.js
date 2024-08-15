let userArray = JSON.parse(localStorage.getItem("userArray")) || [];
const openSignupOverlay = document.getElementById("toggle-forms");
const signupOverlay = document.getElementById("signupOverlay");

openSignupOverlay.addEventListener("click", () => {
	signupOverlay.style.display = "block";
});

document.getElementById("userSignInForm").addEventListener("submit", (event) => {
	event.preventDefault();
	const username = document.getElementById("login-username").value;
	const password = document.getElementById("login-password").value;
	if (userArray.some((user) => user.username === username) && userArray.some((user) => user.password === password)) {
		window.location.href = "index.html";
	} else {
		alert("Invalid Username or Password");
	}
});

document.getElementById("userSignUPForm").addEventListener("submit", (event) => {
	event.preventDefault();
	const username = document.getElementById("signup-username").value;
	const password = document.getElementById("signup-password").value;
	if (userArray.some((user) => user.username === username)) {
		alert("User already present");
	} else {
		userArray.push({
			username: username,
			password: password,
		});
		console.log(userArray);
		localStorage.setItem("userArray", JSON.stringify(userArray));
	}
	signupOverlay.style.display = "none";
	console.log(username, password);
});

document.getElementById("cancelSignup").addEventListener("click", () => {
	signupOverlay.style.display = "none";
});
