import React from "react";
import { Route, useLocation } from "wouter";

import LandPage from "./Components/Pages/LandPage";

function App() {
  const [location, setLocation] = useLocation();

  return (
    <div className="App font-press-start">
      <Route path="/">
        <LandPage />
      </Route>

      <Route path="/home">
        <h1 className="text-5xl text-white">Home</h1>
      </Route>
    </div>
  );
}

export default App;
