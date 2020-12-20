import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    fetchData(1);
  }, []);

  function fetchData(character) {
    fetch(`https://swapi.dev/api/people/${character}/`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => {
        response.json().then((obj) => {
          fetch(`https://swapi.dev/api/planets/${character}/`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          })
            .then((homeWorldResponse) =>
              homeWorldResponse.json().then((hmObj) => {
                setFetchedData({ ...obj, homeworld: hmObj.name });
              })
            )
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /* async function fetchData(character) {
    try {
      const responseCharacter = await fetch(
        `https://swapi.dev/api/people/${character}/`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        }
      );
      const characterObject = await responseCharacter.json();

      const characterHomeWorldResponse = await fetch(
        `https://swapi.dev/api/planets/${characterObject}/`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        }
      );
      const characterHomeWorldObject = await characterHomeWorldResponse.json();

      const characterInfo = {
        ...characterObject,
        homeworld: characterHomeWorldObject.name
      };

      setFetchedData(characterInfo);
    } catch (error) {
      console.log(error);
    }
  }*/

  return (
    <div className="App">
      <h1>Explicacion Simple Con Hooks</h1>
      <h2>Para Manquear Con React</h2>
      <p>{fetchedData.name}</p>
      <p>{fetchedData.height}</p>
      <p>{fetchedData.mass}</p>
      <p>{fetchedData.homeworld}</p>
      <button
        title="cambiarValor"
        onClick={() => fetchData(Math.floor(Math.random() * (100 - 1 + 1))) + 1}
      >
        Traer Personaje random
      </button>
    </div>
  );
}
