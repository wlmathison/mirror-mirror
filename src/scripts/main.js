// The learning objective for this exercise is to listen for the keyup event, and update the DOM when it is broadcast.

// Create an input field in your DOM. Give it an id of message.
// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup event on the input field.
// The event handler function should update the textContent property of both sections.

let containerDiv = document.getElementById("container");

let inputEl = document.createElement("input");
inputEl.id = "message";
containerDiv.appendChild(inputEl);

let newDiv = document.createElement("div");
newDiv.id = "article-container";
containerDiv.appendChild(newDiv);

let articleEl1 = document.createElement("article");
articleEl1.id = "mirror1";
newDiv.appendChild(articleEl1);

let articleEl2 = document.createElement("article");
articleEl2.id = "mirror2";
newDiv.appendChild(articleEl2);

inputEl.addEventListener("keyup", function () {
    articleEl1.innerHTML = event.target.value;
    articleEl2.innerHTML = event.target.value;
});
