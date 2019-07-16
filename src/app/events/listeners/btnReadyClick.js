const btnReady = (res, inputs, eventTemplate, elem, form, today) => {
  const date = inputs.date;
  const name = inputs.name;
  const description = inputs.description;
  const participants = inputs.participants;

  if (name.value === "") {
    name.value = today;
    res.eventName = name.value;
  } else {
    res.eventName = name.value;
  }

  if (date.value === "") {
    date.classList.toggle("warning");
    return;
  }
  res.description = description.value;
  res.participants = participants.value;

  form.remove();
  localStorage.setItem(date.value, JSON.stringify(res));
  const eventHTML = eventTemplate(res.eventName, res.participants, res.description);

  const hasEvent = elem.children[elem.children.length - 1] || false;
  if (elem.dataset.event) {
    hasEvent.remove();
  }

  elem.dataset.event = true;
  elem.insertAdjacentHTML("beforeend", eventHTML);
};

export default btnReady;
