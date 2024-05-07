const { time } = require('node:console');
const { randomInt } = require('node:crypto');


function random(){
    return randomInt(40);
}
function comparacion(sensorRandom){
    if(sensorRandom < 25){
        menos(sensorRandom);
    }else{
        mas(sensorRandom);
    }
}
function menos(sensorRandom){
    console.log('estamos bien');
    console.log(sensorRandom);
}
function mas(sensorRandom){
    console.log(`alerta roja, ${sensorRandom}`);
}


function bucle(){
    X = 0
    while(X < 1){
        //sensorRandom = random();
        comparacion(random());
        X = X + 1
    }
}
bucle();
setInterval(bucle, 1000)
