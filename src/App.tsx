import { Grid } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
