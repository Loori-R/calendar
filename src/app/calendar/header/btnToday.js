import createCalendar from "../calendar";
import insertInRoot from "../insert";

const btnToday = document.createElement("button");
btnToday.className = 'today'
btnToday.textContent = "Сегодня";

btnToday.addEventListener("click", () => {
  const root = document.getElementById("root");
  insertInRoot(root, createCalendar());
});

export default btnToday;
