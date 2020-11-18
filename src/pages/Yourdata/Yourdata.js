import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BackComponent from "../../components/BackComponent/BackComponent";
import AxiosInstance from "../../utils/axiosUtils";
import StyledYourdata from "./StyledYourdata";

const Yourdata = () => {
  // todo: update when the API will be implemented.

  const [userDetails, setUserDetails] = useState({});

  const history = useHistory();

  useEffect(() => {
    (async () => {
      const currentUserEmail = (await Auth.currentAuthenticatedUser())
        .attributes.email;

      AxiosInstance.get(`/getData?email=${currentUserEmail}`)
        .then(({ data }) => setUserDetails(data._resultList.flat()[0]))
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <>
      <BackComponent onClick={() => history.goBack()} />
      <StyledYourdata>
        <div className="yourdata">
          <div className="yourdata__title">Your data:</div>

          <div className="yourdata-basic">
            <div className="yourdata-basic__info">
              {(Object.entries(userDetails) || []).map(([key, value]) => (
                <div>
                  {key}: {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </StyledYourdata>
    </>
  );
};

export default Yourdata;
