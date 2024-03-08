const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitButton = document.querySelector("#submit");
const msgDiv = document.querySelector("#msg");
let posts = JSON.parse(localStorage.getItem("posts"));

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

if (posts === null) {
  posts = [];
}

function handleSubmit(event) {
  event.preventDefault();

  const username = usernameInput.value;
  const title = titleInput.value;
  const content = contentInput.value;

  if (username === "") {
    displayMessage("error", "Username cannot be blank");
  } else if (title === "") {
    displayMessage("error", "Title cannot be blank");
  } else if (content === "") {
    displayMessage("error", "Content cannot be blank");
  } else {
    console.log(posts);
    const post = {
      username: username,
      title: title,
      content: content,
    };
    posts = posts.concat(post);
    localStorage.setItem("posts", JSON.stringify(posts));
    window.location.href = "./blog.html";
  }
}

submitButton.addEventListener("click", handleSubmit);
