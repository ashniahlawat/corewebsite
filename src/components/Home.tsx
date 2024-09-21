import React, { useState } from "react";
import "../styles/Home.css";

const Home: React.FC = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMouseX(clientX);
    setMouseY(clientY);
  };

  const calcTransform = (x: number, y: number) => {
    return `translate(${(x - window.innerWidth / 2) / 50}px, ${
      (y - window.innerHeight / 2) / 50
    }px)`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "black",
        color: "#ffffff",
        paddingLeft: "10%",
        paddingRight: "10%",
        overflow: "hidden",
        position: "relative",
        background: "black",
        cursor: "none", // Hide default cursor
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexGrow: 1,
          padding: "20px",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "left", flex: 1, paddingRight: "20px" }}>
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              color: "#ff5722",
              background:
                "linear-gradient(to bottom, transparent 60%, rgba(255, 97, 48, 0.1) 60%)",
              padding: "0.3rem",
              borderRadius: "0.25rem",
              marginTop: "30px",
              textShadow: "0 0 10px rgba(255, 87, 34, 0.8)",
            }}
          >
            <span style={{ color: "white" }}>C.O.Я.E.</span> 17
          </h1>

          <p style={{ fontSize: "2rem", marginTop: "13px" }}>
            13th to 17th August
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              marginTop: "20px",
              fontStyle: "italic",
            }}
          >
            No more wait for Obsession∞.
          </p>
          <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
            <b>
              Delhi Public School, Dwarka's annual tech symposium, Computer
              Obsessed Radical Enthusiasts, is back!
            </b>
          </p>
          <p style={{ fontSize: "1.2rem", marginTop: "13px" }}>
            From gaming to design, hacking to music production - test your
            obsession at one of the biggest events of the year.
          </p>
          <br />
          <br />
          <a
            href="https://chat.whatsapp.com/ErUX3UsBXff0wgIS2I9wiS"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#ff5722",
              color: "#ffffff",
              border: "none",
              padding: "10px 20px",
              fontSize: "1.2rem",
              cursor: "pointer",
              borderRadius: "5px",
              animation: "float 3s ease-in-out infinite",
              boxShadow: "0 0 15px rgba(255, 87, 34, 0.6)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(255, 87, 34, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 15px rgba(255, 87, 34, 0.6)";
            }}
          >
            <b>WhatsApp</b>
          </a>
          <p style={{ fontSize: "1rem", marginTop: "10px", color: "black" }}>
            This event brings together the brightest minds and the most
            passionate individuals. Expect a range of activities, including
            workshops, competitions, and guest lectures from industry leaders.
            It's an opportunity to learn, compete, and network with peers.
          </p>
          <p style={{ fontSize: "1rem", marginTop: "10px", color: "black" }}>
            Whether you are into gaming, design, or coding, there's something
            for everyone. Participate in hackathons, showcase your design
            skills, or simply enjoy the tech expo. It's an event you don't want
            to miss!
          </p>
        </div>
        <div
          style={{
            textAlign: "right",
            flex: 1,
            paddingLeft: "15%",
            paddingBottom: "19%",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "400px",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* White Circle */}
            <div
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                border: "10px solid white",
                borderTop: "10px solid transparent",
                animation: "rotate 10s linear infinite",
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                transform: calcTransform(mouseX, mouseY), // Dynamic transform
              }}
            />
            {/* Orange Band */}
            <div
              style={{
                position: "absolute",
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                border: "8px solid #ff5722",
                borderTop: "8px solid transparent",
                animation: "spin 1.5s linear infinite",
                boxShadow: "0 0 15px rgba(255, 87, 34, 0.6)",
                transform: calcTransform(mouseX, mouseY), // Dynamic transform
              }}
            />
            {/* Number "17" */}
            <span
              style={{
                fontSize: "12rem",
                color: "white",
                fontWeight: "bold",
                position: "relative",
                zIndex: 1,
                textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
                // transform: calcTransform(mouseX, mouseY), // Dynamic transform
              }}
            >
              17
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
