import React, { useEffect, useState } from "react";
import StyledIdentity from "./StyledIdentity";
import QrReader from "react-qr-reader";
import BackComponent from "../../components/BackComponent/BackComponent";
import { useHistory } from "react-router-dom";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import loader from "../../assets/images/loader.svg";
import { Auth } from "aws-amplify";
import routes from "../../constants/routesConstants";
import { Modal } from "react-bootstrap";
import lockIcon from "../../assets/images/lockIcon.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const client = new W3CWebSocket(process.env.REACT_APP_WS);

const TYPES = {
  connectionID: "connectionId",
  registering: "registering",
};

const Identity = () => {
  const [data, setData] = useState("none");
  const [err, setErr] = useState("none");
  const [isCallingServer, setIsCallingServer] = useState(false);
  const [serviceTitle, setServiceTitle] = useState("");
  const [decodedData, setDecodedData] = useState({});

  const handleScan = (data) => {
    try {
      const decodedData = JSON.parse(data);
      // todo: send data to the server
      if (
        decodedData &&
        decodedData.connectionId &&
        decodedData.connectionId !== ""
      ) {
        setDecodedData(decodedData);
        data && setData(data);
      }
    } catch (err) {
      setErr("Invalid token!");
    }
  };

  const onCancel = () => {
    setDecodedData({});
  };

  const onAllow = () => {
    Auth.currentAuthenticatedUser().then((user) => {
      const { email } = user.attributes;
      client.send(
        JSON.stringify({
          email,
          connectionId: decodedData.connectionId,
          requiredKeys: decodedData.requiredKeys,
          type: TYPES.registering,
          device: "mobile",
        })
      );

      history.push({
        pathname: routes.successfulIdentify,
        state: { name: decodedData.name },
      });
    });
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
        <Modal show={Object.keys(decodedData).length > 0}>
          <Modal.Header closeButton onClick={onCancel} />

          <Modal.Body>
            <img src={lockIcon} alt="Lock" className="modal__icon" />

            <div className="modal-content__title">
              <b>{decodedData.name}</b> wants to receive access to the following
              data:
            </div>

            <div className="modal-content">
              {(decodedData.requiredKeys || []).map((key) => (
                <div className="modal-content__text">{key}</div>
              ))}
            </div>

            <div className="modal-buttons">
              <ButtonComponent
                width="116px"
                height="52px"
                type="white"
                text={"Cancel"}
                onClick={onCancel}
              />
              <ButtonComponent
                width="116px"
                height="52px"
                text={"Allow"}
                onClick={onAllow}
              />
            </div>
          </Modal.Body>
        </Modal>

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
        </div>
      </StyledIdentity>
    </>
  );
};

export default Identity;
