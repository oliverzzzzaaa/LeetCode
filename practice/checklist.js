
function addNewItem() {
    let newItem = document.getElementById("new-item-input").value
    let newItemLi = document.createElement("li")
    let newItemCheckbox = document.createElement("input")
    newItemCheckbox.setAttribute("type", "checkbox")
    newItemCheckbox.setAttribute("class", "checkbox")
    newItemLi.innerHTML = newItem
    newItemLi.appendChild(newItemCheckbox)
    document.getElementById("checklist-ol").appendChild(newItemLi)
    // document.getElementById("new-item-input").setAttribute("value", "")
    document.getElementById("new-item-input").value = ""
}

function checkAll() {
    console.log("a")
    let boxes = document.getElementsByClassName("checkbox")
    console.log(boxes)
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute("checked", "checked")
    }
}