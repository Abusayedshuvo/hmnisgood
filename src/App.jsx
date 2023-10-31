import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <>
      <div className="bg-[url('assets/bg.jpg')] bg-cover bg-center bg-blend-overlay bg-[#0000008a]">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <About></About>
    </>
  );
}

export default App;
