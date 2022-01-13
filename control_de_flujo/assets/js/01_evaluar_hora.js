/* 
evaluar hora
    Buenos dias 6 - 11
    Buenas tardes 12 - 18
    Buenas noches 19 - 23
    Dejame dormir 0 - 5

 */
    let hora = parseInt(prompt("¿Que hora es?"));


    if((hora >= 6) && (hora<12)) {
        document.write("Buenos dias");
        console.log("Buenos dias");
    }else if ((hora >= 12) && (hora < 19)) {
        document.write("Buenos terde");
        console.log("Buenas tardes");
    }else if ((hora >= 19) && (hora <= 23)) {
        document.write("Buenos noches");
        console.log("Buenas noches");
    }else if ((hora >= 0) && (hora <= 6)) {
        document.write("Dejame dormir");
      console.log("Dejame dormir");
    }else{
        document.write("Hora no valida");
        console.log("Hora no valida");
    }