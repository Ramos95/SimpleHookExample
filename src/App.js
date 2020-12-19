import React, { useEffect, useState, useRef } from "react";
import UseOnUpdate from "./useOnUpdate";
import "./styles.css";

export default function App() {
  const [dummyData, setDummyData] = useState("empty");
  let isMounted = useRef(false);

  useEffect(() => {
    console.log("mounting lol");
    return () => {
      console.log("umount lol");
    };
  }, []);

  useEffect(() => {
    console.log(`imrpimriemndo ${dummyData} desde useEffect`);
  }, [dummyData]);

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = true;
    } else {
      console.log(dummyData);
    }
  }, [dummyData]);

  UseOnUpdate(() => {
    console.log(dummyData);
  }, dummyData);

  const addValue = () => setDummyData(Math.random());

  return (
    <div className="App">
      <h1>Explicacion Simple Con Hooks</h1>
      <h2>Para Manquear Con React</h2>
      <p>{dummyData}</p>
      <button title="cambiarValor" onClick={addValue}>
        Cambiar Valor
      </button>
    </div>
  );
}
