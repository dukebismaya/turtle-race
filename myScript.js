// (C) 2025 Bismaya Jyoti Dalei All rights reserved.

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("creditName");
  if (!el) return;

  const text = "Code By Bismaya";
  const typeSpeed = 85;
  const deleteSpeed = 45;
  const pauseEnd = 1200;
  const pauseStart = 500;

  let i = 0;
  let dir = 1;

  function step() {
    el.textContent = text.slice(0, i);
    if (dir === 1) {
      if (i < text.length) {
        i++;
        setTimeout(step, typeSpeed);
      } else {
        setTimeout(() => { dir = -1; step(); }, pauseEnd);
      }
    } else {
      if (i > 0) {
        i--;
        setTimeout(step, deleteSpeed);
      } else {
        setTimeout(() => { dir = 1; step(); }, pauseStart);
      }
    }
  }
  step();
});