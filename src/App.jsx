import React from "react";
import "./App.css";
import Myportfolio from "./components/Maincomponent/Portfolio/Myportfolio";
import { ThemeProvider } from "./components/context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Myportfolio />
    </ThemeProvider>
  );
}

export default App;
