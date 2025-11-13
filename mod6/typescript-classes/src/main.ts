import PhysicalProduct from "./physical-product";

const phone = new PhysicalProduct('P*345', 'TSPhone', 300, 0.9)

// use the getter to read the price prop
console.log(phone.readPrice);
//use the getter to read the computed prop of price + tax
console.log(phone.fullPrice);

// use the setter to update the price prop
phone.newPrice = 500

console.log(phone.readPrice);

console.log("The pice of the phone is: " + phone.price);

console.log("The new price of the phone is: " + phone.price);

console.log(phone);
