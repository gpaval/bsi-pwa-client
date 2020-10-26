import React from "react";
import StyledIdentity from "./StyledIdentity";
import QrReader from "react-qr-reader";

const Identity = () => {
  // todo: update when the API will be implemented.

  const handleScan = (data) => {
    if (data) {
      console.log(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <StyledIdentity>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "30%" }}
      />
    </StyledIdentity>
  );
};

export default Identity;
