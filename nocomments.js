const paragraph = document.getElementById("myParagraph").innerText;
const display = document.getElementById("myWordCloud");
const words = paragraph.toLowerCase().match(/\w+/g); // 👈
const singles = [...new Set(words)];
const occurances = singles.map((single) => {
  let count = 0;
  words.forEach((word) => {
    if (word == single) count++;
  });
  return { [single]: count };
});
occurances.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);
const selection = occurances.slice(0, 12);
let size = 64;
let state = true;
selection.forEach((word) => {
  const p = document.createElement("p");
  p.textContent = Object.keys(word);
  p.style.fontSize = `${size}px`;
  p.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  p.style.writingMode = state ? "vertical-rl" : "horizontal-tb";
  display.appendChild(p);
  size = size - 4;
  state = !state;
});