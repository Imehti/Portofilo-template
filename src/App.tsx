import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portofilo from "./components/Portofilo";
import ProjectList from "./components/ProjectList";
import ProfssorsList from "./components/ProfssorsList";
import ShareOpinion from "./components/ShareOpinion";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Portofilo />
      <ProjectList />
      <ProfssorsList />
      <ShareOpinion />
      <Footer />
    </>
  );
};

export default App;
