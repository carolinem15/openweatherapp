# Weather Dashboard

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

## Description

This weather dashboard is designed to provide a weather report for any city that a user searches using the OpenWeather API. The results display temperature, an icon indicating the weather, humidity, and wind speed.  The purpose of this application is to practice AJAX calls to APIs and have the responses rendered into the browser using jQuery. In the future, I would like this application to also enable you to save previously searched locations, favorite frequented cities, and provide a radar tab using a different API. 

When first building this app, I ran into issues making one of my AJAX calls, so I used fetch instead. I also kept getting a no-CORS error. Upon refactoring this project, I was able to get my AJAX calls to work and fixed the no-CORS error by using an npm package called http-server.

## Installation

To install this project, navigate to the URL provided or pull the files down onto your local machine, navigate to the project's directory, and run npx http-server. 

## Usage

The main homepage will contain a field to enter the city you would like to search. Hit "submit" and the results will render onto the right side of the page.

## Credits

Trilogy Education Services
W3 schools: https://www.w3schools.com/default.asp
OpenWeather: https://openweathermap.org/
Stack Overflow: https://stackoverflow.com/