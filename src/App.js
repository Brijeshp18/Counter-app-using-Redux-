import React from "react";
import Counter from "./components/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/Counter-app-using-Redux-" element={<Counter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
