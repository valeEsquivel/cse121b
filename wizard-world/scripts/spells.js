let url = `https://wizard-world-api.herokuapp.com/Spells`;
const type = document.querySelector("#type");
const searchSpells = document.querySelector("#searchSpells");
const cardsS = document.querySelector("#cardsS");

const fetchSpells = async () => {
    try {
        if (type.value) {
            url = `https://wizard-world-api.herokuapp.com/Spells?Type=${type.value}`;
        }
        const response = await fetch(url);
        const spells = await response.json();
        displayResults(spells);
    } catch (error) {
        console.log(error);
    }
};

const displayResults = (spells) => {
    cardsS.innerHTML = "";
    spells.forEach((spell) => {
        cardsS.innerHTML += `
    <section class="spellsContainer">
      <h3>${spell.name}</h3>
      <p><b>Incantation:</b> ${spell.incantation || ''}</p>
      <p><b>Effect:</b> ${spell.effect || ''}</p>
      <p><b>Type:</b> ${spell.type || ''}</p>
      <p><b>Light:</b> ${spell.light || ''}</p>
    </section>
    `;
    });
};

// cuando se de click en boton
searchSpells.addEventListener("click", fetchSpells);
