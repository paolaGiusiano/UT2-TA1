// concat = une dos o más arrays.
function fillCart(person, articlesCollection) {
    person.cart = person.cart.concat(articlesCollection);
}


//Otra forma
// push = agregar uno o más elementos al final de un array.
function fillCart2(person, articlesCollection) {
    for(let article of articlesCollection){
        person.cart.push(article);       
    }

}

//Otra forma
function fillCart3(person, articlesCollection) {
    for(let i = 0; i < articlesCollection.length; i++) {
        person.cart[person.cart.length] = articlesCollection[i];
    }
}




let person = { name: 'Pepe', cart: [] };
let articlesCollection = [
    { article: '👟', amount: 1, price: 25 },
    { article: '👕', amount: 2, price: 20 },
    { article: '🩳', amount: 3, price: 30}
];

fillCart(person, articlesCollection);
console.log(person.cart);

