// Typing effect for the intro text
const intro = document.querySelector('.intro');
const text = "I create accessible and practical technology solutions for communities.";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    intro.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}

typeEffect();
