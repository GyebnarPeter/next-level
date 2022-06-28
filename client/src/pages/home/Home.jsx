import React from "react";
import Intro from "../../components/intro/Intro";
import Newness from "../../components/newness/Newness";
import Sale from "../../components/sale/Sale";
import WhyUs from "../../components/whyUs/WhyUs";
import Faq from "../../components/faq/Faq";
import ContactForm from "../../components/contactForm/ContactForm";

export default function Home() {
    return (
        <>
            <Intro />
            <Newness />
            <WhyUs />
            <Sale />
            <Faq />
            <ContactForm />
        </>
    );
}
