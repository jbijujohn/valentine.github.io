const continueBtn = document.getElementById("continueBtn");
const introScreen = document.getElementById("introScreen");
const valentineScreen = document.getElementById("valentineScreen");
const yesScreen = document.getElementById("yesScreen")

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const question = document.getElementById("question");

/* Show Valentine Screen */
continueBtn.addEventListener("click", () => {
  introScreen.classList.add("hidden");
  valentineScreen.classList.remove("hidden");
});

/* Yes Button */
yesBtn.addEventListener("click", () => {
  valentineScreen.classList.add("hidden")
  yesScreen.classList.remove("hidden")

  confetti({
    particleCount: 150,
    spread: 200,
    shapes: ["heart"],
    origin: { y: 0.6 }
  });

  setTimeout(() => {
  confetti({
    particleCount: 100,
    spread: 120,
    origin: { y: 0.4 }
  });
}, 300);
});

let yesSize = 1;

/* No Button Runs Away */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  
  // Grow YES button
  yesSize += 0.8;
  yesBtn.style.transform = `scale(${yesSize})`;
});
