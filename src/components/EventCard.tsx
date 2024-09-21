import React from "react";
import Lottie from "lottie-react";
import "../styles/EventCard.css"; // Ensure this path is correct
import DesignathonAnimation from "../assets/Designathon-Graphic.json";
import SpacehackAnimation from "../assets/Spacehack-Graphic.json";

const EventCard: React.FC = () => {
  return (
    <>
      <div className="event-card image-left">
        <div className="event-info">
          <p className="participants" style={{ color: "#6C6C6C" }}>
            1-3 Participants
          </p>
          <div className="event-header">
            <h2
              className="event-name"
              style={{ fontSize: "30px", fontWeight: "550" }}
            >
              Designathon
            </h2>
            <p className="dates">7-17th Aug</p>
          </div>
          <div className="details">
            <b>Details</b>
            <p style={{ color: "#6C6C6C" }}>
              Participants will have to create graphics, audio, UI/UX Design, 3D
              assets according to the prompt to endorse their
              brand/service/product. They will be given a common prompt and then
              the teams will have the following tasks.
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc6c4zwDZTskonae4hhhmwH7C9FxLRvRGpEKlre5g4ZE4LYng/viewform" // Replace this with your Google Form URL
            target="_blank" // Opens the form in a new tab
            rel="noopener noreferrer"
            className="register-button"
            style={{ fontSize: "13px" }}
          >
            REGISTER NOW →
          </a>
        </div>
        <div className="designathon-image">
          <Lottie animationData={DesignathonAnimation} />
        </div>
      </div>
      <div className="event-card image-right">
        <div className="event-info">
          <p className="participants" style={{ color: "#6C6C6C" }}>
            1-3 Participants
          </p>
          <div className="event-header">
            <h2
              className="event-name"
              style={{ fontSize: "30px", fontWeight: "550" }}
            >
              Spacehack
            </h2>
            <p className="dates">7-17th Aug</p>
          </div>
          <div className="details">
            <b>Details</b>
            <p style={{ color: "#6C6C6C" }}>
              Participants will have to create graphics, audio, UI/UX Design, 3D
              assets according to the prompt to endorse their
              brand/service/product. They will be given a common prompt and then
              the teams will have the following tasks.
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc6c4zwDZTskonae4hhhmwH7C9FxLRvRGpEKlre5g4ZE4LYng/viewform" // Replace this with your Google Form URL
            target="_blank" // Opens the form in a new tab
            rel="noopener noreferrer"
            className="register-button"
            style={{ fontSize: "13px" }}
          >
            REGISTER NOW →
          </a>
        </div>
        <div className="designathon-image">
          <Lottie animationData={SpacehackAnimation} />
        </div>
      </div>
      {/* Add more cards with alternating classes */}
    </>
  );
};

export default EventCard;
