import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import snippet from "../../snippet/snippet";

const home = () => {
  return (
    <div>
      <Link to="/showcode/emotion">@emotion/core</Link>
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {snippet.foo}
      </SyntaxHighlighter>
    </div>
  );
};

export default home;
