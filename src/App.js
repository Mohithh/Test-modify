// import './App.css';
import Navbar from './component/Navbar';
import React, { useState } from 'react';
import TexttForm from './component/TexttForm';
import Alertt from './component/Alertt';
// import About from './component/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1300);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#222831";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Dark Mode - On";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Light Mode - On";
    }
  };

  return (
    <>     
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} title="Src" home="Home" /> 
        <Alertt alert={alert} />

        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/Link" element={<About />} /> */}
            {/* <Route exact path="/" element={<TexttForm showAlert={showAlert} mode={mode} />} /> */}
          {/* </Routes> */}
          {/* {<About />} */}
          {<TexttForm showAlert={showAlert} mode={mode} />}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
