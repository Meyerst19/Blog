let posts = JSON.parse(localStorage.getItem("posts"));
const mainElement = document.querySelector("main");
const postElement = document.createElement("div");
const titleElement = document.createElement("h2");
const contentElement = document.createElement("p");
const usernameElement = document.createElement("p");

function createPost(i) {
  const postElement = document.createElement("div");
  const titleElement = document.createElement("h2");
  const contentElement = document.createElement("p");
  const usernameElement = document.createElement("p");
  titleElement.textContent = posts[i].title;
  contentElement.textContent = posts[i].content;
  usernameElement.textContent = posts[i].username;
  mainElement.appendChild(postElement);
  postElement.appendChild(titleElement);
  postElement.appendChild(contentElement);
  postElement.appendChild(usernameElement);
}

for (i = 0; i < posts.length; i++) {
  createPost(i);
}
