import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carrers from "./pages/Carrers";
import Footer from "./components/Footer";
import Signin from "./pages/Signin"
import Contact from "./pages/Contact";


export default function App() {
  return (
    <BrowserRouter>
    
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/carrers" element={<Carrers/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
