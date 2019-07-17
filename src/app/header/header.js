import "./header.css";
import fastAddEvent from "./fastAddEvent";

const createHeader = () => {
  const header = document.createElement("header");
  header.insertAdjacentElement("afterbegin", fastAddEvent());
  return header;
};
export default createHeader;
