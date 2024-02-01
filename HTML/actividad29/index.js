function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}

function rangeSlide2(value2) {
    document.getElementById('rangeValue2').innerHTML = value2;
}


function searchPais(){
    $(document).ready(function () {
        let list = ["Cerdeña", "EEUU", "Mallorca", "Chipre", "Filipinas", "España", "Chile"];
                $('#search').autocomplete({
                    source : list
                });
    });
    $(document).ready(function () {
        $("#Filtrar").click(function () {
        let texto = $("#search").val()
        let country = $(".country")
        let carta = $(".carta")
        let n = 0
        for(n; n < $(".country").length; n++){
            if(texto == ""){
                carta[n].classList.remove("displayNone")
            }else{
                if(texto == $(country[n]).text()){
                    carta[n].classList.remove("displayNone")
                }else{
                    console.log("no dentro")
                    carta[n].classList.add("displayNone")
        }}}
    });
});
}
function searchPrice(){
    $(document).ready(function () {
        $("#Filtrar").click(function () {  
            let precio = document.getElementsByClassName("precio")
            let precioMin = document.getElementById('rangeValue').innerHTML;
            let precioMax = document.getElementById('rangeValue2').innerHTML;
            let n = 0
            let carta = $(".carta")
            console.log(precioMin)
            console.log(precioMax)
            for(n; n < carta.length; n++){
                if(parseInt(precioMin) <= parseInt($(precio[n]).text())){
                    if(parseInt($(precio[n]).text()) <= parseInt(precioMax)){
                        carta[n].classList.remove("displayNone2")
                    }else{
                        console.log("no dentro")
                        carta[n].classList.add("displayNone2")
                    }
                }else{
                    console.log("no dentro")
                    carta[n].classList.add("displayNone2")
                }
            }
        });
    });
    }
    function searchDate() {
        $(document).ready(function () {
            $("#Filtrar").click(function () {
                let dateInicio = document.getElementById("dateInicio")
                let dateFinal = document.getElementById("dateFinal")
                let dateInicioHTML = document.getElementsByClassName("dateInicio")
                let dateFinalHTML = document.getElementsByClassName("dateFinal")
                let n = 0
                console.log($(dateInicio).val());
                console.log($(dateFinal).val());
                console.log($(dateInicioHTML[n]).text());
                console.log($(dateFinalHTML[n]).text())
            });
        });
    }
  