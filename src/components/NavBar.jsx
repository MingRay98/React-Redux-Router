/** @jsx jsx */
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NavBar as styles } from "./styles";
import { jsx } from "@emotion/core";

const NavBar = (props) => {
  console.log("router:", props.location.pathname);
  return (
    <div css={styles.containner}>
      <Link to="/" css={styles.link}>
        Home
      </Link>
      <Link to="/showcode" css={styles.link}>
        ShowCode
      </Link>
      <Link to="/counter" css={styles.link}>
        Counter
      </Link>
      <Link to="/404examlpe" css={styles.link}>
        404examlpe
      </Link>
    </div>
  );
};

// function mapStateToProps(state) {
//   return state.router;
// }
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(action, dispatch);
// }
export default connect((state) => state.router)(NavBar);
