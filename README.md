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

When the user clicks on the Avengers navlink, it will take them to a separate page where it will list five of the original Avengers along with some details for each. The user will be able to search for a specific avenger by their alias (super hero name) in the search bar at the top of the screen. The return will happen on every key stroke from the user. So if the user wants to see all the avengers that have an "S" in their alias that's all they will need to search. In the example below "man" was the serach returning Iron Man and Ant-Man.

![Search](/Images/Hero_Search.png)


The user can click the "add your own hero" button that directs them to a form to add their own Avenger with corresponding attributes.


![Character List](/Images/Add_Hero.png)

![Hero Form](/Images/Hero_Form.png)


Once the form is submitted, the user will be redirected to the Avengers list with their newly created hero and attributes added at the end of the list. 

![Updated Hero List](/Images/Updated_HeroList.png)

The user will also be able to delete an individual Avengers by clickig on the delete button. By clicking delete, this will remove that Avenger from the Avengers list. 

![Delete Hero](/Images/Delete_Hero.png)

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
