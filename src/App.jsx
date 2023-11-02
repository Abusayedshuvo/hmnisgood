import { Outlet } from "react-router-dom";
import Lottie from "lottie-react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import animationBg from "./assets/animation-bg.json";

function App() {
  return (
    <>
      <Lottie
        className="fixed -z-10 bg-[#00041C] h-screen"
        animationData={animationBg}
        loop={true}
      />
      <div className="z-10  pb-12 bg-[#00041ca9]">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
