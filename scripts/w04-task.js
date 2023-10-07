/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Valeria Esquivel',
    photo: "images/me.jpeg",
    favoriteFoods: ["Tacos", "Pizza", "Pasta", "Pupusas"],
    hobbies: ["Reading", "Listening to music", "Singing", "Watching Movies", "Dancing"],
    placesLives: []
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLives.push({
    place: "Sonsonate, El Salvador",
    length: "24 years"
});

/* DOM Manipulation - Output */
/* Name */
let nameInput = document.querySelector("#name");
nameInput.textContent = myProfile.name;

/* Photo with attributes */
let photoInput = document.querySelector("#photo");
photoInput.setAttribute("src", myProfile.photo);
photoInput.setAttribute("alt", `Profile Image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLives.forEach(element => {
    // añadir element.place a dt y element.length a dd
    let dt = document.createElement("dt");
    dt.textContent = element.place;
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = element.length;
    document.querySelector("#places-lived").appendChild(dd);



});