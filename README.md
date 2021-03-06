<h1 align="center">
    <img alt="Happy" title="Happy" src="https://user-images.githubusercontent.com/62508848/96305462-49c40a80-0fd4-11eb-9bef-8ee1d0c71bb3.png" />
</h1>
 

<p align="center">
  <a href="#-projeto">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-usage">Usage</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-participants">Participants</a>
</p>

<br>

## 💻 Project

Happy is an application that connects people to institutional care homes to make many children's day happier 💜

<p align="center">
  <img alt="happyweb" title="happyweb" src="https://user-images.githubusercontent.com/62508848/96304316-44fe5700-0fd2-11eb-8671-7d242b01e051.gif" />
</p>

<p align="center">
  <img alt="happymobile" title="happymobile" src="https://user-images.githubusercontent.com/62508848/96303376-aa514880-0fd0-11eb-96f5-72d52e3d9a8f.gif" />
</p>

## 🚀 Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [Docker](https://www.docker.com/)

## Usage

Be sure to create the database container (I used docker) and correctly configure the ormconfig.json. 
Then...

 ### API
    $ cd server

    $ yarn
  
    $ yarn typeorm migration:run
    
 ### Start the API
 
    $ yarn dev:server


 ### Web App
  
    $ yarn
    
    $ yarn start
    
 ### Mobile App
  
    $ yarn
    
    $ yarn android
   


## Participants

[Samuel Formigheri](https://github.com/SamuelFormigheri)