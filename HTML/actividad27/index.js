//variable 1 para agarrar el input
//variable 2 para agregar las listas
let list = document.querySelector("#list");

function mas(inputbox) {
    addItem(inputbox);
    inputbox = "";
}


function addItem() {
    let div = document.createElement("div");
    let listItem = document.createElement("li");
    let inputbox = document.getElementById("inputbox");
    let puntero = document.createElement("i")
    puntero.innerHTML = "X";
    listItem.textContent = inputbox.value
    inputbox.value = ""
    list.appendChild(div)
    div.appendChild(listItem)
    div.appendChild(puntero)
    //list.appendChild(listItem);
    puntero.addEventListener("click", function(){
        list.removeChild(div)
    })
}