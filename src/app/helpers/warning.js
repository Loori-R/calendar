const warning = input => {
  input.classList.add("warning");
  setTimeout(() => {
    input.classList.remove("warning");
  }, 700);
};

export default warning;
