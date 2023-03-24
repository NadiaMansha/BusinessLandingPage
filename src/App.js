import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Clients from "./components/Clients";

function App() {
  return (
    <div className="flex flex-col   min-h-screen  items-center justify-center">
      <header className=" bg-slate-100 shadow-xl p-4 h-16 min-w-full">
        <Navbar />
      </header>
      <div className="flex items-center justify-center  mt-16 background min-w-full">
        <h1 className="text-3xl  font-serif font-meduim">
          TAKE YOUR
          <br />
          BUSINESS TO
          <br />
          <b>NEW HEIGHTS</b>
        </h1>
        <div 
        className= " bg-blue-700 h-36 w-1 ml-6"
        >

        </div>
        <div className="flex flex-col ml-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Sed euismod, nisl nec tincidunt lacinia,
            <br />
            nunc est aliquam nisl, nec luctus sem
          </p>
          <button className="bg-blue-500  text-white  py-2 rounded-xl  px-1 font-bold mt-6">
            <a href="#contact">
            Contact us
            </a>
          </button>
        </div>
      </div>

      <Services />
      <Clients />
      <Stats />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
