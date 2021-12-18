import React from "react";
import "./App.css";
import Form from "./Form";
import Header from "./Header";
import Data from "./Data"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
