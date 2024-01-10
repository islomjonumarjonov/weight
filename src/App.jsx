import earth from "./img/planet-earth.svg";
import jupiter from "./img/planet-jupiter.svg";
import mars from "./img/planet-mars.svg";
import mercury from "./img/planet-mercury.svg";
import neptune from "./img/planet-neptune.svg";
import saturn from "./img/planet-saturn.svg";
import uranus from "./img/planet-uranus.svg";
import venus from "./img/planet-venus.svg";

const planets = {
  mercury: 3.7,
  venus: 8.87,
  earth: 9.81,
  mars: 3.71,
  jupiter: 24.79,
  saturn: 10.44,
  uranus: 8.69,
  neptune: 11.15,
};

const planetSvg = {
  earth,
  jupiter,
  mars,
  mercury,
  neptune,
  saturn,
  uranus,
  venus,
};

import React, { useEffect, useRef, useState } from "react";

function App() {
  const arr = [];
  const [mass, useMass] = useState(0);
  const [weight, useWeight] = useState(null);
  useEffect(() => {
    for (const key in planets) {
      // console.log(key, planets[key]);

      const f = Math.floor((mass * planets[key]) / planets.earth);

      // console.log(f);
      const data = [[key], f, planets[key]];

      arr.push(data);
    }
    useWeight(arr);
  }, [mass]);
  // console.log(weight);
  const m = useRef();

  return (
    <div className="container">
      <form
        className="flex flex-col items-center gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          const massa = m.current.value;
          useMass(massa);
          console.log(massa);
        }}
      >
        <label className="flex gap-3">
          <p>Enter your weight on Earth (kg): </p>
          <input ref={m} type="number" className="bg-cyan-900" />
        </label>
        <div>
          <button className="py-1 px-5 text-xl bg-cyan-500 rounded">
            Calculate weights
          </button>
        </div>
      </form>

      <div>
        <ul className="mt-3 grid grid-cols-4 gap-3">
          {weight &&
            weight.map((planet) => {
              return (
                <li
                  key={planet}
                  className="p-5 bg-slate-400 rounded flex flex-col items-center"
                >
                  <img src={planetSvg.earth} alt="" width={100} />
                  <p className="text-2xl">{planet[0]}</p>
                  <h2 className="text-xl">{planet[1]} kg</h2>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
