function getTotal(inventory) {
    let total = 0;
    for (let element of inventory){
        total += element.price * element.quantity;
    }
    return total;
}

// Otra forma
function getTotal2(inventory){                                                                                          
    return inventory.reduce((total, element) => total + (element.price * element.quantity), 0); //0 valor inicial
}

let inventory = [
    { article: '🍔', price: 15, quantity: 1 },
    { article: '🍟', price: 10, quantity: 2 }
];


console.log(getTotal(inventory));
console.log(getTotal2(inventory));

