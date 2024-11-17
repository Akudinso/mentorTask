
// take home task 1
function formatName(firstName, lastname) {
    const formattedFirstName = firstName.toUpperCase();
    const formattedLastname = lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();
    return `${formattedFirstName} ${formattedLastname}`
}

console.log(formatName("kingsley", "nweke"));

// take home task2
// find odd in numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const allOdds = numbers.filter((number) => number % 2 !== 0)
console.log(allOdds);

// find odd in numberFSquared
const numberFSquared = []

numbers.forEach((number, index) => {
    const square = Math.pow(number, index)
    numberFSquared.push(square)
})

console.log(numberFSquared);

const newOdds = numberFSquared.filter((number) => number % 2 !== 0)
console.log(newOdds);


// other array method;
// Split method
const text = "apple,banana,cherry";
const fruits = text.split(",");
console.log(fruits); 


// Sort
const numberz = [20, 5, 9, 12];
numberz.sort((a, b) => a - b); 
console.log(numberz); 

// reduce
const numba = [1, 2, 3, 4];
const sum = numba.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 


// fill
const arr = [1, 2, 3, 4, 5];
arr.fill(0, 1, 4);
console.log(arr); 


// every
const num = [2, 4, 6, 8];
const areAllEven = num.every(num => num % 2 === 0);
console.log(areAllEven); 










