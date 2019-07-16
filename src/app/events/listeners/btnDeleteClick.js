const btnDelete = (inputs,elem, form) => {
  form.remove();

  const hasEvent = elem.children[elem.children.length - 1] || false;
  if (elem.dataset.event) {
    hasEvent.remove();
  }

  elem.removeAttribute('data-event')
  elem.classList.remove('has_event')
  localStorage.removeItem(inputs.date.value);
};

export default btnDelete;
