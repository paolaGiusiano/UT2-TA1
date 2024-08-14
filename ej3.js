function dress(temperature, isRaining){
    if(isRaining){
        console.log("Llevar paraguas ☂️");
    }
    if(temperature < 10){
        console.log("Ir en auto 🚗");
    }
    else if(temperature > 30){
        console.log("Ir de short🩳");
    }
    if(temperature == 30){
        console.log("Usar lentes 🕶");
    }
}


dress(15, true);
dress(32, false);
dress(8, false);










