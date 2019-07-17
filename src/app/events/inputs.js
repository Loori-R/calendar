class CreateInputs {
  constructor(eventInfo = {}, date) {
    this.name = eventInfo.eventName || "";
    this.participants = eventInfo.participants || "";
    this.description = eventInfo.description || "";
    this.date = date;
  }

  createName(placeholder) {
    const name = document.createElement("input");
    name.type = "text";
    name.value = this.name;
    name.placeholder = placeholder || "Событие";
    return name;
  }

  createDate() {
    const dateField = document.createElement("input");
    dateField.value = this.date;
    dateField.type = "date";
    return dateField;
  }

  createParticipants() {
    const participants = document.createElement("input");
    participants.type = "text";
    participants.value = this.participants;
    participants.placeholder = "Имена участников";
    return participants;
  }

  createDesc() {
    const description = document.createElement("textarea");
    description.value = this.description;
    description.placeholder = "Описание";
    return description;
  }

  createClose(form) {
    const btnClose = document.createElement("span");
    btnClose.className = "close";
    btnClose.textContent = "x";
    btnClose.addEventListener("click", () => {
      form.remove();
    });
    return btnClose;
  }

  createBtn(text) {
    const btn = document.createElement("button");
    btn.textContent = text;
    return btn;
  }

  createContainer(top, right, classname) {
    const conainer = document.createElement("div");
    conainer.id = "form_event";
    conainer.classList.add(classname);

    const clientHeight = document.documentElement.clientHeight;
    const clientWidth = document.documentElement.clientWidth;
    const width = clientWidth >= 1024 ? 400 : 200;
    const height = clientHeight >= 1020 ? 500 : 300;
    const posX = right + width;
    const posY = top + height;
    const differenceX = posX - clientWidth;
    const differenceY = posY - clientHeight;

    if (posX > clientWidth) {
      right = right - differenceX;
    }
    if (posY > clientHeight) {
      top = top - differenceY;
    }

    conainer.style.cssText = `
      width: ${width}px;
      height: ${height}px;
      top:${top}px;
      left:${right}px;`;

    return conainer;
  }

  createAll() {
    return {
      name: this.createName(),
      date: this.createDate(),
      participants: this.createParticipants(),
      description: this.createDesc()
    };
  }
}

export default CreateInputs;
