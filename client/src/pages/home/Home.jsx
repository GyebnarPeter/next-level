import Intro from "../../components/intro/Intro";
import Newness from "../../components/newness/Newness";
import Sale from "../../components/sale/Sale";
import WhyUs from "../../components/whyUs/WhyUs";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
      <>
        <Intro />
        <Newness />
        <WhyUs />
        <Sale />
        <Footer />
      </>
  )
}
