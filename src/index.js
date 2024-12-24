import WeatherAPI from "./WeatherAPI";

const SearchForm = document.querySelector(".searchform");

SearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const SearchTerm = document.querySelector("#searchbox").value;
    console.log(SearchTerm);
    SearchWeather(SearchTerm);
    document.querySelector("#searchbox").value = "";
})

const location = document.querySelector(".location");
const description = document.querySelector(".description");
const temp = document.querySelector(".temp");

async function SearchWeather(city) {
    try{
        const weatherData = await WeatherAPI.GetData(city);
        console.log(weatherData);
        DisplayInfo(weatherData);
    }
    catch{
        console.error("Error Fetching Data!");
        DisplayError();
    }
}

function DisplayInfo(weatherData){
        location.textContent = weatherData.location;
        description.textContent = weatherData.description;
        temp.textContent = weatherData.temperature + '°F';
}

function DisplayError(){
    location.textContent = "City Not Found!"
    description.textContent = "";
    temp.textContent = "";
}