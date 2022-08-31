setInterval(updateTime, 1000);

function updateTime() {
    let ahora = new Date();
    let dia = ahora.getDay();
    let hora = ahora.getHours();

    switch (dia) {
        case 1:
            aux(hora, ["f1c1", "f2c1", "f3c1", "f4c1", "f5c1", "f6c1", "f7c1", "f8c1", "f9c1"]);
            break;
        case 2:
            aux(hora, ["f1c2", "f2c2", "f3c2", "f4c2", "f5c2", "f6c2", "f7c2", "f8c2", "f9c2"]);
            break;
        case 3:
            aux(hora, ["f1c3", "f2c3", "f3c3", "f4c3", "f5c3", "f6c3", "f7c3", "f8c3", "f9c3"]);
            break;
        case 4:
            aux(hora, ["f1c4", "f2c4", "f3c4", "f4c4", "f5c4", "f6c4", "f7c4", "f8c4", "f9c4"]);
            break;
        case 5:
            aux(hora, ["f1c5", "f2c5", "f3c5", "f4c5", "f5c5", "f6c5", "f7c5", "f8c5", "f9c5"]);
            break;
    }
}

function aux(hora, lista) {
    switch (hora) {
        case 12:
            animacion(lista[0]);
            break;
        case 13:
            animacion(lista[1]);
            break;
        case 14:
            animacion(lista[2]);
            break;
        case 15:
            animacion(lista[3]);
            break;
        case 16:
            animacion(lista[4]);
            break;
        case 17:
            animacion(lista[5]);
            break;
        case 18:
            animacion(lista[6]);
            break;
        case 19:
            animacion(lista[7]);
            break;
        case 20:
            animacion(lista[8]);
            break;
    }
}

function animacion(celda) {
    document.getElementById(celda).style = "background: white; color: red";
}