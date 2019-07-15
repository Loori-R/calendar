import { square } from "./settings";
import addEvent from "../events/addEvent";
import createThead from "./thead/thead";
import DateInfo from "./helpers/dateInfo";

const createCalendar = (currentDate = new Date()) => {
  const date = new DateInfo(currentDate);
  const dayIsToday = date.checkDayToday();
  const month = date.getMonth();
  const year = date.getYear();
  const lastDayMonth = date.getLastDay();
  const monday = date.getLastMonday();

  const table = document.createElement("table");
  const thead = createThead(currentDate);
  const tbody = document.createElement("tbody");

  table.dataset.date = date.getCurrentDate();
  table.insertAdjacentElement("afterbegin", thead);

  table.addEventListener("click", e => {
    addEvent(e);
  });

  let row = document.createElement("tr");

  for (let i = monday; i < square + monday; i++) {
    const dateOfDay = new DateInfo(new Date(year, month, i));
    const dateNum = dateOfDay.getDate();
    const weekdayNum = dateOfDay.getDay();
    const weekdayStr = dateOfDay.getWeekday();

    const dateContainer = document.createElement("span");
    dateContainer.className = "date";

    const cell = document.createElement("td");
    cell.dataset.date = dateOfDay.getCurrentDate('short');
    cell.classList.add("typical_day");
    if (i === dayIsToday) {
      cell.classList.add("today");
    }

    if (i < 1 || i > lastDayMonth) {
      cell.classList.add("another_month");
    }

    if (i - monday < 7) {
      const weekdayContainer = document.createElement("span");
      weekdayContainer.className = "weekday_name";
      weekdayContainer.textContent = `${weekdayStr}, `;

      dateContainer.textContent = dateNum;

      cell.insertAdjacentElement("afterbegin", weekdayContainer);
      cell.insertAdjacentElement("beforeend", dateContainer);
    } else {
      dateContainer.textContent = dateNum;
      cell.insertAdjacentElement("beforeend", dateContainer);
    }

    row.insertAdjacentElement("beforeend", cell);

    if (weekdayNum === 0) {
      tbody.insertAdjacentElement("beforeend", row);
      row = document.createElement("tr");
    }

    if (i === square + monday - 1) {
      table.insertAdjacentElement("beforeend", tbody);
    }
  }

  return table;
};

export default createCalendar;
