// console.log("OfficeHourz Bananza");
// console.log(2+2);


// //Data Types
// const name = "OptimusPrima" //this is a string
// let age = 21 //this is a number 
// let LikesCottageCheese = false //Boolean means true or false
// let nothing = null //an empty value
// let missing //udnefined


// console.log("Hi");
// console.log('hi');
// console.log(`hi`);

// // console.log('Hello you dont know this fun fact, click here');
// console.log(`Hello my name is ${name}`);
// console.log("Hello my name is " + name + " and my age is " + age + " and you might ask, 'do I like cottage cheese and the answer would be: " + LikesCottageCheese);
// console.log(`Hello my name is ${name} and my age is ${age} and you might ask "Do I like cottage cheese" and the answer would be: ${LikesCottageCheese}`);

// let newValue = name+age
// console.log(typeof newValue);


// console.log("name:", name, typeof name);
// console.log("Age:", age, typeof age);
// console.log("Likes Cottage Cheese:", LikesCottageCheese, typeof LikesCottageCheese);
// console.log("Nothing Variable:", nothing, typeof nothing);
// console.log("Variable with missing value:", missing, typeof missinng);






// const numberOfLegHolesInMyJeans = 2;

// let numberOfCherriesInABagOfCherries = 45;
// console.log(numberOfCherriesInABagOfCherries);


// numberOfCherriesInABagOfCherries = 35
// console.log(numberOfCherriesInABagOfCherries);

// // let thisIsANumber = "Bananas"
// // console.log(thisIsANumber);


// // numberOfLegHolesInMyJeans = 1

// let multiply7 = 7*62
// console.log(multiply7);





// // if (userAge < 21) {
// //     console.log("You are too young to drink");
    
// // }else{
// //     console.log("You are of the legal age to drink");
    
// // }
// let userAge = 18
// // console.log(userAge);
// let doYouHaveADriversLicense = false 

// if (userAge > 16 && doYouHaveADriversLicense == true){
//     console.log("You can drive");
    
// }else if (userAge == 16 && doYouHaveADriversLicense == true){
//     console.log("You just turned old enough to drive");
    
// } else{
//     console.log("You can not drive");
// }

// //ternary
// userAge >= 18 ? console.log("Adult") : console.log("Kid");

// //for loop
// for (let initialValue = 0; initialValue < 10000; initialValue++){
//     console.log(initialValue);
// }

let name = "Colton"
let age = 21

let array1 = [0, 1, 2, 3, 4]
console.log(array1);
//lists can be a shopping, a todo list, a set of grades

//push adds a number to the end of the array
array1.push(5)
console.log(array1);

//pop removes the last element in an array
array1.pop()
console.log(array1);

array1.shift()
console.log(array1);

console.log(array1.indexOf(4))

let arrayOfFruits = ["pineapple", "apple", "banana"]
console.log(arrayOfFruits.indexOf("banana"));

let arrayOfTodos = ["take out garbage", "code", "Dishes"]
console.log(arrayOfTodos.length)

let arrayRandomNum = [2, 5, 6, 9]
let arrayRandomNumDoubled = arrayRandomNum.map(number => number*2)

console.log(arrayRandomNumDoubled);
console.log(arrayRandomNum);

let arrayRandomNumSquared = arrayRandomNum.map(i => i**2)
console.log(arrayRandomNumSquared);


let ColtonsFaceBookProfile = ["first Post", "second post"]

let randomArray = [1, "pineapple", 'cheese', true, "hi"]
console.log(randomArray);


//let ColtonsProfile = ["Colton", "24", "502", "Gogol Bordello"]
let ColtonsProfile = {
    name: "Colton",
    age: 27,
    friends: ["Milan", "Elizabeth", "Eriko", "Angelica"],
    hasADog: false,
    greetings: function(){
        return `Hello, my name is ${name} and my alleged age is ${age}`
    }
}

console.log(ColtonsProfile);
console.log(ColtonsProfile);

ColtonsProfile.LikesToRideMotorcycles = true
ColtonsProfile.location = 'brooklyn'

console.log(ColtonsProfile);
console.log(Object.keys(ColtonsProfile));

console.log(ColtonsProfile.greetings());
//cars, classroom (student), 
let knight = {
    armor: "Steel",
    weapon: "sword",
    life: 500,
    pockets: ["leaf", "potion"],
    damage: 50,
    name: "Sir Mixalot",
    attack: function(){
        return `${this.name} has attacked!`
    },
    defend: function(){
        
        return `${this.name} has blocked the attack - your turn`
    }
    
}

let goblin = {
    armor: "leather",
    weapon: "club",
    life: 400,
    damage: 25,
    name: "Sir Smells Alot",
    attack: function(){
        return `${this.name} has attacked!`
    },
    defend: function(){
        return `${this.name} has blocked the attack - your turn`
    }
}

console.log(goblin.attack());
console.log(knight.defend());
console.log(knight.pockets.pop())
