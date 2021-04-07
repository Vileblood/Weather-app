const key = 'erre40qi1rBIYRE3sd66TlPz7JXTx8JB'; // API key for accuweather

// get weather info
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

// get city info
const getCity = async (city) => { // take city as a parameter so when we invoke it we can output it as a variable

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`; // the q means we are adding query parameters to the end of the URL. i used a template strinbg to get the api key

    const response = await fetch(base + query); // the code will wait here until the promise above is resolved and then fetch the combo of base and query. need to turn this data into json
    const data = await response.json(); //json returns a promise again so we need an await then i am using the json method on response. hands resolved data to data const

    return data[0]; //this will get me the first match without finding all
};



