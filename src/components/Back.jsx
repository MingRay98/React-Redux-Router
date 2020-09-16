/** @jsx jsx */
import { jsx } from "@emotion/core";
import { history } from "../store/configureStore";

const Back = (props) => {
  return (
    <div
      style={{ textDecoration: "underline", cursor: "pointer" }}
      onClick={() => history.goBack()}
    >
      {props.text || "back"}
    </div>
  );
};

export default Back;
