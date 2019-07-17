import eventForm from "./eventForm";
import checkClass from "../helpers/checkClass";

const addEvent = e => {
  const target = e.target;
  const parent = target.offsetParent;

  const elHasClass = checkClass(e.target, "typical_day");
  const parHasClass = checkClass(parent, "typical_day");

  if (!elHasClass && !parHasClass) {
    return;
  }

  const elem = elHasClass ? e.target : parent;
  const date = elem.dataset.date;

  const coordinate = elem.getBoundingClientRect();
  const right = coordinate.right + pageXOffset;
  const top = coordinate.top + pageYOffset;

  const activeCell = document.querySelector(".active_cell");
  if (activeCell) {
    activeCell.classList.remove("active_cell");
  }

  const activeEventForm = document.getElementById("form_event");
  if (activeEventForm) {
    activeEventForm.remove();
  }

  elem.insertAdjacentElement("beforeend", eventForm(top, right, date, elem));
  elem.classList.toggle("active_cell");
};

export default addEvent;
