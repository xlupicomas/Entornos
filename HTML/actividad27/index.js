//variable 1 para agarrar el input
//variable 2 para agregar las listas
let list = document.querySelector("#list");
let orden = 1
function mas(inputbox) {
    addItem(inputbox);
    inputbox = "";
}


function addItem() {
    let div = document.createElement("div");
    let listItem = document.createElement("li");
    let inputbox = document.getElementById("inputbox");
    let todas = document.getElementById("todas")
    let hechas = document.getElementById("hechas")
    let puntero = document.createElement("i")
    let copiadiv = div
    //puntero es la X
    puntero.innerHTML = "X";

    listItem.textContent = inputbox.value
    inputbox.value = ""
    list.appendChild(div)
    todas.appendChild(copiadiv)
    div.appendChild(listItem)
    div.appendChild(puntero)
    //list.appendChild(listItem);
    puntero.addEventListener("click", function(){
        list.removeChild(div)
        hechas.appendChild(div)
    })
}
function ordenar() {
    let Tipo = document.getElementById("tipo")
    let div = document.createElement("div");
    let listItem = document.createElement("li");
    let inputbox = document.getElementById("inputbox");
    let todas = document.getElementById("todas")
    let hechas = document.getElementById("hechas")
    let puntero = document.createElement("i")
    if(orden == 3){
        //codigo
        orden = 1
        alert("ordern = 3")
    }
    else if(orden == 2){
        //codigo
        orden = orden + 1
        alert("ordern = 2")
    }
    else if (orden == 1){
        //codigo
        alert("ordern = 1")
        orden = orden + 1
    } 
}