function eating(name, foods){
    console.log(name);
    for(let food of foods){
       console.log(food);
    }
    /*for(let i in foods){
        console.log(foods[i]);
    }*/

   /*foods.array.forEach(element => {
        console.log(element)
    });*/
}


let array = ['🍔','🍟','🍗'];
eating('pepe', array);

