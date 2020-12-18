// // var city = $("#cityForm")
// //     .val()
// //     .trim();
// // console.log(city);

// // function buildQueryURL() {
// //     // queryURL is the url we'll use to query the API
// //     var queryURL = "https://api.openweathermap.org";

// //     // Begin building an object to contain our API call's query parameters
// //     // Set the API key
// //     var queryParams = {
// //         "&APPID": "88fcb46ec4ec41110a398d90f0cce390"
// //     };

// //     // Grab text the user typed into the search input, add to the queryParams object
// //     var city = $("#city-input")
// //         .val()
// //         .trim();
// //     console.log(city);
// //     var queryURL =
// //         // was getting an no CORS error, and upon some research, found that adding this URL prior to the domain for the API helped
// //         "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=" + city +
// //         "&appid=88fcb46ec4ec41110a398d90f0cce390";

// //     // Tried to create an AJAX call, but ran into some issues, so I used fetch
// //     fetch(queryURL).then(function (response) {
// //         return response.json();
// //     }).then(function (json) {
// //         console.log(json);
// //     });


// //     var queryURL = buildQueryURL();

// //     $.ajax({
// //         url: queryURL,
// //         method: "GET"
// //     }).then(function (response) {
// //         console.log(response);
// //     });
// //     // Creating a div to hold the city
// //     var cityDiv = $("<div class='city'>");

// //     // Storing the temp data
// //     var temp = main.temp;

// //     // Creating an element to have the temp displayed
// //     var tempdisp = $("<p>").text("Temperature: " + temp);

// //     // Displaying the temp
// //     tempdisp.append(temp);

// //     // Storing the icon id
// //     var icon = main.icon;

// //     // Creating an element to have the icon displayed
// //     var icondisp = $("<i>").text(icon);

// //     // Displaying the icon
// //     icondisp.append(icon);

// //     // Storing the humidity
// //     var humidity = main.humidity;

// //     // Creating an element to hold the humidity
// //     var humiditydisp = $("<p>").text("Humidity: " + humidity);

// //     // Displaying the humidity
// //     humidityDiv.append(humiditydisp);

// //     // Storing the wind speed
// //     var windspeed = wind.speed;

// //     // Creating an element to hold the wind speed
// //     var windspeeddisp = $("<p>").text("Wind speed: " + windspeed);

// //     // Appending the wind speed
// //     windspeedDiv.append(windspeeddisp);
// // };


// // $("#city-form").submit(function (event) {
// //     // Using the "submit" property in jquery and testing to ensure the button works
// //     event.preventDefault();
// //     console.log("clicked");
// //     var queryURL = buildQueryURL();

// //     $.ajax({
// //         url: queryURL,
// //         method: "GET"
// //     }).then(function (response) {
// //         console.log(response);
// //     });
// // });




// // $(document).ready(function()) {
// // $("#submitlocation").click(function(){
// //     var city = $("#location").val();
// //     if(city != "") {
// //             $.ajax({
// //                 url: "api.openweathermap.org/data/2.5/weather?q=London",
// //                 type: "GET",
// //                 success: function(result) {
// //                     console.log(result);
// //                 }
// //                 error: function(error) {
// //                     console.log(error);
// //                 }
// //             })
// //     }
// // });


// // function getLocation() {
// //     $.get("https://ipapi.co/json", function(data) {
// //         getWeather(data.city);
// //     });
// // }

// // function getWeather(city) {
// //     var api = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=";
// //     var units = "&units=metric";
// //     var appid = "&APPID=88fcb46ec4ec41110a398d90f0cce390";
// //     var $http = api + city + units + appid;
// //     $.getJSON($http, function(data) {
// //         console.log(data);
// //         temp = data.main.temp.toFixed(0);
// //         status = data.weather[0].description;
// //         iconId = data.weather[0].id;
// //         pressure = data.main.pressure ? Math.round(data.main.pressure) : "N/A ";
// //         humidity = data.main.humidity ? Math.round(data.main.humidity) : "N/A ";
// //         windSpeed = data.wind.speed ? (data.wind.speed * 3.6).toFixed(0) : "N/A ";
// //         windDirection = data.wind.deg ? data.wind.deg.toFixed(0) : "N/A ";
// //         city = data.name;
// //         country = data.sys.country;

// //         var hours = new Date().getHours();
// //         var dayOrNight = hours > 6 && hours < 22 ? "day" : "night";

// //         inputTextValue = city + ", " + country;
// //         $("#location").val(inputTextValue);
// //         $(".forecast-status")
// //             .find(".wi")
// //             .addClass("wi-owm-" + dayOrNight + "-" + iconId);
// //         $("#temperature").text(temp);
// //         $("#status").text(status[0].toUpperCase() + status.slice(1));
// //         $(".pressure").text(pressure + " hPa");
// //         $(".humidity").text(humidity + " %");
// //         $(".windSpeed").text(windSpeed);
// //         $(".windDirection").text(
// //             windDirection + "deg " + degToCompass(windDirection)
// //         );
// //         $(".wi-wind").addClass("towards-" + windDirection + "-deg");
// //         changeBackground(iconId);
// //     });
// // }


// // function celsius_F() {
// //     if (unit == "F") {
// //         unit = "C";
// //         windSpeedUnit = "km/h";
// //         temp = Math.round((temp - 32) * 5 / 9 * 10 / 10);
// //         windSpeed = Math.round(windSpeed * 1.609344 * 10 / 10);
// //     } else if (unit == "C") {
// //         unit = "F";
// //         windSpeedUnit = "mph";
// //         temp = Math.round((temp * (9 / 5) + 32) * 10 / 10);
// //         windSpeed = Math.round(windSpeed * 0.62137119223733 * 10 / 10);
// //     }
// //     $("#temperature").text(temp);
// //     $("#unit").text("°" + unit);
// //     $(".windSpeed").text(windSpeed);
// //     $(".windSpeedUnit").text(windSpeedUnit);
// // }

// // function getDate() {
// //     var d = new Date();
// //     var date = d.toLocaleDateString();
// //     $("#date").html(date);
// // }

// // function getClock() {
// //     var d = new Date(),
// //         h = d.getHours(),
// //         m = d.getMinutes(),
// //         s = d.getSeconds();
// //     h = checkTime(h);
// //     m = checkTime(m);
// //     s = checkTime(s);
// //     $("#time").text(h + ":" + m + ":" + s);
// //     var t = setTimeout(getClock, 500);
// // }

// // function checkTime(i) {
// //     if (i < 10) {
// //         i = "0" + i;
// //     }
// //     return i;
// // }

// // getDate();
// // getClock();
// // getLocation();

// // window.onkeyup = keyup;
// // var inputTextValue;

// // function keyup(e) {
// //     //setting your input text to the global Javascript Variable for every key press
// //     inputTextValue = e.target.value;
// //     if (e.keyCode == 13) {
// //         console.log(inputTextValue);
// //         if (~inputTextValue.indexOf(",")) inputTextValue = "";
// //         getWeather(inputTextValue);
// //     }
// // }

// // $(document).ready(function() {
// //     $("#location").on("click", function() {
// //         $(this).val("");
// //         inputTextValue = "";
// //     });

// //     $('form').submit(function() {
// //         if (~inputTextValue.indexOf(",")) inputTextValue = "";
// //         getWeather(inputTextValue);
// //         return false;
// //     });

// //     $("#celsius_F").on("change", function() {
// //         celsius_F();
// //     });
// //     $(".beforeText, .forecast-temp").on("click", function() {
// //         $(".checkbox").prop("checked", function(idx, oldProp) {
// //             return !oldProp;
// //         });
// //         celsius_F();
// //     });
// // });
// // };
//             // var cities = ["Charlotte", "New York"];

//             // function displayWeatherInfo() {

//             //     var city = $(this).attr("data-name");
//             //     var queryURL = "https://api.openweathermap.org" + city + "&APPID=88fcb46ec4ec41110a398d90f0cce390";
//             // };

//             function buildQueryURL() {
//                 // queryURL is the url we'll use to query the API
//                 var queryURL = "https://api.openweathermap.org";

//                 // Begin building an object to contain our API call's query parameters
//                 // Set the API key
//                 var queryParams = {
//                     "&APPID": "88fcb46ec4ec41110a398d90f0cce390"
//                 };

//                 // Grab text the user typed into the search input, add to the queryParams object
//                 var city = $("#city-input")
//                     .val()
//                     .trim();
//                 console.log(city);
//                 var queryURL =
//                     // was getting an no CORS error, and upon some research, found that adding this URL prior to the domain for the API helped
//                     "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=" + city +
//                     "&appid=88fcb46ec4ec41110a398d90f0cce390";

//                 // Tried to create an AJAX call, but ran into some issues, so I used fetch
//                 fetch(queryURL).then(function (response) {
//                     return response.json();
//                 }).then(function (json) {
//                     console.log(json);
//                 });


//                 var queryURL = buildQueryURL();

//                 $.ajax({
//                     url: queryURL,
//                     method: "GET"
//                 }).then(function (response) {
//                     console.log(response);
//                 });
//                 // Creating a div to hold the city
//                 var cityDiv = $("<div class='city'>");

//                 // Storing the temp data
//                 var temp = main.temp;

//                 // Creating an element to have the temp displayed
//                 var tempdisp = $("<p>").text("Temperature: " + temp);

//                 // Displaying the temp
//                 tempdisp.append(temp);

//                 // Storing the icon id
//                 var icon = main.icon;

//                 // Creating an element to have the icon displayed
//                 var icondisp = $("<i>").text(icon);

//                 // Displaying the icon
//                 icondisp.append(icon);

//                 // Storing the humidity
//                 var humidity = main.humidity;

//                 // Creating an element to hold the humidity
//                 var humiditydisp = $("<p>").text("Humidity: " + humidity);

//                 // Displaying the humidity
//                 humidityDiv.append(humiditydisp);

//                 // Storing the wind speed
//                 var windspeed = wind.speed;

//                 // Creating an element to hold the wind speed
//                 var windspeeddisp = $("<p>").text("Wind speed: " + windspeed);

//                 // Appending the wind speed
//                 windspeedDiv.append(windspeeddisp);
//             };


//             $("#city-form").submit(function (event) {
//                 // Using the "submit" property in jquery and testing to ensure the button works
//                 event.preventDefault();
//                 console.log("clicked");
//                 var queryURL = buildQueryURL();

//                 $.ajax({
//                     url: queryURL,
//                     method: "GET"
//                 }).then(function (response) {
//                     console.log(response);
//                 });
//             });
