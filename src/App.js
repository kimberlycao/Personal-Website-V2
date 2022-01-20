import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
