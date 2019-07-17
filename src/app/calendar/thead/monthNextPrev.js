import createCalendar from "../calendar";
import insertIn from "../../helpers/insert";

const btnNext = document.createElement("button");
btnNext.textContent = "▶";

const btnPrev = document.createElement("button");
btnPrev.textContent = "◀";

const clickMonth = param => {
  const root = document.getElementById("root");
  const tableDate = root.childNodes[1].dataset.date;
  const date = new Date(tableDate);
  date.setMonth(date.getMonth() + param);
  insertIn(root, createCalendar(date), 1);
};

btnNext.addEventListener("click", () => {
  clickMonth(+1);
});
btnPrev.addEventListener("click", () => {
  clickMonth(-1);
});

export { btnPrev, btnNext };
