import React from "react";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import About from "./components/About";
import Activity from "./components/Activity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Interest from "./components/Interest";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Activity />
        <Interest />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </main>
      <WhatsAppWidget phoneNumber="+19294628832" />
    </>
  );
};

export default App;
