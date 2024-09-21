import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../styles/Typewriter.css";

const slogans = [
  "It started with a thought",
  "We moulded it into O",
  "17 years of learning",
];

function Typer() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="typewriter">
          <Typewriter
            words={slogans}
            loop={0} // Loop infinitely
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>
      </header>
    </div>
  );
}

export default Typer;
