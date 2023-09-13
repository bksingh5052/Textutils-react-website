import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";
import React, { useState } from "react";

import { BrowserRouter, Routes,  Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("myBox").classList.remove("whitePlaceholder");
      showAlert("Light mode enable", "success");
      // document.title = "TextUtility - Light Mode"
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#2b1b50";
      document.body.style.color = "white";
      document.getElementById("myBox").classList.add("whitePlaceholder");
      showAlert("Dark mode enable", "success");
      // document.title = "TextUtility - Dark Mode"
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About showAlert={showAlert}
 mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <Textforms
                  showAlert={showAlert}
                  mode={mode}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
