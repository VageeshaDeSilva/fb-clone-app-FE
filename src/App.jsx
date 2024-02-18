import React from "react";
import LoginPage from "./components/pages/LoginPage";
import navBar from "./components/common/navBar";
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="container" id="loginPage">
        <LoginPage />
      </div>
    </div>
  );
}

export default App;
