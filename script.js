const getCity = async (value) => {
    const city = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value}?key=WCCWTNTGY4RXDEBU72MEBBS2E`)
    const cityData = await city.json();
    console.log(cityData);
    console.log(cityData.resolvedAddress);
    console.log(cityData.days[0]);
    console.log("Min temperature: " + cityData.days[0].tempmin);
    console.log("Max temperature: " + cityData.days[0].tempmax);    
}

//getCity();

const searchBtn = document.querySelector("#search");
const searchBar = document.querySelector("#searchBar")
const form = document.querySelector("#form")


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log(searchBar.value);    
    getCity(searchBar.value);
})
