// creating array of fruits
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);

//printing first element and last element of the array
console.log(fruits[0],fruits[fruits.length-1]);

//adding new element to the array and print it
fruits.push("pineapple");
console.log("printing last item : ",fruits[fruits.length-1])

//removing second item from the array
fruits.splice(1,1)
console.log("new array : ",fruits)

//finding lenth of the array
console.log(fruits.length)

console.log("\n");
console.log("-----------------------------------------------------------");
console.log("\n");

//answers for Looping Through an Array

//USE FOR LOOP FOR LOOPING
for (let fruit in fruits){
    console.log(fruits[fruit]);
}
console.log("\n");
//USE FOR EACH FOR LOOPING
fruits.forEach((fruit) => {
    console.log(fruit);
});

console.log("\nanswers :- A for loop is used when we need more control while repeating something.");
console.log("\nA forEach loop is easier to write and read. It automatically goes through every item in the array and runs a function for each one.");

console.log("\n---Answering the second qestion---\n");

//create the nuber array

const numbers = [2, 5, 8, 10, 12];
console.log("Original numbers:", numbers);

//double each number using map 
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

// Use .filter() to keep only numbers greater than 6
const filtered = numbers.filter(num => num > 6);
console.log("Numbers greater than 6:", filtered);

// Use .reduce() to find sum
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of all numbers:", sum);

console.log("\n--- TASK 2.2: Searching and Sorting ---\n");

// Check if 8 is in the array
console.log("Does array include 8?", numbers.includes(8));

// Find index of 10
console.log("Index of 10:", numbers.indexOf(10));

// Sort in ascending order
const sorted = [...numbers].sort((a, b) => a - b);
console.log("Sorted array:", sorted);


console.log("\n--- git comm TASK 3.1: Creating and Accessing Objects ---\n");

// Create student object
const student = {
    name: "Kavindu",
    age: 21,
    faculty: "Computing",
    subjects: ["Web Development", "Database Systems", "Programming"]
};

// Print name and faculty
console.log("Student name:", student.name);
console.log("Student faculty:", student.faculty);

// Add new property year
student.year = 2025;
console.log("After adding year:", student);

// Change age to 22
student.age = 22;
console.log("Updated age:", student.age);

// Print all subjects in a loop
console.log("\nSubjects:");
student.subjects.forEach(subject => {
    console.log("- " + subject);
});

console.log("\n--- TASK 4.1: Array of Objects ---\n");

const students = [
    {name: "Kavindu", age: 21, faculty: "Computing"},
    {name: "Nimesha", age: 22, faculty: "Engineering"},
    {name: "Dinuka", age: 23, faculty: "Business"}
];

// Print all student names
console.log("All student names:");
students.forEach(student => {
    console.log("- " + student.name);
});

// Filter students older than 21
const olderStudents = students.filter(student => student.age > 21);
console.log("\nStudents older than 21:");
console.log(olderStudents);

// Map to get all faculty names
const faculties = students.map(student => student.faculty);
console.log("\nAll faculties:", faculties);

console.log("\n--- TASK 4.2: Object Containing Array of Objects ---\n");

const classroom = {
    className: "IT2025",
    teacher: "Mr. Perera",
    students: [
        {name: "Kavindu", age: 21},
        {name: "Nimesha", age: 22},
        {name: "Dinuka", age: 23}
    ]
};

// Print teacher's name
console.log("Teacher:", classroom.teacher);

// Add a new student
classroom.students.push({name: "Sachini", age: 20});
console.log("\nAfter adding new student:");

// Print all student names
console.log("Students in classroom:");
classroom.students.forEach(student => {
    console.log("- " + student.name);
});

console.log("\n--- TASK 5: Challenge Activity ---\n");

const products = [
    {name: "Keyboard", price: 2500, qty: 2},
    {name: "Mouse", price: 1500, qty: 3},
    {name: "Monitor", price: 22000, qty: 1}
];

console.log("Products:");
products.forEach(product => {
    const value = product.price * product.qty;
    console.log(`${product.name}: Rs.${product.price} x ${product.qty} = Rs.${value}`);
});

// Calculate total value using reduce
const totalValue = products.reduce((total, product) => {
    return total + (product.price * product.qty);
}, 0);

console.log("\nTotal value of all products: Rs." + totalValue);

console.log("\n--- REFLECTION QUESTIONS ---\n");

console.log("1. What is the difference between an array and an object?");
console.log("   - Arrays store ordered lists with numeric indices [0,1,2...]");
console.log("   - Objects store key value pairs with named properties");

console.log("\n2. Why are arrays and objects often used together?");
console.log("   - Objects can contain arrays as properties");
console.log("   - Arrays can contain objects as elements");
console.log("   - This allows complex data structures like lists of students");

console.log("\n3. What was the most challenging part of this lab?");
console.log("   - Understanding nested data structures");
console.log("   - Using reduce() method effectively");
console.log("   - Combining array methods with object properties");

// check the error