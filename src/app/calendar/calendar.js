import { weekdays, square } from "./settings";
import getLastMonday from "./helpers/lastMonday";
import createThead from "./header/thead";

const createCalendar = (today = new Date()) => {
  let day = null;
  const dateIsToday =
    today.toLocaleDateString() === new Date().toLocaleDateString();
  if (dateIsToday) {
    day = today.getDate();
  }
  const month = today.getMonth();
  const year = today.getFullYear();
  const lastDayMonth = new Date(year, month - 1, 0).getDate();

  const monday = getLastMonday(today);

  const table = document.createElement("table");
  const thead = createThead(today);
  const tbody = document.createElement("tbody");
  const todayLocalStr = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  table.dataset.date = todayLocalStr;
  table.insertAdjacentElement("afterbegin", thead);

  let row = document.createElement("tr");

  for (let i = monday; i < square + monday; i++) {
    const dateOfDay = new Date(year, month, i);
    const dateNum = dateOfDay.getDate();

    const weekdayNum = dateOfDay.getDay();
    const weekdayStr = weekdays[weekdayNum];

    const dateContainer = document.createElement("span");
    dateContainer.className = "date";

    const cell = document.createElement("td");

    if (i === day) {
      cell.className = "today";
    }

    if (i < 1 || i > lastDayMonth) {
      cell.className = "another_month";
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
