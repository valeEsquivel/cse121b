// copyright year
document.querySelector('#year').textContent = new Date().getFullYear();

// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

const url = `https://wizard-world-api.herokuapp.com/Houses`
const descriptionG = document.querySelector('#descriptionG')
const descriptionS = document.querySelector('#descriptionS')
const descriptionR = document.querySelector('#descriptionR')
const descriptionH = document.querySelector('#descriptionH')

const fetchHouses = async () => {
    try {
        const response = await fetch(url)
        const houses = await response.json()
        displayResults(houses)
    } catch (error) {
        console.log(error)
    }
}

const displayResults = (houses) => {
    descriptionG.innerHTML = ''
    descriptionS.innerHTML = ''
    descriptionR.innerHTML = ''
    descriptionH.innerHTML = ''
    houses.forEach((house) => {
        if (house.name === 'Gryffindor') {
            descriptionG.innerHTML += `
            <p><b>Colors:</b> ${house.houseColours}</p>
            <p><b>Animal:</b> ${house.animal}</p>
            <p><b>Founder:</b> ${house.founder}</p>
            <p><b>Element:</b> ${house.element}</p>
            <p><b>Location:</b> ${house.commonRoom}</p>
            <p><b>Ghost:</b> ${house.ghost}</p>
            `
            // recorrer house.traits y mostrarlos en una lista
            descriptionG.innerHTML += `
            <p><b>Traits:</b></p>
            <ul>
            `
            house.traits.forEach((trait) => {
                descriptionG.innerHTML += `
                <li>${trait.name}</li>
                `
            })

            descriptionG.innerHTML += `
            </ul>
            `
        } else if (house.name === 'Slytherin') {
            descriptionS.innerHTML += `
            <p><b>Colors:</b> ${house.houseColours}</p>
            <p><b>Animal:</b> ${house.animal}</p>
            <p><b>Founder:</b> ${house.founder}</p>
            <p><b>Element:</b> ${house.element}</p>
            <p><b>Location:</b> ${house.commonRoom}</p>
            <p><b>Ghost:</b> ${house.ghost}</p>
            `

            descriptionS.innerHTML += `
            <p><b>Traits:</b></p>
            <ul>
            `
            house.traits.forEach((trait) => {
                descriptionS.innerHTML += `
                <li>${trait.name}</li>
                `
            })

            descriptionS.innerHTML += `
            </ul>
            `
        } else if (house.name === 'Ravenclaw') {
            descriptionR.innerHTML += `
            <p><b>Colors:</b> ${house.houseColours}</p>
            <p><b>Animal:</b> ${house.animal}</p>
            <p><b>Founder:</b> ${house.founder}</p>
            <p><b>Element:</b> ${house.element}</p>
            <p><b>Location:</b> ${house.commonRoom}</p>
            <p><b>Ghost:</b> ${house.ghost}</p>
            `

            descriptionR.innerHTML += `
            <p><b>Traits:</b></p>
            <ul>
            `
            house.traits.forEach((trait) => {
                descriptionR.innerHTML += `
                <li>${trait.name}</li>
                `
            })

            descriptionR.innerHTML += `
            </ul>
            `
        } else if (house.name === 'Hufflepuff') {
            descriptionH.innerHTML += `
            <p><b>Colors:</b> ${house.houseColours}</p>
            <p><b>Animal:</b> ${house.animal}</p>
            <p><b>Founder:</b> ${house.founder}</p>
            <p><b>Element:</b> ${house.element}</p>
            <p><b>Location:</b> ${house.commonRoom}</p>
            <p><b>Ghost:</b> ${house.ghost}</p>
            `

            descriptionH.innerHTML += `
            <p><b>Traits:</b></p>
            <ul>
            `
            house.traits.forEach((trait) => {
                descriptionH.innerHTML += `
                <li>${trait.name}</li>
                `
            })

            descriptionH.innerHTML += `
            </ul>
            `
        }
    })
}

fetchHouses()