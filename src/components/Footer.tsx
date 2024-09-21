import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <p style={paragraphStyle}>
          Made with <span style={heartStyle}>❤️</span> by COЯE
        </p>
      </div>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "white",

  padding: "10px 0", // Padding for spacing
  textAlign: "center",
  width: "100%", // Full width
  boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for separation
  marginTop: "5%", // Push footer to bottom if using flexbox layout
};

const footerContentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center", // Center content horizontally
  alignItems: "center", // Center content vertically
  width: "100%", // Full width to ensure centering
};

const paragraphStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "14px",
  color: "black",
};

const heartStyle: React.CSSProperties = {
  color: "red",
};

export default Footer;
