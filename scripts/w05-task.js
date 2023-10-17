/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function*/
const displayTemples = async (list) => {
    list.forEach((temple) => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = temple.location;
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    const temples = await response.json();
    templeList = temples;
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}


/* sortBy Function */
function sortBy(temples) {
    reset();

    const filter = document.querySelector('#sortBy').value;
    console.log("🚀 ~ file: w05-task.js:41 ~ sortBy ~ filter:", filter)

    switch (filter) {
        case 'utah':
            // Use the filter() method to create a new array of temples that are in Utah
            const utahTemples = temples.filter((temple) => {
                return temple.location.includes('Utah');
            });
            displayTemples(utahTemples);
            break;

        case 'notutah':
            // Use the filter() method to create a new array of temples that are not in Utah
            const notUtahTemples = temples.filter((temple) => {
                return !temple.location.includes('Utah');
            });
            displayTemples(notUtahTemples);
            break;

        case 'older':
            // include the temples that include in temple.dedicated less than 1950
            const olderTemples = temples.filter((temple) => {
                const year = temple.dedicated.split(',')[0];
                return year < 1950;
            });

            displayTemples(olderTemples);
            break;

        case 'all':
            // Display all temples
            displayTemples(temples);
            break;

        default:
            console.log('Invalid filter value');
            break;
    }
}


getTemples();

document.querySelector('#sortBy').addEventListener('change', () => { sortBy(templeList) });

/* Event Listener */
