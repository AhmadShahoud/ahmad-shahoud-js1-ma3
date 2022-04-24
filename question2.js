const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=a0f69048ca844bdb85da9a97656a03e0";

const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
    const response = await fetch(url)

    const data = await response.json()
    console.log(data)
    
    resultsContainer.innerHTML ="";
    
    for (let i = 0; i <data.length; i++) {
        console.log(data[i].name)
    }

    resultsContainer.innerHTML += `<div class="result">$data[i].name<div>`
}
makeApiCall ();