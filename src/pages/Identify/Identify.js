import React, { useState } from "react";
import StyledIdentity from "./StyledIdentity";
import QrReader from "react-qr-reader";
import BackComponent from "../../components/BackComponent/BackComponent";
import { useHistory } from "react-router-dom";

const Identity = () => {
  const [data, setData] = useState("none");
  const [err, setErr] = useState("none");

  const handleScan = (data) => {
    try {
      const decodedData = JSON.parse(data);
      // todo: send data to the server
      data && setData(data);
    } catch (err) {
      setErr("Invalid token!");
    }
  };
  const handleError = (err) => setErr(err.message);

  const history = useHistory();
  return (
    <>
      <BackComponent onClick={() => history.goBack()} />
      <StyledIdentity>
        <div className="identity">
          <div className="identity__title">
            Please scan the QR code to identify yourself.
          </div>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "300px", width: "300px" }}
          />
          {data && <div>{data}</div>}
          {err && <div>{err}</div>}
        </div>
      </StyledIdentity>
    </>
  );
};

export default Identity;
