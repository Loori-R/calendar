import eventForm from './fullEventForm'

const addEvent = e => {
  const checkClass = el => {
    const str = el.classList.value;
    return /typical_day/.test(str);
  };

  if (!checkClass(e.target) && !checkClass(e.target.parentElement)) {
    return;
  }

const elem = checkClass(e.target) ? e.target : e.target.parentElement;


    const coordinate = elem.getBoundingClientRect()
    const right = coordinate.right + pageXOffset
    const top = coordinate.top + pageYOffset
    // есть ли у элемента класс, если есть то взять его координаты, если есть у его родителя, то кординаты родителя
  const date = elem.dataset.date;



  const activeCell = document.querySelector(".active_cell");
  if (activeCell) {
    activeCell.classList.remove("active_cell");
    document.getElementById("form_event").remove(1);
  }

    elem.insertAdjacentElement("beforeend", eventForm(top,right,date));
    elem.classList.toggle("active_cell");
};

export default addEvent;
