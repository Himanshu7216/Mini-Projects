const inputBox = document.getElementById("input-box");
const listContainer = document.getElementsByClassName("list-container")[0];

inputBox.addEventListener("keypress", function (e) {
   if (e.key === "Enter") {
       AddTask();
   }
});

function AddTask() {
  if (inputBox.value === "") {
    showAlert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "&times;";

    //span.innerHTML = "\u00D7"; // Correct Unicode for ×
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

function showAlert(message) {
   document.getElementById("alert-message").innerText = message;
   document.getElementById("custom-alert").classList.remove("hidden");
}

function closeAlert() {
   document.getElementById("custom-alert").classList.add("hidden");
}


listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
