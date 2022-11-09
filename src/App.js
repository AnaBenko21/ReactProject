import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Card from "./Components/Card";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Outlet></Outlet>
        <Card></Card>
        <Footer />
      </div>
    </>
  );
}
export default App;
