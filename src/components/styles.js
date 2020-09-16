import { css } from "@emotion/core";

export const NavBar = {
  containner: css`
    display: flex;
    flex: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 25px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.5);
    &:hover {
      color: white;
    }
  `,
  link: css`
    color: black;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
      background-color: rgba(200, 200, 200, 0.2);
    }
  `
};

export const back = {
  containner: css`
    display: flex;
    flex: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 25px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.5);
    &:hover {
      color: white;
    }
  `,
  link: css`
    color: black;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
      background-color: rgba(200, 200, 200, 0.2);
    }
  `
};
