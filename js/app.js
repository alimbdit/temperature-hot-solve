
// Do not share api key with others
const API_KEY = `f21a5ab177105118b058ae9bf1fb9539`;

const loadTemperature = city => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(URL).then(res => res.json()).then(data => displayTemperature(data))
}

const displayTemperature = data => {
    console.log(data);

    setTextById('temperature', data.main.temp);
    setTextById('city-name', data.name);
    setTextById('condition', data.weather[0].main);
    


    

}

const setTextById = (id, text) => {
     document.getElementById(id).innerText = text;
   
}

const searchBtn = document.getElementById('search-btn').addEventListener('click', function(){
    const searchText = document.getElementById('search-text').value;
    loadTemperature(searchText);
    
});

loadTemperature('dhaka');
