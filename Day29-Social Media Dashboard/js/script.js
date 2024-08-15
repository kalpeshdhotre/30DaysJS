let posts = JSON.parse(localStorage.getItem("posts")) || [];
const form = document.querySelector("#postForm");
let userArray = JSON.parse(localStorage.getItem("userArray"));
let postCount = 0; // Initialize post count
// userArray = JSON.parse(userArray);

// New Post window components
const imagePreview = document.getElementById("imagePreview");
const fileInput = document.getElementById("fileInput");
// New Post window components

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
	document.getElementById("main").style.visibility = "hidden";
}

function closeSidebar() {
	document.getElementById("sidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	document.getElementById("main").style.visibility = "visible";
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

form.addEventListener("submit", function (event) {
	event.preventDefault();

	const fileInput = document.getElementById("fileInput");
	const descriptionInput = document.getElementById("descriptionInput").value;
	const username = "user"; // Hardcoded username for now

	if (fileInput.files.length > 0) {
		const formData = new FormData();
		formData.append("image", fileInput.files[0]);

		fetch("http://localhost:3000/images", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				posts.push({
					username: username,
					description: descriptionInput,
					imagePath: data.filePath,
					time: new Date().toLocaleString(),
					likeCount: 0,
					comments: [],
				});
				localStorage.setItem("posts", JSON.stringify(posts));
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}

	// postCount++;
	document.getElementById("popupOverlay").classList.add("hide");
});

function displayPosts() {
	const allPost = JSON.parse(localStorage.getItem("posts"));
	console.log("allPost", allPost);

	const postsContainer = document.getElementById("postsContainer");
	postsContainer.innerHTML = "";

	posts.forEach((allPost, index) => {
		const postElement = document.createElement("div");
		// let allComment = allPost.comments.map((comment) => comment.comment).join("<br>");

		let allComment = allPost.comments.map((comment) => `<strong>${comment.username}:</strong> ${comment.comment}`).join("<br>");

		postElement.classList.add("post");
		postElement.innerHTML = `         
         <h5><span style="text-transform: uppercase">${allPost.username}</span> - <span >${allPost.time}</span></h5>
         <img src="${allPost.imagePath}" alt="Post Image">
         <p>${allPost.description}</p>
         <div class="icons">
					<i class="ri-heart-line like" data-index="${index}"></i>
					<i class="ri-chat-1-line comment" data-index="${index}"></i>
			</div>
         <h4 class="likeCount" data-index="${index}"><span>${allPost.likeCount}</span> likes</h4>
			<div class="comments" data-index="${index}">${allComment}</div>
         `;
		postsContainer.appendChild(postElement);
	});
	document.querySelectorAll(".like").forEach((like) =>
		like.addEventListener("click", function () {
			const dataIndex = this.getAttribute("data-index");
			addLike(dataIndex);
		})
	);
	document.querySelectorAll(".comment").forEach((like) =>
		like.addEventListener("click", function () {
			const dataIndex = this.getAttribute("data-index");
			addComment(dataIndex);
		})
	);
}

// function to add like into post
function addLike(dataIndex) {
	console.log(dataIndex);
	if (posts[dataIndex].likeCount == 0) {
		posts[dataIndex].likeCount = 1;
	} else {
		posts[dataIndex].likeCount++;
	}
	localStorage.setItem("posts", JSON.stringify(posts));
	console.log(posts);
	document.querySelectorAll(".likeCount span")[dataIndex].innerHTML = posts[dataIndex].likeCount;
}

// add comment to post
function addComment(dataIndex) {
	// Show the overlay
	document.getElementById("commentOverlay").style.display = "flex";
	// Store the dataIndex in a hidden element or variable for later use
	document.getElementById("commentOverlay").setAttribute("data-index", dataIndex);
}

function submitComment() {
	const dataIndex = document.getElementById("commentOverlay").getAttribute("data-index");
	// Get the comment input value
	const comment = document.getElementById("commentInput").value;

	// Add the comment to the posts array
	posts[dataIndex].comments.push({
		username: "user",
		comment: comment,
	});
	localStorage.setItem("posts", JSON.stringify(posts));

	displayPosts();
	closeOverlay();
}

function closeOverlay() {
	document.getElementById("commentOverlay").style.display = "none";
	document.getElementById("commentInput").value = ""; // Clear the input field
}

document.getElementById("exit").addEventListener("click", () => {
	window.location.href = "login.html";
});

displayPosts();
