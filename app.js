console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
/*
Declare 2 variables, `a` and `b`, and assign 20 to `a` and 4 to `b`
2. Declare a variable `add` that uses the `+` operator to store the result of adding the values stored in `a` and `b`
3. Declare a variable `minus` that uses the `-` operator to store the result of subtracting the values stored in `a` and `b`
4. Declare a variable `multiply` that uses the `*` operator to store the result of multiplying the values stored in `a` and `b`
5. Declare a variable `dividing` that uses the `/` operator to store the result of dividing the values stored in `a` and `b`

You can print the value of the variables to the browser console (ex: `console.log(add)`) to check the result.

*/
// YOUR CODE HERE
let a = 20;
let b = 4;
let add = a + b;
let minus = a - b;
let multiply = a * b;
let dividing = a / b;
console.log("EXERCISE 1:\n==========\n");

console.log(`add = ${add}`);
let node = document.createElement("li");
node.innerText = `add = ${add}`;
document.getElementById("exercise-1").appendChild(node);

console.log(`minus = ${minus}`);
node = document.createElement("li");
node.innerText = `minus = ${minus}`;
document.getElementById("exercise-1").appendChild(node);

console.log(`multiply = ${multiply}`);
node = document.createElement("li");
node.innerText = `multiply = ${multiply}`;
document.getElementById("exercise-1").appendChild(node);

console.log(`dividing = ${dividing}`);
node = document.createElement("li");
node.innerText = `dividing = ${dividing}`;
document.getElementById("exercise-1").appendChild(node);
// Exercise 2
/*
1. Use the following code to answer the questions below:

```
let a = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";
```

- What is the value of: a + str?
- What is the value of: a + str2?
- What is the value of: a + isPresent?
- What is the value of: a + firstName?
- What is the value of: a + lastName?

Use the code above to test and print the results.
console.log("EXERCISE 2:\n==========\n");
*/
// YOUR CODE HERE
let c = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";
console.log("EXERCISE 2:\n==========\n");
console.log(`c + str = ${c + str}`);
node = document.createElement("li");
node.innerText = `c + str = ${c + str}`;
document.getElementById("exercise-2").appendChild(node);

console.log(`c + str2 = ${c + str2}`);
node = document.createElement("li");
node.innerText = `c + str2 = ${c + str2}`;
document.getElementById("exercise-2").appendChild(node);

console.log(`c + isPresent = ${c + isPresent}`);
node = document.createElement("li");
node.innerText = `c + isPresent = ${c + isPresent}`;
document.getElementById("exercise-2").appendChild(node);

console.log(`c + firstName = ${c + firstName}`);
node = document.createElement("li");
node.innerText = `c + firstName = ${c + firstName}`;
document.getElementById("exercise-2").appendChild(node);

console.log(`c + lastName = ${c + lastName}`);
node = document.createElement("li");
node.innerText = `c + lastName = ${c + lastName}`;
document.getElementById("exercise-2").appendChild(node);

// Exercise 3
/*
let a = 5;
let str = "5";
let str2 = "five";
let isPresent = false;
let firstName = "Robin";
let lastName = "Williams";

- What is the value of: a == str?
- What is the value of: a === str?
- What is the value of: !isPresent?
- What is the value of: (“eleven” == str2 && a >= str)?
- What is the value of: (!isPresent || isPresent)?
- What is the value of: 0 == false?
- What is the value of: 0 === false?
- What is the value of: 0 != false?
- What is the value of 0 !== false?

Use the code above to test and print the results.
*/
let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

console.log("EXERCISE 3:\n==========\n");
console.log(`d == str3 = ${d == str3}`);
node = document.createElement("li");
node.innerText = `d == str3 = ${d == str3}`;
document.getElementById("exercise-3").appendChild(node);

console.log(`d === str3 = ${d === str3}`);
node = document.createElement("li");
node.innerText = `d === str3 = ${d === str3}`;
document.getElementById("exercise-3").appendChild(node);

console.log(`!isPresent2 = ${!isPresent2}`);
node = document.createElement("li");
node.innerText = `!isPresent2 = ${!isPresent2}`;
document.getElementById("exercise-3").appendChild(node);

console.log(`eleven == str4 && d >= str3 = ${"eleven" == str4 && d >= str3}`);
node = document.createElement("li");
node.innerText = `eleven == str4 && d >= str3 = ${"eleven" == str4 && d >= str3}`;
document.getElementById("exercise-3").appendChild(node);

console.log(`!isPresent || isPresent = ${!isPresent || isPresent}`);
node = document.createElement("li");
node.innerText = `!isPresent || isPresent = ${!isPresent || isPresent}`;
document.getElementById("exercise-3").appendChild(node);
// YOUR CODE HERE
