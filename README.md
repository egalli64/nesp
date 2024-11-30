# web-intro
Introduction to Web Technologies 

Mainly a static web application running on Node.js or Jetty

## With Jetty

Requires Java
- Tested on version 21
- See POM.xml for dependencies (Jetty, Logback)

From CLI, just:
- git clone the repo
- move in the web-intro folder
- build using your favorite Java tools (with Maven)
- the main class is ServerStartup in the com.example.jet package

## With Node.js

Requires Node.JS: https://nodejs.org/en/download/ (LTS)
- Tested on version 20
- See package.json for dependencies (cors, express)

From CLI, just:
- git clone the repo
- move in the web-intro folder
- npm install
- node server.js

## Client side

In both cases the application is served on localhost:8080
