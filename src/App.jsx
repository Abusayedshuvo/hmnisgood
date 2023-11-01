import { Outlet } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <>
      <div className="bg-[url('assets/bg.svg')] bg-cover bg-center bg-blend-overlay bg-fixed bg-[#0000004d] pb-12">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
