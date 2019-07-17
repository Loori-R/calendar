import createCalendar from "../calendar";
import insertIn from "../../helpers/insert";

const btnToday = document.createElement("button");
btnToday.className = "today";
btnToday.textContent = "Сегодня";

btnToday.addEventListener("click", () => {
  const root = document.getElementById("root");
  insertIn(root, createCalendar());
});

export default btnToday;
