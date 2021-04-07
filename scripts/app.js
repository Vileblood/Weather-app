const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    const cityDets = data.cityDets;
    const weather = data.weather;

    //update details template

    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>
    `;

    // update night/day and icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    

    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src', timeSrc);
    // remove the d-none class if present

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

const updateCity = async (city) => { // 6. then we take in the city

    const cityDets = await getCity(city); // 7. then we get the city and store it in city details
    const weather = await getWeather(cityDets.Key); // 8. then i use getWeather and we pass in the key. store response in weather

    return {
        cityDets, // 9. then we return 2 objects: one for the city details and one for the weather
        weather
    };


};

cityForm.addEventListener('submit', e => { // 1. when we hear a submit event
    // 2. prevent default action
    e.preventDefault();
    
    // get city value
    const city = cityForm.city.value.trim(); // 3. gets city value and trims any white space around the word
    cityForm.reset() // 4. then resets form

    //update the ui with new city
    updateCity(city) // 5. then call update city with the city the user enters
    .then(data => updateUI(data)) // 10. then we return that data and log it to console
    .catch(err => console.log(err));

    // set local storage
    localStorage.setItem('city', city);
});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err))
}