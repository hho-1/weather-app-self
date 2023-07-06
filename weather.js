

const units = "metric";
const lang = "tr";

const apiKey = "bd8e3bbf55023bdcc67f450daf3c314a"

let citiesListed = []


const getWeatherData = () => {
    
    document.querySelector("button").onclick = () => {
        
        const cityName = document.querySelector("input").value.toLowerCase()

        if(citiesListed.includes(cityName)){
            document.querySelector(".warning").innerHTML = `${cityName.toUpperCase()} is already listed below ☺️. Enter another city!`
        }
        else{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`)
            .then((res) => res.json())
            .then((data) => printToScreen(data))

            citiesListed.push(cityName)
            document.querySelector(".warning").innerHTML = ""
        }

        document.querySelector("input").value = ""

    }
}

getWeatherData()

const printToScreen = (veri) => {
    
    console.log(veri);
    
    const iconUrl = `http://openweathermap.org/img/wn/${veri.weather[0].icon}@4x.png`

    document.querySelector(".row").innerHTML += `
    
    <div class="col col-sm-6 col-md-4 col-lg-3 col-xl-2 g-4">
        <div class="card shadow-lg">
          <div class="card-header fs-4">
            ${veri.name} <sup class="bg-warning rounded px-1">${veri.sys.country}</sup>
          </div>
          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item h1 display-3">${Math.trunc(veri.main.temp)}<sup class="fs-4 display-6">℃</sup></li>
            <li class="list-group-item d-flex justify-content-center"><img src = ${iconUrl}></li>
            <li class="list-group-item">${veri.weather[0].description}</li>
          </ul>
        </div>
      </div>
    
    `
}

document.querySelector("input").addEventListener("keypress", function(event) {
  
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector("button").click();
    }
});


//Local Storage

/* function saveToLocalStorage(newCity){
    let cities;

    if(localStorage.getItem('cities') === null){
        cities = []
    }
    else{
        cities = JSON.parse(localStorage.getItem('cities'))
    }

    cities.push(newCity)
    localStorage.setItem('cities', JSON.stringify(cities))
}

function ReadFromLocalStorage(){
    let cities;

    if(localStorage.getItem('cities') === null){
        cities = []
    }
    else{
        cities = JSON.parse(localStorage.getItem('cities'))
    }

    cities.forEach((city) => {
        getWeatherData(city)
    })
} */




