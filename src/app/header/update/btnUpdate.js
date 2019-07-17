import insertIn from "../../helpers/insert";
import createCalendar from "../../calendar/calendar";

const btnUpdate = document.createElement("button");
btnUpdate.textContent = "Обновить";
btnUpdate.addEventListener("click", () => {
  const root = document.getElementById("root");
  const tableDate = root.childNodes[1].dataset.date;
  const date = new Date(tableDate);
  insertIn(root, createCalendar(date), 1);
});

export default btnUpdate;
