const eventForm = (top, right, date) => {
  const form = document.createElement("div");
  form.id = "form_event";
  form.classList.add("event_form");
  form.style.cssText = `
    top:${top}px;
    left:${right + 20}px;
    `;

  const close = document.createElement("span");
  close.className = "close";
  close.textContent = "x";

  const name_event = document.createElement("input");
  name_event.type = "text";
  name_event.placeholder = "Событие";

  const date_input = document.createElement("input");
  date_input.value = date;
  date_input.type = "date";
  date_input.addEventListener("change", () => {
    if (date_input.value === "") {
      date_input.classList.add("warning");
    }
    if (date_input.value !== "") {
      date_input.classList.remove("warning");
    }
  });

  const participants = document.createElement("input");
  participants.type = "text";
  participants.placeholder = "Имена участников";

  const description = document.createElement("textarea");
  description.placeholder = "Описание";

  const readyBtn = document.createElement("input");
  readyBtn.type = "button";
  readyBtn.value = "Готово";
  readyBtn.addEventListener("click", () => {
    const event = {};
    if (name_event.value === "") {
      name_event.value = date_input.value;
    } else {
      event.name_event = name_event.value;
    }

    if (description.value !== "") {
      event.description = description.value;
    }
    if (participants.value !== "") {
      event.participants = participants.value;
    }
    if (date_input.value === "") {
      date_input.classList.toggle("warning");
      return;
    }
    localStorage.setItem(date_input.value, JSON.stringify(event));
    const info_back = localStorage.getItem(date_input.value);
    console.log(JSON.parse(info_back));
  });

  const delBtn = document.createElement("input");
  delBtn.type = "button";
  delBtn.value = "Удалить";

  const containerForBtn = document.createElement("p");
  containerForBtn.insertAdjacentElement("afterbegin", delBtn);
  containerForBtn.insertAdjacentElement("afterbegin", readyBtn);

  form.insertAdjacentElement("afterbegin", containerForBtn);
  form.insertAdjacentElement("afterbegin", description);
  form.insertAdjacentElement("afterbegin", participants);
  form.insertAdjacentElement("afterbegin", date_input);
  form.insertAdjacentElement("afterbegin", name_event);
  form.insertAdjacentElement("afterbegin", close);

  return form;
};

export default eventForm;
