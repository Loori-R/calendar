const insertIn = (targetElement, element, i) => {
  if (targetElement.hasChildNodes()) {
    targetElement.replaceChild(element, targetElement.childNodes[i]);
  } else {
    targetElement.insertAdjacentElement("beforebegin", element);
  }
};

export default insertIn;
