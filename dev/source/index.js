import "./index.css";
import "./polyfills";
import "./patterns/02-atoms/image/image";

import querySelector from "./utils";
import ImageBlock from "./patterns/03-components/image-block/image-block";

class App {
  constructor() {
    querySelector(".js-ImageBlock").forEach(el => {
      new ImageBlock(el); // eslint-disable-line
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let app = new App(); // eslint-disable-line
});
