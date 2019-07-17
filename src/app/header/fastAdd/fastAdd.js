import hasValue from "../../helpers/warning";

const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "ноября",
  "декабря"
];

const fastAdd = input => {
  if (!input.value) {
    hasValue(input);
    return;
  }

  const reg = /(\d+)\s([а-я]+),\s([а-я].+|[a-z].+)/i;
  const value = input.value.match(reg);
  if (!value) {
    hasValue(input);
    return;
  }

  const dayNum = value[1];
  const monthNum = months.indexOf(value[2]) + 1;
  const name = value[3];

  if (!dayNum || monthNum < 1 || !value) {
    hasValue(input);
    return;
  }

  const day = dayNum < 9 ? "0" + dayNum : dayNum;
  const month = monthNum < 9 ? "0" + monthNum : monthNum;
  const year = new Date().getFullYear();
  const date = `${year}-${month}-${day}`;

  const event = {
    eventName: name,
    description: "",
    participants: ""
  };

  localStorage.setItem(date, JSON.stringify(event));
};

export { months };
export default fastAdd;
