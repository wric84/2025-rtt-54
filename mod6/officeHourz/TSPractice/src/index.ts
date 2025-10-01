//data types and defining those

let grade: string = "B"
let isStudent: boolean = true
let age: number = 10

//if statements
if(age >= 18){
    console.log("You are an adult");
}else{
    console.log("You are an child");
}

if (grade === "A"){
    console.log("Excellent");
}else if(grade === "B"){
    console.log("Way to go!");
}else{
    console.log("Keep trying!");   
}

if(isStudent){
    console.log("Welcome back!"); 
}else{
    console.log("Please check in at the office");   
}

//arrays and for loops
console.log("\n=========Arrays and Loops==========");

let numbers: number[] = []

for (let i = 1; i <= 5; i++){
    numbers.push(i)
}

console.log(numbers);

let double: number[] = []

for (let n of numbers){
    double.push(n*2)
}

console.log(double);


//functions
console.log("\n==========functions============");

//if we arent returning anything, then we signify with the 'void' keyword
function add(a: number, b: number): number{
    return a+b
    
}

console.log(add(3,4));


function greet(name: string):string{
    return `Hello, ${name}`
}

console.log(greet("OptimusPrima"));

function isEven(num: number): boolean{
    return num % 2 === 0
}

console.log("Is ten even?", isEven(10));
console.log("Is 7 even?", isEven(7));

//User object
console.log("\n==============Object and optional demo===========");

type User = {
    id: number,
    username: string,
    email: string,
    age?: number
}

const user1: User = {id: 1, username: "OptimusPrima", email: "bob@gmail.com"}
console.log(user1);

function greeting(name: string, title?: string): string{
    if(title){
        return `Hello, ${title} ${name}`    
    }
    return `Hello, ${name}`
}

console.log(greeting("Colton"));
console.log(greeting("Colton", "Saint"));
