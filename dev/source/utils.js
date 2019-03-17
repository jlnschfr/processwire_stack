const querySelector = (selector, el = document) =>
  [].slice.call(el.querySelectorAll(selector));

export default querySelector;
