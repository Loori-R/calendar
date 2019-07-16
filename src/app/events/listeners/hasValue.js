const hasValue = (input) => {
     if (input.value === "") {
      input.classList.add("warning");
    }
    if (input.value !== "") {
      input.classList.remove("warning");
    }
}

export default hasValue
