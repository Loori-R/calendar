import "./search.css";
import { months } from "../fastAdd/fastAdd";

const container = document.createElement("div");
container.classList.add("container_search");

const search = document.createElement("input");
search.type = "search";
search.placeholder = "Событие, дата или участник";
search.classList.add("search");

const listContainer = document.createElement("div");
listContainer.classList.add("event_list");

search.addEventListener("input", () => {
  const events = {};
  const eventsStr = {};

  const regExp = /{"eventName":"|","description":"|","participants":"|"}/gi;

  for (let key in localStorage) {
    const event = localStorage.getItem(key);
    if (event && event !== "INFO") {
      events[key] = JSON.parse(event);

      const str = key + event;
      eventsStr[key] = str.replace(regExp, " ");
    }
  }

  listContainer.innerHTML = "";
  const value = search.value;
  const reg = new RegExp(search.value, "gi");

  if (value === "") {
    listContainer.remove();
    return;
  }

  const list = document.createElement("ul");
  listContainer.insertAdjacentElement("beforeend", list);
  container.insertAdjacentElement("beforeend", listContainer);

  for (let key in eventsStr) {
    const date = new Date(key);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const template = `<b>${events[key].eventName}</b><br/>${day} ${month}<hr>`;

    const elemList = document.createElement("li");
    elemList.insertAdjacentHTML("beforeend", template);

    if (!reg.test(eventsStr[key])) {
      elemList.classList.add("unvisible");
    }

    list.insertAdjacentElement("beforeend", elemList);
  }
});

container.insertAdjacentElement("beforeend", search);

export default container;
