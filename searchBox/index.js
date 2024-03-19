// Define an array
var myArray = ["apple", "banana", "orange", "grape"];

// Access the container div
var container = document.getElementById("container");

// Loop over the array
// for (var i = 0; i < myArray.length; i++) {
//     // Create a new div element
//     var divElement = document.createElement("div");

//     // Set the content of the div to the current array item
//     divElement.textContent = myArray[i];

//     // Append the div to the container
//     container.appendChild(divElement);
// }

let input = document.querySelector("input")
console.log(input)
 
function handlechange(){
    console.log("change")
    console.log(input.value)
    console.log(findItemsByInitialLetter(input.value,myArray))
    let item = findItemsByInitialLetter(input.value,myArray)
    item.forEach((x,i)=>{
        var divElement = document.createElement("div")
        console.log( myArray[i])
        divElement.textContent = myArray[i];

        
        container.appendChild(divElement);
    })
 
    // console.log(myArray.includes(input.value)) 
}

function findItemsByInitialLetter(inputString, array) {
    const initialLetter = inputString.charAt(0).toLowerCase(); // Get the first letter and convert it to lowercase
    const matchingItems = array.filter(item => item.toLowerCase().startsWith(initialLetter)); // Filter array items
    return matchingItems;
}

// Example usage:
const myArray1 = ["Apple", "Banana", "Orange", "Mango", "Grapes","Avocado","Berry"];
const inputString = "B";

console.log(findItemsByInitialLetter(inputString, myArray1)); // Output: ["Mango"]
