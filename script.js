const getCity = async (city) => {
    await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=WCCWTNTGY4RXDEBU72MEBBS2E`)
        .then(function(r){
            console.log(r.json())
            //console.log(r.json().days)
        })
        .catch(function(e){
            console.log(e)
        })
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