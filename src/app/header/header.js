import "./header.css";
import btnFastAdd from "./fastAdd/btnFastAdd";
import btnUpdate from "./update/btnUpdate";
import inputSearch from "./seacrh/inputSearch";

const createHeader = () => {
  const header = document.createElement("header");
  header.insertAdjacentElement("afterbegin", btnFastAdd);
  header.insertAdjacentElement("beforeend", btnUpdate);
  header.insertAdjacentElement("beforeend", inputSearch);
  return header;
};
export default createHeader;
