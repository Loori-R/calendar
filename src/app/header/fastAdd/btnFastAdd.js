import CreateInputs from "../../events/inputs";
import fastAdd from "./fastAdd";

const btnAdd = document.createElement("button");
btnAdd.textContent = "Добавить";
btnAdd.addEventListener("click", e => {
  const target = e.target;

  const coordinate = target.getBoundingClientRect();
  const left = coordinate.left + pageXOffset;
  const bottom = coordinate.bottom + pageYOffset;

  const activeEventForm = document.getElementById("form_event");
  if (activeEventForm) {
    activeEventForm.remove();
  }

  const classInput = new CreateInputs();
  const container = classInput.createContainer(bottom + 20, left, "event_form");
  container.classList.add("event_form_short");
  const input = classInput.createName("5 марта, День рождение");
  const close = classInput.createClose(container);

  const btnReady = classInput.createBtn("Создать");
  btnReady.addEventListener("click", () => {
    fastAdd(input);
    container.remove();
  });

  container.insertAdjacentElement("beforeend", close);
  container.insertAdjacentElement("beforeend", input);
  container.insertAdjacentElement("beforeend", btnReady);
  target.insertAdjacentElement("afterend", container);
});
export default btnAdd;
