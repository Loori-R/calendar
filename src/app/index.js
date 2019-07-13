import createCalendar from './calendar/calendar'
import './styles.css';
const root = document.getElementById("root");

root.insertAdjacentElement('beforeend',createCalendar())
