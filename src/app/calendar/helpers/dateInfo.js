export default class DateInfo {
  constructor(dateFull) {
    this.dateFull = dateFull;

    this.weekdays = [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота"
    ];

    this.options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
  }
  getDate() {
    return this.dateFull.getDate();
  }
  getDay() {
    return this.dateFull.getDay();
  }
  getMonth() {
    return this.dateFull.getMonth();
  }
  getYear() {
    return this.dateFull.getFullYear();
  }

  getLastDay() {
    return new Date(this.getYear(), this.getMonth() + 1, 0).getDate();
  }

  getWeekday() {
    return this.weekdays[this.getDay()];
  }

  getCurrentDate(short) {
    if (short) {
      return this.dateFull.toLocaleDateString("en-CA");
    }
    return this.dateFull.toLocaleDateString("en-US", this.options);
  }

  checkDayToday() {
    const todaysDate = new Date().toLocaleDateString("en-US", this.options);
    const dayIsToday = this.getCurrentDate() === todaysDate;
    return dayIsToday ? this.getDate() : null;
  }

  getLastMonday() {
    for (let i = 1; i >= -6; i--) {
      const firstDayMonth = new Date(this.getYear(), this.getMonth(), i);
      const weekday = firstDayMonth.getDay();
      if (weekday === 1) {
        return i;
      }
    }
  }
}
