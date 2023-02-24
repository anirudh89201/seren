import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import React from "react";
import Signup from "./components/Signup";
import Landing from "./components/Landing";
function App() {
  //eslint-disable-next-line
  const [alert, setAlert] = React.useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <div>
      <NoteState>
        <Router>
          <NavBar />
          <Alert alert={alert} />
          <div id="cont">
            <Routes>
            <Route path="/" element={<Landing showAlert={showAlert} />} />
              <Route path="/home" element={<Home showAlert={showAlert} />} />
              <Route path="/About" element={<About showAlert={showAlert} />} />
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </Router>
      </NoteState>
      <footer>&#169; Serene LLC 2022-2023</footer>
    </div>
  );
}

export default App;
