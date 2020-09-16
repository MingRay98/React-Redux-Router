const code = {
  index: ``,
  App: ``,
  configureStore: ``,
  rootReducer: ``,
  home: ``,
  foo: `
import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import snippet from "../snippet/snippet";

const home = () => {
  return (
    <div>
      <Link to="/">Back</Link>
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {snippet.foo}
      </SyntaxHighlighter>
    </div>
  );
};

export default home;`
};

export const emotion = {
  mediaQuery: `
const NavBar = {
  containner: css\`
    height: 50px;
    width: 100%;
    color: pink;
    background-color: rgb(50, 50, 50);
    display: flex;
    justify-content: space-around;
    font-size: 40px;
    line-height: 50px;
    @media (min-width: 420px) {
      font-size: 50px;
    }
  \`
};

const EmotionDemo = (props) => {
  return (
    <div>
      <div css={NavBar.containner}>Hover me</div>
    </div>
  );
};
`
};

export default code;
