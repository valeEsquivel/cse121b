let urlWizards = `https://wizard-world-api.herokuapp.com/Wizards`;
let urlByNames = `https://wizard-world-api.herokuapp.com/Wizards?`;
const wizardSelect = document.querySelector("#wizardSelect");
const searchPotions = document.querySelector("#searchPotions");
const cardsW = document.querySelector("#cardsW");

let wizardArray = [];

const fetchAllWizards = async () => {
    try {
        const response = await fetch(urlWizards);
        const wizardResponse = await response.json();
        wizardArray = wizardResponse;
        loadSelect(wizardResponse);
    } catch (error) {
        console.log(error);
    }
};

function loadSelect(wizards) {
    wizards.forEach((wizard) => {
        wizardSelect.innerHTML += `
        <option value="${wizard.id}">${wizard.firstName || ''} ${wizard.lastName || ''}</option>
        `;
    });
}

fetchAllWizards();

const fetchWizards = async () => {
    try {
        let wizardSelected = wizardArray.find((wizard) => wizard.id == wizardSelect.value);
        let complementaryUrl = '';

        if (wizardSelected.firstName && wizardSelected.lastName) {
            complementaryUrl += `FirstName=${wizardSelected.firstName}&LastName=${wizardSelected.lastName}`;
        } else if (wizardSelected.lastName && !wizardSelected.firstName) {
            complementaryUrl += `LastName=${wizardSelected.lastName}`;
        } else if (wizardSelected.firstName && !wizardSelected.lastName) {
            complementaryUrl += `FirstName=${wizardSelected.firstName}`;
        }

        const response = await fetch(urlByNames + complementaryUrl);
        const wizards = await response.json();
        console.log(wizards);
        displayResults(wizards[0]);
    } catch (error) {
        console.log(error);
    }
}

const displayResults = (wizards) => {
    console.log("🚀 ~ file: wizards.js:53 ~ displayResults ~ wizards:", wizards)
    let section = document.createElement('section');
    section.classList.add('wizardsContainer');

    let h3 = document.createElement('h3');
    h3.textContent = `${wizards.firstName || ''} ${wizards.lastName || ''}`;

    let ul = document.createElement('ul');

    wizards.elixirs.forEach((elixir) => {
        let li = document.createElement('li');
        li.textContent = elixir.name;
        ul.appendChild(li);
    });

    section.appendChild(h3);
    section.appendChild(ul);

    cardsW.innerHTML = "";
    cardsW.appendChild(section);
}

searchPotions.addEventListener("click", fetchWizards);