import btnToday from "./btnToday";
import { btnPrev, btnNext } from "./monthNextPrev";

const createThead = (today = new Date()) => {
  const month = today.toLocaleDateString("ru", { month: "long" });
  const year = today.toLocaleDateString("ru", { year: "numeric" });

  const thead = document.createElement("thead");
  const row = document.createElement("tr");

  const CellMonthYear = document.createElement("td");
  CellMonthYear.className = 'controls_months'
  const divMonthYear = document.createElement("div");
  divMonthYear.textContent = `${month} ${year}`;
  divMonthYear.insertAdjacentElement("afterbegin", btnPrev);
  divMonthYear.insertAdjacentElement("beforeend", btnNext);
  CellMonthYear.insertAdjacentElement("beforeend", divMonthYear);

  const CellToday = document.createElement("td");
  CellToday.insertAdjacentElement("afterbegin", btnToday);

  row.insertAdjacentElement("afterbegin", CellMonthYear);
  row.insertAdjacentElement("beforeend", CellToday);
  thead.insertAdjacentElement("afterbegin", row);

  return thead;
};

export default createThead;
