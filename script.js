const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const question = document.getElementById("question");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "YAYYY!!! 🥰💖";
  message.innerHTML = "I knew you'd say yes 😘 Happy Valentine’s Day!";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
