import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import About from "./components/About/About";
import Skills from './components/Skills/Skills';
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import ContactButton from "./components/Contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <div className="main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <About />
          <Skills />
          <Experiences />
          <ContactButton/>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
