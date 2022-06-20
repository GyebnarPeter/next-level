import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import UniqueOffers from "./pages/uniqueOffers/UniqueOffers";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/rolunk" element={<About />} />
                <Route exact path="/egyedi-ajanlatok" element={<UniqueOffers />} />
                <Route exact path="/kapcsolat" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
