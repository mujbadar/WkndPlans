console.log('Hello');
console.log($);

/////////////
//API Vaiables
////////////

// Zip code input for both API calls
let cityCode = '75034'

// Variables for weather API
const baseWeatherURL = 'https://api.openweathermap.org/data/2.5/forecast?zip='
const apiWeatherKey = '&appid=ea88b0227f0e326c371545da29d5c540'
let weatherURL = baseWeatherURL + cityCode + apiWeatherKey + '&units=imperial'

console.log(weatherURL);

//Variables for event api
const baseEventURL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const apiEventKey = 'apikey=VpjGo4Q2pHG4BhxfhbmP4bCct9xSOGjf'
let eventURL = baseEventURL + apiEventKey + '&postalCode=' + cityCode

console.log(eventURL);

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
    url: eventURL,
    async:true,
    dataType: "json",
    success: function(json) {
              console.log(json);
              $('.event-1').html(`
                <h2> ${json._embedded.events[0].name}  </h2>
                <h2> ${json._embedded.events[0].type}  </h2>
                <h2> ${json._embedded.events[0].images[0].url}  </h2>
           `),$('.event-2').html(`
             <h2> ${json._embedded.events[1].name}  </h2>
             <h2> ${json._embedded.events[1].type}  </h2>
             <h2> ${json._embedded.events[1].images[0].url}  </h2>
          `),$('.event-3').html(`
            <h2> ${json._embedded.events[3].name}  </h2>
            <h2> ${json._embedded.events[3].type}  </h2>
            <h2> ${json._embedded.events[3].images[0].url}  </h2>
     `)
         },
          error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});
}

$(() => {

//////////////
// Event Listener
/////////////////

// Zip code input
  $('#submit').on('click', (event) => {
    event.preventDefault()
    cityCode = $('#text-box').val()
    getWeather();
    getEvent();
  })

})
