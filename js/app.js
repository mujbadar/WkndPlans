console.log('Hello');
console.log($);

/////////////
//API Vaiables
////////////

// Variables for weather API
const baseWeatherURL = 'https://api.openweathermap.org/data/2.5/forecast?'
const apiWeatherKey = 'appid=ea88b0227f0e326c371545da29d5c540'
let cityCode = '75034'
let weatherURL = baseWeatherURL + 'zip=' + cityCode +  '&' + apiWeatherKey

console.log(weatherURL);

//Variables for event api
const baseEventURL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const apiEventKey = 'apikey=VpjGo4Q2pHG4BhxfhbmP4bCct9xSOGjf'


///////////////////
// API calls functions
///////////////////////////////

// Weather API
//////////////

// Use the inputed Zip code to make an API call returning city name, temp,
// and current weather conditions.
const getWeather = () => {
  $.ajax({
    url : weatherURL
  }).then((weatherData) => {
    console.log(weatherData);
    $('.weather').html(`
      <h2> ${weatherData.city.name}  </h2>
      <h2> ${weatherData.list}  </h2>
      `)
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

// Event Listener
  $('form').on('submit', (event) => {
    event.preventDefault()
    cityCode = $('input[type="text"]').val()
    getWeather();
  })

})
