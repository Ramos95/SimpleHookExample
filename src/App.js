import React, { useEffect, useState, useRef } from "react";
/*importando el cusmtomHook*/
import useOnUpdate from "./useOnUpdate";
import "./styles.css";

export default function App() {
  /*dummyData funciona como valor de estado y setDummyData
  functiona como su function propia para poderlo actualizar*/
  /*en este caso se inicializa con un string que contiene la paralabra empty*/
  const [dummyData, setDummyData] = useState("empty");

  /*useRef es un hook que nos permite persistir valores en todo el ciclo de vida
 del componente*/
  let isMounted = useRef(false);

  /*useEffect funciona tanto como componentDidMount
  componentWillUmount y detecta los cambios en los estados de su 
  lista de dependencia*/

  /* La funcion dentro de useEffect se jecutara cuando
  el comonente se monte, y la funcion en return cuando
  este se vaya desmontar*/

  /* el array [] indica las dependecias que necesita,
  de estar vacio entonces indica que solo debe ejecutarse cuando
  el componente sea montado y cuando se desmonte*/

  /*si el array incluye variables, entonces tambien se ejecutara 
  cuando un elemento del array de dependcias cambie*/

  /*de no presentar el array, este siempre se ejecutara en cualquier
  cambio del componente*/

  useEffect(() => {
    console.log("mounting lol");
    return () => {
      console.log("umount lol");
    };
  }, []);

  /*en este punto useEffect recibe el estado de dummyData,
  lo que le indica que ademas de actuar cuando el componente sea montado,
  tambien actuara cuando dummyData Cambie*/

  useEffect(() => {
    console.log(`imrpimriemndo ${dummyData} desde useEffect`);
  }, [dummyData]);

  /*El inconviente que presenta es que este siempre se ejecutara cuando el 
  componente se monte lo cual puede causar problemas si se requiere llamar una
  funcion que utiilice el estado y esta, debido a que esta recies definido no posea
  los valores apropiados para ser usado*/

  /*para eso se utiliza useRef lo cual permite persistir valores a lo largo de toda la vida
  del componente, asi que se puede utilizar para identificar si el componente se esta montando
  por primera vez y evitar llamar a la funcion o si este ya esta montado y asi solo se ejecutara
  cuando sus dependecias cambien*/

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      console.log(`imrpimriemndo ${dummyData} desde useEffect con useRef`);
    }
  }, [dummyData]);

  /*para evitar estar repitiendo la misma validacion en cada useEffect
  podemos crear un customHook que se encargue de valdiar*/

  /*al igual que useEffect este recibe una funcion y la dependencia*/
  useOnUpdate(() => {
    console.log(`imrpimriemndo ${dummyData} desde customHook useUpdate`);
  }, dummyData);

  /*arrow function que se encarga cambiar el valor de dummyData cada vez
  que se hace click al boton*/
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
