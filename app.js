const checkbox = document.querySelector("input[name=theme]");
const body = document.querySelector("body");

const getStyle = (element, style) => {
  window.getComputedStyle(element).getPropertyValue(style);
};

const initialColors = {
  bg: window.getComputedStyle(body).getPropertyValue("--bg"),
  topBgPattern: window
    .getComputedStyle(body)
    .getPropertyValue("--top-BgPattern"),
  cardBg: window.getComputedStyle(body).getPropertyValue("--card-Bg"),
  graishText: window.getComputedStyle(body).getPropertyValue("--graish-Text"),
  darkText: window.getComputedStyle(body).getPropertyValue("--dark-Text"),
  hover: window.getComputedStyle(body).getPropertyValue("--hover"),
};

const darkMode = {
  bg: "hsl(230, 17%, 14%)",
  topBgPattern: "hsl(232, 19%, 15%)",
  cardBg: "hsl(228, 28%, 20%)",
  graishText: "hsl(228, 34%, 66%)",
  darkText: "hsl(0, 0%, 100%)",
  hover: "hsl(228, 28%, 25%)",
};

const transformKey = (key) => "--" + key.replace(/([A-Z])/, "-$1");

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    body.style.setProperty(transformKey(key), colors[key])
  );
};

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);
});
