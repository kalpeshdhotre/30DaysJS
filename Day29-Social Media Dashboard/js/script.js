let userArray = JSON.parse(localStorage.getItem("userArray")) || [];
// userArray = JSON.parse(userArray);

// New Post window components
const imagePreview = document.getElementById("imagePreview");
const fileInput = document.getElementById("fileInput");
// New Post window components

console.log(userArray);

// let userArray = [];

// document.getElementById("userForm").addEventListener("submit", (event) => {
// 	userArray = JSON.parse(localStorage.getItem("userArray")) || [];
// 	// alert("Hello");
// 	event.preventDefault(); // Prevents the default form submission

// 	const userName = document.getElementById("username").value;
// 	const userPassword = document.getElementById("password").value;

// 	if (userArray.some((user) => user.username === userName)) {
// 		alert("User already present");
// 	} else {
// 		userArray.push({
// 			username: userName,
// 			password: userPassword,
// 		});
// 		// alert("User added");
// 		console.log(userArray);
// 		localStorage.setItem("userArray", JSON.stringify(userArray));
// 	}
// });

// document.getElementById("show-signup").addEventListener("click", function (event) {
// 	event.preventDefault(); // Prevent default link behavior

// 	//  Toggle visibility of signup form
// 	const signupForm = document.getElementById("userSignUpForm");
// 	signupForm.style.display = signupForm.style.display === "hidden" ? "block" : "none";
// });

function openSidebar() {
	document.getElementById("sidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	document.getElementById("main").style.display = "none";
}

function closeSidebar() {
	document.getElementById("sidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	document.getElementById("main").style.display = "block";
}

// Trigger file input click when imagePreview is clicked
document.getElementById("openPostForm").addEventListener("click", () => {
	document.getElementById("popupOverlay").classList.remove("hide");
});

document.getElementById("closePostForm").addEventListener("click", () => {
	document.getElementById("popupOverlay").classList.add("hide");
});

imagePreview.addEventListener("click", () => {
	fileInput.click();
});

// Handle file selection
fileInput.addEventListener("change", function () {
	const file = this.files[0];

	if (file) {
		const reader = new FileReader();

		reader.onload = function (e) {
			imagePreview.style.backgroundImage = `url(${e.target.result})`;
			imagePreview.innerHTML = ""; // Clear default text
		};

		reader.readAsDataURL(file); // Read the file and trigger onload
	}
});

// Save Post

let posts = []; // Array to store post data
let postCount = 0; // Counter for post names

const form = document.querySelector("#postForm");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	const fileInput = document.getElementById("fileInput");
	const descriptionInput = document.getElementById("descriptionInput").value;
	const username = "user"; // Hardcoded username for now

	if (fileInput.files.length > 0) {
		const file = fileInput.files[0];
		postCount += 1;
		const fileName = `post${postCount}`; // Generate a unique filename
		const filePath = `images/${fileName}.${file.type.split("/")[1]}`; // Generate file path

		// Save file in project directory (simulation)
		// saveFile(file, filePath);

		// Store post data in the posts array
		posts.push({
			username: username,
			description: descriptionInput,
			filePath: filePath,
		});

		console.log("Post submitted:", posts);
	}

	// Hide the form after submission
	document.getElementById("popupOverlay").classList.add("hide");
});
