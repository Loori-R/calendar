const getLastMonday = today => {
  const month = today.getMonth(); // текущий месяц
  const year = today.getFullYear(); // текущий год

  for (let i = 1; i >= -6; i--) {
    const firstDayMonth = new Date(year, month, i); //дата первого дня месяца
    const weekday = firstDayMonth.getDay();
    if (weekday === 1) {
      return i;
    }
  }
};

export default getLastMonday
