import React from "react";
import { Outlet } from "react-router-dom";
// import store from "./Store";
// import { Provider } from "react-redux";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Screens/Login";
import Register from "./Components/Screens/Register";
import HomePage from "./Components/Screens/HomePage";
import HomeScreen from "./Components/Screens/HomeScreen";
import Science from "./Components/Screens/Router/Science";
import Business from "./Components/Screens/Router/Business";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Header />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/page" element={<HomePage />} />
        <Route path="/science" element={<Science />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
