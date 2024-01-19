import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Enroll from "./Components/Enroll/Enroll";
import Footer from "./Components/Footer/Footer";
import Program from "./Components/Programs/Program";
import { useEffect, useState } from "react";

function App() {

 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/enroll" Component={Enroll} />
        <Route exact path="/programs" Component={Program} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
