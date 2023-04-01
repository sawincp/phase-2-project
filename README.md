# Phase-2 Project using React

By Corey Sawin

This web application creates a Single Page Application (SPA) using React and a local db.json file to show a list of Marvel Avengers heros and allows the user to create a hero of their own. 

## Technologies Used

- React
- JavaScript
- React-Router-Dom
- React-Boostrap
- CSS

## Description

On page load, the user will be directed to the Home page of the application where they will see an introductory paragraph about the Marvel Avengers along with two navigation links at the top depicting where they can go within the application. One is labeled Home the other is Avengers.

![Home Screen](/Images/Home_Screen.png)

When the user clicks on the Avengers navlink, it will take them to a separate page where it will list five of the original Avengers along with some details for each. The user is able to click the "add your own hero" button to fill out a form and add their own avenger with corresponding attributes.


![Character List](/Images/Character_List.png)

![Hero Form](/Images/Hero_Form.png)


Once the form is submitted, the user will be redirected to the Avengers list with their newly created hero and their attributes added at the end. 

![Updated Hero List](/Images/Hero_List.png)



## Setup/Installation Requirements

- Clone this repository to your desktop
- Open Phase-2 Project file
- In terminal run npm install to install project dependencies
- In terminal run json-server --watch db.json --port 3001 to start db.json server
- In terminal run npm start to start development server in browser


## References
- https://akabab.github.io/superhero-api/
- https://react.dev/reference/react
- https://reactrouter.com/en/main
- https://react-bootstrap.github.io/
