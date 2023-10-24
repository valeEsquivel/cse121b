let url = `https://wizard-world-api.herokuapp.com/Elixirs`;
const difficulty = document.querySelector("#difficulty");
const searchElixirs = document.querySelector("#searchElixirs");
const cardsE = document.querySelector("#cardsE");

// Function to fetch elixirs from the API
const fetchElixirs = async () => {
    try {
        if (difficulty.value) {
            url = `https://wizard-world-api.herokuapp.com/Elixirs?Difficulty=${difficulty.value}`;
        }
        const response = await fetch(url);
        const elixirs = await response.json();
        displayElixirs(elixirs);
    } catch (error) {
        console.log(error);
    }
};

// Function to display elixirs on the page
const displayElixirs = (elixirs) => {
    cardsE.innerHTML = "";
    elixirs.forEach((elixir) => {
        cardsE.innerHTML += `
    <section class="elixirsContainer">
      <h3>${elixir.name}</h3>
      <p><b>Effect:</b> ${elixir.effect || ''}</p>
      <p><b>Characteristics:</b> ${elixir.characteristics || ''}</p>
      <p><b>Difficulty:</b> ${elixir.difficulty || ''}</p>
      <p><b>Ingredients:</b> ${elixir.ingredients.map(e => { return e.name })}</p>
    </section>
    `;
    });
};

// cuando se de click en boton
searchElixirs.addEventListener("click", fetchElixirs);
