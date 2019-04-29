console.log('Hello');
console.log($);

/////////////
//API Vaiables
////////////

// Variables for weather API
const baseWeatherURL = 'https://api.openweathermap.org/data/2.5/forecast?zip='
const apiWeatherKey = '&appid=ea88b0227f0e326c371545da29d5c540'
let cityCode = '75034'
let weatherURL = baseWeatherURL + cityCode + apiWeatherKey + '&units=imperial'

console.log(weatherURL);

//Variables for event api
const baseEventURL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const apiEventKey = 'apikey=VpjGo4Q2pHG4BhxfhbmP4bCct9xSOGjf'


///////////////////
// API calls functions
///////////////////////////////

// Weather API
//////////////

// 5-Day forecast. Use the inputed Zip code to make an API call returning city
// name, date, temp, and current weather conditions.
// The daily 9am forecast is accessed and appended to 'cards' for DOM.
const getWeather = () => {
  $.ajax({
    url : weatherURL
  }).then((weatherData) => {
    console.log(weatherData);
    $('.weather-card1').html(`
      <h2> ${weatherData.city.name}  </h2>
      <h2> ${weatherData.list[0].dt_txt}  </h2>
      <h2> ${weatherData.list[0].main.temp}F  </h2>
      <h2> ${weatherData.list[0].weather[0].description}  </h2>
      <h2> ${weatherData.list[0].weather[0].icon}  </h2>
      `).addClass('weatherClass')
    $('.weather-card2').html(`
      <h2> ${weatherData.city.name}  </h2>
      <h2> ${weatherData.list[8].dt_txt}  </h2>
      <h2> ${weatherData.list[8].main.temp}F  </h2>
      <h2> ${weatherData.list[8].weather[0].description}  </h2>
      <h2> ${weatherData.list[8].weather[0].icon}  </h2>
      `).addClass('weatherClass')
    $('.weather-card3').html(`
      <h2> ${weatherData.city.name}  </h2>
      <h2> ${weatherData.list[16].dt_txt}  </h2>
      <h2> ${weatherData.list[16].main.temp}F  </h2>
      <h2> ${weatherData.list[16].weather[0].description}  </h2>
      <h2> ${weatherData.list[16].weather[0].icon}  </h2>
      `).addClass('weatherClass')
    $('.weather-card4').html(`
      <h2> ${weatherData.city.name}  </h2>
      <h2> ${weatherData.list[24].dt_txt}  </h2>
      <h2> ${weatherData.list[24].main.temp}F  </h2>
      <h2> ${weatherData.list[24].weather[0].description}  </h2>
      <h2> ${weatherData.list[24].weather[0].icon}  </h2>
      `).addClass('weatherClass')
    $('.weather-card5').html(`
      <h2> ${weatherData.city.name}  </h2>
      <h2> ${weatherData.list[32].dt_txt}  </h2>
      <h2> ${weatherData.list[32].main.temp}F  </h2>
      <h2> ${weatherData.list[32].weather[0].description}  </h2>
      <h2> ${weatherData.list[32].weather[0].icon}  </h2>
      `).addClass('weatherClass')
  })
}

// TicketMaster API
////////////////
const getEvent = () => {
  $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/classifications/KZFzniwnSyZfZ7v7nE.json?apikey=VpjGo4Q2pHG4BhxfhbmP4bCct9xSOGjf",
    async:true,
    dataType: "json",
    success: function(json) {
              console.log(json);
              $('.event').html(`
                <h2> ${json.events}  </h2>
           `)},
          error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});
}

$(() => {
/
//////////////
// Event Listener
/////////////////

// Zip code input
  $('#submit').on('click', (event) => {
    event.preventDefault()
    $('#text-box').val()
    getWeather();
  })

})
