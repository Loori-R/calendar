const insertIn = (targetElement, element) => {
  if (targetElement.hasChildNodes()) {
    targetElement.replaceChild(element, root.childNodes[0]);
  } else {
    targetElement.insertAdjacentElement("beforebegin", element);
  }
};

export default insertIn;
