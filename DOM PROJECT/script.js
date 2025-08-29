// ===============================
// Part 1: Variables and Conditionals
// ===============================
let age = 20;
const name = "Joy";

// Conditional example
if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

// ===============================
// Part 2: Functions
// ===============================

// Function 1: Greet user
function greetUser(userName) {
  return "Hello, " + userName + "!";
}

// Function 2: Double a number
function doubleNumber(num) {
  return num * 2;
}

console.log(greetUser(name));
console.log("Double of 5 is:", doubleNumber(5));

// ===============================
// Part 3: Loops
// ===============================

// Loop 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop iteration:", i);
}

// Loop 2: While loop
let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

// ===============================
// Part 4: DOM Interactions
// ===============================

// DOM Interaction 1: Change text content
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("message").innerText = "🎉 The text has been changed!";
});

// DOM Interaction 2: Add items to a list dynamically
document.getElementById("loopBtn").addEventListener("click", function() {
  let list = document.getElementById("list");
  list.innerHTML = ""; // clear previous items
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.innerText = "Item " + i;
    list.appendChild(li);
  }
});

// DOM Interaction 3: Change style dynamically
document.getElementById("main-title").style.color = "green";
