import Image from "next/image";
import Header from "./components/Header";
import Slider from "./components/Slider";
import HomeSection from "./components/HomeSection";
import Footer from "./components/Footer";
import About from "./components/About";

export default function Home() {
  return (
    // <div className='custom-img h-screen bg-center bg-fixed'>
    <div>
      <Header/>
      <HomeSection/>
      <About/>
      <Footer/>
      {/* <Slider/> */}
    </div>
  );
}
