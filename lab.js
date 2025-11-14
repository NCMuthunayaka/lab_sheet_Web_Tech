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