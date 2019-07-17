import createInputs from "../events/inputs";
import CreateInputs from "../events/inputs";

const fastAddEvent = () => {
  let click = false;
  const btnAdd = document.createElement("button");
  btnAdd.textContent = "Добавить";
  btnAdd.addEventListener("click", e => {
    if (click) {
      return;
    }

    click = true;
    const target = e.target;
    const container = document.createElement("div");
    container.classList.add("event_form");
    container.classList.add("event_form_short");
    const classInput = new CreateInputs();
    const input = classInput.createName("5 марта, День рождение");
    const close = classInput.createClose(container);
    close.addEventListener("click", () => {
      click = false;
      console.log(click);
    });
    container.insertAdjacentElement("beforeend", close);
    container.insertAdjacentElement("beforeend", input);
    target.insertAdjacentElement("afterend", container);
  });
  return btnAdd;
};
export default fastAddEvent;
