import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import UniqueOffers from "./pages/uniqueOffers/UniqueOffers";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Counterpart from "./pages/counterpart/Counterpart";

console.log(new Array(5).join("a"-10) + " Batman!")

function App() {
    return (
        <Router>
            <Header />
            <Routes>
<<<<<<< HEAD
                <Route exact path="/" element={<Home />} />
                <Route exact path="/hasonmas" element={<Counterpart />} />
                <Route exact path="/rolunk" element={<About />} />
                <Route
                    exact
                    path="/egyedi-ajanlatok"
                    element={<UniqueOffers />}
                />
                <Route exact path="/kapcsolat" element={<Contact />} />
=======
                <Route path="/" element={<Home />} />
                <Route path="/hasonmas" element={<Counterpart />} />
                <Route path="/rolunk" element={<About />} />
                <Route path="/egyedi-ajanlatok" element={<UniqueOffers />} />
                <Route path="/kapcsolat" element={<Contact />} />
>>>>>>> ac5803f3d041c48ae84564d005639f5f9ca893df
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
