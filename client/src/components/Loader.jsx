import React from 'react';
import "../assets/css/loading.css";
import logo from '../assets/images/logo.png'


const Loader = () => {
    return (
      <div className="loader-container">
        <div className="animated-background">
          <p className="loader-text">
            Rick Services International website is loading, please wait.
          </p>
        </div>
        <img
          src={logo} // Replace with your image path
          alt="Loading..."
          className="loader-wave"
        />
      </div>
    );
  };
  
  export default Loader;


