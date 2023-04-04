import React from "react";
import Gallery from "./components/Gallery";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Gallery liked={false} />} />
          <Route path="/liked" element={<Gallery liked={true} />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </Router>
  );
};

export default App;
