const checkClass = (el, className) => {
  if (!el || typeof className !== "string") {
    return;
  }

  const re = new RegExp(className);
  const str = el.classList.value;
  return re.test(str);
};

export default checkClass;
