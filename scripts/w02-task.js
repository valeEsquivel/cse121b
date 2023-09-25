/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Valeria Esquivel";
let currentYear = 2023;
let profilePicture = "images/me.jpeg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile Image of ${fullName}`);

/* Step 5 - Array */
let foodArray = ["Tacos", "Pizza", "Pasta", "Pupusas"];
// mostrar el array en foodElement
foodElement.innerHTML = foodArray;

let foodExtra = "Burritos";

foodArray.push(foodExtra);
foodElement.innerHTML += `<br>${foodArray}`;

foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`;

foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;