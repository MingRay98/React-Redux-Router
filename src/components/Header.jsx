/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const style = css`
  height: 50px;
  width: 100%;
  color: pink;
  background-color: rgb(50, 50, 50);
  display: flex;
  justify-content: space-around;
  font-size: 40px;
  line-height: 50px;
`;

const Header = () => {
  return <div css={style}>PERFECT</div>;
};

export default Header;
