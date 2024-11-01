# web-intro
Introduction to Web Technologies 

Mainly a static web application running on Node.js or Jetty

Developed on VS Code https://code.visualstudio.com/

## Running on Jetty

Requires Java
- Tested on version 21
- See POM.xml for dependencies (Jetty, Logback)

From CLI, just:
- git clone the repo
- move in the web-intro folder
- the main class is ServerStartup in the com.example.jet package

The application is served on localhost:8080

## Running on Node.js

Requires Node.JS: https://nodejs.org/en/download/ (LTS)
- Tested on version 20
- See package.json for dependencies (cors, express)

From CLI, just:
- git clone the repo
- move in the web-intro folder
- npm install
- _(code .)_
- node server.js

In a browser, go to localhost:8080
