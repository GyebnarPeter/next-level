import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import UniqueOffers from "./pages/uniqueOffers/UniqueOffers";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Counterpart from "./pages/counterpart/Counterpart";
import ScrollToTop from "./components/scrollToTop.jsx/ScrollToTop";

console.log(new Array(5).join("a"-10) + " Batman!")

function App() {
    return (
        <Router>
            <Header />
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hasonmas" element={<Counterpart />} />
                    <Route path="/rolunk" element={<About />} />
                    <Route path="/egyedi-ajanlatok" element={<UniqueOffers />} />
                    <Route path="/kapcsolat" element={<Contact />} />
                </Routes>
            </ScrollToTop>
            <Footer />
        </Router>
    );
}

export default App;
