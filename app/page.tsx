import Image from "next/image";
import Header from "./components/Header";
import Slider from "./components/Slider";
import HomeSection from "./components/HomeSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    // <div className='custom-img h-screen bg-center bg-fixed'>
    <div>
      <Header/>
      <HomeSection/>
      <Footer/>
      {/* <Slider/> */}
    </div>
  );
}
