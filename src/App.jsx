import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Gallery from "./pages/galery";
import Contact from "./pages/contact";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
