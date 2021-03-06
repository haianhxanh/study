import React, { useState, useEffect } from "react";
import UseEffectBasicsPart2 from "./1b-useEffect-basics";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // render 2nd
    console.log("call useEffect");
    // conditions must be placed inside of hooks
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  });

  // render 1st
  console.log("render component");
  return (
    <>
      <hr />
      <h2>2.1) useEffect Basics</h2>
      <h4>a) showcase of how hooks cannot be placed inside of conditionals</h4>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        click me
      </button>
      <UseEffectBasicsPart2 />
    </>
  );
};

export default UseEffectBasics;
