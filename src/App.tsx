import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Landing from "./components/landing";
import SignIn from "./components/SignIn";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
