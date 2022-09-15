import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoboNavbar from "./Components/RoboNavbar";
import HomePage from "./Screens/HomePage/HomePage";

const App = () => {
  return (
      <>
        <RoboNavbar></RoboNavbar>
        <HomePage></HomePage>
      </>
  );
}

export default App;
