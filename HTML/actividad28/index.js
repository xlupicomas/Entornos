$(document).ready(function () {
    let boolean = true
    $("#hide").click(function () {
        if (boolean) {
            $("#div").hide()
            boolean = false
        } else if (boolean == false) {
            $("#div").show()
            boolean = true
        }

    });
});

$(document).ready(function () {
    $("#button").click(function () {
        let texto = $("#inputbox")
        let textoescrito = texto.val()
        let puntero = document.createElement("i")
        let elemento = "<div class='divComent'><li><p>" + textoescrito + "</p></li><i class='cruz'>x</i></div>"
        $("#list").append(elemento)
        $(elemento).ready(function () {
            $(".cruz").click(function () {
                // alert(random)
                $(this).parent().remove()
            });
        });

    })
});
