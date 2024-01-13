import { useState } from "react";


import "./App.css";

import HomePage from "./HomePage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import UserDetailsPage from "./UserDetailsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="/user/:id" element={<UserDetailsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
