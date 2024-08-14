function countBanana(inventory){
    let cont = 0;
    inventory.forEach(element => {
       if (element == '🍌'){
        cont++;
       }
    });
    return cont;
}


let inventory = ['🥑','🍌','🥭', '🍌'];
console.log(`Hay ${countBanana(inventory)} bananas`);