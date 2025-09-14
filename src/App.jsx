import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/home";
import Menu from "./pages/menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <Menu/>
    </>
  );
}

export default App;
