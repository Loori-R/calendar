import createCalendar from "./calendar/calendar";
import createHeader from "./header/header";
import "./styles.css";
const root = document.getElementById("root");

root.insertAdjacentElement("afterbegin", createHeader());
root.insertAdjacentElement("beforeend", createCalendar());
