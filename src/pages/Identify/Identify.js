import React, { useEffect, useState } from "react";
import StyledIdentity from "./StyledIdentity";
import QrReader from "react-qr-reader";
import BackComponent from "../../components/BackComponent/BackComponent";
import { useHistory } from "react-router-dom";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import loader from "../../assets/images/loader.svg";
import { Auth } from "aws-amplify";
import routes from "../../constants/routesConstants";

const client = new W3CWebSocket(process.env.REACT_APP_WS);

const TYPES = {
  connectionID: "connectionId",
};

const Identity = () => {
  const [data, setData] = useState("none");
  const [err, setErr] = useState("none");
  const [isInitedWs, setIsInitedWs] = useState(false);
  const [isCallingServer, setIsCallingServer] = useState(false);

  const handleScan = (data) => {
    try {
      const decodedData = JSON.parse(data);
      // todo: send data to the server
      if (
        decodedData &&
        decodedData.connectionId &&
        decodedData.connectionId !== ""
      ) {
        setIsCallingServer(true);
        data && setData(data);

        Auth.currentAuthenticatedUser().then((user) => {
          const { email } = user.attributes;
          client.send(
            JSON.stringify({
              email,
              connectionId: decodedData.connectionId,
              type: TYPES.connectionID,
              device: "mobile",
            })
          );
        });
      }
    } catch (err) {
      setErr("Invalid token!");
    }
  };

  const handleError = (err) => setErr(err.message);
  useEffect(() => {
    client.onopen = (connection) => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = ({ data }) => {
      const receivedData = JSON.parse(data);
      // todo: parse server data
      history.push(routes.successfulIdentify);
    };
  });

  const history = useHistory();
  return (
    <>
      <BackComponent onClick={() => history.goBack()} />
      <StyledIdentity>
        <div className="identity">
          <div className="identity__title">
            Please scan the QR code to identify yourself.
          </div>
          {(isCallingServer && <img className="loader" src={loader} />) || (
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: "300px", width: "300px" }}
            />
          )}

          {data && <div>{data}</div>}
          {err && <div>{err}</div>}
        </div>
      </StyledIdentity>
    </>
  );
};

export default Identity;
