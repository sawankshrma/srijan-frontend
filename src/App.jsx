import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import GalleryPage from "./pages/Gallery";
import EventPage from "./pages/EventPage/EventPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <GalleryPage />
      <EventPage />
      {}
    </div>
  );
}

export default App;
