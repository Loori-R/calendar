import createInputs from "./inputs";
import hasValue from "./listeners/hasValue";
import eventTemplate from "./template/eventTemplate";
import btnReadyClick from "./listeners/btnReadyClick";
import btnDeleteClick from "./listeners/btnDeleteClick";

const eventForm = (top, right, date, elem) => {
  const form = document.createElement("div");
  form.id = "form_event";
  form.classList.add("event_form");
  form.style.cssText = `
    top:${top}px;
    left:${right + 20}px;
    `;

  const defaultEvent = {
    eventName: "",
    description: "",
    participants: ""
  };
  const eventFromLocal = localStorage.getItem(date);
  const eventInfo = JSON.parse(eventFromLocal) || defaultEvent;
  const inputs = createInputs(eventInfo, date, hasValue);

  const btnClose = document.createElement("span");
  btnClose.className = "close";
  btnClose.textContent = "x";
  btnClose.addEventListener("click", () => {
    form.remove();
  });

  const btnReady = document.createElement("button");
  btnReady.textContent = "Готово";
  btnReady.addEventListener("click", () => {
    btnReadyClick(eventInfo, inputs, eventTemplate, elem, form, date);
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "Удалить";
  delBtn.addEventListener("click", () => {
    btnDeleteClick(inputs, elem, form);
  });

  const containerForBtn = document.createElement("p");
  containerForBtn.insertAdjacentElement("afterbegin", delBtn);
  containerForBtn.insertAdjacentElement("afterbegin", btnReady);

  for (let i in inputs) {
    form.insertAdjacentElement("beforeend", inputs[i]);
  }

  form.insertAdjacentElement("beforeend", containerForBtn);
  form.insertAdjacentElement("afterbegin", btnClose);

  return form;
};

export default eventForm;
