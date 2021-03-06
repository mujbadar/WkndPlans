/////////////
//API Vaiables
////////////

// User input Zip. This is used for both api's
let cityCode = ''

// Variables for weather api
const baseWeatherURL = 'https://api.openweathermap.org/data/2.5/forecast?zip='
const apiWeatherKey = '&appid=ea88b0227f0e326c371545da29d5c540'


//Variables for event api
const baseEventURL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const apiEventKey = 'apikey=VpjGo4Q2pHG4BhxfhbmP4bCct9xSOGjf'
let eventURL = baseEventURL + apiEventKey + '&postalCode='

/////////////
// Event handlers
///////////////////

// Zip code input for both api calls
$('#submit').on('click', (event) => {
  event.preventDefault()
  cityCode = $('#text-box').val()
  console.log(cityCode);
  $('.weather-results').show();
  $('.event-results').show();
  getWeather();
  getEvent();
});

console.log(cityCode);

//////////
// External Plugins
/////////////

// Carousel external plugin. Swiper plugin
const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

////////////
// App Preloader
///////////////

// Hide the body elements of the app until user inputs zip
$('.weather-results').hide();
$('.event-results').hide();

///////////////////
// Functions for AJAX
////////////////////////

// Weather API
//////////////

// 5-Day forecast. Use the inputed Zip code to make an API call returning city
// name, date, temp, current weather conditions, and weather icon.
// The daily forecast is accessed and appended to 'cards' for DOM.
const getWeather = () => {
  $.ajax({
    url : baseWeatherURL + cityCode + apiWeatherKey + '&units=imperial'
  }).then((weatherData) => {
    console.log(weatherData);
    $('#weather-card1').html(`
      <h2> ${weatherData.city.name}</h2>
      <h3> Date/Time: ${weatherData.list[0].dt_txt}</h3>
      <h5> Temp: ${weatherData.list[0].main.temp}°F</h5>
      <h5> Weather Conditions: ${weatherData.list[0].weather[0].description}</h5>
      <img src='http://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png' alt="Weather Icon">
      `)
    $('#weather-card2').html(`
      <h2> ${weatherData.city.name}</h2>
      <h3> Date/Time: ${weatherData.list[8].dt_txt}</h3>
      <h5> Temp: ${weatherData.list[8].main.temp}°F</h5>
      <h5> Weather Conditions: ${weatherData.list[8].weather[0].description}</h5>
      <img src='http://openweathermap.org/img/w/${weatherData.list[8].weather[0].icon}.png' alt="Weather Icon">
      `)
    $('#weather-card3').html(`
      <h2> ${weatherData.city.name}</h2>
      <h3> Date/Time: ${weatherData.list[16].dt_txt}  </h3>
      <h5> Temp: ${weatherData.list[16].main.temp}°F  </h5>
      <h5> Weather Conditions: ${weatherData.list[16].weather[0].description}</h5>
      <img src='http://openweathermap.org/img/w/${weatherData.list[16].weather[0].icon}.png' alt="Weather Icon">
      `)
    $('#weather-card4').html(`
      <h2> ${weatherData.city.name}</h2>
      <h3> Date/Time: ${weatherData.list[24].dt_txt}</h3>
      <h5> Temp: ${weatherData.list[24].main.temp}°F</h5>
      <h5> Weather Conditions: ${weatherData.list[24].weather[0].description}</h5>
      <img src='http://openweathermap.org/img/w/${weatherData.list[24].weather[0].icon}.png' alt="Weather Icon">
      `)
    $('#weather-card5').html(`
      <h2> ${weatherData.city.name}</h2>
      <h3> Date/Time: ${weatherData.list[32].dt_txt}</h3>
      <h5> Temp: ${weatherData.list[32].main.temp}°F</h5>
      <h5> Weather Conditions: ${weatherData.list[32].weather[0].description}</h5>
      <img src='http://openweathermap.org/img/w/${weatherData.list[32].weather[0].icon}.png' alt="Weather Icon">
      `)

  })

}

// TicketMaster API
////////////////

// Get 10 of the most recent local events. Display event name, genre, event type,
// date, location, and event image.
// The events are retrieved and appended to DOM.
const getEvent = () => {
  $.ajax({
    type:"GET",
    url: eventURL + cityCode,
    async:true,
    dataType: "json",
    success: function(json) {
              console.log(json);
              $('#event-1').html(`
                <h2> ${json._embedded.events[0].name}</h2>
                <h4> Genre: ${json._embedded.events[0].classifications[0].segment.name}</h4>
                <h4> Event type: ${json._embedded.events[0].classifications[0].genre.name}</h4>
                <h4> Date: ${json._embedded.events[0].dates.start.localDate}<h4>
                <h4> Venue: ${json._embedded.events[0]._embedded.venues[0].name}<h4>
                <img src= '${json._embedded.events[0].images[0].url}' alt="Event Banner">
              `)
              $('#event-2').html(`
                <h2> ${json._embedded.events[1].name}</h2>
                <h4> Genre: ${json._embedded.events[1].classifications[0].segment.name}</h4>
                <h4> Event type:  ${json._embedded.events[1].classifications[0].genre.name}</h4>
                <h4> Date: ${json._embedded.events[1].dates.start.localDate}<h4>
                <h4> Venue: ${json._embedded.events[1]._embedded.venues[0].name}<h4>
                <img src= '${json._embedded.events[1].images[0].url}' alt="Event Banner">
              `)
              $('#event-3').html(`
                <h2> ${json._embedded.events[2].name}</h2>
                <h4> Genre:  ${json._embedded.events[2].classifications[0].segment.name}</h4>
                <h4> Event type:  ${json._embedded.events[2].classifications[0].genre.name}</h4>
                <h4> Date: ${json._embedded.events[2].dates.start.localDate}<h4>
                <h4> Venue: ${json._embedded.events[2]._embedded.venues[0].name}<h4>
                <img src= '${json._embedded.events[2].images[0].url}' alt="Event Banner">
              `)
              $('#event-4').html(`
                <h2> ${json._embedded.events[3].name}</h2>
                <h4> Genre: ${json._embedded.events[3].classifications[0].segment.name}</h4>
                <h4> Event type:  ${json._embedded.events[3].classifications[0].genre.name}</h4>
                <h4> Date: ${json._embedded.events[3].dates.start.localDate}<h4>
                <h4> Venue: ${json._embedded.events[3]._embedded.venues[0].name}<h4>
                <img src= '${json._embedded.events[3].images[0].url}' alt="Event Banner">
              `)
              $('#event-5').html(`
                <h2> ${json._embedded.events[4].name}</h2>
                <h4> Genre: ${json._embedded.events[4].classifications[0].segment.name}</h4>
                <h4> Event type:  ${json._embedded.events[4].classifications[0].genre.name}</h4>
                <h4> Date: ${json._embedded.events[4].dates.start.localDate}<h4>
                <h4> Venue: ${json._embedded.events[4]._embedded.venues[0].name}<h4>
                <img src= '${json._embedded.events[4].images[0].url}' alt="Event Banner">
              `)
              $('#event-6').html(`
                <h2> ${json._embedded.events[5].name}</h2>
                <h4> Genre:  ${json._embedded.events[5].classifications[0].segment.name}</h4>
                <h4> Event type:  ${json._embedded.events[5].classifications[0].genre.name}</h4>
                <h4> Date: ${json._embedded.events[5].dates.start.localDate}<h4>
                <h4> Venue: ${json._embedded.events[5]._embedded.venues[0].name}<h4>
                <img src= '${json._embedded.events[5].images[0].url}' alt="Event Banner">
              `)
              $('#event-7').html(`
                <h2> ${json._embedded.events[6].name}</h2>
                <h4> Genre: ${json._embedded.events[6].classifications[0].segment.name}</h4>
                <h4> Event type: ${json._embedded.events[6].classifications[0].genre.name}</h4>
                <h4> Date: ${json._embedded.events[6].dates.start.localDate}<h4>
                <h4> Venue: ${json._embedded.events[6]._embedded.venues[0].name}<h4>
                <img src= '${json._embedded.events[6].images[0].url}' alt="Event Banner">
              `)
              $('#event-8').html(`
                <h2> ${json._embedded.events[7].name}</h2>
                <h4> Genre: ${json._embedded.events[7].classifications[0].segment.name}</h4>
                <h4> Event type:  ${json._embedded.events[7].classifications[0].genre.name}</h4>
                <h4> Date: ${json._embedded.events[7].dates.start.localDate}<h4>
                <h4> Venue: ${json._embedded.events[7]._embedded.venues[0].name}<h4>
                <img src= '${json._embedded.events[7].images[0].url}' alt="Event Banner">
              `)
              $('#event-9').html(`
                <h2> ${json._embedded.events[8].name}</h2>
                <h4> Genre: ${json._embedded.events[8].classifications[0].segment.name}</h4>
                <h4> Event type: ${json._embedded.events[8].classifications[0].genre.name}</h4>
                <h4> Date: ${json._embedded.events[8].dates.start.localDate}<h4>
                <h4> Venue: ${json._embedded.events[8]._embedded.venues[0].name}<h4>
                <img src= '${json._embedded.events[8].images[0].url}' alt="Event Banner">
                `)
              $('#event-10').html(`
                <h2> ${json._embedded.events[9].name}</h2>
                <h4> Genre: ${json._embedded.events[9].classifications[0].segment.name}</h4>
                <h4> Event type:  ${json._embedded.events[9].classifications[0].genre.name}</h4>
                <h4> Date: ${json._embedded.events[9].dates.start.localDate}<h4>
                <h4> Venue: ${json._embedded.events[9]._embedded.venues[0].name}<h4>
                <img src= '${json._embedded.events[9].images[0].url}' alt="Event Banner">
              `)
         },
          error: function(xhr, status, err) {
              $('.event-info').html(`<h2> No events found in your area </h2>`)
           }
});
}



//////////////////////////////////////////////////

/////////////
// Old code for carousel
///////////////////

// // Weather Carousel Variables
// let currentWeatherIndex = 0
// const highestWeatherIndex = $('.weather-info').children().length - 1;
//
// // Event Carousel Variables
// let currentEventIndex = 0
// const highestEventIndex = $('.event-info').children().length - 1;

//////////////
// Event Listener
/////////////////

// Weather Carousel
//////////

// Next button
// $('#next-weather').on('click', () => {
//   console.log('next weather tile');
//   $('.weather-info').children().eq(currentWeatherIndex).css('display', 'none');
//     if (currentWeatherIndex < highestWeatherIndex) {
//       currentWeatherIndex++;
//     } else {
//       currentWeatherIndex = 0;
//     }
//     $('.weather-info').children().eq(currentWeatherIndex).css('display', 'block');
//   })
//
// // Previous button
// $('#prev-weather').on('click', () => {
//   console.log('previous weather tile');
//   $('.weather-info').children().eq(currentWeatherIndex).css('display', 'none');
//     if (currentWeatherIndex > 0) {
//       currentWeatherIndex--;
//     } else {
//       currentWeatherIndex = highestWeatherIndex;
//     }
//     $('.weather-info').children().eq(currentWeatherIndex).css('display', 'block');
//   })

// Event Carousel
///////////

// Next button
// $('#next-event').on('click', () => {
//   console.log('next event tile');
//   $('.event-info').children().eq(currentEventIndex).css('display', 'none')
//     if (currentEventIndex < highestEventIndex) {
//       currentEventIndex++;
//     } else {
//       currentEventIndex = 0;
//     }
//   $('.event-info').children().eq(currentEventIndex).css('display', 'block')
// })
//
// // Previous button
// $('#prev-event').on('click', () => {
//   console.log('previous weather tile');
//   $('.event-info').children().eq(currentEventIndex).css('display', 'none');
//     if (currentEventIndex > 0) {
//       currentEventIndex--;
//     } else {
//       currentEventIndex = highestEventIndex;
//     }
//     $('.event-info').children().eq(currentEventIndex).css('display', 'block');
//   })
