//Declaring a variable
//we use ; to denote end of statement
//Although in JS, we can skip the semi-colons, it is still a good practise to ad
let favFood = "Fried Rice";
let favChef = "Uncle Roger";

//arrays in JS 
let food = ["fried rice", "mala", "chicken rice", "kopi"];
console.log('\nGETTING THE 3rd element in array');
console.log(food[2]);

//we can declare constants too
//we can't redeclare constants
const MAXLOOP = 10;
//const MAXLOOP = 20; //this will produce an error

console.log("\nFOR LOOP BASIC");
//loops in JS 
for (let i = 0; i < MAXLOOP; i++){
  console.log('Number: ' + i );
}

//loop an array 
//arrays start with an index value of 0 
console.log("\nFOR LOOP with ARRAY");
for (let i = 0; i < food.length; i++){
  console.log('Food: ' + food[i]);//we reference the ith value in the array
}

//while loop
console.log("\nWHILE LOOP");
i = 0;
while(i < MAXLOOP){
  console.log(i);
  i++;
}

//string literals help us save time and confusion
//we can combine strings using string literals, the backtick `
console.log("\nTEMPLATE LITERAL");
let firstName = 'Uncle';
let lastName = 'Roger';
let fullName = `${firstName} ${lastName}`;
console.log(`Full Name: ${fullName}`);

//simple compare 
console.log("\nCOMPARE");
let val1 = 10;
let val2 = 20;
if( val1 >= val2 ){
  console.log(`Value 1 ${val1} is greater than or equal to Value 2 ${val2}`);
}else{
  console.log(`Value 1 ${val1} is lesser than Value 2 ${val2}`);
}

console.log("\nCOMPARING WITH DATA TYPES");
let num1 = 10;
let num2 = "10";
let num3 = 10;
if (num1 === num2){
  console.log(`Num1 has the same value and same data type as num 2`);
}else if (num1 == num2){
  console.log(`Num1 has the same value as num 2`);
}else{
  console.log(`Num1 and Num 2 have different values`);
}

console.log("\nFUNCTIONS");
function printID(){
  console.log("ID is tough however we will get better");
}
printID();

//function with parameters
function printName(someName){
  console.log(`SomeName ..... :  ${someName}`);
}
printName(fullName);

//function with return value and parameters
function getFullName(fname, lname){
  return `${fname},${lname}`
}
let visitorName = getFullName(firstName, lastName);
printName(visitorName);

