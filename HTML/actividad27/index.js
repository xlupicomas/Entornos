//variable 1 para agarrar el input
//variable 2 para agregar las listas
let list = document.querySelector("#list");
let orden = false
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
    let puntero2 = document.createElement("i")
    //puntero es la X
    puntero2.innerHTML = "X";
    puntero.innerHTML = "✔";
    puntero.classList.add("separar")

    listItem.textContent = inputbox.value
    inputbox.value = ""
    div.appendChild(listItem)
    div.appendChild(puntero)
    div.appendChild(puntero2)

    let copiadiv = div.cloneNode(true)
    copiadiv.classList.add("doneNone")
    list.appendChild(div)
    todas.appendChild(copiadiv)

    puntero.addEventListener("click", function () {
        list.removeChild(div)
        hechas.appendChild(div)
        listItem.classList.add("done")
        console.log(copiadiv);
        copiadiv.classList.remove("doneNone")
        copiadiv.classList.add("doneAll")
        //.classList.add("done")
    })
    puntero2.addEventListener("click", function(){
        list.removeChild(div)
        todas.removeChild(copiadiv)
        hechas.removeChild(div)
        })
}

function ordenar() {
    let elementos = document.getElementsByClassName("doneAll")
    let elementosNone = document.getElementsByClassName("doneNone")
    let todas = document.getElementById("todas");


    if (orden == false) {
        //codigo
        let arrayElementos = Array.from(elementos)     //elementos.slice() //[].concat(elementos)
        let n = 0
        let x = 0
        
        for (n; n < arrayElementos.length; n++) {
            console.log("aquí");
            console.log(todas.childNodes[n].classList.contains("doneAll"))
            if (todas.childNodes[n].classList.contains("doneAll")){
                todas.removeChild(todas.childNodes[n])
            }else{
                console.log("no es doneAll");
            }
            
        }

        for (x; x < arrayElementos.length; x++) {
            todas.appendChild(arrayElementos[x])
        }
        orden = true
    }else{
        let m = 0
        let y = 0
        let arrayElementosNone = Array.from(elementosNone)
        for (m; m < arrayElementosNone.length; m++) {
            if (todas.childNodes[m].classList.contains("doneNone")){
                todas.removeChild(todas.childNodes[m])
            }else{
                console.log("no es doneNone");
            }
        }

        for (y; y < arrayElementosNone.length; y++) {
            todas.appendChild(arrayElementosNone[y])
        }
        orden = false
    } 
}
function borrar() {
    let div = document.createElement("div");
    let listItem = document.createElement("li");
    let inputbox = document.getElementById("inputbox");
    let todas = document.getElementById("todas")
    let hechas = document.getElementById("hechas")
    let puntero = document.createElement("i")
    let puntero2 = document.createElement("i")
    let m = 0
    let k = 0
    let l = 0
    for (m; m < list.childNodes.length; m++) {
        list.removeChild(list.childNodes[m])
    }
    for (l; l < hechas.childNodes.length; l++) {
        hechas.removeChild(hechas.childNodes[l])
    }
    for (k; k < todas.childNodes.length; k++) {
        todas.removeChild(todas.childNodes[k])
    }
}