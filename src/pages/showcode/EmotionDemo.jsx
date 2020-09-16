/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { emotion } from "../../snippet/snippet";

const styles = {
  containner: css`
    height: 50px;
    width: 100%;
    color: pink;
    background-color: rgb(50, 50, 50);
    display: flex;
    justify-content: space-around;
    font-size: 30px;
    line-height: 50px;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  `
};

const Tstyle = (props) => ({
  backgroundColor: "rgba(180,180,180,0.5)",
  color: props || "red",
  "&:hover": {
    color: "yellow"
  }
});

const cssVariable = "pink";

const EmotionDemo = (props) => {
  return (
    <div>
      <div css={styles.containner}>MediaQuery</div>
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {emotion.mediaQuery}
      </SyntaxHighlighter>
      <div css={Tstyle()}>React Redux Playground , @emotion , router</div>
      <div css={css(Tstyle("green"))} style={{}}>
        Secondary
      </div>
      <div css={{ padding: 8, border: "2px solid blue" }} />
      <div css={css({ ...Tstyle(), color: `${cssVariable}` })}>Hover me</div>
    </div>
  );
};

export default EmotionDemo;
