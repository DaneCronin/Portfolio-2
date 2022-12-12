//Imports- import typewriter effect 
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Photographer.",
          "Aspiring Full-Stack Developer.",
          "Let's Collaborate."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 55,
      }}
    />
  );
}

export default Type;