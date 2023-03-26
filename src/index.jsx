import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimalDetail } from "./Components/AnimalDetail";
import { AnimalList } from "./Components/AnimalList";
import "./style.css";

const App = () => {
  const [zviratka, setZviratka] = useState([]);
  const [zobrazeno,setZobrazeno] = useState('');


  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((data) => {
          setZviratka(data.zvirata);
          setZobrazeno(data.zvirata[0])});
  }, []);

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        <AnimalList zvirata={zviratka} onSelect={setZobrazeno} />

        <AnimalDetail zvire={zobrazeno}/>
        
      </div>
    </>
  );
}

createRoot(document.querySelector("#app")).render(<App />);