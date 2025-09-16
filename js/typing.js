const texts = ["Diseñador Web", "Programador Web", "Creativo Digital"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      type();
    }, 2000); // espera antes de borrar y volver a escribir
  } else {
    setTimeout(type, 150);
  }
})();
