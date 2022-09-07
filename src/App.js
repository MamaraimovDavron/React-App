import React from "react";
import MainContent from "./components/MainContent";
import Image from "./components/Image";
import Bio from "./components/Bio";
import About from "./components/About";
import Interest from "./components/Interests";
import Email from "./components/Email";
import Linkedin from "./components/Linkedin";
import Footer from "./components/Footer";
import './style.css'

export default function App(){
    return(
        <div className="container">
            <MainContent /> 
            <Image />
            <Bio />
            <About />
            <Interest />
            <Email />
            <Linkedin />
            <Footer />
        </div>
    )
}