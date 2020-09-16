/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { connect } from "react-redux";

const Box = (props) => (
  <div
    css={{
      padding: 8,
      border: "2px solid blue",
      backgroundColor: "midnightblue"
    }}
    {...props}
  />
);

const Tstyle = (props) => ({
  backgroundColor: "rgba(180,180,180,0.5)",
  color: props || "red",
  "&:hover": {
    color: "yellow"
  }
});

const pinkColor = "pink";

const add = (num) => {
  console.log(num, "觸發");
  return { type: "ADD", payload: num };
};

const minus = (num) => {
  console.log(num, "觸發");
  return { type: "MINUS", payload: num };
};

const mapDispatchToProps = {
  add: add,
  minus: minus
};

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <h1 css={Tstyle()}>React Redux Playground , @emotion , router</h1>
      <hr />
      <h2 css={css(Tstyle("green"))} style={{}}>
        Secondary
      </h2>
      <Box
        onClick={() => console.log("press")}
        style={{ backgroundColor: "pink" }}
      >
        GGGG
      </Box>
      <div css={css({ ...Tstyle(), color: pinkColor })}>Hover me</div>
      <button onClick={() => props.add(1)}>+</button>
      <button onClick={() => props.minus(1)}>-</button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Home);
