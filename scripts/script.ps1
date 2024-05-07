Write-Output("hola mundo")

ls

$variable = "mi contenido"

Write-Output $variable

#condicionales
$num = 10
if($num -eq 10){
    Write-Output("el numero es 10")
} elseif ($num -gt 44) {
    Write-Output("el numero es mayor a 44")
} else{
    Write-Output("no lo se")
}
#bucles for
$lista = "rojo", "amarillo", "verde"
foreach ($color in $lista) {
    Write-Output $color
}
#for estilo C
for($i = 0; $i -lt 8; $i++){
    Write-Output $i
}
#bucles while
$contador = 0
while ($contador -lt 12) {
    #hacemos algo

    $contador++
}

$num = Read-Host "Cuantos Anyos Tienes??"
Write-Output "tienes $num anyos"