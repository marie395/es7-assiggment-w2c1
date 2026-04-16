console.log("je suis present");


const user = {
   name:'Rooswell',
   age: 21,
   city: 'yaounde'
}
const {name, age, city} = user;


function card ({
    ingredients, name, desciption = 'unknow'
}){
    return ingredients
}
 console.log(card)

let score = 0
for (let i = 0; i<= 3; i++) {
    score += i
    console.log(score)
}

