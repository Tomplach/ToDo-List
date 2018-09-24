let todoArray = [];

function addToList() {
    let inputText = document.getElementById("todoInput").value;
    let newElem = document.createElement("ol");
    let newText = document.createTextNode(inputText);
    newElem.appendChild(newText);
}