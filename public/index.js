//name the important id in the HTML
let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

// working on submit button
function addList() {
  // alert("🧑‍💻Zeke Coding");
  if (inputBox.value === "") {
    alert("🧑Input cannot be empty");
  } else {
    let li = document.createElement("li"); //tags in HTML
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span"); //tags necessary to appear in HTML

    li.appendChild(span);
  }

  inputBox.value = "";
}
// list container function
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);


