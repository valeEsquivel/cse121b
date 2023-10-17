const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;


async function getPokemon(url, doThis) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doThis(data);
    }
}

function doStuff(data) {
    results = data;
    console.log("first: ", results);
    let output = document.querySelector("#output");

    const html = `<h2>${results.name}</h2>
    <img src="${results.sprites.front_default}" alt="Image of ${results.name}" />`;

    output.innerHTML = html;
}

function doStuffList(data) {
    console.log('dataList', data);
    let pokeList = data.results;
    let outputList = document.querySelector("#outputList");

    pokeList = sortPokemon(pokeList);

    pokeList.forEach(pokemon => {
        const html = `<li>${pokemon.name}</li>`;
        outputList.innerHTML += html;
    });
}

getPokemon(url, doStuff);
console.log("second: ", results);

getPokemon(urlList, doStuffList);

function sortPokemon(list) {
    let sortedList = list.sort(compare);
    console.log(list);
    return sortedList;
}

function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    else if (a.name > b.name) {
        return 1;
    }
    else {
        return 0;
    }
}