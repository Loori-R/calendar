import CreateInputs from "./inputs";
import eventTemplate from "./template/eventTemplate";
import btnReadyClick from "./listeners/btnReadyClick";
import btnDeleteClick from "./listeners/btnDeleteClick";

const eventForm = (top, right, date, elem) => {
  const defaultEvent = {
    eventName: "",
    description: "",
    participants: ""
  };
  const eventFromLocal = localStorage.getItem(date);
  const eventInfo = JSON.parse(eventFromLocal) || defaultEvent;
  const classInputs = new CreateInputs(eventInfo, date);

  const container = classInputs.createContainer(top, right + 20, "event_form");

  const inputs = classInputs.createAll();

  const btnClose = classInputs.createClose(container);

  const btnReady = classInputs.createBtn("Готово");
  btnReady.addEventListener("click", () => {
    btnReadyClick(eventInfo, inputs, eventTemplate, elem, container, date);
  });

  const delBtn = classInputs.createBtn("Удалить");
  delBtn.addEventListener("click", () => {
    btnDeleteClick(inputs, elem, container);
  });

  const containerForBtn = document.createElement("p");
  containerForBtn.insertAdjacentElement("afterbegin", delBtn);
  containerForBtn.insertAdjacentElement("afterbegin", btnReady);

  for (let i in inputs) {
    container.insertAdjacentElement("beforeend", inputs[i]);
  }

  container.insertAdjacentElement("beforeend", containerForBtn);
  container.insertAdjacentElement("afterbegin", btnClose);

  return container;
};

export default eventForm;
