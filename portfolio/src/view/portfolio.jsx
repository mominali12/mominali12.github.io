import React, { Component } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Introduction from "../components/introduction";
import Projects from "../components/projects";
import Experience from "../components/experience";
import Contact from "../components/contact";
import Footer from "../components/footer";

class portfolio extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Introduction />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default portfolio;
