import React from "react";
import { Route } from "wouter";

import LandPage from "./Components/Pages/LandPage";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div className="App font-press-start">
      <Route path="/">
        <LandPage />
      </Route>

      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
