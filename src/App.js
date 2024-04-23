import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from "./components";
import { Home, Portfolio, Sponsorship, Recruitment, ContactUs, AboutUs, AgroPonics, AgroBot } from "./pages";
import { Footer } from "./components/common";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/sponsorship" element={<Sponsorship />} />
                <Route path="/recruitment" element={<Recruitment />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/agroponics" element={<AgroPonics />} />
                <Route path="/agrobot" element={<AgroBot />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;