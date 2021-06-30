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
{
  let a = 20;
  let b = 4;
  let add = a + b;
  let minus = a - b;
  let multiply = a * b;
  let dividing = a / b;
  console.log("EXERCISE 1:\n==========\n");

  let node = document.createElement("li");
  node.innerText = `Let a = ${a}, b = ${b}`;
  document.getElementById("exercise-1").appendChild(node);

  console.log(`add (a + b) = ${add}`);
  node = document.createElement("li");
  node.innerText = `add (a + b) = ${add}`;
  document.getElementById("exercise-1").appendChild(node);

  console.log(`minus (a - b) = ${minus}`);
  node = document.createElement("li");
  node.innerText = `minus (a - b) = ${minus}`;
  document.getElementById("exercise-1").appendChild(node);

  console.log(`multiply (a * b) = ${multiply}`);
  node = document.createElement("li");
  node.innerText = `multiply (a * b) = ${multiply}`;
  document.getElementById("exercise-1").appendChild(node);

  console.log(`dividing (a / b) = ${dividing}`);
  node = document.createElement("li");
  node.innerText = `dividing (a / b) = ${dividing}`;
  document.getElementById("exercise-1").appendChild(node);
}
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
{
  let a = 11;
  let str = "11";
  let str2 = "eleven";
  let isPresent = true;
  let firstName = "Jackie";
  let lastName = "Chan";

  console.log("EXERCISE 2:\n==========\n");

  let node = document.createElement("li");
  node.innerText = `Let a = ${a}, str = "${str}", str2 = ${str2}, isPresent = ${isPresent}, firstName = ${firstName}, lastName = ${lastName}`;
  document.getElementById("exercise-2").appendChild(node);

  console.log(`(a + str) = ${a + str}`);
  node = document.createElement("li");
  node.innerText = `(a + str) = ${a + str}`;
  document.getElementById("exercise-2").appendChild(node);

  console.log(`(a + str2) = ${a + str2}`);
  node = document.createElement("li");
  node.innerText = `(a + str2) = ${a + str2}`;
  document.getElementById("exercise-2").appendChild(node);

  console.log(`(a + isPresent) = ${a + isPresent}`);
  node = document.createElement("li");
  node.innerText = `(a + isPresent) = ${a + isPresent}`;
  document.getElementById("exercise-2").appendChild(node);

  console.log(`(a + firstName) = ${a + firstName}`);
  node = document.createElement("li");
  node.innerText = `(a + firstName) = ${a + firstName}`;
  document.getElementById("exercise-2").appendChild(node);

  console.log(`(a + lastName) = ${a + lastName}`);
  node = document.createElement("li");
  node.innerText = `(a + lastName) = ${a + lastName}`;
  document.getElementById("exercise-2").appendChild(node);
}
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
// YOUR CODE HERE
{
  let a = 5;
  let str = "5";
  let str2 = "five";
  let isPresent = false;
  let firstName = "Robin";
  let lastName = "Williams";

  console.log("EXERCISE 3:\n==========\n");

  let node = document.createElement("li");
  node.innerText = `Let a = ${a}, str = "${str}", str2 = ${str2}, isPresent = ${isPresent}, firstName = ${firstName}, lastName = ${lastName}`
  document.getElementById("exercise-3").appendChild(node);

  console.log(`(a == str) = ${a == str}`);
  node = document.createElement("li");
  node.innerText = `(a == str) = ${a == str}`;
  document.getElementById("exercise-3").appendChild(node);

  console.log(`(a === str) = ${a === str}`);
  node = document.createElement("li");
  node.innerText = `(a === str) = ${a === str}`;
  document.getElementById("exercise-3").appendChild(node);

  console.log(`(!isPresent) = ${!isPresent}`);
  node = document.createElement("li");
  node.innerText = `(!isPresent) = ${!isPresent}`;
  document.getElementById("exercise-3").appendChild(node);

  console.log(`(eleven == str2 && a >= str) = ${"eleven" == str2 && a >= str}`);
  node = document.createElement("li");
  node.innerText = `(eleven == str2 && a >= str) = ${"eleven" == str2 && a >= str}`;
  document.getElementById("exercise-3").appendChild(node);

  console.log(`(!isPresent || isPresent) = ${!isPresent || isPresent}`);
  node = document.createElement("li");
  node.innerText = `(!isPresent || isPresent) = ${!isPresent || isPresent}`;
  document.getElementById("exercise-3").appendChild(node);

  console.log(`(0 == false) = ${0 == false}`);
  node = document.createElement("li");
  node.innerText = `(0 == false) = ${0 == false}`;
  document.getElementById("exercise-3").appendChild(node);

  console.log(`(0 === false) = ${0 === false}`);
  node = document.createElement("li");
  node.innerText = `(0 === false) = ${0 === false}`;
  document.getElementById("exercise-3").appendChild(node);

- console.log(`(0 != false) = ${0 != false}`);
  node = document.createElement("li");
  node.innerText = `(0 != false) = ${0 != false}` 
  document.getElementById("exercise-3").appendChild(node);

- console.log(`(0 !== false) = ${0 !== false}`);
  node = document.createElement("li");
  node.innerText = `(0 !== false) = ${0 !== false}`;
  document.getElementById("exercise-3").appendChild(node);
}
