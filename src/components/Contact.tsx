import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyles = {
  height: "400px",
  width: "100%",
};

const defaultCenter = {
  lat: 28.6139,
  lng: 77.209,
};

const Contact: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        paddingLeft: "10%",
        paddingRight: "10%",
        width: "100%",
        minHeight: "100vh", // Ensure the container takes at least the full height of the viewport
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          textAlign: "left",
          fontSize: "2.3em",
          fontWeight: "bold",
          marginLeft: "2%",
          marginTop: "5%",
        }}
      >
        CONTACT US
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 50%", padding: "20px" }}>
          <LoadScript googleMapsApiKey="AIzaSyAOm-6oF36I0r31sf46P0rpvviZ167rDRk">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={14}
              center={defaultCenter}
            >
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
        </div>
        <div
          style={{
            flex: "1 1 40%",
            paddingTop: "10%",
            textAlign: "left",
            marginLeft: "4%",
          }}
        >
          <h3>
            <b>Delhi Public School, Dwarka</b>
          </h3>
          <p style={{ fontSize: "20px" }}>
            <b style={{ color: "white" }}> Address</b>:
            <br />
            Phase I, Dwarka Sector-3, Dwarka, New Delhi, Delhi 110078
          </p>
          <p style={{ fontSize: "20px" }}>
            <b style={{ color: "white" }}>Phone:</b> 011 2507 4472
          </p>
          <p style={{ fontSize: "20px" }}>
            <b style={{ color: "white" }}>Email:</b> mail@dpsdwarka.com
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "black",
              padding: "20px",
              textAlign: "left",
              width: "100%",
            }}
          >
            <h4>Amit Dua</h4>
            <p style={{ color: "#f26227" }}>
              <b>TEACHER IN-CHARGE</b>
            </p>
            <p>📞 +91 9560034355</p>
            <p>✉️ arnavverma2610@gmail.com</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "10%" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for contacting us! Your message has been sent.");
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            maxWidth: "100%",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <input
            type="text"
            placeholder="Name"
            style={{
              padding: "10px",
              backgroundColor: "#000",
              color: "#808080",
              border: "1px solid #333",
              boxSizing: "border-box",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: "10px",
              backgroundColor: "#000",
              color: "#808080",
              border: "1px solid #333",
              boxSizing: "border-box",
            }}
          />
          <textarea
            placeholder="Message"
            rows={5}
            style={{
              padding: "10px",
              backgroundColor: "#000",
              color: "#808080",
              gridColumn: "span 2",
              border: "1px solid #333",
              boxSizing: "border-box",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "grey",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              gridColumn: "span 2",
              marginBottom: "10%",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
