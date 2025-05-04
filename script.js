const getCity = async (value) => {
    const city = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value}?key=WCCWTNTGY4RXDEBU72MEBBS2E`)
    const cityData = await city.json();
    console.log(cityData);
    console.log(cityData.resolvedAddress);
        
}

//getCity();

() => {
    console.log("dog");
}

const searchBtn = document.querySelector("#search");
const searchBar = document.querySelector("#searchBar")

searchBtn.addEventListener("click", () => {
    getCity(searchBar.value);
})