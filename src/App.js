import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

//import Animation from './images/welcomeAnimation.gif';
import HomePage from "./components/HomePage";
import PolicyPage from "./components/PoliciesPage";
import InternshipPage from "./components/InternshipPage";
/*const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
    */

const App = () => (
  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route exact path="/policies" element={<PolicyPage />} />
    <Route exact path="/internship" element={<InternshipPage />} />
  </Routes>
);
export default App;
