import React from "react";

export const Qrcode = () => {
  function genarator() {
    return alert("QrCode Complete");
  }
  return (
    <div className="app-container">
      <h1>Qr Code Generator</h1>
      <img
        src="images/Pro.jpg"
        alt="Qrcode"
        style={{ width: "20%" }}
        className="qrimg"
        onMouseEnter={genarator}
      />
      <div className="input">
        <label htmlFor="dataInput">Data For Qr Code:</label>
        <input
          type="text"
          id="dataInput"
          placeholder="Enter Data For Qr Code"
        />
        <label htmlFor="dataInput">Image size(e.g.,150):</label>
        <input type="text" id="dataInput" placeholder="Enter Image Size " />
        <button className="generate-button" onClick={genarator}>
          Generate Qr Code{" "}
        </button>
        <button className="download-button">Download Qr Code </button>
      </div>
      <p>
        Designed By ,<a href="#">Jeeva_webDeveloper</a>
      </p>
    </div>
  );
};
