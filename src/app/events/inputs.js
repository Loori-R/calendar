const createInputs = (eventInfo, date, hasValue) => {
  const name = document.createElement("input");
  name.type = "text";
  name.value = eventInfo.eventName;
  name.placeholder = "Событие";

  const dateField = document.createElement("input");
  dateField.value = date;
  dateField.type = "date";
  dateField.addEventListener("change", () => {
    hasValue(dateField);
  });

  const participants = document.createElement("input");
  participants.type = "text";
  participants.value = eventInfo.participants;
  participants.placeholder = "Имена участников";

  const description = document.createElement("textarea");
  description.value = eventInfo.description;
  description.placeholder = "Описание";

  return {
    name: name,
    date: dateField,
    participants: participants,
    description: description
  };
};
export default createInputs;
