OpenWeather API Application

# Description

Using the OpenWeather API, this application is designed to provide a weather report for any city that a user searches. Temperature, an icon indicating the weather, humidity, and wind speed are displayed in the results.  The purpose of this application is to practice calling web APIs and integrating them into an application. In the future, I would like this application to also enable you to save previously searched locations, favorite frequented cities, and provide a radar tab using a different API. 

While building this app, I ran into issues making one of my AJAX calls, so I used fetch instead. Later on in the code, I am able to successfully make my AJAX call. I also ran into a weird bug that resulted in thousands of calls to the API per second, which resulted in me getting my API key blocked by OpenWeather for exceeding the allowed number of calls per minute. Prior to this issue, I was successfully able to log the API results in my console. I also kept getting a no-cors error that I was unable to get rid of. This assignment was great practice for knowing what to look for in the documentation for APIs.

## Installation

To install our project, click the URL to open the page, and your first stop will be the application homepage. 

## Usage

The main homepage will contain a field to enter the city you would like to search. Hit "submit" and (ideally) the results will render onto the HTML.

## Credits

Trilogy Education Services
W3 schools: https://www.w3schools.com/default.asp
OpenWeather: https://openweathermap.org/
Stack Overflow: https://stackoverflow.com/

## License

MIT License (https://choosealicense.com)