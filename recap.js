/* 
1. let, const use and decliar
2. template string
    a. use variable
    b. use object property
3. arrow function use and decliar every version
    a. with one parameter. will return the number after dividing by 5
    b. with two parameters. will add 2 to each number then multiply the result
    c. three parameters. will multiply all three parameters
    d. two parameter but it will be multiline arrow function. will add 2 to each number and multiply the results. Make sure it returns the result.
4. function decliaration vs arrow function different.
5. you have array of Numbers. map it go get elemrnt multiplied by 5 and must use arrow function.
6. [challenginbg] Numbers of array theke get odd number by using filter with arrow function.
7. array of objects(products). Use find to get the object which price is 5000.
8. You have an object. Now use destructuring to create a simple variable of any property of the object. 
9.[challenge] You have an array.Now use destructuring to create a simple(or more) variable to get the third element of the array in a variable called 'three'.
10. [Optional] Just write a function with 3 parameter and the last parameter will have default value 7. these function will do sum of all the three parameter.
*/


// 1. starting from here 
const name = 'Abdullah Al Hosain';
let potatoPrice = 40;
potatoPrice = 60;
// console.log(name, potatoPrice);


// 2. object property
const person = {
    firstName: 'Abdullah',
    middleName: 'al',
    lastName: "Hosain",
    age: 22,
    height: `5'7"`
};
const products = [
    {name: 'bottle', price: 1200, color: 'red'},
    {name: 'Notepad', price: 5000, color: 'green'},
    {name: 'kombol', price: 2300, color: 'white'},
    {name: 'pen', price: 1100, color: 'blue'},
    {name: 'plate', price: 6000, color: 'cyan'},
    {name: 'mobile', price: 90000, color: 'black'}
];
let organization = {
    name: 'ABC Company',
    ceo: 'kuddus elahi',
    department: [ 
        {designer: ['fatema', 'ali', 'salam'], publish: ['prothom-alo', 'korotoa', 'the daily star']},
        {developer: ['hosain', 'younus', 'khalid']}
    ]
};


// 3. arrow function 
// problem a
const vagSesh = (x) => x % 5;
console.log(vagSesh(14));
// problem b
const gunon = (x, y) => (x+2)*(y+2);
console.log(gunon(3,4));
// problem c and 10
const multiplyNumbers = (a,b,c=7) => a*b*c ;
console.log(multiplyNumbers(12,5));

